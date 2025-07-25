import BlogDetail from "@/components/Blog/blogDetail";
import {  blog } from "@/data/blog";

interface BlogProps {
  params: {
    slug: string
  }
}
export default function BlogDetailPage({ params }: BlogProps) {
    const { slug } = params;
    const findBlog = blog.find(item => item.id === (Number(slug)));
    if (!findBlog) return null;
    return(
        <main>
            <BlogDetail data={findBlog} />    
        </main>
    )
}