const express = require("express");
const Post = require("../models/postData");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("You are on posts page");
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date
  });
  try {
    const data = await post.save();
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
