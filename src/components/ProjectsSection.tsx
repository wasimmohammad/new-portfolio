import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
}

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Sahayatha Welfare Society",
      description: "Sahayatha works to break the cycle of poverty by providing education, resources, and community support across India.",
      image: "https://res.cloudinary.com/wasimmohammad/image/upload/v1747642622/sahayatha/sahayatha-landing_rz6fmo.webp",
      tags: ["React", "TypeScript", "Tailwind CSS", "Frontend"],
      liveLink: "https://sahayatha.in/",
      githubLink: "https://github.com/wasimmohammad/sahayatha.git",
    },
    {
      id: 2,
      title: "My Tag Tees",
      description: "Premium quality custom t-shirts for events, corporations, and individuals.",
      image: "https://res.cloudinary.com/wasimmohammad/image/upload/v1747642011/MyTagTees/maytagtees-landing_ooruuv.webp",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      liveLink: "https://mytagtees.in/",
      githubLink: "https://github.com/wasimmohammad/mytagtees.git",
    },
    {
      id: 3,
      title: "Tech Synergy Sources",
      description: "IT Consultancy and Services",
      image: "https://res.cloudinary.com/wasimmohammad/image/upload/v1748672359/portfolio/TechSynergy_rhlqwr.webp",
      tags: ["Wordpress"],
      liveLink: "https://techsynergysources.com/",
      githubLink: "https://github.com/wasimmohammad/",
    },
    {
      id: 4,
      title: "Atlas",
      description: "Explore World Countries",
      image: "https://res.cloudinary.com/wasimmohammad/image/upload/v1747743704/portfolio/atlas_hkbpk8.webp",
      tags: ["React", "JavaScript"],
      liveLink: "https://atlas.wasimakram.in/",
      githubLink: "https://github.com/wasimmohammad/atlas.git",
    },

  ];

  const allTags = ['all', ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  
  const filteredProjects = filter === 'all' 
    ? projects : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Clients & Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Check out some of my recent work.
          </p>
        </div>


        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      <span>Live Link</span>
                    </a>
                  )}
                  
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      <span>View Github Repo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/wasimmohammad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-lg transition duration-300 font-medium"
          >
            <Github size={20} className="mr-2" />
            <span>See more on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;