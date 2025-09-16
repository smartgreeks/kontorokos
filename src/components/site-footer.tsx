'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import businessData from '@/src/data/business.json';

const navigation = [
  { name: 'Αρχική', href: '/' },
  { name: 'Σχετικά', href: '/about' },
  { name: 'Υπηρεσίες', href: '/services' },
  { name: 'Γκαλερί', href: '/gallery' },
  { name: 'Επικοινωνία', href: '/contact' },
];

const services = [
  'Παραδοσιακή Ελληνική Κουζίνα',
  'Φρέσκα Θαλασσινά',
  'Ψητά Κρέατα',
  'Vegetarian Επιλογές',
  'Catering Υπηρεσίες',
  'Private Events',
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {businessData.brandName.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-xl">{businessData.brandName}</h3>
                <p className="text-sm text-slate-300">{businessData.tagline}</p>
              </div>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              {businessData.tagline}
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a 
                href={businessData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors group"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href={businessData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href={businessData.social.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors group"
              >
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">Google Maps</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-6">Γρήγορες Συνδέσεις</h4>
            <nav className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-slate-300 hover:text-brand-accent transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-6">Οι Υπηρεσίες μας</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-slate-300">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-6">Επικοινωνία</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">
                    {businessData.primaryLocation.address}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-accent flex-shrink-0" />
                <a 
                  href={`tel:${businessData.contact.phone}`}
                  className="text-slate-300 hover:text-brand-accent transition-colors"
                >
                  {businessData.contact.phone}
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-accent flex-shrink-0" />
                <a 
                  href={`mailto:${businessData.contact.email}`}
                  className="text-slate-300 hover:text-brand-accent transition-colors"
                >
                  {businessData.contact.email}
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                <div className="text-slate-300 text-sm space-y-1">
                  <p><span className="font-medium">Δευτέρα - Παρασκευή:</span> {businessData.contact.hours.mon_fri}</p>
                  <p><span className="font-medium">Σάββατο:</span> {businessData.contact.hours.sat}</p>
                  <p><span className="font-medium">Κυριακή:</span> {businessData.contact.hours.sun}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-slate-800"
      >
        <div className="container-custom py-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="font-semibold text-lg mb-2">Μείνετε ενημερωμένοι</h4>
            <p className="text-slate-300 mb-6">
              Εγγραφείτε στο newsletter μας για ειδικές προσφορές και νέα από την κουζίνα μας
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Το email σας"
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-white placeholder-slate-400"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-brand-primary hover:bg-brand-secondary text-white rounded-lg font-medium transition-colors"
              >
                Εγγραφή
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} {businessData.brandName}. Όλα τα δικαιώματα διατηρούνται.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-brand-accent transition-colors">
                Πολιτική Απορρήτου
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-brand-accent transition-colors">
                Όροι Χρήσης
              </Link>
              <Link href="/sitemap.xml" className="text-slate-400 hover:text-brand-accent transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}