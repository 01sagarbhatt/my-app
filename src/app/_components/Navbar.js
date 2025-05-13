'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
      <div className="container-fluid">
        {/* Left Side - Brand Name */}
        <Link href="/" className="ms-3 navbar-brand fw-bold text-dark">
        
       Sehar Sehpathi
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Center Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Explore Now' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <li key={link.href} className="nav-item mx-2">
                <Link
                  href={link.href}
                  className={`nav-link ${
                    pathname === link.href ? 'active fw-bold' : 'text-dark'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex">
            <Link 
              href="/login" 
              className="btn btn-outline-dark me-2 rounded-5 px-3"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="btn btn-dark rounded-5 px-3"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;