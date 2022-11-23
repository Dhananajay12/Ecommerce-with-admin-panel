const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../config/genarateToken");
const User = require("../model/UserModel");

const createUser = expressAsyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "https://tes.com",
      url: "https://tes.com",
    },
  });

  const token = await generateToken(user._id);
  res.status(201).json({
    success: true,
    token,
  });
});

module.exports = {
  createUser,
};
