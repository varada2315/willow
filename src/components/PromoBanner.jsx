import React from 'react';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

export default function PromoBanner() {
  const whatsappBooking = () => {
    const text = encodeURIComponent('Hello Srinivas Sir, I want to reserve a bed at Willow Nest Girls PG near BMSCE for the upcoming batch.');
    window.open(`https://wa.me/918884888805?text=${text}`, '_blank');
  };

  return (
    <section className="container">
      <div className="dark-banner">
        
        <div className="dark-banner-content">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--bg-accent-tan)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
            <Sparkles size={16} /> ADMISSIONS OPEN 2026
          </div>

          <h2>
            BMSCE Student Housing: Safe, Premium & Convenient
          </h2>

          <p>
            Experience hassle-free student living just 3 minutes away from BMS Engineering College main entrance. Everything you need is included in your single monthly rent.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={whatsappBooking} className="btn btn-tan">
              Reserve Your Bed →
            </button>
            <a href="tel:8884888805" className="btn btn-secondary" style={{ backgroundColor: 'transparent', color: '#FFF', borderColor: 'rgba(255,255,255,0.3)' }}>
              <PhoneCall size={16} /> Call 8884888805
            </a>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <img 
            src="/images/girls-pg-double-room-basavanagudi.jpg" 
            alt="girls-pg-double-room-basavanagudi" 
            className="dark-banner-img"
          />
        </div>

      </div>
    </section>
  );
}
