import * as mongodb from "mongodb";
import { User } from "./user";

export const collections: {
  users?: mongodb.Collection<User>;
} = {};

export async function connectToDatabase(uri: string) {
  const client = new mongodb.MongoClient(uri);
  await client.connect();

  const db = client.db("currencyConverter");
  await applySchemaValidation(db);

  const usersCollection = db.collection<User>("users");
  collections.users = usersCollection;
}

async function applySchemaValidation(db: mongodb.Db) {
  const jsonSchema = {
    $jsonSchema: {
      bsonType: "object",
      required: ["email", "password"],
      additionProperties: false,
      properties: {
        _id: {},
        email: {
          bsonType: "string",
          description: "'email' is required and is a string",
        },
        password: {
          bsonType: "string",
          description: "'password' is required and is a string",
          minLength: 8,
        },
      },
    },
  };
}
