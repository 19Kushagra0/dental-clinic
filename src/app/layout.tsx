import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
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
    default: "SmileCraft Digital – Precision Dental Clinic Hyderabad",
    template: "%s | SmileCraft Hyderabad",
  },
  description:
    "SmileCraft Digital Dental Studio in Banjara Hills, Hyderabad offers 3D oral scanning, same-day CEREC crowns, guided implants, and pain-free laser care. Rated 4.9/5.",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "SmileCraft Digital Dental Studio",
    title: "SmileCraft Digital – Precision Dental Clinic Hyderabad",
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
      {
        url: "/og-image-square.jpg",
        width: 600,
        height: 600,
        type: "image/jpeg",
        alt: "SmileCraft Digital Dental Studio Banjara Hills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmileCraft Digital – Precision Dental Clinic Hyderabad",
    description:
      "Sub-micron 3D oral scanning, same-day CEREC® crowns, and guided implant surgery in Banjara Hills.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
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
    <html lang="en" className={`${plusJakartaSans.variable} ${outfit.variable}`}>
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
