import React from 'react';
import { SEO } from '../components/SEO';
import { ShieldCheck } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEO title="Terms & Conditions | Mayaa Solutions" description="Terms and conditions governing services, proposals, and studio engagements at Mayaa Solutions." />

      <main className="pt-32 pb-24 bg-studio-950 text-studio-100">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-mono text-studio-400 uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-studio-100" /> Legal Policy
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-studio-100 tracking-tight">Terms & Conditions</h1>
            <p className="text-xs font-mono text-studio-400">Last updated: August 2026</p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl border border-studio-850 shadow-sm space-y-8 text-sm sm:text-base text-studio-300 font-normal leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg sm:text-xl font-extrabold text-studio-100">1. Scope of Engagement</h2>
              <p>All brand strategy, website design, software engineering, and marketing services performed by Mayaa Solutions are governed by individual project proposals and master service agreements signed by both parties.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg sm:text-xl font-extrabold text-studio-100">2. Intellectual Property Rights</h2>
              <p>Upon receipt of full contract payment, all custom deliverables including final logo vector files, custom website code, brand guidelines, and unique design assets belong entirely to the client.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg sm:text-xl font-extrabold text-studio-100">3. Payment Terms</h2>
              <p>Standard engagements require a milestone deposit prior to project kick-off. Final production deployment or master asset handoff occurs upon settlement of final invoices.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg sm:text-xl font-extrabold text-studio-100">4. Confidentiality</h2>
              <p>Mayaa Solutions maintains strict non-disclosure obligations regarding proprietary business data, strategic plans, and technical architectures shared during consultations.</p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
