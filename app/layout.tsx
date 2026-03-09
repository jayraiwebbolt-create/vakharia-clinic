import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Vakharia Multispeciality Dental Clinic - Expert Dental Care in Ahmedabad',
  description: 'Experience exceptional dental care with advanced modern technology and compassionate service. Offering dental implants, Invisalign, teeth whitening, and more.',
  openGraph: {
    title: 'Vakharia Multispeciality Dental Clinic',
    description: 'Experience exceptional dental care with advanced modern technology and compassionate service.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vakharia Multispeciality Dental Clinic',
    description: 'Experience exceptional dental care with advanced modern technology and compassionate service.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
