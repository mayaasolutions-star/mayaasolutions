import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Linkedin, Facebook, Mail, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-studio-900 border-t border-studio-850 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-studio-850">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link to="/" className="inline-block">
              <img
                src="/images/mayaa-solutions-dark-logo.webp"
                alt="Mayaa Solutions"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-studio-300 text-sm leading-relaxed max-w-md font-medium">
              We help businesses grow through brand building, website design, growth marketing, and strategic business consulting.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="mailto:contact@mayaasolutions.com"
                className="inline-flex items-center gap-2 text-sm font-bold text-studio-100 hover:text-studio-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-studio-100" />
                contact@mayaasolutions.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-studio-400">
              Navigation
            </span>
            <ul className="flex flex-col gap-3 text-sm font-semibold text-studio-300">
              <li><Link to="/" className="hover:text-studio-100 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-studio-100 transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-studio-100 transition-colors">Services</Link></li>
              <li><Link to="/products" className="hover:text-studio-100 transition-colors">Products</Link></li>
              <li><Link to="/our-work" className="hover:text-studio-100 transition-colors">Our Work</Link></li>
              <li><Link to="/contact" className="hover:text-studio-100 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-studio-400">
              Services
            </span>
            <ul className="flex flex-col gap-3 text-sm font-semibold text-studio-300">
              <li><Link to="/services/branding" className="hover:text-studio-100 transition-colors">Brand Building</Link></li>
              <li><Link to="/services/website" className="hover:text-studio-100 transition-colors">Website Design</Link></li>
              <li><Link to="/services/marketing" className="hover:text-studio-100 transition-colors">Growth Marketing</Link></li>
              <li><Link to="/services/business-growth" className="hover:text-studio-100 transition-colors">Business Growth</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-studio-400">
              Social
            </span>
            <div className="flex flex-col gap-3 text-sm font-semibold text-studio-300">
              <a
                href="https://www.linkedin.com/company/mayaa-solutions/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-studio-100 transition-colors"
              >
                <Linkedin className="w-5 h-5 shrink-0 text-studio-100" /> <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/mayaa.solutions/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-studio-100 transition-colors"
              >
                <Instagram className="w-5 h-5 shrink-0 text-studio-100" /> <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/mayaasolutions/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-studio-100 transition-colors"
              >
                <Facebook className="w-5 h-5 shrink-0 text-studio-100" /> <span>Facebook</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-studio-400 font-medium text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-studio-100" />
            <span>© {new Date().getFullYear()} Mayaa Solutions. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/terms-conditions" className="hover:text-studio-100 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
