const app = require("./app");

const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const PORT = process.env.PORT;

connectDB();

const server = app.listen(PORT, () => {
  console.log(`server is working on ${PORT}`);
});
