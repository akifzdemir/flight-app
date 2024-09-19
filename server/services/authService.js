const User = require("../models/User");
const jwt = require("jsonwebtoken");

const loginService = async (user) => {
  const { email, password } = user;
  const currentUser = await User.findOne({ email });
  if (!currentUser) {
    throw new Error("User not found");
  }
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

const registerService = async (user) => {
  const { email } = user;
  const currentUser = await User.findOne({ email });
  if (currentUser) {
    throw new Error("User already exists");
  }
  const newUser = new User(user);
  await newUser.save();
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

module.exports = { loginService, registerService };
