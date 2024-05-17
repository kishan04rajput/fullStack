const mongoose = require("../db");

const InventorySchema = new mongoose.Schema({
  shirtImage: {
    type: String,
    require: true,
    // unique: true,
  },
  shirtSize: {
    type: String,
    require: true,
  },
  shirtPrice: {
    type: String,
    require: true,
  },
});

const InventoryModel = new mongoose.model("Inventory", InventorySchema);

module.exports = InventoryModel;
