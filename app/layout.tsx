import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../src/styles/globals.css';
import { SiteHeader } from '@/src/components/site-header';
import { SiteFooter } from '@/src/components/site-footer';
import { LanguageProvider } from '@/src/components/language-provider';
import businessData from '@/src/data/business.json';

const inter = Inter({ 
  subsets: ['latin', 'greek'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${businessData.brandName} - ${businessData.tagline}`,
    template: `%s | ${businessData.brandName}`,
  },
  description: businessData.tagline,
  keywords: [...businessData.seo.targetKeywordsEL, ...businessData.seo.targetKeywordsEN],
  authors: [{ name: businessData.brandName }],
  creator: businessData.brandName,
  publisher: businessData.brandName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kontorokos.gr'),
  alternates: {
    canonical: '/',
    languages: {
      'el': '/el',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'el_GR',
    alternateLocale: 'en_US',
    url: 'https://kontorokos.gr',
    siteName: businessData.brandName,
    title: `${businessData.brandName} - ${businessData.tagline}`,
    description: businessData.tagline,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${businessData.brandName} - ${businessData.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${businessData.brandName} - ${businessData.tagline}`,
    description: businessData.tagline,
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: businessData.brandName,
    description: businessData.tagline,
    url: 'https://kontorokos.gr',
    telephone: businessData.contact.phone,
    email: businessData.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessData.primaryLocation.address.split(',')[0],
      addressLocality: businessData.primaryLocation.city,
      postalCode: '189 00',
      addressCountry: 'GR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessData.primaryLocation.geo.lat,
      longitude: businessData.primaryLocation.geo.lng,
    },
    openingHours: [
      'Mo-Fr ' + businessData.contact.hours.mon_fri,
      'Sa ' + businessData.contact.hours.sat,
      'Su ' + businessData.contact.hours.sun,
    ],
    servesCuisine: 'Greek',
    priceRange: '€€',
    sameAs: [
      businessData.social.facebook,
      businessData.social.instagram,
      businessData.social.googleBusinessUrl,
    ],
    hasMenu: {
      '@type': 'Menu',
      hasMenuSection: businessData.services.map((service) => ({
        '@type': 'MenuSection',
        name: service.name,
        description: service.desc,
        offers: {
          '@type': 'Offer',
          price: service.priceFrom.replace('€', ''),
          priceCurrency: 'EUR',
        },
      })),
    },
  };

  return (
    <html lang="el" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-body antialiased">
        <LanguageProvider>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}