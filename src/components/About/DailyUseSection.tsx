import React from "react";

const dailyUse = {
  title: "DAILY USE & WELLNESS ROUTINE",
  points: [
    {
      id: 1,
      title: "How to Enjoy HANNA HONEY Daily",
      desc: [
        "Take 1 teaspoon daily for natural immune support.",
        "Stir into warm (not hot) water, herbal teas, or lemon drinks.",
        "Drizzle over breakfast cereals, yogurt, granola, or smoothies.",
        "Enjoy directly from the spoon to soothe sore throat or dry cough.",
        "Mix into sports drinks or protein smoothies for natural energy and endurance boost.",
        "Apply directly to minor wounds, burns, or skin irritations to support healing.",
        "Use as a natural face mask or skin treatment for hydration and rejuvenation.",
      ],
    },
    {
      id: 2,
      title: "Everyday Health Benefits",
      desc: [
        "Supports daily immunity and helps prevent common illnesses.",
        "Provides natural antibacterial and wound-healing benefits.",
        "Supports digestion and gut microbiome balance.",
        "Offers antioxidant protection against aging and chronic diseases.",
        "Delivers sustained natural energy for active lifestyles.",
      ],
    },
    {
      id: 3,
      title: "Shelf Life & Storage",
      desc: [
        "Honey is naturally long-lasting and does not spoil under proper storage.",
        "Best before: 3 to 5 years from production date.",
        "Store in a cool, dry place away from direct sunlight.",
        "Crystallization is natural and safe; simply warm gently to return to liquid.",
      ],
    },
  ],
};

const DailyUseSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 uppercase tracking-wide">
          {dailyUse.title}
        </h2>

        {/* 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {dailyUse.points[0].title}
            </h3>
            <ul className="list-disc list-outside space-y-3 pl-6 text-gray-800 leading-relaxed">
              {dailyUse.points[0].desc.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10">
            {/* Top Half */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {dailyUse.points[1].title}
              </h3>
              <ul className="list-disc list-outside space-y-3 pl-6 text-gray-800 leading-relaxed">
                {dailyUse.points[1].desc.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Bottom: Shelf Life & Storage */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 px-2 py-1 inline-block  ">
                {dailyUse.points[2].title}
              </h3> 
              <ul className="list-disc list-outside space-y-3 pl-6 text-gray-800 leading-relaxed">
                {dailyUse.points[2].desc.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyUseSection;
