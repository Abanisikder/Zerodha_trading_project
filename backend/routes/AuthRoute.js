import { Signup } from "../controllers/AuthController.js";
const router = require("express").Router();

router.post("/signup", Signup);

export default router;