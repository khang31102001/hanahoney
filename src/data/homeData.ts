export interface RichTextSection {
  title: string;
  content: string[];
}

export interface ImageTextBlock {
  title: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
}

// homeData.ts

export const bannerData = {
  backgroundColor: '#f7d47a',
  imageUrl: '/images/hero-banner-home.jpg',
  heading: "HANA’S HONEY – AUSTRALIA’S FINEST PREMIUM ACTIVE HONEY & BEE PRODUCTS",
  button: {
    label: "SHOP NOW",
    link: "/honey",
  },
};

export const richText1 = {
  title: "AUSTRALIA'S MOST PREMIUM AND AWARD WINNING HONEYS",
  content: [
    `<p>
    At <strong>Hana’s Honey</strong>, our passion is to produce some of Australia’s most exceptional <strong>raw honeys</strong>,
    harvested from Western Australia’s pristine <strong>old-growth eucalypt forests</strong>.
  </p>`,
    `<p>
    Our honey is <strong>100 per cent raw</strong>, natural, and sustainably produced — bottled exactly as nature intended.
    From the rare <a href="/honey" title="Jarrah Honey" aria-label="Jarrah Honey"><strong>Jarrah</strong></a> to the bold
    <a href="/honey" title="Redgum Honey" aria-label="Redgum Honey"><strong>Redgum</strong></a> and silky
    <a href="/honey" title="Blackbutt Honey" aria-label="Blackbutt Honey"><strong>Blackbutt</strong></a>,
    every drop reflects the purity of Western Australia’s wilderness.
    Each batch is cold-processed to retain its natural enzymes, antioxidants, and bioactive compounds.
  </p>`,
    `<p>
    Discover the true taste of Australian raw honey — <strong>pure</strong>, <strong>premium</strong>, and <strong>naturally active</strong>.
  </p>`
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

export const textBlock1 = {
  title: "WHY OUR AUSTRALIAN RAW HONEY STANDS ABOVE THE REST",
  content: [
    `
  <p>
  Searching for raw honey that is both pure and distinctive? You’ve found it.
  <a href="/honey"><strong>Hana’s Honey</strong></a> is celebrated for its rich flavour,
  captivating aroma, and smooth texture — recognised among Australia’s finest producers
  of premium active honey.
</p>

<p>
  Our strength comes from the purity of our Western Australian landscapes and the health of our bees.
  Each jar is harvested and bottled with care to preserve the natural characteristics that make
  Australian honey highly valued worldwide.
</p>

<p>
  From the rare <a href="/honey"><strong>Jarrah</strong></a> with its exceptionally high
  <strong>Total Activity (TA)</strong> rating, to the smooth richness of
  <a href="/honey"><strong>Blackbutt</strong></a> and the depth of
  <a href="/honey"><strong>Redgum</strong></a>, every variety is hand-selected and managed
  from hive to jar to ensure authenticity and quality.
</p>

<p>
  Our promise is simple — to deliver honey that is premium, pure, and trusted, capturing the essence
  of Australia’s wild forests in every spoonful.
</p>
  `
  ],

};

export const imageWithText1 = {
  title: "HEALTHY BEES, PRISTINE ENVIRONMENT – WESTERN AUSTRALIA’S NATURAL EDGE",
  content: `
  <p>
  Western Australia is home to one of the healthiest bee populations on the planet — free from major bee
  diseases and pests. This rare natural advantage allows our hives to thrive without chemical treatments.
</p>

<p>
  Our commitment to responsible beekeeping ensures honey of unmatched purity, produced with integrity and
  respect for nature.
</p>
  `,
  imageUrl: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753543116/pexels-solodsha-8105066_eyorez.jpg",
  imageAlt: "Happy, healthy bees",
};

// homeData.ts (phần mở rộng tiếp theo)

export const imageWithText2 = {
  title: "PURE, UNTOUCHED, AND COLD-PROCESSED – JUST AS NATURE INTENDED",
  content: [
    `
    <p>
      Every drop of <a href="/honey"><strong>Hana’s Honey</strong></a> is 100 per cent raw and cold-processed through a fine 100-micron filter — never heated, never pasteurised.
    </p>

    <p>
      This gentle process protects the honey’s natural enzymes, antioxidants, and antibacterial properties, resulting in a product of exceptional purity and quality.
    </p>

    <p>
      Hana’s Honey is naturally active — a genuine taste of nature’s power and simplicity.
    </p>
   `
  ],
  imageUrl: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1753542430/pexels-anete-lusina-5247996_iwtnsj.jpg",
  imageAlt: "Eucalypt Honeys",
};

export const imageWithText3 = {
  title: "NATURAL GOODNESS IN EVERY DROP",
  content: `
  <p>
  We bring you the purest treasures from Western Australia’s ancient forests. Sustainably harvested and carefully
  cold-processed, our honey retains its natural enzymes, antioxidants, and antibacterial activity — exactly as nature intended.
</p>

<h3>Our Premium Collection</h3>

<ul>
  <li>
    <strong>Jarrah TA60</strong> (<em>≈ MGO 1600+</em>) — one of the world’s rarest honeys, known for its exceptionally high
    <strong>TA (Total Activity)</strong> rating and distinctive flavour.
  </li>
  <li>
    <strong>Jarrah TA46</strong> (<em>≈ MGO 1200+</em>) — smooth, rich, and complex, combining exceptional taste with naturally high activity.
  </li>
  <li>
    <strong>Redgum TA49.6</strong> (<em>≈ MGO 1300+</em>) — bold and robust, naturally rich in antioxidants and flavour.
  </li>
  <li>
    <strong>Blackbutt TA40.2</strong> (<em>≈ MGO 1000+</em>) — silky and balanced, prized for its purity and naturally active properties.
  </li>
</ul>

<p>
  Every variety is hand-selected and tested to verify TA levels and authenticity. With
  <a href="/honey"><strong>Hana’s Honey</strong></a>, every spoonful is a premium taste experience — a celebration of Australia’s natural heritage.
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
  heading: "NATURE’S MOST DISTINCTIVE EUCALYPT HONEYS – JARRAH, REDGUM & BLACKBUTT",
  content: `
      <p>
        Sourced from Western Australia’s biodiverse forests, <a href="/honey"><strong>Hana’s Honey</strong></a>
        showcases three of the most distinctive Eucalypt honeys in the world. Each variety originates from unique
        native blossoms, naturally rich in bioactive compounds that contribute to flavour and quality.
      </p>

      <ul>
        <li>
          <strong>Jarrah (Eucalyptus marginata)</strong> — exceptionally rare, flowering only once every two years.
          With TA 60 and TA 46, Jarrah honey is recognised for its naturally high antibacterial activity and deep,
          caramel-like flavour.
        </li>
        <li>
          <strong>Redgum (Eucalyptus camaldulensis)</strong> — bold and robust, naturally high in antioxidants and
          treasured for its full-bodied taste.
        </li>
        <li>
          <strong>Blackbutt (Eucalyptus patens)</strong> — smooth and balanced, offering a refined flavour and
          naturally active properties.
        </li>
      </ul>

      <p>
        Backed by independent laboratory testing for <strong>TA (Total Activity)</strong>, these rare honeys reflect
        the purity and natural strength of Western Australia’s environment.
      </p>
  `,
};
export const textBlock2 = {
  title: "OUR COMMITMENT TO QUALITY & AUTHENTICITY",
  content: `
  <p>
  At <a href="/honey"><strong>Hana’s Honey</strong></a>, we are devoted to producing premium raw honeys from
  Western Australia’s untouched forests. Our range — including <strong>Jarrah TA60</strong>,
  <strong>Jarrah TA46</strong>, <strong>Redgum TA49.6</strong>, and <strong>Blackbutt TA40.2</strong> — is
  sustainably harvested and cold-processed to preserve natural qualities.
</p>

<p>
  To guarantee authenticity and quality, every batch is tested in Australian laboratories meeting international
  standards. This ensures purity, safety, and consistency across our entire range.
</p>

<p>
  Each jar of Hana’s Honey is more than honey — it is a symbol of craftsmanship, provenance, and trust, ideal
  for discerning customers, thoughtful gifting, and global export.
</p>
  `
};

// export const textSaleHeroData = {
//   id: "template--14429389520970__1650513370adc7ef06",
//   heading: "JOIN THE HIVE",
//   subheading: `Honey Lovers, Unite! Subscribe for exclusive access to our premium honey varieties. Pure, golden sweetness awaits – join the buzz today <br /><strong>AND GET $10 OFF - LOOK IN YOUR INBOX NOW!</strong>`,
//   form: {
//     action: "/contact#contact_form",
//     emailPlaceholder: "Email",
//     hiddenFields: {
//       form_type: "customer",
//       utf8: "✓",
//       tags: "newsletter",
//     },
//     submitLabel: "Subscribe"
//   }
// };
