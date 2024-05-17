const [
  userSignUpService,
  fetchUser,
  inventoryAdd,
  fetchShirts,
] = require("../service/user-service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");

const addShirt = async (req, res) => {
  console.log("Adding Shirt!");
  const { shirtImage, shirtSize, shirtPrice } = req.body;
  inventoryAdd(shirtImage, shirtSize, shirtPrice)
    .then(res.status(200).send("Shirt added!"))
    .catch((err) => res.json(err));
};

const getShirts = async (req, res, next) => {
  // console.log(req.query);
  console.log("Fetching Shirts!");
  // const userName = req.query.userName;
  // const password = req.query.password;
  await fetchShirts()
    .then((shirts) => {
      console.log(shirts);
      res.status(200).send(shirts);
    })
    .catch((err) => console.log(err));
};

const userSignUp = async (req, res) => {
  console.log("Searching user!");
  const userName = req.body.userName;
  // const password = req.query.password;
  const user = await fetchUser(userName);
  console.log("USER \n", user);
  // console.log(user[0].hashedPassword);
  if (user.length > 0) {
    console.log("User Found!");
    res.status(400).send();
  } else {
    const userName = req.body.userName;
    const password = req.body.password;
    bcrypt.hash(password, 10).then((hash) => {
      userSignUpService(userName, hash)
        .then(res.status(200).send("User has been created"))
        .catch((err) => res.json(err));
    });
  }
};

const userLogin = async (req, res, next) => {
  // console.log(req.query);
  console.log("Searching user!");
  const userName = req.query.userName;
  const password = req.query.password;
  await fetchUser(userName).then((user) => {
    // console.log("user response \n", user);
    if (user.length > 0) {
      // console.log("password, user[0].hahsedpassword");
      console.log(password + " " + user[0].hashedPassword);
      bcrypt.compare(password, user[0].hashedPassword, (err, response) => {
        // console.log(err);
        // console.log(response);
        if (response) {
          const token = jwt.sign(
            { userName: userName, role: user[0].role }, //payload
            "jwt-secret-key", //JWT-key
            // { expiresIn: "1d" } //expires in optional
          );
          // res.cookie("token", token);
          // res.json({ token });
          console.log("User Found!");
          // res
          //   .status(200)
          //   .json({ role: user[0].role })
          //   .send("User Found!");
          res
            .status(200)
            .json({ role: user[0].role, message: "User Found!", token });
        } else {
          console.log("Incorrect Password!");
          res.status(200).send();
        }
      });
    } else {
      console.log("No record found!");
      res.status(200).send();
    }
  });
};

module.exports = [userSignUp, userLogin, addShirt, getShirts];
