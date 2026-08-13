import React, { useState } from 'react';
import { Clock, BarChart3, Heart, Info, CheckCircle2 } from 'lucide-react';

export default function VisitPlanner() {
  const [selectedDay, setSelectedDay] = useState('Mon');

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const hourlyData = [
    { hour: '9 AM', busy: 30 },
    { hour: '11 AM', busy: 65 },
    { hour: '1 PM', busy: 45 },
    { hour: '3 PM', busy: 55 },
    { hour: '5 PM', busy: 80 },
    { hour: '7 PM', busy: 70 },
    { hour: '9 PM', busy: 25 },
  ];

  return (
    <section className="section visit-planner-section">
      <div className="container">
        <div className="planner-card glass-card">
          <div className="planner-header">
            <div>
              <span className="badge badge-emerald">Stress-Free Visit Planning</span>
              <h2>Popular Times & Visit Duration</h2>
              <p>Planning a visit with an anxious or nervous pet? Check our daily activity patterns to choose the quietest window.</p>
            </div>
            <div className="duration-pill">
              <Clock size={16} color="var(--emerald-primary)" />
              <span>Typical Visit: <strong>10 – 45 Mins</strong></span>
            </div>
          </div>

          <div className="day-selector-bar">
            {days.map(d => (
              <button 
                key={d} 
                className={`day-btn ${selectedDay === d ? 'active' : ''}`}
                onClick={() => setSelectedDay(d)}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="chart-container">
            <div className="chart-bars">
              {hourlyData.map(h => (
                <div key={h.hour} className="bar-column">
                  <div className="bar-wrapper">
                    <div 
                      className={`bar-fill-column ${h.busy < 40 ? 'low-busy' : h.busy > 70 ? 'high-busy' : 'med-busy'}`}
                      style={{ height: `${h.busy}%` }}
                    >
                      <span className="bar-tooltip">{h.busy}% Capacity</span>
                    </div>
                  </div>
                  <span className="bar-label">{h.hour}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="planner-tips">
            <div className="tip-item">
              <CheckCircle2 size={18} color="#25D366" />
              <span><strong>9:00 PM - 10:00 PM:</strong> Usually quiet & peaceful for nervous cats or sensitive puppies.</span>
            </div>
            <div className="tip-item">
              <CheckCircle2 size={18} color="#25D366" />
              <span><strong>Morning Slots (9 AM - 10 AM):</strong> Ideal for fast vaccination routines and quick grooming drop-offs.</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .visit-planner-section {
          background-color: var(--bg-primary);
          padding-top: 20px;
        }

        .planner-card {
          padding: 40px;
          background: #FFFFFF;
          border: 1px solid var(--sage-border);
        }

        .planner-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .planner-header h2 {
          font-size: 2rem;
          margin: 10px 0 6px;
        }

        .planner-header p {
          color: var(--text-muted);
          font-size: 1rem;
        }

        .duration-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: var(--emerald-light);
          border-radius: var(--radius-full);
          font-size: 0.9rem;
          color: var(--emerald-primary);
        }

        .day-selector-bar {
          display: flex;
          gap: 8px;
          margin-bottom: 30px;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 14px;
        }

        .day-btn {
          padding: 8px 18px;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: all var(--transition-fast);
        }

        .day-btn.active {
          background: var(--emerald-primary);
          color: #FFFFFF;
        }

        .chart-container {
          height: 180px;
          margin-bottom: 30px;
          position: relative;
        }

        .chart-bars {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 100%;
          padding: 0 20px;
        }

        .bar-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          height: 100%;
          flex: 1;
        }

        .bar-wrapper {
          width: 28px;
          height: 140px;
          background: var(--bg-secondary);
          border-radius: var(--radius-xs);
          display: flex;
          align-items: flex-end;
          position: relative;
          overflow: visible;
        }

        .bar-fill-column {
          width: 100%;
          border-radius: var(--radius-xs);
          transition: height 0.4s ease;
          position: relative;
        }

        .bar-fill-column.low-busy {
          background: #25D366;
        }

        .bar-fill-column.med-busy {
          background: #D99B26;
        }

        .bar-fill-column.high-busy {
          background: #3B82F6;
        }

        .bar-label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .planner-tips {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          padding-top: 20px;
          border-top: 1px solid var(--border-light);
        }

        .tip-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .planner-tips {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
