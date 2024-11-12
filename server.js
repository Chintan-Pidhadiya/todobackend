require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connectDB");
const route = require("./route");

const app = express();

app.use(express.json());

app.use("/v1", route);

connectDB();
app.listen(8001, () => {
  console.log("Server started on port 8001");
});
