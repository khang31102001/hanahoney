import type React from "react"
import { Poppins, Raleway } from "next/font/google"
import type { Metadata } from "next";
import "@/styles/globals.css";
// ...existing code...
import { Footer, Header, SocialSidebar } from "@/components";
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
    default: "HANA HONEY - Raw Honey from Australia",
    template: "%s | HANA HONEY",
  },
  description:
    "Explore pure, natural Australian honey harvested sustainably. Premium gift packaging and international shipping available.",
  keywords:
    "raw honey, premium honey, Australian honey, HANA HONEY, gift honey, natural honey, organic honey, manuka honey, eucalyptus honey",
  authors: [{ name: "HANA HONEY" }],
  creator: "HANA HONEY",
  publisher: "HANA HONEY",
  metadataBase: new URL("https://hanahoney.com.au"),
  alternates: {
    canonical: "https://hanahoney.com.au",
  },
  openGraph: {
    title: "HANA HONEY - Raw Honey from Australia",
    description:
      "High-quality raw honey from Western Australia, harvested with care and perfect for wellness & gifting.",
    url: "https://hanahoney.com.au",
    siteName: "HANA HONEY",
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
    title: "HANA HONEY - Premium Raw Honey from Australia",
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
  themeColor: "#ffffff",
  colorScheme: "light dark",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
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
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        {children}
        <Footer />
        <SocialSidebar />
      </body>
    </html>
  );
}
