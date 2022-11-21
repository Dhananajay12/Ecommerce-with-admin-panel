const express = require("express");

const products = require("./router/ProductRouter");
const app = express();

app.use(express.json()); // convert  data to json

app.use("/api/v2", products);

module.exports = app;
