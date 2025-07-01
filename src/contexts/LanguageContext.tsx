
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pl' | 'en' | 'de' | 'es' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pl: {
    // Navigation
    'nav.about': 'O mnie',
    'nav.skills': 'Umiejętności',
    'nav.projects': 'Projekty',
    'nav.experience': 'Doświadczenie',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.greeting': 'Cześć, jestem',
    'hero.name': 'AI & Full Stack Developer',
    'hero.subtitle': '17-letni programista AI z Krakowa - tworzę rozwiązania w każdym języku programowania',
    'hero.description': 'Specjalizuję się w sztucznej inteligencji, machine learning i full-stack development. Mogę zaprogramować wszystko - od AI po aplikacje webowe, mobilne i desktopowe.',
    'hero.cta.hire': 'Zatrudnij mnie',
    'hero.cta.projects': 'Zobacz projekty AI',
    
    // About Section
    'about.title': 'O mnie',
    'about.subtitle': 'AI Developer z Krakowa',
    'about.description': 'Jestem 17-letnim programistą AI z Krakowa, który tworzy zaawansowane rozwiązania sztucznej inteligencji. Programuję w każdym języku - od Python i JavaScript po Java, PHP, C++ i więcej.',
    'about.highlight1': 'AI & Machine Learning - chatboty, automatyzacja, analiza danych',
    'about.highlight2': 'Full Stack w każdym języku - Python, JS, Java, PHP, C++, Go',
    'about.highlight3': 'Aplikacje webowe, mobilne, desktopowe z integracją AI',
    'about.location': 'Kraków, Polska',
    'about.age': '17 lat',
    'about.experience': '3+ lata w AI/ML',
    
    // Skills Section
    'skills.title': 'Umiejętności',
    'skills.subtitle': 'AI i programowanie w każdym języku',
    'skills.languages': 'Języki programowania',
    'skills.frameworks': 'AI/ML & Frameworki',
    'skills.tools': 'Narzędzia AI i technologie',
    'skills.databases': 'Bazy danych i chmura',
    
    // Services Section
    'services.title': 'Usługi',
    'services.subtitle': 'Rozwiązania AI i programowanie w każdym języku',
    'services.web.title': 'Aplikacje AI',
    'services.web.description': 'Chatboty, systemy rekomendacji, analiza danych, automatyzacja procesów z AI',
    'services.mobile.title': 'Machine Learning',
    'services.mobile.description': 'Modele predykcyjne, klasyfikacja, przetwarzanie języka naturalnego (NLP)',
    'services.ai.title': 'Full Stack Development',
    'services.ai.description': 'Aplikacje webowe, mobilne i desktopowe w Python, JavaScript, Java, PHP, C++',
    'services.api.title': 'Integracje API',
    'services.api.description': 'Integracja z OpenAI, Google AI, Azure, AWS i innymi platformami AI',
    'services.backend.title': 'Backend & Infrastructure',
    'services.backend.description': 'Skalowalne API, bazy danych, chmura, DevOps w każdej technologii',
    'services.optimization.title': 'Automatyzacja AI',
    'services.optimization.description': 'Automatyzacja procesów biznesowych, skrypty AI, optymalizacja',
    
    // Contact Section
    'contact.title': 'Współpraca',
    'contact.subtitle': 'Potrzebujesz rozwiązania AI?',
    'contact.description': 'Skontaktuj się ze mną, aby omówić projekt AI lub programistyczny. Programuję w każdym języku!',
    'contact.email': 'Wyślij email',
    'contact.location.title': 'Lokalizacja',
    'contact.location.value': 'Kraków, Polska',
    'contact.languages.title': 'Języki komunikacji',
    'contact.languages.value': 'Polski, Angielski, Niemiecki',
    'contact.availability.title': 'Dostępność',
    'contact.availability.value': 'Otwarte na projekty AI',
    
    // Footer
    'footer.rights': 'Wszystkie prawa zastrzeżone',
    'footer.built': 'Zbudowane z',
    'footer.in': 'w Krakowie',
    
    // Accessibility
    'a11y.skip': 'Przejdź do głównej treści',
    'a11y.menu': 'Otwórz menu',
    'a11y.theme': 'Przełącz motyw',
    'a11y.language': 'Zmień język',
    'a11y.close': 'Zamknij',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hi, I am',
    'hero.name': 'AI & Full Stack Developer',
    'hero.subtitle': '17-year-old AI programmer from Krakow - creating solutions in every programming language',
    'hero.description': 'I specialize in artificial intelligence, machine learning, and full-stack development. I can program anything - from AI to web, mobile, and desktop applications.',
    'hero.cta.hire': 'Hire me',
    'hero.cta.projects': 'View AI projects',
    
    // About Section
    'about.title': 'About me',
    'about.subtitle': 'AI Developer from Krakow',
    'about.description': 'I am a 17-year-old AI programmer from Krakow who creates advanced artificial intelligence solutions. I program in every language - from Python and JavaScript to Java, PHP, C++, and more.',
    'about.highlight1': 'AI & Machine Learning - chatbots, automation, data analysis',
    'about.highlight2': 'Full Stack in every language - Python, JS, Java, PHP, C++, Go',
    'about.highlight3': 'Web, mobile, desktop applications with AI integration',
    'about.location': 'Krakow, Poland',
    'about.age': '17 years old',
    'about.experience': '3+ years in AI/ML',
    
    // Skills Section
    'skills.title': 'Skills',
    'skills.subtitle': 'AI and programming in every language',
    'skills.languages': 'Programming Languages',
    'skills.frameworks': 'AI/ML & Frameworks',
    'skills.tools': 'AI Tools & Technologies',
    'skills.databases': 'Databases & Cloud',
    
    // Services Section
    'services.title': 'Services',
    'services.subtitle': 'AI solutions and programming in every language',
    'services.web.title': 'AI Applications',
    'services.web.description': 'Chatbots, recommendation systems, data analysis, process automation with AI',
    'services.mobile.title': 'Machine Learning',
    'services.mobile.description': 'Predictive models, classification, natural language processing (NLP)',
    'services.ai.title': 'Full Stack Development',
    'services.ai.description': 'Web, mobile, and desktop applications in Python, JavaScript, Java, PHP, C++',
    'services.api.title': 'API Integrations',
    'services.api.description': 'Integration with OpenAI, Google AI, Azure, AWS and other AI platforms',
    'services.backend.title': 'Backend & Infrastructure',
    'services.backend.description': 'Scalable APIs, databases, cloud, DevOps in any technology',
    'services.optimization.title': 'AI Automation',
    'services.optimization.description': 'Business process automation, AI scripts, optimization',
    
    // Contact Section
    'contact.title': 'Let\'s work together',
    'contact.subtitle': 'Need an AI solution?',
    'contact.description': 'Contact me to discuss your AI or programming project. I program in every language!',
    'contact.email': 'Send email',
    'contact.location.title': 'Location',
    'contact.location.value': 'Krakow, Poland',
    'contact.languages.title': 'Communication languages',
    'contact.languages.value': 'Polish, English, German',
    'contact.availability.title': 'Availability',
    'contact.availability.value': 'Open to AI projects',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.built': 'Built with',
    'footer.in': 'in Krakow',
    
    // Accessibility
    'a11y.skip': 'Skip to main content',
    'a11y.menu': 'Open menu',
    'a11y.theme': 'Toggle theme',
    'a11y.language': 'Change language',
    'a11y.close': 'Close',
  },
  de: {
    // Navigation
    'nav.about': 'Über mich',
    'nav.skills': 'Fähigkeiten',
    'nav.projects': 'Projekte',
    'nav.experience': 'Erfahrung',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.greeting': 'Hallo, ich bin',
    'hero.name': 'KI & Full Stack Entwickler',
    'hero.subtitle': '17-jähriger KI-Programmierer aus Krakau - erstelle Lösungen in jeder Programmiersprache',
    'hero.description': 'Ich spezialisiere mich auf künstliche Intelligenz, maschinelles Lernen und Full-Stack-Entwicklung. Ich kann alles programmieren - von KI bis zu Web-, Mobile- und Desktop-Anwendungen.',
    'hero.cta.hire': 'Mich engagieren',
    'hero.cta.projects': 'KI-Projekte ansehen',
    
    // About Section
    'about.title': 'Über mich',
    'about.subtitle': 'KI-Entwickler aus Krakau',
    'about.description': 'Ich bin ein 17-jähriger KI-Programmierer aus Krakau, der fortschrittliche Lösungen für künstliche Intelligenz entwickelt. Ich programmiere in jeder Sprache - von Python und JavaScript bis Java, PHP, C++ und mehr.',
    'about.highlight1': 'KI & Machine Learning - Chatbots, Automatisierung, Datenanalyse',
    'about.highlight2': 'Full Stack in jeder Sprache - Python, JS, Java, PHP, C++, Go',
    'about.highlight3': 'Web-, Mobile-, Desktop-Anwendungen mit KI-Integration',
    'about.location': 'Krakau, Polen',
    'about.age': '17 Jahre alt',
    'about.experience': '3+ Jahre in KI/ML',
    
    // Skills Section
    'skills.title': 'Fähigkeiten',
    'skills.subtitle': 'KI und Programmierung in jeder Sprache',
    'skills.languages': 'Programmiersprachen',
    'skills.frameworks': 'KI/ML & Frameworks',
    'skills.tools': 'KI-Tools & Technologien',
    'skills.databases': 'Datenbanken & Cloud',
    
    // Services Section
    'services.title': 'Leistungen',
    'services.subtitle': 'KI-Lösungen und Programmierung in jeder Sprache',
    'services.web.title': 'KI-Anwendungen',
    'services.web.description': 'Chatbots, Empfehlungssysteme, Datenanalyse, Prozessautomatisierung mit KI',
    'services.mobile.title': 'Machine Learning',
    'services.mobile.description': 'Vorhersagemodelle, Klassifizierung, natürliche Sprachverarbeitung (NLP)',
    'services.ai.title': 'Full Stack Entwicklung',
    'services.ai.description': 'Web-, Mobile- und Desktop-Anwendungen in Python, JavaScript, Java, PHP, C++',
    'services.api.title': 'API-Integrationen',
    'services.api.description': 'Integration mit OpenAI, Google AI, Azure, AWS und anderen KI-Plattformen',
    'services.backend.title': 'Backend & Infrastruktur',
    'services.backend.description': 'Skalierbare APIs, Datenbanken, Cloud, DevOps in jeder Technologie',
    'services.optimization.title': 'KI-Automatisierung',
    'services.optimization.description': 'Automatisierung von Geschäftsprozessen, KI-Skripte, Optimierung',
    
    // Contact Section
    'contact.title': 'Zusammenarbeit',
    'contact.subtitle': 'Brauchen Sie eine KI-Lösung?',
    'contact.description': 'Kontaktieren Sie mich, um Ihr KI- oder Programmierprojekt zu besprechen. Ich programmiere in jeder Sprache!',
    'contact.email': 'E-Mail senden',
    'contact.location.title': 'Standort',
    'contact.location.value': 'Krakau, Polen',
    'contact.languages.title': 'Kommunikationssprachen',
    'contact.languages.value': 'Polnisch, Englisch, Deutsch',
    'contact.availability.title': 'Verfügbarkeit',
    'contact.availability.value': 'Offen für KI-Projekte',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.built': 'Erstellt mit',
    'footer.in': 'in Krakau',
    
    // Accessibility
    'a11y.skip': 'Zum Hauptinhalt springen',
    'a11y.menu': 'Menü öffnen',
    'a11y.theme': 'Design umschalten',
    'a11y.language': 'Sprache ändern',
    'a11y.close': 'Schließen',
  },
  es: {
    // Navigation
    'nav.about': 'Acerca de',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.greeting': 'Hola, soy',
    'hero.name': 'Desarrollador IA & Full Stack',
    'hero.subtitle': 'Programador de IA de 17 años de Cracovia - creo soluciones en cualquier lenguaje de programación',
    'hero.description': 'Me especializo en inteligencia artificial, machine learning y desarrollo full-stack. Puedo programar cualquier cosa - desde IA hasta aplicaciones web, móviles y de escritorio.',
    'hero.cta.hire': 'Contrátame',
    'hero.cta.projects': 'Ver proyectos IA',
    
    // About Section
    'about.title': 'Acerca de mí',
    'about.subtitle': 'Desarrollador IA de Cracovia',
    'about.description': 'Soy un programador de IA de 17 años de Cracovia que crea soluciones avanzadas de inteligencia artificial. Programo en cualquier lenguaje - desde Python y JavaScript hasta Java, PHP, C++ y más.',
    'about.highlight1': 'IA & Machine Learning - chatbots, automatización, análisis de datos',
    'about.highlight2': 'Full Stack en cualquier lenguaje - Python, JS, Java, PHP, C++, Go',
    'about.highlight3': 'Aplicaciones web, móviles, de escritorio con integración IA',
    'about.location': 'Cracovia, Polonia',
    'about.age': '17 años',
    'about.experience': '3+ años en IA/ML',
    
    // Skills Section
    'skills.title': 'Habilidades',
    'skills.subtitle': 'IA y programación en cualquier lenguaje',
    'skills.languages': 'Lenguajes de Programación',
    'skills.frameworks': 'IA/ML y Frameworks',
    'skills.tools': 'Herramientas IA y Tecnologías',
    'skills.databases': 'Bases de Datos y Nube',
    
    // Services Section
    'services.title': 'Servicios',
    'services.subtitle': 'Soluciones IA y programación en cualquier lenguaje',
    'services.web.title': 'Aplicaciones IA',
    'services.web.description': 'Chatbots, sistemas de recomendación, análisis de datos, automatización de procesos con IA',
    'services.mobile.title': 'Machine Learning',
    'services.mobile.description': 'Modelos predictivos, clasificación, procesamiento de lenguaje natural (PLN)',
    'services.ai.title': 'Desarrollo Full Stack',
    'services.ai.description': 'Aplicaciones web, móviles y de escritorio en Python, JavaScript, Java, PHP, C++',
    'services.api.title': 'Integraciones API',
    'services.api.description': 'Integración con OpenAI, Google AI, Azure, AWS y otras plataformas IA',
    'services.backend.title': 'Backend e Infraestructura',
    'services.backend.description': 'APIs escalables, bases de datos, nube, DevOps en cualquier tecnología',
    'services.optimization.title': 'Automatización IA',
    'services.optimization.description': 'Automatización de procesos empresariales, scripts IA, optimización',
    
    // Contact Section
    'contact.title': 'Trabajemos juntos',
    'contact.subtitle': '¿Necesitas una solución IA?',
    'contact.description': 'Contáctame para discutir tu proyecto de IA o programación. ¡Programo en cualquier lenguaje!',
    'contact.email': 'Enviar email',
    'contact.location.title': 'Ubicación',
    'contact.location.value': 'Cracovia, Polonia',
    'contact.languages.title': 'Idiomas de comunicación',
    'contact.languages.value': 'Polaco, Inglés, Alemán',
    'contact.availability.title': 'Disponibilidad',
    'contact.availability.value': 'Abierto a proyectos IA',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.built': 'Construido con',
    'footer.in': 'en Cracovia',
    
    // Accessibility
    'a11y.skip': 'Saltar al contenido principal',
    'a11y.menu': 'Abrir menú',
    'a11y.theme': 'Cambiar tema',
    'a11y.language': 'Cambiar idioma',
    'a11y.close': 'Cerrar',
  },
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.experience': 'Expérience',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Salut, je suis',
    'hero.name': 'Développeur IA & Full Stack',
    'hero.subtitle': 'Programmeur IA de 17 ans de Cracovie - je crée des solutions dans tous les langages de programmation',
    'hero.description': 'Je me spécialise dans l\'intelligence artificielle, l\'apprentissage automatique et le développement full-stack. Je peux programmer n\'importe quoi - de l\'IA aux applications web, mobiles et de bureau.',
    'hero.cta.hire': 'M\'embaucher',
    'hero.cta.projects': 'Voir projets IA',
    
    // About Section
    'about.title': 'À propos de moi',
    'about.subtitle': 'Développeur IA de Cracovie',
    'about.description': 'Je suis un programmeur IA de 17 ans de Cracovie qui crée des solutions avancées d\'intelligence artificielle. Je programme dans tous les langages - de Python et JavaScript à Java, PHP, C++ et plus.',
    'about.highlight1': 'IA & Machine Learning - chatbots, automatisation, analyse de données',
    'about.highlight2': 'Full Stack dans tous les langages - Python, JS, Java, PHP, C++, Go',
    'about.highlight3': 'Applications web, mobiles, de bureau avec intégration IA',
    'about.location': 'Cracovie, Pologne',
    'about.age': '17 ans',
    'about.experience': '3+ ans en IA/ML',
    
    // Skills Section
    'skills.title': 'Compétences',
    'skills.subtitle': 'IA et programmation dans tous les langages',
    'skills.languages': 'Langages de Programmation',
    'skills.frameworks': 'IA/ML et Frameworks',
    'skills.tools': 'Outils IA et Technologies',
    'skills.databases': 'Bases de Données et Cloud',
    
    // Services Section
    'services.title': 'Services',
    'services.subtitle': 'Solutions IA et programmation dans tous les langages',
    'services.web.title': 'Applications IA',
    'services.web.description': 'Chatbots, systèmes de recommandation, analyse de données, automatisation de processus avec IA',
    'services.mobile.title': 'Machine Learning',
    'services.mobile.description': 'Modèles prédictifs, classification, traitement du langage naturel (TAL)',
    'services.ai.title': 'Développement Full Stack',
    'services.ai.description': 'Applications web, mobiles et de bureau en Python, JavaScript, Java, PHP, C++',
    'services.api.title': 'Intégrations API',
    'services.api.description': 'Intégration avec OpenAI, Google AI, Azure, AWS et autres plateformes IA',
    'services.backend.title': 'Backend et Infrastructure',
    'services.backend.description': 'APIs évolutives, bases de données, cloud, DevOps dans toute technologie',
    'services.optimization.title': 'Automatisation IA',
    'services.optimization.description': 'Automatisation de processus métier, scripts IA, optimisation',
    
    // Contact Section
    'contact.title': 'Travaillons ensemble',
    'contact.subtitle': 'Besoin d\'une solution IA?',
    'contact.description': 'Contactez-moi pour discuter de votre projet IA ou de programmation. Je programme dans tous les langages!',
    'contact.email': 'Envoyer un email',
    'contact.location.title': 'Localisation',
    'contact.location.value': 'Cracovie, Pologne',
    'contact.languages.title': 'Langues de communication',
    'contact.languages.value': 'Polonais, Anglais, Allemand',
    'contact.availability.title': 'Disponibilité',
    'contact.availability.value': 'Ouvert aux projets IA',
    
    // Footer
    'footer.rights': 'Tous droits réservés',
    'footer.built': 'Construit avec',
    'footer.in': 'à Cracovie',
    
    // Accessibility
    'a11y.skip': 'Aller au contenu principal',
    'a11y.menu': 'Ouvrir le menu',
    'a11y.theme': 'Basculer le thème',
    'a11y.language': 'Changer de langue',
    'a11y.close': 'Fermer',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved && ['pl', 'en', 'de', 'es', 'fr'].includes(saved) ? saved : 'pl';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
