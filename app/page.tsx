import Link from 'next/link';
import 'material-symbols';

export default function Home() {
  return (
    <div
      className="grid min-h-full grid-rows-[20px_1fr_20px] items-center justify-items-center
        gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20"
    >
      <Link
        href="/signup"
        className="rounded-full bg-gray-container px-6 py-3 text-white flex flex-row items-center
          gap-2 cursor-pointer no-underline overflow-hidden"
        draggable="false"
      >
        Go to Sign Up
        <span className="material-symbols-outlined">arrow_right_alt</span>
      </Link>
    </div>
  );
}
