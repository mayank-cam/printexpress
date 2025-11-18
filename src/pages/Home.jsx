// src/pages/Home.jsx
import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import PRODUCTS, { CATEGORIES } from "../data/products";
import { AppContext } from "../App";

function matchesSearch(p, q) {
  if (!q) return true;
  q = q.trim().toLowerCase();
  return (
    p.name.toLowerCase().includes(q) ||
    (p.desc && p.desc.toLowerCase().includes(q))
  );
}

export default function Home() {
  const { searchTerm, selectedCategory } = useContext(AppContext);

  // Filtered products set (used for category grouping)
  const filtered = useMemo(() => {
    return PRODUCTS.filter(p => matchesSearch(p, searchTerm));
  }, [searchTerm]);

  // For each category, collect products that belong to that category and match search
  const grouped = useMemo(() => {
    const map = {};
    const cats = selectedCategory ? CATEGORIES.filter(c => c.slug === selectedCategory) : CATEGORIES;
    cats.forEach(c => {
      map[c.slug] = filtered.filter(p => p.categories.includes(c.slug));
    });
    return map;
  }, [filtered, selectedCategory]);

  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <h1>PrintExpress</h1>
            <p>High-quality print services — cards, banners, books and more.</p>
          </div>
          <div style={{minWidth:240, textAlign:"right"}}>
            <img alt="PE" src="https://i.imgur.com/aw7Z3l1.png" style={{width:120, borderRadius:12, boxShadow:"var(--md-elev-2)"}} />
          </div>
        </div>
      </section>

      <section className="container">
        {/* For each category show title + products */}
        {Object.keys(grouped).map(slug => {
          const category = CATEGORIES.find(c => c.slug === slug);
          const items = grouped[slug] || [];
          if (!items.length) return null;
          return (
            <div key={slug} className="category-block">
              <div className="category-title">{category ? category.name : slug}</div>

              <div className="prod-grid" role="list">
                {items.map(p => (
                  <Link key={p.id} to={`/product/${p.id}`} className="prod-card" role="listitem">
                    <img className="prod-img" src={p.image} alt={p.name} />
                    <div className="prod-title">{p.name}</div>
                    <div className="prod-price">₹ {p.price}</div>
                    <div style={{marginTop:8, color:"var(--md-muted)", fontSize:13}}>{p.desc}</div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* whatsapp quick floating */}
      <a className="whatsapp-fab" href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20order" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M20.5 3.5L3.5 20.5" stroke="#fff" strokeWidth="0"/></svg>
        <span style={{fontSize:20}}>🟢</span>
      </a>
    </main>
  );
}
