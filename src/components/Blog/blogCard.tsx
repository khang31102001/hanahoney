import { Blog } from "@/data/blog";
import Image from "next/image";

interface BlogCardProps {
  blog: Blog;
}
const BlogCard = ({ blog }: BlogCardProps) => {
 
  return (
    <div className="bg-white rounded-lg overflow-hidden group cursor-pointer mb-8 min-h-[420px] flex flex-col">

      <div className="relative overflow-hidden flex-1">
        {/* Main Image */}
        <Image
          width={640}
          height={360}
          src={blog.image}
          alt={blog.name}
          className="w-full h-64 object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        
        {/* Hover Image */}
        <Image
          width={640}
          height={360}
          src={blog.hoverImage}
          alt={`${blog.name} - view 2`}
          className="absolute inset-0 w-full h-64 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
      
      {/* Black footer with blog info */}
      <div className="bg-black text-white p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-lg font-bold text-white text-center mb-2 uppercase tracking-wide line-clamp-4 h-[6rem] leading-relaxed">
          {blog.name}
        </h3>
        
     
        <div className="text-center">
          <span
            className="text-orange-400 font-bold text-lg line-clamp-2 min-h-12 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: blog.content
                ? blog.content.replace(/<[^>]+>/g, '').slice(0, 120) + (blog.content.replace(/<[^>]+>/g, '').length > 120 ? '...' : '')
                : ''
            }}
          />
        </div>
      
      </div>
    </div>
  );
};

export default BlogCard;
