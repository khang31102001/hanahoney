import OptimizedImage from "../ui/optimized-image";

interface Props {
  img?: Images[] | undefined
}
interface Images {
  id: number;
  src: string;
}
const images: Images[] = [
    {id: 1, src: 'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/473477zhz/image-99-hinh-anh-con-ong-mat-moi-nhat-de-thuong-nhat-hien-nay-168048051032227.jpg'},
    {id: 2, src: 'https://cdnmedia.baotintuc.vn/Upload/YZmStSDTjb0M07hFJ2gA/files/2021/09/24/ong-240921.jpg'},
    {id: 3, src: 'https://png.pngtree.com/thumb_back/fw800/background/20230322/pngtree-beekeeper-extracting-honey-from-honeycomb-with-hot-knife-photo-image_50333132.jpg'},
    {id: 4, src: 'https://maydochuyendung.com/img/uploads/images/khuc-xa-ke/kiem-tra-mat-ong.jpg'},
    {id: 5, src: 'https://vigift.vn/wp-content/uploads/2021/04/mat-ong-nhan.jpg'}
]
const  AboutSection = ({img}:Props)=> {
    return(
        <section className="container">
          <div className="max-w-7xl mx-auto p-6 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start md:items-center">
              {/* left content */}
              <div className="space-y-4 max-w-xl ">
                    <h2 className="text-3xl md:text-4xl text-gray-900 font-bold tracking-wide">About HANNA HONEY</h2>
                    <p className="text-gray-700 ">
                        At HANNA HONEY, we deliver more than just honey — we deliver nature’s purest treasure. Sourced exclusively from the pristine, untouched forests of Western Australia, one of the most bio-secure honey regions in the world, free from bee diseases and Varroa mites
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    Every jar is harvested with care, independently tested, and certified for its powerful antibacterial activity through Total Activity (TA), offering true therapeutic benefits far beyond regular honey. Each spoonful of HANNA HONEY is a gift of health, purity, and love
                    </p>
                </div>
                {/* right image */}
                <div className="relative w-full max-w-xl h-[520px]">
                    {/* Image 1: Top right */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex gap-3">
                        <div className="hexagon 
                           w-[200px]  sm:w-[240px] 
                           h-[220px]  sm:h-[240px]"
                       
                        >
                        <OptimizedImage
                          width="240"
                          height="240"
                          src={images[0].src}
                          alt="images"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Image 2: Top right */}
                      <div className="hexagon transform translate-y-14
                        w-[180px] sm:w-[200px] 
                        h-[180px] sm:h-[200px]"
                      >
                        <OptimizedImage
                          width="200"
                          height="200"
                          src={images[1].src}
                          alt="images"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                

                    {/* Image Row Bottom */}
                    <div className="absolute bottom-[8rem] sm:bottom-[6rem] left-1/2 -translate-x-1/2 flex gap-3">
                      {[images[2], images[3], images[4]].map((img, i) => (
                        <div
                          key={i}
                          className="hexagon w-[120px] sm:w-[160px] 
                          h-[140px] sm:h-[160px] overflow-hidden"
                        >
                          <OptimizedImage
                            width="160"
                            height="160"
                            src={img.src}
                            alt={`image-${i}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

            </div>
          </div>
        </section>
    )
}

export default AboutSection