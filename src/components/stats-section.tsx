'use client';

import { motion } from 'framer-motion';

export function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-brand-primary to-brand-secondary py-12">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="text-3xl font-bold text-brand-accent mb-1">25+</div>
            <div className="text-sm text-slate-300">Χρόνια Εμπειρίας</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-accent mb-1">500+</div>
            <div className="text-sm text-slate-300">Ευχαριστημένοι Πελάτες</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-accent mb-1">50+</div>
            <div className="text-sm text-slate-300">Παραδοσιακά Πιάτα</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-accent mb-1">4.8</div>
            <div className="text-sm text-slate-300">Αξιολόγηση Google</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}