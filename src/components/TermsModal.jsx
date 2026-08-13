import React from 'react';
import { X, FileText } from 'lucide-react';

export default function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-modal-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--bg-accent-dark)', marginBottom: '8px' }}>
          <FileText size={22} />
          <span style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>LEGAL & RESIDENT POLICY</span>
        </div>

        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', fontFamily: 'var(--font-serif)', color: 'var(--text-main)' }}>
          Ivory Nest Terms & Conditions
        </h2>

        <div style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.65', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <p>
            Welcome to <strong>Ivory Nest Girls PG</strong> (operated by Srinivas G), situated at 1358/A, 6th cross, Opp Ashoknagar post office, Ashoknagar Banashankari Bangalore - 560050. By taking admission or residing at Ivory Nest, residents and parents agree to adhere to the following housing rules designed for maximum safety, hygiene, and harmony.
          </p>

          <div>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1.05rem', marginBottom: '6px' }}>1. Safety & Gate Timings</h4>
            <p>
              To ensure 100% security for female residents, main biometric gates are secured. Standard gate closing time is 10:00 PM. Prior written approval or phone confirmation from parents/guardian is mandatory for late entry due to college/work requirements.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1.05rem', marginBottom: '6px' }}>2. Payment & Security Deposit</h4>
            <p>
              Monthly rent is payable in advance by the 5th of every month. A 2-month security deposit is collected at the time of admission, refundable upon completing the agreed notice period (1 month prior written notice required).
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1.05rem', marginBottom: '6px' }}>3. Food & Dining Hygiene</h4>
            <p>
              Breakfast, lunch, and dinner are served daily during designated dining hours. Food is prepared in a certified clean kitchen. Wasting food is discouraged. Outside catering or heavy cooking inside individual bedrooms is strictly restricted.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1.05rem', marginBottom: '6px' }}>4. Visitor & Guest Policy</h4>
            <p>
              Male visitors (including family members) are strictly permitted ONLY in the ground floor reception lounge and not inside resident bedrooms. Mother / sister stay permissions require advance notice and approval from the warden.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1.05rem', marginBottom: '6px' }}>5. Maintenance & Facilities</h4>
            <p>
              High-speed Wi-Fi, electricity, solar hot water, and housekeeping are included. Residents are expected to keep their personal belongings organized and avoid damaging property infrastructure.
            </p>
          </div>

          <div style={{ padding: '16px', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
            <div style={{ fontWeight: '700', color: 'var(--text-main)', marginBottom: '4px' }}>Questions regarding housing policy?</div>
            <div>Contact Owner Srinivas G directly at <strong>7996151633</strong> or email support at Ivory Nest Banashankari.</div>
          </div>

        </div>

        <div style={{ marginTop: '28px', textAlign: 'right' }}>
          <button onClick={onClose} className="btn btn-primary">
            I Understand & Agree
          </button>
        </div>

      </div>
    </div>
  );
}
