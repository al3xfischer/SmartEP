import * as express from "express";
import * as path from "path";
import Store from "./store";
import { Item } from "./models";
import logger from "./logger";

const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const morgan = require("morgan");

const secret = "Cm37oreTmbKYgLer8VUl";

export class Server {
  public app: express.Application;

  constructor(private userStore: Store) {
    userStore.setupDb();
    //Setup
    this.app = express();
    this.app.use(bodyParser.json());
    //Middleware
    this.app.all("/images/*", this.verifyAccess);
    this.app.use(this.logRequest);
    //Publicly accessible
    this.app.use("/api/images", express.static("images"));
    this.app.get("/api/products", this.getProducts.bind(this));
    this.app.get("/api/soldproducts", this.getSoldProducts.bind(this));
    this.app.post("/api/login", this.loginRoute.bind(this));
    this.app.post("/api/buy", this.sellItems.bind(this));
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
    //Bindings
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

  private async sellItems(req: express.Request, res: express.Response) {
    try {
      const token = req.headers["authorization"];
      if (token && this.userStore.verifyToken(JSON.parse(token))) {
        const products = req.body as Item[];

        if (products) {
          let notSold: Item[] = await this.userStore.sellItems(products);
          res.status(200).send(notSold);
        } else {
          logger.info(JSON.stringify(req.body));
          res.status(400);
        }
      } else {
        res.status(401).send();
      }
    } catch (ex) {
      res.status(401).send();
    }
  }

  private async getProducts(req: express.Request, res: express.Response) {
    try {
      const token = req.headers["authorization"];
      if (token && this.userStore.verifyToken(JSON.parse(token))) {
        let products: Item[] = await this.userStore.getPictures();

        if (!req.query.batch) {
          res.status(200).send(products.slice(0, 20) as Item[]);
        } else {
          let batchNumber: number = req.query.batch;
          let firstIndex = batchNumber * 20;
          let lastIndex = firstIndex + 20;
          let result = products.slice(firstIndex, lastIndex) as Item[];
          res.status(200).send(result);
        }
      } else {
        res.status(401).send();
      }
    } catch (ex) {
      res.status(401).send();
    }
  }

  private async getSoldProducts(req: express.Request, res: express.Response) {
    try {
      let products: Item[] = await this.userStore.getSoldPictures();
      res.status(200).send(products);
    } catch (ex) {
      res.send(ex);
    }
  }

  private logRequest(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    logger.info(req.url);
    next();
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
