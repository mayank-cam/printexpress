// ✅ IMPORTS MUST ALWAYS BE AT THE VERY TOP
import React, { useContext } from "react";
import { AppContext } from "../App";
import { CATEGORIES } from "../data/products";

export default function CategoryBar() {
  const { selectedCategory, setSelectedCategory } = useContext(AppContext);

  const handleClick = (slug) => {
    setSelectedCategory(slug);

    // Scroll to category section
    if (slug) {
      const target = document.getElementById(`cat-${slug}`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Scroll to top for 'All'
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="cat-bar">
      <div className="cat-scroll">
        
        {/* ALL BUTTON */}
        <button
          onClick={() => handleClick(null)}
          className={`cat-pill ${selectedCategory === null ? "active-pill" : ""}`}
        >
          All
        </button>

        {/* CATEGORY BUTTONS */}
        {CATEGORIES.map((c) => (
          <button
            key={c.slug}
            onClick={() => handleClick(c.slug)}
            className={`cat-pill ${
              selectedCategory === c.slug ? "active-pill" : ""
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}
