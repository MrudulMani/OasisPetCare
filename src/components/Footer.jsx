import React from 'react';
import { BUSINESS_INFO } from '../data/servicesData';
import { MapPin, Phone, MessageCircle, Clock, Heart, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-section" id="location">
      <div className="container">
        {/* Top Location & Map Banner Card */}
        <div className="map-banner-card glass-card">
          <div className="map-info-col">
            <span className="badge badge-emerald">Visit Our Clinic & Store</span>
            <h2>Oasis Pet Care Bengaluru</h2>
            <p className="address-line">
              <MapPin size={18} color="var(--emerald-primary)" inline="true" /> {BUSINESS_INFO.address}
            </p>
            <p className="landmark-line">
              <strong>Landmark:</strong> {BUSINESS_INFO.landmark}
            </p>

            <div className="hours-grid">
              <div className="hours-item">
                <Clock size={16} color="var(--emerald-primary)" />
                <div>
                  <strong>Working Hours:</strong>
                  <span>Mon – Sun: 9:00 AM – 10:00 PM</span>
                </div>
              </div>

              <div className="hours-item">
                <Phone size={16} color="var(--emerald-primary)" />
                <div>
                  <strong>Contact Phone:</strong>
                  <span>{BUSINESS_INFO.phone}</span>
                </div>
              </div>
            </div>

            <div className="map-actions">
              <a 
                href={BUSINESS_INFO.mapsLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                <Navigation size={18} /> Get Google Maps Directions
              </a>
              <a 
                href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                className="btn btn-secondary"
              >
                <Phone size={18} /> Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          <div className="map-embed-col">
            <div className="map-preview-frame">
              <div className="map-pin-pulse">
                <MapPin size={36} color="#FFFFFF" fill="var(--emerald-primary)" />
                <span className="pin-title">Oasis Pet Care</span>
              </div>
              <a 
                href={BUSINESS_INFO.mapsLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="map-click-overlay"
              >
                <span>Click to Open in Google Maps App <ExternalLink size={14} /></span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="footer-main-grid">
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <div className="logo-icon">
                <Heart size={20} color="#FFFFFF" fill="#FFFFFF" />
              </div>
              <span className="footer-brand-name">Oasis Pet Care</span>
            </div>
            <p className="footer-desc">
              Bengaluru's premier veterinary hospital, pet grooming studio, and pet supply store. Dedicated to compassionate health and happiest tails.
            </p>
            <div className="rating-badge-pill">
              ⭐ 4.3 Google Rated ({BUSINESS_INFO.reviewCount}+ Reviews)
            </div>
          </div>

          <div className="footer-col">
            <h4>Veterinary Services</h4>
            <ul>
              <li><a href="#vet-care">Advanced Medical Care</a></li>
              <li><a href="#vet-care">General Surgery</a></li>
              <li><a href="#vet-care">Emergency & Critical Care</a></li>
              <li><a href="#vet-care">Pet Vaccinations Routine</a></li>
              <li><a href="#vet-care">In-House Diagnostics & Lab</a></li>
              <li><a href="#vet-care">Veterinary Home Visits</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Grooming & Spa</h4>
            <ul>
              <li><a href="#grooming">Dog Full Service Grooming</a></li>
              <li><a href="#grooming">Cat Grooming & Bathing</a></li>
              <li><a href="#grooming">Anal Gland Expression</a></li>
              <li><a href="#grooming">Ear Flushing & Cleaning</a></li>
              <li><a href="#grooming">Tooth Brushing & Care</a></li>
              <li><a href="#grooming">Anti-Tick Medicated Dip</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Popular Search Areas</h4>
            <div className="seo-tags">
              <span>Vets near me</span>
              <span>Veterinary Doctor near me</span>
              <span>Veterinary Clinic near me</span>
              <span>Pet Clinic Bengaluru</span>
              <span>Cat Doctor Akshayanagar</span>
              <span>Dog Grooming Doddakammanahalli</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Oasis Pet Care. All Rights Reserved. Designed with Minimalist & Aesthetic Care.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <span>·</span>
            <a href="#">Terms of Service</a>
            <span>·</span>
            <a href={BUSINESS_INFO.mapsLink} target="_blank" rel="noopener noreferrer">Google Maps Listing</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          background-color: var(--emerald-primary);
          color: rgba(255, 255, 255, 0.85);
          padding: 80px 0 30px;
        }

        .map-banner-card {
          margin-top: -120px;
          margin-bottom: 70px;
          padding: 40px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          background: #FFFFFF;
          border: 1px solid var(--sage-border);
          color: var(--text-main);
        }

        .map-info-col h2 {
          font-size: 2.2rem;
          margin: 12px 0;
        }

        .address-line {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 6px;
        }

        .landmark-line {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .hours-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 28px;
        }

        .hours-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .hours-item strong {
          display: block;
          font-size: 0.875rem;
        }

        .hours-item span {
          font-size: 0.8125rem;
          color: var(--text-muted);
        }

        .map-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .map-embed-col {
          height: 100%;
          min-height: 280px;
        }

        .map-preview-frame {
          width: 100%;
          height: 100%;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, #E3ECE6 0%, #D2DBCF 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border: 1px solid var(--sage-border);
        }

        .map-pin-pulse {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 2;
        }

        .pin-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--emerald-primary);
          background: #FFFFFF;
          padding: 4px 14px;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .map-click-overlay {
          position: absolute;
          inset: 0;
          background: rgba(30, 70, 56, 0.05);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 16px;
          transition: all var(--transition-fast);
        }

        .map-click-overlay span {
          background: #FFFFFF;
          color: var(--emerald-primary);
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: 0.8125rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .map-preview-frame:hover .map-click-overlay {
          background: rgba(30, 70, 56, 0.15);
        }

        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.9fr 0.9fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .footer-brand-name {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: #FFFFFF;
        }

        .footer-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 20px;
          color: rgba(255, 255, 255, 0.7);
        }

        .rating-badge-pill {
          display: inline-block;
          background: rgba(255, 255, 255, 0.1);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.8125rem;
          font-weight: 600;
          color: #FFF8E7;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .footer-col h4 {
          color: #FFFFFF;
          font-size: 1.1rem;
          margin-bottom: 20px;
        }

        .footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-col ul a {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          transition: color var(--transition-fast);
        }

        .footer-col ul a:hover {
          color: #25D366;
        }

        .seo-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .seo-tags span {
          font-size: 0.75rem;
          background: rgba(255, 255, 255, 0.08);
          padding: 4px 10px;
          border-radius: var(--radius-xs);
          color: rgba(255, 255, 255, 0.65);
        }

        .footer-bottom-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.5);
          flex-wrap: wrap;
          gap: 16px;
        }

        .bottom-links {
          display: flex;
          gap: 10px;
        }

        .bottom-links a:hover {
          color: #FFFFFF;
        }

        @media (max-width: 992px) {
          .map-banner-card {
            grid-template-columns: 1fr;
          }
          .footer-main-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .footer-main-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
