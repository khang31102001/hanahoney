import type React from "react"
import { Poppins, Raleway } from "next/font/google"
import type { Metadata } from "next";
import "@/styles/globals.css";
// ...existing code...
import { Toaster } from "sonner";
import MainLayout from "@/pages/Layout/MainLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
  display: "swap",
})
export const metadata: Metadata = {
  title: {
    default: "HANNA HONEY - Raw Honey from Australia",
    template: "%s | HANNA HONEY",
  },
  description:
    "Explore pure, natural Australian honey harvested sustainably. Premium gift packaging and international shipping available.",
  keywords:
    "raw honey, premium honey, Australian honey, HANA HONEY, gift honey, natural honey, organic honey, manuka honey, eucalyptus honey",
  authors: [{ name: "HANNA HONEY" }],
  creator: "HANNA HONEY",
  publisher: "HANNA HONEY",
  metadataBase: new URL("https://hanahoney.com.au"),
  alternates: {
    canonical: "https://hanahoney.com.au",
  },
  openGraph: {
    title: "HANNA HONEY - Raw Honey from Australia",
    description:
      "High-quality raw honey from Western Australia, harvested with care and perfect for wellness & gifting.",
    url: "https://hanahoney.com.au",
    siteName: "HANNA HONEY",
    images: [
      {
        url: "https://hanahoney.com.au/images/hanahoney.jpg", // Thay bằng ảnh thật
        width: 1200,
        height: 630,
        alt: "Premium Australian Honey Gift Box",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HANNA HONEY - Premium Raw Honey from Australia",
    description:
      "Explore the taste of nature with premium honey sourced from Australia's wildflower regions.",
    images: ["https://hanahoney.com.au/images/hanahoney.jpg"],
    creator: "@hanahoneyau", // Nếu có Twitter handle
  },
  icons: {
    icon: "/favicon/favicon.ico",
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16" },
    ],
    other: [
      { rel: "manifest", url: "/favicon/site.webmanifest" },
    ],
  },
  // themeColor: "#ffffff",
  // colorScheme: "light dark",
  // formatDetection: {
  //   telephone: false,
  //   address: false,
  //   email: false,
  // },
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  //   maximumScale: 1,
  //   userScalable: false,
  // },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "food",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      className={`${poppins.variable} ${raleway.variable}`}
      style={
        {
          "--font-heading": "var(--font-poppins), ui-sans-serif, system-ui, sans-serif",
          "--font-body": "var(--font-raleway), ui-sans-serif, system-ui, sans-serif",
          "--font-sans": "var(--font-raleway), ui-sans-serif, system-ui, sans-serif",
        } as React.CSSProperties
      }
    >
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light dark" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HANNA HONEY",
              url: "https://hanahoney.com.au",
              logo: "https://hanahoney.com.au/images/logo.png",
              description: "Premium raw honey from Australia, sustainably harvested and elegantly packaged.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "AU",
              },
              sameAs: ["https://www.facebook.com/profile.php?id=61577078172378"],
            }),
          }}
        />
        {/* Thêm LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "HANNA HONEY",
              image: "https://hanahoney.com.au/images/hanahoney.jpg",
              telephone: "+61 432 189 874",
              email: "export@aaan.com.au",
              address: {
                "@type": "PostalAddress",
                streetAddress: "15 Birripa Court",
                addressLocality: "Rosebery",
                addressRegion: "Northern Territory",
                postalCode: "0832",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-12.507707097966671",
                longitude: "130.99333194249368"
              },
              openingHours: "Mo-Fr 09:00-17:00",

            }),
          }}
        />

        {/* Thêm WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "HANNA HONEY",
              url: "https://hanahoney.com.au",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://hanahoney.com.au/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Thêm BreadcrumbList Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "HANNA HONEY Premium Raw Honey",
              description: "Pure, natural Australian honey harvested sustainably with premium gift packaging.",
              brand: {
                "@type": "Brand",
                name: "HANNA HONEY",
              },
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "AUD",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
              },
            }),
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <MainLayout>
          {children}
        </MainLayout>
        <Toaster richColors position="bottom-right" />

      </body>
    </html>
  );
}
