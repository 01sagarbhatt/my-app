"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section bg-primary text-white py-5">
        <div className="container py-4">
          <h1 className="display-4 fw-bold mb-4">Sehar-Sehpathi</h1>
          <p className="lead">Guiding Your Journey to New Beginnings</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container my-5 py-4">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <Image
              src = "https://plus.unsplash.com/premium_photo-1709072152867-5fc50fd78cbc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&quot" // Replace with your image path
              alt="Our Mission"
              width={600}
              height={400}
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="display-6 fw-bold mb-4 text-primary">Our Mission: Empowering New Beginnings</h2>
            <p className="lead">
              We are a global collective of 1,000+ volunteers, united by a shared commitment to help you navigate your new beginnings. We are here to help you find your path, no matter where it takes you.
            </p>
          </div>
        </div>
      </div>

{/* Story Section */}
<div className="bg-light py-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 mx-auto text-center">
        <h2 className="fw-bold mb-5">Our Story</h2>
        <blockquote className="blockquote fs-4 mb-5">
          <p className="mb-4">
            Sehar Sehpathi began with a simple idea: moving to a new town should not be so hard. In 2022, our founder struggled to settle into a new city as a student. Finding housing, understanding local systems, and making connections were all major challenges.
          </p>
          <footer className="blockquote-footer">Founder, Sehar-Sehpathi</footer>
        </blockquote>
        <p className="fs-5">
          Realizing many others faced similar issues, she gathered a team of experts to create a solution. Sehar Sehpathi was born – a platform to guide newcomers through every step of relocation. Launched in 2024, we now help thousands of migrants and students across multiple cities. Our mission is to make every relocation feel like the start of an exciting new adventure.
        </p>
        {/* <p className="fs-5 mt-4">
          <strong>Sehar Sehpathi</strong> was developed as a final year project by B.Tech (Bachelor of Technology) students of <strong>Swami Rama Himalayan University (SRHU)</strong>. The team includes <strong>Abhishek Singh, Saumya Thapliyal, Sukhbir Rawat, Jai Semwal, Shubham Butola  </strong> and <strong>Shriyansh Rawat</strong> — all committed to building meaningful solutions for real-life student challenges.
        </p> */}
      </div>
    </div>
  </div>
</div>


      {/* Mission & Vision Cards */}
      <div className="container my-5 py-4">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="icon-box bg-primary bg-opacity-10 text-primary mb-4">
                  <i className="bi bi-bullseye fs-2"></i>
                </div>
                <h3 className="h4 fw-bold mb-3">Our Mission</h3>
                <p className="mb-0">
                  Empower individuals and families to thrive in their new communities, through access to information, resources, and support.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="icon-box bg-info bg-opacity-10 text-info mb-4">
                  <i className="bi bi-eye fs-2"></i>
                </div>
                <h3 className="h4 fw-bold mb-3">Our Vision</h3>
                <p className="mb-0">
                  A world where everyone has the opportunity to build a better life for themselves and their families, regardless of where they were born.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container my-5 py-4">
        <h2 className="text-center fw-bold mb-5">Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-badge bg-primary">2024</div>
            <div className="timeline-content p-4 shadow-sm">
              <h4 className="fw-bold">Sehar Sehpathi is Founded</h4>
              <p>Official launch of our platform to help students and migrants settle in new cities</p>
            </div>
          </div>
          {/* Add more timeline items as needed */}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-primary text-white py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">What People Say</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 bg-primary border-light">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      {/* <Image
                        src="/images/testimonial1.jpg" // Replace with actual image
                        width={80}
                        height={80}
                        className="rounded-circle"
                        alt="John Smith"
                      /> */}
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-1">Deepak Sharma</h5>
                      <p className="text-light mb-0">Relocated to Mumbai</p>
                    </div>
                  </div>
                  <p className="mb-0">
                    Sehar Sehpathi has been a game changer for us. Their platform has helped us connect with our local community in ways we never thought possible.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 bg-primary border-light">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      {/* <Image
                        src="/images/testimonial2.jpg" // Replace with actual image
                        width={80}
                        height={80}
                        className="rounded-circle"
                        alt="Emma Johnson"
                      /> */}
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-1">Shiva Thapa</h5>
                      <p className="text-light mb-0">Dehradun Student</p>
                    </div>
                  </div>
                  <p className="mb-0">
                    The resources and support available on Sehar-Sehpathi are invaluable. They have helped us navigate the complex process of relocating to a new country with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="container my-5 py-5">
        <h2 className="text-center fw-bold mb-5">Our Impact</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="display-4 fw-bold text-primary">100k+</div>
            <p className="fs-5">Users</p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="display-4 fw-bold text-primary">500k+</div>
            <p className="fs-5">Resources</p>
          </div>
          <div className="col-md-4">
            <div className="display-4 fw-bold text-primary">1k+</div>
            <p className="fs-5">Guides</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-light py-5">
        <div className="container text-center py-4">
          <h2 className="fw-bold mb-4">Ready to Begin Your Journey?</h2>
        <Link href="/services">
                <button className="btn btn-outline-secondary btn-lg px-4">
                  Learn More..
                </button>
              </Link>
       
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/about-hero.jpg');
          background-size: cover;
          background-position: center;
        }
        .icon-box {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        .timeline::before {
          content: '';
          position: absolute;
          width: 2px;
          background-color: #dee2e6;
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -1px;
        }
        .timeline-item {
          padding: 10px 40px;
          position: relative;
          width: 50%;
          box-sizing: border-box;
        }
        .timeline-item:nth-child(odd) {
          left: 0;
        }
        .timeline-item:nth-child(even) {
          left: 50%;
        }
        .timeline-badge {
          color: white;
          width: 50px;
          height: 50px;
          line-height: 50px;
          font-size: 1.2em;
          text-align: center;
          position: absolute;
          top: 15px;
          border-radius: 50%;
          z-index: 1;
        }
        .timeline-item:nth-child(odd) .timeline-badge {
          right: -25px;
        }
        .timeline-item:nth-child(even) .timeline-badge {
          left: -25px;
        }
        .timeline-content {
          background-color: white;
          border-radius: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;