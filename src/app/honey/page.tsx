import { BannerHeader, ProductList } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'HanaHoney | Premium Australian Honey Products',
  description:
    "Explore HanaHoney's premium collection of 100% natural Australian honey. Perfect as gifts or for daily wellness – shop Red Gum, Jarrah, and Blackbutt honey today!",
  keywords: [
    'HanaHoney',
    'Australian honey',
    'Jarrah honey',
    'Red Gum honey',
    'Blackbutt honey',
    'premium honey gifts',
    'honey Singapore',
    'honey Vietnam',
    'raw honey',
  ],
  alternates: {
    canonical: 'https://hanahoney.com.au/products',
  },
  openGraph: {
    title: 'HanaHoney | Premium Australian Honey Products',
    description:
      'Discover our best-selling Australian honey varieties – Jarrah, Red Gum, Blackbutt & more. Naturally harvested, rich in antioxidants, beautifully packaged.',
    url: 'https://hanahoney.com.au/products',
    type: 'website',
    images: [
      {
        url: 'https://hanahoney.com.au/images/og-honey-products.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Australian Honey from HanaHoney',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HanaHoney | Premium Australian Honey Products',
    description:
      'Shop natural Australian honey – Jarrah, Red Gum, and Blackbutt. Premium quality for health, gifts & more.',
    images: ['https://hanahoney.com.au/images/og-honey-products.jpg'],
  },
};


export default function Honey() {
  return (
    <main>
      <BannerHeader
        className="w-full h-full"
        backgroundImage="https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848103/beer-5433299_640_scfz7q.jpg"
        title="PURE BEE PRODUCTS"
        backgroundPosition=""
      ></BannerHeader>
      <ProductList />

    </main>
  )
}