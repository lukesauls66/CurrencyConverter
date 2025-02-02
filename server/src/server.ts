import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectToDatabase } from "./database";
import { userRouter } from "./user.routes";

dotenv.config();

const { ATLAS_URI } = process.env;

if (!ATLAS_URI) {
  console.error("No ATLAS_URI env variable has been defined in config.env");
  process.exit(1);
}

connectToDatabase(ATLAS_URI)
  .then(() => {
    const app = express();
    app.use(cors());

    app.use("/users", userRouter);

    app.listen(5200, () => {
      console.log("Server is listening on port 5200");
    });
  })
  .catch((error) => console.error(error));
