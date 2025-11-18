import React from "react";
import { Link, useParams } from "react-router-dom";

const IMAGES = {
  1: "https://i.imgur.com/aw7Z3l1.png",
  2: "https://i.imgur.com/7jVnb0Y.png",
  3: "https://i.imgur.com/BHPNpKe.png",
  4: "https://i.imgur.com/i2kml1x.png",
  5: "https://i.imgur.com/PbZVFFH.png",
  6: "https://i.imgur.com/XG4cl8W.png",
  7: "https://i.imgur.com/AsPD7SV.png",
  8: "https://i.imgur.com/z8Vjh2l.png",
  9: "https://i.imgur.com/6EQVkjW.png",
  10:"https://i.imgur.com/7UwlV1Z.png",
  11:"https://i.imgur.com/BIy5UNm.png",
  12:"https://i.imgur.com/3O2k0qR.png"
};

const allProducts = {
  "business-cards": [
    { id: 1, name: "Premium Business Card", price: 300 },
    { id: 2, name: "Matte Finish Business Card", price: 250 },
    { id: 3, name: "Glossy Business Card", price: 200 },
  ],
  "flex-banners": [
    { id: 4, name: "Frontlit Flex 280GSM", price: 150 },
    { id: 5, name: "Backlit Flex", price: 240 },
    { id: 6, name: "Star Flex Premium", price: 200 },
  ],
  "bill-books": [
    { id: 7, name: "NCR Bill Book 2Ply", price: 300 },
    { id: 8, name: "NCR Bill Book 3Ply", price: 350 },
    { id: 9, name: "Receipt Book", price: 200 },
  ],
  stickers: [
    { id: 10, name: "Glossy Sticker", price: 180 },
    { id: 11, name: "Matte Sticker", price: 200 },
    { id: 12, name: "PVC Waterproof Sticker", price: 250 },
  ],
};

export default function CategoryPage() {
  const { category } = useParams();
  const products = allProducts[category] || [];

  return (
    <div className="product-section">
      <h1 style={{fontSize:32, fontWeight:700, marginBottom:20}}>
        {category.replace("-", " ")}
      </h1>

      <div className="prod-grid">
        {products.map(p => (
          <Link key={p.id} to={`/product/${p.id}`} className="product-card">
            
            <img
              src={IMAGES[p.id]}
              alt={p.name}
              style={{
                width:"100%",
                height:180,
                borderRadius:14,
                objectFit:"cover",
                marginBottom:12
              }}
            />
            
            <div className="product-name">{p.name}</div>
            <div className="product-price">₹ {p.price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
