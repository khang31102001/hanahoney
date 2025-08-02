import { BannerHeader, ContactInfor } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | HanaHoney – Get in Touch with Our Team',
  description:
    'Have a question or want to collaborate with HanaHoney? Contact us for product inquiries, wholesale partnerships, or customer support. We’d love to hear from you.',
  keywords: [
    'Contact HanaHoney',
    'HanaHoney support',
    'HanaHoney wholesale',
    'Australian honey contact',
    'honey distributor Australia',
    'get in touch HanaHoney',
    'HanaHoney customer service',
  ],
  alternates: {
    canonical: 'https://hanahoney.com.au/contact',
  },
  openGraph: {
    title: 'Contact Us | HanaHoney – Get in Touch with Our Team',
    description:
      'Reach out to the HanaHoney team for questions, collaborations, or support. We’re here to help with all your honey-related needs.',
    url: 'https://hanahoney.com.au/contact',
    type: 'website',
    images: [
      {
        url: 'https://hanahoney.com.au/images/og-contact-hanahoney.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact HanaHoney – Australian Premium Honey Brand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | HanaHoney – Get in Touch with Our Team',
    description:
      'Contact HanaHoney for questions, wholesale opportunities, or support. Let’s connect and bring premium Australian honey to your table.',
    images: ['https://hanahoney.com.au/images/og-contact-hanahoney.jpg'],
  },
};
export default function Contact(){
  return (
    <main>
      <BannerHeader title="Contact Us" className="w-full h-full" backgroundImage="/images/banner_contact.jpg">
        <div className="text-center max-auto px-6 h-full">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            We are Here to Help
          </h1>
          <p className="text-xl md:text-2xl text-honey-600 mb-12 animate-fade-in">
            Have questions or want to collaborate? Reach out to us anytime.
          </p>
        </div>
      </BannerHeader>

      <ContactInfor />
    </main>
  );
}
