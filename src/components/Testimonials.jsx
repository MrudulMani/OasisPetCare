import React, { useState } from 'react';
import { REVIEWS, BUSINESS_INFO } from '../data/servicesData';
import { Star, Quote, ExternalLink, ThumbsUp, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="section testimonials-section" id="reviews">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Verified Client Experiences</span>
          <h2>Loved by Pet Parents Across Bengaluru</h2>
          <p>Read authentic feedback and rating highlights from pet parents who trust Oasis Pet Care for their furry family members.</p>
        </div>

        {/* Rating Overview Card */}
        <div className="rating-summary-card glass-card">
          <div className="summary-col-left">
            <div className="big-rating-number">4.3</div>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} fill={i < 4 ? "#D99B26" : "#E2E8F0"} color={i < 4 ? "#D99B26" : "#CBD5E1"} />
              ))}
            </div>
            <span className="total-reviews-count">226+ Google Reviews & 237+ Justdial Reviews</span>
          </div>

          <div className="summary-col-middle">
            <div className="rating-bar-item">
              <span>5 Stars</span>
              <div className="bar-bg"><div className="bar-fill" style={{ width: '82%' }}></div></div>
              <span>82%</span>
            </div>
            <div className="rating-bar-item">
              <span>4 Stars</span>
              <div className="bar-bg"><div className="bar-fill" style={{ width: '12%' }}></div></div>
              <span>12%</span>
            </div>
            <div className="rating-bar-item">
              <span>3 Stars</span>
              <div className="bar-bg"><div className="bar-fill" style={{ width: '4%' }}></div></div>
              <span>4%</span>
            </div>
          </div>

          <div className="summary-col-right">
            <a 
              href={BUSINESS_INFO.mapsLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              <span>View All Google Reviews</span> <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="reviews-grid">
          {REVIEWS.map(rev => (
            <div key={rev.id} className="review-card glass-card">
              <div className="quote-icon">
                <Quote size={28} color="var(--emerald-accent)" />
              </div>

              <div className="rev-stars">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#D99B26" color="#D99B26" />
                ))}
              </div>

              <p className="rev-text">"{rev.text}"</p>

              <div className="rev-footer">
                <div className="rev-author">
                  <strong>{rev.author}</strong>
                  <span><CheckCircle2 size={12} color="#25D366" inline="true" /> {rev.date}</span>
                </div>
                <span className="rev-tag-badge">{rev.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          background-color: var(--bg-secondary);
        }

        .rating-summary-card {
          padding: 36px;
          display: grid;
          grid-template-columns: 1fr 1.5fr 1fr;
          gap: 36px;
          align-items: center;
          margin-bottom: 50px;
          background: #FFFFFF;
          border: 1px solid var(--sage-border);
        }

        .summary-col-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .big-rating-number {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--text-main);
          line-height: 1;
        }

        .rating-stars {
          display: flex;
          gap: 4px;
          margin: 8px 0;
        }

        .total-reviews-count {
          font-size: 0.8125rem;
          color: var(--text-muted);
        }

        .summary-col-middle {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .rating-bar-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.8125rem;
          color: var(--text-muted);
        }

        .bar-bg {
          flex: 1;
          height: 8px;
          background: #E2E8F0;
          border-radius: 4px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          background: #D99B26;
          border-radius: 4px;
        }

        .summary-col-right {
          display: flex;
          justify-content: center;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 28px;
        }

        .review-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .quote-icon {
          margin-bottom: 12px;
          opacity: 0.8;
        }

        .rev-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 14px;
        }

        .rev-text {
          font-size: 0.95rem;
          color: var(--text-main);
          line-height: 1.6;
          margin-bottom: 24px;
          flex: 1;
          font-style: italic;
        }

        .rev-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-light);
          padding-top: 16px;
        }

        .rev-author {
          display: flex;
          flex-direction: column;
        }

        .rev-author strong {
          font-size: 0.875rem;
        }

        .rev-author span {
          font-size: 0.75rem;
          color: var(--text-light);
        }

        .rev-tag-badge {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: var(--radius-full);
          background: var(--emerald-light);
          color: var(--emerald-primary);
        }

        @media (max-width: 900px) {
          .rating-summary-card {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
