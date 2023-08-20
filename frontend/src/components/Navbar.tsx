import Link from 'next/link';

import { buttonVariants } from './ui/button';

export default function Navbar() {
  return (
    <div className="fixed top-0 z-50 w-full border-b border-s-zinc-200 bg-zinc-100 py-2">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="lucide lucide-paintbrush-2 no-underline"
          >
            <path d="M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z" />
            <path d="M6 12V2h12v10" />
            <path d="M14 2v4" />
            <path d="M10 2v2" />
          </svg>
        </Link>
        <Link className={`${buttonVariants()} no-underline`} href="/login">
          Sign in
        </Link>
      </div>
    </div>
  );
}
