/**
 * Navigation - Elegant header with language toggle
 *
 * Minimal, floating navigation that becomes more visible on scroll.
 * Features smooth transitions and a refined aesthetic.
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  currentLang: 'en' | 'it';
  currentPath: string;
}

const navLinks = {
  en: [
    { href: '/en', label: 'Home' },
    { href: '/en/shop', label: 'Shop' },
    { href: '/en/about', label: 'Our Story' },
    { href: '/en/contact', label: 'Contact' },
  ],
  it: [
    { href: '/it', label: 'Home' },
    { href: '/it/shop', label: 'Negozio' },
    { href: '/it/about', label: 'La Nostra Storia' },
    { href: '/it/contact', label: 'Contatti' },
  ],
};

export default function Navigation({ currentLang, currentPath }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = navLinks[currentLang];
  const alternateLang = currentLang === 'en' ? 'it' : 'en';
  const alternateHref = currentPath.replace(`/${currentLang}`, `/${alternateLang}`);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[var(--color-deep-night)]/90 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="container flex items-center justify-between py-5">
          {/* Logo */}
          <a
            href={`/${currentLang}`}
            className="group flex items-center gap-3"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              {/* Decorative circle */}
              <div className="absolute inset-0 rounded-full border border-[var(--color-gold)]/30 group-hover:border-[var(--color-gold)]/60 transition-colors duration-500" />
              <div className="absolute inset-1 rounded-full border border-[var(--color-gold)]/20" />
              {/* Inner star symbol */}
              <span className="text-[var(--color-gold)] text-lg">✦</span>
            </div>
            <span className="font-serif text-xl tracking-wide text-[var(--color-cream)]">
              Gocce di Stella
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-2 text-sm tracking-wide transition-colors duration-300 ${
                  currentPath === link.href
                    ? 'text-[var(--color-gold)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-cream)]'
                }`}
              >
                {link.label}
                {currentPath === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--color-gold)]"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            ))}

            {/* Divider */}
            <div className="w-px h-5 bg-[var(--color-twilight)]" />

            {/* Language Toggle */}
            <a
              href={alternateHref}
              className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors duration-300"
            >
              <span className="uppercase">{alternateLang}</span>
            </a>

            {/* Cart */}
            <button
              className="relative p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors duration-300"
              aria-label="Shopping cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {/* Cart count badge - will be dynamic */}
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--color-gold)] text-[var(--color-deep-night)] text-xs rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[var(--color-cream)]"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-px bg-current origin-left transition-colors"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-px bg-current transition-colors"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-px bg-current origin-left transition-colors"
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--color-deep-night)]/98 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="font-serif text-3xl text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 mt-8"
              >
                <a
                  href={alternateHref}
                  className="px-4 py-2 border border-[var(--color-gold)]/30 text-[var(--color-gold)] text-sm uppercase tracking-wider"
                >
                  {alternateLang === 'en' ? 'English' : 'Italiano'}
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
