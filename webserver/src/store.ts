import { Db, MongoClient } from "mongodb";
import ConnectToDb from "./mongo";
import { Item } from "./models";
import logger from "./logger";
import jwt = require("jsonwebtoken");

const uuid = require("uuid/v4");
const secret = "Cm37oreTmbKYgLer8VUl";



export default class Store {
  private db: Db;
  private mysql      = require('mysql');
  private  connection = this.mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'smarteppw'
  });

  private client: MongoClient;

  constructor() {
    this.getUserUuid.bind(this);
    this.getUserRole.bind(this);
    this.validateUserCredentials.bind(this);
    this.connection.connect();
  }

  public async setupDb() {
    this.client = await ConnectToDb("webshop");
    this.db = this.client.db();
    logger.info("db ready");
  }

  public getUserUuid(userName: string): string {
    if (!userName) {
      return null;
    }

    const identifier: string = uuid();
    this.db
      .collection("users")
      .updateOne({ name: userName }, { $set: { uuid: identifier } })
      .catch(err => logger.info(err));

    return identifier;
  }

  public async getUserRole(userName: string): Promise<string> {
    if (!userName) {
      return null;
    }

    let user = await this.db.collection("users").findOne({ name: userName });

    if (user) {
      return user.role;
    } else {
      return null;
    }
  }

  public async validateUserCredentials(
    userName: string,
    hash: string
  ): Promise<boolean> {
    if (!userName || !hash) {
      return false;
    }
    let user = await this.db
      .collection("users")
      .findOne({ name: userName, password: hash });

    if (user) {
      return true;
    } else {
      return false;
    }
  }

  public async getPictures(): Promise<Item[]> {
    const data = (await this.db
      .collection("pictures")
      .aggregate([
        { $match: { sold: false } },
        { $sort: { _id: 1 } },
        { $project: { _id: 0, title: 1, description: 1, price: 1, path: 1 } }
      ])
      .toArray()) as Item[];

    return data;
  }

  public async getSoldPictures(): Promise<Item[]> {
    const data = (await this.db
      .collection("pictures")
      .aggregate([
        { $match: { sold: true } },
        { $project: { _id: 0, title: 1, description: 1, price: 1, path: 1 } }
      ])
      .toArray()) as Item[];

    return data;
  }

  public async sellItems(products: Item[]): Promise<Item[]> {
    let notSold: Item[] = [];

    for (let product of products) {
      let result = await this.db
        .collection("pictures")
        .findOneAndUpdate(
          { title: product.title, sold: false },
          { $set: { sold: true } }
        );

      if (!result.value) {
        notSold.push(product);
      }
    }

    return notSold;
  }

  public verifyToken(token: string): boolean {
    try {
      token.replace('""', "");
      jwt.verify(token, secret);
      return true;
    } catch (ex) {
      logger.info(ex);
      return false;
    }
  }

  public verifyAdminToken(token: string) {
    try {
      token.replace('""', "");
      let decoded: any = jwt.verify(token, secret);
      //Decoded === not modified and therefore not db check
      if (decoded.role === "admin") {
        return true;
      }
    } catch (ex) {
      logger.info(ex);
      return false;
    }
  }
}
