import React, { useState, useMemo } from 'react';
import { SERVICES, BUSINESS_INFO } from '../data/servicesData';
import { 
  Search, Stethoscope, Activity, Zap, ShieldCheck, Microscope, 
  HeartPulse, Home, Cat, Scissors, Bath, CheckCircle, Sparkles, 
  Smile, ShieldAlert, ShoppingBag, Package, Calendar, ArrowRight, X, MessageCircle
} from 'lucide-react';

const ICON_MAP = {
  Stethoscope, Activity, Zap, ShieldCheck, Microscope, HeartPulse, 
  Home, Cat, Scissors, Bath, CheckCircle, Sparkles, Smile, 
  ShieldAlert, ShoppingBag, Package
};

export default function ServiceExplorer({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModalService, setSelectedModalService] = useState(null);

  const filteredServices = useMemo(() => {
    return SERVICES.filter(service => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            service.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const renderIcon = (iconName) => {
    const IconComp = ICON_MAP[iconName] || Stethoscope;
    return <IconComp size={24} color="var(--emerald-primary)" />;
  };

  return (
    <section className="section service-explorer-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Comprehensive Care Catalog</span>
          <h2>Our Services & Specialties</h2>
          <p>Everything your dog or cat needs — from routine wellness and advanced surgical care to luxury spa grooming and premium nutrition.</p>
        </div>

        {/* Filter Controls & Live Search */}
        <div className="controls-bar">
          <div className="category-tabs">
            <button 
              className={`tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Services ({SERVICES.length})
            </button>
            <button 
              className={`tab-btn ${activeCategory === 'veterinary' ? 'active' : ''}`}
              onClick={() => setActiveCategory('veterinary')}
            >
              🩺 Veterinary & Medical
            </button>
            <button 
              className={`tab-btn ${activeCategory === 'grooming' ? 'active' : ''}`}
              onClick={() => setActiveCategory('grooming')}
            >
              ✂️ Grooming & Spa
            </button>
            <button 
              className={`tab-btn ${activeCategory === 'shop' ? 'active' : ''}`}
              onClick={() => setActiveCategory('shop')}
            >
              🐾 Pet Shop & Supplies
            </button>
          </div>

          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text"
              placeholder="Search services (e.g. Ear Cleaning, Vaccination, Surgery)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search pet care services"
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="no-results">
            <p>No services found matching "{searchQuery}".</p>
            <button className="btn btn-secondary btn-sm" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="services-grid">
            {filteredServices.map(service => (
              <div 
                key={service.id} 
                className="service-card glass-card"
                onClick={() => setSelectedModalService(service)}
              >
                <div className="service-card-header">
                  <div className="service-icon-box">
                    {renderIcon(service.icon)}
                  </div>
                  {service.badge && (
                    <span className="badge badge-emerald service-badge">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                <div className="service-card-footer">
                  <span className="learn-more-link">
                    View Details & Book <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      {selectedModalService && (
        <div className="modal-overlay" onClick={() => setSelectedModalService(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedModalService(null)}>
              <X size={20} />
            </button>

            <div className="modal-header-badge">
              <span className="badge badge-emerald">{selectedModalService.badge || 'Service Details'}</span>
            </div>

            <div className="modal-service-hero">
              <div className="modal-icon-box">
                {renderIcon(selectedModalService.icon)}
              </div>
              <div>
                <h3 className="modal-title">{selectedModalService.title}</h3>
                <span className="modal-category">Oasis Pet Care Specialty</span>
              </div>
            </div>

            <p className="modal-desc">{selectedModalService.description}</p>

            <div className="modal-details-box">
              <h4>Service Breakdown</h4>
              <p>{selectedModalService.details}</p>
            </div>

            <div className="modal-actions">
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Oasis Pet Care! I am interested in booking: ${selectedModalService.title}`)}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
                style={{ flex: 1 }}
              >
                <MessageCircle size={18} /> Book via WhatsApp
              </a>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  const s = selectedModalService;
                  setSelectedModalService(null);
                  onSelectService(s);
                }}
              >
                <Calendar size={18} /> Schedule Online
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .service-explorer-section {
          background-color: var(--bg-primary);
        }

        .controls-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .category-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #EAE6DE;
          padding: 6px;
          border-radius: var(--radius-full);
          overflow-x: auto;
        }

        .tab-btn {
          padding: 10px 20px;
          border-radius: var(--radius-full);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .tab-btn:hover {
          color: var(--text-main);
        }

        .tab-btn.active {
          background: #FFFFFF;
          color: var(--emerald-primary);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        }

        .search-box {
          position: relative;
          min-width: 320px;
          flex: 1;
          max-width: 400px;
        }

        .search-box input {
          width: 100%;
          padding: 12px 40px 12px 44px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-light);
          background: #FFFFFF;
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-main);
          outline: none;
          transition: all var(--transition-fast);
        }

        .search-box input:focus {
          border-color: var(--emerald-primary);
          box-shadow: 0 0 0 3px var(--border-focus);
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-light);
        }

        .clear-search {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-light);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 28px;
        }

        .service-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          height: 100%;
        }

        .service-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .service-icon-box {
          width: 52px;
          height: 52px;
          background: var(--emerald-light);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-title {
          font-size: 1.25rem;
          margin-bottom: 10px;
        }

        .service-desc {
          color: var(--text-muted);
          font-size: 0.9375rem;
          margin-bottom: 20px;
          flex: 1;
        }

        .service-card-footer {
          border-top: 1px solid var(--border-light);
          padding-top: 16px;
        }

        .learn-more-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--emerald-primary);
        }

        .no-results {
          text-align: center;
          padding: 60px 0;
          background: #FFFFFF;
          border-radius: var(--radius-md);
          border: 1px dashed var(--sage-border);
        }

        .modal-service-hero {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 20px 0 16px;
        }

        .modal-icon-box {
          width: 56px;
          height: 56px;
          background: var(--emerald-light);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-title {
          font-size: 1.5rem;
        }

        .modal-category {
          font-size: 0.8125rem;
          color: var(--text-light);
        }

        .modal-desc {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .modal-details-box {
          background: var(--bg-secondary);
          padding: 20px;
          border-radius: var(--radius-sm);
          margin-bottom: 28px;
        }

        .modal-details-box h4 {
          font-size: 0.9375rem;
          margin-bottom: 8px;
        }

        .modal-details-box p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .modal-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
}
