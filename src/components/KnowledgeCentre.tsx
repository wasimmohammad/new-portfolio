import React from 'react';
import { Download, FileText, BookOpen, Video } from 'lucide-react';

const KnowledgeCentre: React.FC = () => {
  const resources = [
    {
      category: 'Manuals & Guides',
      icon: BookOpen,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      items: [
        { title: 'Dairy Cattle Management Guide', size: '2.5 MB', format: 'PDF' },
        { title: 'Disease Prevention Manual', size: '1.8 MB', format: 'PDF' },
        { title: 'Feed Formulation Handbook', size: '3.2 MB', format: 'PDF' },
        { title: 'Breeding Best Practices', size: '2.1 MB', format: 'PDF' }
      ]
    },
    {
      category: 'Brochures & Leaflets',
      icon: FileText,
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      items: [
        { title: 'Vaccination Schedule Chart', size: '500 KB', format: 'PDF' },
        { title: 'Mastitis Prevention Tips', size: '400 KB', format: 'PDF' },
        { title: 'Deworming Guidelines', size: '450 KB', format: 'PDF' },
        { title: 'Mineral Mixture Usage', size: '380 KB', format: 'PDF' }
      ]
    },
    {
      category: 'Video Tutorials',
      icon: Video,
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      items: [
        { title: 'Proper Milking Techniques', size: '45 MB', format: 'MP4' },
        { title: 'Calf Management Series', size: '120 MB', format: 'MP4' },
        { title: 'Fodder Cultivation Methods', size: '68 MB', format: 'MP4' },
        { title: 'Heat Detection Guide', size: '35 MB', format: 'MP4' }
      ]
    }
  ];

  return (
    <section id="knowledge-centre" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Knowledge Centre
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Access our comprehensive library of educational materials, guides, and resources designed to help farmers improve livestock management practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {resources.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mr-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div 
                      key={idx}
                      className="bg-white dark:bg-gray-900 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex-1">
                          {item.title}
                        </h4>
                        <Download size={18} className="text-blue-600 dark:text-blue-400 cursor-pointer hover:text-blue-700 dark:hover:text-blue-300" />
                      </div>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <span className="mr-3">{item.format}</span>
                        <span>{item.size}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Regional Language Support
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-6 max-w-2xl mx-auto">
            All our resources are available in Telugu and English to ensure easy understanding and accessibility for all farmers across Andhra Pradesh.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 font-medium">
              Download in Telugu
            </button>
            <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition duration-300 font-medium">
              Download in English
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeCentre;
