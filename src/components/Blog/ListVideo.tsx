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

const ListVideo = () =>{
    const [isOpenVideo, setIsOpenVideo] = useState<boolean>(false);
    const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
    const dataVideo: VideoData[] = [
        {
            id: 1,
            title: "Video 1",
            src: "https://res.cloudinary.com/dwqqve7ja/video/upload/v1752848106/1073-142790237_tiny_czazos.mp4",
            thumbnail: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848108/bees-5028160_640_spf20x.jpg"
        },
        {
            id: 2,
            title: "Video 2",
            src: "https://res.cloudinary.com/dwqqve7ja/video/upload/v1752848103/31854-389248716_tiny_ofeumj.mp4",
            thumbnail: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848113/honey-bees-326334_640_uuk5yu.jpg"
        },
        {
            id: 3,
            title: "Video 3",
            src: "https://res.cloudinary.com/dwqqve7ja/video/upload/v1752848159/35619-406256504_tiny_i6iq4k.mp4",
            thumbnail: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848109/hive-1094857_640_bcysvo.jpg"
        },
        {
            id: 4,
            title: "Video 4",
            src: "https://res.cloudinary.com/dwqqve7ja/video/upload/v1752848162/178049-858827907_tiny_mwwfyd.mp4",
            thumbnail: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848103/beer-5433299_640_scfz7q.jpg"
        },
        {
            id: 5,
            title: "Video 5",
            src: "https://www.youtube.com/embed/VIDEO_ID_3",
            thumbnail: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848105/beekeeper-4426003_640_yiety1.jpg"
        },
        {
            id: 6,
            title: "Video 6",
            src: "https://www.youtube.com/embed/VIDEO_ID_3",
            thumbnail: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848105/bee-9500879_640_vlvaal.webp"
        },
        {
            id: 7,
            title: "Video 7",
            src: "https://www.youtube.com/embed/VIDEO_ID_3",
            thumbnail: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848105/beekeeper-4426003_640_yiety1.jpg"
        },
        {
            id: 8,
            title: "Video 8",
            src: "https://www.youtube.com/embed/VIDEO_ID_3",
            thumbnail: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848102/beekeeper-2650664_640_h2fg2v.jpg"
        }
    ]
    const handleOpen = (item: VideoData)=>{
        setSelectedVideo(item);
        setIsOpenVideo(true);
        
    }
    const handleClose= () => {
    //   setSelectedVideo(null);
      setIsOpenVideo(false)
    }
    return(
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
                        640: { slidesPerView: 1},
                        768: { slidesPerView: 3},
                        1024: { slidesPerView: 4},
                    }
                   }
                   >
                    {dataVideo.map((item, idx) => {
                        return(
                            <SwiperSlide key={idx}>
                                <div className="mt-2 mb-2">
                                    <VideoCard video={item} onClick={()=>handleOpen(item)}/>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                   </Swiper>
                </div>
                {isOpenVideo && selectedVideo &&(
                    <VideoModal isOpen={isOpenVideo} onClose={handleClose} video={selectedVideo} />
                )}
            </div>
        </section>
    )
}

export default ListVideo;