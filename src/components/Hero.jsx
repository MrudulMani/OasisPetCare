import React from 'react';
import { BUSINESS_INFO } from '../data/servicesData';
import { Star, ShieldCheck, HeartHandshake, Phone, ArrowRight, MessageCircle, Clock, Award } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        {/* Hero Left Content */}
        <div className="hero-content">
          <div className="badge badge-gold hero-badge">
            <Star size={15} fill="#D99B26" color="#D99B26" />
            <span>4.3 Rating ({BUSINESS_INFO.reviewCount}+ Google Reviews)</span>
          </div>

          <h1 className="hero-title">
            Exceptional Veterinary Care & Luxury Pet Spa in <span className="text-highlight">Bengaluru</span>
          </h1>

          <p className="hero-subtitle">
            Welcome to <strong>Oasis Pet Care</strong> — Akshayanagar's trusted one-stop destination for advanced veterinary medicine, surgical excellence, gentle full-service grooming, and premium pet supplies.
          </p>

          {/* Quick Action Buttons */}
          <div className="hero-ctas">
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Oasis Pet Care! I would like to book an appointment for my pet.")}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp pulse-animation"
            >
              <MessageCircle size={20} /> Book via WhatsApp
            </a>
            <button className="btn btn-secondary" onClick={onOpenBooking}>
              <span>Schedule Visit</span> <ArrowRight size={18} />
            </button>
          </div>

          {/* Key Selling Highlights */}
          <div className="hero-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">
                <ShieldCheck size={20} color="var(--emerald-primary)" />
              </div>
              <div className="highlight-text">
                <strong>Certified Vets & Surgeons</strong>
                <span>Advanced clinical diagnostics</span>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <HeartHandshake size={20} color="var(--emerald-primary)" />
              </div>
              <div className="highlight-text">
                <strong>Full-Service Grooming</strong>
                <span>Bath, haircuts & hygiene spa</span>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <Clock size={20} color="var(--emerald-primary)" />
              </div>
              <div className="highlight-text">
                <strong>Open Daily till 10 PM</strong>
                <span>Convenient night hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Right Visual Showcase */}
        <div className="hero-visual">
          <div className="image-frame">
            <img 
              src="/images/hero_pet_care.jpg" 
              alt="Veterinarian caring for dog and cat at Oasis Pet Care Bengaluru"
              className="hero-image"
              loading="eager"
            />
            <div className="image-overlay-gradient"></div>

            {/* Floating Glass Metric Card 1 */}
            <div className="floating-card metric-card-1 glass-card">
              <div className="metric-icon">⭐</div>
              <div className="metric-info">
                <strong>4.3 / 5 Stars</strong>
                <span>226+ Verified Google Reviews</span>
              </div>
            </div>

            {/* Floating Glass Metric Card 2 */}
            <div className="floating-card metric-card-2 glass-card">
              <div className="metric-icon-badge">
                <Award size={20} color="var(--emerald-primary)" />
              </div>
              <div className="metric-info">
                <strong>Complete Pet Care</strong>
                <span>Vet + Spa + Shop under 1 roof</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 60px 0 80px;
          position: relative;
          background: radial-gradient(circle at 80% 20%, rgba(235, 243, 239, 0.8) 0%, rgba(250, 249, 246, 1) 70%);
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }

        .hero-badge {
          margin-bottom: 24px;
          box-shadow: 0 4px 12px rgba(217, 155, 38, 0.12);
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.12;
          margin-bottom: 20px;
          color: var(--text-main);
          letter-spacing: -0.035em;
        }

        .text-highlight {
          color: var(--emerald-primary);
          position: relative;
          display: inline-block;
        }

        .text-highlight::after {
          content: '';
          position: absolute;
          bottom: 6px;
          left: 0;
          right: 0;
          height: 10px;
          background: rgba(235, 243, 239, 0.8);
          z-index: -1;
          border-radius: 4px;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-muted);
          margin-bottom: 36px;
          max-width: 580px;
          line-height: 1.65;
        }

        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .hero-highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding-top: 28px;
          border-top: 1px solid var(--border-light);
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .highlight-icon {
          width: 38px;
          height: 38px;
          background: var(--emerald-light);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .highlight-text {
          display: flex;
          flex-direction: column;
        }

        .highlight-text strong {
          font-size: 0.875rem;
          color: var(--text-main);
          font-weight: 700;
          line-height: 1.2;
        }

        .highlight-text span {
          font-size: 0.75rem;
          color: var(--text-light);
        }

        .hero-visual {
          position: relative;
        }

        .image-frame {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: visible;
        }

        .hero-image {
          width: 100%;
          border-radius: var(--radius-lg);
          object-fit: cover;
          box-shadow: 0 30px 60px -15px rgba(30, 70, 56, 0.18);
          border: 4px solid #FFFFFF;
        }

        .floating-card {
          position: absolute;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          z-index: 10;
        }

        .metric-card-1 {
          top: -20px;
          left: -20px;
        }

        .metric-card-2 {
          bottom: -20px;
          right: -10px;
        }

        .metric-icon {
          font-size: 1.5rem;
        }

        .metric-icon-badge {
          width: 36px;
          height: 36px;
          background: var(--emerald-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .metric-info {
          display: flex;
          flex-direction: column;
        }

        .metric-info strong {
          font-size: 0.9375rem;
          color: var(--text-main);
        }

        .metric-info span {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-title {
            font-size: 2.75rem;
          }
          .hero-highlights {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .metric-card-1 {
            top: 10px;
            left: 10px;
          }
          .metric-card-2 {
            bottom: 10px;
            right: 10px;
          }
        }
      `}</style>
    </section>
  );
}
