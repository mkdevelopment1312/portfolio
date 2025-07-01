
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: t('skills.languages'),
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'Python', level: 95, color: 'bg-yellow-500' },
        { name: 'JavaScript', level: 90, color: 'bg-yellow-400' },
        { name: 'Java', level: 85, color: 'bg-red-500' },
        { name: 'PHP', level: 80, color: 'bg-purple-500' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-500' },
      ]
    },
    {
      title: t('skills.frameworks'),
      color: 'from-green-500 to-teal-600',
      skills: [
        { name: 'React', level: 90, color: 'bg-cyan-500' },
        { name: 'Django', level: 85, color: 'bg-green-600' },
        { name: 'Flask', level: 90, color: 'bg-gray-700' },
        { name: 'Express.js', level: 80, color: 'bg-green-500' },
        { name: 'Spring', level: 75, color: 'bg-green-400' },
      ]
    },
    {
      title: t('skills.tools'),
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'Git', level: 90, color: 'bg-orange-500' },
        { name: 'Docker', level: 80, color: 'bg-blue-600' },
        { name: 'AWS', level: 75, color: 'bg-orange-400' },
        { name: 'Linux', level: 85, color: 'bg-yellow-600' },
        { name: 'API Development', level: 95, color: 'bg-purple-600' },
      ]
    },
    {
      title: t('skills.databases'),
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'PostgreSQL', level: 85, color: 'bg-blue-700' },
        { name: 'MongoDB', level: 80, color: 'bg-green-700' },
        { name: 'MySQL', level: 85, color: 'bg-orange-600' },
        { name: 'Redis', level: 75, color: 'bg-red-600' },
        { name: 'SQLite', level: 90, color: 'bg-blue-500' },
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="section-padding"
      aria-labelledby="skills-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 
            id="skills-heading"
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 card-hover">
                {/* Category Header */}
                <div className="mb-8">
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                    {category.title}
                  </h3>
                  <div className={`h-1 w-16 bg-gradient-to-r ${category.color} rounded-full`} />
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className={`transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                      style={{ animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 0.2 + skillIndex * 0.1 + 0.5}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className={`mt-16 text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Dodatkowe technologie
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'Machine Learning', 'AI Development', 'Web Scraping', 'Automation',
              'RESTful APIs', 'GraphQL', 'WebSockets', 'Microservices',
              'CI/CD', 'Testing', 'Responsive Design', 'SEO Optimization',
              'Cache Strategies', 'Authentication', 'Payment Integration', 'Cloud Deployment'
            ].map((tech, index) => (
              <span
                key={tech}
                className={`px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-apple-blue hover:text-white transition-all duration-300 cursor-default transform hover:scale-105 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${1 + index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
