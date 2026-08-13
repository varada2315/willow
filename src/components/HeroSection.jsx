import React from 'react';
import { ArrowRight, MapPin, Shield, Star, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  const whatsappUrl = `https://wa.me/917996151633?text=${encodeURIComponent('Hello Srinivas Sir, I want to book a visit for Ivory Nest Girls PG in Ashoknagar, Banashankari.')}`;

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          
          {/* Left Column Content */}
          <div className="hero-text-col">
            <div className="sub-tag">
              <Shield size={16} />
              SAFE, SECURE & HOMELY ACCOMMODATION
            </div>

            <h1 className="hero-heading">
              Ivory Nest: Premium Girls PG near BMS Engineering College, Basavanagudi
            </h1>

            {/* Location Advantage Badge */}
            <div className="walk-time-hero-badge">
              <span className="pulse-dot"></span>
              <MapPin size={20} />
              <span>Opposite Ashoknagar Post Office, Banashankari, Bangalore!</span>
            </div>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#rooms" className="btn btn-primary hero-btn">
                Explore Rooms & Pricing <ArrowRight size={18} />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-secondary hero-btn">
                Book a Visit <MapPin size={18} />
              </a>
            </div>

            {/* Trust Elements (Desktop view) */}
            <div className="hero-trust-bar desktop-only">
              <div style={{ display: 'flex' }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="avatar-circle"
                    style={{
                      backgroundColor: i % 2 === 0 ? 'var(--bg-accent-tan)' : 'var(--bg-accent-dark)',
                      marginLeft: i > 1 ? '-10px' : '0'
                    }}
                  >
                    {['S', 'P', 'R', 'A', 'M'][i - 1]}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#F59E0B', fontWeight: '700', fontSize: '0.95rem' }}>
                  <Star size={16} fill="#F59E0B" />
                  <Star size={16} fill="#F59E0B" />
                  <Star size={16} fill="#F59E0B" />
                  <Star size={16} fill="#F59E0B" />
                  <Star size={16} fill="#F59E0B" />
                  <span style={{ color: 'var(--text-main)', marginLeft: '6px' }}>4.9 / 5.0</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Trusted by 200+ Female Students & Parents
                </div>
              </div>
            </div>

          </div>

          {/* Right Column Layout */}
          <div className="hero-visual-col">
            
            {/* Top Arch Element (Desktop Only) */}
            <div className="hero-arch-decor">
              <img 
                src="/images/pg-triple-sharing-room.jpg" 
                alt="safe-girls-pg-room-banashankari" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Main Rounded Image */}
            <div className="hero-main-img-card">
              <img 
                src="/images/pg-double-sharing-room.jpg" 
                alt="best-female-accommodation-ashoknagar-banashankari" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="hero-img-caption">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: '600' }}>
                  <CheckCircle size={16} color="#A7F3D0" /> 100% Safe Female Student Accommodation
                </div>
              </div>
            </div>

            {/* Trust Elements (Mobile view - placed below image) */}
            <div className="hero-trust-bar mobile-only">
              <div style={{ display: 'flex' }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="avatar-circle"
                    style={{
                      backgroundColor: i % 2 === 0 ? 'var(--bg-accent-tan)' : 'var(--bg-accent-dark)',
                      marginLeft: i > 1 ? '-10px' : '0'
                    }}
                  >
                    {['S', 'P', 'R', 'A', 'M'][i - 1]}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', color: '#F59E0B', fontWeight: '700', fontSize: '0.95rem' }}>
                  <Star size={16} fill="#F59E0B" />
                  <Star size={16} fill="#F59E0B" />
                  <Star size={16} fill="#F59E0B" />
                  <Star size={16} fill="#F59E0B" />
                  <Star size={16} fill="#F59E0B" />
                  <span style={{ color: 'var(--text-main)', marginLeft: '6px' }}>4.9 / 5.0</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Trusted by 200+ Female Students & Parents
                </div>
              </div>
            </div>

            {/* Floating Badge Card */}
            <div className="hero-floating-badge">
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                overflow: 'hidden',
                flexShrink: 0
              }}>
                <img 
                  src="/images/pg-single-twin-room.jpg" 
                  alt="girls-pg-ashoknagar-banashankari" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--bg-accent-tan)', fontWeight: '700' }}>
                  PRIME LANDMARK
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-main)' }}>
                  Opp. Ashoknagar Post Office
                </div>
                <a href="#location" style={{ fontSize: '0.78rem', color: 'var(--bg-accent-dark)', fontWeight: '600', textDecoration: 'none' }}>
                  View Map Location →
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
