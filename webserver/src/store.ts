import logger from "./logger";
import jwt = require("jsonwebtoken");
import * as bcrypt from "bcrypt";
import { createConnection, Connection, Repository, InsertResult } from "typeorm";
import {User} from "./entity/User";
import {Role} from "./entity/Role";
import { Device } from "./entity/Device";
import { Action } from "./entity/Action";
import { Log } from "./entity/Log";
import { userInfo } from "os";

const uuid = require("uuid/v4");
const secret = "Cm37oreTmbKYgLer8VUl";

/**
 * The result of a hash with the salt. [ hash , salt  ]
 */
export interface IHashResult {
  hash: string,
  salt: string
}

export default class Store {
  
  /**
   * The database connection.
   *
   * @private
   * @type {Connection}
   * @memberof Store
   */
  private connection: Connection;

  /**
   * The action repostiory.
   *
   * @private
   * @type {Repository<Action>}
   * @memberof Store
   */
  private actionRepo: Repository<Action>;

  /**
   * The log repository.
   *
   * @private
   * @type {Repository<Log>}
   * @memberof Store
   */
  private logRepo: Repository<Log>;

  /**
   * The user repository.
   *
   * @private
   * @type {Repository<User>}
   * @memberof Store
   */
  public userRepo: Repository<User>;

  /**
   * The role repository.
   *
   * @private
   * @type {Repository<Role>}
   * @memberof Store
   */
  private roleRepo: Repository<Role>;

  /**
   * The device repository.
   *
   * @private
   * @type {Repository<Device>}
   * @memberof Store
   */
  private deviceRepo: Repository<Device>;

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
  public async connectDb() : Promise<Boolean>{
    this.connection = await createConnection({
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

    if(!!this.connection){
      this.roleRepo = this.connection.getRepository(Role);
      this.userRepo = this.connection.getRepository(User);
      this.deviceRepo = this.connection.getRepository(Device);
      this.logRepo = this.connection.getRepository(Log);
      this.actionRepo = this.connection.getRepository(Action);
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
  public async getUserUuid(userName: string): Promise<string> {

    if (!userName) {
      return null;
    }

    const identifier: string = uuid();
    let user = await this.userRepo.findOne({name: userName});
    user.uuid = identifier;
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
  public async getUserRole(userName: string): Promise<string> {
    if (!userName) {
      return null;
    }
    let user = await this.handleError(this.userRepo.findOne({name: userName}));
    if(user){
      return user.role ? user.role.name : null;
    }
    else{
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
  public async validateUserCredentials(
    userName: string,
    key: string
  ): Promise<Boolean> {
    if (!userName || !key) {
      return false;
    }
    
    let user: User = await this.userRepo.findOne({ name: userName});
    let hashResult: IHashResult = await this.hash(key,user.salt);
    return user.keyword == hashResult.hash;
  }

  /**
   * Creates a new user and saves it in the database.
   *
   * @param {string} name
   * @param {string} key
   * @returns {Promise<boolean>}
   * @memberof Store
   */
  public async createUser(name: string, key: string): Promise<boolean> {
    let user: User = new User();

    let roleId: number = (await this.roleRepo.findOne({name: "user"})).id;

    user.name = name;
    user.roleId = roleId;
    let hashResult: IHashResult = await this.hash(key);
    user.keyword = hashResult.hash;
    user.salt = hashResult.salt;
    user.uuid = uuid();

    let result: InsertResult = await this.handleError(this.userRepo.insert(user));

    // return whether the insert was succesfull;
    return !!result;
  }

  /**
   * Get all devices.
   *
   * @returns {Promise<Devices[]>}
   * @memberof Store
   */
  public async getDevices() : Promise<Device[]> {
    return this.deviceRepo.find();
  }

  /**
   * Gets all actions that the user have performed.
   *
   * @returns {Promise<Action[]>}
   * @memberof Store
   */
  public async getActions() : Promise<Action[]> {
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
  public async addAction(operation: string, userId: number) : Promise<boolean> {
    let action = new Action();

    action.action = operation;
    action.stamp = new Date();
    action.userId = userId;
    let result = this.handleError(this.actionRepo.insert(action));
    return !!result;
  }

  public async logMessage(message: string, userId?: number) : Promise<boolean> {
    let log = new Log();

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
  public async getRole(token: string): Promise<string> {
    // get the decoded payload ignoring signature, no secretOrPrivateKey needed
    // use verify instead 
    // https://www.npmjs.com/package/jsonwebtoken
    let payload: any = jwt.decode(token);
    let user: User = await this.userRepo.findOne({uuid: payload.id}); 

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
  public createToken(role: string,uuid: string) {
    return jwt.sign(
      {id: uuid,role: role},
      secret,
      { expiresIn: "1d"}
    );
  }

  /**
   * Addes error handeling to the given promise.
   *
   * @template T
   * @param {Promise<T>} action
   * @returns {(Promise<void | T>)}
   * @memberof Store
   */
  private async handleError<T>(action: Promise<T>) : Promise<T> {
    
    let result = await action.catch(error => {
      console.log(`error: ${error}`);
      this.logRepo.insert(new Log({ message: `error: ${error}`, stamp: new Date() }));
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
  private hash(text: string, salt?: string): Promise<IHashResult> {
    return new Promise<IHashResult>((resolve,reject) => {
      if(!salt) {
        salt = bcrypt.genSaltSync(15);
      }

      bcrypt.hash(text,salt,(err,hash) => {
        if (err) reject(err);
        resolve({ hash, salt});
      });
    }); 
  }
}
