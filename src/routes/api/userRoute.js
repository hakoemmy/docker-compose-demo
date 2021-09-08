import express from "express";
import UserController from "../../controllers/UserController";


const userRouter = express.Router();

userRouter.post(
    "/",
    UserController.create
  );
userRouter.get(
    "/",
    UserController.get
  );
userRouter.patch(
    "/:userId",
    UserController.update
  );
  userRouter.delete(
    "/:userId",
    UserController.delete
  );

export default userRouter;
