import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

// this express post() method can accept middelwares and executes them one by one
router.route("/register").post(
  //upload.fields is a middelware from multer
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),

  //this registerUser is my middleware that uploads imgs to
  // cloudinary and then does a db call to create a user
  registerUser
);

export default router;
