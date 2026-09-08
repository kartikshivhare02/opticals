import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroAnimation from './components/HeroAnimation';
import ExplodedViewSection from './components/ExplodedViewSection';
import ShowcaseSection from './components/ShowcaseSection';
import BrandGrid from './components/BrandGrid';
import Footer from './components/Footer';
import VipFittingModal from './components/VipFittingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  const handleOpenBooking = (data = null) => {
    setBookingData(data);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingData(null);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1918] selection:bg-[#B89758]/20 selection:text-[#1A1918]">
      
      {/* Minimalist Centered Luxury Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* 240-Frame Apple-Grade Hero Scroll Animation */}
      <HeroAnimation onOpenBooking={() => handleOpenBooking()} />

      {/* Exploded Glass View: Seamless with Background */}
      <ExplodedViewSection />

      {/* Primary Showcase Page: 2026 Archive & Sabae Craftsmanship */}
      <main className="relative z-20">
        <ShowcaseSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Brand Grid: Ray-Ban, Oakley, Meta, Tommy Hilfiger (No subtitles/titles) */}
      <BrandGrid />

      {/* Refined Minimalist Luxury Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* VIP Private Fitting Reservation Modal */}
      <VipFittingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialData={bookingData}
      />

    </div>
  );
}
