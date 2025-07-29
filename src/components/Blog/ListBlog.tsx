"use client"
import { Blog } from "@/data/blog";
import { useState } from "react";
import BlogCard from "./blogCard";
import { useRouter } from "next/navigation";

interface BlogProps {
    data: Blog[];
}
const ListBlog = ({data}: BlogProps)=> {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;
    const totalPages = Math.ceil(data.length / blogsPerPage);
    const startIdx = (currentPage - 1) * blogsPerPage;
    const endIdx = startIdx + blogsPerPage;
    const currentBlogs = data.slice(startIdx, endIdx);
    const navigate = useRouter();

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleBlogClick = (slug: string) => {
        navigate.push(`/blog/${slug}`);
    };
    if(!currentBlogs) return null;
    return(
         <div className="content-for-layout focus-none" role="main" tabIndex={-1}>
                <div className="main-site-container max-w-8xl mx-auto px-4 sm:px-6 lg:px-40">
                    <h1 className="title--primary text-4xl font-extrabold ">Discover</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8">
                        {currentBlogs.map((item, index) => {
                            return (
                                <div key={index} onClick={() => handleBlogClick(item.slug)} className="cursor-pointer">
                                    <BlogCard blog={item} />
                                </div>
                            )
                        })}
                    </div>
                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-8 mb-12 gap-4">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handlePageChange(i + 1)}
                                    className={`px-3 py-1 rounded transition border-b-2 ${currentPage === i + 1 ? "border-black font-bold" : "border-transparent"}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
    )
}

export default ListBlog;