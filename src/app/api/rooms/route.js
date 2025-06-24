import { NextResponse } from 'next/server';
import formidable from 'formidable';
import fs from 'fs';
import { Readable } from 'stream';
import path from 'path';
import connectDB from '@/app/lib/mongodb';
import { ObjectId } from 'mongodb';
import { uploadToCloudinary } from '@/app/lib/cloudinary';

export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper to convert Next.js request body to Node stream
function webRequestToNodeStream(request) {
  return Readable.from(request.body);
}

export async function POST(request) {
  const form = formidable({
    multiples: true,
    uploadDir: '/tmp', // ✅ TEMP folder for serverless env
    keepExtensions: true,
    maxFileSize: 10 * 1024 * 1024,
  });

  return new Promise(async (resolve) => {
    try {
      const nodeReq = Object.assign(webRequestToNodeStream(request), {
        headers: Object.fromEntries(request.headers),
        method: request.method,
        url: '',
      });

      form.parse(nodeReq, async (err, fields, files) => {
        if (err) {
          return resolve(NextResponse.json({ success: false, error: err.message }, { status: 500 }));
        }

        const { type, location, rent, mobile, amenities, availableFrom } = fields;

        let imagePaths = [];
        if (files.images) {
          const imageArray = Array.isArray(files.images) ? files.images : [files.images];
          for (const file of imageArray) {
            const buffer = await fs.promises.readFile(file.filepath);
            const url = await uploadToCloudinary(buffer);
            imagePaths.push(url);
          }
        }

        const db = await connectDB();
        const result = await db.collection('rooms').insertOne({
          type,
          location,
          rent,
          mobile,
          amenities,
          availableFrom,
          images: imagePaths,
          createdAt: new Date(),
          default: false,
        });

        resolve(NextResponse.json({ success: true, id: result.insertedId }, { status: 201 }));
      });
    } catch (error) {
      console.error('POST error:', error);
      resolve(NextResponse.json({ success: false, error: error.message }, { status: 500 }));
    }
  });
}

export async function GET() {
  try {
    const db = await connectDB();
    const rooms = await db.collection("rooms").find().toArray();
    return NextResponse.json(rooms, { status: 200 });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ error: "Failed to fetch rooms" }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const db = await connectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Room ID is required' }, { status: 400 });
    }

    const result = await db.collection('rooms').deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Room not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Room deleted successfully' });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request) {
  const form = formidable({
    multiples: true,
    uploadDir: '/tmp', // ✅ TEMP folder for serverless env
    keepExtensions: true,
    maxFileSize: 10 * 1024 * 1024,
  });

  return new Promise(async (resolve) => {
    try {
      const { searchParams } = new URL(request.url);
      const id = searchParams.get('id');

      if (!id) {
        return resolve(NextResponse.json({ error: 'Room ID is required' }, { status: 400 }));
      }

      const nodeReq = Object.assign(webRequestToNodeStream(request), {
        headers: Object.fromEntries(request.headers),
        method: request.method,
        url: '',
      });

      form.parse(nodeReq, async (err, fields, files) => {
        if (err) {
          return resolve(NextResponse.json({ error: err.message }, { status: 500 }));
        }

        const { type, location, rent, mobile, amenities, availableFrom } = fields;

        let imagePaths = [];
        if (files.images) {
          const imageArray = Array.isArray(files.images) ? files.images : [files.images];
          for (const file of imageArray) {
            const buffer = await fs.promises.readFile(file.filepath);
            const url = await uploadToCloudinary(buffer);
            imagePaths.push(url);
          }
        }

        const db = await connectDB();
        const updateObj = {
          type,
          location,
          rent,
          mobile,
          amenities,
          availableFrom,
          updatedAt: new Date(),
        };

        if (imagePaths.length > 0) {
          updateObj.images = imagePaths;
        }

        const result = await db.collection('rooms').updateOne(
          { _id: new ObjectId(id) },
          { $set: updateObj }
        );

        if (result.matchedCount === 0) {
          return resolve(NextResponse.json({ error: 'Room not found' }, { status: 404 }));
        }

        resolve(NextResponse.json({ success: true, message: 'Room updated successfully' }));
      });
    } catch (error) {
      console.error('PATCH error:', error);
      resolve(NextResponse.json({ error: error.message }, { status: 500 }));
    }
  });
}
