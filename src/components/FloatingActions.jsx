import React from 'react';
import { BUSINESS_INFO } from '../data/servicesData';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="floating-actions-wrapper">
      <a 
        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Oasis Pet Care! I have an inquiry regarding your pet services.")}`}
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn float-wa pulse-animation"
        aria-label="Chat on WhatsApp"
        title="WhatsApp Oasis Pet Care"
      >
        <MessageCircle size={24} color="#FFFFFF" />
        <span className="float-tooltip">Chat on WhatsApp</span>
      </a>

      <a 
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="floating-btn float-phone"
        aria-label="Call Vet Clinic"
        title="Call Oasis Pet Care Clinic"
      >
        <Phone size={22} color="#FFFFFF" />
        <span className="float-tooltip">Call {BUSINESS_INFO.phone}</span>
      </a>

      <style>{`
        .floating-actions-wrapper {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 850;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .floating-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
          position: relative;
          transition: all var(--transition-normal);
        }

        .float-wa {
          background: #25D366;
        }

        .float-phone {
          background: var(--emerald-primary);
        }

        .floating-btn:hover {
          transform: scale(1.1);
        }

        .float-tooltip {
          position: absolute;
          right: 68px;
          background: #1C2421;
          color: #FFFFFF;
          padding: 6px 14px;
          border-radius: var(--radius-xs);
          font-size: 0.8125rem;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--transition-fast);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .floating-btn:hover .float-tooltip {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .floating-actions-wrapper {
            bottom: 20px;
            right: 20px;
          }
          .floating-btn {
            width: 48px;
            height: 48px;
          }
          .float-tooltip {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
