"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
async function ConnectToDb(dbName) {
    const url = `mongodb://localhost:27017/${dbName}`;
    return await mongodb_1.MongoClient.connect(url, { useNewUrlParser: true });
}
exports.default = ConnectToDb;
//# sourceMappingURL=mongo.js.map