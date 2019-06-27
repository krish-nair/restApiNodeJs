const express = require("express");
const User = require("../models/userData");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.send({ message: err });
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    address: req.body.address,
    age: req.body.age
  });
  try {
    const userData = await user.save();
    res.json(userData);
  } catch (err) {
    res.send({ message: err });
  }
});

module.exports = router;
