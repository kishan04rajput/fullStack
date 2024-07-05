import Hotel from "../Models/Hotel.js";
import User from "../Models/User.js";

export const createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);
  console.log(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel deleted successfully!");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findOne({ _id: req.params.id });
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllHotel = async (req, res) => {
  try {
    const Hotels = await Hotel.find().limit(2);
    res.status(200).json(Hotels);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const countByCity = async (req, res) => {
  const cities = req.query.cities.split(",");
  // console.log(cities);
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    // console.log(list);
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const countByType = async (req, res) => {
  // const = req.query.cities.split(",");
  // console.log(cities);
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    res.status(200).jason([
      {
        type: "hotel",
        count: hotelCount,
      },
    ]);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const bookHotel = async (req, res) => {
  const { hotelId } = req.params;
  const userId = req.user.id; // Extracted from decoded JWT token

  try {
    // Update user's booking array
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Example: Adding hotelId to user's booking array
    user.booking.push(hotelId);
    await user.save();

    res.status(200).json({ message: "Booking successful." });
  } catch (error) {
    console.error("Error booking hotel:", error.message);
    res
      .status(500)
      .json({ message: "Booking failed. Please try again later." });
  }
};
