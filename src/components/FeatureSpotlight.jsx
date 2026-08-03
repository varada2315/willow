import React from 'react';
import { CheckCircle2, Award, ArrowRight } from 'lucide-react';

export default function FeatureSpotlight() {
  const highlights = [
    '3-Minute safe walking distance to BMSCE main gate',
    '24/7 Security warden with biometric access control',
    '3 Home-style freshly prepared meals daily (South & North Indian)',
    'High-speed Wi-Fi routers on every floor for exams & research',
    'Daily professional housekeeping & hygienic room maintenance',
    'Power backup for light, fan & study desk during power cuts'
  ];

  return (
    <section className="container" style={{ margin: '40px auto' }}>
      <div className="split-card">
        
        {/* Content Side */}
        <div className="split-card-content">
          <div className="sub-tag">
            <Award size={16} /> CRAFTED FOR FEMALE STUDENTS
          </div>
          <h2 className="split-card-title">
            Quality Living That Feels Just Like Home
          </h2>
          <p className="split-card-desc">
            We understand that moving to college is a big step. As a premier <strong>safe girls PG near BMSCE</strong> and <strong>best female student accommodation in Basavanagudi</strong>, Willow Nest provides a warm, protective, and academically focused environment so students can thrive while parents enjoy complete peace of mind.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', marginBottom: '32px' }}>
            {highlights.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', fontWeight: '500', color: 'var(--text-main)' }}>
                <CheckCircle2 size={18} color="var(--bg-accent-dark)" style={{ flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>

          <div>
            <a 
              href="https://wa.me/918884888805?text=Hello%20Srinivas%20Sir,%20I%20would%20like%20to%20schedule%20a%20visit%20to%20Willow%20Nest%20Girls%20PG." 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', maxWidth: '340px' }}
            >
              Schedule a Personal Visit <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Visual Side */}
        <div className="split-card-visual">
          <img 
            src="/images/girls-pg-hero-room.png" 
            alt="safe-girls-pg-near-bmsce" 
            className="split-card-img"
          />
          
          {/* Overlay Box */}
          <div className="spotlight-overlay-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: '700', color: 'var(--bg-accent-tan)', textTransform: 'uppercase' }}>
                  LOCATION ADVANTAGE
                </div>
                <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)' }}>
                  Basavanagudi, Near BMSCE Gate
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Female Student Accommodation Specialist
                </div>
              </div>
              <div style={{
                backgroundColor: 'var(--bg-accent-dark)',
                color: '#FFF',
                padding: '8px 14px',
                borderRadius: '999px',
                fontSize: '0.82rem',
                fontWeight: '700'
              }}>
                8884888805
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
