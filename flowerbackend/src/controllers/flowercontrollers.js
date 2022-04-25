const express = require("express");

const { Flower,Pot} = require("../models/flowermodel")

const router = express.Router();

// curd operation for flower 
router.post("/homepage", async (req, res) => {
  try {
    let flower = await Flower.create(req.body);
    res.status(201).send(flower);
  } catch (err) {
    console.log(err);
  }
});

router.get("/homepage", async (req, res) => {
  try {
    let flower = await Flower.find().lean().exec();
    res.status(200).send(flower);
  } catch (err) {
    console.log(err);
  }
});

// curd operation for flower 
router.post("/pot", async (req, res) => {
  try {
    let pot = await Pot.create(req.body);
    res.status(201).send(pot);
  } catch (err) {
    console.log(err);
  }
});

router.get("/pot", async (req, res) => {
  try {
    let pot = await Pot.find().lean().exec();
    res.status(200).send(pot);
  } catch (err) {
    console.log(err);
  }
});




module.exports = router;
