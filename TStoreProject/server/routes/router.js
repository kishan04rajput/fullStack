const express = require("express");
const router = express.Router();

const [
  userSignUp,
  userLogin,
  addShirt,
  getShirts,
] = require("../controllers/user-controller");

router.route("/userSignUp").post(userSignUp);
router.route("/userLogin").get(userLogin);
router.route("/addShirt").post(addShirt);
router.route("/getShirts").get(getShirts);
// router.route("/add2Cart").post(add2Cart);

module.exports = router;
