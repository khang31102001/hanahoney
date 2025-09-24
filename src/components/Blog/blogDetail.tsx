"use client"
import { Blog } from "@/data/blog";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface Props {
  data: Blog;
}
const BlogDetail = ({ data }: Props) => {
  const navigate = useRouter();

  if (!data) {
    return <div className="text-center py-20 text-2xl">Bài viết không tồn tại.</div>;
  }

  return (
    <article>
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <Image width={2000} height={600} src={data.image} alt={data.name} className="w-full h-60 object-cover rounded-xl mb-8 mx-auto" />
        <h1 className="max-w-4xl text-3xl md:text-4xl font-bold mb-6 text-center mx-auto py-8">{data.name}</h1>
         <div
          className="
            max-w-3xl mx-auto text-left
            space-y-4
            prose prose-lg md:prose-xl
            prose-headings:text-gray-900
            prose-h1:tracking-tight prose-h1:leading-tight
            prose-h2:text-lg prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-3
            prose-p:mb-5 prose-p:leading-[1.75] prose-p:tracking-[0.01em]
            prose-ul:mt-3 prose-li:mb-2
            prose-blockquote:italic prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:border-gray-200
            prose-img:rounded-xl prose-img:mx-auto
            break-words
          "
          dangerouslySetInnerHTML={{ __html: data.content || '' }}
        />

        <button
          onClick={() => navigate.push('/blog')}
          className="block mx-auto mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded transition-all mt-4"
        >
          ← Back to Blog
        </button>
      </div>
    </article>
  );
};

export default BlogDetail;
