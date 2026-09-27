import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Business Tools', path: '/business-tools' },
    { name: 'Industries', path: '/industries' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          mobileMenuOpen
            ? 'bg-[#F7F7F5] border-[#E5E5E2] py-5'
            : isHomePage
            ? scrolled
              ? 'bg-black/90 backdrop-blur-md border-white/10 py-4 shadow-xl'
              : 'bg-transparent border-transparent py-6 md:py-8'
            : scrolled
            ? 'bg-[#F7F7F5] border-[#E5E5E2] py-3.5 shadow-sm'
            : 'bg-[#F7F7F5] border-[#E5E5E2] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10 group flex items-center gap-3">
            <img
              src={
                isHomePage && !scrolled
                  ? '/images/mayaa-solutions-darkbg-logo.webp'
                  : '/images/mayaa-solutions-dark-logo.webp'
              }
              alt="Mayaa Solutions"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          {!isHomePage && (
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive =
                  location.pathname === link.path ||
                  (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative py-1 text-xs sm:text-sm font-extrabold uppercase tracking-widest transition-colors duration-300 ${
                      isActive ? 'text-studio-100' : 'text-studio-400 hover:text-studio-100'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-studio-100 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          )}

          {/* Hamburger Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-full transition-all duration-300 ${
                isHomePage
                  ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  : 'lg:hidden bg-white border border-studio-850 text-studio-100 hover:border-studio-700 shadow-sm'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-studio-100" /> : <Menu className="w-5 h-5 text-studio-100" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Fullscreen Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className={`fixed inset-0 z-40 flex flex-col justify-between p-6 sm:p-12 pt-28 pb-8 overflow-y-auto min-h-[100dvh] max-w-full ${
              isHomePage ? 'bg-black text-white' : 'bg-[#F7F7F5] text-[#171717]'
            }`}
          >
            <div className="flex flex-col gap-6 max-w-xl">
              <span className={`text-xs font-mono uppercase tracking-widest ${isHomePage ? 'text-neutral-500' : 'text-[#888888]'}`}>
                Navigation
              </span>
              <nav className="flex flex-col gap-4 sm:gap-6">
                {navLinks.map((link, idx) => {
                  const isActive =
                    location.pathname === link.path ||
                    (link.path !== '/' && location.pathname.startsWith(link.path));
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-3xl sm:text-5xl font-extrabold tracking-tight transition-colors flex items-center justify-between ${
                          isActive
                            ? isHomePage ? 'text-white' : 'text-[#171717]'
                            : isHomePage ? 'text-neutral-500 hover:text-white' : 'text-[#777777] hover:text-[#171717]'
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && (
                          <span className={`w-2.5 h-2.5 rounded-full inline-block ${isHomePage ? 'bg-white' : 'bg-[#171717]'}`} />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <div className={`pt-8 border-t flex flex-col gap-6 max-w-xl ${isHomePage ? 'border-neutral-800' : 'border-[#E5E5E0]'}`}>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full py-4 font-extrabold text-center uppercase tracking-wider text-xs sm:text-sm rounded-xl transition-colors ${
                  isHomePage ? 'bg-white text-black hover:bg-neutral-200' : 'bg-[#171717] text-white hover:bg-[#333333]'
                }`}
              >
                START YOUR PROJECT
              </Link>
              <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs font-mono ${isHomePage ? 'text-neutral-400' : 'text-[#666666]'}`}>
                <span>contact@mayaasolutions.com</span>
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
