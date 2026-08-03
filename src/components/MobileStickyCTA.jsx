import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

export default function MobileStickyCTA() {
  const phone = '8884888805';
  const whatsappUrl = `https://wa.me/918884888805?text=${encodeURIComponent('Hello Srinivas Sir, I am inquiring about Willow Nest Girls PG near BMSCE.')}`;

  return (
    <div className="mobile-sticky-bar">
      <a href={`tel:${phone}`} className="mobile-cta-btn mobile-call-btn">
        <Phone size={18} />
        <span>Call {phone}</span>
      </a>
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mobile-cta-btn mobile-wa-btn">
        <MessageCircle size={20} />
        <span>WhatsApp Us</span>
      </a>
    </div>
  );
}
