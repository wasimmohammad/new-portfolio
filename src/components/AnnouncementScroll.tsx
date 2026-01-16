import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const AnnouncementScroll: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const announcements = [
    {
      text: '🎓 New batch of Dairy Management Training starting February 15, 2026 - Register Now!',
      link: '#training'
    },
    {
      text: '📢 Free Veterinary Health Camp in Guntur District on January 25, 2026',
      link: '#contact'
    },
    {
      text: '🏆 SMILE Success Story Competition - Submit your story and win prizes!',
      link: '#success-stories'
    },
    {
      text: '📚 Latest E-Magazine January 2026 Edition Now Available - Download Free',
      link: '#emagazine'
    },
    {
      text: '💉 Government Vaccination Drive - Free Vaccines Available at All Centers',
      link: '#contact'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 5000); // Change announcement every 5 seconds

    return () => clearInterval(timer);
  }, [announcements.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md" role="banner" aria-live="polite" aria-label="Announcements">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center flex-1 overflow-hidden">
            <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-bold mr-4 flex-shrink-0" aria-label="Latest news">
              LATEST
            </span>
            <a 
              href={announcements[currentIndex].link}
              className="hover:underline animate-fadeIn"
              aria-label={`Current announcement: ${announcements[currentIndex].text}`}
            >
              {announcements[currentIndex].text}
            </a>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close announcements banner"
          >
            <X size={20} />
          </button>
        </div>
      </div>
      
      {/* Progress indicator dots */}
      <div className="flex justify-center gap-2 pb-2">
        {announcements.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to announcement ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AnnouncementScroll;
