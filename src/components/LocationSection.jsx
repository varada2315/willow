import React from 'react';
import { MapPin, Navigation, Footprints } from 'lucide-react';

export default function LocationSection() {
  const nearbySpots = [
    { spot: 'BMSCE Main Gate', distance: '3 Mins Walk (250m)', desc: 'Reach your lectures in 3 mins flat without auto or traffic hassle.' },
    { spot: 'BMS College Hospital', distance: '2 Mins Walk', desc: 'Instant access to medical assistance & healthcare.' },
    { spot: 'Vidyarthi Bhavan & Gandhi Bazaar', distance: '5 Mins Walk', desc: 'Historic Basavanagudi food street, books & shopping.' },
    { spot: 'National College Metro Station', distance: '8 Mins Walk', desc: 'Easy green line metro connectivity to Majestic & rest of Bangalore.' },
    { spot: 'Basavanagudi Police Station', distance: '4 Mins Walk', desc: 'Located in one of South Bangalore’s safest residential neighborhoods.' }
  ];

  const googleMapsIframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.301389885827!2d77.56475727507615!3d12.952541387361108!2m2!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159271612d5f%3A0x9cc182885b512c43!2sB.M.S.%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <section id="location" className="location-section">
      <div className="container">
        
        <div className="location-card-container" style={{ marginBottom: '32px' }}>
          
          {/* Distance Breakdown Column */}
          <div>
            <div className="sub-tag">
              <Navigation size={16} /> THE WALK-TIME ADVANTAGE
            </div>

            <h2 className="location-title">
              Just a 3-minute walk from the BMSCE main gate!
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
              Distance matters above all else for students. Save 2+ hours daily on commuting, sleep comfortably, and attend early morning 8 AM classes effortlessly.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {nearbySpots.map((item, idx) => (
                <div 
                  key={idx}
                  className="location-spot-card"
                >
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--text-main)' }}>{item.spot}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                  </div>
                  <div className="distance-pill">
                    <Footprints size={14} /> {item.distance}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Interactive Address & Info Box */}
          <div className="location-info-box">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--bg-accent-tan)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '12px' }}>
                <MapPin size={16} /> ADDRESS & DIRECTION
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '14px', fontFamily: 'var(--font-serif)' }}>
                Willow Nest Girls PG
              </h3>
              <p style={{ color: '#CBD9CE', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                Near BMS Engineering College Main Gate,<br />
                Bull Temple Road, Basavanagudi,<br />
                Bengaluru, Karnataka 560004
              </p>
              
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '14px', borderRadius: '12px', marginBottom: '24px' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--bg-accent-tan)', fontWeight: '700' }}>DIRECT CONTACT OWNER</div>
                <div style={{ fontSize: '1.15rem', fontWeight: '700', color: '#FFF' }}>Srinivas G: 8884888805</div>
              </div>
            </div>

            <div>
              <a 
                href="https://maps.google.com/?q=BMS+College+of+Engineering+Basavanagudi+Bangalore" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-tan"
                style={{ width: '100%' }}
              >
                Get Directions on Google Maps ↗
              </a>
            </div>
          </div>

        </div>

        {/* Embedded Google Maps Container */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-md)',
          position: 'relative'
        }}>
          <div style={{ padding: '20px 24px', backgroundColor: 'var(--bg-main)', borderBottom: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={20} color="var(--bg-accent-dark)" />
              <div>
                <strong style={{ fontSize: '1rem', color: 'var(--text-main)' }}>Live Google Map View</strong>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Willow Nest PG - Bull Temple Road, Basavanagudi</div>
              </div>
            </div>
            <a 
              href="https://maps.google.com/?q=BMS+College+of+Engineering+Basavanagudi+Bangalore" 
              target="_blank" 
              rel="noreferrer"
              style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--bg-accent-dark)', textDecoration: 'none' }}
            >
              Open Full Screen Map ↗
            </a>
          </div>

          <div style={{ width: '100%', height: '360px', position: 'relative' }}>
            <iframe 
              title="Willow Nest Girls PG Google Map Location"
              src={googleMapsIframeSrc}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
