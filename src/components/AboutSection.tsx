import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Bio Content */}
          <div className="lg:w-2/3 w-full">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Frontend Developer
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate frontend developer with 3+ years of experience crafting engaging digital experiences. 
              My journey in web development began with a curiosity about how websites work.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Education</h4>
                <ul className="space-y-2">
                  <li className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Bachelors in Electrical & Electronics Engineering</span><br/>
                    <span className="text-sm">Chaitanya Engineering College</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Experience</h4>
                <ul className="space-y-2">
                  <li className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Frontend Developer</span><br/>
                    <span className="text-sm">Cloud Shift Technologies, Oct - 2022 to Present</span>
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Consultant Frontend Developer</span><br/>
                    <span className="text-sm">Suprasoft Technologies Pvt Ltd, May - 2022 to Oct - 2022</span>
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Web Developer</span><br/>
                    <span className="text-sm">Webysys International LLC, Dec - 2021 to Apr - 2022</span>
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Wordpress Developer</span><br/>
                    <span className="text-sm">Webysys International LLC, Jan - 2021 to Nov - 2021</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 font-medium"
            >
              Let's Work Together
            </a>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/3 w-full">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-lg transform translate-x-3 translate-y-3"></div>
              <div className="relative border-4 border-white dark:border-gray-800 shadow-lg rounded-lg overflow-hidden aspect-square">
                <img 
                  src="https://res.cloudinary.com/wasimmohammad/image/upload/v1747675140/portfolio/wasim_v2emal.webp" 
                  alt="Professional portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;