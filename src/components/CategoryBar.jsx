// src/components/CategoryBar.jsx
import React, { useContext } from "react";
import { CATEGORIES } from "../data/products";
import { AppContext } from "../App";

export default function CategoryBar(){
  const { selectedCategory, setSelectedCategory } = useContext(AppContext);

  return (
    <div className="cat-bar" role="navigation" aria-label="Categories">
      <div className="cat-scroll">
        <button
          className="cat-pill"
          onClick={() => setSelectedCategory(null)}
          style={{ background: selectedCategory === null ? "#eef2ff" : undefined }}
        >
          All
        </button>

        {CATEGORIES.map(c => (
          <button
            key={c.slug}
            className="cat-pill"
            onClick={() => setSelectedCategory(c.slug)}
            style={{ background: selectedCategory === c.slug ? "#eef2ff" : undefined }}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}
