import React from 'react';
import { ArrowRight, MapPin, Shield, Star, CheckCircle, Clock } from 'lucide-react';

export default function HeroSection() {
  const whatsappUrl = `https://wa.me/918884888805?text=${encodeURIComponent('Hello Srinivas Sir, I want to book a visit for Willow Nest Girls PG near BMSCE.')}`;

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          
          {/* Left Column Content */}
          <div className="hero-text-col">
            <div className="sub-tag">
              <Shield size={16} />
              SAFE, SECURE & HOMELY STUDENT HOUSING
            </div>

            <h1 className="hero-heading">
              Willow Nest: Premium Girls PG Near BMS Engineering College, Basavanagudi
            </h1>

            {/* The Walk-Time Factor Highlight */}
            <div className="walk-time-hero-badge">
              <span className="pulse-dot"></span>
              <Clock size={20} />
              <span>Just a 3-minute walk from the BMSCE main gate!</span>
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
                  Trusted by 200+ BMSCE Female Students & Parents
                </div>
              </div>
            </div>

          </div>

          {/* Right Column Layout */}
          <div className="hero-visual-col">
            
            {/* Top Arch Element (Desktop Only) */}
            <div className="hero-arch-decor">
              <img 
                src="/images/girls-pg-dining-food-area.jpg" 
                alt="safe-girls-pg-near-bmsce" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Main Rounded Image */}
            <div className="hero-main-img-card">
              <img 
                src="/images/girls-pg-hero-room.png" 
                alt="best-female-student-accommodation-basavanagudi" 
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
                  Trusted by 200+ BMSCE Female Students & Parents
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
                  src="/images/girls-pg-double-room-basavanagudi.jpg" 
                  alt="girls-hostel-near-bms-engineering-college" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--bg-accent-tan)', fontWeight: '700' }}>
                  WALK-TIME FACTOR
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-main)' }}>
                  3 Mins to BMSCE Gate
                </div>
                <a href="#location" style={{ fontSize: '0.78rem', color: 'var(--bg-accent-dark)', fontWeight: '600', textDecoration: 'none' }}>
                  Explore Proximity →
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
