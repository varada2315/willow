import React from 'react';
import { Star } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      name: 'Ananya Sharma',
      role: 'Software Engineer & Resident',
      rating: 5,
      comment: 'The location near Ashoknagar post office in Banashankari is extremely convenient. The food feels like home and Srinivas Uncle is very caring about safety and security.'
    },
    {
      name: 'Pooja Kulkarni',
      role: 'Final Year Student & Resident',
      rating: 5,
      comment: 'Very safe environment with biometric entrance and 24/7 lady warden. Rooms are super clean, Wi-Fi speed is excellent for study and project work!'
    },
    {
      name: 'Dr. Ramesh & Sunitha Rao',
      role: 'Parents of Resident',
      rating: 5,
      comment: 'As parents sending our daughter to Bangalore, security was our top concern. Ivory Nest is peaceful, clean, and extremely secure. Highly recommended!'
    }
  ];

  return (
    <section id="reviews" style={{ padding: '80px 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px auto' }}>
          <div className="sub-tag" style={{ justifyContent: 'center' }}>
            ✦ TRUST & RATINGS
          </div>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Loved by 200+ Female Residents & Parents
          </h2>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--bg-card)', padding: '8px 20px', borderRadius: '999px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ color: '#F59E0B', display: 'flex', gap: '2px' }}>
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="#F59E0B" />)}
            </div>
            <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>4.9 out of 5.0</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>(150+ Verified Ratings)</span>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="review-card">
              <div>
                <div className="star-rating">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <p className="review-text">
                  "{rev.comment}"
                </p>
              </div>

              <div className="reviewer-info">
                <div className="reviewer-avatar">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-main)' }}>{rev.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
