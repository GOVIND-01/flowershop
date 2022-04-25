const express = require("express");

const connect = require("./config/db");

const flower_data = require("./controllers/flowercontrollers");

const app = express();

app.use(express.json());

app.use("/flower", flower_data);

require("dotenv").config();

const PORT = process.env.PORT|| 4000;
app.listen(PORT, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err);
  }
  console.log(`app is running on ${PORT}`);
});
