'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Utensils, Fish, Beef, Leaf, Users, Calendar } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Παραδοσιακή Ελληνική Κουζίνα',
    description: 'Αυθεντικές συνταγές που περνούν από γενιά σε γενιά, με φρέσκα υλικά από την ελληνική γη.',
    icon: Utensils,
    image: '/food1.webp',
    features: ['Μουσακάς', 'Παστίτσιο', 'Γεμιστά', 'Κλέφτικο'],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 2,
    title: 'Φρέσκα Θαλασσινά',
    description: 'Καθημερινή προμήθεια φρέσκων ψαριών και θαλασσινών από τις ελληνικές θάλασσες.',
    icon: Fish,
    image: '/food2.webp',
    features: ['Τσιπούρα', 'Λαβράκι', 'Γαρίδες', 'Χταπόδι'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'Ψητά Κρέατα',
    description: 'Εκλεκτά κρέατα ψημένα στη σχάρα με παραδοσιακό τρόπο και μυστικά μπαχαρικά.',
    icon: Beef,
    image: '/food3.webp',
    features: ['Κοντοσούβλι', 'Μπριζόλες', 'Κεμπάπ', 'Κοκορέτσι'],
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 4,
    title: 'Vegetarian Επιλογές',
    description: 'Πλούσια ποικιλία χορτοφαγικών πιάτων με φρέσκα λαχανικά και παραδοσιακές συνταγές.',
    icon: Leaf,
    image: '/food4.webp',
    features: ['Χορτόπιτα', 'Φασολάδα', 'Σπανακόρυζο', 'Μπριάμ'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 5,
    title: 'Catering Υπηρεσίες',
    description: 'Επαγγελματικές υπηρεσίες catering για εταιρικές εκδηλώσεις και ιδιωτικές γιορτές.',
    icon: Users,
    image: '/food5.webp',
    features: ['Εταιρικά Events', 'Γάμοι', 'Βαπτίσεις', 'Γενέθλια'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 6,
    title: 'Private Events',
    description: 'Ιδιωτικός χώρος για ξεχωριστές στιγμές με προσωπικό service και customized μενού.',
    icon: Calendar,
    image: '/food6.webp',
    features: ['Ιδιωτικός Χώρος', 'Προσωπικό Service', 'Custom Μενού', 'Διακόσμηση'],
    color: 'from-indigo-500 to-purple-500'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

interface ServicesGridProps {
  showAll?: boolean;
  className?: string;
}

export function ServicesGrid({ showAll = false, className = '' }: ServicesGridProps) {
  const displayServices = showAll ? services : services.slice(0, 4);

  return (
    <motion.div
      className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {displayServices.map((service) => {
        const IconComponent = service.icon;
        
        return (
          <motion.div
            key={service.id}
            variants={itemVariants}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            whileHover={{ y: -8 }}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`} />
              
              {/* Icon */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-600 mb-2">Ειδικότητες:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-muted text-sm rounded-full text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-brand-primary font-medium hover:text-brand-secondary transition-colors group/link"
              >
                Μάθετε περισσότερα
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        );
      })}

      {/* Show More Card */}
      {!showAll && services.length > 4 && (
        <motion.div
          variants={itemVariants}
          className="group relative bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
          whileHover={{ y: -8 }}
        >
          <div className="p-8 text-center text-white h-full flex flex-col justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-8 h-8" />
            </div>
            
            <h3 className="text-xl font-bold mb-3">
              Δείτε όλες τις υπηρεσίες
            </h3>
            
            <p className="text-white/80 mb-6">
              Ανακαλύψτε όλες τις υπηρεσίες και ειδικότητες που προσφέρουμε
            </p>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Περισσότερα
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}