// src/components/Footer.jsx
import React from "react";

export default function Footer(){
  return (
    <footer style={{padding:28, marginTop:40, borderTop:"1px solid #eef1f6", background:"transparent"}}>
      <div style={{maxWidth:1100, margin:"0 auto", textAlign:"center", color:"var(--md-muted)"}}>
        © {new Date().getFullYear()} PrintExpress. All rights reserved.
      </div>
    </footer>
  );
}
