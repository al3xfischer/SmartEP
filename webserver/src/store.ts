import logger from "./logger";
import jwt = require("jsonwebtoken");
import { createConnection, Connection, Repository } from "typeorm";
import {User} from "./entity/User";
import {Role} from "./entity/Role";

const uuid = require("uuid/v4");
const secret = "Cm37oreTmbKYgLer8VUl";

export default class Store {
  private connection: Connection;

  constructor() {
    this.getUserRole.bind(this);
    this.connectDb.bind(this);
    this.getUserUuid.bind(this);
    this.validateUserCredentials.bind(this);
  }

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

    if(this.connection){
      return true;
    }
    else{
      return false;
    }
  }

  public async getUserUuid(userName: String): Promise<String> {

    if (!userName) {
      return null;
    }

    const identifier: String = uuid();
    let repo = this.connection.getRepository(User);
    let user = await repo.findOne({ name: userName});
    user.uuid = identifier;
    repo.save(user);

    return identifier;
  }

  public async getUserRole(userName: String): Promise<String> {
    if (!userName) {
      return null;
    }

    let userRepo = this.connection.getRepository(User);
    let roleRepo = this.connection.getRepository(Role);
    let user: User = await userRepo.findOne({name: userName});

    if(user){
      let role = await roleRepo.findOne(user.roleId);
      return role ? role.name : null;
    }
    else{
      return null;
    }
  }

  public async validateUserCredentials(
    userName: String,
    hash: String
  ): Promise<Boolean> {
    if (!userName || !hash) {
      return false;
    }
    
    let repo: Repository<User> = this.connection.getRepository(User);
    let user: User = await repo.findOne({ name: userName});

    return user.keyword == hash;
  }

  public async getRole(token: string): Promise<string> {
    let payload: any = jwt.decode(token);
    let repo: Repository<User> = this.connection.getRepository(User);
    let user: User = await repo.findOne({uuid: payload.id}); 

    return user ? payload.role : null;
  }

  public createToken(role: String,uuid: String) {
    return jwt.sign(
      {id: uuid,role: role},
      secret,
      { expiresIn: "1d"}
    );
  }

}
