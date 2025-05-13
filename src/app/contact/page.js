'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="container py-5">
      {/* Contact Form Section */}
      <div className="card shadow-lg">
        <div className="row g-0">
          {/* Left Side - Contact Form */}
          <div className="col-md-6 p-4 p-md-5">
            <h2 className="h2 mb-3">Contact Us</h2>
            <p className="text-muted mb-4">
              Questions? Feedback? We are here to help. We typically respond within 24 hours.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-100 py-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
              
              {submitSuccess && (
                <div className="alert alert-success mt-3 mb-0">
                  Thank you! Your message has been sent. Well get back to you soon.
                </div>
              )}
            </form>
          </div>
          
          {/* Right Side - Image and Social Media */}
          <div className="col-md-6 bg-light p-4 p-md-5 d-flex flex-column">
            <div className="mb-4 ratio ratio-16x9 bg-secondary bg-opacity-10 rounded overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Contact us"
                className="img-fluid object-fit-cover"
                 width={300}
                  height={250}
              />
            </div>
            
            <div className="mt-auto">
              <h3 className="h5 mb-3">Prefer to reach out in a different way?</h3>
              
              <div className="row g-3">
                {/* Twitter Card */}
                <div className="col-md-4">
                  <a 
                    href="https://twitter.com/yourhandle" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="card h-100 text-decoration-none hover-shadow"
                  >
                    <div className="card-body text-center">
                      <i className="bi bi-twitter text-primary fs-3 mb-2"></i>
                      <h4 className="h6 mb-1">Twitter</h4>
                      <p className="text-muted small mb-0">We typically respond within 24 hours</p>
                    </div>
                  </a>
                </div>
                
                {/* Instagram Card */}
                <div className="col-md-4">
                  <a 
                    href="https://instagram.com/yourhandle" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="card h-100 text-decoration-none hover-shadow"
                  >
                    <div className="card-body text-center">
                      <i className="bi bi-instagram text-danger fs-3 mb-2"></i>
                      <h4 className="h6 mb-1">Instagram</h4>
                      <p className="text-muted small mb-0">We typically respond within 24 hours</p>
                    </div>
                  </a>
                </div>
                
                {/* Facebook Card */}
                <div className="col-md-4">
                  <a 
                    href="https://facebook.com/yourpage" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="card h-100 text-decoration-none hover-shadow"
                  >
                    <div className="card-body text-center">
                      <i className="bi bi-facebook text-primary fs-3 mb-2"></i>
                      <h4 className="h6 mb-1">Facebook</h4>
                      <p className="text-muted small mb-0">We typically respond within 24 hours</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stay Updated Section */}
      <div className="card bg-primary text-white mt-4 mt-md-5 shadow-lg">
        <div className="card-body p-4 p-md-5 text-center">
          <h2 className="h2 mb-2">Stay Updated</h2>
          <p className="mb-4 opacity-75">
            Get the latest news and updates from Project Sehar Sehpathi.
          </p>
          
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                  aria-label="Your email address"
                />
                <button className="btn btn-light text-primary" type="button">
                  <i className="bi bi-send me-1"></i> Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <p className="small opacity-75 mb-0">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}