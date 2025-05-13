"use client";
import React from "react";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sehar Sehpathi - Your Relocation Companion</title>
        <meta name="description" content="Helping migrants and students settle in new towns" />
      </Head>

      {/* Hero Banner */}
      <section className="hero-banner position-relative overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="hero-content text-center text-white position-absolute top-50 start-50 translate-middle w-100">
                <h1 className="display-4 fw-bold mb-4">Welcome to Your New Beginning</h1>
                <p className="lead mb-5">Simplifying relocation for migrants and students</p>
                <div className="d-flex justify-content-center gap-3">
                  <button className="btn btn-primary btn-lg px-4">Explore</button>
                  <button className="btn btn-outline-light btn-lg px-4">Learn More</button>
                </div>
              </div>
              <div className="hero-image" style={{height: "600px", background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">Simplifying Relocation: Your Guide to Settling in a New Town</h2>
              <p className="lead">
                Sehar Sehpathi is a comprehensive web platform designed to ease the transition for migrants and students moving to unfamiliar towns.
              </p>
              <div className="row mt-4">
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <div className="feature-icon bg-primary bg-gradient text-white rounded-circle mb-3 d-inline-flex align-items-center justify-content-center" style={{width: "50px", height: "50px"}}>
                        <i className="bi bi-search fs-4"></i>
                      </div>
                      <h5>Find</h5>
                      <p className="mb-0">
                        Discover educational institutions, secure suitable accommodation, explore job opportunities.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <div className="feature-icon bg-success bg-gradient text-white rounded-circle mb-3 d-inline-flex align-items-center justify-content-center" style={{width: "50px", height: "50px"}}>
                        <i className="bi bi-people fs-4"></i>
                      </div>
                      <h5>Connect</h5>
                      <p className="mb-0">
                        Connect with local support networks to quickly establish yourself.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rounded-3 overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                  width={800}
                  height={600}
                  alt="People connecting"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Discover a New World with Sehar-Saipathi</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: "700px"}}>
              Providing a centralized hub of essential information and resources to address the common challenges faced by newcomers.
            </p>
          </div>
          
          <div className="row g-4">
            {[
              {
                title: "Find the Right Educational Institutions",
                desc: "Guidance on finding educational institutions that meet your needs.",
                img: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg"
              },
              {
                title: "Secure Suitable Accommodation",
                desc: "Discover a range of housing options and find the perfect place.",
                img: "https://images.unsplash.com/photo-1449844908441-8829872d2607"
              },
              {
                title: "Explore Job Opportunities",
                desc: "Access job listings and resources to kickstart your career.",
                img: "https://images.unsplash.com/photo-1556761175-b413da4baf72"
              }
            ].map((service, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm overflow-hidden">
                  <div style={{height: "200px", overflow: "hidden"}}>
                    <Image
                      src={service.img}
                      width={400}
                      height={300}
                      alt={service.title}
                      className="img-fluid w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.desc}</p>
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <a href="#" className="btn btn-sm btn-outline-primary">Learn more</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">Effortlessly navigate the platform</h2>
              <p className="lead">
                Our user-friendly platform is designed to ease the transition for migrants and students moving to unfamiliar towns.
              </p>
              <ul className="list-unstyled">
                {[
                  "Find educational institutions",
                  "Secure suitable accommodation",
                  "Explore job opportunities",
                  "Connect with local support"
                ].map((item, index) => (
                  <li key={index} className="mb-2 d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden shadow">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
                  width={800}
                  height={450}
                  alt="Platform demonstration"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <p className="text-uppercase small mb-1">Our Purpose</p>
              <h2 className="fw-bold mb-4">Empowering Migrants and Students</h2>
              <p className="mb-4">
                At Sehar Sehpathi, our mission is to empower migrants and students by providing them with the essential information and resources they need to navigate their new environments.
              </p>
              <button className="btn btn-light">Learn About Our Mission</button>
            </div>
            <div className="col-lg-6">
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                  width={800}
                  height={450}
                  alt="Our mission"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-5">
        <div className="container text-center">
          <div className="mx-auto" style={{maxWidth: "800px"}}>
            <div className="d-flex justify-content-center text-warning mb-3">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="bi bi-star-fill fs-4"></i>
              ))}
            </div>
            <blockquote className="blockquote mb-5">
              <p className="fs-4">
                Sehar Sehpathi has been a game-changer for me. It provided me with all the necessary information to smoothly transition to a new town.
              </p>
              <footer className="blockquote-footer mt-3">Satisfied User</footer>
            </blockquote>
            <h3 className="fw-bold mb-4">Ready for Your New Beginning?</h3>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-dark btn-lg px-4">Sign Up Now</button>
              <button className="btn btn-outline-secondary btn-lg px-4">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS */}
      <style jsx>{`
        .hero-banner {
          position: relative;
        }
        .hero-content {
          z-index: 2;
        }
        .hero-image {
          position: relative;
          z-index: 1;
        }
        .feature-icon {
          transition: transform 0.3s;
        }
        .card:hover .feature-icon {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}