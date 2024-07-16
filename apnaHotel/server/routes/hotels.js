import express from "express";
import {
  bookHotel,
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  searchHotel,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//create`
router.post("/", verifyAdmin, createHotel);

//update
router.put("/:id", verifyAdmin, updateHotel);

//delete
router.delete("/:id", verifyAdmin, deleteHotel);

//get
router.get("/find/:id", getHotel);

//getAll
router.get("/", getAllHotel);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

router.post("/book/:hotelId", verifyToken, bookHotel);

router.get("/search", searchHotel);

export default router;
