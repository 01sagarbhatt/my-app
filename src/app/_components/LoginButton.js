'use client';

import { signIn } from 'next-auth/react';

export default function LoginButton() {
  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={() => signIn('google')}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Sign in with Google
      </button>
    </div>
  );
}
