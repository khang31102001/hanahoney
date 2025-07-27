import BlogDetail from "@/components/Blog/blogDetail";
// import {  blog } from "@/data/blog";

interface BlogProps {
  params: {
    slug: string
  }
}
export async function generateStaticParams() {
  try{
    const blog = await import('@/data/blog').then(mod => mod.blog);
    return blog.map((item)=>({
    slug: item.slug
  }));
  }catch (error) {
    console.error("Error generating static params:", error);
    // Handle the error appropriately, e.g., return an empty array or rethrow
    return [];
  }
  
}
export default async function BlogDetailPage({ params }:BlogProps ) {
    const blog = await import('@/data/blog').then(mod => mod.blog);
    const findBlog = blog.find(item => item.slug === params.slug);
    if (!findBlog) return null;
    return(
        <main>
            <BlogDetail data={findBlog} />    
        </main>
    )
}