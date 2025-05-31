import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Frontend Developer';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [typedText]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-[url('https://res.cloudinary.com/wasimmohammad/image/upload/v1737627238/portfolio/landing-page-background_e8blg2.png')] bg-contain bg-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 -z-10"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-300/20 dark:bg-blue-600/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-purple-300/20 dark:bg-purple-600/10 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hello, I'm <span className="text-blue-600 dark:text-blue-400">Mohammad Wasim Akram</span>
          </h1>
          
          <div className="h-8 mb-6">
            <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
              {typedText}
              {!isTypingComplete && <span className="animate-pulse">|</span>}
            </h2>
          </div>
          
          <p className="max-w-2xl text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
            Experienced Frontend Developer, transforming ideas into interactive web designs.
            I create clean, responsive websites that are easy to use and work well on all devices. My goal is to build user-friendly designs that give a smooth experience. Let’s bring your ideas to life with code!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 font-medium"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg transition duration-300 font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
        aria-label="Scroll down to About section"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;