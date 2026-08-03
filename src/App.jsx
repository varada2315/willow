import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesStrip from './components/FeaturesStrip';
import RoomCategories from './components/RoomCategories';
import FeatureSpotlight from './components/FeatureSpotlight';
import GallerySection from './components/GallerySection';
import AmenitiesSection from './components/AmenitiesSection';
import LocationSection from './components/LocationSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TermsModal from './components/TermsModal';
import MobileStickyCTA from './components/MobileStickyCTA';

export default function App() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <div className="app-container">
      <Navbar onOpenTerms={() => setIsTermsOpen(true)} />
      <main>
        <HeroSection />
        <FeaturesStrip />
        <RoomCategories />
        <FeatureSpotlight />
        <GallerySection />
        <AmenitiesSection />
        <LocationSection />
        <ReviewsSection />
        <ContactSection onOpenTerms={() => setIsTermsOpen(true)} />
      </main>
      <Footer onOpenTerms={() => setIsTermsOpen(true)} />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <MobileStickyCTA />
    </div>
  );
}
