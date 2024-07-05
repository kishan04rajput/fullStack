import jwt from "jsonwebtoken";
import User from "../Models/User.js";
import bcrypt from "bcrypt";

export const createNewUser = async (req, res) => {
  const saltRounds = 10;
  const myPlaintextPassword = req.body.password;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(myPlaintextPassword, salt);
  try {
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: hash,
    });
    const userPresent = await User.find({ email: req.body.email });
    if (userPresent.length > 0) {
      return res.status(400).send("User already exists!");
    }
    await newUser.save();
    res.status(200).send("User created successfully!");
  } catch (err) {
    res.status(400).send(err);
    // res.send(err);
  }
};

export const login = async (req, res) => {
  // const saltRounds = 10;
  const myPlaintextPassword = req.body.password;
  // const salt = bcrypt.genSaltSync(saltRounds);
  // const hash = bcrypt.hashSync(myPlaintextPassword, salt);
  // console.log("--->req.body.userName\n", req.body.userName);
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.send(400, "No user found!");
    } else {
      const isPasswordCorrect = bcrypt.compareSync(
        myPlaintextPassword,
        user.password
      );
      if (!isPasswordCorrect) {
        res.send(400, "Wrong password!");
      } else {
        const { password, ...otherDetails } = user._doc;
        const token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.JWT_SECRET_KEY
        );
        res
          .cookie("access_token", token, { httpOnly: true })
          .status(200)
          .json({ ...otherDetails });
      }
    }
  } catch (err) {
    // res.status(404).send("Error!\n", err);
    res.send(err);
  }
};

export const logout = async (re, res) => {
  res.clearCookie("access_token");
  res.status(204).send("User logout!");
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted successfully!");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};
