import React from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-green-600 dark:text-green-400">SMILE</span>
          </h2>
          <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            SMILE is a state-sponsored veterinary awareness and livestock development organisation in Andhra Pradesh, 
            established with the mission of strengthening rural livelihoods through scientific animal husbandry practices, 
            preventive healthcare, and continuous farmer education.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            The organisation works closely with farmers, livestock owners, dairy cooperatives, self-help groups, and rural 
            communities to promote sustainable and ethical animal rearing practices. By combining field-level outreach with 
            structured training programmes, SMILE acts as a bridge between modern veterinary science and traditional farming communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Vision</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To build a resilient rural ecosystem where farmers practice scientifically informed, humane, and sustainable 
              animal husbandry, leading to improved livestock productivity, better income stability, and enhanced food 
              security across Andhra Pradesh.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mission</h3>
            </div>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Create widespread awareness about animal health and disease prevention</li>
              <li>• Provide practical training to farmers and livestock caretakers</li>
              <li>• Reduce livestock mortality through preventive healthcare education</li>
              <li>• Promote ethical treatment and welfare of animals</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Key Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Heart size={48} className="mx-auto mb-3 text-green-600 dark:text-green-400" />
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Animal Health</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Disease prevention, vaccination awareness, and biosecurity measures
              </p>
            </div>
            <div className="text-center">
              <Users size={48} className="mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Farmer Education</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Structured training programs and practical skill development
              </p>
            </div>
            <div className="text-center">
              <Target size={48} className="mx-auto mb-3 text-purple-600 dark:text-purple-400" />
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Productivity</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Scientific practices to improve milk yield and livestock health
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
