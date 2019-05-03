import { MongoClient } from "mongodb";

export default async function ConnectToDb(
  dbName: string
): Promise<MongoClient> {
  const url = `mongodb://localhost:27017/${dbName}`;
  return await MongoClient.connect(
    url,
    { useNewUrlParser: true }
  );
}
