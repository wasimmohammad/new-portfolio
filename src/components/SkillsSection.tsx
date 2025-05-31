import React, { useState } from "react";
import {
  Layout,
  Server,
  Database,
  SlidersHorizontal,
} from "lucide-react";

interface Skill {
  name: string;
  image: string;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}


const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: <Layout size={24} />,
      skills: [
        {
          name: "HTML",
          image:
            "https://res.cloudinary.com/wasimmohammad/image/upload/v1737625548/portfolio/html_h1mbqf.png",
        },
        {
          name: "CSS",
          image:
            "https://res.cloudinary.com/wasimmohammad/image/upload/v1737625547/portfolio/css_uyxud7.png",
        },
        {
          name: "JavaScript",
          image:
            "https://res.cloudinary.com/wasimmohammad/image/upload/v1737625548/portfolio/javascript_gjfssy.png",
        },
        {
          name: "React JS",
          image:
            "https://res.cloudinary.com/wasimmohammad/image/upload/v1737625548/portfolio/react_bbyhi3.png",
        },
        {
          name: "TypeScript",
          image:
            "https://res.cloudinary.com/wasimmohammad/image/upload/v1747723888/portfolio/typescript_if181z.png",
        },
        {
          name: "Tailwind CSS",
          image:
            "https://res.cloudinary.com/wasimmohammad/image/upload/v1747723888/portfolio/tailwind_yrxdlr.png",
        },
        {
          name: "Wordpress",
          image:
            "https://res.cloudinary.com/wasimmohammad/image/upload/v1747723888/portfolio/wordpress_kg0kzb.png",
        },
        {
          name: "Next JS",
          image:
            "https://res.cloudinary.com/wasimmohammad/image/upload/v1747724392/portfolio/next_f95aas.png",
        },
      ],
    },
    {
      name: "Backend",
      icon: <Server size={24} />,
      skills: [
        {
          name: "Node JS",
          image:
            "https://res.cloudinary.com/wasimmohammad/image/upload/v1737625548/portfolio/nodejs_lmsnae.png",
        },
        {
          name: "Python",
          image:
            "https://res.cloudinary.com/wasimmohammad/image/upload/v1737625548/portfolio/python_mbqxel.png",
        },
        {
          name: "RESTfull API",
          image:
            "https://res.cloudinary.com/wasimmohammad/image/upload/v1747723888/portfolio/API_b3eien.png",
        },
      ],
    },
    {
      name: "Databases",
      icon: <Database size={24} />,
      skills: [
        {
          name: "MySQL",
          image:
            "https://res.cloudinary.com/wasimmohammad/image/upload/v1737625549/portfolio/sql_wskqjr.png",
        },
      ],
    },
    {
      name: "Other",
      icon: <SlidersHorizontal size={24} />,
      skills: [
        {
          name: "Git",
          image:
            "https://res.cloudinary.com/wasimmohammad/image/upload/v1737625548/portfolio/git_fssilu.png",
        },
        {
          name: "GitHub",
          image:
            "https://res.cloudinary.com/wasimmohammad/image/upload/v1737625547/portfolio/github_ibwkqz.png",
        },
        {
          name: "NPM",
          image:
            "https://res.cloudinary.com/wasimmohammad/image/upload/v1737625547/portfolio/npm_tdyd0a.png",
        },
        {
          name: "Docker",
          image:
            "https://res.cloudinary.com/wasimmohammad/image/upload/v1737625547/portfolio/docker_xawdij.png",
        },
          {
          name: "Visual Studio",
          image:
            "https://res.cloudinary.com/wasimmohammad/image/upload/v1737625549/portfolio/visual-studio-code_xeurfq.png",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            I've worked with a wide range of technologies in the web development
            world. Here's an overview of my technical expertise and
            capabilities.
          </p>
        </div>

        {/* Skills categories tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm sm:text-base transition-all duration-300 ${
                activeCategory === index
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
            {skillCategories[activeCategory].icon}
            <span>{skillCategories[activeCategory].name} Skills</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
            {skillCategories[activeCategory].skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 text-blue-600 dark:text-blue-400">
                    <img className="w-24" src={skill.image} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
