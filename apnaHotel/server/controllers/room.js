import Hotel from "../Models/Hotel.js";
import Room from "../Models/Room.js";

export const createRoom = async (req, res, next) => {
  const newRoom = new Room(req.body);
  const hotelId = req.params.hotelId;
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      res.send(err);
    }
    res.json(savedRoom);
  } catch (err) {
    res.send(err);
  }
};

export const updateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteRoom = async (req, res) => {
  const hotelId = req.params.hotelId;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      res.send(err);
    } 
    res.status(200).json("Room deleted successfully!");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getRoom = async (req, res) => {
  try {
    const room = await Room.findOne({ _id: req.params.id });
    res.status(200).json(room);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllRoom = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    res.status(500).json(err);
  }
};
