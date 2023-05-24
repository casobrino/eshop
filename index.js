import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/auth.js";

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Conection succed"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use("/api/users", router);

app.listen(process.env.MONGO_PORT || 3001, () => {
  console.log("Backend is running");
});
