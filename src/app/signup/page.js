"use client";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignIn() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [registered, setRegistered] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [isRegister, setIsRegister] = useState(true);

  // ✅ Redirect if already authenticated via session or localStorage
// Remove localStorage check from useEffect
useEffect(() => {
  if (status === "authenticated") {
    router.push("/");
  }
}, [status, router]);


  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Register function
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError("Please fill all fields.");
      return;
    }
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const text = await res.text();
      const data = JSON.parse(text);

      if (!res.ok) {
        setError(data.message || "Registration failed");
        return;
      }
      setRegistered(true);
    } catch (err) {
      setError("Invalid response from server");
    }
  };

  const handleLogin = async (e) => {
  e.preventDefault();

  if (!form.email || !form.password) {
    setError("Please fill all fields.");
    return;
  }

  setError("");

  const res = await signIn("credentials", {
    redirect: false,
    email: form.email,
    password: form.password,
  });

  if (res?.ok) {
    router.push("/");
  } else {
    setError("Invalid Email or password");
  }
};


  // ✅ If logged in (NextAuth), show welcome
  if (status === "authenticated") {
    return (
      <div className="container py-5">
        <h2 className="text-center mb-4">
          Welcome back, {session.user?.name}!
        </h2>
        <div className="text-center">
          <button onClick={() => signOut()} className="btn btn-outline-danger">
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body text-center p-5">
              <h2 className="mb-4">Welcome to Sehar-Sehpathi</h2>
              <p className="text-muted mb-4">Please register or login to continue</p>

              {/* Toggle Buttons */}
              <div className="d-flex justify-content-center mb-4">
                <button
                  onClick={() => setIsRegister(true)}
                  className={`btn me-2 ${isRegister ? 'btn-success' : 'btn-outline-success'}`}
                >
                  Register
                </button>
                <button
                  onClick={() => setIsRegister(false)}
                  className={`btn ${!isRegister ? 'btn-primary' : 'btn-outline-primary'}`}
                >
                  Login
                </button>
              </div>

              {/* Forms */}
              {isRegister ? (
                !registered ? (
                  <form onSubmit={handleRegister} className="text-start">
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
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
                  <div className="alert alert-success" role="alert">
                    You are registered! Now please login.
                  </div>
                )
              ) : (
                <form onSubmit={handleLogin} className="text-start">
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                </form>
              )}

              {/* Google Sign In */}
              <button
                onClick={() => signIn("google")}
                className="btn btn-outline-dark d-flex align-items-center justify-content-center mx-auto mt-3"
              >
                <Image
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
                  alt="Google logo"
                  width={24}
                  height={24}
                  className="me-2"
                />
                Sign in with Google
              </button>

              <p className="small text-muted mt-3 mb-0">
                By signing in, you agree to our Terms and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
