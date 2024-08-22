import '../styles/global.css';

import { Montserrat, Oswald } from 'next/font/google';
import Navbar from 'components/Navbar';

import { ReactQueryProvider } from './providers/ReactQueryProvider';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata = {
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
        <html lang="eng">
          <head>
            <meta
              name="google-site-verification"
              content="kvEgrUV1XzzgH8aAmsPpDQoPz7MhygDK4yzKKHWusVk"
            />
          </head>
          <body>
            <Navbar />
            <main
              className={`${oswald.variable} ${montserrat.variable} flex h-screen flex-col items-center justify-center`}
            >
                {children}
            </main>
          </body>
        </html>
    </ReactQueryProvider>
  );
}
