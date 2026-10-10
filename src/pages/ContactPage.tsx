import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ORGANIZATION_SCHEMA, getBreadcrumbSchema } from '../utils/seoMetadata';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  Lock, 
  ChevronDown,
  ArrowRight,
  Building2,
  AlertCircle,
  Linkedin,
  Instagram,
  Facebook
} from 'lucide-react';
import { Button } from '../components/Button';

interface SocialLinkItem {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  hoverColorClass: string;
}

const OFFICIAL_SOCIAL_LINKS: SocialLinkItem[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/mayaa-solutions/',
    icon: Linkedin,
    hoverColorClass: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/30',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/mayaa.solutions/',
    icon: Instagram,
    hoverColorClass: 'hover:text-[#E4405F] hover:border-[#E4405F]/30',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/mayaasolutions/',
    icon: Facebook,
    hoverColorClass: 'hover:text-[#1877F2] hover:border-[#1877F2]/30',
  },
];

const MARKET_NAME_MAP: Record<string, string> = {
  'india': 'India',
  'dubai': 'UAE / Dubai',
  'uae': 'UAE / Dubai',
  'abu-dhabi': 'Abu Dhabi',
  'usa': 'United States',
  'us': 'United States',
  'uk': 'United Kingdom',
  'australia': 'Australia',
  'singapore': 'Singapore',
  'germany': 'Germany',
  'paris': 'France / Paris',
  'france': 'France / Paris',
  'netherlands': 'Netherlands',
  'saudi-arabia': 'Saudi Arabia',
  'switzerland': 'Switzerland',
  'sweden': 'Sweden',
  'norway': 'Norway',
  'denmark': 'Denmark',
  'ireland': 'Ireland',
  'belgium': 'Belgium',
  'austria': 'Austria',
  'finland': 'Finland',
  'poland': 'Poland',
  'luxembourg': 'Luxembourg',
};

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service')?.toLowerCase() || '';
  const marketParam = searchParams.get('market')?.toLowerCase() || '';

  const getInitialService = (param: string) => {
    if (param === 'brand' || param === 'branding') return 'Brand Building';
    if (param === 'websites' || param === 'website' || param === 'web') return 'Websites & Digital Experiences';
    if (param === 'business-systems' || param === 'business-tools' || param === 'bms' || param === 'systems' || param === 'product') {
      return 'Personalised Business Systems';
    }
    if (param === 'marketing' || param === 'growth') return 'Growth & Digital Marketing';
    if (param === 'strategy' || param === 'consulting') return 'Strategic Growth Advisory';
    return 'Brand Building';
  };

  const getInitialCountry = (param: string) => {
    if (param && MARKET_NAME_MAP[param]) {
      return MARKET_NAME_MAP[param];
    }
    return 'India';
  };

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedName, setSubmittedName] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: getInitialCountry(marketParam),
    service: getInitialService(serviceParam),
    message: '',
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: getInitialService(serviceParam) }));
    }
    if (marketParam && MARKET_NAME_MAP[marketParam]) {
      setFormData((prev) => ({ ...prev, country: MARKET_NAME_MAP[marketParam] }));
    }
  }, [serviceParam, marketParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (!formData.name.trim()) {
      setErrorMessage('Please provide your name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please provide a valid business email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage('Please provide a brief description of your project or objectives (at least 10 characters).');
      return;
    }

    setSubmitting(true);
    setErrorMessage(null);

    const SUPABASE_URL = (import.meta as any).env?.VITE_SUPABASE_URL || 'https://jiffohgricelcmrgkimp.supabase.co';
    const SUPABASE_ANON_KEY = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || 'sb_publishable_J7UZusQQAbT1OidjTEf_xg_QVtzIwmK';

    // Format structured message body to safely pass company and country into Supabase without schema rejection
    const structuredMessage = [
      formData.company.trim() ? `[Company / Organisation]: ${formData.company.trim()}` : null,
      formData.country.trim() ? `[Country / Market]: ${formData.country.trim()}` : null,
      `[Project Brief & Objectives]:\n${formData.message.trim()}`
    ].filter(Boolean).join('\n\n');

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || '',
      focus: formData.service,
      message: structuredMessage,
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
        throw new Error(errorData?.message || errorData?.details || 'Failed to submit enquiry. Please try again or email us directly.');
      }

      setSubmittedName(formData.name.trim());
      setSubmitted(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        country: 'India',
        service: 'Brand Building',
        message: '',
      });
    } catch (err: any) {
      console.error('[Supabase Contact Form Submission Failed]', err);
      const isNetworkErr = err?.message === 'Failed to fetch' || err?.name === 'TypeError';
      setErrorMessage(
        isNetworkErr
          ? 'Unable to connect to the enquiry service. Please try again or reach out directly to contact@mayaasolutions.in'
          : (err?.message || 'An error occurred while submitting your enquiry. Please reach out directly to contact@mayaasolutions.in')
      );
    } finally {
      setSubmitting(false);
    }
  };

  const faqItems = [
    {
      q: 'How do you work with international clients remotely?',
      a: 'We collaborate with clients across North America, the UK, Europe, the Middle East, and Asia-Pacific through structured video conferences, asynchronous sprint documentation, shared task boards, and dedicated communication channels. We maintain daily overlapping business hours across BST, CET, GST, SGT, AEST, and EST/PST.'
    },
    {
      q: 'What is your typical project timeline and turnaround?',
      a: 'Timelines depend on project scope. Brand positioning and identity systems typically take 2 to 4 weeks. Custom high-performance websites take 3 to 6 weeks. Bespoke business management systems and complex operational tools are delivered in structured milestone sprints spanning 4 to 8 weeks.'
    },
    {
      q: 'Do you work on fixed milestone fees or hourly billing?',
      a: 'We operate primarily on transparent, fixed-scope milestone pricing invoiced in your local currency (USD, EUR, GBP, AED, SGD, AUD, or INR). You know the exact deliverables, schedule, and cost before work begins, avoiding open-ended hourly billing surprises.'
    },
    {
      q: 'Who owns the code and intellectual property upon delivery?',
      a: 'You do. Upon completion of each project milestone, 100% of the intellectual property, source code, design assets, and database schemas are transferred entirely to your company. We do not charge recurring license fees or impose vendor lock-in.'
    }
  ];

  return (
    <>
      <SEO
        title="Contact Mayaa Solutions | Start a Conversation About Your Business"
        description="Connect with Mayaa Solutions for brand building, custom website design, and personalised business management systems. Serving businesses in India and across global markets."
        canonicalUrl="https://mayaasolutions.in/contact"
        schema={[
          ORGANIZATION_SCHEMA,
          getBreadcrumbSchema([
            { name: 'Home', urlPath: '/' },
            { name: 'Contact', urlPath: '/contact' },
          ]),
        ]}
      />

      <main className="pt-16 pb-24 bg-studio-950">
        
        {/* Editorial Asymmetric Hero Section */}
        <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 overflow-hidden bg-studio-950 text-left border-b border-studio-850 mb-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Content Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-studio-100 inline-block" />
                  <span className="text-xs font-extrabold text-studio-100 uppercase tracking-widest font-mono">
                    Start a Conversation • India HQ & Global Delivery
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.08]">
                  Start a Conversation <br className="hidden sm:block" />
                  <span className="text-[#171717] font-extrabold">About Your Business Goals.</span>
                </h1>

                <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed max-w-xl">
                  Tell us about your business goals, current bottlenecks, or upcoming project. We review your requirements and respond with strategic recommendations within one business day.
                </p>

                {/* Response Commitment Badge */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-studio-850 text-xs font-semibold text-studio-100 shadow-sm">
                    <Clock className="w-3.5 h-3.5 text-studio-100" />
                    <span>Response within 1 business day</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-studio-850 text-xs font-semibold text-studio-100 shadow-sm">
                    <Lock className="w-3.5 h-3.5 text-studio-100" />
                    <span>NDA & confidential review</span>
                  </div>
                </div>
              </div>

              {/* Right Media Frame */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-studio-850 shadow-xl h-[340px] sm:h-[420px] bg-studio-900 group">
                  <img
                    src="/images/contact-hero.webp"
                    alt="Mayaa Solutions Business Consultation"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Operating Base Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-studio-850 shadow-lg flex items-center justify-between text-xs">
                    <div>
                      <span className="text-studio-400 block font-semibold uppercase tracking-wider text-[10px]">Headquarters</span>
                      <span className="text-studio-100 font-bold text-sm">India</span>
                    </div>
                    <div className="text-right">
                      <span className="text-studio-400 block font-semibold uppercase tracking-wider text-[10px]">Delivery Window</span>
                      <span className="text-studio-100 font-bold text-sm">Daily Global Timezone Overlap</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">

          {/* Core Interactive Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Column: Direct Info & Collaboration Details */}
            <div className="lg:col-span-5 flex flex-col">
              
              {/* Direct Communication Details */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-studio-850 shadow-sm flex flex-col h-full">
                {/* Introduction */}
                <div>
                  <span className="text-xs font-mono font-bold text-studio-400 uppercase tracking-widest block">
                    DIRECT CONTACT
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-studio-100 mt-2.5 tracking-tight">
                    Get in Touch Directly
                  </h3>
                  <p className="text-xs sm:text-sm text-studio-400 mt-3 leading-relaxed max-w-md font-normal">
                    Have a project in mind? Let's discuss how Mayaa Solutions can help you build, launch or scale your business.
                  </p>
                </div>
                
                {/* Social Connection */}
                <div className="mt-7">
                  <span className="text-[10px] font-mono font-bold text-studio-400 uppercase tracking-widest block mb-3">
                    CONNECT WITH US
                  </span>
                  <div className="flex items-center gap-3.5">
                    {OFFICIAL_SOCIAL_LINKS.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Mayaa Solutions on ${social.name}`}
                          title={`Mayaa Solutions on ${social.name}`}
                          className={`w-11 h-11 rounded-xl bg-studio-900 border border-studio-850 flex items-center justify-center text-studio-300 hover:bg-white hover:shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-100 ${social.hoverColorClass}`}
                        >
                          <IconComponent className="w-5 h-5 shrink-0" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Contact Information Cards */}
                <div className="mt-7 space-y-4 text-sm text-studio-300">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-studio-900 border border-studio-850">
                    <div className="p-2.5 rounded-xl bg-white text-studio-100 border border-studio-850 shrink-0 shadow-sm">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-studio-400 uppercase tracking-widest block">
                        OFFICIAL EMAIL
                      </span>
                      <a 
                        href="mailto:contact@mayaasolutions.in" 
                        className="text-studio-100 hover:text-studio-300 font-bold text-sm sm:text-base transition-colors"
                      >
                        contact@mayaasolutions.in
                      </a>
                      <span className="text-xs text-studio-400 block mt-1">
                        Monitored during business hours
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-studio-900 border border-studio-850">
                    <div className="p-2.5 rounded-xl bg-white text-studio-100 border border-studio-850 shrink-0 shadow-sm">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-studio-400 uppercase tracking-widest block">
                        HEADQUARTERS
                      </span>
                      <span className="text-studio-100 font-bold text-sm sm:text-base block">
                        India
                      </span>
                      <span className="text-xs text-studio-400 block mt-1">
                        Global engineering & strategy center
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Clean, Structured Project Enquiry Form */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-studio-850 shadow-sm space-y-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-studio-100">Start Your Project</h3>
                    <span className="text-[11px] font-mono text-studio-400 uppercase tracking-widest">
                      * Required Fields
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-studio-300 mt-1">
                    Complete the details below and we will get back to you with the appropriate next steps.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-16 space-y-6 my-auto bg-studio-900/50 rounded-2xl p-8 border border-studio-850">
                    <div className="w-16 h-16 bg-studio-100 text-studio-950 rounded-full flex items-center justify-center mx-auto border border-studio-850 shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-studio-100">Enquiry Received</h3>
                      <p className="text-studio-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out, <strong className="text-studio-100">{submittedName}</strong>. Our senior strategy team has received your brief and will respond within one business day.
                      </p>
                    </div>
                    <div className="pt-2">
                      <Button 
                        onClick={() => { setSubmitted(false); setErrorMessage(null); }} 
                        variant="outline"
                      >
                        Submit Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {errorMessage && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 text-xs sm:text-sm flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="space-y-4">
                      
                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact-name" className="block text-xs font-semibold text-studio-400 uppercase tracking-widest mb-1.5">
                            Your Name *
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Full name"
                            className="w-full px-4 py-3 bg-studio-900 border border-studio-850 rounded-xl text-studio-100 text-sm focus:border-studio-100 focus:bg-white outline-none transition-all placeholder:text-studio-400"
                          />
                        </div>

                        <div>
                          <label htmlFor="contact-email" className="block text-xs font-semibold text-studio-400 uppercase tracking-widest mb-1.5">
                            Business Email *
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Work email address"
                            className="w-full px-4 py-3 bg-studio-900 border border-studio-850 rounded-xl text-studio-100 text-sm focus:border-studio-100 focus:bg-white outline-none transition-all placeholder:text-studio-400"
                          />
                        </div>
                      </div>

                      {/* Company & Phone Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact-company" className="block text-xs font-semibold text-studio-400 uppercase tracking-widest mb-1.5">
                            Company / Organisation
                          </label>
                          <input
                            id="contact-company"
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Company name (optional)"
                            className="w-full px-4 py-3 bg-studio-900 border border-studio-850 rounded-xl text-studio-100 text-sm focus:border-studio-100 focus:bg-white outline-none transition-all placeholder:text-studio-400"
                          />
                        </div>

                        <div>
                          <label htmlFor="contact-phone" className="block text-xs font-semibold text-studio-400 uppercase tracking-widest mb-1.5">
                            Phone / WhatsApp
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="Phone number (optional)"
                            className="w-full px-4 py-3 bg-studio-900 border border-studio-850 rounded-xl text-studio-100 text-sm focus:border-studio-100 focus:bg-white outline-none transition-all placeholder:text-studio-400"
                          />
                        </div>
                      </div>

                      {/* Country & Service Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact-country" className="block text-xs font-semibold text-studio-400 uppercase tracking-widest mb-1.5">
                            Your Country / Market
                          </label>
                          <select
                            id="contact-country"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            className="w-full px-4 py-3 bg-studio-900 border border-studio-850 rounded-xl text-studio-100 text-sm focus:border-studio-100 focus:bg-white outline-none transition-all cursor-pointer"
                          >
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="UAE / Dubai">UAE / Dubai</option>
                            <option value="Abu Dhabi">Abu Dhabi</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Australia">Australia</option>
                            <option value="Germany">Germany</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="France / Paris">France / Paris</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Norway">Norway</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Austria">Austria</option>
                            <option value="Finland">Finland</option>
                            <option value="Poland">Poland</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Canada">Canada</option>
                            <option value="Other International Market">Other International Market</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="contact-service" className="block text-xs font-semibold text-studio-400 uppercase tracking-widest mb-1.5">
                            Primary Area of Focus
                          </label>
                          <select
                            id="contact-service"
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-3 bg-studio-900 border border-studio-850 rounded-xl text-studio-100 text-sm focus:border-studio-100 focus:bg-white outline-none transition-all cursor-pointer"
                          >
                            <option value="Brand Building">Brand Building & Identity</option>
                            <option value="Websites & Digital Experiences">Websites & Digital Experiences</option>
                            <option value="Personalised Business Systems">Personalised Business Systems (BMS)</option>
                            <option value="Growth & Digital Marketing">Growth & Digital Marketing</option>
                            <option value="Strategic Growth Advisory">Strategic Growth Advisory</option>
                          </select>
                        </div>
                      </div>

                      {/* Project Brief Textarea */}
                      <div>
                        <label htmlFor="contact-message" className="block text-xs font-semibold text-studio-400 uppercase tracking-widest mb-1.5">
                          Project Brief & Objectives *
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Briefly describe your project, goals and timeline..."
                          className="w-full min-h-[120px] px-4 py-3 bg-studio-900 border border-studio-850 rounded-xl text-studio-100 text-sm focus:border-studio-100 focus:bg-white outline-none resize-none transition-all placeholder:text-studio-400"
                        />
                      </div>

                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 bg-studio-100 text-studio-950 font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-studio-200 transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                      >
                        {submitting ? 'Submitting Enquiry...' : 'Start Your Project'} <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </div>

          </div>

          {/* Prospective Client FAQ Accordion */}
          <section className="pt-2 sm:pt-4 max-w-4xl mx-auto w-full">
            <div className="text-center space-y-2 mb-6 sm:mb-8">
              <span className="text-xs font-mono font-bold text-studio-400 uppercase tracking-widest block">
                Common Inquiries
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-studio-100 tracking-tight">
                Frequently Asked Questions Before Reaching Out.
              </h2>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-studio-850 overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full px-5 py-4 sm:px-6 sm:py-4.5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-studio-100 hover:text-studio-300 transition-colors"
                    >
                      <span className="leading-snug">{item.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-studio-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-studio-100' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-5 text-xs sm:text-sm text-studio-300 font-normal leading-relaxed border-t border-studio-850 pt-3 sm:pt-4">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </main>
    </>
  );
};
