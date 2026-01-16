import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const OrganizationStructure: React.FC = () => {
  const structure = [
    {
      title: 'Governing Body',
      description: 'State-level oversight and policy guidance',
      icon: Users,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Executive Team',
      description: 'Program implementation and coordination',
      icon: Target,
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
    },
    {
      title: 'Field Teams',
      description: 'On-ground training and awareness programs',
      icon: Award,
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
    },
    {
      title: 'Support Staff',
      description: 'Administrative and technical support',
      icon: Heart,
      color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
    }
  ];

  return (
    <section id="organization" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Organization Structure
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            SMILE operates through a well-coordinated structure ensuring effective delivery of veterinary awareness and livestock development programs across Andhra Pradesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {structure.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mb-4`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Collaborative Network
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Government Partners
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Department of Animal Husbandry, Andhra Pradesh</li>
                <li>• Veterinary universities and colleges</li>
                <li>• Panchayati Raj institutions</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Community Partners
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Dairy cooperatives and milk federations</li>
                <li>• NGOs and rural development agencies</li>
                <li>• Women self-help groups</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationStructure;
