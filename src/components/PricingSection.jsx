import React, { useState } from 'react';
import { Check, Sparkles, MessageCircle } from 'lucide-react';

export default function PricingSection() {
  const [sharingFilter, setSharingFilter] = useState('all');

  const pricingPlans = [
    {
      type: 'single',
      name: 'Single Executive Room',
      tagline: 'Private Quiet Space for High Focus',
      rent: '₹18,500',
      period: '/ month',
      popular: false,
      deposit: '2 Months Refundable Deposit',
      features: [
        'Private room with lock & key',
        'Attached private washroom',
        'Ergonomic study desk & chair',
        'Dedicated high-speed Wi-Fi router',
        '3 Fresh home-cooked meals daily',
        'Daily housekeeping & laundry',
        '24/7 Hot water & power backup',
        'Biometric main door entry'
      ]
    },
    {
      type: 'double',
      name: 'Twin Sharing Deluxe',
      tagline: 'Most Popular among BMSCE Students',
      rent: '₹13,500',
      period: '/ month per bed',
      popular: true,
      deposit: '2 Months Refundable Deposit',
      features: [
        'Spacious room shared by 2 students',
        'Attached bathroom with geyser',
        'Individual study desk for each student',
        'Separate full-length wardrobe',
        '3 Fresh home-cooked meals daily',
        'High-speed floor Wi-Fi included',
        'Daily housekeeping & laundry',
        '24/7 Security guard & CCTV'
      ]
    },
    {
      type: 'triple',
      name: 'Triple Sharing Premium',
      tagline: 'Affordable & Super Comfortable',
      rent: '₹10,500',
      period: '/ month per bed',
      popular: false,
      deposit: '2 Months Refundable Deposit',
      features: [
        'Airy ventilated room for 3 students',
        'Attached washroom facility',
        'Individual lockable cupboards',
        '3 Fresh home-cooked meals daily',
        'High-speed Wi-Fi internet access',
        'Daily housekeeping service',
        'Filter drinking water (RO)',
        'Biometric safety access'
      ]
    }
  ];

  const filteredPlans = sharingFilter === 'all' 
    ? pricingPlans 
    : pricingPlans.filter(p => p.type === sharingFilter);

  const handleBook = (planName) => {
    const message = encodeURIComponent(`Hello Srinivas Sir, I want to inquire about booking ${planName} at Willow Nest Girls PG near BMSCE.`);
    window.open(`https://wa.me/918884888805?text=${message}`, '_blank');
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px auto' }}>
          <div className="sub-tag" style={{ justifyContent: 'center' }}>
            ✦ FULL PRICING TRANSPARENCY
          </div>
          <h2 className="section-title" style={{ marginBottom: '14px' }}>
            Simple, All-Inclusive Monthly Rates
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            No hidden charges. Rent includes delicious 3-time home meals, Wi-Fi, electricity, housekeeping, and security.
          </p>

          {/* Filter Pills */}
          <div className="pricing-filter-bar">
            {['all', 'single', 'double', 'triple'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSharingFilter(filter)}
                className={`pricing-filter-btn ${sharingFilter === filter ? 'active' : ''}`}
              >
                {filter === 'all' ? 'All Plans' : filter === 'single' ? 'Single Room' : filter === 'double' ? 'Twin Sharing' : 'Triple Sharing'}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Pricing Grid */}
        <div className="pricing-grid">
          {filteredPlans.map((plan, idx) => (
            <div 
              key={idx}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Sparkles size={13} /> MOST PREFERRED
                </div>
              )}

              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)', marginBottom: '4px' }}>{plan.name}</h3>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '20px' }}>{plan.tagline}</div>

              <div style={{ marginBottom: '20px' }}>
                <span style={{ fontSize: '2.4rem', fontWeight: '700', color: 'var(--bg-accent-dark)', fontFamily: 'var(--font-serif)' }}>{plan.rent}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginLeft: '6px' }}>{plan.period}</span>
                <div style={{ fontSize: '0.78rem', color: 'var(--bg-accent-tan)', fontWeight: '600', marginTop: '4px' }}>
                  {plan.deposit}
                </div>
              </div>

              <hr style={{ borderColor: 'var(--border-light)', margin: '0 0 20px 0' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', flexGrow: 1 }}>
                {plan.features.map((feat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: 'rgba(44, 62, 53, 0.1)', color: 'var(--bg-accent-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={11} />
                    </div>
                    {feat}
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleBook(plan.name)}
                className={plan.popular ? "btn btn-primary" : "btn btn-secondary"}
                style={{ width: '100%', padding: '12px' }}
              >
                <MessageCircle size={16} /> Book / Inquire Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
