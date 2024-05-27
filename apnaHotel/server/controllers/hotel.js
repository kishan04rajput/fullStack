import Hotel from "../Models/Hotel.js";

export const createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);
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
    const Hotels = await Hotel.find();
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
