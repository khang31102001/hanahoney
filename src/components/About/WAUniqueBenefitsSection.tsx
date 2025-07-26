
interface Props {
  img?: string[] | undefined
}

const westernAustraliaHighlight = {
    title: "Why Western Australia is Unique?",
    description: "Western Australia provides a natural advantage unlike anywhere else:",
    points: [
      "100% free from Varroa mites, pesticides, and bee diseases",
      "Exclusive native floral sources: Jarrah, Redgum, Blackbutt",
      "TA consistently certified at 40+ to 50+",
      "Raw, unheated, unblended — never heat-treated or diluted",
      "Scientifically proven medical benefits, not just a sweetener"
    ],
    conclusion: "This makes HANNA HONEY one of the rarest, purest, and most effective healing honeys on the planet"
  };

  const healthBenefits = {
    title: "Health Benefits",
    benefits: [
      "Boosts Immunity: Strengthens natural defenses, protecting against colds, flus, and infections.",
      "Powerful Antibacterial: Naturally eliminates bacteria, fungi, viruses, and yeast; supports wound healing.",
      "Anti-Inflammatory & Heart Health: Reduces inflammation, supports cardiovascular function, and protects against oxidative stress.",
      "Cancer Prevention Potential: Rich in polyphenols that may help lower cancer risks (ScienceDirect, 2022).",
    ],
    conclusion:  "Gut Health: Promotes a healthy microbiome and improves digestion through natural prebiotics."
  };
  

const  WAUniqueBenefitsSection = ({img}:Props)=> {
    return(
        <section className="container">
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col h-full">
            {/* Nội dung chính grow */}
            <div className="space-y-4 flex-1">
              <h2 className="text-3xl font-bold">{westernAustraliaHighlight.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {westernAustraliaHighlight.description}
              </p>
              <ul className="list-disc text-gray-700 space-y-4 pl-6">
                {westernAustraliaHighlight.points.map((desc, index) => (
                  <li className="leading-relaxed" key={index}>{desc}</li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed">
                {westernAustraliaHighlight.conclusion}
              </p>
            </div>
      
            {/* Block vàng đáy */}
            <div className="mt-6 bg-honey-400 p-6 text-center flex flex-col items-center gap-2">
              <div className="text-4xl">🐝</div>
              <h4 className="font-bold text-lg">Pure Honey</h4>
              <span>Pure & Sustainable Honey</span>
            </div>
          </div>
      
          {/* RIGHT COLUMN */}
          <div className="flex flex-col h-full">
            <div className="space-y-4 flex-1">
              <h2 className="text-3xl font-bold">{healthBenefits.title}</h2>
              <ul className="list-disc text-gray-700 space-y-4 pl-6">
                {healthBenefits.benefits.map((benefit, index) => (
                  <li className="leading-relaxed" key={index}>{benefit}</li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed">
                {healthBenefits.conclusion}
              </p>
            </div>
      
            {/* Block vàng đáy */}
            <div className="mt-6 bg-honey-400 p-6 text-center flex flex-col items-center gap-2">
              <div className="text-4xl">🍯</div>
              <h4 className="font-bold text-lg">Custom Blends</h4>
              <span>Custom Honey Blends</span>
            </div>
          </div>
      
        </div>
      </section>
      
    )
}

export default WAUniqueBenefitsSection