const mongoose = require("mongoose");

// আপনার স্কিমা ফাইলটি ইম্পোর্ট করুন (শেষে .js দেওয়ার প্রয়োজন নেই)
const UserSchema = require("../schemas/UserSchema"); 

// মডেল তৈরি করুন
const UserModel = mongoose.model("User", UserSchema);

// 'Named Export' এর বদলে অবজেক্ট আকারে module.exports করুন
// যাতে অন্য ফাইলে const { UserModel } = require(...) কাজ করে
module.exports = { UserModel };