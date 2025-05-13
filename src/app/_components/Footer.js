'use client'; // Client component के लिए आवश्यक

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Social media icons data
  const socialLinks = [
    { name: 'Instagram', icon: 'bi-instagram', url: '#' },
    { name: 'Facebook', icon: 'bi-facebook', url: '#' },
    { name: 'GitHub', icon: 'bi-github', url: '#' },
    { name: 'LinkedIn', icon: 'bi-linkedin', url: '#' }
  ];

  // Navigation links data
  const navLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Explore Now', url: '/explore' },
    { name: 'Contact', url: '/contact' }
  ];

  return (
    <footer className="bg-light py-4 mt-5">
      <div className="container-fluid  p-5">
        <div className="row align-items-center">
          {/* Left Side - Website Name and Year */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-1">Sehar Sehpathi</h5>
            <p className="text-muted mb-0">© {currentYear} All Rights Reserved</p>
          </div>
          
          {/* Center - Navigation Links */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <div className="d-flex flex-wrap justify-content-center">
              {navLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.url}
                  className="text-decoration-none text-secondary mx-2 mb-1 mb-md-0"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Right Side - Social Icons */}
          <div className="col-md-4 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-dark mx-2 fs-5"
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;