const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://sarsande1234:sarsande1234@cluster0.nuevl.mongodb.net/flower"
  );
};
