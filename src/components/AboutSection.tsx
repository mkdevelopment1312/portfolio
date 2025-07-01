
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection: React.FC = () => {
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

  const highlights = [
    t('about.highlight1'),
    t('about.highlight2'),
    t('about.highlight3')
  ];

  const stats = [
    {
      icon: <MapPin className="w-6 h-6" />,
      label: t('about.location.title'),
      value: t('about.location.value')
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: t('about.age'),
      value: '17'
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: t('about.experience'),
      value: '3+'
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding bg-gray-50 dark:bg-gray-900/50"
      aria-labelledby="about-heading"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h2 
                id="about-heading"
                className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
              >
                {t('about.title')}
              </h2>
              <p className="text-xl text-apple-blue font-medium">
                {t('about.subtitle')}
              </p>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-2 h-2 bg-apple-blue rounded-full mt-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-apple-blue/10 text-apple-blue rounded-xl mb-3">
                    {stat.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
                <div className="space-y-6">
                  {/* Code Preview */}
                  <div className="bg-gray-900 dark:bg-black rounded-2xl p-6 font-mono text-sm overflow-hidden">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <div className="space-y-2 text-gray-300">
                      <div className="text-blue-400">class <span className="text-green-400">Developer</span>:</div>
                      <div className="ml-4 text-purple-400">def __init__(self):</div>
                      <div className="ml-8">self.name = <span className="text-yellow-400">"Aleksander"</span></div>
                      <div className="ml-8">self.age = <span className="text-cyan-400">17</span></div>
                      <div className="ml-8">self.location = <span className="text-yellow-400">"Kraków"</span></div>
                      <div className="ml-8">self.passion = <span className="text-yellow-400">"Coding"</span></div>
                    </div>
                  </div>

                  {/* Tech Stack Visual */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
                      <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
                      <div className="h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full" />
                      <div className="h-2 bg-gradient-to-r from-red-400 to-red-600 rounded-full" />
                      <div className="h-2 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-apple-blue/20 rounded-2xl backdrop-blur-sm animate-float" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-apple-purple/20 rounded-2xl backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
