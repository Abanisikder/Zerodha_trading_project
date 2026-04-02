const express = require("express");
const router = express.Router();

// আপনার কন্ট্রোলার ইম্পোর্ট করুন (শেষে .js দেওয়ার প্রয়োজন নেই)
const { Signup } = require("../controllers/AuthController");

// রাউট সেটআপ করুন
router.post("/signup", Signup);

// রাউটারটি এক্সপোর্ট করুন
module.exports = router;