"use client"
import { Play } from "lucide-react";
import Image from "next/image";
// import { useState } from "react";

interface Props {
    video: {
        id: number;
        title: string;
        src: string;
        thumbnail: string;
    };
    onClick?: () => void;
}
const VideoCard = ({ video, onClick }: Props) => {
    return (
        <div
            className="group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            onClick={onClick}
            style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
        >
            <div className="relative overflow-hidden">
                {/* Thumbnail */}
                <div className="aspect-video w-full overflow-hidden">
                    <Image
                        width={640}
                        height={360}
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
                    />
                </div>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 flex items-center justify-center bg-honey-200 bg-opacity-80 rounded-full transition-transform duration-300 group-hover:scale-110">
                        <Play className="text-honey-600" size={28} />
                    </div>
                </div>
            </div>

            {/* Title */}
            <div className="p-2">
                <h3 className="font-medium text-lg text-gray-800">{video.title}</h3>
            </div>
        </div>
    )
}

export default VideoCard