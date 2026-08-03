import React from 'react';
import { Footprints, ShieldCheck, Utensils, Wifi } from 'lucide-react';

export default function FeaturesStrip() {
  const features = [
    {
      icon: <Footprints size={24} />,
      title: '3-Min Walk to BMSCE',
      desc: 'Prime Basavanagudi campus proximity'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: '3-Tier Female Safety',
      desc: 'Biometric locks, CCTV & 24/7 warden'
    },
    {
      icon: <Utensils size={24} />,
      title: 'Homely 3-Meal Dining',
      desc: 'Hygienic, fresh North & South food'
    },
    {
      icon: <Wifi size={24} />,
      title: 'High-Speed Wi-Fi & Power',
      desc: 'Uninterrupted study & 100% backup'
    }
  ];

  return (
    <div className="features-strip">
      <div className="container">
        <div className="features-grid">
          {features.map((item, idx) => (
            <div key={idx} className="feature-item">
              <div className="feature-icon-box">
                {item.icon}
              </div>
              <div className="feature-info">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
