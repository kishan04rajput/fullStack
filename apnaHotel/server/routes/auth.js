import express from "express";
import {
  createNewUser,
  deleteUser,
  getAllUser,
  login,
} from "../controllers/auth.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/register", createNewUser);
router.post("/login", login);
router.delete("/:id", verifyAdmin, deleteUser);
router.get("/", verifyAdmin, getAllUser);

export default router;
