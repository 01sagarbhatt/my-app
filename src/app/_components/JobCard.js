'use client';
import { useEffect, useState } from 'react';

export default function JobListPage() {
  const [jobs, setJobs] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch('/api/jobs');
      const data = await res.json();
      setJobs(data.jobs);

      // Get unique locations from jobs
      const uniqueLocations = [
        ...new Set(
          data.jobs
            .map((job) => job.job_city && job.job_city.trim())
            .filter((loc) => loc && loc.length > 0)
        ),
      ];
      setLocations(uniqueLocations);
    };
    fetchJobs();
  }, []);

  // Filter jobs by selected location
  const filteredJobs = selectedLocation
    ? jobs.filter((job) => job.job_city === selectedLocation)
    : jobs;

  return (
    <div className="container py-5">
      <h1 className="mb-4 display-5 text-primary">Latest Job Openings</h1>

      {/* Location Filter */}
      <div className="mb-4">
        <label className="form-label me-2 fw-semibold">Filter by Location:</label>
        <select
          className="form-select d-inline-block w-auto"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          {locations.map((loc, idx) => (
            <option key={idx} value={loc}>
              {loc.charAt(0).toUpperCase() + loc.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {filteredJobs.length === 0 ? (
        <p className="text-muted fs-5">No jobs found for selected location.</p>
      ) : (
        filteredJobs.map((job, idx) => (
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