const mongoose = require("mongoose");

const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.kvwpv1z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// console.log(connectionString);

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB ", err);
  });

module.exports = mongoose;
