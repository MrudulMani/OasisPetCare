import React from 'react';
import { BUSINESS_INFO } from '../data/servicesData';
import { PhoneCall, AlertCircle, Clock, CheckCircle2 } from 'lucide-react';

export default function StatusBanner() {
  return (
    <div className="status-banner-container">
      <div className="container">
        <div className="banner-card glass-card">
          <div className="banner-item">
            <div className="banner-icon icon-clock">
              <Clock size={20} color="var(--emerald-primary)" />
            </div>
            <div className="banner-details">
              <strong>Store & Clinic Hours</strong>
              <span>Open Daily: 9:00 AM – 10:00 PM (Mon – Sun)</span>
            </div>
          </div>

          <div className="banner-divider"></div>

          <div className="banner-item">
            <div className="banner-icon icon-check">
              <CheckCircle2 size={20} color="#25D366" />
            </div>
            <div className="banner-details">
              <strong>Walk-in & Appointments Welcome</strong>
              <span>No long waiting times for consultations</span>
            </div>
          </div>

          <div className="banner-divider"></div>

          <div className="banner-item emergency-item">
            <div className="banner-icon icon-phone pulse-animation">
              <PhoneCall size={20} color="#FFFFFF" />
            </div>
            <div className="banner-details">
              <strong className="emergency-label">Emergency & Urgent Care</strong>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="emergency-phone">
                Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .status-banner-container {
          margin-top: -30px;
          position: relative;
          z-index: 20;
        }

        .banner-card {
          padding: 20px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: #FFFFFF;
          border: 1px solid var(--sage-border);
          box-shadow: 0 16px 36px -8px rgba(30, 70, 56, 0.1);
        }

        .banner-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .banner-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon-clock {
          background: var(--emerald-light);
        }

        .icon-check {
          background: rgba(37, 211, 102, 0.15);
        }

        .icon-phone {
          background: #EF4444;
          box-shadow: 0 6px 16px rgba(239, 68, 68, 0.3);
        }

        .banner-details {
          display: flex;
          flex-direction: column;
        }

        .banner-details strong {
          font-size: 0.9375rem;
          color: var(--text-main);
          font-weight: 700;
        }

        .banner-details span {
          font-size: 0.8125rem;
          color: var(--text-muted);
        }

        .emergency-label {
          color: #DC2626 !important;
        }

        .emergency-phone {
          font-size: 1rem !important;
          font-weight: 800;
          color: var(--emerald-primary);
        }

        .emergency-phone:hover {
          text-decoration: underline;
        }

        .banner-divider {
          width: 1px;
          height: 40px;
          background: var(--border-light);
        }

        @media (max-width: 900px) {
          .banner-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            padding: 24px;
          }
          .banner-divider {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
