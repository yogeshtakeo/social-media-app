import bodyParser from "body-parser";
import express from "express";
import PostRouter from "./routes/Posts.js";
import connectDatabase from "./database/database_connection.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

connectDatabase();

app.use(bodyParser.json());

app.use("/posts", PostRouter);

app.listen(8000, () => {
  console.log("Server Listenning");
});
