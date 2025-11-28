// src/components/Header.jsx
import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import { signInWithGoogle, signOut, auth } from "../firebase.js";

import { onAuthStateChanged } from "firebase/auth";
import { FiSearch, FiLogIn, FiLogOut } from "react-icons/fi";

export default function Header() {
  const { searchTerm, setSearchTerm, setSelectedCategory, setUser } = useContext(AppContext);
  const [localSearch, setLocalSearch] = useState(searchTerm || "");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u ? { displayName: u.displayName, email: u.email, photoURL: u.photoURL } : null);
    });
    return () => unsub();
  }, [setUser]);

  function handleLogin() {
    signInWithGoogle()
      .then((res) => {
        // user handled by onAuthStateChanged
      })
      .catch((err) => {
        console.error("Login error", err);
        alert("Login failed. Check console.");
      });
  }

  function handleLogout() {
    signOut().catch((e) => console.warn(e));
  }

  function onSearchChange(e) {
    setLocalSearch(e.target.value);
    setSearchTerm(e.target.value);
  }

  return (
    <header className="header" role="banner">
      <div className="header-inner">
        <a className="brand" href="/">PrintExpress</a>

        <div style={{display:"flex", alignItems:"center", gap:12}}>
          <div className="search-box" role="search" aria-label="Search products">
            <FiSearch style={{opacity:0.7}} />
            <input
              className="search-input"
              placeholder="Search products, e.g. business card"
              value={localSearch}
              onChange={onSearchChange}
            />
            {/* quick clear */}
            {localSearch && <button className="btn btn-ghost" onClick={()=>{setLocalSearch(""); setSearchTerm("");}}>Clear</button>}
          </div>

          <div style={{display:"flex", gap:8, alignItems:"center"}}>
            <a className="btn btn-ghost" href={"https://wa.me/919608632832?text=Hello%20PrintExpress"} target="_blank" rel="noreferrer">WhatsApp</a>

            <AuthButtons onLogin={handleLogin} onLogout={handleLogout} />
          </div>
        </div>
      </div>
    </header>
  );
}

function AuthButtons({ onLogin, onLogout }) {
  const { user } = useContext(AppContext);

  if (!user) {
    return (
      <button onClick={onLogin} className="btn btn-primary" title="Login with Google">
        <FiLogIn style={{marginRight:8}} /> Login
      </button>
    );
  }

  return (
    <div style={{display:"flex", alignItems:"center", gap:10}}>
      <img src={user.photoURL} alt="avatar" style={{width:36, height:36, borderRadius:999}} />
      <div style={{textAlign:"left"}}>
        <div style={{fontSize:13, fontWeight:700}}>{user.displayName}</div>
        <button className="btn btn-ghost" onClick={onLogout}><FiLogOut /> Logout</button>
      </div>
    </div>
  );
}
