import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AssetMesh - Your Crypto Portfolio, Everywhere',
  description: 'Aggregates fragmented crypto liquidity by providing universal asset search and a unified portfolio dashboard.',
  keywords: ['crypto', 'portfolio', 'DeFi', 'Base', 'blockchain'],
  openGraph: {
    title: 'AssetMesh',
    description: 'Your entire crypto portfolio, everywhere, in one place.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
