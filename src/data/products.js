// src/data/products.js

const PRODUCTS = [
  { id: 1, name: "Premium Business Card", price: 300, image: null, categories: ["business-cards"], desc: "300gsm premium double sided card." },
  { id: 2, name: "Matte Finish Business Card", price: 250, image: null, categories: ["business-cards","stickers"], desc: "Soft matte laminate with premium finish." },
  { id: 3, name: "Glossy Business Card", price: 200, image: null, categories: ["business-cards"], desc: "High gloss finish for bright colors." },

  { id: 4, name: "Frontlit Flex 280GSM", price: 150, image: null, categories: ["flex-banners"], desc: "High quality flex printing." },
  { id: 5, name: "Backlit Flex", price: 240, image: null, categories: ["flex-banners"], desc: "Backlit print for glowing effect." },
  { id: 6, name: "Star Flex Premium", price: 200, image: null, categories: ["flex-banners","bill-books"], desc: "Premium outdoor flex." },

  { id: 7, name: "NCR Bill Book 2Ply", price: 300, image: null, categories: ["bill-books"], desc: "Duplicate copy NCR bill books." },
  { id: 8, name: "NCR Bill Book 3Ply", price: 350, image: null, categories: ["bill-books"], desc: "Triplicate NCR bill books." },
  { id: 9, name: "Receipt Book", price: 200, image: null, categories: ["bill-books"], desc: "Standard business receipt books." },

  { id:10, name: "Glossy Sticker", price:180, image: null, categories: ["stickers"], desc: "Gloss laminated stickers." },
  { id:11, name: "Matte Sticker", price:200, image: null, categories: ["stickers"], desc: "Non-glare matte stickers." },
  { id:12, name: "PVC Waterproof Sticker", price:250, image: null, categories: ["stickers","flex-banners"], desc: "Outdoor durable PVC stickers." },
];

export const CATEGORIES = [
  { slug: "business-cards", name: "Business Cards" },
  { slug: "flex-banners", name: "Flex Banners" },
  { slug: "bill-books", name: "Bill Books" },
  { slug: "stickers", name: "Stickers" },
];

export default PRODUCTS;
