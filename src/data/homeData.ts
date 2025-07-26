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
  imageUrl: 'https://res.cloudinary.com/dwqqve7ja/image/upload/v1752848117/tea-599227_640_klyszn.jpg',
  heading: "HANA'S HONEY AUSTRALIA'S FINEST MEDICINAL HONEY  & BEE PRODUCTS",
  button: {
    label: "SHOP NOW",
    link: "/honey",
  },
};

export const richText1 = {
  title: "AUSTRALIA'S MOST PREMIUM AND AWARD WINNING HONEYS",
  content: [
    `At Honey For Life, our passion lies in crafting the finest premium honey products. Our honey is 100% raw, natural, and sustainably sourced from the pristine old-growth forests, unique desert gold-fields, and our own reclaimed farmland Manuka plantations, in Western Australia. We believe in minimal human interaction because that’s the way nature intended it, and we aim to keep it that way.`,
  ],
  saleText: [`
    Discover the purest form of 
    <a href="/collections/super-active-honey"><strong >Australian medicinal honey</strong></a> and elevate your life with the wholesome goodness of 
    <a href="/collections/shop-all-premium-australian-honey-bee-products"><strong>Western Australian raw honey</strong></a> today.`
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
    "Looking for raw honey that’s not only pure but also irresistibly delicious? You’ve just found it – nature’s liquid gold. With its rich, complex flavor, captivating aroma, and silky-smooth texture, Honey For Life is proudly recognized as one of the finest producers of active honey in Australia – and across the globe. Our excellence speaks for itself: in 2022, both our Organic Jarrah Honey and Organic Karri Honey were awarded Gold at the International Organic Food Awards. Most recently, in 2024, our Desert Mallee Honey claimed top honors at the International Best Taste Awards in the USA",
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
  description: "Our entire honey collection is 100% raw and cold-processed using a fine 100-micron filter—never heated, never pasteurized. Thanks to Western Australia’s pristine, disease-free bee population, there’s no need for thermal treatment, allowing us to preserve all the natural enzymes, antioxidants, and antibacterial properties. The result? Exceptionally potent honeys that stand among the most powerful medicinal honeys available today",
  imageUrl: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753542430/pexels-anete-lusina-5247996_iwtnsj.jpg",
   imageAlt: "Eucalypt Honeys",
};

export const imageWithText3 = {
  title: "NATURAL GOODNESS IN EVERY DROP OF OUR HONEY",
  description:   "Our Australian Manuka Hana Honey is sustainably harvested from regenerated farmland, reflecting our commitment to environmental stewardship and product integrity. With some of the highest MGO ratings available — MGO263, MGO514, MGO829, and the exceptional MGO1500+ — this honey stands as a powerhouse of natural antibacterial strength. Renowned for its medicinal qualities, our Manuka honey offers unparalleled wellness support, making it the premium choice for those seeking both purity and performance in every spoonful.",
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
  heading: "NATURE’S MOST POTENT EUCALYPT HONEYS: JARRAH, MARRI, KARRI, BLACKBUTT & BEYOND",
  text: "Harvested from our own beekeeping sites deep within the untouched, biodiverse old-growth forests of Western Australia, our Eucalypt honeys — Jarrah, Marri, Karri, Blackbutt, and Desert Mallee — are a true gift from nature. Nurtured by the unique flora of these ancient ecosystems, each variety is rich in nutrients and naturally potent. With exceptionally high Total Activity (TA) ratings, these honeys boast powerful antibacterial and antioxidant properties, making them an ideal choice for those who value health, purity, and the extraordinary benefits of raw honey",
  button: {
    text: "SHOP OUR RANGE",
    link: "/collections/shop-all-premium-australian-honey-products"
  }
};
export const textBlockSlider = {
  title: "OUR COMMITMENT TO PREMIUM HONEY & BEE PRODUCTS",
  content: [
    `From our premium range of Jarrah, Marri, Karri, or our popular Super Jarrah, to our certified organic range, or our decadent beeswax; every product we produce right here in Western Australia is made to be as natural and of the highest quality as possible. Honey For Life follows B-QUAL best practice standards and some of our honeys are organically certified by the Organic Food Chain company, and testing regimes on all honey batches.`,
    `<strong>Shop honey now or find out about our Australian honey products wholesale and export options.</strong>`,
  ],
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
