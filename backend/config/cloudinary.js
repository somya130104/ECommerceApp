/*
 Cloudinary is a cloud-based service that provides solutions for image and video management, including uploading, storage, manipulation, optimization, and delivery. It allows developers to easily handle media assets in their applications.
*/
import dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';

const connectCloudinary = () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    })
}
export default connectCloudinary;