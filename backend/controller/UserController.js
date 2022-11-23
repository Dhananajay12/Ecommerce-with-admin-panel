const AsyncHandler = require("express-async-handler");
const generateToken = require("../config/genarateToken");
const User = require("../model/UserModel");
const ErrorHandler = require("../utils/ErrorHandle");
const sendToken = require("../utils/jwtToken");

const createUser = AsyncHandler(async (req, res, next) => {
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

  sendToken(user, 201, res);
});

const loginUser = AsyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter the email & password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(
      new ErrorHandler("User is not find with this email & password", 401)
    );
  }
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(
      new ErrorHandler("User is not find with this email & password", 401)
    );
  }

  sendToken(user, 200, res);
});

const logoutUser = AsyncHandler(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Log out success",
  });
});

module.exports = {
  createUser,
  loginUser,
  logoutUser,
};
