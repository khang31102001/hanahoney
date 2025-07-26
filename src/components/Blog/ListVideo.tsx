"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import VideoCard from './VideoCard';
import { useState } from 'react';
import VideoModal from './VideoModal';


interface VideoData {
    id: number;
    title: string;
    src: string;
    thumbnail: string;
}

interface ListVideoProps {
    data?: VideoData[];
}

const ListVideo = ({ data }: ListVideoProps) => {
    const [isOpenVideo, setIsOpenVideo] = useState<boolean>(false);
    const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

    const handleOpen = (item: VideoData) => {
        setSelectedVideo(item);
        setIsOpenVideo(true);

    }
    const handleClose = () => {
        //   setSelectedVideo(null);
        setIsOpenVideo(false)
    }

    if (!data) return null;
    return (
        <section className="py-16">
            <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-40">
                <h1 className="text-gray-900 text-4xl font-extrabold">Video</h1>
                <div className="mt-8">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        slidesPerView={1}
                        spaceBetween={20}
                        breakpoints={
                            {
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }
                        }
                    >
                        {data.map((item, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <div className="mt-2 mb-2">
                                        <VideoCard video={item} onClick={() => handleOpen(item)} />
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                {isOpenVideo && selectedVideo && (
                    <VideoModal isOpen={isOpenVideo} onClose={handleClose} video={selectedVideo} />
                )}
            </div>
        </section>
    )
}

export default ListVideo;