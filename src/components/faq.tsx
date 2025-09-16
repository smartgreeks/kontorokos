'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from './language-provider';

interface FAQItem {
  id: number;
  question: {
    el: string;
    en: string;
  };
  answer: {
    el: string;
    en: string;
  };
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: {
      el: 'Χρειάζεται κράτηση για να φάω στο εστιατόριο;',
      en: 'Do I need a reservation to dine at the restaurant?'
    },
    answer: {
      el: 'Συνιστούμε κράτηση, ειδικά για τα Σαββατοκύριακα και τις αργίες. Ωστόσο, δεχόμαστε και πελάτες χωρίς κράτηση εφόσον υπάρχει διαθεσιμότητα.',
      en: 'We recommend reservations, especially for weekends and holidays. However, we also welcome walk-in customers when tables are available.'
    }
  },
  {
    id: 2,
    question: {
      el: 'Ποιες είναι οι ώρες λειτουργίας του εστιατορίου;',
      en: 'What are the restaurant\'s operating hours?'
    },
    answer: {
      el: 'Είμαστε ανοιχτά καθημερινά από 12:00 έως 24:00. Τις Κυριακές κλείνουμε στις 23:00. Κατά τη διάρκεια του καλοκαιριού μπορεί να παραμένουμε ανοιχτά μέχρι αργά.',
      en: 'We are open daily from 12:00 to 24:00. On Sundays we close at 23:00. During summer we may stay open later.'
    }
  },
  {
    id: 3,
    question: {
      el: 'Διαθέτετε vegetarian και vegan επιλογές;',
      en: 'Do you have vegetarian and vegan options?'
    },
    answer: {
      el: 'Ναι! Έχουμε μεγάλη ποικιλία vegetarian πιάτων όπως γεμιστά, σπανακόπιτα, φασολάδα και φρέσκες σαλάτες. Για vegan επιλογές, παρακαλούμε ενημερώστε το προσωπικό μας.',
      el: 'Yes! We have a wide variety of vegetarian dishes like stuffed vegetables, spanakopita, bean soup and fresh salads. For vegan options, please inform our staff.'
    }
  },
  {
    id: 4,
    question: {
      el: 'Δέχεστε πιστωτικές κάρτες;',
      en: 'Do you accept credit cards?'
    },
    answer: {
      el: 'Ναι, δεχόμαστε όλες τις κύριες πιστωτικές κάρτες (Visa, Mastercard, American Express) καθώς και contactless πληρωμές.',
      en: 'Yes, we accept all major credit cards (Visa, Mastercard, American Express) as well as contactless payments.'
    }
  },
  {
    id: 5,
    question: {
      el: 'Υπάρχει χώρος στάθμευσης;',
      en: 'Is there parking available?'
    },
    answer: {
      el: 'Διαθέτουμε ιδιωτικό χώρο στάθμευσης για τους πελάτες μας. Επίσης, υπάρχουν θέσεις δωρεάν στάθμευσης στον δρόμο κοντά στο εστιατόριο.',
      en: 'We have private parking space for our customers. There are also free street parking spots available near the restaurant.'
    }
  },
  {
    id: 6,
    question: {
      el: 'Κάνετε catering για εκδηλώσεις;',
      en: 'Do you provide catering for events?'
    },
    answer: {
      el: 'Ναι! Προσφέρουμε υπηρεσίες catering για γάμους, βαπτίσεις, εταιρικές εκδηλώσεις και ιδιωτικά πάρτι. Επικοινωνήστε μαζί μας για προσωποποιημένο μενού.',
      en: 'Yes! We offer catering services for weddings, baptisms, corporate events and private parties. Contact us for a personalized menu.'
    }
  },
  {
    id: 7,
    question: {
      el: 'Είστε φιλικοί προς τα παιδιά;',
      en: 'Are you child-friendly?'
    },
    answer: {
      el: 'Απολύτως! Έχουμε ειδικό παιδικό μενού, καρεκλάκια φαγητού για μωρά και φιλικό προσωπικό. Τα παιδιά είναι πάντα ευπρόσδεκτα στο Kontorokos.',
      en: 'Absolutely! We have a special children\'s menu, high chairs for babies and friendly staff. Children are always welcome at Kontorokos.'
    }
  },
  {
    id: 8,
    question: {
      el: 'Μπορώ να κάνω κράτηση online;',
      en: 'Can I make a reservation online?'
    },
    answer: {
      el: 'Προς το παρόν δεχόμαστε κρατήσεις τηλεφωνικά. Καλέστε μας στο +30 210 123 4567 ή επισκεφθείτε μας στο εστιατόριο. Σύντομα θα διαθέσουμε και online κρατήσεις.',
      en: 'Currently we accept reservations by phone. Call us at +30 210 123 4567 or visit us at the restaurant. We will soon offer online reservations.'
    }
  }
];

interface FAQProps {
  className?: string;
}

export function FAQ({ className = '' }: FAQProps) {
  const { language } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <HelpCircle className="w-4 h-4" />
            {language === 'el' ? 'Συχνές Ερωτήσεις' : 'Frequently Asked Questions'}
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            {language === 'el' ? 'Έχετε Ερωτήσεις;' : 'Have Questions?'}
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {language === 'el' 
              ? 'Βρείτε απαντήσεις στις πιο συχνές ερωτήσεις των πελατών μας. Αν δεν βρείτε αυτό που ψάχνετε, επικοινωνήστε μαζί μας!'
              : 'Find answers to our customers\' most frequently asked questions. If you can\'t find what you\'re looking for, contact us!'
            }
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          {faqData.map((item) => {
            const isOpen = openItems.includes(item.id);
            
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="mb-4"
              >
                <motion.button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left bg-muted/50 hover:bg-muted/70 rounded-lg p-6 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {item.question[language]}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-brand-primary" />
                      ) : (
                        <Plus className="w-5 h-5 text-brand-primary" />
                      )}
                    </motion.div>
                  </div>
                </motion.button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <p className="text-muted-foreground leading-relaxed">
                          {item.answer[language]}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mt-12"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {language === 'el' ? 'Δεν βρήκατε την απάντησή σας;' : 'Didn\'t find your answer?'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'el' 
                ? 'Επικοινωνήστε μαζί μας και θα χαρούμε να απαντήσουμε σε οποιαδήποτε ερώτηση έχετε.'
                : 'Contact us and we\'ll be happy to answer any questions you have.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+302101234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-white rounded-lg font-medium hover:bg-brand-primary/90 transition-colors"
              >
                {language === 'el' ? 'Καλέστε μας' : 'Call Us'}
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 border border-brand-primary text-brand-primary rounded-lg font-medium hover:bg-brand-primary/10 transition-colors"
              >
                {language === 'el' ? 'Στείλτε μήνυμα' : 'Send Message'}
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}