import React from 'react';
import { ExternalLink } from 'lucide-react';

const UsefulLinks: React.FC = () => {
  const linkCategories = [
    {
      title: 'Government Departments',
      links: [
        { name: 'Department of Animal Husbandry, AP', url: 'https://ahdap.gov.in/' },
        { name: 'Ministry of Fisheries, Animal Husbandry & Dairying', url: 'https://dahd.nic.in/' },
        { name: 'National Dairy Development Board', url: 'https://www.nddb.coop/' },
        { name: 'Indian Council of Agricultural Research', url: 'https://icar.org.in/' }
      ]
    },
    {
      title: 'Veterinary Institutions',
      links: [
        { name: 'NTR College of Veterinary Science', url: 'https://cvsc.svvu.edu.in/' },
        { name: 'College of Veterinary Science, Tirupati', url: 'https://svvu.edu.in/' },
        { name: 'Indian Veterinary Research Institute', url: 'https://www.ivri.nic.in/' },
        { name: 'National Institute of Animal Nutrition', url: 'https://www.nianp.res.in/' }
      ]
    },
    {
      title: 'Cooperatives & Federations',
      links: [
        { name: 'AP Dairy Development Cooperative Federation', url: 'https://www.vijayamilk.com/' },
        { name: 'National Cooperative Dairy Federation', url: 'https://www.ncdc.in/' },
        { name: 'Vijaya Dairy', url: 'https://www.vijayamilk.com/' },
        { name: 'Heritage Foods', url: 'https://www.heritagefoods.in/' }
      ]
    },
    {
      title: 'Resources & Information',
      links: [
        // Note: These are placeholder URLs - update with actual resource links
        { name: 'Livestock Census Data', url: 'https://dahd.nic.in/about-us/divisions/statistics' },
        { name: 'Vaccination Schedules', url: 'https://dahd.nic.in/' },
        { name: 'Government Schemes & Subsidies', url: 'https://dahd.nic.in/schemes/programmes' },
        { name: 'Weather & Advisory Services', url: 'https://mausam.imd.gov.in/' }
      ]
    }
  ];

  return (
    <section id="useful-links" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Useful Links
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Quick access to important resources, government departments, veterinary institutions, and cooperative organizations supporting livestock development in Andhra Pradesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {linkCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.links.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.url}
                      className="flex items-center justify-between text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink 
                        size={16} 
                        className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Emergency Helpline
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            For urgent veterinary assistance or animal health emergencies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white dark:bg-gray-900 rounded-lg px-6 py-3">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Toll-Free Number</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">1800-XXX-XXXX</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg px-6 py-3">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">WhatsApp Support</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">+91-XXXXX-XXXXX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsefulLinks;
