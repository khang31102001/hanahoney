"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles/siwiper-custom.css'
import OptimizedImage from '../ui/optimized-image';

const ImageSlider = ()=> {

    const partnershipImages = [
        {
          id: 1,
          src: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1750748180/ad9d67ff-7267-44f9-980c-01fcb02ba370_h3gwcz.jpg",
          alt: "Partnership meeting in Singapore",
          caption: "Building partnerships across Asia-Pacific"
        },
        {
          id: 2,
          src: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1750748180/fa4a5b78-bd79-4fb6-b9ab-fdaddb2b28ab_gvqz5q.jpg",
          alt: "Premium honey products in retail",
          caption: "Premium honey in premium stores"
        },
        {
          id: 3,
          src: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1750748180/f0498135-053e-4c99-9b62-8164f847dabf_ffsfvx.jpg",
          alt: "Distribution network",
          caption: "Global distribution excellence"
        },
        {
          id: 4,
          src: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1750748180/dbb68c48-b8f8-49f2-aac8-5452b08ca03b_rhspfb.jpg",
          alt: "Quality assurance",
          caption: "Maintaining therapeutic-grade quality"
        },
        {
          id: 5,
          src: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1750748180/66ecda9b-5fb0-4a74-b9f3-3f482048b828_dmbgvd.jpg",
          alt: "Western Australia forests",
          caption: "Pristine forests of Western Australia"
        },
        {
            id: 6,
            src: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1750748180/6de7b436-55a6-4cd1-9f43-c89832949ac6_ginua3.jpg",
            alt: "Western Australia forests",
            caption: "Pristine forests of Western Australia"
          }
      ];
      
    return(
        <section className="py-20 ">
            <div className="container max-auto pad-section">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 ">Our Partnership Moment</h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                         From pristine Australian forests to global shelves - witness our collaborative success
                    </p>
                </div>

                {/* /// image slider */}
                <div className="w-full bg-honey-200 py-20">
                    <div className=" max-w-7xl mx-auto px-4 md:px-8 ">
                        <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        modules = {[Navigation, Pagination, Autoplay]}
                        loop={true}
                        autoplay={{ 
                            delay: 3000,
                            disableOnInteraction: false, // vẫn tự chạy dù người dùng bấm
                         }}
                        navigation ={{ 
                            nextEl: '.custom-button-next',
                            prevEl: '.custom-button-prev'
                         }}
                        pagination = {{ 
                            el: '.swiper-pagination',
                            clickable: true 
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        >
                            {partnershipImages.map((img, index)=>{
                                return(
                                    <SwiperSlide key={index}>
                                        <div className="w-full h-[400px] rounded-xl shadow-xl overflow-hidden">
                                            <OptimizedImage src={img.src} alt={img.alt} className="w-full h-full"/>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            <div>
                                <button
                                className="absolute custom-button-prev top-1/2 -translate-y-1/2 bg-honey-200 hover:bg-honey-400 text-honey-700 hover:text-white rounded-full p-2 "
                                onClick={() => {}}
                                >
                                <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
                                </button>
                                <button
                                className="absolute custom-button-next top-1/2 -translate-y-1/2 bg-honey-200 hover:bg-honey-400 text-honey-700 hover:text-white rounded-full p-2 "
                                onClick={() => {}}
                                >
                                <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                                </button>
                            </div>
                            <div className="swiper-pagination"></div>
                        </Swiper>
                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default ImageSlider