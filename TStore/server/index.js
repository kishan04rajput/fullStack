require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const PORT = 4000;
const db = require("./db");
const cors = require("cors");
const router = require("../server/routes/router");
const app = express();
const jwt = require("jsonwebtoken");
// const [userSignUp, userLogin] = require("../controllers/user-controller");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(bodyParser.json());
app.use("/", router);
app.use(
  cors({
    origin: ["http://localhost:3000"],
    // methods: ["GET", "POST"],
    credentials: true,
  })
);
const verifyAdmin = (req, res, next) => {
  const token = req.headers["authorization"];
  // console.log(token);
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  jwt.verify(token, "jwt-secret-key", (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" });

    // req.expiry
    console.log("Forbidden");
    req.userId = decoded.userName;
    next();
  });
};
app.get("/adminDashboard/:adminId", verifyAdmin, (req, res) => {
  // const userName = req.userName;
  if (req.params.adminId !== req.userId) {
    res.status(200).send("UNAUTHORISED");
    return;
  }
  // const adminId = req.params.adminId;
  // console.log(adminId);
  res.json("Success");
});

const verifyUser = (req, res, next) => {
  const token = req.headers["authorization"];
  // console.log(token);
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  jwt.verify(token, "jwt-secret-key", (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" });
    console.log("Forbidden");
    req.userId = decoded.userName;
    next();
  });
};

app.get("/userDashBoard/:userName", verifyUser, (req, res) => {
  // console.log("userDashBoard api hit");
  // const userName = req.userName;
  if (req.params.userName !== req.userId) {
    res.status(200).send("UNAUTHORISED");
    return;
  }
  // const adminId = req.params.adminId;
  // console.log(adminId);
  res.json("Success");
});

app.listen(process.env.PORT, () => {
  console.log(`Server Started! at port ${process.env.PORT}`);
});
