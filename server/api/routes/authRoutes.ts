// Import the required modules
import express from "express";
const router = express.Router();

import { logIn, signUp } from "../controllers/Auth";
// const {login,signUp,sendOtp,changePassword} = require("../controllers/Auth");


// Route for user login
router.post("/login", logIn);

// Route for user signup
router.post("/signup", signUp);

export default router;