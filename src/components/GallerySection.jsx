import React, { useState } from 'react';
import { Camera, X, Maximize2 } from 'lucide-react';

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Single / Twin Room with Window & Study Desk',
      category: 'Bedrooms',
      src: '/images/pg-single-twin-room.jpg',
      span: 'gallery-col-2 gallery-row-2'
    },
    {
      id: 2,
      title: 'Executive Double Sharing Room with Storage',
      category: 'Bedrooms',
      src: '/images/pg-double-sharing-room.jpg',
      span: 'gallery-col-1 gallery-row-1'
    },
    {
      id: 3,
      title: 'Attached Western Bathroom with Geyser & Shower',
      category: 'Attached Washroom',
      src: '/images/pg-attached-bathroom.jpg',
      span: 'gallery-col-1 gallery-row-2'
    },
    {
      id: 4,
      title: 'Triple Sharing Room with Curtains & Study Setup',
      category: 'Bedrooms',
      src: '/images/pg-triple-sharing-room.jpg',
      span: 'gallery-col-2 gallery-row-1'
    },
    {
      id: 5,
      title: 'Orient Designer Ceiling Fan & Room Fixtures',
      category: 'Room Fixtures',
      src: '/images/pg-room-ceiling-fan.jpg',
      span: 'gallery-col-1 gallery-row-1'
    },
    {
      id: 6,
      title: 'Coir-on Mattresses & Spacious Wooden Cabinets',
      category: 'Room Amenities',
      src: '/images/pg-double-sharing-room.jpg',
      span: 'gallery-col-1 gallery-row-1'
    }
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px auto' }}>
          <div className="sub-tag" style={{ justifyContent: 'center' }}>
            <Camera size={16} /> PHOTO GALLERY
          </div>
          <h2 className="section-title" style={{ marginBottom: '14px' }}>
            Explore Life & Facilities at Ivory Nest
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Take a look at our clean rooms, study lounges, dining areas, and 24/7 security features in Ashoknagar, Banashankari.
          </p>
        </div>

        {/* Collaged Grid Container */}
        <div className="gallery-collage-grid">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className={`gallery-item ${item.span}`}
              onClick={() => setActiveImage(item)}
            >
              <img src={item.src} alt={`girls-pg-${item.title.toLowerCase().replace(/\s+/g, '-')}`} className="gallery-img" />
              <div className="gallery-overlay">
                <div className="gallery-category">{item.category}</div>
                <div className="gallery-title">{item.title}</div>
                <div className="gallery-zoom-icon">
                  <Maximize2 size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Image Lightbox Modal */}
      {activeImage && (
        <div className="modal-overlay" onClick={() => setActiveImage(null)}>
          <div style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            backgroundColor: '#000'
          }} onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setActiveImage(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: '#FFF',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <X size={22} />
            </button>
            <img 
              src={activeImage.src} 
              alt={activeImage.title} 
              style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block' }}
            />
            <div style={{ padding: '16px 20px', backgroundColor: 'var(--bg-accent-dark)', color: '#FFF' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--bg-accent-tan)', fontWeight: '700', textTransform: 'uppercase' }}>{activeImage.category}</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', fontFamily: 'var(--font-serif)' }}>{activeImage.title}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
