'use client';

import { JSX } from "react";

export default function SignupButton({
    leading,
    text,
    action = () => { },
}: {
    leading: JSX.Element;
    text: string;
    action: () => void;
}) {
    return (
        <button
            className="bg-gray-container w-full flex items-center justify-center gap-3 text-white font-bold text-sm rounded-lg px-4 py-2 hover:cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            onClick={action}
        >
            {leading}
            {text}
        </button>
    );
}