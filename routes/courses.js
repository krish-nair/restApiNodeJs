const express = require("express");
const Course = require("../models/courseData");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.send({ message: error });
  }
});

router.post("/", async (req, res) => {
  const course = new Course({
    name: req.body.name,
    duration: req.body.duration
  });
  try {
    const data = await course.save();
    res.json(data);
  } catch (err) {
    res.send({ message: err });
  }
});

module.exports = router;
