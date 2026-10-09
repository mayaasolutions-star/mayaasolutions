import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Sparkles, Layers, ShieldCheck, Globe, Cpu } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

interface ServiceSublink {
  name: string;
  desc: string;
  path: string;
  badge?: string;
}

const SERVICE_MENU_ITEMS: ServiceSublink[] = [
  {
    name: 'Brand Building',
    desc: 'Market positioning, narrative architecture & visual identity systems',
    path: '/brand',
    badge: 'Core'
  },
  {
    name: 'Websites & Digital Experiences',
    desc: 'High-performance React web applications & conversion flagships',
    path: '/websites',
    badge: 'Core'
  },
  {
    name: 'Personalised Business Systems',
    desc: 'Custom operational platforms, CRM & workflows with 100% IP ownership',
    path: '/business-systems',
    badge: 'Core'
  },
  {
    name: 'Growth Management & Advisory',
    desc: 'High-intent search acquisition & digital commercial advisory',
    path: '/services/growth',
    badge: 'Growth'
  },
];

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
    setServicesDropdownOpen(false);
    setMobileServicesExpanded(false);
  }, [location.pathname]);

  const handleServicesMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const isServicesActive = () => {
    return (
      location.pathname === '/services' ||
      location.pathname === '/brand' ||
      location.pathname.startsWith('/services/brand') ||
      location.pathname === '/websites' ||
      location.pathname.startsWith('/services/website') ||
      location.pathname.startsWith('/services/growth') ||
      location.pathname.startsWith('/services/marketing')
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          mobileMenuOpen
            ? 'bg-[#F7F7F5] border-[#E5E5E2] py-4'
            : isHomePage
            ? scrolled
              ? 'bg-black/90 backdrop-blur-md border-white/10 py-3.5 shadow-xl'
              : 'bg-transparent border-transparent py-5 md:py-6'
            : scrolled
            ? 'bg-[#F7F7F5]/95 backdrop-blur-md border-[#E5E5E2] py-3.5 shadow-sm'
            : 'bg-[#F7F7F5] border-[#E5E5E2] py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="relative z-10 group flex items-center gap-3">
            <img
              src={
                isHomePage && (!scrolled && !mobileMenuOpen)
                  ? '/images/mayaa-solutions-darkbg-logo.webp'
                  : '/images/mayaa-solutions-dark-logo.webp'
              }
              alt="Mayaa Solutions"
              className="h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                type="button"
                className={`relative py-1 text-xs font-extrabold uppercase tracking-widest transition-colors duration-200 inline-flex items-center gap-1 ${
                  isServicesActive()
                    ? isHomePage && !scrolled ? 'text-white' : 'text-black'
                    : isHomePage && !scrolled ? 'text-neutral-400 hover:text-white' : 'text-[#666666] hover:text-black'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
                {isServicesActive() && (
                  <motion.div
                    layoutId="activeUnderline"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      isHomePage && !scrolled ? 'bg-white' : 'bg-black'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* Clean Desktop Services Dropdown */}
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute left-0 top-full mt-2 w-80 sm:w-96 rounded-2xl bg-white border border-[#E5E5E2] shadow-2xl p-2 z-50 overflow-hidden text-left"
                  >
                    <div className="px-3.5 py-2.5 border-b border-[#F0F0EE] flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-studio-400">
                        Capabilities & Advisory
                      </span>
                      <Link
                        to="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-[10px] font-mono font-bold text-studio-100 hover:text-studio-400 uppercase tracking-wider flex items-center gap-1 transition-colors"
                      >
                        <span>All Services</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="p-1 space-y-0.5">
                      {SERVICE_MENU_ITEMS.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="group/item flex flex-col p-3 rounded-xl hover:bg-[#F7F7F5] transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-extrabold text-[#171717] uppercase tracking-wide group-hover/item:text-black">
                              {item.name}
                            </span>
                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 bg-studio-900 border border-studio-850 rounded text-studio-400">
                              {item.badge}
                            </span>
                          </div>
                          <span className="text-[11px] text-[#666666] line-clamp-1 mt-0.5 font-normal">
                            {item.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Business Systems (Elevated Differentiator Link) */}
            <Link
              to="/business-systems"
              className={`relative py-1 text-xs font-extrabold uppercase tracking-widest transition-colors duration-200 inline-flex items-center gap-1.5 ${
                location.pathname === '/business-systems' || location.pathname === '/business-tools'
                  ? isHomePage && !scrolled ? 'text-white' : 'text-black'
                  : isHomePage && !scrolled ? 'text-neutral-400 hover:text-white' : 'text-[#666666] hover:text-black'
              }`}
            >
              <span>Business Systems</span>
              {(location.pathname === '/business-systems' || location.pathname === '/business-tools') && (
                <motion.div
                  layoutId="activeUnderline"
                  className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                    isHomePage && !scrolled ? 'bg-white' : 'bg-black'
                  }`}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* Our Work */}
            <Link
              to="/our-work"
              className={`relative py-1 text-xs font-extrabold uppercase tracking-widest transition-colors duration-200 ${
                location.pathname === '/our-work'
                  ? isHomePage && !scrolled ? 'text-white' : 'text-black'
                  : isHomePage && !scrolled ? 'text-neutral-400 hover:text-white' : 'text-[#666666] hover:text-black'
              }`}
            >
              <span>Our Work</span>
              {location.pathname === '/our-work' && (
                <motion.div
                  layoutId="activeUnderline"
                  className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                    isHomePage && !scrolled ? 'bg-white' : 'bg-black'
                  }`}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* Global Markets (Direct Clean Link to Hub) */}
            <Link
              to="/global-markets"
              className={`relative py-1 text-xs font-extrabold uppercase tracking-widest transition-colors duration-200 ${
                location.pathname.startsWith('/global-markets')
                  ? isHomePage && !scrolled ? 'text-white' : 'text-black'
                  : isHomePage && !scrolled ? 'text-neutral-400 hover:text-white' : 'text-[#666666] hover:text-black'
              }`}
            >
              <span>Global Markets</span>
              {location.pathname.startsWith('/global-markets') && (
                <motion.div
                  layoutId="activeUnderline"
                  className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                    isHomePage && !scrolled ? 'bg-white' : 'bg-black'
                  }`}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* About */}
            <Link
              to="/about"
              className={`relative py-1 text-xs font-extrabold uppercase tracking-widest transition-colors duration-200 ${
                location.pathname === '/about'
                  ? isHomePage && !scrolled ? 'text-white' : 'text-black'
                  : isHomePage && !scrolled ? 'text-neutral-400 hover:text-white' : 'text-[#666666] hover:text-black'
              }`}
            >
              <span>About</span>
              {location.pathname === '/about' && (
                <motion.div
                  layoutId="activeUnderline"
                  className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                    isHomePage && !scrolled ? 'bg-white' : 'bg-black'
                  }`}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* Primary Action Button */}
            <Link
              to="/contact"
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-sm inline-flex items-center gap-1.5 ${
                isHomePage && !scrolled
                  ? 'bg-white text-black hover:bg-neutral-200'
                  : 'bg-black text-white hover:bg-neutral-800'
              }`}
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

          </nav>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-full transition-all duration-300 ${
                mobileMenuOpen
                  ? 'bg-[#E5E5E2] text-black'
                  : isHomePage && !scrolled
                  ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  : 'bg-white border border-studio-850 text-studio-100 hover:border-studio-700 shadow-sm'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-[#F7F7F5] text-[#171717] flex flex-col justify-between p-6 sm:p-10 pt-28 pb-8 overflow-y-auto min-h-[100dvh] max-w-full"
          >
            <div className="flex flex-col gap-6 max-w-lg w-full mx-auto">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#888888]">
                Main Navigation
              </span>

              <nav className="flex flex-col gap-4 text-left">
                
                {/* Services Accordion */}
                <div className="flex flex-col border-b border-[#E5E5E2] pb-4">
                  <div className="flex items-center justify-between">
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                        isServicesActive() ? 'text-black' : 'text-[#555555]'
                      }`}
                    >
                      Services
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                      className="p-2 text-[#777777] hover:text-black"
                      aria-label="Expand services"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          mobileServicesExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Expandable Sub-Services */}
                  <AnimatePresence>
                    {mobileServicesExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-3 pt-3 flex flex-col gap-2.5 border-l-2 border-black/15 ml-2 mt-2"
                      >
                        {SERVICE_MENU_ITEMS.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm font-bold uppercase tracking-wider text-[#444444] hover:text-black py-1"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Business Systems */}
                <Link
                  to="/business-systems"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl sm:text-3xl font-extrabold tracking-tight border-b border-[#E5E5E2] pb-4 ${
                    location.pathname === '/business-systems' ? 'text-black' : 'text-[#555555]'
                  }`}
                >
                  Business Systems
                </Link>

                {/* Our Work */}
                <Link
                  to="/our-work"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl sm:text-3xl font-extrabold tracking-tight border-b border-[#E5E5E2] pb-4 ${
                    location.pathname === '/our-work' ? 'text-black' : 'text-[#555555]'
                  }`}
                >
                  Our Work
                </Link>

                {/* Global Markets (Direct clean link to hub) */}
                <Link
                  to="/global-markets"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl sm:text-3xl font-extrabold tracking-tight border-b border-[#E5E5E2] pb-4 ${
                    location.pathname.startsWith('/global-markets') ? 'text-black' : 'text-[#555555]'
                  }`}
                >
                  Global Markets
                </Link>

                {/* About */}
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl sm:text-3xl font-extrabold tracking-tight border-b border-[#E5E5E2] pb-4 ${
                    location.pathname === '/about' ? 'text-black' : 'text-[#555555]'
                  }`}
                >
                  About
                </Link>

                {/* Contact */}
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                    location.pathname === '/contact' ? 'text-black' : 'text-[#555555]'
                  }`}
                >
                  Contact
                </Link>

              </nav>

              {/* Secondary Discovery Links */}
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono font-semibold text-[#666666]">
                <Link to="/insights" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">
                  Articles & Insights →
                </Link>
                <Link to="/products" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">
                  Starter Packages →
                </Link>
                <Link to="/terms-conditions" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">
                  Terms & Conditions →
                </Link>
              </div>

            </div>

            {/* Mobile Footer Area */}
            <div className="pt-8 border-t border-[#E5E5E2] flex flex-col gap-4 max-w-lg w-full mx-auto">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 font-extrabold text-center uppercase tracking-wider text-xs sm:text-sm rounded-xl bg-black text-white hover:bg-neutral-800 transition-colors shadow-md"
              >
                Start Your Project
              </Link>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 text-xs font-mono text-[#666666]">
                <a href="mailto:contact@mayaasolutions.in" className="hover:text-black font-semibold">
                  contact@mayaasolutions.in
                </a>
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
