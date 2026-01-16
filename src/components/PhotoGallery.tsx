import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoGallery: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'training', name: 'Training Sessions' },
    { id: 'awareness', name: 'Awareness Camps' },
    { id: 'field', name: 'Field Visits' },
    { id: 'events', name: 'Events & Ceremonies' }
  ];

  const photos = [
    {
      id: 1,
      category: 'training',
      title: 'Dairy Management Workshop',
      location: 'Vijayawada',
      date: 'Jan 2026',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      category: 'awareness',
      title: 'Village Awareness Camp',
      location: 'Guntur District',
      date: 'Dec 2025',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      category: 'field',
      title: 'Farm Health Assessment',
      location: 'Krishna District',
      date: 'Nov 2025',
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      category: 'training',
      title: 'Breeding Techniques Training',
      location: 'Tirupati',
      date: 'Oct 2025',
      image: 'https://images.unsplash.com/photo-1595147389795-37094173bfd8?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      category: 'events',
      title: 'Annual Farmer Meet',
      location: 'Kakinada',
      date: 'Sep 2025',
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      category: 'awareness',
      title: 'Vaccination Drive',
      location: 'Visakhapatnam',
      date: 'Aug 2025',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=400&fit=crop'
    },
    {
      id: 7,
      category: 'field',
      title: 'Mobile Veterinary Unit',
      location: 'Chittoor District',
      date: 'Jul 2025',
      image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&h=400&fit=crop'
    },
    {
      id: 8,
      category: 'training',
      title: 'Women SHG Training',
      location: 'Guntur',
      date: 'Jun 2025',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop'
    }
  ];

  const filteredPhotos = currentCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === currentCategory);

  return (
    <section id="photo-gallery" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Photo Gallery
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Glimpses of our training programs, awareness campaigns, field visits, and community engagement activities across Andhra Pradesh.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setCurrentCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                currentCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <button 
                    className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 px-4 py-2 bg-white text-gray-900 rounded-lg font-medium"
                    aria-label={`View full size image of ${photo.title}`}
                  >
                    View Full Size
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {photo.title}
                </h3>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>{photo.location}</span>
                  <span>{photo.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <button className="flex items-center px-6 py-3 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg hover:shadow-md transition-shadow duration-300">
            <ChevronLeft size={20} className="mr-2" />
            Previous
          </button>
          <button className="flex items-center px-6 py-3 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg hover:shadow-md transition-shadow duration-300">
            Next
            <ChevronRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
