import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const TrainingCalendar: React.FC = () => {
  const trainings = [
    {
      title: 'Cattle Rearing & Dairy Management',
      date: 'February 15-17, 2026',
      location: 'Vijayawada Training Centre',
      duration: '3 days',
      capacity: '50 farmers',
      topics: ['Scientific housing', 'Hygienic milking', 'Mastitis prevention', 'Calf management']
    },
    {
      title: 'Animal Nutrition & Feed Management',
      date: 'March 5-6, 2026',
      location: 'Guntur Agricultural Hub',
      duration: '2 days',
      capacity: '40 farmers',
      topics: ['Balanced diet formulation', 'Mineral supplementation', 'Fodder cultivation', 'Feed storage']
    },
    {
      title: 'Disease Prevention & Health Management',
      date: 'March 20-22, 2026',
      location: 'Tirupati Veterinary College',
      duration: '3 days',
      capacity: '60 farmers',
      topics: ['Vaccination schedules', 'Parasite control', 'Early symptom identification', 'Biosecurity measures']
    },
    {
      title: 'Breeding & Reproductive Health',
      date: 'April 10-11, 2026',
      location: 'Kakinada Field Station',
      duration: '2 days',
      capacity: '35 farmers',
      topics: ['Heat detection', 'Artificial insemination', 'Pregnancy care', 'Calving management']
    }
  ];

  return (
    <section id="training" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Training Programs & Annual Calendar
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join our structured training programs designed to empower farmers with practical knowledge and skills in modern animal husbandry practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {trainings.map((training, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {training.title}
              </h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
                  <span>{training.date}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
                  <span>{training.location}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Clock size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
                  <span>{training.duration}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Users size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
                  <span>{training.capacity}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Key Topics:
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {training.topics.map((topic, idx) => (
                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-400">
                      • {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-4 w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 font-medium">
                Register Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition duration-300 font-medium"
          >
            Request Custom Training for Your Group
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrainingCalendar;
