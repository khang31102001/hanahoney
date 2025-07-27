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
        id: 1,
        slug: "what-is-active-honey-understanding-total-activity-ta-rating",
        name: "WHAT IS ACTIVE HONEY? UNDERSTANDING TOTAL ACTIVITY (TA) RATING",
        image: "https://honeyforlife.com.au/cdn/shop/articles/2020.11.27_Honey_For_Life-1.jpg?v=1744190419&width=1500",
        hoverImage: "https://plus.unsplash.com/premium_photo-1663957861996-8093b48a22e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9uZXl8ZW58MHx8MHx8fDA%3D",
        content: `
            <h2>What does “Activity” in honey mean?</h2>
            <p>When we talk about Active Honey, we’re referring to its natural antibacterial and antifungal power. This power is measured using something called a <b>Total Activity Rating (TA)</b>. The higher the TA, the stronger the honey’s ability to fight off bacteria and fungi—making it not just delicious, but incredibly good for you too.</p>
            <p>A TA rating of 10 or higher means the honey has beneficial properties. A rating of TA30+? That’s exceptional—and you’ll only find that level of natural power in a select few honeys around the world.</p>
            <p>At Honey For Life, we’re proud to offer premium Western Australian honey with some of the highest TA values ever recorded—up to TA70+.</p>
            <h2>How is TA measured?</h2>
            <ul>
                <li><b>Peroxide Activity (PA):</b> comes from a bee enzyme that reacts with water to produce hydrogen peroxide—a gentle but effective antibacterial compound.</li>
                <li><b>Non-Peroxide Activity (NPA):</b> is a result of special compounds found in the nectar of certain trees.</li>
            </ul>
            <p>Together, PA and NPA give honey its Total Activity—a powerful combination that activates when honey is eaten or applied to the skin.</p>
            <h2>Is Active Honey really that powerful?</h2>
            <p>Absolutely. When you eat high-activity honey or use it topically, the moisture from your body reactivates the honey’s natural enzymes. That means the antibacterial properties go to work—gently, yet effectively. It’s soothing for the digestive system and can even be used (with medical guidance) for minor wounds and skin care.</p>
            <h2>How is Activity in honey tested?</h2>
            <p>We use a scientific test called the Well Diffusion Phenol Equivalent (WDPE) method. This test measures how well a diluted honey sample can inhibit bacterial growth—basically, how effectively it can kill germs. A TA10 honey has 10% of the antibacterial strength of a phenol solution, and so on.</p>
            <h2>How does TA compare to Manuka’s MGO and UMF ratings?</h2>
            <p>While Manuka honey is usually rated by its MGO (methylglyoxal) content or UMF (Unique Manuka Factor)—which mostly reflect NPA—our Western Australian honeys are measured by Total Activity, which includes both PA and NPA.</p>
        `
    },
    {
        id: 2,
        name: "USING HONEY AS A NATURAL SKINCARE REMEDY: DIY TREATMENTS",
        slug: "using-honey-as-a-natural-skincare-remedy-diy-treatments",
        image: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1751026912/01874586-e202-45ce-9075-2f4673170065_ny18ax.jpg",
        hoverImage: "https://images.unsplash.com/photo-1545246909-b4e087f05214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbmV5fGVufDB8fDB8fHww",
        content: `
          <h2>Using Honey as a Natural Skincare Remedy: DIY Treatments</h2>
          <h2>Natural skincare is gaining popularity as people seek gentle, effective solutions for their skin concerns. One of nature’s most powerful skincare ingredients is honey – a natural humectant with antibacterial and soothing properties. At Honey For Life, we believe in the power of raw honey to nourish and protect your skin. Whether you’re looking for hydration, acne relief, or a glowing complexion, DIY honey treatments can transform your skincare routine.</h2>
          <h3>The Skin Benefits of Honey</h3>
          <ul>
            <li>Deep Hydration</li> – Honey is a natural humectant, meaning it draws moisture into the skin and keeps it locked in, leaving your skin soft and hydrated.</li>
            <li><b>Antibacterial Properties</b> – Raw honey contains natural enzymes and hydrogen peroxide, which help combat acne-causing bacteria.</li>
            <li><b>Soothing and Healing</b> – Its anti-inflammatory properties help calm redness, irritation, and even sunburns.</li>
            <li><b>Rich in Antioxidants</b> – Honey is packed with antioxidants that help protect the skin from free radical damage and premature ageing.</li>
            <li><b>Anti-Ageing Benefits</b> – Honey helps reduce the appearance of fine lines and wrinkles by boosting skin elasticity.</li>
          </ul>
          <h3>Simple DIY Honey Treatments for Healthy Skin</h3>
          <h4>1. Honey Face Mask for Hydration</h4>
          <p>If your skin feels dry and dull, this simple honey mask will restore moisture and give you a dewy glow.</p>
          <b>Ingredients:</b>
          <ul>
            <li>1 tablespoon raw honey</li>
            <li>1 teaspoon yogurt (optional for extra hydration)</li>
            <li>A few drops of rose water (optional for added soothing benefits)</li>
          </ul>
          <b>How to use:</b>
          <ul>
            <li>Mix the ingredients in a bowl.</li>
            <li>Apply a thin layer to clean, dry skin.</li>
            <li>Leave on for 15-20 minutes.</li>
            <li>Rinse with lukewarm water and pat dry.</li>
          </ul>
          <h4>2. Honey and Oatmeal Exfoliating Scrub</h4>
          <p>Exfoliation is essential for removing dead skin cells and promoting a brighter complexion. This gentle honey scrub is perfect for all skin types, especially sensitive skin.</p>
          <b>Ingredients:</b>
          <ul>
            <li>1 tablespoon raw honey</li>
            <li>1 tablespoon finely ground oatmeal</li>
            <li>1 teaspoon almond oil or coconut oil</li>
          </ul>
          <b>How to use:</b>
          <ul>
            <li>Mix the ingredients to form a paste.</li>
            <li>Gently massage onto damp skin using circular motions.</li>
            <li>Rinse with warm water and pat dry.</li>
          </ul>
          <h4>3. Honey and Lemon Spot Treatment for Acne</h4>
          <p>Honey’s antibacterial properties make it a great remedy for acne and blemishes. When combined with lemon juice, which contains natural citric acid, it helps brighten dark spots and prevent breakouts.</p>
          <b>Ingredients:</b>
          <ul>
            <li>1 teaspoon raw honey</li>
            <li>½ teaspoon freshly squeezed lemon juice</li>
          </ul>
          <b>How to use:</b>
          <ul>
            <li>Mix the honey and lemon juice.</li>
            <li>Apply directly to blemishes using a cotton swab.</li>
            <li>Leave on for 10-15 minutes.</li>
            <li>Rinse with lukewarm water.</li>
          </ul>
          <h4>4. Honey and Aloe Vera Soothing Gel</h4>
          <p>If you suffer from sensitive or irritated skin, this honey and aloe vera blend will calm and nourish your skin.</p>
          <b>Ingredients:</b>
          <ul>
            <li>1 tablespoon raw honey</li>
            <li>1 tablespoon fresh aloe vera gel</li>
          </ul>
          <b>How to use:</b>
          <ul>
            <li>Mix the ingredients well.</li>
            <li>Apply as a thin layer over the face.</li>
            <li>Leave on for 15-20 minutes.</li>
            <li>Rinse off with cool water.</li>
          </ul>
          <h4>5. Honey and Sugar Lip Scrub</h4>
          <p>Your lips also need care! This honey and sugar lip scrub gently exfoliates and hydrates chapped lips.</p>
          <b>Ingredients:</b>
          <ul>
            <li>1 teaspoon raw honey</li>
            <li>1 teaspoon brown sugar</li>
            <li>A few drops of coconut oil</li>
          </ul>
          <b>How to use:</b>
          <ul>
            <li>Mix the ingredients to form a paste.</li>
            <li>Gently massage your lips in circular motions.</li>
            <li>Rinse off with warm water and apply a lip balm.</li>
          </ul>
          <h3>Choosing the Right Type of Honey for Skincare</h3>
          <b>Raw Honey vs. Processed Honey</b>
          <ul>
            <li>Raw honey is unfiltered and unpasteurised, meaning it retains all its natural enzymes, antioxidants, and antibacterial properties.</li>
            <li>Processed honey is often heated and filtered, which can strip away beneficial nutrients.</li>
          </ul>
          <b>Best Types of Honey for Skincare</b>
          <ul>
            <li><b>Manuka Honey</b> – Known for its superior antibacterial properties, making it perfect for acne-prone skin.</li>
            <li><b>Jarrah Honey</b> – High in antioxidants, ideal for anti-ageing and deep hydration.</li>
            <li><b>Raw Wildflower Honey</b> – A great all-rounder for soothing and nourishing all skin types.</li>
          </ul>
          <p>At Honey For Life, we offer a range of high-quality, raw Australian honey that is perfect for both skincare and consumption.</p>
          <h3>Final Tips for Using Honey in Skincare</h3>
          <ul>
            <li>Always do a patch test before using honey on your face to check for any allergic reactions.</li>
            <li>Use organic, raw honey for the best skincare results.</li>
            <li>Avoid leaving honey on your face overnight, as it can be sticky and attract dust.</li>
            <li>Store honey in a cool, dry place to maintain its potency and effectiveness.</li>
            <li>Pair honey with ingredients like turmeric, cinnamon, or avocado for additional skin benefits.</li>
          </ul>
          <p>Honey is a powerhouse natural skincare ingredient that offers hydration, healing, and antibacterial benefits. By incorporating DIY honey treatments into your routine, you can achieve soft, glowing, and healthy skin without the use of harsh chemicals.</p>
          <p>At Honey For Life, we provide premium raw honey that is not just delicious but also works as an odd beauty treatment. Explore our selection today and experience the benefits of natural honey.</p>
          <p class="text-xs italic text-gray-500 mt-6">Disclaimer: While honey is a natural ingredient, some individuals may have allergies or skin sensitivities. Honey For Life is not responsible for any allergic reactions or adverse effects resulting from the use of these DIY treatments. Always conduct a patch test on a small area of skin before applying any new skincare remedy to ensure compatibility with your skin. If irritation occurs, discontinue use immediately.</p>
        `
    },
    {
        id: 3,
        name: "DESERT MALLEE HONEY: AWARD-WINNING FLAVOUR FROM THE HEART OF AUSTRALIA",
        slug: "desert-mallee-honey-award-winning-flavour-from-the-heart-of-australia",
        image: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1751026921/480487812_122223334028211632_5476122042152771841_n_vcunwl.jpg",
        hoverImage: "https://images.unsplash.com/photo-1654515722385-c684c5331c04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbmV5fGVufDB8fDB8fHww",
        content: `
          <h2>Desert Mallee Honey: Award-Winning Flavour from the Heart of Australia</h2>
          <p><b>Our Desert Mallee is the winner of the 2024 International Artisan Flavour Awards 🎉🎉🎉</b></p>
          <p>We are thrilled to announce that our Desert Mallee Honey has been crowned the winner of the 2024 International Artisan Flavour Awards! This prestigious recognition celebrates the unique and exquisite taste of our honey, which is collected from the resilient Mallee trees thriving in the red ochre soils of Western Australia's historic Goldfields district.</p>
          <h3>The Origins of Desert Mallee Honey</h3>
          <p>Our Desert Mallee Honey is a testament to the beauty and resilience of nature. The Mallee trees, known for their hardiness, flourish in the harsh extremes of the desert environment. These trees endure common droughts and heat stress, yet they produce nectar that gives our honey its distinctive flavour and rich amber colour.</p>
          <p>Collected in small batches, our honey is a true representation of the unforgiving desert seasons. Each jar is a labour of love, capturing the essence of the Goldfields district where the red soils and intense sun come together to create a unique terroir that is reflected in the taste and quality of our honey.</p>
          <h3>A Flavour Like No Other</h3>
          <p>The taste of Desert Mallee Honey is unparalleled. It embodies the rugged environment from which it is harvested, offering a complex flavour profile that is both bold and nuanced. The honey is rich and robust with a beautiful balance of citrus, minerally complexity and toffee. This is a medium-coloured honey with a deliciously strong taste. It’s a taste adventure, providing a sensory experience that transports you to the heart of the Australian desert.</p>
          <h3>Customer Reviews</h3>
          <ul>
            <li>⭐️⭐️⭐️⭐️⭐️ "Desert Mallee Honey is a rich, full-flavoured honey. Delicious! I will be buying it again. Quality product." — Jane R.</li>
            <li>⭐️⭐️⭐️⭐️⭐️ "Desert Mallee Honey TA20+ is simply amazing. The best honey I've ever tasted. Highly recommend!" — Mark T.</li>
          </ul>
          <h3>Health Benefits of Desert Mallee Honey</h3>
          <p>Beyond its exquisite taste, Desert Mallee Honey is also packed with health benefits. Like other raw honeys, it is rich in antioxidants and has natural antibacterial properties. It’s a perfect addition to your wellness routine, whether you’re using it as a natural sweetener, a soothing remedy for sore throats, or a boost to your immune system.</p>
          <h3>How to Enjoy Desert Mallee Honey</h3>
          <ul>
            <li><b>Drizzled over Breakfast:</b> Add a spoonful to your morning yoghurt, porridge, or toast for a delicious start to your day.</li>
            <li><b>In Beverages:</b> Stir it into your tea or coffee for a natural sweetener that adds depth to your drink.</li>
            <li><b>Culinary Uses:</b> Use it in marinades, dressings, and glazes to enhance the flavour of your dishes.</li>
            <li><b>Natural Remedy:</b> Take a spoonful to soothe a sore throat or mix it with warm water and lemon for a comforting drink.</li>
          </ul>
          <h3>A Commitment to Quality and Sustainability</h3>
          <p>At Honey For Life, we are committed to producing honey that is not only delicious but also sustainably sourced. Our beekeepers follow ethical practices to ensure the health and wellbeing of the bees and the environment. Each batch of Desert Mallee Honey is carefully harvested and minimally processed to retain its natural goodness.</p>
          <h3>Join the Celebration</h3>
          <p>We invite you to celebrate with us and experience the award-winning flavour of our Desert Mallee Honey. Visit our shop to purchase a jar and taste the difference for yourself.</p>
          <p>Winning the 2024 International Artisan Flavour Awards is a testament to the exceptional quality and taste of our Desert Mallee Honey. We are proud to share this unique product with honey enthusiasts around the world. Thank you for your support and for choosing Honey For Life as your source for premium Australian honey. Enjoy the natural, rich flavours of the desert in every spoonful.</p>
        `
    },
    {
        id: 4,
        name: "HONEY FOR DOGS",
        slug: "honey-for-dogs",
        image: "https://honeyforlife.com.au/cdn/shop/articles/can-dogs-eat-honey.jpg?v=1727770695",
        hoverImage: "https://plus.unsplash.com/premium_photo-1664273586569-08c3a0c205aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbmV5Y29tYnxlbnwwfHwwfHx8MA%3D%3D",
        content: `
          <h2>5 Health Benefits of Honey for Your Dog</h2>
          <p>While you may already appreciate honey's natural goodness, did you know it can also work wonders for your furry friend? From allergy relief to wound healing and beyond, honey holds a treasure trove of health benefits for dogs. Let's explore five compelling reasons why honey deserves a spot in your pet's wellness routine.</p>
          <ol>
            <li><b>Allergies:</b> When pollen counts are high and allergies are in full swing, honey can offer relief to your canine companion. By introducing small amounts of locally sourced raw honey into your dog's food, you may help build their tolerance to environmental allergens over time, reducing the severity of allergic reactions.</li>
            <li><b>Wound Healing:</b> Honey's natural antibacterial and anti-inflammatory properties make it a potent ally in the battle against wounds and skin irritations in dogs. Applied topically, honey creates a protective barrier over the affected area, promoting faster healing and reducing the risk of infection. Any raw honey with a high Total Activity (TA) rating, like Super Jarrah Honey TA50+ and Super Marri Honey TA50+, can be beneficial.</li>
            <li><b>Soothe Kennel Cough:</b> Kennel cough, a common respiratory infection among dogs, can cause discomfort and distress. Honey's soothing properties can help alleviate coughing and throat irritation. A small spoonful of Manuka honey can provide much-needed relief to your pup while supporting their recovery.</li>
            <li><b>Aid Digestion:</b> From occasional tummy troubles to chronic digestive issues, honey can offer gentle relief for dogs with upset stomachs. Its prebiotic properties promote the growth of beneficial gut bacteria, aiding in digestion and nutrient absorption.</li>
            <li><b>Boost Energy:</b> Whether your dog is an active adventurer or simply needs a little extra pep in their step, honey can provide a natural energy boost. The easily digestible sugars in honey serve as a quick source of fuel, helping to replenish energy levels and keep your canine companion feeling lively and vibrant.</li>
          </ol>
          <p>From combating allergies to promoting wound healing and beyond, honey's health benefits for dogs are truly impressive. Always opt for raw, unpasteurized honey to ensure maximum nutritional value. With proper care and consideration, honey can be a sweet and beneficial addition to your dog's daily routine, supporting their overall health and well-being.</p>
          <h3>Add Honey for Your Dog’s Overall Health & Wellbeing</h3>
          <p>From combating allergies to promoting wound healing and beyond, honey's health benefits for dogs are truly impressive. Always opt for raw, unpasteurised honey to ensure maximum nutritional value. However, it is crucial to use honey in moderation to avoid any potential health issues, such as weight gain or digestive upset. Be mindful of your dog's portion size, adjusting the amount according to their size and weight. With proper care and consideration, honey can be a sweet and beneficial addition to your dog's daily routine, supporting their overall health and well-being.</p>
          <h3>Customer Success Stories About Honey for Dogs</h3>
          <p><b>TARA WONG | 18TH APRIL 2023<br/>SUPER JARRAH TA50+ HONEY</b></p>
          <blockquote>Even though I find it a bit too sweet for my tastes and expensive, I still think it is a worthwhile purchase and like the fact that it is low GI, better value than manuka & has high antimicrobial properties. I tend to use it when I brew a particular type of tea. I also give just under a teaspoon 3 times a day for my puppy whenever he shows signs of having contracted kennel cough and it works like a dream.</blockquote>
          <p><b>MIKE BAY | 2ND MARCH 2022<br/>SUPER JARRAH TA50+ HONEY</b></p>
          <blockquote>13yo english staffie nagging cough stress induced but evidenced on xray, lots of vet pharma nil breakthrough, until the super jarrah, 3 teaspoons / day 8 days so far with human grade respiratory supplements, and cough has broken, just the odd reverse sneeze but mucous coming up and much quieter dog, bought another 500gm jar to reduce to a maintenance dose daily when ready.</blockquote>
          <p><b>JANET V. | 2ND APRIL 2024<br/>MANUKA HONEY MGO400+</b></p>
          <blockquote>I recently bought this honey mainly for treating a wound on my dog, the honey cleared the wound up within a week where as vet prescribed creams didn't do anything, as a bonus it also tastes great!</blockquote>
          <p class="text-xs italic text-gray-500 mt-6">NOTE: Introducing any new food or supplement into your pet's diet should be done with caution and under the guidance of a veterinarian. While honey offers numerous health benefits for dogs, it's essential to ensure that it's suitable for your pet's individual needs and health condition.</p>
        `
    },
    {
        id: 5,
        name: "THE HEALTH BENEFITS OF RAW HONEY: A SUPERFOOD FOR EVERYDAY WELLNESS",
        slug: "the-health-benefits-of-raw-honey-a-superfood-for-everyday-wellness",
        image: "https://plus.unsplash.com/premium_photo-1664273586932-ab870d61f7e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9uZXl8ZW58MHx8MHx8fDA%3D",
        hoverImage: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9uZXl8ZW58MHx8MHx8fDA%3D",
        content: `
          <h2>The Health Benefits of Raw Honey: A Superfood for Everyday Wellness</h2>
          <p>Today finding natural products that promote wellness can be a challenge. At Honey for Life, we’re a leader in premium raw honey, offering a range of organic, nutrient-rich honey products harvested from pristine locations in Western Australia. Some of our products include Active Jarrah, Manuka, and beeswax-infused products, which are carefully curated to retain maximum health benefits.</p>
          <h3>What is Raw Honey?</h3>
          <p>Raw honey is honey in its purest form, unprocessed, and unpasteurised. Unlike conventional honey, raw honey isn’t heated or pasteurised, preserving its natural vitamins, minerals, enzymes, and antioxidants. This type of honey is valued for its rich, complex flavour and high nutritional content. At Honey for Life we ensure that our raw honey products are minimally processed, retaining their natural enzymes and antibacterial properties to provide a wholesome, health-boosting ingredient.</p>
          <h3>Nutritional Profile of Raw Honey</h3>
          <p>Raw honey is packed with antioxidants, enzymes, and minerals like iron, calcium, potassium, and magnesium. These nutrients play crucial roles in supporting immune function, aiding digestion, and providing energy. Some of Honey for Life’s specific products, like the Jarrah and Manuka honey ranges, are also known for their therapeutic activity due to high levels of methylglyoxal and total activity, which have antimicrobial properties.</p>
          <h3>Immune System Booster</h3>
          <p>One of the most celebrated benefits of raw honey is its ability to strengthen the immune system. With potent antioxidants, raw honey helps combat oxidative stress and reduces inflammation, which can weaken immunity. Manuka honey, specifically, is prized for its strong antibacterial properties due to its MGO content, making it an effective natural remedy for boosting immunity.</p>
          <h4>Honey for Life’s Manuka Honey MGO 829+</h4>
          <p>We pride ourselves on our high-grade Manuka honey with MGO 829+, a powerhouse for immune support. Its high MGO level makes it ideal for daily use in fighting off colds, flu, and infections. This honey can be enjoyed in warm drinks or directly from the spoon for an immunity-boosting treat.</p>
          <h3>Natural Energy Source</h3>
          <p>Raw honey is a fantastic natural source of energy, thanks to its unprocessed sugars. Unlike processed sugars, raw honey’s natural composition includes a balanced mix of fructose and glucose that offers sustained energy. This makes it a perfect pre- or post-workout snack or an afternoon pick-me-up. Raw honey’s natural sugars are more easily digested, releasing energy gradually, which helps avoid blood sugar spikes.</p>
          <h3>Digestive Health</h3>
          <p>Raw honey is known to aid digestion, as it contains enzymes that facilitate the breakdown of sugars and carbohydrates. It also serves as a prebiotic, which nourishes beneficial bacteria in the gut, improving digestive health and enhancing nutrient absorption. Regular consumption of raw honey can help alleviate symptoms like bloating, constipation, and acid reflux.</p>
          <h4>Honey for Life’s Active Jarrah Honey TA35+</h4>
          <p>One of the best honey products for digestive health is Honey for Life’s Active Jarrah Honey TA35+, known for its lower glycaemic index and antimicrobial properties. Jarrah honey’s antibacterial compounds make it effective in soothing stomach discomfort and promoting gut health. Taken in small amounts daily, it can work wonders for digestive wellness.</p>
          <h3>Skin Health and Wound Healing</h3>
          <p>Raw honey’s antibacterial and anti-inflammatory properties have long been recognised for treating skin ailments and aiding wound healing. Manuka honey, particularly, is applied topically to help heal wounds and soothe skin conditions like eczema and acne. Raw honey’s natural humectant properties also mean it helps the skin retain moisture, making it an ideal ingredient for hydration.</p>
          <h4>Beeswax Balms</h4>
          <p>Honey for Life offers beeswax-based products, including balms, that harness the natural hydrating properties of honey and beeswax. These balms are excellent for those looking for a natural way to hydrate and protect the skin, particularly during the dry seasons. The beeswax forms a protective barrier, while honey’s nutrients penetrate deeply, leaving the skin smooth and healthy.</p>
          <h3>Antioxidant Powerhouse</h3>
          <p>Raw honey is rich in antioxidants, including flavonoids and polyphenols, which help neutralise free radicals that can cause cellular damage. By incorporating raw honey into your diet, you support the body’s defences against diseases associated with oxidative stress, such as heart disease and cancer. Antioxidants also play a role in reducing inflammation, which is beneficial for overall health and longevity.</p>
          <h3>Allergy Relief</h3>
          <p>Consuming raw honey is thought to help reduce allergy symptoms by exposing the body to small amounts of pollen, which can build immunity over time. This practice, sometimes called “immunotherapy,” may reduce seasonal allergy symptoms and offer a natural alternative to allergy medication. While this approach works best with locally-sourced honey, Honey for Life offers options that are pesticide-free and organically sourced, providing a natural remedy that may help with managing mild allergy symptoms.</p>
          <h3>Supporting Sustainable Practices</h3>
          <p>In addition to their health benefits, our products support sustainable beekeeping and environmental health. By sourcing honey responsibly and practising sustainable beekeeping, we ensure the preservation of bee populations, which are essential to pollination and biodiversity. Supporting ethical honey producers not only benefits your health but also contributes to broader environmental wellness.</p>
          <h3>Incorporating Raw Honey into Daily Life</h3>
          <p>Raw honey can be easily incorporated into your diet in a variety of ways. From adding it to morning teas and smoothies to drizzling it on toast or yoghurt, the possibilities are endless. When using raw honey, it’s important not to heat it above 40°C to preserve its beneficial enzymes and nutrients. For the best experience, consider exploring Honey for Life’s variety of honey options, such as the premium Super Active Jarrah TA50+, which offers heightened medicinal benefits ideal for both culinary and medicinal uses.</p>
          <p>At Honey for Life, we provide a selection of premium raw honey products, each with unique health benefits that contribute to overall wellness. From immune support and energy boosts to improved digestion and skin health, raw honey is a natural superfood that can enrich everyday life. By choosing responsibly sourced, pure honey products, you are not only enhancing your health but also supporting sustainable practices that protect the environment. Whether enjoyed straight from the jar or infused into meals, raw honey truly is nature’s gift for daily wellness.</p>
        `
    },
    {
        id: 6,
        name: "THE SWEET BENEFITS OF HONEY WATER: A NATURAL ELIXIR",
        slug: "the-sweet-benefits-of-honey-water-a-natural-elixir",
        image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbmV5fGVufDB8fDB8fHww",
        hoverImage: "https://images.unsplash.com/photo-1536788567643-8c2368376526?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbmV5fGVufDB8fDB8fHww",
        content: `
          <h2>The Sweet Benefits of Honey Water: A Natural Elixir</h2>
          <p>Honey water, a simple yet powerful mixture of honey and water, has been cherished for centuries for its numerous health benefits. This natural elixir is easy to prepare and can be a delightful addition to your daily routine. Let’s explore what makes honey water so special and how it can benefit your health.</p>
          <h3>What is Honey Water?</h3>
          <p>Honey water is made by dissolving honey in warm water (never boiling). This process helps preserve the beneficial enzymes and nutrients found in honey, making it a potent drink with various health advantages.</p>
          <h3>Health Benefits of Honey Water</h3>
          <ul>
            <li><b>Soothing Sore Throats:</b> Honey has natural antibacterial properties that can help alleviate throat irritation. A warm cup of honey water can be particularly soothing during cold and flu season.</li>
            <li><b>Supporting Digestion:</b> Honey water can aid in digestion and help with issues like constipation and acid reflux. The enzymes in honey become more active when diluted with water, enhancing its digestive benefits.</li>
            <li><b>Boosting the Immune System:</b> Honey, especially varieties like Manuka honey, is rich in antioxidants and antimicrobial properties. Regular consumption of honey water can support overall immune health, helping you stay resilient against illnesses.</li>
            <li><b>Hydration:</b> Honey water is a hydrating alternative to sugary drinks. It provides a quick energy boost and helps maintain hydration levels, making it a great choice for a post-workout drink or a refreshing afternoon pick-me-up.</li>
          </ul>
          <h3>Ancient and Traditional Uses of Honey Water</h3>
          <ul>
            <li><b>Ancient Egypt:</b> Honey was highly valued in ancient Egypt, not only as a sweetener but also for its medicinal properties. Egyptians used honey in various remedies and rituals, often mixing it with water to create soothing drinks and healing concoctions.</li>
            <li><b>China:</b> In traditional Chinese medicine, honey water has been used for centuries to treat various ailments, including digestive issues and sore throats. Honey is considered a natural remedy that balances the body’s energy (Qi) and supports overall health.</li>
            <li><b>India:</b> Honey water is a staple in Ayurvedic medicine, where it is known as “Madhu Jala.” It is believed to aid digestion, detoxify the body, and promote overall well-being. Honey water is often consumed in the morning to kickstart the metabolism and cleanse the digestive system.</li>
            <li><b>Greece:</b> The ancient Greeks used honey water as a refreshing drink and a natural remedy. Honey was often mixed with water and sometimes with vinegar to create a drink called “oxymel,” which was used to treat various health conditions.</li>
            <li><b>Middle East:</b> Honey has been a significant part of Middle Eastern culture for thousands of years. Honey water is commonly consumed for its health benefits and is often used in traditional remedies to soothe sore throats and boost energy.</li>
          </ul>
          <h3>How to Make Honey Water</h3>
          <ol>
            <li>Mix 1-2 tablespoons of honey into a cup of warm (not boiling) water.</li>
            <li>Stir until the honey is fully dissolved.</li>
            <li>For added flavor and health benefits, consider adding ingredients like lemon, ginger, or cinnamon.</li>
          </ol>
          <h3>The Science Behind Honey Water</h3>
          <ul>
            <li><b>Dissolution:</b> Water helps dissolve honey, making it easier to mix with other ingredients and consume.</li>
            <li><b>Activation of Enzymes:</b> The natural enzymes in honey become more active, aiding in digestion and enhancing antimicrobial properties.</li>
            <li><b>Improved Absorption:</b> Honey water is absorbed more quickly by the body, allowing for faster utilization of its nutrients.</li>
            <li><b>Enhanced Flavor:</b> Water can mellow the sweetness of honey, making it more palatable for those who find pure honey too intense.</li>
          </ul>
          <h3>Incorporating Honey Water into Your Routine</h3>
          <p>Honey water can be enjoyed at any time of the day. Start your morning with a warm cup to kickstart your metabolism, or enjoy it as a soothing bedtime drink. It’s also a great addition to your wellness routine, providing a natural and delicious way to support your health.</p>
          <h3>Frequently Asked Questions About Honey Water</h3>
          <ul>
            <li><b>What are the benefits of drinking honey water?</b> Drinking honey water can soothe sore throats, support digestion, boost the immune system, and provide hydration.</li>
            <li><b>How do you make honey water?</b> To make honey water, mix 1-2 tablespoons of honey into a cup of warm water and stir until dissolved. You can add lemon, ginger, or cinnamon for extra flavor and benefits.</li>
            <li><b>Can honey water help with weight loss?</b> Honey water can aid in weight loss by boosting metabolism and providing a natural energy source, making it a healthier alternative to sugary drinks.</li>
            <li><b>Is honey water good for skin?</b> Yes, honey water can benefit the skin by providing hydration and antioxidants, which help maintain healthy and glowing skin.</li>
            <li><b>What is the best time to drink honey water?</b> The best time to drink honey water is in the morning on an empty stomach to kickstart your metabolism or before bed to promote relaxation and digestion.</li>
          </ul>
          <p>Incorporating honey water into your daily routine is a simple and effective way to enjoy the numerous health benefits of honey. Whether you’re looking to soothe a sore throat, support your digestion, boost your immune system, or stay hydrated, honey water is a natural and delicious solution. Start your day with a warm cup of honey water or enjoy it as a relaxing bedtime drink. Give honey water a try and experience the sweet benefits for yourself!</p>
        `
    },
    {
        id: 7,
        name: "Honeycomb Raw",
         slug: "honeycomb-raw",
        image: "https://media.istockphoto.com/id/694546042/photo/honey-with-honeycombs-in-a-jar.webp?a=1&b=1&s=612x612&w=0&k=20&c=F9DIox6vgRS9dl6k2WwhF74nlh5Rn9VOMv_uxQdx3m4=",
        hoverImage: "https://media.istockphoto.com/id/183354852/photo/pot-of-honey.webp?a=1&b=1&s=612x612&w=0&k=20&c=48aXe_BW3SBXe-JCk3cvlMk06snITNxC4iPrGgt2_2k=",
        content: `
            <h2>Honeycomb Raw: The Natural Wonder</h2>
            <p>Raw honeycomb is the purest form of honey, straight from the hive. It contains honey, pollen, and beeswax, offering a range of nutrients and health benefits.</p>
            <p>Enjoy honeycomb raw as a sweet treat, or use it to enhance your favorite dishes.</p>
            <ul>
                <li>Pure and unprocessed</li>
                <li>Contains honey, pollen, and beeswax</li>
                <li>Rich in nutrients and enzymes</li>
            </ul>
        `
    },
    {
        id: 8,
        name: "Acacia Honey",
        slug: "acacia-honey",
        image: "https://media.istockphoto.com/id/842769074/photo/sweet-honeycomb-and-wooden-honey-dripping.webp?a=1&b=1&s=612x612&w=0&k=20&c=3Wi2g_Z-_DcfHkulYM6ax0-niJNSIJ8Q3I1cXNlIA6U=",
        hoverImage: "https://media.istockphoto.com/id/2167178713/photo/iced-honey-aiyu-jelly-green-tea-with-sugar-pot-and-spoon-served-in-disposable-glass-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=mGLto59bmO4nV6D6-jEjE72Fb7oBvsB2GyZtYZRjAso=",
        content: `
            <h2>Acacia Honey: The Delicate Sweetness</h2>
            <p>Acacia honey is known for its light color and mild, delicate flavor. It remains liquid for a long time and is less likely to crystallize.</p>
            <p>It is often used as a sweetener for tea and desserts, and its subtle taste does not overpower other flavors.</p>
            <ul>
                <li>Light color and mild flavor</li>
                <li>Remains liquid and resists crystallization</li>
                <li>Ideal for sweetening without overpowering</li>
            </ul>
        `
    },
    {
        id: 9,
        slug: "honey-gift-set",
        name: "Honey Gift Set",
        image: "https://media.istockphoto.com/id/157394621/vi/anh/m%E1%BA%ADt-ong.jpg?s=612x612&w=0&k=20&c=WlESNMck_HvAL8G0LsL03dJlpEzUqclvz7eJ76Q8lVg=",
        hoverImage: "https://media.istockphoto.com/id/157394621/vi/anh/m%E1%BA%ADt-ong.jpg?s=612x612&w=0&k=20&c=WlESNMck_HvAL8G0LsL03dJlpEzUqclvz7eJ76Q8lVg=",
        content: `
            <h2>Honey Gift Set: The Perfect Present</h2>
            <p>This honey gift set includes a selection of our finest honeys, beautifully packaged for the perfect gift.</p>
            <p>Share the natural goodness of honey with friends and family, or enjoy a variety of flavors yourself.</p>
        `
    },
    {
        id: 10,
        slug: "wildflower-honey",
        name: "Wildflower Honey",
        image: "https://media.istockphoto.com/id/183354852/vi/anh/n%E1%BB%93i-m%E1%BA%ADt-ong.jpg?s=612x612&w=0&k=20&c=nSrnCfSBk2MQItqV24S4sFkNCKSJaE130lL4J9G_4FE=",
        hoverImage: "https://media.istockphoto.com/id/2173119049/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%93-th%C3%AAm-m%E1%BA%ADt-ong-v%C3%A0o-t%C3%A1ch-tr%C3%A0.jpg?s=612x612&w=0&k=20&c=RxdjjWr3iol_mmTWsJmkcuntzewfHhd6exr_zQf2r4k=",
        content: `
            <h2>Wildflower Honey: The Taste of Nature</h2>
            <p>Wildflower honey is made from the nectar of various wildflowers, giving it a unique and diverse flavor profile.</p>
            <p>Its taste can vary greatly depending on the flowers available at the time of foraging, making each batch unique.</p>
            <ul>
                <li>Diverse flavor profile</li>
                <li>Varies with the seasons and foraging locations</li>
                <li>Enjoyable on its own or as a sweetener</li>
            </ul>
        `
    }
];

 export const dataVideo: VideoData[] = [
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