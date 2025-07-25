"use client"
import YouTube from 'react-youtube';
import { useState } from 'react';

export const videoSection = {
  videoId: "5RLirWPNTLw",
  thumbnail: "//honeyforlife.com.au/cdn/shop/files/HONEYFORLIFE_MARRI_WIDE_EDIT_V4.00_01_11_05.Still008.jpg?v=1707724504&width=1920",
  title: "The Story of Honey For Life and our honey.",
};

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
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
          <button onClick={() => setIsPlaying(true)} className="w-full h-full relative group aspect-video">
            <img src={videoSection.thumbnail} alt="Video thumbnail" className="object-cover w-full h-full" />
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
          <div className="w-full h-full aspect-[16/10] min-h-[50px]">
            <YouTube videoId={videoSection.videoId} opts={opts} className="w-full h-full" />
          </div>
        )}
      </div>

      </div>
    </section>
  );
};

export default VideoSection;
