'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, MapPin, Clock } from 'lucide-react';
import businessData from '@/src/data/business.json';

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

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-brand-primary/20 z-10" />
        <Image
          src="/kontorokos1.webp"
          alt="Kontorokos Restaurant Interior"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-32 right-2 md:right-20 w-12 h-12 md:w-20 md:h-20 bg-brand-accent/10 rounded-full blur-md md:blur-xl"
        {...floatingAnimation}
      />
      <motion.div
        className="absolute bottom-40 left-2 md:left-16 w-20 h-20 md:w-32 md:h-32 bg-brand-primary/5 rounded-full blur-lg md:blur-2xl"
        animate={{
          y: [20, -20, 20],
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />

      {/* Content */}
      <div className="relative z-20 container-custom">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium">Αξιολόγηση 4.8/5 στο Google</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Αυθεντική
            <span className="block text-gradient">
              Ελληνική Γεύση
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {businessData.tagline} - Ανακαλύψτε τις παραδοσιακές γεύσεις της Ελλάδας 
            στην καρδιά της Σαλαμίνας
          </motion.p>

          {/* Location & Hours */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-slate-300"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-accent" />
              <span>{businessData.primaryLocation.address}</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-slate-600" />
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-accent" />
              <span>Ανοιχτά: {businessData.contact.hours.mon_fri}</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2"
            >
              Κράτηση Τραπεζιού
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/services"
              className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Δείτε το Μενού
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{
              scaleY: [1, 0.5, 1],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        </motion.div>
      </motion.div>


    </section>
  );
}