import { v2 as cloudinary } from 'cloudinary';

const cloudinaryConnect = () => {
    try {
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.CLOUD_API,
            api_secret:process.env.CLOUD_API_SECRET,
        });
        console.log("coudinary connected");
    } catch (error) {
        console.log(error);
    }
}

export default cloudinaryConnect;