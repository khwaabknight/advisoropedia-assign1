import { Application, Request, Response } from "express";

import express from 'express';
import authRoutes from './routes/authRoutes';
import postsRoutes from './routes/postsRoutes';
import dbConnect from './config/database';
import cloudinaryConnect from './config/cloudinary';
import cors from 'cors';
require('dotenv').config();


dbConnect();
cloudinaryConnect();

const PORT = process.env.PORT || 6000;
const server : Application = express();

server.use(express.json());
server.use(cors({
    origin:'*'
}));

server.get("/",(req : Request,res : Response) => {
    return res.json({
        success:true,
        message:"Your server is up and running ...",
    })
});

// Auth Routes
server.use("/api/auth",authRoutes);

// Posts Routes
server.use("/api/post",postsRoutes);

server.listen(PORT,() => {
    console.log(`App is running at port ${PORT}`);
})