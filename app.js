require("dotenv").config();
const express = require("express");
const app = express();

// cors
const cors = require("cors");

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// db conection
const connectToDb = require("./config/db");
connectToDb();

const userRoutes = require("./routes/userRoutes");

app.use("/", userRoutes);

module.exports = app;
