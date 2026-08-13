import React from 'react';
import { Utensils, ShieldCheck, Wifi, RefreshCw } from 'lucide-react';

export default function AmenitiesSection() {
  const categories = [
    {
      title: 'Hygienic Homely Dining',
      icon: <Utensils size={22} />,
      desc: 'Freshly prepared 3 meals a day plus evening tea & snacks. Prepared in an ultra-clean, stainless-steel kitchen with nutrient-rich menus tailored for college students.',
      bullets: ['South & North Indian Dishes', 'Special Sunday Feasts', 'Filtered RO Drinking Water']
    },
    {
      title: 'Uncompromised Female Safety',
      icon: <ShieldCheck size={22} />,
      desc: 'Top priority safety for young women studying away from home. Complete peace of mind for parents in Basavanagudi.',
      bullets: ['Biometric Fingerprint Access', '24/7 CCTV in Common Corridors', 'Resident Lady Warden on-site']
    },
    {
      title: 'Uninterrupted Academic Tech',
      icon: <Wifi size={22} />,
      desc: 'Designed for engineering, medical & degree students who need flawless connectivity for assignments and online exams.',
      bullets: ['High-Speed Fiber Wi-Fi Routers', '24/7 Power Backup Generator']
    },
    {
      title: 'Comfort & Daily Convenience',
      icon: <RefreshCw size={22} />,
      desc: 'No stress about daily chores. Focus purely on your studies while our staff handles maintenance and cleanliness.',
      bullets: ['Daily Room & Bathroom Cleaning']
    }
  ];

  return (
    <section id="amenities" className="amenities-section">
      <div className="container">
        
        <div className="section-header">
          <div>
            <div className="sub-tag">✦ WORLD-CLASS FACILITIES</div>
            <h2 className="section-title">Everything You Need for Effortless Living</h2>
          </div>
          <p style={{ maxWidth: '400px', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            We take care of food, security, cleaning, and internet so you can focus 100% on your education at BMSCE.
          </p>
        </div>

        <div className="amenities-grid">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="amenity-card"
            >
              <div className="amenity-icon-box">
                {cat.icon}
              </div>

              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '10px' }}>
                {cat.title}
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px', lineHeight: '1.6' }}>
                {cat.desc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {cat.bullets.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: '600', color: 'var(--bg-accent-dark)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--bg-accent-tan)', flexShrink: 0 }}></span>
                    {b}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
