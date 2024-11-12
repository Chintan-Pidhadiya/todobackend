const mongoose = require("mongoose");

const connectDB = () => mongoose
  .connect(process.env.MONGOOSE_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch(() => console.log("MongoDB connection error..."));

module.exports = connectDB;
