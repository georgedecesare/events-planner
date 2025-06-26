'use client';

import { JSX } from 'react';

export default function SignupButton({
  leading,
  text,
  action = () => {},
}: {
  leading: JSX.Element;
  text: string;
  action: () => void;
}) {
  return (
    <button
      className="bg-gray-container focus:ring-opacity-50 flex w-full items-center justify-center
        gap-3 rounded-lg px-4 py-2 text-sm font-bold text-white transition-colors
        duration-200 hover:cursor-pointer focus:ring-2 focus:ring-gray-500
        focus:outline-none"
      onClick={action}
    >
      {leading}
      {text}
    </button>
  );
}
