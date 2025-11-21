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
            alt="PrintExpress Banner"
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
      <a
        className="whatsapp-fab"
        href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20order"
        target="_blank"
        rel="noreferrer"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M20.5 3.5L3.5 20.5"
            stroke="#fff"
            strokeWidth="0"
          />
        </svg>
        <span style={{ fontSize: 20 }}>🟢</span>
      </a>
    </main>
  );
}
