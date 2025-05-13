'use client';
import { useEffect, useState } from 'react';

export default function CollegeListPage() {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const res = await fetch('/api/institutions'); // GET endpoint
        const data = await res.json();
        setColleges(data.result || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching colleges:', error);
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  return (
    <div className="container py-4">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-primary text-white">
          <h2 className="h4 mb-0 text-center">List of Colleges / Universities</h2>
        </div>
        
        <div className="card-body p-0">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading institutions...</p>
            </div>
          ) : colleges.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-building-x fs-1 text-muted"></i>
              <p className="text-danger mt-2">No colleges found</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="ps-4">College Name</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {colleges.map((college) => (
                    <tr key={college._id} className="align-middle">
                      <td className="ps-4 fw-semibold">{college.collegeName}</td>
                      <td>
                        <div className="text-wrap" style={{maxWidth: '200px'}} 
                             title={college.collegeAddress}>
                          {college.collegeAddress}
                        </div>
                      </td>
                      <td>
                        {college.contactNumber && (
                          <a href={`tel:${college.contactNumber}`} className="text-decoration-none">
                            <i className="bi bi-telephone me-2"></i>
                            {college.contactNumber}
                          </a>
                        )}
                      </td>
                      <td>
                        <div className="text-wrap" style={{maxWidth: '400px'}} 
                             title={college.collegeDescription}>
                          {college.collegeDescription}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        
        {colleges.length > 0 && (
          <div className="card-footer bg-light">
            <small className="text-muted">
              Showing {colleges.length} institutions
            </small>
          </div>
        )}
      </div>
    </div>
  );
}