require("dotenv").config();
const router = require("./routes/router");
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const cors = require("cors");

const app = express();

//middleWare
app.use(cors());
app.use(bodyParser.json());
app.use("/app", router);

//start
app.listen(process.env.PORT, () => {
  console.log(`Server started on port: ${process.env.PORT}`);
});
