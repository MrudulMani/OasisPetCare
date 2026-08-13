import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/servicesData';
import { X, Calendar, Clock, User, Phone, MessageCircle, CheckCircle2, Heart, ArrowRight } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialService, initialGroomingData }) {
  const [serviceType, setServiceType] = useState(initialService?.title || 'Full Service Pet Grooming');
  const [petCategory, setPetCategory] = useState(initialGroomingData?.petType || 'dog');
  const [petName, setPetName] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppBookingLink = () => {
    const text = `Hello Oasis Pet Care! I would like to confirm an appointment:
- Service: ${serviceType}
- Pet: ${petCategory.toUpperCase()} (${petName ? `${petName} - ` : ''}${petBreed || 'Breed unstated'})
- Owner: ${ownerName || 'Pet Parent'} (${ownerPhone})
- Requested Date: ${preferredDate || 'Earliest available'} at ${preferredTime}
- Additional Notes: ${notes || 'None'}

Please confirm my appointment slot!`;

    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container booking-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <span className="badge badge-emerald">Instant Appointment Booking</span>
              <h2>Schedule Your Visit</h2>
              <p>Oasis Pet Care · Akshayanagar, Bengaluru</p>
            </div>

            <div className="form-sections">
              {/* Service Selection */}
              <div className="form-field">
                <label>Select Required Service</label>
                <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} required>
                  <option value="Full Service Pet Grooming">✂️ Dog / Cat Full Service Grooming</option>
                  <option value="Veterinary Consultation">🩺 Veterinary Doctor Consultation</option>
                  <option value="Pet Vaccination Routine">💉 Pet Vaccination Routine</option>
                  <option value="Bathing & Blow Dry">🛁 Bathing & Blow Dry</option>
                  <option value="Ear & Dental Care">🦷 Ear Cleaning & Tooth Brushing</option>
                  <option value="Emergency Care">⚡ Emergency & Urgent Care</option>
                  <option value="Veterinary Home Visit">🏡 Veterinary Home Visit</option>
                </select>
              </div>

              {/* Pet Details */}
              <div className="form-row">
                <div className="form-field">
                  <label>Pet Species</label>
                  <div className="radio-pills">
                    <button 
                      type="button" 
                      className={`pill-btn ${petCategory === 'dog' ? 'active' : ''}`}
                      onClick={() => setPetCategory('dog')}
                    >
                      🐕 Dog
                    </button>
                    <button 
                      type="button" 
                      className={`pill-btn ${petCategory === 'cat' ? 'active' : ''}`}
                      onClick={() => setPetCategory('cat')}
                    >
                      🐱 Cat
                    </button>
                  </div>
                </div>

                <div className="form-field">
                  <label>Pet Name & Breed</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Bruno (Golden Retriever)" 
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="form-row">
                <div className="form-field">
                  <label>Preferred Date</label>
                  <input 
                    type="date" 
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Preferred Time Slot</label>
                  <select value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)}>
                    <option value="09:30 AM">09:30 AM (Morning Slot)</option>
                    <option value="11:30 AM">11:30 AM (Mid-Day Slot)</option>
                    <option value="03:00 PM">03:00 PM (Afternoon Slot)</option>
                    <option value="06:00 PM">06:00 PM (Evening Slot)</option>
                    <option value="08:30 PM">08:30 PM (Night Slot - Quiet)</option>
                  </select>
                </div>
              </div>

              {/* Owner Info */}
              <div className="form-row">
                <div className="form-field">
                  <label>Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Phone / WhatsApp Number</label>
                  <input 
                    type="tel" 
                    placeholder="e.g. 9876543210" 
                    value={ownerPhone}
                    onChange={(e) => setOwnerPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label>Special Requests or Health Notes (Optional)</label>
                <textarea 
                  rows="2" 
                  placeholder="e.g. First time puppy, skin allergies, nervous with hair dryers..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="modal-footer-actions">
              <a 
                href={getWhatsAppBookingLink()}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
                style={{ flex: 1 }}
              >
                <MessageCircle size={18} /> Confirm via WhatsApp
              </a>
              <button type="submit" className="btn btn-primary">
                Book Request <ArrowRight size={18} />
              </button>
            </div>
          </form>
        ) : (
          <div className="success-state">
            <div className="success-icon">
              <CheckCircle2 size={48} color="#25D366" />
            </div>
            <h2>Appointment Request Received!</h2>
            <p>Thank you, <strong>{ownerName || 'Pet Parent'}</strong>! We have logged your request for <strong>{serviceType}</strong> on <strong>{preferredDate}</strong> at <strong>{preferredTime}</strong>.</p>
            
            <div className="success-whatsapp-prompt">
              <p>To receive an instant confirmation message on your phone, click below to open WhatsApp chat with Oasis Pet Care:</p>
              <a 
                href={getWhatsAppBookingLink()}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
                style={{ width: '100%', marginTop: '12px' }}
              >
                <MessageCircle size={20} /> Open WhatsApp Confirmation Chat
              </a>
            </div>

            <button className="btn btn-secondary" style={{ marginTop: '20px' }} onClick={onClose}>
              Close & Back to Site
            </button>
          </div>
        )}
      </div>

      <style>{`
        .booking-modal-content {
          max-width: 640px;
        }

        .modal-header {
          margin-bottom: 24px;
        }

        .modal-header h2 {
          font-size: 1.75rem;
          margin: 10px 0 4px;
        }

        .modal-header p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .form-sections {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 28px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-field label {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .form-field input, .form-field select, .form-field textarea {
          padding: 11px 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          background: var(--bg-primary);
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-main);
          outline: none;
          transition: all var(--transition-fast);
        }

        .form-field input:focus, .form-field select:focus, .form-field textarea:focus {
          border-color: var(--emerald-primary);
          background: #FFFFFF;
          box-shadow: 0 0 0 3px var(--border-focus);
        }

        .radio-pills {
          display: flex;
          gap: 8px;
        }

        .pill-btn {
          flex: 1;
          padding: 10px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          background: var(--bg-primary);
          font-weight: 700;
          font-size: 0.875rem;
          color: var(--text-muted);
          transition: all var(--transition-fast);
        }

        .pill-btn.active {
          border-color: var(--emerald-primary);
          background: var(--emerald-light);
          color: var(--emerald-primary);
        }

        .modal-footer-actions {
          display: flex;
          gap: 12px;
        }

        .success-state {
          text-align: center;
          padding: 20px 0;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .success-state h2 {
          font-size: 1.75rem;
          margin-bottom: 12px;
        }

        .success-state p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .success-whatsapp-prompt {
          background: var(--emerald-light);
          padding: 20px;
          border-radius: var(--radius-sm);
          margin-top: 24px;
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .modal-footer-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
