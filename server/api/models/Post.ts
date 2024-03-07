import mongoose,{ Schema }  from 'mongoose';

export type PostType = {
    image?: string;
    title: string;
    description: string;
    createdBy?: Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const postSchema = new Schema<PostType>({
    image:{
        type:String,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
}, { timestamps: true });

export const Post = mongoose.model("Post", postSchema);
export default Post;