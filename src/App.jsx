import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatusBanner from './components/StatusBanner';
import ServiceExplorer from './components/ServiceExplorer';
import GroomingEstimator from './components/GroomingEstimator';
import VetSpotlight from './components/VetSpotlight';
import PetShop from './components/PetShop';
import Testimonials from './components/Testimonials';
import VisitPlanner from './components/VisitPlanner';
import NeighborhoodExplorer from './components/NeighborhoodExplorer';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [groomingData, setGroomingData] = useState(null);

  const handleOpenBooking = (service = null) => {
    setSelectedService(service);
    setBookingModalOpen(true);
  };

  const handleBookGroomingEstimate = (data) => {
    setGroomingData(data);
    setSelectedService({ title: 'Full Service Pet Grooming' });
    setBookingModalOpen(true);
  };

  return (
    <div className="app-main-wrapper">
      <Navbar onOpenBooking={() => handleOpenBooking()} />
      <main>
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <StatusBanner />
        <ServiceExplorer onSelectService={(service) => handleOpenBooking(service)} />
        <GroomingEstimator onBookEstimate={handleBookGroomingEstimate} />
        <VetSpotlight onOpenBooking={() => handleOpenBooking({ title: 'Veterinary Consultation' })} />
        <PetShop />
        <Testimonials />
        <VisitPlanner />
        <NeighborhoodExplorer onOpenBooking={() => handleOpenBooking()} />
      </main>
      <Footer />
      <FloatingActions />

      <BookingModal 
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedService}
        initialGroomingData={groomingData}
      />
    </div>
  );
}
