const mongoose = require("../db");

const userProfileSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    require: true,
  },
  // cart: {
  //   type: Array,
  //   default: [],
  // },
  // order: {
  //   type: Array,
  //   default: [],
  // },
  role: {
    type: String,
    default: "visitor",
  },
});

const UserProfile = new mongoose.model("UserProfile", userProfileSchema);

module.exports = UserProfile;
