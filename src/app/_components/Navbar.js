"use client";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";



const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    setIsMounted(true);
  }, []);

  // Wait until client-side rendering is complete
  if (!isMounted || status === "loading") {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
        <div className="container-fluid">
          <Link href="/" className="ms-3 navbar-brand fw-bold text-dark">
            Sehar Sehpathi
          </Link>
          <div className="d-flex">
            <div className="btn btn-outline-dark me-2 rounded-5 px-3">
              Loading...
            </div>
          </div>
        </div>
      </nav>
    );
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    ...(session ? [{ href: "/services", label: "Explore Now" }] : []),
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
      <div className="container-fluid">
        <Link href="/" className="ms-3 navbar-brand fw-bold text-dark">
          Sehar Sehpathi
        </Link>

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

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item mx-2">
                <Link
                  href={link.href}
                  className={`nav-link ${
                    pathname === link.href ? "active fw-bold" : "text-dark"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex justify-content-between">
            {session ? (
              <div className="m-auto">
                
                
                <Image
                  src={session.user?.image}
                  alt="Profile"
                  width="24"
                  height="24"
                  className="rounded-circle me-2"
                />
                {session.user?.name}

                
                  <button
                  onClick={() => signOut()}
                  className="btn btn-outline-danger mb-3 ms-3 mt-3"
                >
                  Sign out
                </button>
                

              </div>
              
            ) : (
              <>
                <Link
                  href="/login"
                  className="btn btn-outline-dark me-2 rounded-5 px-3"
                >
                  Admin Login
                </Link>
                <Link href="/signup" className="btn btn-dark rounded-5 px-3">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
