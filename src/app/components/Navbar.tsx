'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../../imports/image.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setIsMobileMenuOpen(false);
    }
  };

  const openTeacherForm = () => {
    const event = new CustomEvent('openTeacherForm');

    window.dispatchEvent(event);

    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-md shadow-slate-200/50 border-b border-slate-200/50'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src={logo}
              alt="Mi Tutora"
              className="h-16 w-auto"
            />
          </motion.div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              'Services',
              'How It Works',
              'Testimonials',
              'FAQ',
              'Contact',
            ].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(
                    item.toLowerCase().replace(/\s+/g, '-')
                  )
                }
                className="text-sm font-medium text-slate-700 hover:text-[#00a992] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center space-x-3">

            {/* PHONE NUMBERS */}
            <div className="flex items-center space-x-2 text-sm text-slate-700">
              <Phone className="w-4 h-4 text-[#00a992]" />

              <div className="flex flex-col">

                <a
                  href="tel:+917483034168"
                  className="hover:text-[#00a992] transition-colors"
                >
                  +91 7483034168
                </a>

                <a
                  href="tel:+919773980489"
                  className="hover:text-[#00a992] transition-colors"
                >
                  +91 9773980489
                </a>

              </div>
            </div>

            {/* BOOK DEMO BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openTeacherForm}
              className="px-6 py-2.5 bg-[#00a992] text-white rounded-full text-sm font-semibold shadow-lg shadow-[#00a992]/25 hover:shadow-xl hover:shadow-[#00a992]/35 transition-all"
            >
              Book Free Demo
            </motion.button>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-slate-200 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">

              {[
                'Services',
                'How It Works',
                'Testimonials',
                'FAQ',
                'Contact',
              ].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(
                      item.toLowerCase().replace(/\s+/g, '-')
                    )
                  }
                  className="block w-full text-left px-4 py-2 text-slate-700 font-medium hover:bg-[#00a992]/10 hover:text-[#00a992] rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}

              {/* MOBILE BOOK BUTTON */}
              <button
                onClick={openTeacherForm}
                className="w-full px-6 py-3 bg-[#00a992] text-white rounded-lg font-semibold shadow-lg"
              >
                Book Free Demo
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}