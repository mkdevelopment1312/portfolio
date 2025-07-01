
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Globe, Calendar, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection: React.FC = () => {
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

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.location.title'),
      value: t('contact.location.value'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t('contact.languages.title'),
      value: t('contact.languages.value'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: t('contact.availability.title'),
      value: t('contact.availability.value'),
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section-padding"
      aria-labelledby="contact-heading"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h2 
                id="contact-heading"
                className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
              >
                {t('contact.title')}
              </h2>
              <p className="text-xl text-apple-blue font-medium">
                {t('contact.subtitle')}
              </p>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('contact.description')}
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title}
                  className={`flex items-center space-x-4 transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl text-white`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {info.title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className={`pt-8 transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <a
                href="mailto:aleksander.kowalski.dev@gmail.com"
                className="inline-flex items-center space-x-3 btn-primary text-lg"
                aria-label={t('contact.email')}
              >
                <Mail className="w-6 h-6" />
                <span>{t('contact.email')}</span>
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Contact Card */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center space-y-2">
                    <div className="w-20 h-20 bg-gradient-to-r from-apple-blue to-apple-purple rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                      AK
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Aleksander Kowalski
                    </h3>
                    <p className="text-apple-blue font-medium">
                      Full Stack Developer
                    </p>
                  </div>

                  {/* Contact Methods */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <Mail className="w-5 h-5 text-apple-blue" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">
                          aleksander.kowalski.dev@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <MapPin className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Lokalizacja</p>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">
                          Kraków, Polska
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <Calendar className="w-5 h-5 text-purple-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Dostępność</p>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">
                          Otwarte na nowe projekty
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="text-center p-4 bg-gradient-to-r from-apple-blue/10 to-apple-purple/10 rounded-xl border border-apple-blue/20">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      ⚡ Średni czas odpowiedzi
                    </p>
                    <p className="text-lg font-bold text-apple-blue">
                      &lt; 24 godziny
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-apple-blue/20 to-apple-purple/20 rounded-3xl backdrop-blur-sm animate-float" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-3xl backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
