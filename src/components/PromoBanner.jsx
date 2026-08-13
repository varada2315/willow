import React from 'react';
import { Sparkles, PhoneCall } from 'lucide-react';

export default function PromoBanner() {
  const whatsappBooking = () => {
    const text = encodeURIComponent('Hello Srinivas Sir, I want to reserve a bed at Ivory Nest Girls PG in Ashoknagar, Banashankari.');
    window.open(`https://wa.me/917996151633?text=${text}`, '_blank');
  };

  return (
    <section className="container">
      <div className="dark-banner">
        
        <div className="dark-banner-content">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--bg-accent-tan)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
            <Sparkles size={16} /> ADMISSIONS OPEN 2026
          </div>

          <h2>
            Ivory Nest Girls PG: Safe, Premium & Convenient
          </h2>

          <p>
            Experience hassle-free female living located right opposite the Ashoknagar post office in Banashankari. Everything you need is included in your single monthly rent.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={whatsappBooking} className="btn btn-tan">
              Reserve Your Bed →
            </button>
            <a href="tel:7996151633" className="btn btn-secondary" style={{ backgroundColor: 'transparent', color: '#FFF', borderColor: 'rgba(255,255,255,0.3)' }}>
              <PhoneCall size={16} /> Call 7996151633
            </a>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <img 
            src="/images/pg-triple-sharing-room.jpg" 
            alt="girls-pg-ashoknagar-banashankari" 
            className="dark-banner-img"
          />
        </div>

      </div>
    </section>
  );
}
