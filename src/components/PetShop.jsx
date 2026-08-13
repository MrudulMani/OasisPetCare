import React, { useState } from 'react';
import { SHOP_PRODUCTS, BUSINESS_INFO } from '../data/servicesData';
import { ShoppingBag, MessageCircle, Check, Tag } from 'lucide-react';

export default function PetShop() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Dog Food', 'Cat Care', 'Grooming', 'Accessories', 'Healthcare'];

  const filteredProducts = SHOP_PRODUCTS.filter(item => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <section className="section pet-shop-section" id="pet-shop">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Curated Nutrition & Accessories</span>
          <h2>Oasis Pet Shop & Supplies</h2>
          <p>Explore our handpicked selection of vet-approved pet foods, anti-tick grooming supplies, premium cat litter, and durable accessories.</p>
        </div>

        {/* Category Pills */}
        <div className="shop-category-bar">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`shop-cat-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="shop-grid">
          {filteredProducts.map(prod => (
            <div key={prod.id} className="product-card glass-card">
              <div className="prod-badge">{prod.category}</div>
              <div className="prod-emoji-frame">{prod.image}</div>
              <h3 className="prod-name">{prod.name}</h3>
              <p className="prod-desc">{prod.desc}</p>
              
              <div className="prod-footer">
                <div className="prod-price">{prod.price}</div>
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Oasis Pet Care! I am inquiring about product: ${prod.name} (${prod.price})`)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp btn-sm"
                >
                  <MessageCircle size={14} /> Inquire
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="shop-banner glass-card">
          <div className="banner-text">
            <h3>Looking for specific prescription food or medical supplies?</h3>
            <p>Visit our store opposite Skyphool Fitness, Akshayanagar or message us on WhatsApp for home delivery assistance.</p>
          </div>
          <a 
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello! I want to check availability of a specific pet product/medication.")}`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            <ShoppingBag size={18} /> WhatsApp Store Order
          </a>
        </div>
      </div>

      <style>{`
        .pet-shop-section {
          background-color: var(--bg-primary);
        }

        .shop-category-bar {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .shop-cat-btn {
          padding: 8px 20px;
          border-radius: var(--radius-full);
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--text-muted);
          transition: all var(--transition-fast);
        }

        .shop-cat-btn.active {
          background: var(--emerald-primary);
          color: #FFFFFF;
          border-color: var(--emerald-primary);
        }

        .shop-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 28px;
          margin-bottom: 50px;
        }

        .product-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .prod-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          background: var(--emerald-light);
          color: var(--emerald-primary);
        }

        .prod-emoji-frame {
          font-size: 3.5rem;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
          margin-bottom: 16px;
        }

        .prod-name {
          font-size: 1.15rem;
          margin-bottom: 8px;
        }

        .prod-desc {
          font-size: 0.875rem;
          color: var(--text-muted);
          margin-bottom: 20px;
          flex: 1;
        }

        .prod-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-light);
          padding-top: 14px;
        }

        .prod-price {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--emerald-primary);
        }

        .shop-banner {
          padding: 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: linear-gradient(135deg, var(--emerald-light), #FFFFFF);
          border: 1px solid var(--sage-border);
        }

        .banner-text h3 {
          font-size: 1.35rem;
          margin-bottom: 6px;
        }

        .banner-text p {
          color: var(--text-muted);
          font-size: 0.9375rem;
        }

        @media (max-width: 768px) {
          .shop-banner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
