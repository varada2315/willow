import React from 'react';

export default function RoomCategories() {
  const roomTypes = [
    {
      id: 'single',
      badge: 'Maximum Privacy',
      title: 'Single Executive Room',
      price: '₹18,500',
      period: '/ month',
      desc: 'Private quiet room with attached bath, ergonomic study desk, bookshelf & private wardrobe.',
      image: '/images/girls-pg-single-room-basavanagudi.jpg',
      amenities: ['Attached Washroom', 'Private Study Table', 'High-Speed Wi-Fi', '3 Meals Daily']
    },
    {
      id: 'double',
      badge: 'Most Popular',
      title: 'Twin Sharing Deluxe',
      price: '₹13,500',
      period: '/ month per bed',
      desc: 'Spacious room with dual individual study setups, large double wardrobes & attached bathroom.',
      image: '/images/girls-pg-double-room-basavanagudi.jpg',
      amenities: ['Individual Wardrobes', 'Twin Study Tables', 'Daily Housekeeping', '24/7 Hot Water']
    },
    {
      id: 'triple',
      badge: 'Budget Friendly',
      title: 'Triple Sharing Premium',
      price: '₹10,500',
      period: '/ month per bed',
      desc: 'Cozy, well-ventilated shared room designed for comfortable student living & collaborative study.',
      image: '/images/girls-pg-hero-room.png',
      amenities: ['Individual Lockers', 'Clean Bedding', 'Power Backup', 'Laundry Included']
    },
    {
      id: 'lounge',
      badge: 'Common Spaces',
      title: 'Study & Social Lounge',
      price: 'Included',
      period: 'for all residents',
      desc: 'Dedicated silent study hall, high-speed Wi-Fi zone, microwave pantry & serene terrace garden.',
      image: '/images/girls-pg-dining-food-area.jpg',
      amenities: ['Silent Study Desks', 'Wi-Fi Routers', 'Water Purifier', 'Common Refrigerator']
    }
  ];

  const whatsappBooking = (title) => {
    const text = encodeURIComponent(`Hello Srinivas Sir, I am interested in booking/knowing details for ${title} at Willow Nest Girls PG near BMSCE.`);
    window.open(`https://wa.me/918884888805?text=${text}`, '_blank');
  };

  return (
    <section className="room-section" id="rooms" style={{ padding: '60px 0' }}>
      <div className="container">
        
        <div className="section-header">
          <div>
            <div className="sub-tag">
              ✦ ROOM TYPES & RATES
            </div>
            <h2 className="section-title">
              Designed for Comfort, Safety & Focus
            </h2>
          </div>
          <a 
            href="https://wa.me/918884888805?text=Hello%20Srinivas%20Sir,%20I%20want%20to%20inquire%20about%20room%20availability%20at%20Willow%20Nest%20Girls%20PG." 
            target="_blank" 
            rel="noreferrer"
            className="btn btn-secondary"
          >
            Inquire Availability →
          </a>
        </div>

        <div className="room-grid">
          {roomTypes.map((room) => (
            <div key={room.id} className="room-card">
              <div className="room-card-img-wrapper">
                <img src={room.image} alt={`girls-pg-${room.id}-basavanagudi`} className="room-card-img" />
                <div className="room-badge">{room.badge}</div>
              </div>
              <div className="room-card-body">
                <div className="room-price-tag">
                  {room.price} <span>{room.period}</span>
                </div>
                <h3 className="room-card-title">{room.title}</h3>
                <p className="room-card-desc">{room.desc}</p>
                
                <div className="room-amenity-tags">
                  {room.amenities.map((amenity, idx) => (
                    <span key={idx} className="amenity-pill">{amenity}</span>
                  ))}
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <button 
                    onClick={() => whatsappBooking(room.title)}
                    className="btn btn-primary" 
                    style={{ width: '100%', fontSize: '0.85rem', padding: '11px' }}
                  >
                    Check Availability & Book →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
