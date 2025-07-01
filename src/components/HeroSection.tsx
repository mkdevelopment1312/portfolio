
import React, { useEffect, useState } from 'react';
import { ArrowDown, Brain, Cpu, Code, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      role="banner"
    >
      <div className="container-custom text-center relative z-10">
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
          {/* Greeting */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-blue-400 font-medium animate-fade-in">
              {t('hero.greeting')}
            </p>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-white mb-4 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                Kamil
              </span>
              <span className="block gradient-text animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
                mkdevelopment
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            {t('hero.subtitle')}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
            {t('hero.description')}
          </p>

          {/* Floating Tech Icons */}
          <div className="flex justify-center space-x-12 py-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-300"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 animate-float">
                <Brain className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-300"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
                <Cpu className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-300"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 animate-float" style={{ animationDelay: '1s' }}>
                <Code className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-300"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 animate-float" style={{ animationDelay: '1.5s' }}>
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-slide-in-up" style={{ animationDelay: '1.2s' }}>
            <button 
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary animate-pulse-glow"
              aria-label={t('hero.cta.hire')}
            >
              {t('hero.cta.hire')}
            </button>
            
            <button 
              onClick={() => {
                const projectsSection = document.querySelector('#projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-secondary"
              aria-label={t('hero.cta.projects')}
            >
              {t('hero.cta.projects')}
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-fade-in" style={{ animationDelay: '1.4s' }}>
            <button
              onClick={scrollToAbout}
              className="mx-auto block text-gray-400 hover:text-blue-400 transition-all duration-300 focus-ring rounded-full p-3 animate-bounce hover:scale-110"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
