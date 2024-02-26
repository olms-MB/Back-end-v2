import express from "express";
import userController from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/profile-setup", userController.profileSetup);
userRouter.post("/login", userController.login);

// edited router

export default userRouter;
