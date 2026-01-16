import React, { useState } from 'react';
import { Mail, MessageCircle, Bell, CheckCircle } from 'lucide-react';

const NotificationSubscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subscriptionType, setSubscriptionType] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscriptionToggle = (type: string) => {
    if (subscriptionType.includes(type)) {
      setSubscriptionType(subscriptionType.filter(t => t !== type));
    } else {
      setSubscriptionType([...subscriptionType, type]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send data to your backend
    // For demo: just show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
      setPhone('');
      setSubscriptionType([]);
    }, 3000);
  };

  return (
    <section id="subscribe" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Bell size={48} className="mx-auto mb-4 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Connected with SMILE
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Subscribe to receive timely updates about training programs, awareness camps, e-magazines, and important announcements directly to your email and WhatsApp.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 text-center">
              <CheckCircle size={64} className="mx-auto mb-4 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Successfully Subscribed!
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                You will now receive updates based on your preferences.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8">
              <div className="space-y-6">
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Mail size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>

                {/* WhatsApp Number Input */}
                <div>
                  <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <MessageCircle size={18} className="mr-2 text-green-600 dark:text-green-400" />
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>

                {/* Subscription Preferences */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    I want to receive updates about:
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { id: 'training', label: 'Training Programs' },
                      { id: 'awareness', label: 'Awareness Camps' },
                      { id: 'emagazine', label: 'E-Magazine Releases' },
                      { id: 'events', label: 'Events & Workshops' },
                      { id: 'success', label: 'Success Stories' },
                      { id: 'resources', label: 'New Resources' }
                    ].map(option => (
                      <label 
                        key={option.id}
                        className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={subscriptionType.includes(option.id)}
                          onChange={() => handleSubscriptionToggle(option.id)}
                          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-3 text-gray-700 dark:text-gray-300">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition duration-300 font-medium text-lg"
                >
                  Subscribe to Notifications
                </button>

                <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                  We respect your privacy. You can unsubscribe at any time.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NotificationSubscription;
