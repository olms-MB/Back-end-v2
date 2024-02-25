import "dotenv/config";
import express from "express";
import { connect } from "mongoose";
import userRouter from "./Routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);

connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connection established...🔗");
    app.listen(process.env.PORT, () => {
      console.log(`Server running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("❌❌ Error connecting to server ❌❌", err));
