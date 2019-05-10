import * as express from "express";
import * as path from "path";
import Store, { ITokenContent } from "./store";
import logger from "./logger";
import { User } from "./entity/User";

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

export class Server {
  public app: express.Application;

  constructor(private userStore: Store) {
    //Setup
    this.userStore.connectDb();
    this.app = express();
    this.app.use(bodyParser.json());
    //Publicly accessible
    this.app.post("/api/login", this.loginRoute.bind(this));
    this.app.get("/api/devices", this.getDevices.bind(this));
    this.app.get("/api/actions", this.getActions.bind(this));
    this.app.get("*",this.webContent.bind(this));
    // this.verifyAccess.bind(this);
    //Logger
    this.app.use(morgan("combined", { stream: logger.stream }));
    //Port
    this.app.listen(4000);
    this.test.bind(this);
    // this.test();
  }

  // TODO: löschen
  private async test(): Promise<void> {
    let result = await this.userStore.connectDb();
    // let added = await this.userStore.createUser("admin","admin");
    // let added1 = await this.userStore.createUser("peter","peter");
    // let added2 = await this.userStore.createUser("kevin","kevin");
    // let added3 = await this.userStore.createUser("alex","alex");
    // console.log(`added: ${added}`);
    console.log(`Connected:  ${result}`);
  }

    // Source: https://blog.cloudboost.io/run-your-angular-app-on-nodejs-c89f1e99ddd3
    private webContent(req: express.Request, res: express.Response) {
      if (
        allowedExt.filter((ext: string) => req.url.indexOf(ext) > 0).length > 0
      ) {
        res.sendFile(
          path.resolve(`../frontend/dist/smartep/${req.url}`),
        );
      } else {
        res.sendFile(
          path.resolve("../frontend/dist/smartep/index.html"),
        );
      }
    }

  public async getDevices(req: express.Request, res: express.Response) : Promise<void> {
    let access = await this.isAuthorized(req);
    if(access == 200) {
      let devices = await this.userStore.getDevices();
      res.status(access).send(devices);
    }
    else{
      res.status(access).send();
    }
  }

  public async getActions(req: express.Request, res: express.Response) : Promise<void> {
    let access = await this.isAdmin(req);
    if(access == 200) {
      let actions = await this.userStore.getActions();
      res.status(access).send(actions);
    }
    else{
      res.status(access).send();
    }
  }

  private async loginRoute(req: express.Request, res: express.Response) {
    logger.info("Body: " + JSON.stringify(req.body));
    if (
      req.body &&
      req.body.user &&
      req.body.pw &&
      (await this.userStore.validateUserCredentials(req.body.user, req.body.pw))
    ) {
      let uuid = await this.userStore.getUserUuid(req.body.user);
      let userRole = await this.userStore.getUserRole(req.body.user);
      let token = await this.userStore.createToken(userRole,uuid);
      res.status(200).send(JSON.stringify(token));
    } else {
      res.status(401).send();
    }
  }

  private async isAuthorized(request: express.Request): Promise<number> {
    let token = request.headers.authorization ? request.headers.authorization : null;
    if (! token ) return new Promise((resolve,_) => {resolve(401)});

    let tokenContent : ITokenContent = this.userStore.decode(token);
    let exists: boolean = await this.userStore.exists(tokenContent.uuid);

    return exists ? 200 : 401 ;
  }

  private async isAdmin(request: express.Request): Promise<number> {
    let token = request.headers.authorization ? request.headers.authorization : null;
    if (! token ) return new Promise((resolve,_) => {resolve(401)});

    let tokenContent : ITokenContent = this.userStore.decode(token);
    let exists : boolean = await this.userStore.exists(tokenContent.uuid);

    return exists && tokenContent.role == "admin" ? 200 : 401;
  }
}

new Server(new Store());
