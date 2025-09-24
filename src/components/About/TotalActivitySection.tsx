import OptimizedImage from "../ui/optimized-image";

// interface Props {
//     img?: Images[] | undefined
// }


const topic = {
  title: "What is Total Activity (TA)?",
  desc1: "TA measures honey’s total antibacterial power. The higher the TA, the stronger its healing properties for:",
  desc2: ["Fighting bacteria, fungi, viruses, and yeast", "Accelerating wound and skin healing", "Strengthening immunity", "Protecting cells through antioxidant activity"],
  desc3: "TA 30+ is recognized as medicinal grade, while TA 40+ to TA 50+ represents elite therapeutic strength — among the most powerful healing honeys in the world."
}
const honeyCollection = [
  {
    id: 1,
    img: "/collection/jarrah-1sp-2.jpg",
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
    img: "/collection/redgum-1sp-1.jpg",
    source: "Sourced from Jarrah Trees (Eucalyptus marginata), unique to Western Australia.",
    certifiedTA: "Certified TA: 60+",
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
    img: "/collection/backbutt-combo2-3.jpg",
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
    <section className="px-6 py-16 ">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section 1: Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6 ">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide leading-snug">
              {topic.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{topic.desc1}</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {topic.desc2.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">{topic.desc3}</p>
          </div>

          {/* Gallery Hexagon */}
          <div className="relative h-[500px] flex items-center justify-center max-w-full overflow-hidden">
            {/* Bottom layer */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
              <div className="hexagon w-44 h-48 sm:w-60 sm:h-64 overflow-hidden">
                <OptimizedImage src={honeyCollection[1].img} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="hexagon w-44 h-48 sm:w-60 sm:h-64 overflow-hidden">
                <OptimizedImage src={honeyCollection[2].img} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Top layer */}
            <div className="absolute bottom-[160px] sm:bottom-[200px] left-1/2 -translate-x-1/2">
              <div className="hexagon w-44 h-48 sm:w-60 sm:h-64 overflow-hidden shadow-lg">
                <OptimizedImage src={honeyCollection[0].img} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Honey Collection */}
        <div className="space-y-16">
          {honeyCollection.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image side */}
              <div className="flex flex-col items-center gap-8">
                <div className="hexagon w-64 h-72 overflow-hidden">
                  <OptimizedImage src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold uppercase tracking-widest text-gray-500">
                  The Honey Hana Collection
                </h3>
              </div>

              {/* Content side */}
              <div className="space-y-4 max-w-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {String(index + 1).padStart(2, "0")} — {item.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">{item.source}</p>
                <p className="text-gray-700 leading-relaxed">{item.certifiedTA}</p>

                <div className="space-y-2">
                  <span className="block text-sm font-semibold text-gray-800">
                    Health Benefits:
                  </span>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {item.healthBenefits.map((desc, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-gray-700 leading-relaxed">{item.taste}</p>
                <p className="text-gray-700 leading-relaxed">{item.specialNote}</p>
              </div>
            </div>
          ))}
        </div>

      </div>


    </section>
  )
}

export default TotalActivitySection