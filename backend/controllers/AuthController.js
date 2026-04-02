const { UserModel } = require("../models/UserModel"); // কার্লি ব্র্যাকেট অবশ্যই দেবেন
const jwt = require("jsonwebtoken");

// টোকেন তৈরি করার ফাংশন
const createToken = (id) => {
  return jwt.sign({ id }, "secret_key", {
    expiresIn: "3d",
  });
};

// Signup করার ফাংশন
const Signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    // নতুন ইউজার তৈরি 
    const user = await UserModel.create({ username, password });

    // টোকেন তৈরি
    const token = createToken(user._id);

    // রেসপন্স পাঠানো
    res.status(201).json({
      message: "User signed in successfully",
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

// ফাংশনটি এক্সপোর্ট করা (যাতে রাউট ফাইলে এটি ব্যবহার করা যায়)
module.exports = { Signup };