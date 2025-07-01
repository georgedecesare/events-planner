'use client';

import { signOut } from 'next-auth/react';

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="rounded-full bg-gray-container px-6 py-3 text-white flex flex-row items-center
        gap-2 cursor-pointer no-underline overflow-hidden"
    >
      Sign Out
      <span className="material-symbols-outlined">logout</span>
    </button>
  );
}
