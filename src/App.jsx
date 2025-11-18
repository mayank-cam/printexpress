// src/App.jsx
import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CategoryBar from "./components/CategoryBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

export const AppContext = createContext();

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [user, setUser] = useState(null); // firebase user

  return (
    <Router>
      <AppContext.Provider value={{ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, user, setUser }}>
        <Header />
        <CategoryBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          {/* You can add category-specific routes if you want */}
        </Routes>
        <Footer />
      </AppContext.Provider>
    </Router>
  );
}
