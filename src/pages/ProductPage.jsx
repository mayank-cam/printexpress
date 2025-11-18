// src/pages/ProductPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import PRODUCTS from "../data/products";

export default function ProductPage(){
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === Number(id));
  if(!product) return <div style={{padding:30}}>Product not found</div>;

  return (
    <div className="container product-detail">
      <div style={{display:"grid", gridTemplateColumns:"1fr 420px", gap:24}}>
        <div>
          <img src={product.image} alt={product.name} style={{width:"100%", borderRadius:12, boxShadow:"var(--md-elev-2)"}} />
          <h1 style={{marginTop:18, fontSize:28, fontWeight:700}}>{product.name}</h1>
          <p style={{color:"var(--md-muted)"}}>{product.desc}</p>
        </div>
        <aside style={{background:"#fff", borderRadius:12, padding:18, boxShadow:"var(--md-elev-1)"}}>
          <div style={{fontSize:20, fontWeight:700}}>₹ {product.price}</div>
          <div style={{marginTop:12}}>
            <a className="btn btn-primary" href={`https://wa.me/91XXXXXXXXXX?text=I%20want%20to%20order%20${encodeURIComponent(product.name)}`} target="_blank" rel="noreferrer">Order on WhatsApp</a>
          </div>

          <div style={{marginTop:18}}>
            <div style={{fontSize:13, color:"var(--md-muted)"}}>Categories</div>
            <div style={{marginTop:8, display:"flex", gap:8, flexWrap:"wrap"}}>
              {product.categories.map(c => <div key={c} style={{background:"#f1f5f9", padding:"6px 10px", borderRadius:999, fontWeight:600}}>{c.replace("-"," ")}</div>)}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
