import express from "express";
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// //verifyToken
// router.get("/checkAuthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user you are logged in!");
// });

// //verifyUser
// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user you are logged in and can delete your account!!");
// });

// //checkAdmin
// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello user you are logged in and can delete all accounts!!");
// });

//update
router.put("/:id", verifyUser, updateUser);

//delete
router.delete("/:id", verifyUser, deleteUser);

//get
router.get("/:id", verifyUser, getUser);

//getAll
router.get("/", verifyAdmin, getAllUser);

export default router;
