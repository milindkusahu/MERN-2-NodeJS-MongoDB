require("dotenv").config();

const express = require("express");
//MongoDB Connection
const mongoose = require("mongoose");

const MONGODB_URI = "mongodb://localhost:27017/";

mongoose.connect(MONGODB_URI).then(() => {
  console.log("Connected To Database :)");
});

const userRoutes = require("./routes/users.routes");
const currencyRoutes = require("./routes/currencies.routes");
const blogRoutes = require("./routes/blogs.routes");

const verifyAuth = require("./middlewares/verifyAuth");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Currency Database</h1>");
});

app.use("/users", userRoutes);

app.use("/currencies", currencyRoutes);

app.use("/blogs", blogRoutes);

app.use(verifyAuth);

app.listen(PORT, () => {
  console.log("Express server started to listen on " + PORT);
});
