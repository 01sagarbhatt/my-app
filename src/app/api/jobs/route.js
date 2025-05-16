import { NextResponse } from 'next/server';
import { connectDB } from '@/app/lib/db';
import Job from '@/app/models/Job';

export async function GET() {
  try {
    await connectDB();
    const jobs = await Job.find().sort({ createdAt: -1 });
    return NextResponse.json({ jobs }, { status: 200 });
  } catch (err) {
    console.error('GET error:', err);
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    await connectDB();

    const job = new Job(body);
    await job.save();

    return NextResponse.json({ message: 'Job created successfully' }, { status: 201 });
  } catch (err) {
    console.error('POST error:', err);
    return NextResponse.json({ error: 'Failed to save job' }, { status: 500 });
  }
}

