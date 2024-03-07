import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

export async function auth(req:Request, res : Response, next:Function) {
    try {
        const token = req.body.token || (req?.header("Authorization")?.replace("Bearer ","") ?? null);
        const reqBody = req.body;

        if(!token) {
            return res.status(401).json({
                success:false,
                error:true,
                message:"Token is missing",
                data:null,
            });
        }

        try {
            const decode = jwt.verify(token,process.env.JWT_SECRET!);
            req.body = {
                ...reqBody,
                user:decode,
            }
        } catch (error:any) {
            console.log("Error in auth middleware while token decode : ", error);
            return res.status(401).json({
                success:false,
                error:true,
                message:"Token is invalid",
                data:null,
            });        
        }

        next();

        
    } catch (error:any) {
        console.log("Error in auth middleware : ", error);
        return res.status(500).json({
            success:false,
            error:true,
            message:"Internal Server Error",
            data:null,
        });
        
    }
}
