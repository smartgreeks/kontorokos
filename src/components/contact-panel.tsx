'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import businessData from '@/src/data/business.json';

interface ContactPanelProps {
  variant?: 'default' | 'compact';
  className?: string;
}

export function ContactPanel({ variant = 'default', className = '' }: ContactPanelProps) {
  if (variant === 'compact') {
    return (
      <motion.section
        className={`section-padding bg-gradient-to-r from-brand-primary to-brand-secondary ${className}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Έτοιμοι για μια αξέχαστη γευστική εμπειρία;
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Κάντε κράτηση σήμερα και ανακαλύψτε τις αυθεντικές γεύσεις της Ελλάδας
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-brand-primary hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                Κράτηση Τραπεζιού
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${businessData.contact.phone}`}
                className="border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {businessData.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      className={`section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-brand-primary/20 text-white relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              Επικοινωνήστε μαζί μας
            </span>
            
            <h2 className="text-4xl font-bold mb-6">
              Κάντε κράτηση για μια
              <span className="block text-brand-accent">
                αξέχαστη εμπειρία
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Είμαστε εδώ για να σας εξυπηρετήσουμε και να κάνουμε κάθε επίσκεψή σας 
              μια μοναδική γευστική εμπειρία. Επικοινωνήστε μαζί μας σήμερα!
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <div className="font-semibold">Τηλέφωνο</div>
                  <a 
                    href={`tel:${businessData.contact.phone}`}
                    className="text-brand-accent hover:text-white transition-colors"
                  >
                    {businessData.contact.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <div className="font-semibold">Διεύθυνση</div>
                  <div className="text-slate-300">
                    {businessData.primaryLocation.address}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <div className="font-semibold">Ώρες Λειτουργίας</div>
                  <div className="text-slate-300 text-sm">
                    Δευτέρα - Παρασκευή: {businessData.contact.hours.mon_fri}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Κράτηση Τραπεζιού
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/services"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Δείτε το Μενού
              </Link>
            </div>
          </motion.div>

          {/* Stats/Features */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-brand-accent mb-2">25+</div>
              <div className="text-sm text-slate-300">Χρόνια Εμπειρίας</div>
            </motion.div>
            
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-brand-accent mb-2">4.8</div>
              <div className="text-sm text-slate-300">Αξιολόγηση Google</div>
            </motion.div>
            
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-brand-accent mb-2">50+</div>
              <div className="text-sm text-slate-300">Παραδοσιακά Πιάτα</div>
            </motion.div>
            
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-brand-accent mb-2">100%</div>
              <div className="text-sm text-slate-300">Φρέσκα Υλικά</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}