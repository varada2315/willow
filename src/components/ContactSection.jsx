import React, { useState } from 'react';
import { Phone, MessageCircle, Send, MapPin } from 'lucide-react';

export default function ContactSection({ onOpenTerms }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    sharingType: 'Double Sharing',
    year: '1st Year Student',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Srinivas Sir,\nMy name is ${formData.name}.\nPhone: ${formData.phone}\nInterested in: ${formData.sharingType}\nDetails: ${formData.year}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/917996151633?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        <div className="contact-grid">
          
          {/* Left Column: Direct Call & Info */}
          <div>
            <div className="sub-tag">✦ GET IN TOUCH</div>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Book Your Visit or Reserve a Room Today
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: '1.6', marginBottom: '28px' }}>
              We provide a safe, secure, and homely environment for female students and working professionals at Ashoknagar, Banashankari (Opp. Post Office). Reach out to Srinivas Sir directly via Call or WhatsApp.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
              
              <div className="contact-info-card">
                <div className="contact-icon-circle bg-dark">
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Direct Phone Call</div>
                  <a href="tel:7996151633" style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--bg-accent-dark)', textDecoration: 'none' }}>7996151633</a>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Available 8:00 AM - 9:00 PM</div>
                </div>
              </div>

              <div className="contact-info-card bg-wa">
                <div className="contact-icon-circle bg-green">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#145A2D', textTransform: 'uppercase', fontWeight: '700' }}>Instant WhatsApp Inquiry</div>
                  <a href="https://wa.me/917996151633?text=Hello%20Srinivas%20Sir,%20I%20want%20details%20for%20Ivory%20Nest%20Girls%20PG" target="_blank" rel="noreferrer" style={{ fontSize: '1.05rem', fontWeight: '700', color: '#145A2D', textDecoration: 'underline' }}>
                    Chat on WhatsApp (7996151633) →
                  </a>
                  <div style={{ fontSize: '0.78rem', color: '#276E40' }}>Instant response for room availability & photos</div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon-circle bg-tan">
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Location</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>1358/A, 6th cross, Opp Ashoknagar post office</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Ashoknagar Banashankari Bangalore - 560050</div>
                </div>
              </div>

            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Need legal details? <button onClick={onOpenTerms} style={{ color: 'var(--bg-accent-dark)', fontWeight: '700', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Read Ivory Nest Terms & Conditions</button>
            </div>

          </div>

          {/* Right Column: Quick Booking Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '6px', color: 'var(--text-main)', fontFamily: 'var(--font-serif)' }}>
              Send Inquiry / Schedule Visit
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Fill in your details below to connect with Srinivas Sir on WhatsApp instantly.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', marginBottom: '4px', color: 'var(--text-main)' }}>Student / Resident Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Ananya Sharma" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', marginBottom: '4px', color: 'var(--text-main)' }}>Contact Phone Number *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. 9876543210" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', marginBottom: '4px', color: 'var(--text-main)' }}>Preferred Room Sharing</label>
                <select 
                  value={formData.sharingType}
                  onChange={(e) => setFormData({ ...formData, sharingType: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.9rem', outline: 'none', backgroundColor: '#FFF' }}
                >
                  <option value="Single Executive Room">Single Executive Room (₹20,000/mo)</option>
                  <option value="Twin Sharing Deluxe">Twin Sharing Deluxe (₹16,000/mo)</option>
                  <option value="Triple Sharing Premium">Triple Sharing Premium (₹14,000/mo)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', marginBottom: '4px', color: 'var(--text-main)' }}>College / Workplace</label>
                <input 
                  type="text" 
                  placeholder="e.g. Student / Working Professional" 
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', marginBottom: '4px', color: 'var(--text-main)' }}>Additional Message or Move-in Date</label>
                <textarea 
                  rows="3"
                  placeholder="e.g. Planning to move in by next week..." 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.9rem', outline: 'none', resize: 'vertical' }}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', padding: '12px', marginTop: '4px' }}>
                <Send size={16} /> Connect on WhatsApp Now
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
