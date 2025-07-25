import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: {
    default: "HANA HONEY - Premium Raw Honey from Australia",
    template: "%s | HANA HONEY",
  },
  description:
    "Discover sustainably harvested raw honey from Australia. Perfect for health, gifting, and premium lifestyle.",
  keywords: [
    "raw honey",
    "hanahoney",
    "Australian honey",
    "WA honey",
    "gift honey",
    "natural sweetener",
    "honey benefits",
  ],
  metadataBase: new URL("https://hanahoney.com.au"),
  alternates: {
    canonical: "https://hanahoney.com.au",
  },
  openGraph: {
    title: "HANA HONEY - Premium Raw Honey from Australia",
    description:
      "High-quality raw honey from Western Australia, harvested with care and perfect for wellness & gifting.",
    url: "https://hanahoney.com.au",
    siteName: "HANA HONEY",
    images: [
      {
        url: "https://hanahoney.com.au/og-image.jpg", // Thay bằng ảnh thật
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
    title: "HANA HONEY - Premium Raw Honey from Australia",
    description:
      "Explore the taste of nature with premium honey sourced from Australia's wildflower regions.",
    images: ["https://hanahoney.com.au/og-image.jpg"],
    creator: "@hanahoneyau", // Nếu có Twitter handle
  },
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
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
