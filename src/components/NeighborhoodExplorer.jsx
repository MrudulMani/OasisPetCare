import React, { useState } from 'react';
import { NEIGHBORHOODS } from '../data/neighborhoodData';
import { BUSINESS_INFO } from '../data/servicesData';
import { MapPin, Navigation, Clock, CheckCircle2, Quote, ArrowRight, Phone } from 'lucide-react';

export default function NeighborhoodExplorer({ onOpenBooking }) {
  const [selectedId, setSelectedId] = useState('akshayanagar');

  const currentArea = NEIGHBORHOODS.find(n => n.id === selectedId) || NEIGHBORHOODS[0];

  return (
    <section className="section neighborhood-section" id="neighborhoods">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Local Service Network</span>
          <h2>Serving Pet Parents Across South Bengaluru</h2>
          <p>Find customized travel directions, neighborhood reviews, and local pet care services tailored to your area.</p>
        </div>

        {/* Neighborhood Selector Bar */}
        <div className="area-tabs-bar">
          {NEIGHBORHOODS.map(area => (
            <button 
              key={area.id}
              className={`area-tab ${selectedId === area.id ? 'active' : ''}`}
              onClick={() => setSelectedId(area.id)}
            >
              <MapPin size={16} />
              <span>{area.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Area Content Box */}
        <div className="area-detail-card glass-card">
          <div className="area-card-header">
            <div>
              <span className="badge badge-emerald">Serviced Area</span>
              <h3 className="area-title">{currentArea.title}</h3>
              <p className="area-route">📍 {currentArea.landmarkRoute}</p>
            </div>
            
            <div className="area-stats-box">
              <div className="stat-pill">
                <Clock size={16} color="var(--emerald-primary)" />
                <span>Travel Time: <strong>{currentArea.travelTime}</strong></span>
              </div>
              <div className="stat-pill">
                <Navigation size={16} color="var(--emerald-primary)" />
                <span>Distance: <strong>~{currentArea.distance}</strong></span>
              </div>
            </div>
          </div>

          <div className="area-content-grid">
            <div className="area-features-col">
              <h4>Why Pet Owners in {currentArea.name} Choose Oasis:</h4>
              <ul className="area-list">
                {currentArea.highlights.map((h, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} color="#25D366" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <h4 className="services-subtitle">Popular Local Requests:</h4>
              <div className="popular-tags">
                {currentArea.popularServices.map((s, i) => (
                  <span key={i} className="pop-tag">🐾 {s}</span>
                ))}
              </div>
            </div>

            <div className="area-testimonial-col">
              <div className="local-quote-box">
                <Quote size={24} color="var(--emerald-accent)" />
                <p className="local-quote-text">"{currentArea.localTestimonial.text}"</p>
                <div className="local-author">— {currentArea.localTestimonial.author}</div>
              </div>

              <div className="area-action-btns">
                <a 
                  href={BUSINESS_INFO.mapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%' }}
                >
                  <Navigation size={16} /> Open Route from {currentArea.name}
                </a>
                <button 
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', marginTop: '10px' }}
                  onClick={onOpenBooking}
                >
                  Book Appointment in {currentArea.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .neighborhood-section {
          background-color: var(--bg-secondary);
        }

        .area-tabs-bar {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .area-tab {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: var(--radius-full);
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-muted);
          transition: all var(--transition-fast);
        }

        .area-tab.active {
          background: var(--emerald-primary);
          color: #FFFFFF;
          border-color: var(--emerald-primary);
          box-shadow: 0 6px 16px rgba(30, 70, 56, 0.2);
        }

        .area-detail-card {
          padding: 40px;
          background: #FFFFFF;
          border: 1px solid var(--sage-border);
        }

        .area-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 24px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        .area-title {
          font-size: 1.8rem;
          margin: 10px 0 6px;
        }

        .area-route {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .area-stats-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .stat-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--emerald-light);
          padding: 6px 16px;
          border-radius: var(--radius-full);
          font-size: 0.8125rem;
          color: var(--emerald-primary);
        }

        .area-content-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
        }

        .area-features-col h4 {
          font-size: 1.1rem;
          margin-bottom: 16px;
        }

        .area-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .area-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          color: var(--text-main);
        }

        .services-subtitle {
          margin-top: 20px;
        }

        .popular-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
        }

        .pop-tag {
          font-size: 0.8125rem;
          font-weight: 600;
          padding: 4px 12px;
          background: var(--bg-secondary);
          border-radius: var(--radius-xs);
          color: var(--text-main);
        }

        .local-quote-box {
          background: var(--emerald-light);
          padding: 24px;
          border-radius: var(--radius-sm);
          margin-bottom: 24px;
          position: relative;
        }

        .local-quote-text {
          font-size: 0.95rem;
          font-style: italic;
          color: var(--text-main);
          margin: 10px 0 12px;
        }

        .local-author {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--emerald-primary);
          text-align: right;
        }

        @media (max-width: 900px) {
          .area-content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
