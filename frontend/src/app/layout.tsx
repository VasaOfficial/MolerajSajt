import '@/styles/global.css';
import '@smastrom/react-rating/style.css'
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { ReactQueryProvider } from './ReactQueryProvider'; 

import type { Metadata } from 'next';

import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['namestaj, stolarija, prozori i stolice, drvo'],
  title: 'Teoprof',
  creator: 'Vasilije i Aleksa',
  description:
    'Dobrodošli na naš sajt posvećen nameštaju i stolariji od drveta - vašem jedinstvenom izvoru inspiracije i rešenja za stvaranje toplih i elegantnih prostora u vašem domu ili poslovnom okruženju. Naša stranica je dizajnirana kako bi vam pružila širok izbor kvalitetnih proizvoda od drveta koji će zadovoljiti vaše najrazličitije potrebe i estetske preferencije.',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
    <html lang="en">
      <body>
        <main className="flex h-screen flex-col items-center justify-center">
          <Navbar />
          <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY}>
            {children}
          </ReCaptchaProvider>
        </main>
      </body>
    </html>
    </ReactQueryProvider>
  );
}
