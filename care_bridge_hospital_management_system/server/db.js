const mongoose = require("mongoose");
const connectionString = `mongodb+srv://${process.env.APP_USERNAME}:${process.env.APP_PASSWORD}@cluster0.nrhrbjv.mongodb.net/Care-Bridge-hms-db?retryWrites=true&w=majority&appName=Cluster0`;

console.log(connectionString);

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB", err);
  });

module.exports = mongoose;
