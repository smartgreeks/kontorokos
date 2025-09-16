'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

interface MapEmbedProps {
  lat: number;
  lng: number;
  address: string;
  className?: string;
}

export function MapEmbed({ lat, lng, address, className = '' }: MapEmbedProps) {
  const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.123456789!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU4JzEyLjAiTiAyM8KwNDMnMTIuMCJF!5e0!3m2!1sel!2sgr!4v1234567890123!5m2!1sel!2sgr`;

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Map Container */}
      <div className="relative bg-muted rounded-2xl overflow-hidden shadow-lg">
        {/* Map Iframe */}
        <div className="relative h-96 md:h-[500px]">
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Χάρτης - ${address}`}
            className="w-full h-full"
          />
          
          {/* Overlay for better UX */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <motion.a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg hover:bg-white transition-colors group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Ανοίξτε στο Google Maps"
          >
            <ExternalLink className="w-5 h-5 text-slate-700 group-hover:text-brand-primary transition-colors" />
          </motion.a>
          
          <motion.a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-brand-primary hover:bg-brand-secondary rounded-lg flex items-center justify-center shadow-lg transition-colors group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Λάβετε οδηγίες"
          >
            <Navigation className="w-5 h-5 text-white" />
          </motion.a>
        </div>

        {/* Location Info Card */}
        <motion.div
          className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 mb-1">
                Kontorokos Restaurant
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                {address}
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-secondary text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Οδηγίες
                </a>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-slate-300 hover:border-brand-primary text-slate-700 hover:text-brand-primary px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Δείτε στο Google Maps
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Additional Info */}
      <motion.div
        className="mt-6 grid md:grid-cols-3 gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="bg-white rounded-lg p-4 shadow-sm border border-border">
          <div className="text-2xl font-bold text-brand-primary mb-1">5 λεπτά</div>
          <div className="text-sm text-muted-foreground">από το λιμάνι</div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border border-border">
          <div className="text-2xl font-bold text-brand-primary mb-1">Δωρεάν</div>
          <div className="text-sm text-muted-foreground">parking</div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border border-border">
          <div className="text-2xl font-bold text-brand-primary mb-1">Προσβάσιμο</div>
          <div className="text-sm text-muted-foreground">για ΑΜΕΑ</div>
        </div>
      </motion.div>
    </motion.div>
  );
}