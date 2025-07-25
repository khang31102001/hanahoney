import { AboutSection, DailyUseSection, TotalActivitySection, WAUniqueBenefitsSection, WhyChooseSection } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | HanaHoney – Pure Australian Honey From Nature',
  description:
    'Learn more about HanaHoney – our story, our commitment to sustainable beekeeping, and our passion for bringing 100% pure Australian honey to the world.',
  keywords: [
    'About HanaHoney',
    'Australian honey brand',
    'HanaHoney company',
    'sustainable beekeeping',
    'natural honey Australia',
    'pure honey story',
    'honey production Australia',
  ],
  alternates: {
    canonical: 'https://hanahoney.com.au/about',
  },
  openGraph: {
    title: 'About Us | HanaHoney – Pure Australian Honey From Nature',
    description:
      'Discover HanaHoney’s mission and the people behind your favorite premium Australian honey. From nature to your table – purity you can trust.',
    url: 'https://hanahoney.com.au/about',
    type: 'website',
    images: [
      {
        url: 'https://hanahoney.com.au/images/og-about-hanahoney.jpg',
        width: 1200,
        height: 630,
        alt: 'Meet HanaHoney – Premium Australian Honey Brand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | HanaHoney – Pure Australian Honey From Nature',
    description:
      'Meet the team behind HanaHoney and discover how we bring the finest Australian honey to homes across the world.',
    images: ['https://hanahoney.com.au/images/og-about-hanahoney.jpg'],
  },
};

export default function About() {
    return (
        <main>
            <AboutSection/>
            <WhyChooseSection/>
            <TotalActivitySection/> 
            <WAUniqueBenefitsSection/> 
            <DailyUseSection/>

        </main>
    );
}