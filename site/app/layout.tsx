import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { siteOrigin, sitePath } from '@/lib/site';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: 'Aarnav Choudhary | Machine Learning & Research',
  description:
    'UCLA Computer Science and Mathematics undergraduate researching representation learning, automated theorem proving, and AI safety.',
  icons: { icon: sitePath('/favicon.svg') },
  openGraph: {
    title: 'Aarnav Choudhary | Machine Learning & Research',
    description:
      'Representation learning, automated theorem proving, and AI safety at UCLA.',
    type: 'website',
    url: siteOrigin,
    images: [
      {
        url: sitePath('/og.png'),
        alt: 'Aarnav Choudhary — Machine Learning & Research',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aarnav Choudhary | Machine Learning & Research',
    description:
      'Representation learning, automated theorem proving, and AI safety at UCLA.',
    images: [sitePath('/og.png')],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-shell">
          <header className="site-header">
            <a
              className="wordmark"
              href={sitePath('/')}
              aria-label="Aarnav Choudhary home"
            >
              aarnav<span className="accent">.</span>
            </a>
            <nav aria-label="Main navigation">
              <a href={sitePath('/#research')}>Research</a>
              <a href={sitePath('/experience')}>Experience</a>
              <a href="mailto:aarnav11@g.ucla.edu">Contact ↗</a>
            </nav>
          </header>
          {children}
          <footer className="site-footer">
            <p>© 2026 Aarnav Choudhary</p>
            <nav aria-label="Contact and social links">
              <a href="mailto:aarnav11@g.ucla.edu">Email ↗</a>
              <a
                href="https://github.com/aarnav-11"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/aarnavchou"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
