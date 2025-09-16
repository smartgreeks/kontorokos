'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'el' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Greek translations
const translations = {
  el: {
    // Navigation
    'nav.home': 'Αρχική',
    'nav.about': 'Σχετικά',
    'nav.services': 'Υπηρεσίες',
    'nav.gallery': 'Γκαλερί',
    'nav.contact': 'Επικοινωνία',
    'nav.reservation': 'Κράτηση',
    
    // Common
    'common.phone': 'Τηλέφωνο',
    'common.email': 'Email',
    'common.address': 'Διεύθυνση',
    'common.hours': 'Ώρες Λειτουργίας',
    'common.readMore': 'Διαβάστε περισσότερα',
    'common.learnMore': 'Μάθετε περισσότερα',
    'common.viewMenu': 'Δείτε το Μενού',
    'common.makeReservation': 'Κάντε Κράτηση',
    'common.contactUs': 'Επικοινωνήστε μαζί μας',
    'common.getDirections': 'Λάβετε οδηγίες',
    'common.followUs': 'Ακολουθήστε μας',
    
    // Hero Section
    'hero.title': 'Αυθεντική Ελληνική Γεύση',
    'hero.subtitle': 'Ανακαλύψτε τις παραδοσιακές γεύσεις της Ελλάδας στην καρδιά της Σαλαμίνας',
    'hero.cta.reservation': 'Κράτηση Τραπεζιού',
    'hero.cta.menu': 'Δείτε το Μενού',
    'hero.rating': 'Αξιολόγηση 4.8/5 στο Google',
    'hero.openHours': 'Ανοιχτά',
    
    // About Section
    'about.badge': 'Η Ιστορία μας',
    'about.title': '25 Χρόνια Παράδοσης και Γεύσης',
    'about.subtitle': 'Από το 1998, το Kontorokos αποτελεί σημείο αναφοράς για την αυθεντική ελληνική κουζίνα στη Σαλαμίνα.',
    'about.familyTradition': 'Μια Οικογενειακή Παράδοση',
    'about.philosophy.title': 'Η Φιλοσοφία μας',
    'about.philosophy.love': 'Αγάπη για τη Γεύση',
    'about.philosophy.quality': 'Ποιότητα Πρώτα',
    'about.philosophy.family': 'Οικογενειακή Ατμόσφαιρα',
    
    // Services
    'services.traditional': 'Παραδοσιακή Ελληνική Κουζίνα',
    'services.seafood': 'Φρέσκα Θαλασσινά',
    'services.grilled': 'Ψητά Κρέατα',
    'services.vegetarian': 'Vegetarian Επιλογές',
    'services.catering': 'Catering Υπηρεσίες',
    'services.events': 'Private Events',
    
    // Contact
    'contact.title': 'Επικοινωνήστε μαζί μας',
    'contact.subtitle': 'Είμαστε εδώ για να απαντήσουμε στις ερωτήσεις σας και να σας βοηθήσουμε με την κράτησή σας.',
    'contact.info': 'Στοιχεία Επικοινωνίας',
    'contact.form.title': 'Στείλτε μας μήνυμα',
    'contact.form.firstName': 'Όνομα',
    'contact.form.lastName': 'Επώνυμο',
    'contact.form.subject': 'Θέμα',
    'contact.form.message': 'Μήνυμα',
    'contact.form.send': 'Αποστολή Μηνύματος',
    
    // Footer
    'footer.quickLinks': 'Γρήγορες Συνδέσεις',
    'footer.services': 'Οι Υπηρεσίες μας',
    'footer.contact': 'Επικοινωνία',
    'footer.newsletter': 'Μείνετε ενημερωμένοι',
    'footer.newsletterText': 'Εγγραφείτε στο newsletter μας για ειδικές προσφορές και νέα από την κουζίνα μας',
    'footer.subscribe': 'Εγγραφή',
    'footer.rights': 'Όλα τα δικαιώματα διατηρούνται.',
    'footer.privacy': 'Πολιτική Απορρήτου',
    'footer.terms': 'Όροι Χρήσης',
    
    // Stats
    'stats.experience': 'Χρόνια Εμπειρίας',
    'stats.customers': 'Ευχαριστημένοι Πελάτες',
    'stats.dishes': 'Παραδοσιακά Πιάτα',
    'stats.rating': 'Αξιολόγηση Google',
    'stats.freshIngredients': 'Φρέσκα Υλικά',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.reservation': 'Reservation',
    
    // Common
    'common.phone': 'Phone',
    'common.email': 'Email',
    'common.address': 'Address',
    'common.hours': 'Opening Hours',
    'common.readMore': 'Read more',
    'common.learnMore': 'Learn more',
    'common.viewMenu': 'View Menu',
    'common.makeReservation': 'Make Reservation',
    'common.contactUs': 'Contact Us',
    'common.getDirections': 'Get Directions',
    'common.followUs': 'Follow Us',
    
    // Hero Section
    'hero.title': 'Authentic Greek Flavors',
    'hero.subtitle': 'Discover the traditional tastes of Greece in the heart of Salamina',
    'hero.cta.reservation': 'Book a Table',
    'hero.cta.menu': 'View Menu',
    'hero.rating': '4.8/5 Rating on Google',
    'hero.openHours': 'Open',
    
    // About Section
    'about.badge': 'Our Story',
    'about.title': '25 Years of Tradition and Taste',
    'about.subtitle': 'Since 1998, Kontorokos has been a reference point for authentic Greek cuisine in Salamina.',
    'about.familyTradition': 'A Family Tradition',
    'about.philosophy.title': 'Our Philosophy',
    'about.philosophy.love': 'Love for Taste',
    'about.philosophy.quality': 'Quality First',
    'about.philosophy.family': 'Family Atmosphere',
    
    // Services
    'services.traditional': 'Traditional Greek Cuisine',
    'services.seafood': 'Fresh Seafood',
    'services.grilled': 'Grilled Meats',
    'services.vegetarian': 'Vegetarian Options',
    'services.catering': 'Catering Services',
    'services.events': 'Private Events',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to answer your questions and help you with your reservation.',
    'contact.info': 'Contact Information',
    'contact.form.title': 'Send us a message',
    'contact.form.firstName': 'First Name',
    'contact.form.lastName': 'Last Name',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Our Services',
    'footer.contact': 'Contact',
    'footer.newsletter': 'Stay Updated',
    'footer.newsletterText': 'Subscribe to our newsletter for special offers and news from our kitchen',
    'footer.subscribe': 'Subscribe',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    
    // Stats
    'stats.experience': 'Years of Experience',
    'stats.customers': 'Happy Customers',
    'stats.dishes': 'Traditional Dishes',
    'stats.rating': 'Google Rating',
    'stats.freshIngredients': 'Fresh Ingredients',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('el');

  useEffect(() => {
    // Get language from localStorage or browser preference
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'el' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    } else {
      // Default to Greek for Greek restaurant
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('el')) {
        setLanguage('el');
      } else {
        setLanguage('en');
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['el']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Language Switcher Component
export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        onClick={() => setLanguage('el')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          language === 'el'
            ? 'bg-brand-primary text-white'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        ΕΛ
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-brand-primary text-white'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
    </div>
  );
}