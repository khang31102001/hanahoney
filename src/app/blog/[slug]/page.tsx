import BlogDetail from "@/components/Blog/blogDetail";
import {  blog } from "@/data/blog";

// interface BlogProps {
//   params: {
//     slug: string
//   }
// }
export async function generateStaticParams() {
  return blog.map((item)=>({
    slug: item.slug
  }));
}
export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const findBlog = blog.find(item => item.slug === slug);
    if (!findBlog) return null;
    return(
        <main>
            <BlogDetail data={findBlog} />    
        </main>
    )
}