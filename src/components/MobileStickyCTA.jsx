import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function MobileStickyCTA() {
  const phone = '7996151633';
  const whatsappUrl = `https://wa.me/917996151633?text=${encodeURIComponent('Hello Srinivas Sir, I am inquiring about Ivory Nest Girls PG in Ashoknagar, Banashankari.')}`;

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
