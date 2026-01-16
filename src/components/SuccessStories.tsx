import React from 'react';
import { TrendingUp, Award, Heart, Users } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      name: 'Lakshmi Devi',
      village: 'Guntur District',
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=300&fit=crop',
      story: 'After attending SMILE\'s dairy management training, Lakshmi increased her daily milk yield by 40% through improved feeding practices and regular health monitoring.',
      achievement: 'Milk yield increased from 8L to 11.2L per day',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    },
    {
      name: 'Ravi Kumar',
      village: 'Visakhapatnam District',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1595147389795-37094173bfd8?w=400&h=300&fit=crop',
      story: 'SMILE\'s vaccination awareness program helped Ravi prevent disease outbreaks in his herd of 25 cattle, saving him thousands in veterinary treatment costs.',
      achievement: 'Zero disease outbreaks in 18 months',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
    },
    {
      name: 'Padma Self-Help Group',
      village: 'Krishna District',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop',
      story: 'This women\'s group transformed their village economy by implementing SMILE\'s goat rearing techniques, creating livelihood opportunities for 30 families.',
      achievement: 'Created sustainable income for 30 families',
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
    },
    {
      name: 'Narasimha Reddy',
      village: 'Chittoor District',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop',
      story: 'Through SMILE\'s breeding management training, Narasimha achieved a 90% conception rate in his dairy farm, significantly improving his farm\'s productivity.',
      achievement: 'Conception rate improved to 90%',
      color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
    }
  ];

  return (
    <section id="success-stories" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real stories of transformation from farmers across Andhra Pradesh who have benefited from SMILE's training and awareness programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full ${story.color} flex items-center justify-center mr-4`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {story.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {story.village}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {story.story}
                  </p>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      Key Achievement:
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {story.achievement}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to share your success story?
          </p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 font-medium"
          >
            Submit Your Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
