export interface RichTextSection {
  title: string;
  content: string[];
}

export interface ImageTextBlock {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

// homeData.ts

export const bannerData = {
  backgroundColor: '#f7d47a',
  imageUrl: '/images/hero-banner-home.jpg',
  heading: "HANA'S HONEY AUSTRALIA'S FINEST MEDICINAL HONEY  & BEE PRODUCTS",
  button: {
    label: "SHOP NOW",
    link: "/honey",
  },
};

export const richText1 = {
  title: "AUSTRALIA'S MOST PREMIUM AND AWARD WINNING HONEYS",
  content: [
    "At Hanna’s Honey, our passion is to craft the finest premium honey products from Western Australia’s pristine old-growth eucalypt forests. Our honey is 100% raw, natural, and sustainably harvested, ensuring purity and potency exactly as nature intended.",
    `From the rare <a href="/honey"><strong>Jarrah</strong></a> to the bold <a href="/honey"><strong>Redgum</strong></a> and silky <a href="/honey"><strong>Blackbutt</strong></a>, every drop is nurtured by untouched wilderness and cold-processed to preserve natural enzymes, antioxidants, and medicinal properties.`
  ],
  saleText: [
    `<strong>
      Discover the purest form of 
      <a href="/honey">Australian medicinal honey</a> 
      and elevate your wellbeing with the wholesome goodness of 
      <a href="/honey">Western Australian raw honey today</a>.
    </strong>`,
  ],
};


export const richText2 = {
  title: "FROM OUR HIVE TO YOUR HOME:  THE STORY OF OUR HONEY",
};

export const videoSection = {
  videoId: "5RLirWPNTLw",
  thumbnail: "//honeyforlife.com.au/cdn/shop/files/HONEYFORLIFE_MARRI_WIDE_EDIT_V4.00_01_11_05.Still008.jpg?v=1707724504&width=1920",
  title: "The Story of Honey For Life and our honey.",
  youtubeUrl: "https://www.youtube.com/embed/5RLirWPNTLw?enablejsapi=1",
};

// homeData.ts (phần mở rộng)

export const textBlockSection = {
  title: "WHY OUR AUSTRALIAN RAW HONEY STANDS ABOVE THE REST",
  content: [
    `Searching for raw honey that is not only pure but also irresistibly delicious? You’ve just found it – nature’s liquid gold. With its rich flavor, captivating aroma, and silky-smooth texture, <a href="/honey"><strong>Hanna’s Honey</strong></a> is proudly recognized as one of the finest producers of premium active honey in Australia and beyond.</br>`,
    `At <a href="/honey"><strong>Hanna’s Honey</strong></a>, our strength comes from the purity of Western Australian landscapes and the unmatched quality of our bees’ work. Each jar is harvested with care to preserve all natural enzymes, antioxidants, and medicinal properties that make Australian honey so highly valued worldwide.</br>`,
    `From the rare <a href="/honey"><strong>Jarrah</strong></a> with its exceptionally high TA rating, 
    to the smooth richness of <a href="/honey"><strong>Blackbutt</strong></a> and the bold depth of <a href="/honey"><strong>Redgum</strong></a>, 
    every variety is hand-selected and carefully managed by us — from farm to packing — to ensure only the very best reaches our customers. Our promise is simple: to deliver honey that is premium, authentic, and trusted, capturing the true essence of Australia’s wild forests in every spoonful.</br>`
    ,
  ],
  saleText: [`<strong>So, what exactly makes our honey taste so good? Find out below...</strong>`],
};

export const imageWithText1 = {
  title: "HEALTHY BEES, PRISTINE ENVIRONMENT – WESTERN AUSTRALIA’S NATURAL EDGE",
  description: "Western Australia is home to one of the healthiest bee populations in the world—completely free from major bee diseases and pests. This rare natural advantage makes it one of only two regions globally where bees thrive without the need for chemical intervention. As a result, our beekeeping practices remain entirely chemical-free, allowing us to produce honey of unmatched purity, quality, and integrity",
  imageUrl: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753543116/pexels-solodsha-8105066_eyorez.jpg",
  imageAlt: "Happy, healthy bees",
};

// homeData.ts (phần mở rộng tiếp theo)

export const imageWithText2 = {
  title: "PURE, UNTOUCHED, AND COLD-PROCESSED – JUST AS NATURE INTENDED",
  description: [
    `<a href="/honey"><strong>At Hanna’s Honey</strong></a>, every drop is 100% raw and cold-processed through a fine 100-micron filter — never heated, never pasteurized. Sourced from Western Australia’s pristine, disease-free bee population, our honey requires no thermal treatment.<br>`,
    `This natural process safeguards the full spectrum of enzymes, antioxidants, and antibacterial properties, delivering honey of unrivaled purity and potency. The result is a truly <a href="/honey"><strong>medicinal-grade superfood</strong></a>  medicinal-grade superfood — pure, powerful, and exactly as nature intended.</br>`
  ],
  imageUrl: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753542430/pexels-anete-lusina-5247996_iwtnsj.jpg",
   imageAlt: "Eucalypt Honeys",
};

export const imageWithText3 = {
  title: "NATURAL GOODNESS IN EVERY DROP OF OUR HONEY",
  description:  `
  <p class="text-base md:text-lg text-gray-700 mb-4">
    At Hanna’s Honey, we bring you the purest treasures from Western Australia’s ancient forests.
    Sustainably harvested and carefully cold-processed, our honey preserves its natural enzymes,
    antioxidants, and antibacterial properties — untouched and exactly as nature intended.
  </p>

  <p class="text-base md:text-lg font-semibold mb-3">Our premium collection includes:</p>

  <ul class="list-inside list-disc space-y-2 text-gray-700 mb-6">
    <li>
      <strong>Jarrah TA60</strong> (<em>≈ MGO 1600+</em>): one of the rarest and most powerful honeys in the world,
      renowned for its exceptionally high antibacterial strength.
    </li>
    <li>
      <strong>Jarrah TA46</strong> (<em>≈ MGO 1200+</em>): smooth, rich, and complex, offering both unique flavor and potent medicinal qualities.
    </li>
    <li>
      <strong>Redgum TA49.6</strong> (<em>≈ MGO 1300+</em>): bold and robust, naturally packed with antioxidants to support wellness and vitality.
    </li>
    <li>
      <strong>Blackbutt TA40.2</strong> (<em>≈ MGO 1000+</em>): silky and balanced, combining distinctive taste with proven antibacterial benefits.
    </li>
  </ul>

  <p class="text-base md:text-lg text-gray-700">
    Every variety is hand-selected and carefully managed from hive to jar to ensure unmatched purity,
    potency, and authenticity. With Hanna’s Honey, every spoonful is more than honey; it is a premium
    wellness experience and a true gift from nature.
  </p>
  `,
  imageUrl: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753542252/pexels-anna-pou-8330360_aqutpo.jpg",
  imageAlt: "Australian Manuka Honey",
};

export const imageWithText4 = {
  id: "template--14429389520970__d0d11084-e28e-4f42-aea0-10738af6afba",
  image: {
    src: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753541973/pexels-arthurbrognoli-2260933_efayyf.jpg",
    alt: "",
    width: 1080,
    height: 1080,
  },
  heading: "NATURE’S MOST POTENT EUCALYPT HONEYS: JARRAH, REDGUM & BLACKBUTT",
  description: `
  <p>
    Sourced from the untouched, biodiverse forests of Western Australia, Hanna’s Honey brings you some of the rarest and most powerful Eucalypt honeys in the world. Each variety is born from unique native blossoms, naturally rich in nutrients and exceptionally potent.
  </p>

  <ul class="list-inside list-disc space-y-2 text-gray-700 mb-6" >
    <li>
      <strong>Jarrah (Eucalyptus marginata)</strong> – exceptionally rare, flowering only once every two years. With TA60 and TA46, Jarrah is celebrated globally as one of the most medicinal honeys on earth, boasting outstanding antibacterial and antioxidant power.
    </li>
    <li>
      <strong>Redgum (Eucalyptus camaldulensis)</strong> – derived from the majestic River Red Gum, this honey is bold, robust, and naturally high in antioxidants. Its TA49.6 rating makes it a potent choice for supporting vitality and wellness.
    </li>
    <li>
      <strong>Blackbutt (Eucalyptus patens)</strong> – a rare Western Australian bloom producing honey that is silky, balanced, and remarkably rich in antibacterial strength. With a TA40.2 rating, Blackbutt offers both a refined taste and trusted health benefits.
    </li>
  </ul>

  <p>
    Every jar of Hanna’s Honey is sustainably harvested and carefully cold-processed to preserve all natural enzymes, antioxidants, and antibacterial properties — ensuring purity and potency exactly as nature intended.
  </p>

  <p>
    Backed by exceptionally high Total Activity (TA) ratings, these rare honeys are the ideal choice for those who value health, purity, and the extraordinary wellness benefits of raw Australian honey. With Hanna’s Honey, each spoonful is not just honey — it is a rare treasure of nature, crafted for those who seek only the best.
  </p>
  `,
};
export const textBlockSlider = {
  title: "OUR COMMITMENT TO PREMIUM HONEY & BEE PRODUCTS",
  description:`
   <p>
    At Hanna’s Honey, we are devoted to crafting the finest raw honeys from Western Australia’s untouched forests.
    Our premium range — including <strong>Jarrah TA60</strong>, <strong>Jarrah TA46</strong>,
    <strong>Redgum TA49.6</strong>, and <strong>Blackbutt TA40.2</strong> — is sustainably harvested and carefully
    cold-processed to preserve every natural enzyme, antioxidant, and antibacterial property.
  </p>

  <p>
    To guarantee authenticity and uncompromising quality, our honeys are supported by official certification from
    New Zealand and verified through independent laboratories in Australia that meet international testing
    standards. Each batch is rigorously checked to ensure purity, safety, and consistent excellence.
  </p>

  <p>
    Every jar of Hanna’s Honey is more than honey — it is a symbol of purity, potency, and provenance, making it
    the perfect choice for those seeking premium wellness, elegant gifts, or trusted wholesale and export supply.
  </p>
  `
};
export const textSaleHeroData = {
  id: "template--14429389520970__1650513370adc7ef06",
  heading: "JOIN THE HIVE",
  subheading: `Honey Lovers, Unite! Subscribe for exclusive access to our premium honey varieties. Pure, golden sweetness awaits – join the buzz today <br /><strong>AND GET $10 OFF - LOOK IN YOUR INBOX NOW!</strong>`,
  form: {
    action: "/contact#contact_form",
    emailPlaceholder: "Email",
    hiddenFields: {
      form_type: "customer",
      utf8: "✓",
      tags: "newsletter",
    },
    submitLabel: "Subscribe"
  }
};
