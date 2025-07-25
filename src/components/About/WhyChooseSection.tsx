import OptimizedImage from "../ui/optimized-image";
interface Props {
  img?:  unknown[] | undefined
}

const description = [
    "100% Total Activity certified and scientifically validated.",
    "Harvested exclusively from Western Australia’s cleanest bio-zones.",
    "Rare native floral honey not found anywhere else in the world.",
    "Therapeutic-grade healing honey, far beyond common table honey.",
    "Elegant packaging, ideal for health-focused personal and corporate gifting."
]

const  WhyChooseSection = ({img}:Props)=> {
    return(
        <section className="py-6">
        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[576px]">
            <div className="space-y-4 w-full max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-wide">
                Why Choose HANNA HONEY?
              </h2>
              <ul className="list-disc text-gray-600 space-y-2 pl-6">
                {description.map((desc, idx) => (
                  <li key={idx} className="leading-relaxed">{desc}</li>
                ))}
              </ul>
            </div>
      
            <div className="relative w-full max-w-xl h-[576px]">
              <OptimizedImage
                width="360"
                height="360"
                src="/images/img-why-choose.png"
                alt="images"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
    )
}

export default WhyChooseSection