const express = require("express");
const User = require("../models/userData");

const router = express.Router();

//Gets all the users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.send({ message: err });
  }
});

//Submits a user
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

//Get a specific user
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json(user);
  } catch (err) {
    res.send({ message: err });
  }
});

//Delete a user
router.delete("/:userId", async (req, res) => {
  try {
    const deletaUser = await User.remove({ _id: req.params.userId });
    res.json(deletaUser);
  } catch (err) {
    res.send({ message: err });
  }
});

//Update a user
router.patch("/:userId", async (req, res) => {
  try {
    const updateUser = await User.updateOne(
      { _id: req.params.userId },
      { $set: { address: req.body.address } }
    );
    res.json(updateUser);
  } catch (err) {
    res.send({ message: err });
  }
});

module.exports = router;
