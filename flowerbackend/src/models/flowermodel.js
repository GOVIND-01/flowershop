const mongoose = require("mongoose");

//schemas for home page flower
const flowerSchemas = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    image: { type: String, required: true },
    name: { type: String, require: true },
    price: { type: Number, require:true},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Flower = mongoose.model("Flower", flowerSchemas);

//schemas for home page flower
const potSchemas = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    image: { type: String, required: true },
    name: { type: String, require: true },
    price: { type: Number, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Pot = mongoose.model("Pot", potSchemas);

module.exports = { Flower, Pot };
