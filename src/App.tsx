import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import OrganizationStructure from './components/OrganizationStructure';
import TrainingCalendar from './components/TrainingCalendar';
import SuccessStories from './components/SuccessStories';
import KnowledgeCentre from './components/KnowledgeCentre';
import EMagazine from './components/EMagazine';
import UsefulLinks from './components/UsefulLinks';
import PhotoGallery from './components/PhotoGallery';
import ContactSection from './components/ContactSection';
import NotificationSubscription from './components/NotificationSubscription';
import AnnouncementScroll from './components/AnnouncementScroll';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar isScrolled={isScrolled} />
        <AnnouncementScroll />
        <main>
          <HeroSection />
          <AboutSection />
          <OrganizationStructure />
          <TrainingCalendar />
          <SuccessStories />
          <KnowledgeCentre />
          <EMagazine />
          <UsefulLinks />
          <PhotoGallery />
          <NotificationSubscription />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;