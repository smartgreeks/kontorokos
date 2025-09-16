'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from './language-provider';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Μαρία Παπαδοπούλου',
    location: 'Σαλαμίνα',
    rating: 5,
    text: 'Εξαιρετική ποιότητα φαγητού και υπηρεσίας! Το Kontorokos είναι το αγαπημένο μας εστιατόριο στη Σαλαμίνα. Τα θαλασσινά είναι πάντα φρέσκα και η ατμόσφαιρα οικογενειακή.',
    date: '2024-01-15'
  },
  {
    id: 2,
    name: 'Γιάννης Κωνσταντίνου',
    location: 'Αθήνα',
    rating: 5,
    text: 'Κάθε φορά που επισκεπτόμαστε τη Σαλαμίνα, το Kontorokos είναι υποχρεωτική στάση. Η παραδοσιακή ελληνική κουζίνα σε υψηλό επίπεδο με προσιτές τιμές.',
    date: '2024-01-10'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    location: 'Madrid, Spain',
    rating: 5,
    text: 'Amazing authentic Greek food! We discovered this gem during our visit to Salamina. The grilled octopus was incredible and the staff was so welcoming.',
    date: '2024-01-08'
  },
  {
    id: 4,
    name: 'Δημήτρης Αντωνίου',
    location: 'Πειραιάς',
    rating: 5,
    text: 'Το καλύτερο εστιατόριο στη Σαλαμίνα! Εξυπηρέτηση άψογη, φαγητό νοστιμότατο και τιμές δίκαιες. Συνιστώ ανεπιφύλακτα!',
    date: '2024-01-05'
  },
  {
    id: 5,
    name: 'Sophie Martin',
    location: 'Paris, France',
    rating: 5,
    text: 'Wonderful family restaurant with authentic Greek flavors. The moussaka was the best I\'ve ever had! Perfect location near the port.',
    date: '2024-01-03'
  },
  {
    id: 6,
    name: 'Κώστας Μιχαηλίδης',
    location: 'Θεσσαλονίκη',
    rating: 5,
    text: 'Φανταστική εμπειρία! Το προσωπικό πολύ φιλικό και το φαγητό εξαιρετικό. Οι μερίδες γενναιόδωρες και η ποιότητα άριστη.',
    date: '2024-01-01'
  }
];

interface TestimonialsProps {
  className?: string;
}

export function Testimonials({ className = '' }: TestimonialsProps) {
  const { language } = useLanguage();

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
    <section className={`py-16 bg-muted/30 ${className}`}>
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
            <Star className="w-4 h-4" />
            {language === 'el' ? 'Αξιολογήσεις Πελατών' : 'Customer Reviews'}
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            {language === 'el' ? 'Τι Λένε οι Πελάτες μας' : 'What Our Customers Say'}
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {language === 'el' 
              ? 'Διαβάστε τις εμπειρίες των πελατών μας και ανακαλύψτε γιατί το Kontorokos είναι η πρώτη επιλογή για αυθεντική ελληνική κουζίνα.'
              : 'Read about our customers\' experiences and discover why Kontorokos is the first choice for authentic Greek cuisine.'
            }
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-brand-primary/10 p-3 rounded-full">
                  <Quote className="w-5 h-5 text-brand-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              
              <blockquote className="text-muted-foreground leading-relaxed mb-4">
                "{testimonial.text}"
              </blockquote>
              
              <div className="text-xs text-muted-foreground">
                {new Date(testimonial.date).toLocaleDateString(language === 'el' ? 'el-GR' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            {
              number: '4.8',
              label: language === 'el' ? 'Αξιολόγηση Google' : 'Google Rating',
              suffix: '/5'
            },
            {
              number: '500+',
              label: language === 'el' ? 'Θετικές Κριτικές' : 'Positive Reviews',
              suffix: ''
            },
            {
              number: '25',
              label: language === 'el' ? 'Χρόνια Εμπειρίας' : 'Years Experience',
              suffix: '+'
            },
            {
              number: '10K+',
              label: language === 'el' ? 'Ευχαριστημένοι Πελάτες' : 'Happy Customers',
              suffix: ''
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}