const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: String,
  age: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Users", userSchema);
