import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail } from 'lucide-react';

export const ProductFooter: React.FC = () => {
  return (
    <footer className="bg-studio-900 border-t border-studio-850 py-12 text-studio-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-studio-850">
          <div className="space-y-1">
            <span className="text-sm font-extrabold text-studio-100 uppercase tracking-wider block">
              Mayaa Solutions
            </span>
            <p className="text-studio-400 text-xs font-medium">
              Digital Products & Practical Business Kits
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a
              href="mailto:contact@mayaasolutions.in"
              className="inline-flex items-center gap-2 hover:text-studio-100 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-studio-100" />
              contact@mayaasolutions.in
            </a>
            <Link
              to="/terms-conditions"
              className="hover:text-studio-100 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-studio-400">
          <p>
            © {new Date().getFullYear()} Mayaa Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-studio-400">
            <ShieldCheck className="w-3.5 h-3.5 text-studio-100" />
            <span>Secure checkout & instant digital fulfillment</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
