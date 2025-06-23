"use client";
import React from 'react';
import { useParams } from 'next/navigation'; // import useParams hook
import Add_Colleges from '@/app/_components/Add_Colleges';
import RoomForm from '@/app/_components/RoomForm';
import UserManagement from '@/app/_components/UserManagement';
import AddJobs from '@/app/_components/AddJobs';

export default function AdminSlugPage() {
  const params = useParams(); // Get the dynamic params using useParams
  const path = params.slug.join(''); // safely join slug array
console.log('Path:', path); // Log the path for debugging
  if (!path) {
    return <div><h2>404 - Page Not Found</h2></div>;
  }

  if (path === 'add-rooms') {
    return <RoomForm />;
  } else if (path === 'add-jobs') {
    return <AddJobs />;
  } else if (path === 'add-colleges') {
    return <Add_Colleges />;
  } else {
    return <div><h2>404 - Page Not Found</h2></div>;
  }
}
