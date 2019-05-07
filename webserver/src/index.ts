import * as express from "express";
import * as path from "path";
import Store from "./store";
import logger from "./logger";

const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const morgan = require("morgan");

const secret = "Cm37oreTmbKYgLer8VUl";

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
    this.app.get(
      "/pictures",
      express.static(path.join(__dirname, "../../frontend/dist/picshop/"))
    );
    this.app.get(
      "*",
      express.static(path.join(__dirname, "../../frontend/dist/picshop/"))
    );
    this.verifyAccess.bind(this);
    //Logger
    this.app.use(morgan("combined", { stream: logger.stream }));
    //Port
    this.app.listen(4000);
    this.test.bind(this);
    this.test();
  }

  private async test(): Promise<void> {
    await this.userStore.connectDb();
    let role = await this.userStore.getUserRole("alex");
    console.log(role);
  }

  private verifyAccess(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      if (
        req.headers["authorization"] &&
        this.userStore.verifyToken(JSON.parse(req.headers["authorization"]))
      ) {
        next();
      } else if (
        req.query.bearer &&
        this.userStore.verifyToken(JSON.parse(req.query.bearer))
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
      let userId = this.userStore.getUserUuid(req.body.user);
      let userRole = await this.userStore.getUserRole(req.body.user);

      let jwtToken = jwt.sign(
        {
          id: userId,
          role: userRole
        },
        secret,
        {
          expiresIn: "1d"
        }
      );

      res.status(200).send({ token: JSON.stringify(jwtToken) });
    } else {
      res.status(401).send();
    }
  }
}

new Server(new Store());
