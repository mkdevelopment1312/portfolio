
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white" role="contentinfo">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">
              mkdevelopment
            </div>
            <p className="text-gray-400">
              Kamil<br />
              AI & Full Stack Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Szybkie linki</h3>
            <div className="space-y-2">
              {[
                { key: 'about', href: '#about' },
                { key: 'skills', href: '#skills' },
                { key: 'projects', href: '#projects' },
                { key: 'contact', href: '#contact' }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 focus-ring rounded"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Kontakt</h3>
            <div className="space-y-2 text-gray-400">
              <p>Kraków, Polska</p>
              <p>Dostępny na nowe projekty AI</p>
              <p>Programowanie w każdym języku</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} Kamil - mkdevelopment. {t('footer.rights')}.
          </p>
          <p className="text-gray-400 text-sm">
            {t('footer.built')} ❤️ {t('footer.in')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
