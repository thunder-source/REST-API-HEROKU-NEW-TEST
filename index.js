const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const coursesRouter = require("./routes/courses");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
app.use(cors());

// const dotenv = require("dotenv");
// dotenv.config();

// app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://praditya:1x3hAjbiTWoZLb8H@cluster0.f9euvie.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("connected to the mongo db");
  }
);

app.use("/api", coursesRouter);

app.get("/", (req, res) => {
  res.end("Hello");
});

app.listen(port, () => {
  console.log("server is running on port 8000");
});
