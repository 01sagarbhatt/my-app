'use client';
import { signIn, signOut, useSession } from "next-auth/react";

export default function GoogleAuth() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="mt-0">
        <p>Welcome, {session.user.name}</p>
        <button onClick={() => signOut()} className="btn btn-danger">Sign Out</button>
      </div>
    );
  }

  return (
    <div className="mt-0">
      <button onClick={() => signIn("google")} className="w-100 btn btn-outline-primary">
        Sign up with Google
      </button>
    </div>
  );
}
