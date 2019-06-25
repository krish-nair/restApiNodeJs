const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();

//Middleware
app.use(bodyParser.json());
//Routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the rest api tutorial</h1>");
});

//import route
const postsRoute = require("./routes/posts");
const userRoute = require("./routes/users");

app.use("/posts", postsRoute);
app.use("/users", userRoute);

app.get("/customers", (req, res) => {
  res.send("<h1>You are on customers page</h1>");
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to the database...");
});

app.listen(3000, () => console.log("Server is running on port 3000"));
