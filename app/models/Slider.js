const mongoose = require("mongoose");

const SliderSchema = mongoose.Schema(
  {
    title: String,
    description: String
  },
  {
    timestamp: true
  }
);

module.exports = mongoose.model("Slider", SliderSchema);
