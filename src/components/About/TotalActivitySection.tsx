import OptimizedImage from "../ui/optimized-image";

// interface Props {
//     img?: Images[] | undefined
// }
interface Images {
    id: number;
    src: string;
}
const images: Images[] = [
    { id: 1, src: 'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/473477zhz/image-99-hinh-anh-con-ong-mat-moi-nhat-de-thuong-nhat-hien-nay-168048051032227.jpg' },
    { id: 2, src: 'https://cdnmedia.baotintuc.vn/Upload/YZmStSDTjb0M07hFJ2gA/files/2021/09/24/ong-240921.jpg' },
    { id: 3, src: 'https://png.pngtree.com/thumb_back/fw800/background/20230322/pngtree-beekeeper-extracting-honey-from-honeycomb-with-hot-knife-photo-image_50333132.jpg' },
    { id: 4, src: 'https://maydochuyendung.com/img/uploads/images/khuc-xa-ke/kiem-tra-mat-ong.jpg' },
    { id: 5, src: 'https://vigift.vn/wp-content/uploads/2021/04/mat-ong-nhan.jpg' }
]

const description = {
    title: "What is Total Activity (TA)?",
    desc1: "TA measures honey’s total antibacterial power. The higher the TA, the stronger its healing properties for:",
    desc2: ["Fighting bacteria, fungi, viruses, and yeast", "Accelerating wound and skin healing", "Strengthening immunity", "Protecting cells through antioxidant activity"],
    desc3: "TA 30+ is recognized as medicinal grade, while TA 40+ to TA 50+ represents elite therapeutic strength — among the most powerful healing honeys in the world."
}
const honeyCollection = [
    {
        id: 1,
        title: "The King of Antibacterial Honey",
        source: "Sourced from Jarrah Trees (Eucalyptus marginata), unique to Western Australia.",
        certifiedTA: "Certified TA: 46.5+",
        healthBenefits: [
            "Exceptionally strong antibacterial and antimicrobial power, scientifically proven stronger than many Manuka honeys.",
            "Rapid wound healing, skin repair, and burn treatment.",
            "Natural immune booster and gut health support.",
            "High antioxidant levels protect against oxidative stress and support cardiovascular health."
        ],
        taste: "Taste: Deep amber color, smooth woody aroma, elegant natural sweetness.",
        specialNote: "Why it’s Special: Up to 50 percent stronger antibacterial activity than Manuka UMF 10+."
    },
    {
        id: 2,
        title: "Redgum (Marri) Honey – The Gentle Immune Booster",
        source: "Sourced from Jarrah Trees (Eucalyptus marginata), unique to Western Australia.",
        certifiedTA: "Certified TA: 46.5+",
        healthBenefits: [
            "Exceptionally strong antibacterial and antimicrobial power, scientifically proven stronger than many Manuka honeys.",
            "Rapid wound healing, skin repair, and burn treatment.",
            "Natural immune booster and gut health support.",
            "High antioxidant levels protect against oxidative stress and support cardiovascular health."
        ],
        taste: "Taste: Deep amber color, smooth woody aroma, elegant natural sweetness.",
        specialNote: "Why it’s Special: Up to 50 percent stronger antibacterial activity than Manuka UMF 10+."
    },
    {
        id: 3,
        title: "Blackbutt Honey – The Daily Wellness Tonic",
        source: "Sourced from Blackbutt Trees (Eucalyptus patens), Western Australia.",
        certifiedTA: "Certified TA: 40.2+",
        healthBenefits: [
            "High antioxidant and anti-inflammatory strength.",
            "Supports cardiovascular health, anti-aging, and cellular protection.",
            "Natural immune booster and gut health support.",
            "Promotes skin regeneration and wound recovery. Naturally boosts daily energy levels."
        ],
        taste: "Taste: Rich sweetness with nutty undertones and silky mouthfeel.",
        specialNote: "Why it’s Special: Among the highest antioxidant levels ever tested in honey worldwide."
    }
]
const TotalActivitySection = () => {
    return (
        <section className="container">
            <div className="max-w-7xl h-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-4 max-w-xl">
                    <h2 className="text-3xl md:text-4xl text-gray-900 font-bold tracking-wide">{description.title}</h2>
                    <p className="text-gray-700 leading-relaxed">
                        {description.desc1}
                    </p>
                    <ul className=" list-disc text-gray-700 space-y-2 pl-6  ">
                        {description.desc2.map((item, idx) => {
                            return (
                                <li key={idx} className="leading-relaxed">{item}</li>
                            )
                        })}
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        {description.desc3}
                    </p>
                </div>
                <div className="relative w-full h-[600px] flex flex-col ">
                    {/* Tầng dưới cùng */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-4 z-0">
                        <div className="hexagon w-[200px] sm:w-[260px] h-[240px] sm:h-[280px] overflow-hidden">
                        <OptimizedImage src={images[2].src} alt="" className="w-full h-full" />
                        </div>
                        <div className="hexagon  w-[200px] sm:w-[260px] h-[240px] sm:h-[280px]  overflow-hidden">
                        <OptimizedImage src={images[3].src} alt="" className="w-full h-full" />
                        </div>
                    </div>

                    {/* Tầng trên chồng giữa hai thằng dưới */}
                    <div className="absolute bottom-[200px] sm:bottom-[240px] left-1/2 transform -translate-x-1/2 z-10">
                        <div className="hexagon w-[200px] sm:w-[260px] h-[240px] sm:h-[280px]  overflow-hidden">
                        <OptimizedImage src={images[1].src} alt="" className="w-full h-full" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="max-w-7xl mx-auto p-6 my-8 flex flex-col gap-8">
                {honeyCollection.map((item, index) => {
                    return (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-8">
                            <div className="relative w-full max-w-xl h-auto flex flex-col justify-center gap-8">
                                    <div className="hexagon h-[280px] w-[260px] overflow-hidden">
                                        <OptimizedImage width={2000} height={1000} src={images[2].src} alt="" className="w-full h-full" />
                                    </div>
                                    <div className=" h-[280px] w-[260px] mt-auto overflow-hidden">
                                        <h1>The HONEY HANA collection</h1>
                                    </div>
                              
                            </div>
                            <div className="space-y-4 max-w-xl">
                                <h2 className="text-3xl font-bold">{String(index + 1).padStart(2, '0')} <span>{item.title}</span></h2>
                                <p className="text-gray-700 leading-relaxed">
                                    {item.source}
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    {item.certifiedTA}
                                </p>
                                <span className="text-sm text-gray-700 leading-relaxed">
                                    Health Benefits:
                                </span>
                                <ul className=" list-disc text-gray-700 space-y-2 pl-6  ">
                                    {item.healthBenefits.map((desc, idx) => {
                                        return (
                                            <li key={idx} className="leading-relaxed">{desc}</li>
                                        )
                                    })}
                                </ul>
                                <p className="text-gray-700 leading-relaxed">
                                    {item.taste}
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    {item.specialNote}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default TotalActivitySection