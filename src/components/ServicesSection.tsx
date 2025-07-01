
import React, { useEffect, useRef, useState } from 'react';
import { Monitor, Computer, Zap, Code, Database, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ServicesSection: React.FC = () => {
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

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: t('services.web.title'),
      description: t('services.web.description'),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: <Computer className="w-8 h-8" />,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: t('services.api.title'),
      description: t('services.api.description'),
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: t('services.backend.title'),
      description: t('services.backend.description'),
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: t('services.optimization.title'),
      description: t('services.optimization.description'),
      color: 'from-teal-500 to-blue-500',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20'
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="section-padding bg-gray-50 dark:bg-gray-900/50"
      aria-labelledby="services-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 
            id="services-heading"
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 card-hover h-full">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${service.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-transparent bg-gradient-to-r ${service.color} bg-clip-text`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-apple-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl bg-gradient-to-br ${service.color} -z-10 blur-xl scale-95`} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-apple-blue to-apple-purple rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Gotowy na współpracę?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Skontaktuj się ze mną, aby omówić Twój projekt. Razem stworzymy coś niesamowitego!
            </p>
            <button 
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-apple-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus-ring"
            >
              Rozpocznij projekt
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
