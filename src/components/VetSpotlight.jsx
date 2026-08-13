import React from 'react';
import { BUSINESS_INFO } from '../data/servicesData';
import { Stethoscope, Activity, Zap, ShieldCheck, Microscope, Home, Phone, ArrowRight, HeartPulse } from 'lucide-react';

export default function VetSpotlight({ onOpenBooking }) {
  return (
    <section className="section vet-spotlight-section" id="vet-care">
      <div className="container">
        <div className="spotlight-grid">
          {/* Left Visual Image Frame */}
          <div className="spotlight-visual">
            <div className="visual-frame">
              <img 
                src="/images/vet_medical.jpg" 
                alt="Veterinarian examining cat at Oasis Pet Care Bengaluru"
                className="vet-img"
              />
              <div className="floating-experience-badge glass-card">
                <div className="exp-number">100%</div>
                <div className="exp-text">
                  <strong>Compassionate Care</strong>
                  <span>Experienced Clinical Doctors</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Clinical Details Content */}
          <div className="spotlight-content">
            <span className="badge badge-emerald">Medical & Surgical Excellence</span>
            
            <h2 className="spotlight-title">
              State-of-the-Art Veterinary Medicine & General Surgery
            </h2>

            <p className="spotlight-desc">
              At Oasis Pet Care, our licensed veterinarians provide high-standard medical treatments, gentle handling, and advanced diagnostic screenings to keep your pets healthy throughout every stage of life.
            </p>

            <div className="clinical-features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <Activity size={20} color="var(--emerald-primary)" />
                </div>
                <div>
                  <strong>General & Soft Tissue Surgery</strong>
                  <p>Sterile surgical suite for spays, neuters, tumor removals & soft tissue repairs.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <Microscope size={20} color="var(--emerald-primary)" />
                </div>
                <div>
                  <strong>In-House Lab & Diagnostics</strong>
                  <p>Rapid bloodwork analysis, skin cytology & parasite diagnostic screenings.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <ShieldCheck size={20} color="var(--emerald-primary)" />
                </div>
                <div>
                  <strong>Complete Immunization</strong>
                  <p>Puppy/kitten core vaccinations, anti-rabies, and booster health passports.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <Home size={20} color="var(--emerald-primary)" />
                </div>
                <div>
                  <strong>Veterinary Home Visits</strong>
                  <p>Doorstep medical consultations for senior, anxious, or heavy pets.</p>
                </div>
              </div>
            </div>

            <div className="spotlight-actions">
              <button className="btn btn-primary" onClick={onOpenBooking}>
                <Stethoscope size={18} /> Book Vet Consultation
              </button>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn btn-secondary">
                <Phone size={18} /> Emergency Call: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .vet-spotlight-section {
          background-color: #FFFFFF;
        }

        .spotlight-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 60px;
          align-items: center;
        }

        .visual-frame {
          position: relative;
        }

        .vet-img {
          width: 100%;
          border-radius: var(--radius-lg);
          box-shadow: 0 24px 48px -12px rgba(30, 70, 56, 0.15);
        }

        .floating-experience-badge {
          position: absolute;
          bottom: -20px;
          left: -20px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .exp-number {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          color: var(--emerald-primary);
        }

        .exp-text {
          display: flex;
          flex-direction: column;
        }

        .exp-text strong {
          font-size: 0.9375rem;
        }

        .exp-text span {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .spotlight-title {
          font-size: 2.5rem;
          margin: 16px 0;
          line-height: 1.2;
        }

        .spotlight-desc {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 32px;
        }

        .clinical-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 36px;
        }

        .feature-item {
          display: flex;
          gap: 12px;
        }

        .feature-icon {
          width: 40px;
          height: 40px;
          background: var(--emerald-light);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-item strong {
          display: block;
          font-size: 0.9375rem;
          margin-bottom: 4px;
        }

        .feature-item p {
          font-size: 0.8125rem;
          color: var(--text-muted);
        }

        .spotlight-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (max-width: 992px) {
          .spotlight-grid {
            grid-template-columns: 1fr;
          }
          .clinical-features-grid {
            grid-template-columns: 1fr;
          }
          .floating-experience-badge {
            left: 10px;
            bottom: 10px;
          }
        }
      `}</style>
    </section>
  );
}
