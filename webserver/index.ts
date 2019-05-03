import * as express from "express";
import * as path from "path";

const fs = require("fs");
const bodyParser = require('body-parser');

const jwt = require("jsonwebtoken");
const SHA256 = require("crypto-js/sha256");
const key: string = "gh78uwehao12hbzwubh4qugigf7oqpgpaya2wtqb"

class ArtItemInfo {
    public name: string;
    public imgSource: string;
    public description: string;
    public price: number;

    constructor(name: string, imgSource: string, description: string, price: number) {
        this.name = name;
        this.imgSource = imgSource;
        this.description = description;
        this.price = price;
    }
}

class User {
    public name: string;
    public passWordHash: string;
    public role: string;

    constructor(name: string, hash: string, role: string) {
        this.name = name;
        this.passWordHash = hash;
        this.role = role;
    }    
}

export class Server {    
    public app: express.Application;

    private artItems: ArtItemInfo[]

    private soldItems: ArtItemInfo[]

    private users: User[]

    constructor() {     
        this.app = express();        
        this.app.use(bodyParser.json());
        this.app.get('*', express.static(path.join(__dirname, "../PictureShop/dist/PictureShop")));      
        this.app.get('/api/artitems', this.itemEPHandler.bind(this))
        this.app.post('/api/login', this.loginEPHandler.bind(this))
        this.app.post('/api/buy', this.buyEPHandler.bind(this))
        this.app.get('/api/admin', this.adminEPHandler.bind(this))
        this.app.use('/art', express.static('art'))

        this.app.listen(4200);    
        
        this.soldItems = [];  
        this.artItems = [];      
        this.getArtItemsFromJson();

        this.users = [];
        this.RegisterUser("user", SHA256("resu").toString(), "user");
        this.RegisterUser("admin", SHA256("admin").toString(), "admin");
        this.RegisterUser("scott", SHA256("tiger").toString(), "user");
    }

    private RegisterUser(userName: string, passWord: string, role: string)
    {
        this.users.push(new User(userName, passWord, role));
    }

    private getArtItemsFromJson() {
        fs.readFile("artInfo.json", 'utf-8', (err: any, data: any) => 
        {
            if (err) {
                console.log(err);
                return;
            }

            this.artItems = JSON.parse(data) as ArtItemInfo[];
        });
    }

    private itemEPHandler(req: express.Request, res: express.Response) {
        res.json(this.artItems as ArtItemInfo[]);
    }

    private buyEPHandler(req: express.Request, res: express.Response) {
        if(req.headers.authorization != 'undefined' && this.verifyAccess(JSON.parse(req.headers.authorization), 'user')) {
            req.body.forEach((element: any) => {
                if(this.artItems.some(item => item.name == element.name && item.imgSource == element.imgSource)) {
                    let index = this.artItems.findIndex(item => item.name == element.name && item.imgSource == element.imgSource);
                    
                    this.soldItems.push(this.artItems[index]);
                    this.artItems.splice(index,1);
                }
            });

            res.status(200).send();
        }      
        else
        {
            res.status(401).send()
        }  
    }

    private loginEPHandler(req: express.Request, res: express.Response) {
        if(this.users.some(u => u.name == req.body.user && u.passWordHash == req.body.password)) {
            let user = this.users.find(u => u.name == req.body.user && u.passWordHash == req.body.password)
            let token = jwt.sign({ name: user.name, role: user.role }, key, {
                expiresIn: '2h'
            });

            res.status(200).send({token : JSON.stringify(token)});
        }
        else
        {
            res.status(401).send();
        }
    }

    private adminEPHandler(req: express.Request, res: express.Response) {
        if(req.headers.authorization != 'undefined' && this.verifyAccess(JSON.parse(req.headers.authorization), 'admin')) {
            res.status(200).send(this.soldItems as ArtItemInfo[]);
        }      
        else
        {
            res.status(401).send()
        }  
    }

    private verifyAccess(token: string, userRole: string): boolean {
        try {
            let message = jwt.verify(token, key);
            if (message.role == userRole) {
                return true;
            }
        }
        catch {
            return false;
        }
    }
}

new Server();