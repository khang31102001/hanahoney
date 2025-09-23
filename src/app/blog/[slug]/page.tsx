import BlogDetail from "@/components/Blog/blogDetail";
import {  blog } from "@/data/blog";

export type  paramsType = Promise<{ slug: string }>;
export async function generateStaticParams() {
  try{
    return blog.map((item)=>({ slug: item.slug}));
  }catch (error) {
    console.error("Error generating static params:", error);
    // Handle the error appropriately, e.g., return an empty array or rethrow
    return [];
  }
  
}
export default async function BlogDetailPage(props: {params: paramsType} ) {
    const {slug} = await props.params
    
    const findBlog = await blog.find(item => item.slug === slug);
    if (!findBlog) return <div>Blog not found</div>;;
    return(
        <div className="space-y-6">
            <BlogDetail data={findBlog} />    
        </div>
    )
}