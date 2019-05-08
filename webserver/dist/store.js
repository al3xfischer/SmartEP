"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
const Role_1 = require("./entity/Role");
const Device_1 = require("./entity/Device");
const Action_1 = require("./entity/Action");
const Log_1 = require("./entity/Log");
const uuid = require("uuid/v4");
const secret = "Cm37oreTmbKYgLer8VUl";
class Store {
    /**
     * Creates an instance of Store.
     * @memberof Store
     */
    constructor() {
        // Bindings
        this.connectDb.bind(this);
        this.getUserRole.bind(this);
        this.getUserUuid.bind(this);
        this.createToken.bind(this);
        this.createUser.bind(this);
        this.getRole.bind(this);
        this.validateUserCredentials.bind(this);
        this.hash.bind(this);
    }
    /**
     * Connect to database.
     *
     * @returns {Promise<Boolean>}
     * @memberof Store
     */
    async connectDb() {
        this.connection = await typeorm_1.createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "smarteppw",
            database: "smartep",
            entities: [
                __dirname + "/entity/*.ts"
            ],
            logging: false
        });
        if (!!this.connection) {
            this.roleRepo = this.connection.getRepository(Role_1.Role);
            this.userRepo = this.connection.getRepository(User_1.User);
            this.deviceRepo = this.connection.getRepository(Device_1.Device);
            this.logRepo = this.connection.getRepository(Log_1.Log);
            this.actionRepo = this.connection.getRepository(Action_1.Action);
        }
        // return whether the connection got initialized
        return !!this.connection;
    }
    /**
     * Creates a new uuid and save it in the database.
     *
     * @param {string} userName
     * @returns {Promise<string>}
     * @memberof Store
     */
    async getUserUuid(userName) {
        if (!userName) {
            return null;
        }
        const identifier = uuid();
        let user = await this.userRepo.findOne({ name: userName });
        user.uuid = identifier;
        console.log(user);
        this.userRepo.save(user);
        return identifier;
    }
    /**
     * Gets the role for the userName.
     *
     * @param {string} userName
     * @returns {Promise<string>}
     * @memberof Store
     */
    async getUserRole(userName) {
        if (!userName) {
            return null;
        }
        console.log("before: finduserfor role");
        console.log(userName);
        // let user = await this.userStore.userRepo.findOne({name: "admin"});
        let user = await this.userRepo.findOne({ name: "admin" });
        console.log("done role for user");
        if (user) {
            return user.role ? user.role.name : null;
        }
        else {
            return null;
        }
    }
    /**
     * Validates the user credentials.
     * Key in clear text.
     *
     * @param {string} userName
     * @param {string} hash
     * @returns {Promise<Boolean>}
     * @memberof Store
     */
    async validateUserCredentials(userName, key) {
        if (!userName || !key) {
            return false;
        }
        let user = await this.userRepo.findOne({ name: userName });
        let hashResult = await this.hash(key, user.salt);
        return user.keyword == hashResult.hash;
    }
    /**
     * Creates a new user and saves it in the database.
     *
     * @param {string} name
     * @param {string} key
     * @param {string} role
     * @returns {Promise<boolean>}
     * @memberof Store
     */
    async createUser(name, key, role) {
        let user = new User_1.User();
        let roleId = (await this.roleRepo.findOne({ name: "user" })).id;
        user.name = name;
        user.roleId = roleId;
        let hashResult = await this.hash(key);
        user.keyword = hashResult.hash;
        user.salt = hashResult.salt;
        user.uuid = uuid();
        let result = await this.handleError(this.userRepo.insert(user));
        // return whether the insert was succesfull;
        return !!result;
    }
    /**
     * Get all devices.
     *
     * @returns {Promise<Devices[]>}
     * @memberof Store
     */
    async getDevices() {
        return this.deviceRepo.find();
    }
    /**
     * Gets all actions that the user have performed.
     *
     * @returns {Promise<Action[]>}
     * @memberof Store
     */
    async getActions() {
        return this.actionRepo.find();
    }
    /**
     * Add an action to the database.
     *
     * @param {string} operation
     * @param {string} uuid
     * @returns {Promise<void>}
     * @memberof Store
     */
    async addAction(operation, userId) {
        let action = new Action_1.Action();
        action.action = operation;
        action.stamp = new Date();
        action.userId = userId;
        let result = this.handleError(this.actionRepo.insert(action));
        return !!result;
    }
    async logMessage(message, userId) {
        let log = new Log_1.Log();
        log.message = message;
        log.stamp = new Date();
        log.userId = userId;
        let result = await this.handleError(this.logRepo.insert(log));
        return !!result;
    }
    /**
     * Extracts the role from a fiven token.
     * !!!! No check included whether the token was manipulated !!!!!
     *
     * @param {string} token
     * @returns {Promise<string>}
     * @memberof Store
     */
    async getRole(token) {
        // get the decoded payload ignoring signature, no secretOrPrivateKey needed
        // use verify instead 
        // https://www.npmjs.com/package/jsonwebtoken
        let payload = jwt.decode(token);
        let repo = this.connection.getRepository(User_1.User);
        let user = await repo.findOne({ uuid: payload.id });
        return user ? payload.role : null;
    }
    /**
     * Creates a new token signed with the store secret.
     *
     * @param {string} role
     * @param {string} uuid
     * @returns
     * @memberof Store
     */
    createToken(role, uuid) {
        return jwt.sign({ id: uuid, role: role }, secret, { expiresIn: "1d" });
    }
    /**
     * Addes error handeling to the given promise.
     *
     * @template T
     * @param {Promise<T>} action
     * @returns {(Promise<void | T>)}
     * @memberof Store
     */
    async handleError(action) {
        let result = await action.catch(error => {
            console.log(`error: ${error}`);
            this.logRepo.insert(new Log_1.Log({ message: `error: ${error}`, stamp: new Date() }));
        });
        return result ? result : null;
    }
    /**
     * Calculates the hash from a given text.
     *
     * @private
     * @param {string} text
     * @param {string} [salt]
     * @returns {Promise<IHashResult>}
     * @memberof Store
     */
    hash(text, salt) {
        return new Promise((resolve, reject) => {
            if (!salt) {
                salt = bcrypt.genSaltSync(15);
            }
            bcrypt.hash(text, salt, (err, hash) => {
                if (err)
                    reject(err);
                resolve({ hash, salt });
            });
        });
    }
}
exports.default = Store;
//# sourceMappingURL=store.js.map