'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Heart, Users, Clock } from 'lucide-react';
import businessData from '@/src/data/business.json';

const stats = [
  {
    icon: Clock,
    value: '25+',
    label: 'Χρόνια Εμπειρίας',
    description: 'Από το 1998 στην υπηρεσία σας'
  },
  {
    icon: Users,
    value: '10K+',
    label: 'Ευχαριστημένοι Πελάτες',
    description: 'Που μας εμπιστεύονται κάθε χρόνο'
  },
  {
    icon: Award,
    value: '4.8',
    label: 'Αξιολόγηση',
    description: 'Στο Google Reviews'
  },
  {
    icon: Heart,
    value: '100%',
    label: 'Φρέσκα Υλικά',
    description: 'Καθημερινή προμήθεια'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function AboutSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-muted/30">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium mb-4">
            Η Ιστορία μας
          </span>
          <h2 className="text-gradient mb-6">
            25 Χρόνια Παράδοσης και Γεύσης
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Από το 1998, το {businessData.brandName} αποτελεί σημείο αναφοράς 
            για την αυθεντική ελληνική κουζίνα στη Σαλαμίνα.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-bold mb-6">
                Μια Οικογενειακή Παράδοση
              </h3>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Το ταξίδι μας ξεκίνησε το 1998, όταν ο Γιάννης και η Μαρία Κοντορόκος 
                  αποφάσισαν να μοιραστούν την αγάπη τους για την παραδοσιακή ελληνική κουζίνα 
                  με τους κατοίκους της Σαλαμίνας.
                </p>
                
                <p>
                  Με συνταγές που περνούσαν από γενιά σε γενιά και την αφοσίωση στη χρήση 
                  φρέσκων, τοπικών υλικών, δημιουργήσαμε έναν χώρο όπου η γεύση συναντά 
                  την παράδοση.
                </p>
                
                <p>
                  Σήμερα, 25 χρόνια αργότερα, συνεχίζουμε να σερβίρουμε αυθεντικές γεύσεις 
                  με την ίδια αγάπη και προσοχή, κάνοντας κάθε γεύμα μια αξέχαστη εμπειρία.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 btn-primary"
              >
                Μάθετε περισσότερα για εμάς
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/kontorokos3.webp"
                  alt="Kontorokos Restaurant Interior"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 max-w-xs"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">4.8/5</div>
                    <div className="text-sm text-muted-foreground">Google Reviews</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Εξαιρετική ποιότητα και υπηρεσία. Το καλύτερο εστιατόριο στη Σαλαμίνα!"
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-3xl font-bold text-brand-primary mb-2">
                  {stat.value}
                </div>
                
                <div className="font-semibold mb-1">
                  {stat.label}
                </div>
                
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Philosophy */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Η Φιλοσοφία μας
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-brand-primary" />
                </div>
                <h4 className="font-semibold mb-2">Αγάπη για τη Γεύση</h4>
                <p className="text-sm text-muted-foreground">
                  Κάθε πιάτο φτιάχνεται με αγάπη και προσοχή στη λεπτομέρεια
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-brand-primary" />
                </div>
                <h4 className="font-semibold mb-2">Ποιότητα Πρώτα</h4>
                <p className="text-sm text-muted-foreground">
                  Χρησιμοποιούμε μόνο τα καλύτερα και φρεσκότερα υλικά
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-brand-primary" />
                </div>
                <h4 className="font-semibold mb-2">Οικογενειακή Ατμόσφαιρα</h4>
                <p className="text-sm text-muted-foreground">
                  Κάθε επισκέπτης είναι μέλος της μεγάλης μας οικογένειας
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}