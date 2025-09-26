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
    title: "Extreme Jarrah, King of Antibacterial Honey",
    special: "EXTREME JARRAH",
    description: `
    <p><em>From Jarrah Trees (Eucalyptus marginata), unique to Western Australia</em></p>

  <p>This is one of the world’s rarest and most powerful honeys.<br>
  <strong>Certified TA 60+</strong> — the highest recorded Jarrah rating, delivering antibacterial strength far beyond Manuka.</p>

  <h2>Benefits</h2>
  <ul class="list-inside list-disc space-y-2">
    <li>Extreme antibacterial &amp; antimicrobial power</li>
    <li>Supports wound healing, skin repair &amp; burns</li>
    <li>Boosts immunity &amp; digestion</li>
    <li>Rich antioxidants for heart &amp; cell protection</li>
  </ul>

  <h2>Taste</h2>
  <p><em>Dark amber with a smooth woody aroma, offering a clean, delicate sweetness and a long, lingering finish.</em></p>

  <h2>Why Special</h2>
  <p>With <strong>TA 60+</strong>, EXTREME JARRAH is the rarest, strongest Jarrah honey—scientifically proven stronger than Manuka MGO 1700+.</p>

  <p><strong>Size:</strong> 150g - 250g - 500g - 1000g</p>
    `,
  },
  {
    id: 2,
    title: "Redgum (Marri) Honey – The Gentle Immune Booster",
    img: "/collection/redgum-1sp-1.jpg",
    special: "SUPER RED GUM",
    description: `
    <p><em>Harvested from Marri (Redgum) Trees (Corymbia calophylla), unique to Western Australia</em></p>

  <p>This rare honey ranks among the world’s most potent.<br>
  <strong>Certified TA 49.6+</strong> — stronger than many Manuka honeys, delivering exceptional natural power.</p>

  <h2>Benefits</h2>
  <ul class="list-inside list-disc space-y-2">
    <li>Superior antibacterial &amp; antimicrobial activity</li>
    <li>Aids wound healing, skin repair &amp; burns</li>
    <li>Boosts immunity &amp; supports digestion</li>
    <li>Rich antioxidants for heart &amp; vitality</li>
  </ul>

  <h2>Taste</h2>
  <p><em>Rich amber with a smooth, mellow aroma and a gentle, fruity sweetness with a clean finish.</em></p>

  <h2>Why Special</h2>
  <p>Equivalent to stronger antibacterial strength than Manuka honey rated MGO 1500+.</p>

  <p><strong>Size:</strong> 150g - 250g - 500g - 1000g</p>
    `,
  },
  {
    id: 3,
    title: "Super Jarrah, King of Antibacterial Honey",
    img: "/collection/jarrah-super-combo2-1.jpg",
    special: "SUPER JARRAH",
    description: `
    <p><em>Sourced from Jarrah Trees (Eucalyptus marginata), unique to Western Australia.</em></p>

  <p><strong>Certified TA 46.5+</strong></p>

  <h2>Health Benefits</h2>
  <ul class="list-inside list-disc space-y-2">
    <li>Exceptionally strong antibacterial and antimicrobial power, scientifically proven stronger than many Manuka honeys.</li>
    <li>Rapid wound healing, skin repair, and burn treatment.</li>
    <li>Natural immune booster and gut health support.</li>
    <li>High antioxidant levels protect against oxidative stress and support cardiovascular health.</li>
  </ul>

  <h2>Taste</h2>
  <p><em>Dark amber with a smooth woody aroma, offering a clean, mellow sweetness and a lingering finish.</em></p>

  <h2>Why it’s Special</h2>
  <p>Equivalent to higher antibacterial strength than Manuka honey rated MGO 1400+.</p>

  <p><strong>Size:</strong> 150g - 250g - 500g - 1000g</p>
    `,
  },
  {
    id: 4,
    title: "Blackbutt Honey – The Daily Wellness Tonic",
    img: "/collection/backbutt-combo2-3.jpg",
    special: "VERY STRONG BACKBUTT",
    description: `
   <p><em>Sourced from Blackbutt Trees (Eucalyptus patens), Western Australia.</em></p>

  <p><strong>Certified TA 40.2+</strong></p>

  <h2>Health Benefits</h2>
  <ul class="list-inside list-disc space-y-2">
    <li>High antioxidant and anti-inflammatory strength.</li>
    <li>Supports cardiovascular health, anti-aging, and cellular protection.</li>
    <li>Promotes skin regeneration and wound recovery.</li>
    <li>Naturally boosts daily energy levels.</li>
  </ul>

  <h2>Taste</h2>
  <p><em>Dark amber in color with a bold, rich sweetness. It carries gentle nutty and caramel-like notes, creating a smooth, silky finish.</em></p>

  <h2>Why it’s Special</h2>
  <p>Equivalent to stronger antibacterial strength than Manuka honey rated MGO 1250+.</p>

 <p><strong>Size:</strong> 150g - 250g - 500g - 1000g</p>
    `,
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
                <h3 className="text-lg text-center font-semibold uppercase tracking-widest text-gray-500">
                  HANNA’S HONEY<br /> Collection
                </h3>
                <div className="hexagon w-64 h-72 overflow-hidden">
                  <OptimizedImage src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl text-center font-bold uppercase tracking-widest text-honey-400">
                  {item.special}
                </h3>
              </div>

              {/* Content side */}
              <div className="space-y-4 max-w-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {String(index + 1).padStart(2, "0")} — {item.title}
                </h2>

                <div className="space-y-2"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                >
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>


    </section>
  )
}

export default TotalActivitySection