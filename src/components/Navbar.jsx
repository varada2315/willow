import React, { useState } from 'react';
import { Phone, MessageCircle, ShieldCheck, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenTerms }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phone = '8884888805';
  const whatsappUrl = `https://wa.me/918884888805?text=${encodeURIComponent('Hello Srinivas Sir, I am inquiring about Willow Nest Girls PG near BMSCE.')}`;

  return (
    <>
      {/* Top Announcement Running Strip */}
      <div className="top-announcement">
        <div className="top-announcement-track">
          <div className="top-announcement-content">
            <span>✦ Admissions Open 2026</span>
            <span className="highlight">3-Min Walk to BMSCE Main Gate</span>
            <span className="phone-quick">📞 Call: <a href={`tel:${phone}`}>{phone}</a></span>
            <span className="sep">•</span>
            <span>✦ Biometric Safety & 24/7 CCTV</span>
            <span className="sep">•</span>
          </div>
          <div className="top-announcement-content" aria-hidden="true">
            <span>✦ Admissions Open 2026</span>
            <span className="highlight">3-Min Walk to BMSCE Main Gate</span>
            <span className="phone-quick">📞 Call: <a href={`tel:${phone}`}>{phone}</a></span>
            <span className="sep">•</span>
            <span>✦ Biometric Safety & 24/7 CCTV</span>
            <span className="sep">•</span>
          </div>
        </div>
      </div>

      {/* Navbar Header */}
      <nav className="navbar" id="navbar">
        <div className="container navbar-inner">
          <a href="#" className="logo">
            <div className="logo-icon">
              <ShieldCheck size={22} />
            </div>
            <div className="logo-text">
              WILLOW NEST
              <span className="logo-sub">GIRLS PG • BASAVANAGUDI</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            <li><a href="#rooms">Rooms & Pricing</a></li>
            <li><a href="#amenities">Amenities</a></li>
            <li><a href="#location">Location & Walk-Time</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>

          {/* Desktop Nav Actions */}
          <div className="nav-actions desktop-only">
            <a 
              href={`tel:${phone}`} 
              className="btn btn-secondary" 
              style={{ padding: '8px 14px', fontSize: '0.85rem' }}
              title="Call Owner Srinivas G"
            >
              <Phone size={14} />
              <span>{phone}</span>
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-whatsapp"
              style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer & Backdrop */}
        {mobileMenuOpen && (
          <>
            <div className="mobile-menu-backdrop" onClick={() => setMobileMenuOpen(false)} />
            <div className="mobile-menu-drawer">
              <ul className="mobile-nav-list">
                <li><a href="#rooms" onClick={() => setMobileMenuOpen(false)}>Rooms & Pricing</a></li>
                <li><a href="#amenities" onClick={() => setMobileMenuOpen(false)}>Amenities & Safety</a></li>
                <li><a href="#location" onClick={() => setMobileMenuOpen(false)}>Location & 3-Min Walk</a></li>
                <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</a></li>
              </ul>
              <div style={{ padding: '16px 20px', borderTop: '1px solid var(--border-light)', display: 'flex', gap: '12px' }}>
                <a href={`tel:${phone}`} className="btn btn-secondary" style={{ flex: 1, fontSize: '0.85rem', justifyContent: 'center', minHeight: '44px' }}>
                  <Phone size={16} /> Call {phone}
                </a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ flex: 1, fontSize: '0.85rem', justifyContent: 'center', minHeight: '44px' }}>
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
