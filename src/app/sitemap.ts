import type { MetadataRoute } from "next"

// Mock function - replace with your actual data fetching
async function getBlogPosts() {
  // This would typically fetch from your database or CMS
  return [
    { slug: "is-honey-halal-clarifying-honey-in-islamic-diet", lastModified: "2024-01-15" },
    { slug: "why-raw-honey-is-better-than-processed-honey", lastModified: "2024-01-20" },
    { slug: "can-diabetics-consume-honey-facts-and-guidelines", lastModified: "2024-01-25" },
  ]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:3000"

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/honey`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/partnership`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ]

  // Dynamic blog posts
  const blogPosts = await getBlogPosts()
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}
