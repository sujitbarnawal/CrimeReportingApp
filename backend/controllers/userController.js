import User from "../models/userModels.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";
import transporter from "../config/nodemailer.js";
import dotenv from "dotenv";
dotenv.config();

//Create User
const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "All fields (name, email, password) are required",
      });
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.json({
        success: false,
        message: "Email is already registered",
      });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid email format" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);
    res.json({ success: true, token });

    // Sending a welcome email
    const mailOptions = {
      from: process.env.SENDER_EMAIL_ID,
      to: email,
      subject: "Welcome to CrimeConnect",
      text: `Hello ${name},\n\nWelcome to CrimeConnect! We're glad to have you on board.\n\nBest regards,\nCrimeConnect Team`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Welcome email sent successfully");
    } catch (mailError) {
      console.error("Error sending welcome email:", mailError.message);
    }
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

//Login User
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.json({ success: false, message: "Invalid password" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);
    res.json({ success: true, token });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export { register, login };
