import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';

cloudinary.config({
  cloud_name: 'ddeq13xob',
  api_key: '855273745443593',
  api_secret: 'sxpfglDNBuh8FWqAzuLoqkgVj2A',
});

export const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream((error, result) => {
      if (result) resolve(result.secure_url); // return URL
      else reject(error);
    });

    streamifier.createReadStream(buffer).pipe(stream);
  });
};
