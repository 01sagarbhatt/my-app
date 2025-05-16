"use client";
import { useState, useEffect } from "react";

const Add_Colleges = () => {
  const [formData, setFormData] = useState({
    collegeName: "",
    collegeAddress: "",
    contactNumber: "",
    collegeDescription: "",
    universityLink: ""
  });
  const [colleges, setColleges] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Fetch colleges on component mount
  useEffect(() => {
    fetchColleges();
  }, []);

  const fetchColleges = async () => {
    try {
      const response = await fetch("/api/institutions");
      const data = await response.json();
      setColleges(data.result || []);
    } catch (error) {
      console.error("Error fetching colleges:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.collegeName.trim()) newErrors.collegeName = "College name is required";
    if (!formData.collegeAddress.trim()) newErrors.collegeAddress = "College address is required";
    if (!formData.contactNumber.trim()) newErrors.contactNumber = "Contact number is required";
    if (!formData.collegeDescription.trim()) newErrors.collegeDescription = "Description is required";
    if (!formData.universityLink.trim()) {
      newErrors.universityLink = "Website link is required";
    } else if (!/^https?:\/\/.+\..+/.test(formData.universityLink)) {
      newErrors.universityLink = "Please enter a valid URL (http:// or https://)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const method = editingId ? "PUT" : "POST";
      const url = editingId ? `/api/institutions/${editingId}` : "/api/institutions";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to save college");
      }

      alert(`College ${editingId ? "updated" : "added"} successfully!`);
      fetchColleges();
      resetForm();
    } catch (error) {
      alert(`Error: ${error.message}`);
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Add this missing function
  const resetForm = () => {
    setFormData({
      collegeName: "",
      collegeAddress: "",
      contactNumber: "",
      collegeDescription: "",
      universityLink: ""
    });
    setEditingId(null);
    setErrors({});
  };

  // Add this missing function
  const handleEdit = (college) => {
    setFormData({
      collegeName: college.collegeName,
      collegeAddress: college.collegeAddress,
      contactNumber: college.contactNumber,
      collegeDescription: college.collegeDescription,
      universityLink: college.universityLink
    });
    setEditingId(college._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this college?")) return;

    try {
      const response = await fetch(`/api/institutions/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete college");
      }

      alert("College deleted successfully!");
      fetchColleges();
    } catch (error) {
      alert(`Error: ${error.message}`);
      console.error("Deletion error:", error);
    }
  };
  return (
    <div className="container py-4">
      <h1 className="display-6 text-center mb-4">College Management</h1>
      
      {/* Add/Edit Form */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-8 col-lg-6">
          <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
            <h2 className="h5 mb-4">{editingId ? "Edit College" : "Add New College"}</h2>
            
            {/* Form fields remain the same */}
            {/* College Name */}
            <div className="mb-3">
              <label className="form-label">College Name *</label>
              <input
                type="text"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                className={`form-control ${errors.collegeName ? "is-invalid" : ""}`}
                placeholder="Enter college name"
              />
              {errors.collegeName && <div className="invalid-feedback">{errors.collegeName}</div>}
            </div>

            {/* College Address */}
            <div className="mb-3">
              <label className="form-label">College Address *</label>
              <input
                type="text"
                name="collegeAddress"
                value={formData.collegeAddress}
                onChange={handleChange}
                className={`form-control ${errors.collegeAddress ? "is-invalid" : ""}`}
                placeholder="Enter college address"
              />
              {errors.collegeAddress && <div className="invalid-feedback">{errors.collegeAddress}</div>}
            </div>

            {/* Contact Number */}
            <div className="mb-3">
              <label className="form-label">Contact Number *</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className={`form-control ${errors.contactNumber ? "is-invalid" : ""}`}
                placeholder="Enter contact number"
              />
              {errors.contactNumber && <div className="invalid-feedback">{errors.contactNumber}</div>}
            </div>

            {/* Description */}
            <div className="mb-3">
              <label className="form-label">Description *</label>
              <textarea
                name="collegeDescription"
                value={formData.collegeDescription}
                onChange={handleChange}
                className={`form-control ${errors.collegeDescription ? "is-invalid" : ""}`}
                placeholder="Enter college description"
                rows="3"
              />
              {errors.collegeDescription && <div className="invalid-feedback">{errors.collegeDescription}</div>}
            </div>

            {/* University Link */}
            <div className="mb-3">
              <label className="form-label">University Website *</label>
              <input
                type="url"
                name="universityLink"
                value={formData.universityLink}
                onChange={handleChange}
                className={`form-control ${errors.universityLink ? "is-invalid" : ""}`}
                placeholder="https://example.com"
              />
              {errors.universityLink && <div className="invalid-feedback">{errors.universityLink}</div>}
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              {editingId && (
                <button 
                  type="button" 
                  className="btn btn-outline-secondary me-md-2"
                  onClick={resetForm}
                >
                  Cancel
                </button>
              )}
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    {editingId ? "Updating..." : "Adding..."}
                  </>
                ) : (
                  editingId ? "Update College" : "Add College"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Colleges Table */}
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0">Colleges List</h2>
            </div>
            <div className="card-body p-0">
              {colleges.length === 0 ? (
                <div className="text-center py-5">
                  <i className="bi bi-building-x fs-1 text-muted"></i>
                  <p className="text-muted mt-2">No colleges found</p>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Contact</th>
                        <th>Website</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {colleges.map((college) => (
                        <tr key={college._id}>
                          <td className="fw-semibold">{college.collegeName}</td>
                          <td>
                            <div className="text-wrap" style={{ maxWidth: "200px" }}>
                              {college.collegeAddress}
                            </div>
                          </td>
                          <td>
                            <a href={`tel:${college.contactNumber}`} className="text-decoration-none">
                              {college.contactNumber}
                            </a>
                          </td>
                          <td>
                            <a 
                              href={college.universityLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-decoration-none"
                            >
                              Visit Site
                            </a>
                          </td>
                          <td>
                            <div className="d-flex gap-2">
                              <button 
                                onClick={() => handleEdit(college)}
                                className="btn btn-sm btn-outline-primary"
                              >
                                Edit
                              </button>
                              <button 
                                onClick={() => handleDelete(college._id)}
                                className="btn btn-sm btn-outline-danger"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_Colleges;