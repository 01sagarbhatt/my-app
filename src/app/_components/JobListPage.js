import React from 'react';
import JobCard from './JobCard';  

async function getJobs() {
  const res = await fetch('http://localhost:3000/api/jobs', { 
    cache: 'no-store' 
  });
  if (!res.ok) throw new Error('Failed to fetch jobs');
  return res.json();
}

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Available Jobs</h1>
      {jobs.map(job => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
}