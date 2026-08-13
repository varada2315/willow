import React from 'react';
import { ShieldCheck, Phone, Heart } from 'lucide-react';

export default function Footer({ onOpenTerms }) {
  const phone = '7996151633';

  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--bg-accent-tan)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={20} />
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: '700', color: '#FFF', fontFamily: 'var(--font-serif)' }}>IVORY NEST</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#A0B2A3', lineHeight: '1.6', marginBottom: '20px' }}>
              Ivory Nest: Safe & Premium Girls PG located in Ashoknagar, Banashankari (Opp. Post Office). Highly secure, hygienic, and homely accommodation.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href={`tel:${phone}`} className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.82rem', backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFF', border: 'none' }}>
                <Phone size={14} /> Call {phone}
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#rooms">Room Types</a></li>
              <li><a href="#pricing">Pricing Plans</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#location">Location & Map Link</a></li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h4>Information</h4>
            <ul className="footer-links">
              <li><button onClick={onOpenTerms}>Terms & Conditions</button></li>
              <li><button onClick={onOpenTerms}>Safety & Gate Curfew Policy</button></li>
              <li><button onClick={onOpenTerms}>Deposit & Refund Rules</button></li>
              <li><a href="#reviews">Resident Testimonials</a></li>
              <li><a href="#contact">Contact Owner</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4>Contact Srinivas G</h4>
            <p style={{ fontSize: '0.88rem', color: '#A0B2A3', marginBottom: '12px' }}>
              <strong>Ivory Nest Girls PG</strong><br />
              1358/A, 6th cross, Opp Ashoknagar post office,<br />
              Ashoknagar, Banashankari, Bangalore - 560050
            </p>
            <p style={{ fontSize: '0.88rem', color: '#A0B2A3', marginBottom: '8px' }}>
              📞 Phone: <strong>7996151633</strong>
            </p>
            <p style={{ fontSize: '0.88rem', color: '#A0B2A3' }}>
              💬 WhatsApp: <strong>7996151633</strong>
            </p>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Ivory Nest Girls PG Banashankari. All Rights Reserved.
          </div>
          <div>
            Designed with <Heart size={14} color="#D4A373" style={{ display: 'inline', verticalAlign: 'middle' }} /> for Female Residents & Students
          </div>
        </div>

      </div>
    </footer>
  );
}
