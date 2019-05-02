import bodyParser = require("body-parser");
import express, { Application } from "express";
import path = require("path");
const compression = require("compression");

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
  private app: Application;

  constructor() {
    // Setup
    this.app = express();
    this.app.use(bodyParser.json({ limit: "5mb" }));
    this.app.use(compression());
    // Endpoints
    // this.app.post("/api/register", this.registerUser.bind(this));
    this.app.get("*", this.webContent.bind(this));
    // Port
    this.app.listen(8080);
  }

  // Source: https://blog.cloudboost.io/run-your-angular-app-on-nodejs-c89f1e99ddd3
  private webContent(req: express.Request, res: express.Response) {
    if (allowedExt.filter((ext: string) => req.url.indexOf(ext) > 0).length > 0) 
    {
      res.sendFile(
        path.resolve(`../frontend/dist/frontend/${req.url}`),
      );
    } else {
      res.sendFile(
        path.resolve("../frontend/dist/frontend/index.html"),
      );
    }
  }
}

const server = new Server();