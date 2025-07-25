// app/partnerships/page.tsx

import { BannerHeader, ImageSlider, PartnerShipIntro, PartnerTestimonials } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partnerships | HanaHoney – Collaborate with Our Premium Honey Brand',
  description:
    'Partner with HanaHoney to bring high-quality Australian honey to more people. We welcome retailers, distributors, and wellness brands to grow with us.',
  keywords: [
    'HanaHoney partnerships',
    'honey distributor Australia',
    'honey retail partner',
    'collaboration with HanaHoney',
    'wholesale honey Australia',
    'bulk honey supplier',
    'Australian honey export partner',
  ],
  alternates: {
    canonical: 'https://hanahoney.com.au/partnerships',
  },
  openGraph: {
    title: 'Partnerships | HanaHoney – Collaborate with Our Premium Honey Brand',
    description:
      'HanaHoney partners with retailers, distributors, and wellness brands to share pure Australian honey worldwide. Let’s build something sweet together.',
    url: 'https://hanahoney.com.au/partnerships',
    type: 'website',
    images: [
      {
        url: 'https://hanahoney.com.au/images/og-partnerships-hanahoney.jpg',
        width: 1200,
        height: 630,
        alt: 'Partner with HanaHoney – Premium Australian Honey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partnerships | HanaHoney – Collaborate with Our Premium Honey Brand',
    description:
      'Let’s grow together. HanaHoney is seeking distribution and retail partners across the globe who share our values of purity, sustainability, and wellness.',
    images: ['https://hanahoney.com.au/images/og-partnerships-hanahoney.jpg'],
  },
};

export default function Partnerships() {
  return (
    <main>
      <BannerHeader title="" className="w-full h-full" backgroundImage="/images/banner-partnetship.jpg">
        <div className="text-center max-auto px-6 h-full">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Together, We Bring Premium
            <span className="text-amber-600 block">Australian Honey</span>
            to the World
          </h1>

          <p className="text-xl md:text-2xl text-amber-800 mb-12 animate-fade-in">
            Proud to work with trusted partners in Singapore, Vietnam, Australia, and beyond.
          </p>

        </div>
      </BannerHeader>
      <PartnerShipIntro />
      <ImageSlider />
      <PartnerTestimonials />
    </main>
  )
}