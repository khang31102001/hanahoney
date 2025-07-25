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
  title: "WHAT MAKES OUR AUSTRALIAN RAW HONEY SO GOOD?",
  content: [
    `Wondering where to buy raw honey that also tastes amazing? Well, look no further, because you’ve struck gold – liquid gold that is. Rich in taste, with an incredible fragrance and a smooth consistency, Honey For Life is renowned for producing some of the best tasting active honey in Australia and the world. In 2022, our Organic Jarrah Honey and Organic Karri Honey were awarded Gold at the International Organic Food Awards. In 2024 our Desert Mallee won the International Best Taste Awards in USA.`,
    ,
  ],
  saleText: [`<strong>So, what exactly makes our honey taste so good? Find out below...</strong>`],
};

export const imageWithText1 = {
  title: "HAPPY, HEALTHY BEES:THE WESTERN AUSTRALIA ADVANTAGE",
  description: `Western Australia boasts one of the world's healthiest bee populations, free from several significant bee diseases and pests.
  This unique advantage positions us as one of only two regions globally with thriving, disease-free bees.
  The absence of these threats allows our beekeeping operations to remain completely chemical-free,
  ensuring the utmost purity and quality in our honey.`,
  imageUrl: "//honeyforlife.com.au/cdn/shop/files/Home_page_images_1080_x_1080_1.png?v=1701932375&width=1500",
  imageAlt: "Happy, healthy bees",
};

// homeData.ts (phần mở rộng tiếp theo)

export const imageWithText2 = {
  title: "100% RAW AND COLD PROCESSED IN ITS PUREST FORM",
  description: `Our entire range of honey is raw and cold processed through a 100-micron filter. Thanks to Western Australia's disease-free bee population, we avoid the need for heat treatment or pasteurization. This ensures that the active ingredients retain their optimal effectiveness, making our honeys the strongest medicinal honeys available on the shelf.`,
  imageUrl: "//honeyforlife.com.au/cdn/shop/files/Karri_Marri_mobile.png?v=1698823188&width=1500",
   imageAlt: "Eucalypt Honeys",
};

export const imageWithText3 = {
  title: "OUR HONEY IS PACKED WITH HEALTH BENEFITS",
  description:   "Our Australian Manuka honey is sustainably managed and sourced from reclaimed farmland, ensuring both environmental responsibility and product purity. Boasting the highest MGO ratings—MGO263, MGO514, MGO829, including the impressive Manuka MGO1500+—our Manuka honey is recognized for its powerful antibacterial properties. This honey is a potent ally in wellness, providing exceptional health benefits and setting a gold standard in the medicinal honey market.",
  imageUrl: "//honeyforlife.com.au/cdn/shop/files/manuka-mgo400-260-500_3.png?v=1710318454&width=1500",
  imageAlt: "Australian Manuka Honey",
};

export const imageWithText4 = {
  id: "template--14429389520970__d0d11084-e28e-4f42-aea0-10738af6afba",
  image: {
    src: "//honeyforlife.com.au/cdn/shop/files/Home_page_images_1080_x_1080.png?v=1701931117&width=1500",
    alt: "",
    width: 1080,
    height: 1080,
  },
  heading: "ANTIOXIDANT-RICH EUCALYPT HONEYS: JARRAH, MARRI, KARRI, BLACKBUTT, AND DESERT MALLEE & MORE...",
  text: `Sourced from our own beekeeping sites within the pristine, biodiverse old-growth forests of Western Australia, our Eucalypt honeys—<a href="/collections/jarrah-honey" title="Jarrah Honey"><strong>Jarrah</strong></a><strong>, </strong><a href="/collections/marri-karri-honey" title="Marri &amp; Karri Honey"><strong>Marri</strong></a><strong>, </strong><a href="/collections/marri-karri-honey" title="Marri &amp; Karri Honey"><strong>Karri</strong></a><strong>, </strong><a href="/products/super-blackbutt-ta50-500g" title="SUPER BLACKBUTT HONEY TA50+"><strong>Blackbutt</strong></a>, and <a href="/products/organic-desert-mallee-honey" title="DESERT MALLEE HONEY"><strong>Desert Mallee</strong></a>—are produced in an untouched, bio-diverse environment. These exceptional honeys are known for their high <a href="/blogs/sweet-honey-news/honey-ta-rating-vs-mgo-rating-explained" title="Honey MGO VS Honey TA Rating Explained"><strong>Total Activity (TA) ratings</strong></a>, offering some of the highest medicinal and antioxidant properties. The unique flora in these forests creates an ecosystem that supports the production of nutrient-rich, <a href="/collections/super-active-honey" title="Super Active Honey TA50+"><strong>potent honeys</strong></a>, making them a natural choice for health-conscious consumers.`,
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
