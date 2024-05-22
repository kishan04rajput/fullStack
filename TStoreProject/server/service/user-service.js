const UserProfile = require("../schemas/UserSchema");
const InventoryProfile = require("../schemas/InventorySchema");

async function userSignUp(userName, password) {
  try {
    const user = new UserProfile({
      userName: userName,
      hashedPassword: password,
    });
    user.save();
  } catch (err) {
    console.log(err);
  }
}

async function inventoryAdd(shirtImage, shirtSize, shirtPrice) {
  try {
    const shirt = new InventoryProfile({
      shirtImage: shirtImage,
      shirtSize: shirtSize,
      shirtPrice: shirtPrice,
    });
    shirt.save();
  } catch (err) {
    console.log(err);
  }
}

async function userLogin(temp) {
  // console.log(temp);
  return UserProfile.find({ userName: temp });
}

async function getShirts() {
  // console.log(temp);
  return InventoryProfile.find();
}

module.exports = [userSignUp, userLogin, inventoryAdd, getShirts];
