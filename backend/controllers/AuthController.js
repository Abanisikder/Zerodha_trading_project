const{UserModel}=require("./models/UserModel");
import jwt from "jsonwebtoken";

// টোকেন তৈরি করার ফাংশন
const createToken = (id) => {
  return jwt.sign({ id }, "secret_key", {
    expiresIn: "3d",
  });
};

// ১. Signup করার ফাংশন
export async function Signup(req, res) {
  try {
    const { username, password } = req.body;
    
    // নতুন ইউজার তৈরি (মডেলে আমরা অলরেডি পাসওয়ার্ড হ্যাশ করার লজিক লিখেছি)
    const user = await UserModel({ username, password });
    
    // টোকেন তৈরি
    const token = createToken(user._id);
    
    res.status(201).json({ message: "User signed in successfully", success: true, user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}