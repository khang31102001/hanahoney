"use client"
import YouTube from 'react-youtube';
import { useState } from 'react';
import Image from 'next/image';
import { FullscreenVideoPlayer } from '../ui/fullscreen-video-player';

export const videoSection = {
  videoId: "5RLirWPNTLw",
  thumbnail: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848109/hive-1094857_640_bcysvo.jpg",
  title: "The Story of Hana Honey and our honey.",
};

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <section className="shopify-section section section-video py-4 px-4 bg-white">
      <div className="max-w-5xl mx-auto py-6">
      <div className="relative rounded-xl overflow-hidden shadow-lg ">
        {!isPlaying ? (
          <button onClick={handlePlay} className="w-full h-full relative group aspect-video">
            <Image width={2000} height={1000} src="https://res.cloudinary.com/dwqqve7ja/image/upload/v1753885889/bees-6147460_640_qctdfk.jpg" alt="hannahoney" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-full shadow-md hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        ) : (
          // <div className="w-full h-full aspect-[16/10] min-h-[50px]">
          //   <YouTube videoId={videoSection.videoId} opts={opts} className="w-full h-full" />
          // </div>
          <FullscreenVideoPlayer 
          src="https://res.cloudinary.com/dwqqve7ja/video/upload/v1759915291/4118263228975216252_llrgqt.mp4" 
          poster='https://res.cloudinary.com/dwqqve7ja/image/upload/v1753885889/bees-6147460_640_qctdfk.jpg'
          onClose={handlePlay} 
          />
        )}
      </div>

      </div>
    </section>
  );
};

export default VideoSection;
