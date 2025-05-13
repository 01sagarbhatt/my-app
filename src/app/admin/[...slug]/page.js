"use client";
import React from 'react';
import { useParams } from 'next/navigation'; // import useParams hook
import Add_Colleges from '@/app/_components/Add_Colleges';
import RoomForm from '@/app/_components/RoomForm';
import UserManagement from '@/app/_components/UserManagement';

export default function AdminSlugPage() {
  const params = useParams(); // Get the dynamic params using useParams
  const path = params.slug?.join('/'); // safely join slug array

  if (!path) {
    return <div><h2>404 - Page Not Found</h2></div>;
  }

  if (path === 'colleges') {
    return <Add_Colleges />;
  } else if (path === 'universities') {
    return <Add_Colleges />;
  } else if (path === 'rooms') {
    return <RoomForm />;
  } else if (path === 'users') {
    return <UserManagement />;
  } else {
    return <div><h2>404 - Page Not Found</h2></div>;
  }
}
