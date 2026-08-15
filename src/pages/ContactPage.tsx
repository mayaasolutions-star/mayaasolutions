import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Mail, MapPin, Send, CheckCircle2, HelpCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { ContactCTA } from '../sections/ContactCTA';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedName, setSubmittedName] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Brand Building',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setSubmitting(true);
    setErrorMessage(null);

    const SUPABASE_URL = (import.meta as any).env?.VITE_SUPABASE_URL || 'https://jiffohgricelcmrgkimp.supabase.co';
    const SUPABASE_ANON_KEY = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || 'sb_publishable_J7UZusQQAbT1OidjTEf_xg_QVtzIwmK';

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || '',
      focus: formData.service,
      message: formData.message.trim(),
      status: 'New'
    };

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/contact-form`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('[Supabase Contact Form Error]', {
          status: response.status,
          error: errorData
        });
        throw new Error(errorData?.message || errorData?.details || 'Failed to submit enquiry. Please try again.');
      }

      setSubmittedName(formData.name.trim());
      setSubmitted(true);

      // Clear form fields on successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Brand Building',
        message: '',
      });
    } catch (err: any) {
      console.error('[Supabase Contact Form Submission Failed]', err);
      setErrorMessage(err.message || 'An error occurred while submitting. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const whyReachOutPoints = [
    { title: 'Planning a New Website', desc: 'Build a modern, high-performing platform tailored for your business.' },
    { title: 'Building a Stronger Brand', desc: 'Define a clear visual identity and memorable market positioning.' },
    { title: 'Improving Your Marketing', desc: 'Reach ready buyers through targeted search and performance campaigns.' },
    { title: 'Scaling Your Operations', desc: 'Build predictable customer onboarding and sales workflows.' },
    { title: 'Seeking Strategic Guidance', desc: 'Get direct advice from experienced consultants to solve growth bottlenecks.' },
  ];

  return (
    <>
      <SEO
        title="Contact Us | Mayaa Solutions"
        description="Start a conversation about your business goals. Schedule a consultation for brand building, custom website design, growth marketing, or business strategy."
      />

      <main className="pt-16 pb-24 bg-studio-950">
        
        {/* Editorial Asymmetric Hero Section */}
        <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 overflow-hidden bg-studio-950 text-left border-b border-studio-850 mb-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Content Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-studio-100 inline-block" />
                  <span className="text-xs font-extrabold text-studio-100 uppercase tracking-widest">
                    Start a Conversation
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.08]">
                  Let's Talk About <br className="hidden sm:block" />
                  <span className="text-[#171717] font-extrabold">Your Business Growth.</span>
                </h1>

                <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed max-w-xl">
                  Share your business goals and challenges with us—every meaningful project begins with a simple conversation.
                </p>
              </div>

              {/* Right Media Frame */}
              <div className="lg:col-span-7">
                <div className="relative rounded-3xl overflow-hidden border border-studio-850 shadow-xl h-[340px] sm:h-[400px] bg-studio-900 group">
                  <img
                    src="/images/contact-hero.webp"
                    alt="Mayaa Solutions Business Consultation"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">

          {/* Introduction Section */}
          <section className="p-8 sm:p-10 rounded-3xl bg-white border border-studio-850 shadow-sm space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-studio-100">We Understand Before We Recommend.</h2>
            <p className="text-sm sm:text-base text-studio-300 font-normal leading-relaxed">
              We take time to understand your business goals, target audience, and current challenges before suggesting any strategy or technical solution.
            </p>
            <p className="text-sm sm:text-base text-studio-300 font-normal leading-relaxed">
              No sales pressure—just practical, experienced guidance on the right next steps for your company.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Contact Info Column */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              <div className="glass-card p-8 rounded-3xl bg-white border border-studio-850 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-studio-100">Direct Communication</h3>
                <p className="text-xs text-studio-400 font-normal">Email us for project inquiries or quick strategic questions.</p>
                
                <div className="space-y-4 text-sm text-studio-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-studio-900 text-studio-100 border border-studio-850">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-studio-400 uppercase tracking-widest block">Email Us</span>
                      <a href="mailto:contact@mayaasolutions.com" className="text-studio-100 hover:text-studio-300 font-medium">
                        contact@mayaasolutions.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-studio-900 text-studio-100 border border-studio-850">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-studio-400 uppercase tracking-widest block">Location</span>
                      <span className="text-studio-100 font-medium">Bangalore, Karnataka, India</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-studio-850 text-xs text-studio-400 font-normal">
                  Response expectation: We aim to respond within one business day.
                </div>
              </div>

              {/* Why Reach Out */}
              <div className="glass-card p-8 rounded-3xl bg-white border border-studio-850 shadow-sm space-y-4 flex-1 flex flex-col justify-center">
                <h4 className="text-base font-bold text-studio-100">When to Reach Out</h4>
                <ul className="space-y-3 text-xs sm:text-sm text-studio-300 font-normal">
                  {whyReachOutPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-studio-100 shrink-0 mt-0.5" />
                      <span><strong className="text-studio-100">{pt.title}:</strong> {pt.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct Form */}
            <div className="lg:col-span-7 h-full">
              <div className="glass-card p-8 md:p-12 rounded-3xl bg-white border border-studio-850 shadow-sm space-y-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-studio-100">Start Your Project</h3>
                  <p className="text-xs sm:text-sm text-studio-400 mt-1">
                    Tell us about your business or project, and we'll get back to you with the right next steps.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-16 space-y-6 my-auto">
                    <div className="w-16 h-16 bg-studio-100 text-white rounded-full flex items-center justify-center mx-auto border border-studio-850">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-studio-100">Inquiry Received</h3>
                    <p className="text-studio-300 text-base max-w-md mx-auto">
                      Thank you for reaching out, <strong className="text-studio-100">{submittedName}</strong>. We aim to respond within one business day.
                    </p>
                    <Button onClick={() => { setSubmitted(false); setErrorMessage(null); }} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
                    {errorMessage && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 text-xs sm:text-sm">
                        {errorMessage}
                      </div>
                    )}
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-semibold text-studio-400 uppercase tracking-widest mb-2">Your Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Rahul Sharma"
                            className="w-full px-4 py-3.5 bg-studio-900 border border-studio-850 rounded-xl text-studio-100 text-sm focus:border-studio-100 outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-studio-400 uppercase tracking-widest mb-2">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="e.g. rahul@company.com"
                            className="w-full px-4 py-3.5 bg-studio-900 border border-studio-850 rounded-xl text-studio-100 text-sm focus:border-studio-100 outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-semibold text-studio-400 uppercase tracking-widest mb-2">Phone Number</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3.5 bg-studio-900 border border-studio-850 rounded-xl text-studio-100 text-sm focus:border-studio-100 outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-studio-400 uppercase tracking-widest mb-2">Primary Area of Focus</label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-3.5 bg-studio-900 border border-studio-850 rounded-xl text-studio-100 text-sm focus:border-studio-100 outline-none transition-colors"
                          >
                            <option value="Brand Building" className="bg-white text-studio-100 font-medium">Brand Building</option>
                            <option value="Website Design" className="bg-white text-studio-100 font-medium">Website Design</option>
                            <option value="Growth Marketing" className="bg-white text-studio-100 font-medium">Growth Marketing</option>
                            <option value="Business Strategy" className="bg-white text-studio-100 font-medium">Business Growth Strategy</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col min-h-[150px]">
                      <label className="block text-xs font-semibold text-studio-400 uppercase tracking-widest mb-2">Project Brief *</label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your business goals and key priorities..."
                        className="w-full flex-1 min-h-[130px] px-4 py-3.5 bg-studio-900 border border-studio-850 rounded-xl text-studio-100 text-sm focus:border-studio-100 outline-none resize-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 bg-studio-100 text-studio-950 font-extrabold text-sm uppercase tracking-wider rounded-full hover:bg-studio-200 transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                    >
                      {submitting ? 'SUBMITTING...' : 'START YOUR PROJECT'} <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};
