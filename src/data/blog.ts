export interface Blog {
  id: number;
  slug: string;
  name: string;
  image: string;
  hoverImage: string;
  content?: string; // Thêm trường content cho nội dung chi tiết
}

interface VideoData {
  id: number;
  title: string;
  src: string;
  thumbnail: string;
}

export const blog: Blog[] = [
  {
    id: 2,
    slug: "is-honey-halal-clarifying-honey-in-islamic-diet",
    name: "IS HONEY HALAL? CLARIFYING HONEY IN THE ISLAMIC DIET",
    image: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848113/honey-extraction-7339822_640_zowy2a.jpg",
    hoverImage: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848113/honey-823614_640_fkdifb.jpg",
    content: `
    <h2>Is Honey Considered Halal in Islam?</h2>
    <p>Yes, <strong>honey is considered Halal</strong> (permissible) in Islam. It is a natural product made by bees from the nectar of flowers and does not involve any Haram (forbidden) ingredients or processes. In fact, honey is mentioned in the Quran as a source of healing and nourishment.</p>
    <p>In Surah An-Nahl (Chapter 16, Verse 69), Allah says: <em>"From their bellies comes a drink of varying colors, in which there is healing for people. Surely in this is a sign for those who reflect."</em> — this verse refers directly to honey.</p>

    <h2>Why is Honey Halal?</h2>
    <ul>
      <li><strong>No animal slaughter involved:</strong> Bees are not slaughtered or harmed in the production of honey.</li>
      <li><strong>No fermentation or alcohol:</strong> Pure honey does not contain alcohol or intoxicants.</li>
      <li><strong>Natural production:</strong> Honey is made through a natural process involving nectar, enzymes, and evaporation.</li>
    </ul>

    <h2>Is All Honey Automatically Halal?</h2>
    <p>While honey itself is naturally Halal, it’s important to check the following before consumption:</p>
    <ul>
      <li><strong>Additives:</strong> Avoid honey that has been mixed with alcohol-based flavorings or non-Halal ingredients.</li>
      <li><strong>Cross-contamination:</strong> In rare cases, honey may be processed in facilities that also handle non-Halal products.</li>
      <li><strong>Certifications:</strong> If you want assurance, look for honey that is <strong>Halal-certified</strong> by a recognized authority.</li>
    </ul>

    <h2>Halal Honey in Skin Care and Medicine</h2>
    <p>Honey is also widely used in skin care and traditional medicine. As long as it’s not mixed with non-Halal substances, it remains permissible for external use as well. Many Muslims use honey for wound healing, sore throats, and digestion support—with religious and scientific backing.</p>

    <h2>Summary</h2>
    <p><strong>Honey is 100% Halal</strong> when it is pure and free from non-permissible additives. It is not only allowed in Islam but highly encouraged for its health benefits, as recognized in both religious texts and modern science. Whether used as food, medicine, or skincare—it is a gift from nature and fully compliant with Halal dietary laws.</p>
  `
  },
  {
    id: 3,
    name: "CAN DIABETIC PEOPLE CONSUME HONEY? FACTS & GUIDELINES",
    slug: "can-diabetics-consume-honey-facts-and-guidelines",
    image: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848112/honey-extractors-1568943_640_dlbvk8.jpg",
    hoverImage: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848109/honey-352205_640_hef3ge.jpg",
    content: `
    <h2>Can Diabetics Consume Honey?</h2>
    <p>It’s a common question: <strong>“Can people with diabetes eat honey?”</strong> The answer is—<b>yes, but with caution</b>. While honey is a natural sweetener, it still contains sugar and carbohydrates, which can affect blood glucose levels. However, when used mindfully, certain types of honey may be a better alternative to refined sugar for some individuals with diabetes.</p>

    <h3>Understanding the Sugar in Honey</h3>
    <ul>
      <li><b>Natural composition:</b> Honey is made up of around 30–40% fructose, 30–35% glucose, water, and trace minerals.</li>
      <li><b>Glycemic Index (GI):</b> Honey generally has a moderate GI of 45–65 depending on the variety—lower than refined sugar (GI ~ 65–70).</li>
      <li><b>Antioxidants and Enzymes:</b> Raw honey contains antioxidants and enzymes that may provide additional health benefits compared to regular sugar.</li>
    </ul>

    <h3>Is Honey Safer Than Sugar for Diabetics?</h3>
    <p>While honey does raise blood sugar levels, <strong>some studies suggest that raw, high-antioxidant honey like Jarrah or Manuka may have a gentler impact on glucose levels</strong> compared to processed sugar. These types of honey may also help reduce inflammation and oxidative stress, which are concerns for people with diabetes.</p>

    <h3>How Diabetics Can Use Honey Safely</h3>
    <ul>
      <li><b>Always monitor blood glucose levels</b> before and after consuming honey.</li>
      <li><b>Use small amounts</b>—a teaspoon or less—occasionally, not daily.</li>
      <li><b>Pair with high-fiber or protein-rich foods</b> to slow down sugar absorption.</li>
      <li><b>Avoid processed honey</b> and choose raw, unfiltered honey with low GI such as Jarrah or Wildflower honey.</li>
    </ul>

    <h3>Types of Honey Recommended for Diabetics</h3>
    <ul>
      <li><b>Jarrah Honey (Low GI)</b> – Naturally low glycemic index, high in antioxidants, and known for its antimicrobial properties.</li>
      <li><b>Manuka Honey (Medical-grade)</b> – Potent antibacterial and healing properties; use in very small amounts if approved by your doctor.</li>
      <li><b>Raw Wildflower Honey</b> – Balanced and rich in plant-based compounds. Look for locally sourced, chemical-free options.</li>
    </ul>

    <h3>When Should Diabetics Avoid Honey?</h3>
    <p><b>People with uncontrolled diabetes or insulin resistance</b> should avoid honey unless advised by a healthcare professional. Even natural sugars can lead to spikes in blood glucose, so personalized advice is key.</p>

    <h3>Expert Recommendations</h3>
    <ul>
      <li>Consult a doctor or registered dietitian before adding honey to your diet.</li>
      <li>Keep a food journal to track responses to different sweeteners.</li>
      <li>Choose honey as an occasional substitute—not a daily staple.</li>
    </ul>

    <p>At <strong>Honey For Life</strong>, we offer premium Western Australian honey like Jarrah and Redgum—raw, unprocessed, and rich in nutrients. While delicious, even our healthiest honeys should be enjoyed in moderation, especially by those managing blood sugar levels.</p>

    <h3>Conclusion</h3>
    <p><strong>Yes, diabetics can consume honey—but mindfully and moderately.</strong> Always choose raw, low-GI honey and seek medical guidance to determine if it fits within your personal nutrition plan. When used correctly, honey can offer a natural touch of sweetness along with potential health benefits.</p>

    <p class="text-xs italic text-gray-500 mt-6">Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Always consult your doctor before making changes to your diet, especially if you are managing a chronic condition like diabetes.</p>
  `
  },
  {
    id: 4,
    name: "HANA HONEY – POWERFUL NATURAL HONEY WITH TA60+ ACTIVITY",
    slug: "hana-honey-natural-antibacterial-honey-ta60",
    image: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848107/flower-5001083_640_jexauu.jpg",
    hoverImage: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1751026921/480487812_122223334028211632_5476122042152771841_n_vcunwl.jpg",
    content: `
    <h2>HANA HONEY – Natural Strength with TA60+ Activity</h2>
    <p><strong>Introducing Hana Honey – one of Australia’s most powerful raw honeys, boasting a Total Activity (TA) rating of up to 60+</strong>. This rare and potent honey is a testament to the untouched beauty of Western Australia and the strength of nature’s antibacterial power.</p>
    
    <h3>What Makes Hana Honey Unique?</h3>
    <p>Hana Honey is harvested from wild native trees in remote Western Australian regions where bees thrive in pure, unpolluted environments. The result? A honey that is not only rich in taste, but also contains extraordinary antibacterial properties verified by lab-tested TA scores as high as 60+.</p>

    <h3>What is TA60+?</h3>
    <p><b>TA (Total Activity)</b> measures the combined Peroxide and Non-Peroxide antibacterial activity in honey. A TA rating above 10 is considered active. Hana Honey reaching TA60+ places it among the highest-rated honeys in the world, ideal for both wellness and topical applications.</p>

    <h3>Taste Profile</h3>
    <p>Hana Honey is smooth, thick, and deeply flavourful. Its bold taste has a caramel-like sweetness with subtle floral undertones. The richness is balanced, making it enjoyable by the spoon, in drinks, or over foods like toast, oats, or fruit.</p>

    <h3>Health Benefits of Hana Honey TA60+</h3>
    <ul>
      <li><strong>Antibacterial & Antifungal:</strong> Helps combat harmful bacteria naturally.</li>
      <li><strong>Immune Support:</strong> Packed with antioxidants that promote overall health.</li>
      <li><strong>Digestive Aid:</strong> Soothes the stomach and supports gut health.</li>
      <li><strong>Topical Uses:</strong> Can be used (with medical guidance) for wound care or skin support.</li>
      <li><strong>Sore Throat Relief:</strong> A spoonful helps calm irritation naturally.</li>
    </ul>

    <h3>How to Use Hana Honey</h3>
    <ul>
      <li><b>Daily Wellness:</b> Enjoy 1 teaspoon in the morning to support your immunity.</li>
      <li><b>Skincare:</b> Apply a thin layer on skin or mix into masks for natural healing benefits.</li>
      <li><b>Culinary:</b> Use as a premium sweetener in tea, smoothies, or on pancakes.</li>
    </ul>

    <h3>Why Choose Hana Honey?</h3>
    <p>Hana Honey is raw, unheated, and unfiltered – retaining all its natural enzymes, vitamins, and bioactive compounds. Every jar is sustainably harvested and lab-tested to ensure purity and potency.</p>

    <h3>Customer Love for Hana Honey</h3>
    <ul>
      <li>⭐️⭐️⭐️⭐️⭐️ “I’ve tried Manuka, but Hana Honey TA60+ is next-level. Strong, smooth, and healing!” – Emma W.</li>
      <li>⭐️⭐️⭐️⭐️⭐️ “The taste is amazing and I noticed an improvement in my digestion within a week.” – Daniel T.</li>
    </ul>

    <h3>Limited & Premium</h3>
    <p>Due to its rare floral sources and high TA levels, Hana Honey TA60+ is harvested in limited quantities each year. Secure your jar today and experience Australia’s finest natural honey.</p>

    <p><strong>From the heart of Western Australia, Hana Honey delivers unmatched purity, power, and flavour—naturally.</strong></p>

    <p class="text-xs italic text-gray-500 mt-6">Note: While Hana Honey offers health benefits, it is not a substitute for medical treatment. Always consult your doctor for serious conditions. Not suitable for infants under 12 months.</p>
  `
  }
  ,
  {
    id: 5,
    name: "WHY RAW HONEY IS BETTER THAN PROCESSED HONEY – THE TRUTH BEHIND THE BUZZ",
    slug: "why-raw-honey-is-better-than-processed-honey",
    image: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753885890/beehive-3703426_640_hl9jqe.jpg",
    hoverImage: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753885890/honey-1637114_640_fkv1tu.jpg",
    content: `
    <h2>Why Raw Honey is Better Than Processed Honey – The Truth Behind the Buzz</h2>
    <p><strong>Not all honey is created equal.</strong> While all honey may look golden and sweet, there’s a big difference between raw honey and the processed version often found on supermarket shelves. At Hana Honey, we believe in the power of pure, raw honey—and here’s why you should too.</p>

    <h3>What is Raw Honey?</h3>
    <p><b>Raw honey</b> is honey in its most natural form—unheated, unpasteurized, and unfiltered. It’s harvested directly from the hive, gently strained, and bottled without applying heat that would destroy its natural goodness.</p>

    <h3>What is Processed Honey?</h3>
    <p><b>Processed honey</b> is typically heated and filtered to improve clarity, shelf life, and appearance. Unfortunately, this process can also strip away key nutrients, enzymes, and antioxidant properties that give honey its health benefits.</p>

    <h3>Key Differences Between Raw and Processed Honey</h3>
    <ul>
      <li><b>Enzymes & Nutrients:</b> Raw honey retains its natural enzymes like glucose oxidase, which are often destroyed during pasteurization.</li>
      <li><b>Antioxidant Power:</b> Raw honey contains powerful antioxidants like phenolic compounds and flavonoids that support your immune system.</li>
      <li><b>Natural Pollens:</b> Pollen content in raw honey may help with allergies and provides trace minerals.</li>
      <li><b>No Additives:</b> Many commercial honeys are blended with syrups or additives—raw honey is pure and untouched.</li>
    </ul>

    <h3>Health Benefits of Raw Honey</h3>
    <ul>
      <li>Supports immunity with antioxidants and antibacterial compounds</li>
      <li>Soothes sore throats and supports digestion</li>
      <li>Helps heal wounds and nourish skin naturally</li>
      <li>Provides natural energy without processed sugar spikes</li>
    </ul>

    <h3>How to Identify Real Raw Honey</h3>
    <ul>
      <li>It may crystallize over time—this is natural and a sign of purity</li>
      <li>The taste is richer and more complex</li>
      <li>It often contains specks of pollen or wax—proof it’s minimally filtered</li>
      <li>Look for sourcing information and lab-tested certifications like TA ratings</li>
    </ul>

    <h3>Why Choose Hana Honey?</h3>
    <p>At Hana Honey, we offer 100% raw, premium Australian honey with TA ratings up to 60+. Our honeys are sustainably sourced, rich in nutrients, and perfect for daily wellness, cooking, or natural skincare.</p>

    <p><strong>Choose raw. Choose real. Choose Hana Honey.</strong></p>

    <p class="text-xs italic text-gray-500 mt-6">Note: Raw honey should not be given to infants under 12 months. Always store in a cool, dry place and consume responsibly.</p>
  `
  }
  ,
  {
    id: 6,
    name: "CAN HONEY HELP YOU LOSE WEIGHT? FACTS, TIPS & BEST USAGE",
    slug: "can-honey-help-with-weight-loss-benefits-and-uses",
    image: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753885207/local-honey-9061428_640_fpvdmy.png",
    hoverImage: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753885200/wild-bee-8058943_640_cou7cl.jpg",
    content: `
    <h2>Can Honey Help You Lose Weight? The Truth You Need to Know</h2>
    <p>Many people ask, <strong>"Can honey help with weight loss?"</strong> The short answer is: <b>yes, when used correctly</b>. While honey is still a form of sugar, it’s natural, nutrient-rich, and offers health benefits that processed sugar can’t match. In fact, replacing refined sugar with raw honey may support your metabolism, energy levels, and fat-burning potential.</p>

    <h3>Why Honey Can Be a Smart Choice in a Weight Loss Diet</h3>
    <ul>
      <li><b>Natural Energy Boost:</b> Unlike processed sugar, raw honey provides a steady release of energy and can reduce cravings for unhealthy snacks.</li>
      <li><b>Supports Digestion:</b> Honey can aid digestion, helping your body absorb nutrients more efficiently and reduce bloating.</li>
      <li><b>Promotes Fat Metabolism:</b> Some studies suggest that honey helps mobilize stored fat when consumed with warm water or lemon in the morning.</li>
      <li><b>Improves Sleep:</b> A teaspoon before bed may stabilize blood sugar and improve sleep quality, which is essential for weight control.</li>
    </ul>

    <h3>How to Use Honey for Weight Loss</h3>
    <ul>
      <li><b>Morning Detox Drink:</b> Mix 1 tsp of raw honey with warm water and lemon juice. Drink on an empty stomach to jumpstart metabolism.</li>
      <li><b>Pre-Workout Boost:</b> Take a small spoonful 15–30 minutes before exercise for natural energy.</li>
      <li><b>Healthy Sweetener:</b> Replace sugar in tea, coffee, or smoothies with honey.</li>
      <li><b>Nighttime Remedy:</b> 1 tsp of honey with cinnamon before bed may help stabilize blood sugar and promote fat burning overnight.</li>
    </ul>

    <h3>Important Tips</h3>
    <ul>
      <li>Use <b>raw, unprocessed honey</b> like Hana Honey TA+ for the most health benefits.</li>
      <li>Always consume honey in <b>moderation</b>—no more than 1–2 teaspoons a day when dieting.</li>
      <li>Combine honey usage with a <b>balanced diet and regular exercise</b> for real results.</li>
    </ul>

    <h3>Myth vs. Reality</h3>
    <ul>
      <li>❌ <b>Myth:</b> “Honey will make me gain weight.”</li>
      <li>✅ <b>Reality:</b> When replacing sugar and used in small amounts, honey can support weight loss.</li>
    </ul>

    <h3>Why Choose Hana Honey for Weight Management?</h3>
    <p>Hana Honey offers raw, lab-tested honey with powerful antibacterial and antioxidant properties. Our TA60+ honey is not only delicious but supports digestion, immunity, and energy—making it an ideal natural aid in your wellness journey.</p>

    <p><strong>Looking to lose weight naturally?</strong> Add Hana Honey to your healthy routine—pure, premium, and full of natural benefits.</p>

    <p class="text-xs italic text-gray-500 mt-6">Disclaimer: While honey can support a healthy lifestyle, it is not a miracle weight-loss solution. Always consult with a healthcare provider for personalized dietary advice.</p>
  `
  }
  ,
  {
    id: 7,
    name: "SHOULD YOU DRINK HONEY IN THE MORNING? DETOX, ENERGY & BEAUTY BENEFITS",
    slug: "should-you-drink-honey-in-the-morning-benefits",
    image: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753885554/honey-1089508_640_jd9w32.jpg",
    hoverImage: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753885555/honeycomb-827475_640_h2goiz.jpg",
    content: `
    <h2>Should You Drink Honey in the Morning? Here's What Happens</h2>
    <p>Waking up to a warm glass of honey water might sound simple—but it’s a ritual loved by many health enthusiasts, nutritionists, and even beauty gurus. <strong>So, is drinking honey in the morning really that good for you?</strong> The answer is: <b>Absolutely, yes!</b> Here’s why more and more people are starting their day with this golden liquid.</p>

    <h3>Top Benefits of Drinking Honey in the Morning</h3>
    <ul>
      <li><strong>1. Detoxification Support:</strong> A mix of warm water and raw honey helps flush out toxins and supports liver function.</li>
      <li><strong>2. Jumpstart Metabolism:</strong> It gently boosts metabolism, making it ideal for those on a weight management journey.</li>
      <li><strong>3. Natural Energy Boost:</strong> Unlike caffeine, honey offers clean, sustainable energy without a crash.</li>
      <li><strong>4. Better Digestion:</strong> Honey activates digestive enzymes and may ease bloating or constipation.</li>
      <li><strong>5. Glowing Skin:</strong> The antioxidants in raw honey support clearer, brighter skin from within.</li>
    </ul>

    <h3>How to Drink Honey in the Morning</h3>
    <p>✅ <b>Basic Recipe:</b>  
    Mix 1 teaspoon of <strong>raw honey</strong> (like Hana Honey TA+) into a glass of warm (not hot) water. Stir and drink on an empty stomach.</p>
    
    <p>👉 <b>Optional Add-ons:</b></p>
    <ul>
      <li>🍋 A few drops of fresh lemon juice for extra detox</li>
      <li>🌿 A slice of ginger or dash of cinnamon to enhance metabolism</li>
    </ul>

    <h3>Common Questions</h3>
    <ul>
      <li><b>Can I drink honey water daily?</b> Yes! 1 cup in the morning is safe and beneficial for most people.</li>
      <li><b>Does it help with weight loss?</b> It may support fat metabolism when combined with healthy eating and exercise.</li>
      <li><b>Should I avoid it if I have diabetes?</b> Consult your doctor—honey still contains natural sugars.</li>
    </ul>

    <h3>Why Hana Honey?</h3>
    <p>We offer premium <b>raw, high-TA honey (up to TA60+)</b> that's packed with antioxidants and antibacterial properties. Our honey is perfect for daily wellness rituals, giving you both flavour and function.</p>

    <p>✨ <strong>Start your day the smart way—naturally sweet, energizing, and full of benefits.</strong></p>

    <p class="text-xs italic text-gray-500 mt-6">Disclaimer: Individual results may vary. This content is for informational purposes and is not a substitute for professional medical advice.</p>
  `
  }
  ,
  {
    id: 8,
    name: "BOOST YOUR IMMUNITY NATURALLY – HOW HONEY SUPPORTS YOUR DEFENSE SYSTEM",
    slug: "boost-immunity-with-honey-natural-antibacterial-benefits",
    image: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753885554/honey-8045459_640_eqdjzl.jpg",
    hoverImage: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753885198/bee-1726659_640_wfwpsi.jpg",
    content: `
    <h2>Boost Your Immunity Naturally – How Honey Supports Your Body’s Defenses</h2>
    <p>With changing seasons and constant exposure to viruses, a strong immune system is more important than ever. One of nature’s most trusted immune boosters? <strong>Raw honey.</strong></p>
    <p>Used for centuries in traditional medicine, <b>honey is rich in antioxidants, antibacterial compounds, and enzymes</b> that can help support your immune system in a gentle, natural way.</p>

    <h3>Why Honey Helps Build Immunity</h3>
    <ul>
      <li><strong>1. Antioxidant Powerhouse:</strong> Raw honey is full of antioxidants that protect immune cells from free radical damage.</li>
      <li><strong>2. Natural Antibacterial Agent:</strong> Honey’s hydrogen peroxide content and low pH help combat harmful bacteria.</li>
      <li><strong>3. Soothes the Throat:</strong> Perfect for early cold symptoms—honey can calm sore throats and reduce coughing.</li>
      <li><strong>4. Gut Health Support:</strong> A healthy gut is vital to immune health, and honey promotes good digestion and gut bacteria.</li>
      <li><strong>5. Helps With Sleep:</strong> One teaspoon before bed may improve sleep quality, essential for overall immunity.</li>
    </ul>

    <h3>How to Use Honey to Strengthen Immunity</h3>
    <ul>
      <li><b>Morning routine:</b> Mix 1 tsp of raw honey with warm water and lemon.</li>
      <li><b>During flu season:</b> Add honey to ginger tea or warm herbal infusions.</li>
      <li><b>On toast or oats:</b> A sweet and powerful start to your day.</li>
      <li><b>Before bed:</b> A spoonful with cinnamon helps calm the body and mind.</li>
    </ul>

    <h3>Best Type of Honey for Immunity</h3>
    <ul>
      <li><strong>Hana Honey TA60+:</strong> With exceptionally high Total Activity, it offers powerful antibacterial and antioxidant benefits.</li>
      <li><strong>Jarrah Honey:</strong> Known for its strong antimicrobial properties, ideal for immune support.</li>
      <li><strong>Wildflower Honey:</strong> A great all-rounder with diverse plant nutrients.</li>
    </ul>

    <h3>What Customers Say</h3>
    <ul>
      <li>⭐️⭐️⭐️⭐️⭐️ "I start every morning with Hana Honey and lemon water. Haven’t had a cold all year!" – Laura T.</li>
      <li>⭐️⭐️⭐️⭐️⭐️ "I gave my kids a spoon of honey daily through winter, and it really helped with immunity." – Michael H.</li>
    </ul>

    <p><strong>Ready to build your immunity the natural way?</strong> Add raw honey to your daily routine and experience the benefits of nature’s golden healer.</p>

    <p class="text-xs italic text-gray-500 mt-6">Disclaimer: Honey is not a cure for disease. For serious medical concerns, consult with your healthcare provider. Not suitable for infants under 12 months.</p>
  `
  },
  {
    id: 9,
    name: "DOES HONEY EXPIRE? SHELF LIFE & STORAGE TIPS YOU NEED TO KNOW",
    slug: "does-honey-expire-shelf-life-and-storage-tips",
    image: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1758647445/78ae8a7252d5a84c775c75d4c2d5b978_n7vs7y.jpg",
    hoverImage: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1758647446/8d617d766835dc4525473ee6057c07d8_zfwddy.jpg",
    content: `
    <h2>Does Honey Expire? Shelf Life & Storage Tips You Need to Know</h2>
    <p>If you’ve found a jar of honey tucked away in your pantry for years, you might wonder: <strong>“Can I still use this?”</strong> The good news is — <b>real honey doesn’t expire</b> when stored properly.</p>

    <h3>How Long Does Honey Last?</h3>
    <p><b>Pure raw honey</b> can last indefinitely. It has been found in ancient Egyptian tombs — still perfectly edible after thousands of years! That’s because honey has natural preservatives like low moisture, high sugar concentration, and antibacterial properties that prevent spoilage.</p>

    <h3>Why Does Honey Change Over Time?</h3>
    <ul>
      <li><b>Crystallization:</b> Honey may thicken and form crystals — this is <i>natural</i> and doesn’t mean it has gone bad.</li>
      <li><b>Color changes:</b> Exposure to air and light may darken honey over time. This is also normal.</li>
      <li><b>Scent or separation:</b> If honey smells sour or has bubbles/foam, it may have fermented (often in impure or improperly sealed jars).</li>
    </ul>

    <h3>How to Store Honey Properly</h3>
    <ul>
      <li><b>Keep in a sealed glass jar:</b> Always close the lid tightly to avoid moisture entering.</li>
      <li><b>Store at room temperature:</b> Do not refrigerate; it accelerates crystallization.</li>
      <li><b>Avoid direct sunlight:</b> Keep honey in a dark, dry cupboard.</li>
      <li><b>Use a clean, dry spoon:</b> Never use wet utensils—it can introduce bacteria or moisture that leads to fermentation.</li>
    </ul>

    <h3>How to Fix Crystallized Honey</h3>
    <p>If your honey becomes solid or grainy, don’t worry—it’s still good! To liquefy:</p>
    <ul>
      <li>Place the jar (with lid off) in a bowl of warm water (~40–50°C).</li>
      <li>Stir gently until the crystals dissolve.</li>
      <li>Avoid boiling or using microwave heat — this can damage enzymes and reduce nutritional value.</li>
    </ul>

    <h3>Signs Honey Has Gone Bad (Rare Cases)</h3>
    <ul>
      <li>Sour or alcoholic smell</li>
      <li>Foam, bubbling, or separation</li>
      <li>Strange taste (fermented)</li>
    </ul>
    <p>These usually happen only if the honey was diluted, not sealed properly, or stored in a humid environment.</p>

    <h3>Why Hana Honey Lasts Longer</h3>
    <p>Our <strong>raw, high-TA honey</strong> is bottled with care to retain its natural structure and antimicrobial strength. Hana Honey contains no additives, no heating, and no filtration—just nature's purest form sealed for long-term use.</p>

    <p><strong>Tip:</strong> Write the opening date on the jar. Even though it won’t expire, it helps you track usage and freshness!</p>

    <p class="text-xs italic text-gray-500 mt-6">Note: Not suitable for infants under 12 months. Always store honey in a cool, dry place and avoid contamination from wet utensils.</p>
  `
  },
  {
    id: 10,
    name: "HAVE YOU EVER TASTED REAL NATURAL HONEY? LET’S FIND OUT",
    slug: "have-you-ever-tasted-real-natural-honey-honeyhana",
    image: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848116/taiwan-3511017_640_kumugm.jpg",
    hoverImage: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753885890/honeycomb-1564958_640_thwy1o.jpg",
    content: `
    <h2>Have You Ever Tasted REAL Natural Honey? Let’s Find Out</h2>
    <p>With so many jars labeled “100% pure honey” on the shelves, you might assume you’ve tasted real honey before. But <strong>what if we told you that most of them aren’t truly natural?</strong></p>
    <p>At <b>HoneyHana</b>, we specialize in crafting raw, wild Australian honey that’s harvested without heating, filtering, or blending. No additives. No sugar syrups. Just nature — in its truest, golden form.</p>

    <h3>So… How Do You Know If Your Honey Is Really Natural?</h3>
    <ul>
      <li>Does it crystallize over time? ✅ That’s a sign of purity.</li>
      <li>Is it harvested from wild flora, not farm-fed bees? ✅ Natural environment = real taste.</li>
      <li>Can you trace where it came from? ✅ We give you the exact origin of every jar.</li>
    </ul>

    <h3>What Makes HoneyHana So Different?</h3>
    <p>We don’t pasteurize our honey. We don’t blend it with anything. Our honey is:
      <ul>
        <li>✔️ Collected from untouched forests & native trees of Western Australia</li>
        <li>✔️ Rich in enzymes, antioxidants, and Total Activity up to TA60+</li>
        <li>✔️ Full-bodied, with a deep, floral-earthy taste you’ve likely never experienced in commercial honey</li>
      </ul>
    </p>

    <h3>Still Not Sure? Here’s the Honey Test</h3>
    <p>Put a teaspoon of your current honey and a spoon of HoneyHana side by side:</p>
    <ul>
      <li>👃 Smell it: Does it have a natural floral aroma?</li>
      <li>👅 Taste it: Is it layered, deep, slightly earthy — not just “sweet”?</li>
      <li>🧪 Check if it’s TA rated (Total Activity)? Ours goes up to TA60+</li>
    </ul>

    <h3>Why You’ll Never Go Back After Trying Real Honey</h3>
    <p>Our customers often say: “I never knew honey could taste like this.” It’s not just food. It’s a natural experience — straight from the hive.</p>

    <h3>What People Say About HoneyHana</h3>
    <ul>
      <li>⭐️⭐️⭐️⭐️⭐️ “Once I tried HoneyHana, supermarket honey felt like syrup.” – Nam P.</li>
      <li>⭐️⭐️⭐️⭐️⭐️ “I gave a jar as a gift — now my friends want to order monthly.” – Alice M.</li>
    </ul>

    <p><strong>So the real question is:</strong> Have you ever truly tasted REAL honey?  
    If not, it's time to experience HoneyHana.</p>

    <p class="text-xs italic text-gray-500 mt-6">Note: Raw honey is not suitable for children under 12 months. Crystallization is natural and expected in pure honey.</p>
  `
  },
  {
    id: 11,
    name: "WILD HONEY VS FARMED HONEY: WHICH IS HEALTHIER AND HOW TO TELL THE DIFFERENCE",
    slug: "wild-honey-vs-farmed-honey-health-benefits-and-comparison",
    image: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753885197/apiary-1866740_640_rrewww.jpg",
    hoverImage: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753885891/honeybee-3999664_640_mu8otl.jpg",
    content: `
    <h2>Wild Honey vs Farmed Honey: Which Is Better?</h2>
    <p>On the surface, wild honey  and farmed honey  may look similar—but <strong>the way they are sourced makes a huge difference in quality, purity, and health benefits</strong>.</p>

    <h3>Key Differences Between Wild Honey and Farmed Honey</h3>
    <ul>
      <li><strong>Source:</strong> Wild honey • collected by bees from diverse wild flowers → rich in enzymes and pollen. Farmed honey • from controlled hives, usually monoculture plants.</li>
      <li><strong>Purity:</strong> Wild honey often has natural pollen or honeycomb residue. Farmed honey may be filtered or blended.</li>
      <li><strong>Processing:</strong> Wild honey is rarely heated or processed. Farmed honey is often pasteurized or filtered to increase shelf life.</li>
      <li><strong>Nutritional Value:</strong> Wild honey typically contains more antioxidants, minerals, and bioactive compounds.</li>
    </ul>

    <h3>How to Distinguish Real Wild Honey at Home</h3>
    <ul>
      <li>✅ Crystallization over time—common in wild honey.</li>
      <li>👃 Natural, rich aroma from multiple floral sources.</li>
      <li>👅 Layered sweet taste—complex and slightly earthy.</li>
      <li>🧪 Presence of pollen granules or wax fragments.</li>
      <li>🌡️ Place in cold water: wild honey dissolves slowly without foaming.</li>
    </ul>

    <h3>Why Choose Wild Honey for Health?</h3>
    <ul>
      <li>Strong antibacterial & antifungal activity</li>
      <li>Anti-inflammatory and antioxidant-rich</li>
      <li>Supports digestion and gut health</li>
      <li>Promotes respiratory wellness</li>
    </ul>

    <h3>Example: HoneyHana Wild Honey Benefits</h3>
    <p>At <strong>HoneyHana</strong>, our wild honey is sourced from native forests, harvested raw and unfiltered. It offers up to TA60+ antimicrobial activity and retains natural pollen and enzymes.</p>

    <h3>Price Comparison in Vietnam (2025)</h3>
    <ul>
      <li>Wild honey: 600.000 – 1.7 triệu ₫/lít depending on flower type (e.g., ruồi rừng, hoa cà phê) :contentReference[oaicite:7]{index=7}</li>
      <li>Farmed honey: 200.000 – 660.000 ₫/lít (nhãn, tràm, bạc hà...) :contentReference[oaicite:8]{index=8}</li>
    </ul>

    <h3>Final Takeaway</h3>
    <p>Both wild and farmed honey offer nutritional value—but if you're looking for purity and potent health benefits, wild honey is the premium choice. Farmed honey is more affordable and easier to find, but may lack natural enzymes and flower diversity.</p>

    <p><strong>Choose the honey that builders the body from inside out—choose real wild honey.</strong></p>

    <p class="text-xs italic text-gray-500 mt-6">Note: Raw wild honey crystallizes naturally and is not suitable for infants under one year old.</p>
  `
  },
  {
    id: 12,
    name: "WHY IS REAL HONEY SO EXPENSIVE? AND IS IT WORTH IT?",
    slug: "why-real-honey-is-expensive-and-worth-it",
    image: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753885890/beekeeper-941688_640_lukot1.jpg",
    hoverImage: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753885889/bees-3601859_640_awhbu1.jpg",
    content: `
    <h2>Why Is Real Honey So Expensive? And Is It Worth It?</h2>
    <p>Ever wonder why some jars of honey cost 5x more than others? Is it just branding? Or is there something deeper — something real — inside?</p>
    <p><strong>Real, raw, and active honey</strong> is more than just a sweetener. It’s a rare natural superfood — and here’s exactly why it’s priced the way it is… and why it’s totally worth it.</p>

    <h3>1. Not All “Honey” Is Real Honey</h3>
    <p>Up to 30% of honey in global markets is <strong>adulterated</strong> with sugar syrups or overprocessed. This type of “fake honey” is cheap — but stripped of enzymes, antioxidants, and bioactivity.</p>

    <h3>2. Real Honey Is Seasonal & Scarce</h3>
    <ul>
      <li>✔️ Bees only produce honey during peak floral seasons.</li>
      <li>✔️ Quality wildflower or mono-floral honey like Jarrah, Mallee, or Manuka is location-dependent and limited.</li>
      <li>✔️ Drought, deforestation, and pesticides reduce natural bee productivity.</li>
    </ul>

    <h3>3. Premium Honey = Minimal Processing</h3>
    <p>Unlike industrial honey that’s heated and filtered, <strong>HoneyHana’s raw honey</strong> is:</p>
    <ul>
      <li>❌ Not boiled</li>
      <li>❌ Not diluted</li>
      <li>❌ Not ultrafiltered</li>
      <li>✅ Preserved with full enzyme, pollen & TA activity intact</li>
    </ul>

    <h3>4. TA-Rated Honey = Measurable Medicinal Power</h3>
    <p>HoneyHana offers <strong>TA20+ to TA60+ honey</strong>, meaning it contains potent antibacterial activity — scientifically tested. This type of honey is not just food; it’s used as a wellness tool.</p>

    <h3>5. It’s Hand-Harvested With Care</h3>
    <p>We don’t mass produce. Our honey is:</p>
    <ul>
      <li>✨ Collected in small batches</li>
      <li>✨ Carefully strained, not filtered</li>
      <li>✨ Packed by hand to preserve natural texture and taste</li>
    </ul>

    <h3>So… Is It Worth It?</h3>
    <p><strong>Yes — if you care about what goes into your body.</strong></p>
    <p>1 spoon of raw, active honey gives you more nutrients, healing compounds, and long-term value than 5 spoons of processed supermarket honey. It supports immunity, digestion, skin, and overall wellness — naturally.</p>

    <h3>Customer Thoughts</h3>
    <ul>
      <li>⭐️⭐️⭐️⭐️⭐️ "It’s not just honey. It’s functional food. Worth every dollar." — Minh P.</li>
      <li>⭐️⭐️⭐️⭐️⭐️ "My sore throats are gone in 2 days with TA60+ from HoneyHana. Amazing!" — Sarah N.</li>
    </ul>

    <p><strong>If you’re investing in your health — start with something as simple, pure, and powerful as real honey.</strong></p>

    <p class="text-xs italic text-gray-500 mt-6">Note: Always read the label. Crystallization is a sign of purity. Not suitable for infants under 12 months.</p>
  `
  },
  {
    id: 13,
    name: "THE TRUE VALUE OF REAL HONEY – WHY IT COSTS MORE AND WHY IT MATTERS",
    slug: "true-value-of-real-honey-honeyhana",
    image: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753885891/honeybee-3999664_640_mu8otl.jpg",
    hoverImage: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753885889/bees-6147460_640_qctdfk.jpg",
    content: `
    <h2>The True Value of Real Honey – Why It Costs More and Why It Matters</h2>
    <p>You’ve seen it before: a jar of honey at the supermarket for $8… and another for $48. Both look golden. Both say “pure.” So, why the huge price gap? <strong>The answer lies in what you can’t see on the label—but your body will feel it.</strong></p>

    <p>At <strong>HoneyHana</strong>, we believe in full transparency. And once you understand what goes into every spoon of raw, active honey, you’ll never look at cheap honey the same way again.</p>

    <h3>1. Most Commercial “Honey” Isn’t What You Think</h3>
    <p>According to global studies, up to <strong>1 in 3 jars of honey</strong> sold worldwide is either <strong>mixed with sugar syrup</strong> or <strong>overprocessed</strong>. These imitations may look the same but contain <em>none</em> of the health benefits real honey offers.</p>

    <h3>2. Nature Doesn’t Rush Perfection</h3>
    <ul>
      <li>🐝 Bees only make real honey during short blooming seasons.</li>
      <li>🌸 Rare floral sources like Jarrah, Redgum, or Mallee trees only bloom once a year.</li>
      <li>🔥 Droughts, bushfires, and climate change impact bee habitats and harvest yield.</li>
    </ul>
    <p><strong>Supply is limited. Quality cannot be rushed.</strong></p>

    <h3>3. True Honey Is Gently Handled — Never Cooked</h3>
    <p>Unlike mass-market brands, <strong>HoneyHana honey is never heated, ultrafiltered, or diluted</strong>. That means it retains all the naturally occurring:</p>
    <ul>
      <li>✅ Enzymes</li>
      <li>✅ Antioxidants</li>
      <li>✅ Pollen & Propolis particles</li>
      <li>✅ Bioactive antibacterial compounds</li>
    </ul>

    <h3>4. Tested for Potency – TA20+ to TA60+</h3>
    <p>All of our honey is lab-tested and certified for its <strong>Total Activity (TA)</strong>—a scientific measure of antibacterial strength. <br>
    TA60+ is considered <em>exceptional</em>, on par with top-tier Manuka honey, and is ideal for immunity, healing, and skin wellness.</p>

    <h3>5. Every Jar Is a Work of Nature (and Love)</h3>
    <ul>
      <li>🍯 Harvested in small batches from native forests</li>
      <li>👩‍🌾 Hand-poured and minimally strained — no machines, no shortcuts</li>
      <li>📦 Bottled with purpose — to preserve every drop of its raw natural energy</li>
    </ul>

    <h3>Is It Worth the Price?</h3>
    <p>Let’s put it this way: would you trade your health for a few dollars saved on sugar syrup?</p>
    <p>With HoneyHana’s raw honey, <strong>you’re not just buying a sweetener—you’re investing in real nourishment</strong> that supports digestion, immunity, skin health, and more. One spoon a day is all it takes to feel the difference.</p>

    <h3>What Our Customers Say</h3>
    <ul>
      <li>⭐️⭐️⭐️⭐️⭐️ “Once you taste real honey, you can never go back. My energy levels have improved, and my skin glows!” — Trang L.</li>
      <li>⭐️⭐️⭐️⭐️⭐️ “TA60+ helped me recover from sore throats faster than any syrup ever did. This is real medicine from nature.” — Daniel M.</li>
    </ul>

    <p><strong>Don’t just eat honey — experience it. Let HoneyHana show you the power of raw, active, natural honey.</strong></p>

    <p class="text-xs italic text-gray-500 mt-6">Disclaimer: Not suitable for infants under 12 months. Crystallization is natural in raw honey and does not affect quality.</p>
  `
  }


];

export const dataVideo: VideoData[] = [
  {
    id: 1,
    title: "Video 1",
    src: "https://res.cloudinary.com/dwqqve7ja/video/upload/v1753882780/fee4c979-cc31-4d67-8ebd-82c96bc1f1da_rr7vyf.mp4",
    thumbnail: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848108/bees-5028160_640_spf20x.jpg"
  },
  {
    id: 2,
    title: "Video 2",
    src: "https://res.cloudinary.com/dwqqve7ja/video/upload/v1753882776/228124b3-8360-4b37-b0a6-33faa8ccccd0_se7kfk.mp4",
    thumbnail: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848113/honey-bees-326334_640_uuk5yu.jpg"
  },
  {
    id: 3,
    title: "Video 3",
    src: "https://res.cloudinary.com/dwqqve7ja/video/upload/v1753882999/f3507123-d42b-4817-86a2-4c7b5b6d5681_1_w0m8n8.mp4",
    thumbnail: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848109/hive-1094857_640_bcysvo.jpg"
  },
  {
    id: 4,
    title: "Video 4",
    src: "https://res.cloudinary.com/dwqqve7ja/video/upload/v1753882845/9356a9e3-bf21-46be-bf5f-1437f6f0cb43_mvyqgq.mp4",
    thumbnail: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848103/beer-5433299_640_scfz7q.jpg"
  },
  {
    id: 5,
    title: "Video 5",
    src: "https://res.cloudinary.com/dwqqve7ja/video/upload/v1753882845/9356a9e3-bf21-46be-bf5f-1437f6f0cb43_mvyqgq.mp4",
    thumbnail: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848105/beekeeper-4426003_640_yiety1.jpg"
  },
  {
    id: 6,
    title: "Video 6",
    src: "https://res.cloudinary.com/dwqqve7ja/video/upload/v1753883184/b09b4a84-310c-4c21-8769-08300ff2c0f8_ehetqb.mp4",
    thumbnail: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848105/bee-9500879_640_vlvaal.webp"
  },
  {
    id: 7,
    title: "Video 7",
    src: "https://res.cloudinary.com/dwqqve7ja/video/upload/v1753882865/fe2a5b7b-cf57-4eee-9285-04fedd948a5e_q8xkst.mp4",
    thumbnail: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848105/beekeeper-4426003_640_yiety1.jpg"
  },
  {
    id: 8,
    title: "Video 8",
    src: "https://res.cloudinary.com/dwqqve7ja/video/upload/v1752848159/35619-406256504_tiny_i6iq4k.mp4",
    thumbnail: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848102/beekeeper-2650664_640_h2fg2v.jpg"
  },
  {
    id: 9,
    title: "Video 9",
    src: "https://res.cloudinary.com/dwqqve7ja/video/upload/v1752848162/178049-858827907_tiny_mwwfyd.mp4",
    thumbnail: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848108/bees-7996596_640_m7jqjd.jpg"
  }
]