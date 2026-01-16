import React from 'react';
import { Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div className="flex-1">
            <a href="#home" className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4 block">
              SMILE
            </a>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              State-Sponsored Veterinary Awareness & Livestock Development Organisation, Andhra Pradesh
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Empowering farmers and enriching rural lives through scientific animal husbandry practices.
            </p>
          </div>
          
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <a 
                href="#about"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                About SMILE
              </a>
              <a 
                href="#organization"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Organization
              </a>
              <a 
                href="#training"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Training
              </a>
              <a 
                href="#success-stories"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Success Stories
              </a>
              <a 
                href="#knowledge-centre"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Resources
              </a>
              <a 
                href="#photo-gallery"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Gallery
              </a>
            </div>
          </div>

          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Contact</h4>
            <div className="text-gray-600 dark:text-gray-400 space-y-2">
              <p>Andhra Pradesh, India</p>
              <p>Email: info@smile-ap.org</p>
              <p>Phone: 1800-XXX-XXXX</p>
              <p>WhatsApp: +91-XXXXX-XXXXX</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} SMILE - All rights reserved
            </p>
            
            <p className="flex items-center text-gray-600 dark:text-gray-400">
              Made with <Heart size={16} className="mx-1 text-red-500" /> for Farmers of Andhra Pradesh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;