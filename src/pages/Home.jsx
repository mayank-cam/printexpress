// src/pages/Home.jsx
import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { products as PRODUCTS, CATEGORIES } from "../data/products";
import { AppContext } from "../App";

function matchesSearch(p, q) {
  if (!q) return true;
  q = q.trim().toLowerCase();
  return (
    p.name.toLowerCase().includes(q) ||
    (p.description && p.description.toLowerCase().includes(q))
  );
}

export default function Home() {
  const { searchTerm, selectedCategory } = useContext(AppContext);

  // Filter products based on search
  const filtered = useMemo(() => {
    return PRODUCTS.filter(p => matchesSearch(p, searchTerm));
  }, [searchTerm]);

  // Group by category
  const grouped = useMemo(() => {
    const map = {};
    const cats = selectedCategory
      ? CATEGORIES.filter(c => c.slug === selectedCategory)
      : CATEGORIES;

    cats.forEach(c => {
      map[c.slug] = filtered.filter(p => p.category === c.slug);
    });

    return map;
  }, [filtered, selectedCategory]);

  return (
    <main>
      <section className="hero">
        <div className="main-container hero-inner">
          <img
            alt="LuckyPrinters Banner"
            src="/banner.png"
            style={{
              width: "100%",
              borderRadius: 20,
              boxShadow: "0 8px 20px rgba(0,0,0,0.12)"
            }}
          />
        </div>
      </section>

      <section className="main-container">
        {/* Render each category section */}
        {Object.keys(grouped).map(slug => {
  const category = CATEGORIES.find(c => c.slug === slug);
  const items = grouped[slug] || [];

  if (!items.length) return null;

  // Show only the selected category
  if (selectedCategory && selectedCategory !== slug) return null;

  return (
    <div id={`cat-${slug}`} key={slug} className="category-block">

              <div className="category-title">
                {category ? category.name : slug}
              </div>

              <div className="prod-grid" role="list">
  {items.map(p => (
    <Link
      key={p.id}
      to={`/product/${p.id}`}
      className="prod-card"
      role="listitem"
      style={{
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        overflow: "hidden",
        textDecoration: "none",
        color: "inherit",
        transition: "transform 0.25s ease, box-shadow 0.25s ease"
        
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
      }}
    >
      {/* Image */}
      <div style={{ position: "relative" }}>
        <img
          src={p.homeImage}
          alt={p.name}
          style={{
            width: "100%",
            height: 180,
            objectFit: "cover",
            display: "block"
          }}
        />

        {/* Category Badge */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            background: "rgba(0,0,0,0.6)",
            color: "#fff",
            padding: "4px 10px",
            borderRadius: 8,
            fontSize: 12,
            fontWeight: 600
          }}
        >
          {p.category.replace("-", " ")}
        </div>
      </div>

      {/* Name */}
      <div
        style={{
          padding: "12px 16px",
          fontSize: 17,
          fontWeight: 700
        }}
      >
        {p.name}
      </div>

      {/* View Button */}
      <div
        style={{
          padding: "0 16px 16px 16px"
        }}
      >
        <div
          style={{
            marginTop: 6,
            display: "inline-block",
            padding: "8px 14px",
            background: "#f1f5f9",
            borderRadius: 12,
            fontSize: 14,
            fontWeight: 600,
            color: "var(--brand)",
            transition: "background 0.2s"
          }}
          className="view-btn"
        >
          View Product →
        </div>
      </div>
    </Link>
  ))}
</div>

            </div>
          );
        })}
      </section>

      {/* WhatsApp floating button */}
      {/* WhatsApp floating button */}
<a
  className="whatsapp-fab"
  href="https://wa.me/917827663009?text=Hi%20I%20want%20to%20order"
  target="_blank"
  rel="noreferrer"
>
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="#25D366"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.52 3.48A11.85 11.85 0 0012.03 0C5.4 0 .03 5.37.03 12c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.62A11.94 11.94 0 0012.03 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.51-8.52zM12.03 21.8c-1.82 0-3.6-.49-5.16-1.41l-.37-.22-3.68.96.98-3.59-.24-.37a9.74 9.74 0 01-1.5-5.18c0-5.41 4.41-9.82 9.82-9.82s9.82 4.41 9.82 9.82-4.41 9.82-9.82 9.82zm5.39-7.39c-.29-.15-1.72-.85-1.98-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.17-.24-.58-.49-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.84 1.2 3.03.15.2 2.08 3.17 5.05 4.45.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.08 1.72-.7 1.97-1.37.24-.66.24-1.23.17-1.37-.07-.15-.27-.22-.56-.37z"/>
  </svg>
</a>

    </main>
  );
}
