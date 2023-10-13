import '../styles/global.css';
import '@smastrom/react-rating/style.css'
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { ReactQueryProvider } from './providers/ReactQueryProvider';
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';

import type { Metadata } from 'next';

import Navbar from 'components/Navbar';
import PageIllustration from 'components/PageIllustration';

export const metadata: Metadata = {
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['moleraj, obrenovac, farbanje, farba'],
  title: 'Moleraj Beograd',
  creator: 'Vasilije i Aleksa',
  description:
    'Dobrodošli na naš veb sajt posvećen moleraju u svetu biznisa. Pružamo visokokvalitetne usluge moleraja i farbanja za vaše komercijalne potrebe. Sa stručnim timom i najsavremenijim tehnikama, garantujemo besprekoran izgled vaših prostora. Poboljšajte estetiku i funkcionalnost svojih objekata uz naše usluge. Kontaktirajte nas danas za besplatnu procenu i transformišite svoje poslovne prostore u umetnička dela.',
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <ReactQueryProvider>
      <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
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
      </ClerkProvider>
    </ReactQueryProvider>
  );
}