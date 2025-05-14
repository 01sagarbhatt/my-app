'use client';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect if already authenticated
  useEffect(() => {
    if (status === 'authenticated') {
      // router.push('/services');
    }
  }, [status, router]);

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
          
          <div className="col-md-6">
            <div className="card shadow-lg">
              <div className="text-center mt-3">
                <h4 className="mb-3">Welcome, {session.user.name}!</h4>
                {/* <p className="text-muted mb-4">{session.user.email}</p> */}
              </div>
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
              <p className="text-muted mb-4">Please sign in to continue</p>
              
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
                  By signing in, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>




              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}