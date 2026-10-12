import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Globe } from 'lucide-react';
import { TARGET_MARKETS_LIST } from '../constants/globalMarketsData';

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
  {
    name: 'AI Video & Visual Content',
    desc: 'Cinematic AI films and advertising visuals for luxury & product brands',
    path: '/services/ai-video-content',
    badge: 'Creative'
  },
];

const HOMEPAGE_DRAWER_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Business Systems', path: '/business-systems' },
  { name: 'Our Work', path: '/our-work' },
  { name: 'Global Markets', path: '/global-markets' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [marketsDropdownOpen, setMarketsDropdownOpen] = useState(false);
  const [mobileMarketsExpanded, setMobileMarketsExpanded] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const marketsDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const marketsDropdownRef = useRef<HTMLDivElement | null>(null);
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
    setMarketsDropdownOpen(false);
    setMobileMarketsExpanded(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        marketsDropdownRef.current &&
        !marketsDropdownRef.current.contains(event.target as Node)
      ) {
        setMarketsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMarketsDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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

  const handleMarketsMouseEnter = () => {
    if (marketsDropdownTimeoutRef.current) {
      clearTimeout(marketsDropdownTimeoutRef.current);
    }
    setMarketsDropdownOpen(true);
  };

  const handleMarketsMouseLeave = () => {
    marketsDropdownTimeoutRef.current = setTimeout(() => {
      setMarketsDropdownOpen(false);
    }, 180);
  };

  const isGlobalMarketsActive = () => {
    return location.pathname.startsWith('/global-markets');
  };

  const isServicesActive = () => {
    return (
      location.pathname === '/services' ||
      location.pathname === '/brand' ||
      location.pathname.startsWith('/services/brand') ||
      location.pathname === '/websites' ||
      location.pathname.startsWith('/services/website') ||
      location.pathname.startsWith('/services/growth') ||
      location.pathname.startsWith('/services/marketing') ||
      location.pathname.startsWith('/services/ai-video-content')
    );
  };

  return (
    <>
      {/* 1. HOMEPAGE: Logo in top-left corner + small circular menu button in top-right corner */}
      {isHomePage ? (
        <>
          {/* White Logo at left top corner of homepage (visible when menu is closed) */}
          {!mobileMenuOpen && (
            <div className="fixed top-6 left-6 md:left-12 z-50">
              <Link to="/" className="group block">
                <img
                  src="/images/mayaa-solutions-light-logo.webp"
                  alt="Mayaa Solutions"
                  className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>
          )}

          {/* Circular menu button at right top corner */}
          <div className="fixed top-6 right-6 md:right-12 z-50">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 sm:p-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300 text-white shadow-lg cursor-pointer flex items-center justify-center group"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white transition-transform duration-200 group-hover:rotate-90" />
              ) : (
                <Menu className="w-5 h-5 text-white transition-transform duration-200 group-hover:scale-110" />
              )}
            </button>
          </div>
        </>
      ) : (
        /* 2. OTHER PAGES: Keep existing standard header with Home link inserted before Services */
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
            mobileMenuOpen
              ? 'bg-[#F7F7F5] border-[#E5E5E2] py-4'
              : scrolled
              ? 'bg-[#F7F7F5]/95 backdrop-blur-md border-[#E5E5E2] py-3.5 shadow-sm'
              : 'bg-[#F7F7F5] border-[#E5E5E2] py-4 md:py-5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-10 group flex items-center gap-3">
              <img
                src="/images/mayaa-solutions-dark-logo.webp"
                alt="Mayaa Solutions"
                className="h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {/* Home */}
              <Link
                to="/"
                className={`relative py-1 text-xs font-extrabold uppercase tracking-widest transition-colors duration-200 ${
                  location.pathname === '/' ? 'text-black' : 'text-[#666666] hover:text-black'
                }`}
              >
                <span>Home</span>
                {location.pathname === '/' && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-black"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <div className="inline-flex items-center gap-0.5">
                  <Link
                    to="/services"
                    className={`relative py-1 text-xs font-extrabold uppercase tracking-widest transition-colors duration-200 ${
                      isServicesActive() ? 'text-black' : 'text-[#666666] hover:text-black'
                    }`}
                  >
                    <span>Services</span>
                    {isServicesActive() && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-black"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setServicesDropdownOpen(!servicesDropdownOpen);
                    }}
                    aria-label="Toggle Services menu"
                    aria-expanded={servicesDropdownOpen}
                    className="p-1 transition-colors duration-200 cursor-pointer text-[#666666] hover:text-black"
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

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

              {/* Business Systems */}
              <Link
                to="/business-systems"
                className={`relative py-1 text-xs font-extrabold uppercase tracking-widest transition-colors duration-200 inline-flex items-center gap-1.5 ${
                  location.pathname === '/business-systems' || location.pathname === '/business-tools'
                    ? 'text-black'
                    : 'text-[#666666] hover:text-black'
                }`}
              >
                <span>Business Systems</span>
                {(location.pathname === '/business-systems' || location.pathname === '/business-tools') && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-black"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              {/* Our Work */}
              <Link
                to="/our-work"
                className={`relative py-1 text-xs font-extrabold uppercase tracking-widest transition-colors duration-200 ${
                  location.pathname === '/our-work' ? 'text-black' : 'text-[#666666] hover:text-black'
                }`}
              >
                <span>Our Work</span>
                {location.pathname === '/our-work' && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-black"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              {/* Global Markets Dropdown */}
              <div
                className="relative"
                ref={marketsDropdownRef}
                onMouseEnter={handleMarketsMouseEnter}
                onMouseLeave={handleMarketsMouseLeave}
              >
                <div className="flex items-center">
                  <Link
                    to="/global-markets"
                    onClick={() => setMarketsDropdownOpen(false)}
                    className={`relative py-1 text-xs font-extrabold uppercase tracking-widest transition-colors duration-200 inline-flex items-center gap-1 ${
                      isGlobalMarketsActive() ? 'text-black' : 'text-[#666666] hover:text-black'
                    }`}
                    aria-expanded={marketsDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>Global Markets</span>
                    {isGlobalMarketsActive() && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-black"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setMarketsDropdownOpen(!marketsDropdownOpen);
                    }}
                    aria-label="Toggle Global Markets menu"
                    aria-expanded={marketsDropdownOpen}
                    className="p-1 transition-colors duration-200 cursor-pointer text-[#666666] hover:text-black"
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        marketsDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Clean Desktop Global Markets Dropdown */}
                <AnimatePresence>
                  {marketsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.16 }}
                      className="absolute right-0 top-full mt-2 w-[660px] max-w-[calc(100vw-2rem)] rounded-2xl bg-white border border-[#E5E5E2] shadow-2xl p-2 z-50 overflow-hidden text-left"
                    >
                      <div className="px-4 py-2.5 border-b border-[#F0F0EE] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Globe className="w-3.5 h-3.5 text-studio-400" />
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-studio-400">
                            20 Target Markets · International
                          </span>
                        </div>
                        <Link
                          to="/global-markets"
                          onClick={() => setMarketsDropdownOpen(false)}
                          className="text-[10px] font-mono font-bold text-studio-100 hover:text-studio-400 uppercase tracking-wider flex items-center gap-1 transition-colors"
                        >
                          <span>All 20 Markets Overview</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="p-2 grid grid-cols-4 gap-1">
                        {TARGET_MARKETS_LIST.map((market) => (
                          <Link
                            key={market.slug}
                            to={`/global-markets/${market.slug}`}
                            onClick={() => setMarketsDropdownOpen(false)}
                            className="flex items-center gap-2 px-2.5 py-2 rounded-xl hover:bg-[#F7F7F5] focus:bg-[#F7F7F5] focus:outline-none transition-colors group/mkt"
                          >
                            <img
                              src={market.flag}
                              alt=""
                              className="w-4 h-3 object-cover rounded-sm shrink-0 border border-black/10 shadow-xs"
                            />
                            <span className="text-xs font-bold text-[#222222] group-hover/mkt:text-black truncate">
                              {market.displayName || market.name}
                            </span>
                          </Link>
                        ))}
                      </div>

                      <div className="px-4 py-2 bg-[#FBFBFA] border-t border-[#F0F0EE] flex items-center justify-between text-[11px] text-[#777777]">
                        <span>International reach · Tailored commercial systems & strategy</span>
                        <Link
                          to="/global-markets"
                          onClick={() => setMarketsDropdownOpen(false)}
                          className="font-semibold text-black hover:underline"
                        >
                          Explore Overview Hub →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About */}
              <Link
                to="/about"
                className={`relative py-1 text-xs font-extrabold uppercase tracking-widest transition-colors duration-200 ${
                  location.pathname === '/about' ? 'text-black' : 'text-[#666666] hover:text-black'
                }`}
              >
                <span>About</span>
                {location.pathname === '/about' && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-black"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              {/* Primary Action Button */}
              <Link
                to="/contact"
                aria-label="Contact Now"
                className="px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-sm inline-flex items-center gap-1.5 bg-black text-white hover:bg-neutral-800"
              >
                <span>Contact Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </nav>

            {/* Mobile Menu Hamburger Toggle (for other pages) */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-full transition-all duration-300 bg-white border border-studio-850 text-studio-100 hover:border-studio-700 shadow-sm cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>
      )}

      {/* 3. MENU DRAWER (Fullscreen black on homepage; light themed drawer on other pages) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          isHomePage ? (
            /* Homepage: Original dark fullscreen menu drawer from earlier design */
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-black text-white flex flex-col justify-start p-6 sm:p-12 pt-32 sm:pt-36 pb-12 overflow-y-auto min-h-[100dvh] max-w-full"
            >
              {/* Menu Top Bar: Exactly ONE pristine Mayaa Solutions logo at top-left */}
              <div className="fixed top-6 left-6 md:left-12 z-50 pointer-events-auto">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="group block">
                  <img
                    src="/images/mayaa-solutions-light-logo.webp"
                    alt="Mayaa Solutions"
                    className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              </div>

              <div className="flex flex-col gap-6 max-w-xl mx-auto sm:mx-0 w-full mt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                  Navigation
                </span>
                <nav className="flex flex-col gap-4 sm:gap-6">
                  {HOMEPAGE_DRAWER_LINKS.map((link, idx) => {
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
                              ? 'text-white'
                              : 'text-neutral-500 hover:text-white'
                          }`}
                        >
                          <span>{link.name}</span>
                          {isActive && (
                            <span className="w-2.5 h-2.5 rounded-full inline-block bg-white" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          ) : (
            /* Other Pages: Mobile Navigation Drawer with Home link */
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
                  {/* Home */}
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl sm:text-3xl font-extrabold tracking-tight border-b border-[#E5E5E2] pb-4 ${
                      location.pathname === '/' ? 'text-black' : 'text-[#555555]'
                    }`}
                  >
                    Home
                  </Link>

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
                        className="p-2 text-[#777777] hover:text-black cursor-pointer"
                        aria-label="Expand services"
                        aria-expanded={mobileServicesExpanded}
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

                  {/* Global Markets Accordion */}
                  <div className="flex flex-col border-b border-[#E5E5E2] pb-4">
                    <div className="flex items-center justify-between">
                      <Link
                        to="/global-markets"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                          isGlobalMarketsActive() ? 'text-black' : 'text-[#555555]'
                        }`}
                      >
                        Global Markets
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileMarketsExpanded(!mobileMarketsExpanded)}
                        className="p-2 text-[#777777] hover:text-black cursor-pointer"
                        aria-label="Expand global markets"
                        aria-expanded={mobileMarketsExpanded}
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            mobileMarketsExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Expandable 20 Markets */}
                    <AnimatePresence>
                      {mobileMarketsExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-3 pt-3 border-l-2 border-black/15 ml-2 mt-2"
                        >
                          <div className="mb-2.5">
                            <Link
                              to="/global-markets"
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs font-mono font-bold uppercase tracking-wider text-black flex items-center gap-1.5 py-1"
                            >
                              <span>All 20 Markets Overview</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 max-h-[300px] overflow-y-auto pr-1">
                            {TARGET_MARKETS_LIST.map((market) => (
                              <Link
                                key={market.slug}
                                to={`/global-markets/${market.slug}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-2 py-1.5 text-xs font-bold text-[#444444] hover:text-black transition-colors"
                              >
                                <img
                                  src={market.flag}
                                  alt=""
                                  className="w-3.5 h-2.5 object-cover rounded-sm shrink-0 border border-black/10"
                                />
                                <span className="truncate">{market.displayName || market.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

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
                  aria-label="Contact Now"
                  className="w-full py-4 font-extrabold text-center uppercase tracking-wider text-xs sm:text-sm rounded-xl bg-black text-white hover:bg-neutral-800 transition-colors shadow-md"
                >
                  Contact Now
                </Link>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 text-xs font-mono text-[#666666]">
                  <a href="mailto:contact@mayaasolutions.in" className="hover:text-black font-semibold">
                    contact@mayaasolutions.in
                  </a>
                  <span>India</span>
                </div>
              </div>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </>
  );
};
