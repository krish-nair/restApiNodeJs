const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

//Middleware
app.use("/posts", () => {
  console.log("Middleware is running...");
});

//Routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the rest api tutorial</h1>");
});

app.get("/posts", (req, res) => {
  res.send("<h1>Welcome to the posts page</h1>");
});

app.get("/customers", (req, res) => {
  res.send("<h1>You are on customers page</h1>");
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to the database...");
});

app.listen(3000, () => console.log("Server is running on port 3000"));
