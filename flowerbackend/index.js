const express = require("express");

const mongoose = require("mongoose");

const controllers = require("./src/controllers/flowercontrollers");

require("dotenv").config();

const app = express();

// middle ware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// router
app.use("/flowers", controllers);

// poet
const PORT = 4000;
//const PORT = 5000;

// connect to the mongoose to mongodbatlas
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true }) // use for new uirl
  .then(() => {
    console.log("connect to the atlas data base");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, async () => {
  try {
    console.log("running on port", PORT);
  } catch (err) {
    console.log(err.message);
  }
});
