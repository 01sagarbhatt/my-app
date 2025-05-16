"use client";
import React, { useState, useEffect } from "react";

export default function AddJobs() {
  const initialForm = {
    job_title: "",
    employer_name: "",
    job_description: "",
    job_city: "delhi",
    job_employment_type: "Full-time",
    job_min_salary: "",
    job_max_salary: "",
    job_is_remote: false,
    job_apply_link: "",
    skills_required: "",
  };

  const [form, setForm] = useState(initialForm);
  const [jobs, setJobs] = useState([]);
  const [editingJobId, setEditingJobId] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await fetch("/api/jobs");
    const data = await res.json();
    setJobs(data.jobs || []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      skills_required: form.skills_required.split(",").map((s) => s.trim()),
    };

    const url = editingJobId ? `/api/jobs/${editingJobId}` : "/api/jobs";
    const method = editingJobId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert(editingJobId ? "Job updated!" : "Job added!");
      setForm(initialForm);
      setEditingJobId(null);
      fetchJobs();
    } else {
      alert("Operation failed.");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this job?")) return;
    const res = await fetch(`/api/jobs/${id}`, { method: "DELETE" });
    if (res.ok) {
      alert("Deleted");
      fetchJobs();
    } else {
      alert("Delete failed.");
    }
  };

  const handleEdit = (job) => {
    setEditingJobId(job._id);
    setForm({
      ...job,
      skills_required: job.skills_required.join(", "),
    });
    window.scrollTo(0, 0);
  };

  const cancelEdit = () => {
    setEditingJobId(null);
    setForm(initialForm);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">{editingJobId ? "Update Job" : "Add Job"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Job Title"
              value={form.job_title}
              onChange={(e) => setForm({ ...form, job_title: e.target.value })}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Company Name"
              value={form.employer_name}
              onChange={(e) => setForm({ ...form, employer_name: e.target.value })}
              required
            />
          </div>
          <div className="col-12">
            <textarea
              className="form-control"
              placeholder="Job Description"
              rows="3"
              value={form.job_description}
              onChange={(e) => setForm({ ...form, job_description: e.target.value })}
              required
            ></textarea>
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              value={form.job_city}
              onChange={(e) => setForm({ ...form, job_city: e.target.value })}
              required
            >
              <option value="Dehradun">Dehradun</option>
              <option value="Rishikesh">Rishikesh</option>
              <option value="Haridwar">Haridwar</option>
              <option value="Delhi">Delhi</option>
              <option value="Noida">Noida</option>
            </select>
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              value={form.job_employment_type}
              onChange={(e) => setForm({ ...form, job_employment_type: e.target.value })}
              required
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={form.job_is_remote}
                onChange={(e) => setForm({ ...form, job_is_remote: e.target.checked })}
              />
              <label className="form-check-label">Remote</label>
            </div>
          </div>
          <div className="col-md-6">
            <input
              type="number"
              className="form-control"
              placeholder="Min Salary"
              value={form.job_min_salary}
              onChange={(e) => setForm({ ...form, job_min_salary: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <input
              type="number"
              className="form-control"
              placeholder="Max Salary"
              value={form.job_max_salary}
              onChange={(e) => setForm({ ...form, job_max_salary: e.target.value })}
            />
          </div>
          <div className="col-12">
            <input
              className="form-control"
              placeholder="Skills (comma separated)"
              value={form.skills_required}
              onChange={(e) => setForm({ ...form, skills_required: e.target.value })}
            />
          </div>
          <div className="col-12">
            <input
              type="url"
              className="form-control"
              placeholder="Job Apply Link"
              value={form.job_apply_link}
              onChange={(e) => setForm({ ...form, job_apply_link: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <button type="submit" className="btn btn-success me-2">
            {editingJobId ? "Update Job" : "Add Job"}
          </button>
          {editingJobId && (
            <button type="button" className="btn btn-secondary" onClick={cancelEdit}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <hr className="my-5" />
      <h3 className="mb-3">Job List</h3>
      {jobs.length === 0 ? (
        <p>No jobs yet.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Company</th>
                <th>City</th>
                <th>Type</th>
                <th>Skills</th>
                <th>Remote</th>
                <th>Apply</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job._id}>
                  <td>{job.job_title}</td>
                  <td>{job.employer_name}</td>
                  <td>{job.job_city}</td>
                  <td>{job.job_employment_type}</td>
                  <td>{job.skills_required?.join(", ")}</td>
                  <td>{job.job_is_remote ? "Yes" : "No"}</td>
                  <td>
                    <a href={job.job_apply_link} target="_blank" rel="noreferrer">
                      Apply
                    </a>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-1"
                      onClick={() => handleEdit(job)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(job._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
