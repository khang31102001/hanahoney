// app/blog/page.tsx

import ListBlog from '@/components/Blog/ListBlog';
import ListVideo from '@/components/Blog/ListVideo';
import { blog, dataVideo } from '@/data/blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HanaHoney Blog | Tips, Benefits & Stories About Australian Honey',
  description:
    'Discover expert tips, health benefits, recipes, and inspiring stories about pure Australian honey on the HanaHoney blog. Learn how honey fits into a healthy, natural lifestyle.',
  keywords: [
    'HanaHoney blog',
    'Australian honey tips',
    'health benefits of honey',
    'honey skincare',
    'honey recipes',
    'natural lifestyle blog',
    'raw honey knowledge',
  ],
  alternates: {
    canonical: 'https://hanahoney.com.au/blog',
  },
  openGraph: {
    title: 'HanaHoney Blog | Tips, Benefits & Stories About Australian Honey',
    description:
      'From health tips to recipes and skincare – explore how HanaHoney’s pure Australian honey enhances your life naturally.',
    url: 'https://hanahoney.com.au/blog',
    type: 'website',
    images: [
      {
        url: 'https://hanahoney.com.au/images/og-blog-hanahoney.jpg',
        width: 1200,
        height: 630,
        alt: 'HanaHoney Blog – Pure Australian Honey Tips & Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HanaHoney Blog | Tips, Benefits & Stories About Australian Honey',
    description:
      'Read tips, health insights, and stories about Australian honey. Stay informed with HanaHoney’s natural lifestyle blog.',
    images: ['https://hanahoney.com.au/images/og-blog-hanahoney.jpg'],
  },
};

export default function Blog() {
    return(
        <div className="min-h-screen bg-white mt-4">
            <ListBlog data={blog} />
            <ListVideo data={dataVideo}/>
        </div>
    )
}