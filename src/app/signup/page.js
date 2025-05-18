"use client";
import Image from "next/image";
import { useSession, signIn , signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignIn() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [registered, setRegistered] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Redirect if already authenticated
  useEffect(() => {
    if (status === "authenticated") {
      // router.push('/services');
    }
  }, [status, router]);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("Please fill all fields.");
      return;
    }
    setError("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const text = await res.text(); // get raw text first

    try {
      const data = JSON.parse(text); // parse manually

      if (!res.ok) {
        setError(data.message || "Registration failed");
        return;
      }
      setRegistered(true);
    } catch (err) {
      setError("Invalid response from server");
      console.error("Invalid JSON:", text);
    }
  };

  if (status === "loading") {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          {/* <div className="col-md-6">
            <div className="card shadow-lg">
              <div className="text-center mt-3">
                <h4 className="mb-3">Welcome, {session.user.name}!</h4>
              
              <button
                onClick={() => signOut()}
                className="btn btn-outline-danger mb-3"
              >
                Sign out
              </button>
              </div>
            </div>
          </div> */}
{/* Hero Welcome Section */}
<div
  className="py-5 text-white text-center"
  style={{
    backgroundImage:
      "url('https://thumbs.dreamstime.com/b/graduation-banner-future-students-college-diploma-scholarship-education-university-degree-certificate-achievement-349802294.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="container">
    <h1 className="display-4 fw-bold">Welcome to Sehar Sehpathi</h1>
    <p className="lead mt-3">
      Helping students and migrants transition smoothly to new cities with guidance, support, and community.
    </p>

  </div>
</div>

{/* Mission Section */}
<div id="mission" className="container my-5 py-4">
  <div className="row align-items-center">
    <div className="col-lg-6 mb-4 mb-lg-0">
      <Image
        src={
          session
            ? "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            : "https://plus.unsplash.com/premium_photo-1709072152867-5fc50fd78cbc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={session ? "Welcome back" : "Our Mission"}
        width={600}
        height={400}
        className="img-fluid rounded shadow"
      />
    </div>
    <div className="col-lg-6">
      {session ? (
        <>
          <h2 className="display-6 fw-bold mb-4 text-primary">
            Welcome back, {session.user?.name}!
          </h2>
          <p className="lead">
            We are thrilled to have you with us again. Your journey continues
            here with access to exclusive resources and personalized support
            from our global community.
          </p>
          <div className="mt-4">
            <Link href="/services">
             <button className="btn btn-primary me-3">
              Continue Your Journey
            </button></Link>
      
          </div>
        </>
      ) : (
        <>
          <h2 className="display-6 fw-bold mb-4 text-primary">
            Our Mission: Empowering New Beginnings
          </h2>
          <p className="lead">
            We are a global collective of 1,000+ volunteers, united by a
            shared commitment to help you navigate your new beginnings. We
            are here to help you find your path, no matter where it takes
            you.
          </p>
          <div className="mt-4">
            <button className="btn btn-primary me-3">Join Us Today</button>
            <button className="btn btn-outline-secondary">
              Learn More
            </button>
          </div>
        </>
      )}
    </div>
  </div>
</div>

{/* Features Section */}
<div className="bg-light py-5">
  <div className="container">
    <div className="row text-center">
      <div className="col-md-4">
        <i className="bi bi-house-door-fill fs-1 text-primary"></i>
        <h4 className="mt-3 fw-bold">Find Safe Accommodation</h4>
        <p>
          Trusted listings to help students and migrants find affordable and safe places to stay.
        </p>
      </div>
      <div className="col-md-4">
        <i className="bi bi-people-fill fs-1 text-primary"></i>
        <h4 className="mt-3 fw-bold">Local Community Support</h4>
        <p>
          Connect with local volunteers and fellow newcomers for guidance and friendship.
        </p>
      </div>
      <div className="col-md-4">
        <i className="bi bi-globe2 fs-1 text-primary"></i>
        <h4 className="mt-3 fw-bold">Navigate with Ease</h4>
        <p>
          Access curated resources about transport, food, colleges, and essential services.
        </p>
      </div>
    </div>
  </div>
</div>

{/* About the Project */}
<div className="container py-5">
  <div className="row justify-content-center text-center">
    <div className="col-lg-10">
      <h3 className="fw-bold mb-4">About This Project</h3>
      <p className="fs-5 mt-4">
          <strong>Sehar Sehpathi</strong> was developed as a final year project by B.Tech (Bachelor of Technology)  students of <strong>Swami Rama Himalayan University (SRHU)</strong>. The team includes <strong>Abhishek Singh, Saumya Thapliyal, Sukhbir Rawat, Jai Semwal, Shubham Butola  </strong> and <strong>Shriyansh Rawat</strong> — all committed to building meaningful solutions for real-life student challenges.
        </p>
    </div>
  </div>
</div>

        </div>
      </div>
    );
  }

  // If not authenticated, show register form + google sign in
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body text-center p-5">
              <h2 className="mb-4">Welcome to Sehar-Sehpathi</h2>
              <p className="text-muted mb-4">
                Please register and then sign in to continue
              </p>

              {!registered ? (
                <form onSubmit={handleRegister} className="mb-4 text-start">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={form.password}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <button type="submit" className="btn btn-success w-100">
                    Register
                  </button>
                </form>
              ) : (
                <div className="alert alert-success mb-4" role="alert">
                  You are registered! Now please sign in with Google.
                </div>
              )}

              <button
                onClick={() => signIn("google")}
                className="btn btn-primary d-flex align-items-center justify-content-center mx-auto px-4 py-2"
              >
                <Image
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
                  alt="Google logo"
                  width={70}
                  height={70}
                  className="me-2"
                />
                Sign in with Google
              </button>

              <div className="mt-4 pt-3 border-top">
                <p className="small text-muted">
                  By signing in, you agree to our Terms of Service and Privacy
                  Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
