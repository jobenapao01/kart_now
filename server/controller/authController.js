import mongoose from "mongoose";
import User from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

//Register User
export const registerUser = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_PASSPHRASE
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    const token = jwt.sign(
      {
        id: savedUser._id,
        isAdmin: savedUser.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "3d" }
    );
    const { password, ...others } = savedUser._doc;
    res.status(200).json({ ...others, token });
  } catch (error) {
    res.status(500).json(error);
  }
};

//Login
export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    !user && res.status(401).json({ message: "Invalid Credentials" });

    const hashPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_PASSPHRASE
    );

    //decryptPassword
    const decryptPassword = hashPassword.toString(CryptoJS.enc.Utf8);
    decryptPassword !== req.body.password &&
      res.status(401).json({ message: "Invalid Credentials" });

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, token });
  } catch (error) {
    res.status(error);
  }
};
