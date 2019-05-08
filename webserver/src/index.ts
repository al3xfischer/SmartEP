import * as express from "express";
import * as path from "path";
import Store from "./store";
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
    this.app = express();
    this.app.use(bodyParser.json());
    //Middleware
    this.app.all("/images/*", this.verifyAccess);
    //Publicly accessible
    this.app.use("/api/images", express.static("images"));
    this.app.post("/api/login", this.loginRoute.bind(this));
    this.app.get("*",this.webContent.bind(this));
    this.verifyAccess.bind(this);
    //Logger
    this.app.use(morgan("combined", { stream: logger.stream }));
    //Port
    this.app.listen(4000);
    this.test.bind(this);
    this.test();
  }

  // TODO: löschen
  private async test(): Promise<void> {
    let result = await this.userStore.connectDb();
    // let added = await this.userStore.createUser("admin","admin","admin");
    // console.log(`added: ${added}`);
    console.log(`Connected:  ${result}`);
    let user : User = await this.userStore.userRepo.findOne({name: "admin"});
    console.log(user);
  }

    // Source: https://blog.cloudboost.io/run-your-angular-app-on-nodejs-c89f1e99ddd3
    private webContent(req: express.Request, res: express.Response) {
      console.log("gotit;");
      if (
        allowedExt.filter((ext: string) => req.url.indexOf(ext) > 0).length > 0
      ) {
        res.sendFile(
          path.resolve(`../frontend/dist/picshop/${req.url}`),
        );
      } else {
        res.sendFile(
          path.resolve("../frontend/dist/picshop/index.html"),
        );
      }
    }

  private verifyAccess(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      if (
        req.headers["authorization"] && this.userStore.getRole(JSON.parse(req.headers["authorization"]))
      ) {
        next();
      } else if (
        req.query.bearer &&
        this.userStore.getRole(JSON.parse(req.query.bearer))
      ) {
        next();
      } else {
        res.status(401).send();
      }
    } catch (err) {
      res.status(401).send(err);
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
      console.log("done login");
      console.log(token);
      res.status(200).send(JSON.stringify(token));
    } else {
      res.status(401).send();
    }
  }
}

new Server(new Store());
