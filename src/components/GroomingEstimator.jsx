import React, { useState, useMemo } from 'react';
import { GROOMING_PRICING, BUSINESS_INFO } from '../data/servicesData';
import { Calculator, Check, Scissors, Bath, Sparkles, MessageCircle, Calendar } from 'lucide-react';

export default function GroomingEstimator({ onBookEstimate }) {
  const [petType, setPetType] = useState('dog');
  const [dogSize, setDogSize] = useState('medium');
  const [packageType, setPackageType] = useState('fullGroom'); // 'baseBath' | 'fullGroom'
  const [selectedAddons, setSelectedAddons] = useState(['analGland', 'teethBrushing']);

  const toggleAddon = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const calculatedEstimate = useMemo(() => {
    let basePrice = 0;
    let sizeLabel = "";

    if (petType === 'dog') {
      const config = GROOMING_PRICING.dog[dogSize];
      basePrice = packageType === 'fullGroom' ? config.fullGroom : config.baseBath;
      sizeLabel = config.name;
    } else {
      const config = GROOMING_PRICING.cat.standard;
      basePrice = packageType === 'fullGroom' ? config.fullGroom : config.baseBath;
      sizeLabel = config.name;
    }

    const addonsCost = selectedAddons.reduce((acc, addonId) => {
      const addonObj = GROOMING_PRICING.addons.find(a => a.id === addonId);
      return acc + (addonObj ? addonObj.price : 0);
    }, 0);

    const totalEstimate = basePrice + addonsCost;
    const estDuration = packageType === 'fullGroom' ? 90 + (selectedAddons.length * 10) : 60 + (selectedAddons.length * 10);

    return {
      basePrice,
      addonsCost,
      totalEstimate,
      estDuration,
      sizeLabel
    };
  }, [petType, dogSize, packageType, selectedAddons]);

  const generateWhatsAppMsg = () => {
    const pkgName = packageType === 'fullGroom' ? 'Full Service Grooming' : 'Basic Bath & Dry';
    const addonsList = selectedAddons
      .map(id => GROOMING_PRICING.addons.find(a => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const msg = `Hello Oasis Pet Care! I calculated a grooming estimate on your website:
- Pet: ${petType.toUpperCase()} (${calculatedEstimate.sizeLabel})
- Package: ${pkgName}
- Add-ons: ${addonsList || 'None'}
- Estimated Price: ₹${calculatedEstimate.totalEstimate}
- Est. Duration: ${calculatedEstimate.estDuration} mins

Can I schedule a grooming session?`;

    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="section grooming-estimator-section" id="grooming">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Instant Pricing & Duration</span>
          <h2>Interactive Grooming Package Estimator</h2>
          <p>Select your pet's breed size, grooming package, and luxury spa add-ons to see an instant estimated quote and session time.</p>
        </div>

        <div className="estimator-grid">
          {/* Left Column: Form Controls */}
          <div className="estimator-form glass-card">
            {/* Step 1: Pet Type */}
            <div className="form-group">
              <label className="group-label">1. Select Pet Companion</label>
              <div className="toggle-btn-group">
                <button 
                  className={`toggle-option ${petType === 'dog' ? 'selected' : ''}`}
                  onClick={() => setPetType('dog')}
                >
                  <span className="emoji">🐕</span> Dog
                </button>
                <button 
                  className={`toggle-option ${petType === 'cat' ? 'selected' : ''}`}
                  onClick={() => setPetType('cat')}
                >
                  <span className="emoji">🐱</span> Cat
                </button>
              </div>
            </div>

            {/* Step 2: Dog Size (if Dog) */}
            {petType === 'dog' && (
              <div className="form-group">
                <label className="group-label">2. Select Dog Breed Size</label>
                <div className="size-options-grid">
                  {Object.entries(GROOMING_PRICING.dog).map(([key, val]) => (
                    <button 
                      key={key}
                      className={`size-card ${dogSize === key ? 'selected' : ''}`}
                      onClick={() => setDogSize(key)}
                    >
                      <span className="size-title">{key.toUpperCase()}</span>
                      <span className="size-desc">{val.name.split('(')[1]?.replace(')', '') || val.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Package Type */}
            <div className="form-group">
              <label className="group-label">3. Select Grooming Package</label>
              <div className="package-options-grid">
                <div 
                  className={`package-card ${packageType === 'baseBath' ? 'selected' : ''}`}
                  onClick={() => setPackageType('baseBath')}
                >
                  <div className="pkg-header">
                    <Bath size={22} color="var(--emerald-primary)" />
                    <strong>Bath & Blow Dry</strong>
                  </div>
                  <p>Therapeutic bath, deep cleansing shampoo, ear wipe, paw cleanup & warm blow dry.</p>
                </div>

                <div 
                  className={`package-card ${packageType === 'fullGroom' ? 'selected' : ''}`}
                  onClick={() => setPackageType('fullGroom')}
                >
                  <div className="pkg-header">
                    <Scissors size={22} color="var(--emerald-primary)" />
                    <strong>Full Styling & Spa (Recommended)</strong>
                  </div>
                  <p>Full haircut/breed trim, bath, blow dry, nail clipping, ear cleaning & perfumed coat mist.</p>
                </div>
              </div>
            </div>

            {/* Step 4: Add-ons */}
            <div className="form-group">
              <label className="group-label">4. Customize Spa Add-ons</label>
              <div className="addons-list">
                {GROOMING_PRICING.addons.map(addon => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div 
                      key={addon.id} 
                      className={`addon-checkbox-item ${isChecked ? 'checked' : ''}`}
                      onClick={() => toggleAddon(addon.id)}
                    >
                      <div className="checkbox-box">
                        {isChecked && <Check size={14} color="#FFFFFF" />}
                      </div>
                      <span className="addon-name">{addon.name}</span>
                      <span className="addon-price">+₹{addon.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Price Summary Card */}
          <div className="estimator-summary">
            <div className="summary-card glass-card">
              <div className="summary-header">
                <Calculator size={24} color="var(--emerald-primary)" />
                <h3>Estimated Quote</h3>
              </div>

              <div className="photo-preview">
                <img 
                  src="/images/grooming_spa.jpg" 
                  alt="Dog receiving luxury spa bath at Oasis Pet Care"
                  className="spa-img"
                />
              </div>

              <div className="summary-breakdown">
                <div className="summary-row">
                  <span>Base Package ({packageType === 'fullGroom' ? 'Full Haircut & Spa' : 'Bath & Dry'}):</span>
                  <strong>₹{calculatedEstimate.basePrice}</strong>
                </div>

                {selectedAddons.length > 0 && (
                  <div className="summary-row">
                    <span>Add-ons ({selectedAddons.length} selected):</span>
                    <strong>+₹{calculatedEstimate.addonsCost}</strong>
                  </div>
                )}

                <div className="summary-row">
                  <span>Estimated Time:</span>
                  <strong>~{calculatedEstimate.estDuration} Mins</strong>
                </div>

                <div className="summary-total-box">
                  <div className="total-label">Total Estimated Quote</div>
                  <div className="total-amount">₹{calculatedEstimate.totalEstimate}</div>
                  <div className="total-note">* Final price may vary based on coat matted condition & temperament</div>
                </div>
              </div>

              <div className="summary-actions">
                <a 
                  href={generateWhatsAppMsg()} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp"
                  style={{ width: '100%' }}
                >
                  <MessageCircle size={18} /> Book Package via WhatsApp
                </a>
                <button 
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '10px' }}
                  onClick={() => onBookEstimate({
                    petType,
                    dogSize,
                    packageType,
                    addons: selectedAddons,
                    price: calculatedEstimate.totalEstimate
                  })}
                >
                  <Calendar size={18} /> Reserve Online Slot
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .grooming-estimator-section {
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--sage-bg) 100%);
        }

        .estimator-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: start;
        }

        .estimator-form {
          padding: 36px;
        }

        .form-group {
          margin-bottom: 28px;
        }

        .group-label {
          display: block;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.05rem;
          margin-bottom: 14px;
          color: var(--text-main);
        }

        .toggle-btn-group {
          display: flex;
          gap: 12px;
        }

        .toggle-option {
          flex: 1;
          padding: 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          background: #FFFFFF;
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all var(--transition-fast);
        }

        .toggle-option.selected {
          border-color: var(--emerald-primary);
          background: var(--emerald-light);
          color: var(--emerald-primary);
          box-shadow: 0 4px 12px rgba(30, 70, 56, 0.1);
        }

        .size-options-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .size-card {
          padding: 12px 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          background: #FFFFFF;
          text-align: left;
          display: flex;
          flex-direction: column;
          transition: all var(--transition-fast);
        }

        .size-card.selected {
          border-color: var(--emerald-primary);
          background: var(--emerald-light);
        }

        .size-title {
          font-weight: 800;
          font-size: 0.85rem;
          color: var(--emerald-primary);
        }

        .size-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .package-options-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .package-card {
          padding: 16px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          background: #FFFFFF;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .package-card.selected {
          border-color: var(--emerald-primary);
          background: var(--emerald-light);
          box-shadow: 0 6px 16px rgba(30, 70, 56, 0.1);
        }

        .pkg-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .pkg-header strong {
          font-size: 0.9375rem;
        }

        .package-card p {
          font-size: 0.8125rem;
          color: var(--text-muted);
        }

        .addons-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .addon-checkbox-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          background: #FFFFFF;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .addon-checkbox-item.checked {
          border-color: var(--emerald-primary);
          background: var(--emerald-light);
        }

        .checkbox-box {
          width: 20px;
          height: 20px;
          border-radius: 4px;
          border: 2px solid var(--sage-border);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
        }

        .addon-checkbox-item.checked .checkbox-box {
          background: var(--emerald-primary);
          border-color: var(--emerald-primary);
        }

        .addon-name {
          flex: 1;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .addon-price {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--emerald-primary);
        }

        .summary-card {
          padding: 32px;
          position: sticky;
          top: 100px;
        }

        .summary-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .photo-preview {
          margin-bottom: 20px;
          border-radius: var(--radius-sm);
          overflow: hidden;
        }

        .spa-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .summary-breakdown {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .summary-total-box {
          background: var(--emerald-primary);
          color: #FFFFFF;
          padding: 20px;
          border-radius: var(--radius-sm);
          text-align: center;
          margin-top: 10px;
        }

        .total-label {
          font-size: 0.8125rem;
          opacity: 0.9;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .total-amount {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin: 4px 0;
        }

        .total-note {
          font-size: 0.7rem;
          opacity: 0.75;
        }

        @media (max-width: 992px) {
          .estimator-grid {
            grid-template-columns: 1fr;
          }
          .package-options-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
