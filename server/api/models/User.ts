import mongoose, { Schema } from "mongoose";

export type UserType = {
    username: string;
    email: string;
    password: string;
    posts: mongoose.Schema.Types.ObjectId[];
    resetPasswordToken?: string;
    resetPasswordExpires?: Date;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<UserType>({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post"
        }
    ],
    resetPasswordToken: {
        type: String,
    },
    resetPasswordExpires: {
        type: Date,
    },
});

userSchema.pre('save',function(next){
    this.updatedAt = new Date();
    if(!this.createdAt){
        this.createdAt = new Date();
    }
    next();
})


export const User = mongoose.model("User", userSchema);
export default User;