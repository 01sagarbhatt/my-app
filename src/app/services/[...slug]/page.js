"use client";
import React from 'react';
import { useParams } from 'next/navigation'; // import useParams hook
import CollegeListPage from '@/app/_components/CollegeListPage';
import RoomsList from '@/app/_components/RoomsList';
import JobsPage from '@/app/_components/JobListPage';


export default function AdminSlugPage() {
  const params = useParams(); // Get the dynamic params using useParams
  const path = params.slug?.join('/'); // safely join slug array

  if (!path) {
    return <div><h2>404 - Page Not Found</h2></div>;
  }

  if (path === 'college') {
    return <CollegeListPage />;
  } else if (path === 'houses') {
    return <RoomsList />;
  } else if (path === 'jobs') {
    return <JobsPage />;
  } else if (path === 'users') {
    return <UserManagement />;
  } else {
    return <div><h2>404 - Page Not Found</h2></div>;
  }
}
