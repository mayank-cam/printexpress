import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* INLINE CSS */}
      <style>{`
        .footer-container {
          width: 100%;
          margin-top: 80px;
          background: linear-gradient(to bottom, #0d1829, #0b1220, #070b12);
          color: white;
          padding: 60px 0 40px 0;
          border-top-left-radius: 45px;
          border-top-right-radius: 45px;
          position: relative;
          box-shadow: 0 -20px 50px rgba(0,0,0,0.45);
          overflow: hidden;
        }

        .footer-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to bottom, rgba(255,77,79,0.3), transparent);
          filter: blur(50px);
          opacity: 0.6;
        }

        .footer-inner {
          max-width: 1200px;
          margin: auto;
          padding: 0 30px;
          position: relative;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 50px;
        }

        .footer-title {
          font-size: 38px;
          font-weight: 700;
        }

        .footer-sub {
          margin-top: 6px;
          font-size: 12px;
          letter-spacing: 3px;
          color: #b9c0ce;
        }

        .footer-text {
          margin-top: 18px;
          color: #d4d7de;
          font-size: 15px;
          line-height: 1.6;
        }

        .footer-heading {
          font-size: 22px;
          margin-bottom: 18px;
          font-weight: 600;
        }

        .footer-links li {
          list-style: none;
          margin: 10px 0;
          color: #d4d7de;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .footer-links li:hover {
          color: #ff4d4f;
          transform: translateX(4px);
        }

        .contact-item {
          display: flex;
          gap: 10px;
          align-items: center;
          color: #d4d7de;
          margin-bottom: 12px;
          font-size: 15px;
          transition: 0.3s;
        }

        .contact-item:hover {
          color: white;
        }

        .whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #25D366;
          color: black;
          padding: 10px 20px;
          border-radius: 40px;
          margin-top: 12px;
          font-weight: bold;
          text-decoration: none;
          transition: 0.3s;
        }

        .whatsapp-btn:hover {
          transform: scale(1.08);
        }

        .footer-divider {
          margin-top: 50px;
          height: 1px;
          background: linear-gradient(to right, transparent, #666, transparent);
        }

        .footer-bottom {
          text-align: center;
          margin-top: 20px;
          color: #9aa2b3;
          font-size: 13px;
        }

        /* SOCIAL ICONS */
        .social-icons {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }
        
        .social-icons span {
          font-size: 28px;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .social-icons span:hover {
          color: #ff4d4f;
          transform: scale(1.25);
        }

      `}</style>

      {/* FOOTER HTML */}
      <footer className="footer-container">

        <div className="footer-glow"></div>

        <div className="footer-inner">

          <div className="footer-grid">

            {/* Branding */}
            <div>
              <h2 className="footer-title">PrintExpress</h2>
              <p className="footer-sub">DIGITAL • OFFSET • SCREEN PRINTING</p>

              <p className="footer-text">
                Your trusted partner for all printing solutions in NCR —
                delivering premium quality, unmatched speed, and professional service.
              </p>

              <div className="social-icons">
                <span>📘</span>
                <span>📷</span>
                <span>💼</span>
                <span>▶️</span>
                <span>🐦</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/">Services</Link></li>
                <li><Link to="/">Contact</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="footer-heading">Support</h3>
              <ul className="footer-links">
                <li>FAQ</li>
                <li>Shipping Policy</li>
                <li>Return Policy</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="footer-heading">Contact Us</h3>

              <p className="contact-item">📞 +91 8826615465</p>
              <p className="contact-item">✉️ printexpress391@gmail.com</p>
              <p className="contact-item">📍 C-391, Sector-10, Noida – 201301</p>

              <a
                href="https://wa.me/918826615465"
                target="_blank"
                className="whatsapp-btn"
              >
                🟢 Chat on WhatsApp
              </a>
            </div>

          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} PrintExpress. All rights reserved.
          </div>

        </div>

      </footer>
    </>
  );
}
