// Import the required modules
import express from "express";
import { createPost, getAllPosts } from "../controllers/Posts";
import { auth } from "../middlewares/auth";
const router = express.Router();


// Route for get Posts
router.get("/posts", auth, getAllPosts);

// Route for create Post
router.post("/createPost",auth, createPost);

export default router;