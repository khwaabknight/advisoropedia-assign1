import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import User from '../models/User';
import bcrypt from 'bcrypt';

export const signUp = async (req: Request, res: Response) => {
    try {
        const {username,email,password,confirmPassword} = req.body;

        if(!username || !email ||!password || !confirmPassword) {
            return res.status(403).json({
                success:false,
                error:true,
                message:"Insufficient Data",
                data:null,
            });
        }

        if(password !== confirmPassword){
            return res.status(400).json({
                success:false,
                error:true,
                message:"Both passwords provided should match, please try again with same passwords.",
                data:null,
            });
        }
        
        let existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({
                success:false,
                error:true,
                message:"A user already exists with this email",
                data:null,
            });
        }
        existingUser = await User.findOne({username})
        if(existingUser){
            return res.status(400).json({
                success:false,
                error:true,
                message:"A user already exists with this username",
                data:null,
            });
        }

        const hashedPassword = await bcrypt.hash(password,10);

        
        const newUser = await User.create({
            username,
            email,
            password:hashedPassword,
        });

        const payload = {
            username,
            email,
            _id:newUser._id,
        }

        const token = jwt.sign(payload,process.env.JWT_SECRET! ,{expiresIn:"15d",});

        return res.status(200).json({
            success:true,
            error:false,
            message:"Signup successful",
            data:{token},
        })
    } catch (error : any) {
        console.log("Error in signup controller : " , error);
        return res.status(500).json({
            success:false,
            error:true,
            message:"Internal Server Error",
            data:null,
        });
    }
}

export const logIn = async (req: Request, res: Response) => {
    try {
        const {identity,password} = req.body;
    
        if(!identity ||!password) {
            return res.status(403).json({
                success:false,
                error:true,
                message:"Insufficient Data",
                data:null,
            });
        }
    
        let user = await User.findOne({email:identity}) || await User.findOne({username:identity});
    
        if(!user) {
            return res.status(404).json({
                success:false,
                error:true,
                message:"User not registered",
                data:null,
            })
        }

        const passwordCorrect = await bcrypt.compare(password,user.password);
        if(!passwordCorrect){
            return res.status(401).json({
                success:false,
                error:true,
                message:"Incorrect password",
                data:null,
            })
        }

        const payload = {
            username:user.username,
            email:user.email,
            _id:user._id,
        }
        const token = jwt.sign(payload,process.env.JWT_SECRET! ,{expiresIn:"15d",});        
        
        return res.status(200).json({
            success:true,
            error:false,
            message:"User logged in",
            data:{token},
        })
    } catch (error:any) {
        console.log("Error in Login controller :", error);
        return res.status(500).json({
            success:false,
            error:true,
            message:"Internal Server Error",
            data:null,
        });        
    }
}