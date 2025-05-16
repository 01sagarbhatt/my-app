'use client';
import { useEffect, useState } from 'react';

export default function JobListPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch('/api/jobs');
      const data = await res.json();
      setJobs(data.jobs); // API returns { jobs: [...] }
    };
    fetchJobs();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="mb-4 display-5 text-primary">Latest Job Openings</h1>

      {jobs.length === 0 ? (
        <p className="text-muted fs-5">Loading jobs...</p>
      ) : (
        jobs.map((job, idx) => (
          <div key={idx} className="card mb-4 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h5 className="card-title text-primary">{job.job_title}</h5>
                  <p className="card-subtitle text-muted">
                    {job.employer_name} &bull; {job.job_city.charAt(0).toUpperCase() + job.job_city.slice(1)}
                  </p>
                </div>
                <span className="badge bg-info text-dark fs-6">{job.job_employment_type}</span>
              </div>

              <p className="card-text text-secondary" style={{ whiteSpace: 'pre-line' }}>
                {job.job_description}
              </p>

              <ul className="list-unstyled mb-3 text-muted small">
                <li><strong>💰 Salary:</strong> ₹{job.job_min_salary} - ₹{job.job_max_salary}</li>
                {job.job_is_remote && <li>🏠 <strong>Remote:</strong> Available</li>}
              </ul>

              <div className="mb-3">
                {Array.isArray(job.skills_required) && job.skills_required.map((skill, i) => (
                  <span key={i} className="badge bg-secondary me-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={job.job_apply_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
