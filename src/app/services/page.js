"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: "Explore Colleges and Universities",
      description: "Discover top-ranked educational institutions in your area with our comprehensive database.",
      href: "/services/college",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Explore PG, Houses & Apartments",
      description: "Find comfortable and affordable living spaces near your educational institution.",
      href: "/services/houses",
      image: "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg"
    },
    {
      title: "Explore Latest Jobs",
      description: "Browse current job openings and kickstart your career after graduation.",
      href: "/services/jobs",
      image: "https://img.freepik.com/free-photo/business-people-meeting_53876-94868.jpg"
    }
  ];

  return (
    <div className="services-page py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-primary">Explore Our Services</h1>
          <p className="lead text-muted">Everything you need for your educational journey in one place</p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-4">
              <Link href={service.href} className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                  <div className="card-img-top overflow-hidden" style={{height: "200px"}}>
                    <Image
                      src={service.image}
                      width={400}
                      height={200}
                      alt={service.title}
                      className="img-fluid h-100 w-100 object-cover"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h3 className="h5 card-title fw-bold text-dark">{service.title}</h3>
                    <p className="card-text text-muted">{service.description}</p>
                  </div>
                  <div className="card-footer bg-transparent border-0 text-center pb-3">
                    <button className="btn btn-outline-primary btn-sm">
                      Explore Now <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hover-shadow:hover {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          transform: translateY(-5px);
          transition: all 0.3s ease;
        }
        .object-cover {
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default Services;