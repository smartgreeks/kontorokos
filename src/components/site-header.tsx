'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import businessData from '@/src/data/business.json';

const navigation = [
  { name: 'Αρχική', href: '/' },
  { name: 'Σχετικά', href: '/about' },
  { name: 'Υπηρεσίες', href: '/services' },
  { name: 'Γκαλερί', href: '/gallery' },
  { name: 'Επικοινωνία', href: '/contact' },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-primary text-white py-2 text-sm relative z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href={`tel:${businessData.contact.phone}`} className="hover:text-brand-accent transition-colors">
                  {businessData.contact.phone}
                </a>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{businessData.primaryLocation.address}</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="font-medium">{businessData.contact.hours.mon_fri}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'top-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-border/50' 
            : 'top-10 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-xl">
                  {businessData.brandName.charAt(0)}
                </span>
              </div>
              <div>
                <h1 className="font-bold text-xl text-foreground group-hover:text-brand-primary transition-colors">
                  {businessData.brandName}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {businessData.tagline}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative font-medium transition-colors hover:text-brand-primary ${
                      isActive ? 'text-brand-primary' : 'text-foreground'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary"
                        layoutId="activeTab"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/contact" className="btn-primary">
                Κράτηση
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-lg hover:bg-muted transition-colors ml-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-0 right-0 w-72 max-w-[85vw] h-full bg-white shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">
                        {businessData.brandName.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">{businessData.brandName}</h2>
                      <p className="text-sm text-muted-foreground">{businessData.tagline}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                  {navigation.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                            isActive 
                              ? 'bg-brand-primary text-white' 
                              : 'text-foreground hover:bg-muted'
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-border space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-brand-primary" />
                    <a href={`tel:${businessData.contact.phone}`} className="hover:text-brand-primary transition-colors">
                      {businessData.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-brand-primary mt-0.5" />
                    <span className="text-muted-foreground">
                      {businessData.primaryLocation.address}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Link href="/contact" className="btn-primary w-full justify-center">
                    Κράτηση Τραπεζιού
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}