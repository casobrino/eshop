import mongoose from "mongoose";
import User from "../models/User.js";
import CryptoJS from "crypto-js";

const register = async (req, res) => {
  //not duplicate
  const { username, email, password } = req.body;
  const emailExist = await User.findOne({ email });
  if (emailExist) {
    const error = new Error("this email exist already");
    return res.status(400).json({ msg: error.message });
  }
  const userExist = await User.findOne({ username });
  if (userExist) {
    const error = new Error("this username exist already");
    return res.status(400).json({ msg: error.message });
  }

  // const { username, email, password } = req.body;
  // const newUser = new User({
  //   username,
  //   email,
  //   password: CryptoJS.AES.encrypt(
  //     password,
  //     process.env.SECRET_WORD
  //   ).toString(),
  // });
  // try {
  //   const savedUser = await newUser.save();
  //   res.status(201).json(savedUser);
  //   console.log(savedUser);
  // } catch (error) {
  //   res.status(500).json(error);
  // }
};

export { register };
