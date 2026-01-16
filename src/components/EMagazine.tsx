import React from 'react';
import { BookOpen, Download } from 'lucide-react';

const EMagazine: React.FC = () => {
  const magazines = [
    {
      title: 'SMILE Insights - January 2026',
      cover: 'https://images.unsplash.com/photo-1586339949216-35c2747cc8e6?w=400&h=500&fit=crop',
      description: 'New Year Special: Trends in Modern Dairy Management',
      date: 'January 2026',
      pages: '32 pages'
    },
    {
      title: 'SMILE Insights - December 2025',
      cover: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=500&fit=crop',
      description: 'Year-end Review: Success Stories from Rural Andhra Pradesh',
      date: 'December 2025',
      pages: '28 pages'
    },
    {
      title: 'SMILE Insights - November 2025',
      cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=500&fit=crop',
      description: 'Focus: Disease Prevention in Winter Season',
      date: 'November 2025',
      pages: '30 pages'
    },
    {
      title: 'SMILE Insights - October 2025',
      cover: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=400&h=500&fit=crop',
      description: 'Special Edition: Breeding and Reproductive Health',
      date: 'October 2025',
      pages: '35 pages'
    }
  ];

  return (
    <section id="emagazine" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen size={40} className="text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              E-Magazine
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay updated with SMILE Insights - our monthly digital magazine featuring expert articles, farmer interviews, technical guides, and the latest developments in livestock management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {magazines.map((magazine, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img 
                  src={magazine.cover} 
                  alt={magazine.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {magazine.pages}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {magazine.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {magazine.description}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                  {magazine.date}
                </p>
                
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition duration-300 font-medium">
                    <Download size={16} className="mr-2" />
                    Download
                  </button>
                  <button className="flex-1 px-3 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white text-sm rounded-lg transition duration-300 font-medium">
                    Read Online
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Subscribe to SMILE Insights
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Get our monthly magazine delivered directly to your inbox. Stay informed about the latest trends, techniques, and success stories in livestock management.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white"
              />
              <button 
                type="submit"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMagazine;
