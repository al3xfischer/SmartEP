"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const store_1 = require("./store");
const logger_1 = require("./logger");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const morgan = require("morgan");
const secret = "Cm37oreTmbKYgLer8VUl";
const allowedExt = [
    ".js",
    ".ico",
    ".css",
    ".png",
    ".jpg",
    ".woff2",
    ".woff",
    ".ttf",
    ".svg",
];
class Server {
    constructor(userStore) {
        this.userStore = userStore;
        //Setup
        this.app = express();
        this.app.use(bodyParser.json());
        //Middleware
        this.app.all("/images/*", this.verifyAccess);
        //Publicly accessible
        this.app.use("/api/images", express.static("images"));
        this.app.post("/api/login", this.loginRoute.bind(this));
        this.app.get("*", this.webContent.bind(this));
        this.verifyAccess.bind(this);
        //Logger
        this.app.use(morgan("combined", { stream: logger_1.default.stream }));
        //Port
        this.app.listen(4000);
        this.test.bind(this);
        this.test();
    }
    // TODO: löschen
    async test() {
        let result = await this.userStore.connectDb();
        // let added = await this.userStore.createUser("admin","admin","admin");
        // console.log(`added: ${added}`);
        console.log(`Connected:  ${result}`);
        let user = await this.userStore.userRepo.findOne({ name: "admin" });
        console.log(user);
    }
    // Source: https://blog.cloudboost.io/run-your-angular-app-on-nodejs-c89f1e99ddd3
    webContent(req, res) {
        console.log("gotit;");
        if (allowedExt.filter((ext) => req.url.indexOf(ext) > 0).length > 0) {
            res.sendFile(path.resolve(`../frontend/dist/picshop/${req.url}`));
        }
        else {
            res.sendFile(path.resolve("../frontend/dist/picshop/index.html"));
        }
    }
    verifyAccess(req, res, next) {
        try {
            if (req.headers["authorization"] && this.userStore.getRole(JSON.parse(req.headers["authorization"]))) {
                next();
            }
            else if (req.query.bearer &&
                this.userStore.getRole(JSON.parse(req.query.bearer))) {
                next();
            }
            else {
                res.status(401).send();
            }
        }
        catch (err) {
            res.status(401).send(err);
        }
    }
    async loginRoute(req, res) {
        logger_1.default.info("Body: " + JSON.stringify(req.body));
        if (req.body &&
            req.body.user &&
            req.body.pw &&
            (await this.userStore.validateUserCredentials(req.body.user, req.body.pw))) {
            let uuid = await this.userStore.getUserUuid(req.body.user);
            let userRole = await this.userStore.getUserRole(req.body.user);
            let token = await this.userStore.createToken(userRole, uuid);
            res.status(200).send(token);
        }
        else {
            res.status(401).send();
        }
    }
}
exports.Server = Server;
new Server(new store_1.default());
//# sourceMappingURL=index.js.map