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
    await newUser.save();
    res.status(200).send("User created successfully!");
  } catch (err) {
    // res.status(404).send("Error!\n", err);
    res.send(err);
  }
};

export const login = async (req, res) => {
  // const saltRounds = 10;
  const myPlaintextPassword = req.body.password;
  // const salt = bcrypt.genSaltSync(saltRounds);
  // const hash = bcrypt.hashSync(myPlaintextPassword, salt);
  try {
    const user = await User.findOne({ userName: req.body.userName });
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
        const { password, isAdmin, ...otherDetails } = user._doc;
        const token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.JWT_SECRET_KEY
        );
        res
          .cookie("access_token", token)
          .status(200)
          .json({ ...otherDetails });
      }
    }
  } catch (err) {
    // res.status(404).send("Error!\n", err);
    res.send(err);
  }
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
