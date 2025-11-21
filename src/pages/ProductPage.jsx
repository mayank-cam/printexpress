// src/pages/ProductPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { products as PRODUCTS } from "../data/products";

export default function ProductPage() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) return <div style={{ padding: 30 }}>Product not found</div>;

  // Similar products (same category)
  const similar = PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4); // show max 4

  return (
    <div className="main-container product-detail" style={{ paddingBottom: 60 }}>
      
      {/* MAIN PRODUCT SECTION */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 24 }}>
        
        {/* LEFT SIDE */}
        <div>
          <img
            src={product.pageImage}
            alt={product.name}
            style={{
              width: "100%",
              borderRadius: 12,
              boxShadow: "0 4px 20px rgba(0,0,0,0.12)"
            }}
          />

          <h1 style={{ marginTop: 18, fontSize: 30, fontWeight: 700 }}>
            {product.name}
          </h1>

          <p style={{ color: "var(--md-muted)", fontSize: 16, lineHeight: 1.6 }}>
            {product.description}
          </p>

          {/* GALLERY SECTION */}
          {product.gallery && product.gallery.length > 0 && (
            <div style={{ marginTop: 20 }}>
              <h3 style={{ fontSize: 20, marginBottom: 10 }}>Gallery</h3>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {product.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    style={{
                      width: 140,
                      borderRadius: 10,
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* VARIANTS SECTION */}
          {product.variants && product.variants.length > 0 && (
            <div style={{ marginTop: 30 }}>
              <h3 style={{ fontSize: 22, fontWeight: 700 }}>Variants</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 10 }}>
                {product.variants.map((v, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#fff",
                      padding: 16,
                      borderRadius: 12,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
                    }}
                  >
                    <h4 style={{ fontSize: 18, fontWeight: 700 }}>{v.title}</h4>

                    <div style={{ display: "flex", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
                      {v.images.map((img, j) => (
                        <img
                          key={j}
                          src={img}
                          style={{
                            width: 120,
                            borderRadius: 8,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                          }}
                        />
                      ))}
                    </div>

                    <p style={{ marginTop: 10, color: "var(--md-muted)" }}>{v.description}</p>

                    {v.size && (
                      <p style={{ marginTop: 6, fontWeight: 600 }}>Size: {v.size}</p>
                    )}

                    {v.features && (
                      <ul style={{ marginTop: 6, paddingLeft: 18 }}>
                        {v.features.map((f, k) => (
                          <li key={k} style={{ fontSize: 14 }}>{f}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDE ORDER BOX */}
        <aside
          style={{
            background: "#fff",
            borderRadius: 12,
            padding: 18,
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 700 }}>Order Now</h2>

          <a
            className="btn btn-primary"
            href={`https://wa.me/91XXXXXXXXXX?text=I%20want%20to%20order%20${encodeURIComponent(
              product.name
            )}`}
            target="_blank"
            rel="noreferrer"
            style={{
              marginTop: 16,
              display: "inline-block",
              padding: "10px 20px",
              background: "#25D366",
              color: "#fff",
              borderRadius: 8,
              fontWeight: 600
            }}
          >
            WhatsApp Order
          </a>

          <div style={{ marginTop: 20 }}>
            <div style={{ fontSize: 13, color: "var(--md-muted)" }}>Category</div>
            <div
              style={{
                marginTop: 8,
                background: "#f1f5f9",
                padding: "6px 12px",
                borderRadius: 999,
                fontWeight: 600,
                display: "inline-block"
              }}
            >
              {product.category.replace("-", " ")}
            </div>
          </div>
        </aside>
      </div>

      {/* SIMILAR PRODUCTS SECTION */}
      {similar.length > 0 && (
        <div style={{ marginTop: 50 }}>
          <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
            Similar Products
          </h3>

          <div className="prod-grid" style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
            {similar.map(sp => (
              <Link
                key={sp.id}
                to={`/product/${sp.id}`}
                className="prod-card"
                style={{
                  background: "#fff",
                  padding: 12,
                  borderRadius: 12,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                  textDecoration: "none",
                  color: "inherit"
                }}
              >
                <img
                  src={sp.homeImage}
                  alt={sp.name}
                  style={{
                    width: "100%",
                    borderRadius: 10,
                    objectFit: "cover",
                    height: 150
                  }}
                />
                <div style={{ marginTop: 10, fontWeight: 600 }}>{sp.name}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
