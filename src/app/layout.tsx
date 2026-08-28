import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : null) ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
  "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "SmileCraft Digital Dental Studio – High-Precision Dental Clinic in Banjara Hills, Hyderabad",
    template: "%s | SmileCraft Digital Dental Studio Hyderabad",
  },
  description:
    "SmileCraft Digital Dental Studio in Banjara Hills, Hyderabad offers cutting-edge digital dentistry: sub-micron 3D oral scanning, same-day CEREC® crowns, 3D CBCT guided implants, and Biolase® pain-free laser care. Rated 4.9/5 by 800+ patients. Book your 3D scan today.",
  keywords: [
    "digital dentist in Hyderabad",
    "3D dental scan Hyderabad",
    "same day crown Hyderabad",
    "CEREC dental clinic Hyderabad",
    "CBCT guided dental implants Banjara Hills",
    "laser dentistry Hyderabad",
    "Invisalign Diamond provider Hyderabad",
    "dentist Banjara Hills Road 12",
    "SmileCraft Digital Dental Studio",
  ],
  authors: [{ name: "SmileCraft Digital Dental Studio" }],
  creator: "SmileCraft Digital Dental Studio",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "SmileCraft Digital Dental Studio",
    title: "SmileCraft Digital – High-Precision Dental Technology in Hyderabad",
    description:
      "Sub-micron 3D intraoral scanning, same-day ceramic crowns, and computer-guided keyhole implants in Banjara Hills, Hyderabad.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "SmileCraft Digital Dental Studio - High-Precision 3D Dental Technology Banjara Hills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmileCraft Digital Dental Studio – Precision Dental Technology",
    description:
      "Sub-micron 3D oral scanning, same-day CEREC® crowns, and guided implant surgery in Banjara Hills.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        {/* Structured data – LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "Dentist", "MedicalBusiness"],
              name: "SmileCraft Digital Dental Studio",
              description:
                "Premier digital dentistry center in Banjara Hills, Hyderabad offering 3D optical scanning, same-day CEREC crowns, computer-guided implants, and pain-free laser dentistry.",
              url: "https://smilecraftdental.com",
              telephone: "+914023456789",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Road No. 12, Banjara Hills",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                postalCode: "500034",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 17.4116,
                longitude: 78.4483,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "10:00",
                  closes: "14:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "800",
              },
              hasMap:
                "https://maps.google.com/?q=SmileCraft+Dental+Studio+Banjara+Hills+Hyderabad",
              priceRange: "₹₹₹",
              image: "https://smilecraftdental.com/dental-scanner-3d.jpg",
              sameAs: [
                "https://www.facebook.com/smilecraftdental",
                "https://www.instagram.com/smilecraftdental",
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
