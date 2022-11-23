const express = require("express");

const products = require("./router/ProductRouter");
const user = require("./router/UserRoute");
const app = express();
const ErrorHandler = require("./middleware/error");
const coolkieParser = require("cookie-parser");

app.use(express.json()); // convert  data to json
app.use(coolkieParser()); // convert  data to json

app.use("/api/pro", products);
app.use("/api/user", user);
app.use(ErrorHandler);

module.exports = app;
