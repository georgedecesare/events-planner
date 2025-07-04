'use client';

import { JSX } from 'react';

export default function SignupButton({
  leading,
  text,
  action = () => {},
  type = 'button',
}: {
  leading: JSX.Element;
  text: string;
  action?: () => void;
  type: 'button' | 'submit';
}) {
  return (
    <button
      className="bg-gray-container focus:ring-opacity-50 flex w-full items-center justify-center
        gap-3 rounded-lg px-4 py-2 text-sm font-bold text-white transition-colors
        duration-200 hover:cursor-pointer focus:ring-2 focus:ring-blue-500
        focus:outline-none mt-2"
      onClick={action}
      type={type}
    >
      {leading}
      {text}
    </button>
  );
}
