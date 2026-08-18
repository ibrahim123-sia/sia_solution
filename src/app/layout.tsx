import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
});

export const viewport: Viewport = {
  themeColor: '#F7F6F3',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://siatech.pk'),
  title: {
    default: 'SIA Technologies — We build your website first. You pay once it’s live.',
    template: '%s · SIA Technologies',
  },
  description:
    'Founder-led web and AI development studio in Karachi. We build your complete website or store first — you only pay once it is live and working.',
  keywords: [
    'website developer Karachi',
    'ecommerce website Pakistan',
    'custom website for small business',
    'AI chatbot developer',
    'Shopify alternative custom store',
    'SIA Technologies',
    'web development studio Pakistan',
  ],
  authors: [{ name: 'Syed Ibrahim Ali', url: 'https://siatech.pk' }],
  creator: 'Syed Ibrahim Ali',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://siatech.pk',
    siteName: 'SIA Technologies',
    title: 'SIA Technologies — We build your website first. You pay once it’s live.',
    description:
      'We build your complete website first; you use it; you pay only once it’s live and you’re happy. No advance, no deposit.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIA Technologies — We build your website first. You pay once it’s live.',
    description:
      'We build your complete website first; you use it; you pay only once it’s live and you’re happy. No advance, no deposit.',
    creator: '@siatechpk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-paper text-charcoal antialiased selection:bg-petrol-tint selection:text-petrol min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
