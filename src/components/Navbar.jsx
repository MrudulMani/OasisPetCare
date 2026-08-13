import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/servicesData';
import { Phone, Clock, Calendar, Menu, X, Heart, MapPin, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      // Open between 9 AM (9) and 10 PM (22)
      setIsOpenNow(hours >= BUSINESS_INFO.openHour && hours < BUSINESS_INFO.closeHour);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Emergency / Status Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-left">
            <span className={`status-pill ${isOpenNow ? 'open' : 'closed'}`}>
              <span className="dot"></span>
              {isOpenNow ? 'Open Now · Closes at 10 PM' : 'Opens Daily at 9 AM'}
            </span>
            <span className="location-text hidden-mobile">
              <MapPin size={14} /> Akshayanagar, Bengaluru (Opp. Skyphool Fitness)
            </span>
          </div>
          <div className="top-right">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="top-phone">
              <Phone size={14} /> <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a href={BUSINESS_INFO.mapsLink} target="_blank" rel="noopener noreferrer" className="top-link hidden-mobile">
              Google Maps (4.3 ⭐)
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-nav">
        <div className="container nav-container">
          <a href="#" className="brand-logo">
            <div className="logo-icon">
              <Heart size={22} color="#FFFFFF" fill="#FFFFFF" />
            </div>
            <div className="logo-text">
              <span className="brand-name">Oasis Pet Care</span>
              <span className="brand-tagline">Veterinary & Spa Center</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-links desktop-only">
            <li><a href="#services">Services</a></li>
            <li><a href="#grooming">Grooming Calculator</a></li>
            <li><a href="#vet-care">Vet & Surgery</a></li>
            <li><a href="#pet-shop">Pet Shop</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#location">Hours & Location</a></li>
          </ul>

          {/* Desktop CTA */}
          <div className="nav-actions desktop-only">
            <button className="btn btn-primary btn-sm" onClick={onOpenBooking}>
              <Calendar size={16} /> Book Appointment
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="mobile-toggle mobile-only" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-list">
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#grooming" onClick={() => setMobileMenuOpen(false)}>Grooming Calculator</a></li>
            <li><a href="#vet-care" onClick={() => setMobileMenuOpen(false)}>Vet & Surgery</a></li>
            <li><a href="#pet-shop" onClick={() => setMobileMenuOpen(false)}>Pet Shop</a></li>
            <li><a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews & Ratings</a></li>
            <li><a href="#location" onClick={() => setMobileMenuOpen(false)}>Contact & Location</a></li>
          </ul>
          <div className="mobile-drawer-cta">
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}>
              <Calendar size={18} /> Book Appointment
            </button>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn btn-secondary" style={{ width: '100%', marginTop: '12px' }}>
              <Phone size={18} /> Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      )}

      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 900;
          background: rgba(250, 249, 246, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-light);
          transition: all var(--transition-normal);
        }
        
        .navbar-header.scrolled {
          box-shadow: 0 10px 30px rgba(30, 70, 56, 0.08);
          background: rgba(255, 255, 255, 0.96);
        }

        .top-bar {
          background: var(--emerald-primary);
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.8125rem;
          padding: 6px 0;
          font-weight: 500;
        }

        .top-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .top-left, .top-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 2px 10px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
        }

        .status-pill.open {
          background: rgba(37, 211, 102, 0.2);
          color: #25D366;
        }

        .status-pill.closed {
          background: rgba(239, 68, 68, 0.2);
          color: #EF4444;
        }

        .status-pill .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: currentColor;
        }

        .top-phone {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-inverse);
          font-weight: 600;
        }

        .top-phone:hover {
          color: #25D366;
        }

        .top-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: underline;
        }

        .main-nav {
          padding: 16px 0;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-icon {
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, var(--emerald-primary), var(--emerald-accent));
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 16px rgba(30, 70, 56, 0.25);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.35rem;
          color: var(--text-main);
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .brand-tagline {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 32px;
        }

        .nav-links a {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: color var(--transition-fast);
        }

        .nav-links a:hover {
          color: var(--emerald-primary);
        }

        .mobile-only {
          display: none;
        }

        @media (max-width: 992px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: flex !important;
          }
          .hidden-mobile {
            display: none;
          }
        }

        .mobile-toggle {
          color: var(--text-main);
          padding: 4px;
        }

        .mobile-drawer {
          position: fixed;
          top: 85px;
          left: 0;
          right: 0;
          background: #FFFFFF;
          border-bottom: 1px solid var(--border-light);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          padding: 24px;
          animation: fadeIn 0.2s ease-out;
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 24px;
        }

        .mobile-nav-list a {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-main);
        }
      `}</style>
    </header>
  );
}
