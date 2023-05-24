import mongoose from "mongoose";
import User from "../models/User.js";

const register = async (req, res) => {
  //not duplicate
  const { username, email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    const error = new Error("this email exist already");
    return res.status(400).json({ msg: error.message });
  }
};

export { register };
