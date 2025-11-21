// products.js

// MAIN CATEGORY LIST
export const CATEGORIES = [
  { slug: "visiting-cards", name: "Visiting Cards" },

  { slug: "business-essentials", name: "Business Essentials" },
  { slug: "advertising-marketing", name: "Advertising & Marketing" },
  { slug: "office-stationery", name: "Office Stationery" },
  { slug: "packaging-labeling", name: "Packaging & Labeling" },
  { slug: "corporate-gifts", name: "Corporate & Gift Items" },
  { slug: "home-decorative", name: "Home & Decorative Items" }
];

export const products = [

  // ⭐⭐⭐ VISITING CARDS (7 PRODUCTS) ⭐⭐⭐
  {
    id: 1,
    slug: "standard-visiting-cards",
    category: "visiting-cards",
    name: "Standard Paper Visiting Cards",
    homeImage: "/standard.png",
    pageImage: "/standard.png",
    gallery: ["/standard.png"],
    description:
      "Economical, clean and professional visiting cards printed on premium 300–350 GSM paper.",
    features: [
      "Matte / Gloss finish",
      "Double-sided printing",
      "Logo & QR code supported"
    ]
  },

  {
    id: 2,
    slug: "textured-visiting-cards",
    category: "visiting-cards",
    name: "Textured Paper Visiting Cards",
    homeImage: "/Texture-linen-white-visiting-card.png",
    pageImage: "/Texture-linen-white-visiting-card.png",
    gallery: ["/Texture-linen-white-visiting-card.png"],
    description:
      "Premium textured cards with rich linen, ribbed or hammer patterns for a luxury feel.",
    features: [
      "High-quality textured paper",
      "Elegant matte finish",
      "Embossing / Foil optional"
    ]
  },

  {
    id: 3,
    slug: "laminated-visiting-cards",
    category: "visiting-cards",
    name: "Laminated Visiting Cards (Matte/Glossy)",
    homeImage: "/Glossy-Laminated-Visiting-Cards.webp",
    pageImage: "/Glossy-Laminated-Visiting-Cards.webp",
    gallery: ["/Glossy-Laminated-Visiting-Cards.webp"],
    description:
      "Durable matte or glossy laminated visiting cards with long-lasting protection.",
    features: [
      "Scratch resistant",
      "Matte / Gloss finish",
      "Rounded corners optional"
    ]
  },

  {
    id: 4,
    slug: "plastic-visiting-cards",
    category: "visiting-cards",
    name: "Plastic Visiting Cards",
    homeImage: "/Plastic Visiting Cards PVC Card.png",
    pageImage: "/Plastic Visiting Cards PVC Card.png",
    gallery: [
      "/Plastic Visiting Cards PVC Card.png",
      "/transparent-plastic-business-cards.webp"
    ],
    description:
      "Modern waterproof visiting cards made from premium PVC/PET plastic.",
    features: [
      "Frosted / Clear options",
      "Tear-proof & waterproof",
      "Custom shapes available"
    ]
  },

  {
    id: 5,
    slug: "kraft-visiting-cards",
    category: "visiting-cards",
    name: "Kraft Paper Visiting Cards",
    homeImage: "/kraft_business_cards.webp",
    pageImage: "/kraft_business_cards.webp",
    gallery: ["/kraft_business_cards.webp"],
    description:
      "Eco-friendly kraft visiting cards with a natural brown texture.",
    features: [
      "100% recycled kraft paper",
      "Matte rustic texture",
      "Embossing available"
    ]
  },

  {
    id: 6,
    slug: "transparent-visiting-cards",
    category: "visiting-cards",
    name: "Transparent PVC Visiting Cards",
    homeImage: "/Transparent Card.webp",
    pageImage: "/Transparent Card.webp",
    gallery: ["/Transparent Card.webp"],
    description:
      "Sleek transparent visiting cards with a futuristic clear or frosted finish.",
    features: [
      "Clear / Frosted PVC",
      "Durable & waterproof",
      "QR / Barcode printing"
    ]
  },

  {
    id: 7,
    slug: "spot-uv-visiting-cards",
    category: "visiting-cards",
    name: "Spot UV Visiting Cards",
    homeImage: "/Spot Uv Business Cards.png",
    pageImage: "/Spot UB Card.webp",
    gallery: [
      "/Spot Uv Business Cards.png",
      "/Spot UB Card.webp"
    ],
    description:
      "Luxury matte visiting cards with glossy Spot UV highlights for premium branding.",
    features: [
      "UV gloss highlight",
      "Matte 350–400 GSM base",
      "Perfect for premium brands"
    ]
  },

  // ⭐⭐⭐ BUSINESS ESSENTIALS ⭐⭐⭐

  {
    id: 8,
    slug: "id-cards",
    category: "business-essentials",
    name: "ID Cards",
    homeImage: "/idcard.jpg",
    pageImage: "/idcard1.jpg",
    gallery: ["/idcard2.jpg", "/idcard3.jpg", "/idcard4.jpg"],
    description:
      "Durable, high-quality PVC and laminated ID cards for schools, offices and events.",
    features: [
      "PVC or laminated",
      "Barcode / QR",
      "Custom lanyards available"
    ]
  },

  {
    id: 9,
    slug: "t-shirts",
    category: "business-essentials",
    name: "T-Shirts",
    homeImage: "/tshirt.jpeg",
    pageImage: "/tshirt-page.jpg",
    gallery: ["/t-shirts.png"],
    description:
      "Corporate T-shirts with DTF, digital or embroidery printing options.",
    features: ["Cotton & Dri-fit", "All sizes available", "Custom designs"]
  },

  {
    id: 10,
    slug: "company-stamps",
    category: "business-essentials",
    name: "Company Stamps",
    homeImage: "/stamps.png",
    pageImage: "/stamps2.webp",
    gallery: ["/stamps1.webp"],
    description:
      "Professional pre-inked and self-inking company stamps.",
    features: ["Fast delivery", "Multiple ink colors", "Various sizes"]
  },

  {
    id: 11,
    slug: "company-profile-booklets",
    category: "business-essentials",
    name: "Company Profile Booklets",
    homeImage: "/booklet.avif",
    pageImage: "/booklet1.jpg",
    gallery: ["/booklet2.jpg"],
    description:
      "High-quality corporate profile booklets with stapled or perfect binding.",
    features: ["Matte/Gloss paper", "Custom layout", "Premium quality"]
  },

  {
    id: 12,
    slug: "catalogs",
    category: "business-essentials",
    name: "Catalogs",
    homeImage: "/catalogue.webp",
    pageImage: "/catalogue1.jpg",
    gallery: ["/catalogue1.jpg", "/catalogue2.jpg"],
    description:
      "Product & service catalogs printed in A4 or custom sizes.",
    features: ["Multi-page print", "Custom thickness", "Premium finish"]
  },

  {
    id: 13,
    slug: "lanyards",
    category: "business-essentials",
    name: "Lanyards",
    homeImage: "/lanyard.jpg",
    pageImage: "/lanyard1.jpg",
    gallery: ["/lanyard1.jpg", "/lanyard2.jpg", "/lanyard3.jpg"],
    description:
      "Custom lanyards for companies, schools & events.",
    features: ["Satin/Nylon options", "Any width", "Full-color printing"]
  },

  {
    id: 14,
    slug: "folders",
    category: "business-essentials",
    name: "Folders",
    homeImage: "/folder.jpg",
    pageImage: "/folder.jpg",
    gallery: ["/folder1.jpg", "/folder2.jpg"],
    description:
      "Premium printed folders for documents & presentations.",
    features: ["Single/Double pocket", "Spot UV optional", "Custom sizes"]
  },

  {
    id: 15,
    slug: "caps",
    category: "business-essentials",
    name: "Caps",
    homeImage: "/caps.png",
    pageImage: "/caps2.png",
    gallery: ["/caps1.jpg", "/caps3.jpg", "/caps4.jpeg"],
    description:
      "Custom printed and embroidered caps for branding.",
    features: ["Cotton/Polyester", "Adjustable strap", "Premium stitching"]
  },

  // ⭐⭐⭐ ADVERTISING & MARKETING ⭐⭐⭐
  {
    id: 16,
    slug: "flyers",
    category: "advertising-marketing",
    name: "Flyers",
    homeImage: "/flyer.jpeg",
    pageImage: "/flyer1.jpg",
    gallery: ["/flyer1.jpg", "/flyer2.jpg", "/flyer3.jpg", "/flyer4.jpg"],
    description:
      "Promotional flyers for events, offers and marketing.",
    features: ["A4/A5/A6 sizes", "Gloss/Matte", "Same-day delivery"]
  },

  {
    id: 17,
    slug: "flex-boards",
    category: "advertising-marketing",
    name: "Flex Boards",
    homeImage: "/flexbannerprint.jpg",
    pageImage: "/flexbannerprint.jpg",
    gallery: [
      "/flexbannerprint.jpg",
      "/flexbannerprint1.jpg",
      "/flexbannerprint2.jpg"
    ],
    description:
      "Bright and durable flex boards for shops and events.",
    features: ["UV printed", "Weather-proof", "Any size available"]
  },

  {
    id: 18,
    slug: "standees",
    category: "advertising-marketing",
    name: "Roll-Up Standees",
    homeImage: "/standee.webp",
    pageImage: "/standee1.jpg",
    gallery: ["/standee1.jpg", "/standee2.jpg", "/standee3.jpg"],
    description:
      "Portable roll-up standees for exhibitions and promotions.",
    features: ["Lightweight", "Reusable", "With carry bag"]
  },

  {
    id: 19,
    slug: "danglers",
    category: "advertising-marketing",
    name: "Danglers",
    homeImage: "/dangler1.png",
    pageImage: "/dangler.png",
    gallery: ["/dangler2.jpg", "/dangler3.jpg", "/dangler4.avif"],
    description:
      "Hanging danglers for promotions & branding.",
    features: ["Custom shapes", "Double-sided print", "Gloss/Matte"]
  },

  {
    id: 20,
    slug: "posters-signs",
    category: "advertising-marketing",
    name: "Posters & Signs",
    homeImage: "/poster.png",
    pageImage: "/poster1.png",
    gallery: ["/poster2.jpg", "/poster3.jpg"],
    description:
      "High-quality posters for indoor and outdoor branding.",
    features: ["Photo-quality print", "Durable finish", "Custom sizes"]
  },

  {
    id: 21,
    slug: "brochures",
    category: "advertising-marketing",
    name: "Brochures",
    homeImage: "/broucher.jpeg",
    pageImage: "/broucherprint.jpg",
    gallery: ["/brochure1.jpg", "/brochure2.jpg"],
    description:
      "Elegant brochures in tri-fold or bi-fold designs.",
    features: ["Glossy paper", "Premium fold", "Custom layouts"]
  },

  {
    id: 22,
    slug: "glow-signs",
    category: "advertising-marketing",
    name: "Glow Signs",
    homeImage: "/glowsign1.png",
    pageImage: "/glowsign.png",
    gallery: ["/glowsign2.jpg", "/glowsign3.jpg", "/glowsign4.jpg"],
    description:
      "LED glow signs for premium night visibility.",
    features: ["Energy efficient", "Long life", "Indoor/Outdoor use"]
  },

  // ⭐⭐⭐ OFFICE STATIONERY ⭐⭐⭐
  {
    id: 23,
    slug: "letterheads",
    category: "office-stationery",
    name: "Letterheads",
    homeImage: "/letterhead.webp",
    pageImage: "/letterhead1.jpg",
    gallery: ["/letterhead1.jpg", "/letterhead2.jpg", "/letterhead3.webp"],
    description:
      "Premium printed letterheads for businesses.",
    features: ["100+ paper types", "Full color", "Watermark option"]
  },

  {
    id: 24,
    slug: "notebooks",
    category: "office-stationery",
    name: "Notebooks",
    homeImage: "/notebook.png",
    pageImage: "/notebook1.png",
    gallery: ["/notebook2.jpg", "/notebook1.png", "/notebook3.jpg"],
    description:
      "Customized notebooks with spiral or perfect binding.",
    features: ["Eco-friendly", "Custom cover", "Premium pages"]
  },

  {
    id: 25,
    slug: "envelopes",
    category: "office-stationery",
    name: "Envelopes",
    homeImage: "/envelope.png",
    pageImage: "/envelope1.png",
    gallery: ["/envelope2.jpg", "/envelope3.jpg", "/envelope4.jpg"],
    description:
      "Business envelopes in all sizes and print formats.",
    features: ["Window/Non-window", "Bulk print", "Premium quality"]
  },

  {
    id: 26,
    slug: "certificates",
    category: "office-stationery",
    name: "Certificates",
    homeImage: "/certificate.png",
    pageImage: "/certificate1.png",
    gallery: ["/certificate2.jpg", "/certificate3.jpg", "/certificate.png"],
    description:
      "Premium certificates with gold foil options.",
    features: ["A4 / Custom size", "Thick paper", "Gold foil"]
  },

  {
    id: 27,
    slug: "acrylic-desk-accessories",
    category: "office-stationery",
    name: "Acrylic Desk Accessories",
    homeImage: "/acrylic.png",
    pageImage: "/acrylic1.png",
    gallery: ["/Acrylic Desk Accessories.webp"],
    description:
      "Modern acrylic office desk nameplates & accessories.",
    features: ["Laser cut", "Custom design", "Premium finish"]
  },

  {
    id: 28,
    slug: "bill-book",
    category: "office-stationery",
    name: "Bill Book",
    homeImage: "/billbook.png",
    pageImage: "/billbook2.jpg",
    gallery: ["/billbook1.png"],
    description:
      "Carbonless duplicate/triplicate bill books.",
    features: ["A4/A5 size", "Custom branding", "High-quality paper"]
  },

  // ⭐⭐⭐ PACKAGING & LABELING ⭐⭐⭐
  {
    id: 29,
    slug: "packaging-boxes",
    category: "packaging-labeling",
    name: "Packaging Boxes",
    homeImage: "/printingboximage.jpg",
    pageImage: "/printingboximage1.jpg",
    gallery: [
      "/printingboximage1.jpg",
      "/printingboximage2.jpg",
      "/printingboximage3.jpg"
    ],
    description:
      "Custom product packaging boxes — rigid, corrugated & more.",
    features: ["Eco-friendly", "Offset print", "Premium design"]
  },

  {
    id: 30,
    slug: "labels",
    category: "packaging-labeling",
    name: "Labels",
    homeImage: "/labels1.png",
    pageImage: "/labels2.png",
    gallery: ["/labels3.jpeg"],
    description:
      "Waterproof & durable product labels in all shapes.",
    features: ["Gloss/Matte", "Any shape", "Premium adhesive"]
  },

  {
    id: 31,
    slug: "gift-boxes",
    category: "packaging-labeling",
    name: "Gift Boxes",
    homeImage: "/gift1.png",
    pageImage: "/gift2.png",
    gallery: ["/gift2.png", "/giftbox3.jpg", "/giftbox4.jpg"],
    description:
      "Premium custom gift boxes with ribbon or magnetic closure.",
    features: ["Premium board", "Custom branding", "Luxury finish"]
  },

  {
    id: 32,
    slug: "paper-bags",
    category: "packaging-labeling",
    name: "Paper Bags",
    homeImage: "/bag.jpg",
    pageImage: "/bagprint.jpeg",
    gallery: ["/bag1.jpg", "/bag2.jpg", "/bag3.jpg", "/bag4.jpg"],
    description:
      "Eco-friendly paper bags with logo printing.",
    features: ["Kraft/Art paper", "Durable handles", "Any size"]
  },

  {
    id: 33,
    slug: "plastic-bags",
    category: "packaging-labeling",
    name: "Plastic Bags",
    homeImage: "/plastic.png",
    pageImage: "/plastic1.png",
    gallery: ["/plastic.png", "/plastic.png"],
    description:
      "Printed LD/HD plastic bags for retail branding.",
    features: ["HD/LD material", "Any size", "Strong & durable"]
  },

  // ⭐⭐⭐ CORPORATE & GIFT ITEMS ⭐⭐⭐
  {
    id: 34,
    slug: "custom-printed-mugs",
    category: "corporate-gifts",
    name: "Custom Printed Mugs",
    homeImage: "/mug.png",
    pageImage: "/Banner (1).webp",
    gallery: ["/mug1.jpg", "/mug2.png", "/mug3.jpg"],
    description:
      "Custom ceramic & magic mugs with photo/logo printing.",
    features: ["Dishwasher safe", "Gloss/Matte", "Durable print"]
  },

  {
    id: 35,
    slug: "keychains",
    category: "corporate-gifts",
    name: "Keychains (Metal/Acrylic/Wooden)",
    homeImage: "/keychain.jpg",
    pageImage: "/keychain.jpg",
    gallery: ["/keychain1.jpg", "/keychain2.jpg", "/keychain3.jpg"],
    description:
      "Custom keychains for corporate gifting.",
    features: ["Laser engraving", "Metal/Acrylic/Wood", "Custom shapes"]
  },

  {
    id: 36,
    slug: "pen",
    category: "corporate-gifts",
    name: "Pen",
    homeImage: "/penprint.jpg",
    pageImage: "/penprint1.png",
    gallery: ["/penprint2.jpg", "/penprint3.webp"],
    description:
      "Branded pens in metal, gel and ballpoint variants.",
    features: ["Engraving/Priting", "Smooth writing", "Bulk price"]
  },

  {
    id: 37,
    slug: "custom-water-bottles",
    category: "corporate-gifts",
    name: "Custom Water Bottles",
    homeImage: "/bottle.png",
    pageImage: "/bottle1.png",
    gallery: ["/bottle2.jpg", "/bottle3.jpg"],
    description:
      "Premium stainless steel & plastic bottles with logo print.",
    features: ["Eco-friendly", "Leak-proof", "Custom branding"]
  },

  {
    id: 38,
    slug: "calendars-2026",
    category: "corporate-gifts",
    name: "Calendars 2026",
    homeImage: "/calendars.png",
    pageImage: "/calendars1.png",
    gallery: ["/calendars2.jpg", "/calendars3.jpg", "/calendars4.jpg"],
    description:
      "Custom wall & desk calendars for 2026.",
    features: ["Premium print", "Any size", "Custom design"]
  },

  {
    id: 39,
    slug: "diary",
    category: "corporate-gifts",
    name: "Diary",
    homeImage: "/diary.png",
    pageImage: "/diary1.png",
    gallery: ["/diary2.jpg", "/diary3.avif"],
    description:
      "Premium PU leather and hardcover diaries.",
    features: ["Logo embossing", "Multiple colors", "Premium pages"]
  },

  // ⭐⭐⭐ HOME & DECORATIVE ITEMS ⭐⭐⭐
  {
    id: 40,
    slug: "wall-stickers",
    category: "home-decorative",
    name: "Wall Stickers",
    homeImage: "/wall.png",
    pageImage: "/wall1.png",
    gallery: ["/wall2.jpg", "/wall3.jpg"],
    description:
      "Decorative wall stickers for home & office.",
    features: ["Easy apply", "Reusable", "Custom designs"]
  },

  {
    id: 41,
    slug: "laptop-stickers",
    category: "home-decorative",
    name: "Laptop Stickers",
    homeImage: "/laptop.png",
    pageImage: "/laptop1.png",
    gallery: ["/laptop2.png", "/laptop3.jpg", "/laptop4.jpg", "/laptop5.jpg"],
    description:
      "Custom laptop stickers for branding & style.",
    features: ["Waterproof", "Scratch-resistant", "Matte/Gloss"]
  },

  {
    id: 42,
    slug: "home-decoration-stickers",
    category: "home-decorative",
    name: "Home Decoration Stickers",
    homeImage: "/home.png",
    pageImage: "/home1.png",
    gallery: ["/home2.jpg"],
    description:
      "Vinyl wall & furniture decoration stickers.",
    features: ["Waterproof", "Long-lasting", "HD print"]
  },

  {
    id: 43,
    slug: "3d-wall-art-stickers",
    category: "home-decorative",
    name: "3D Wall Art Stickers",
    homeImage: "/3d.png",
    pageImage: "/3d1.png",
    gallery: ["/3d2.jpg"],
    description:
      "3D depth-effect stickers for modern home decor.",
    features: ["Strong adhesive", "Realistic look", "Easy install"]
  },

  {
    id: 44,
    slug: "acrylic-photo-frames",
    category: "home-decorative",
    name: "Acrylic Photo Frames",
    homeImage: "/acrylic.png",
    pageImage: "/acrylic1.png",
    gallery: [
      "/acrylic2.jpg",
      "/acrylic3.jpg",
      "/acrylic1.jpg"
    ],
    description:
      "Crystal-clear acrylic frames for elegant display.",
    features: ["Premium acrylic", "Long-lasting", "Custom size"]
  },

  {
    id: 45,
    slug: "canvas-photo-frames",
    category: "home-decorative",
    name: "Canvas Photo Frames",
    homeImage: "/canvas.png",
    pageImage: "/canvas1.png",
    gallery: ["/canvas2.jpg", "/canvas3.jpg"],
    description:
      "HD printed canvas frames with wooden backing.",
    features: ["High-quality print", "Durable frame", "Matte/Gloss finish"]
  }

];

export default products;
