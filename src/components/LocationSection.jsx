import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export default function LocationSection() {
  const nearbySpots = [
    { spot: 'Opp. Ashoknagar Post Office', distance: '0 Mins Walk (Opposite)', desc: 'Located right opposite the Ashoknagar post office for easy landmark identification.' },
    { spot: 'Banashankari Bus Terminal & Metro', distance: '5 Mins Drive', desc: 'Direct connectivity to green line metro and major transit hubs across Bengaluru.' },
    { spot: 'PES University & BMS College', distance: '5-10 Mins Drive', desc: 'Convenient location for students attending top South Bangalore colleges.' },
    { spot: 'Gandhi Bazaar & Basavanagudi Markets', distance: '8 Mins Drive', desc: 'Access to famous food streets, shopping, libraries, and daily essentials.' },
    { spot: 'Banashankari Police Station', distance: '5 Mins', desc: 'Situated in a safe, peaceful residential neighborhood with 24/7 security.' }
  ];

  const mapsUrl = "https://maps.app.goo.gl/f8mLBR1oRJPNQszZA";

  return (
    <section id="location" className="location-section">
      <div className="container">
        
        <div className="location-card-container" style={{ marginBottom: '32px' }}>
          
          {/* Distance & Connectivity Column */}
          <div>
            <div className="sub-tag">
              <Navigation size={16} /> PRIME BANASHANKARI LOCATION
            </div>

            <h2 className="location-title">
              Safe & Conveniently Located in Ashoknagar, Banashankari
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
              Located right opposite the Ashoknagar Post Office, Ivory Nest Girls PG provides a secure, peaceful, and well-connected environment for female students and working professionals.
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
                    <MapPin size={14} /> {item.distance}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Interactive Address & Direct Contact Box */}
          <div className="location-info-box">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--bg-accent-tan)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '12px' }}>
                <MapPin size={16} /> EXACT ADDRESS & LOCATION
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '14px', fontFamily: 'var(--font-serif)' }}>
                Ivory Nest Girls PG
              </h3>
              <p style={{ color: '#CBD9CE', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px', fontWeight: '500' }}>
                1358/A, 6th Cross,<br />
                Opp. Ashoknagar Post Office,<br />
                Ashoknagar, Banashankari,<br />
                Bangalore - 560050
              </p>
              
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '14px', borderRadius: '12px', marginBottom: '24px' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--bg-accent-tan)', fontWeight: '700' }}>DIRECT CONTACT OWNER</div>
                <div style={{ fontSize: '1.15rem', fontWeight: '700', color: '#FFF' }}>Srinivas G: 7996151633</div>
              </div>
            </div>

            <div>
              <a 
                href={mapsUrl} 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-tan"
                style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <MapPin size={18} /> Open Location Link on Google Maps <ExternalLink size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Clean Maps Direct Link Box (No embedded preview, just clickable link & icon) */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          padding: '28px 32px',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-accent-light)',
              color: 'var(--bg-accent-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <MapPin size={28} />
            </div>
            <div>
              <strong style={{ fontSize: '1.15rem', color: 'var(--text-main)', display: 'block', marginBottom: '4px', fontFamily: 'var(--font-serif)' }}>
                Ivory Nest Girls PG - Google Maps Location
              </strong>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                1358/A, 6th cross, Opp Ashoknagar post office, Ashoknagar Banashankari Bangalore - 560050
              </div>
            </div>
          </div>

          <a 
            href={mapsUrl} 
            target="_blank" 
            rel="noreferrer"
            className="btn btn-primary"
            style={{ padding: '12px 24px', fontSize: '0.95rem', gap: '8px' }}
          >
            <MapPin size={18} /> Click Here to Open Map Location <ExternalLink size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
