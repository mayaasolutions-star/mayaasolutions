import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, Lock, ShieldCheck, CheckCircle2, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import { ProductItem } from '../constants/productsData';
import { createPaymentOrder, launchCashfreeCheckout } from '../services/paymentService';

declare const Cashfree: any;

interface ProductCheckoutModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductCheckoutModal: React.FC<ProductCheckoutModalProps> = ({ product, onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    owner: '',
    whatsapp: '',
    email: '',
    business: '',
    website: '',
    social: '',
    about: '',
    notes: '',
    goal: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!product) return null;

  const isService = product.categoryType === 'service';

  const validateStep1 = () => {
    const errs: Record<string, string> = {};

    if (!formData.owner.trim() || formData.owner.trim().length < 2) {
      errs.owner = 'Please enter your full name.';
    }

    const phoneDigits = formData.whatsapp.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      errs.whatsapp = 'Please enter a valid 10-digit WhatsApp number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (isService && (!formData.business.trim() || formData.business.trim().length < 2)) {
      errs.business = 'Please enter your business name.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
      setErrorMessage(null);
    }
  };

  const handleStartPayment = async () => {
    if (loading) return; // Prevent double-clicking
    setLoading(true);
    setErrorMessage(null);

    try {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'InitiateCheckout', {
          value: product.priceNum,
          currency: 'INR',
          content_name: product.name
        });
      }

      const result = await createPaymentOrder({
        productSlug: product.slug,
        ownerName: formData.owner.trim(),
        email: formData.email.trim(),
        mobile: formData.whatsapp.trim(),
        businessName: formData.business.trim(),
        website: formData.website.trim(),
        socialLinks: formData.social.trim(),
        aboutBrand: formData.about.trim(),
        websiteNotes: formData.notes.trim(),
        goal: formData.goal.trim()
      });

      if (!result.success || !result.payment_session_id) {
        throw new Error(result.message || result.error || 'Unable to initialize Cashfree payment session.');
      }

      // Launch Cashfree SDK Checkout (mode automatically determined: sandbox on localhost, production on live domain)
      launchCashfreeCheckout(result.payment_session_id);
    } catch (err: any) {
      console.error('Payment Initialization Error:', err);
      setErrorMessage(
        err.message || 'Payment system unavailable. Please check your details and try again.'
      );
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] overflow-y-auto flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-studio-950/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl max-h-[90vh] bg-white border border-studio-850 rounded-3xl shadow-2xl z-10 flex flex-col overflow-hidden text-studio-100"
        >
          {/* Header */}
          <div className="p-6 border-b border-studio-850 flex items-center justify-between bg-studio-900/95 backdrop-blur-md sticky top-0 z-20">
            <div>
              <span className="text-xs font-semibold text-studio-400 uppercase tracking-widest block">
                Step {step} of 2 — {step === 1 ? 'Details' : 'Checkout'}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-studio-100 mt-1">
                {step === 1 ? (isService ? 'Personalise Your Order' : 'Download Access') : 'Order Summary & Payment'}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-studio-850 hover:bg-studio-800 text-studio-400 hover:text-studio-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-studio-850 h-1">
            <div
              className="bg-studio-100 h-1 transition-all duration-300"
              style={{ width: step === 1 ? '50%' : '100%' }}
            />
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 bg-white">
            {errorMessage && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 text-xs sm:text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {step === 1 ? (
              <form id="checkout-step1" onSubmit={handleNextStep} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-studio-400">
                      Your Name <span className="text-studio-100">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.owner}
                      onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
                      className={`w-full px-4 py-3 bg-studio-900 border rounded-xl text-sm text-studio-100 focus:outline-none focus:border-studio-100 transition-colors ${
                        errors.owner ? 'border-red-500' : 'border-studio-850'
                      }`}
                    />
                    {errors.owner && <p className="text-[11px] text-red-600">{errors.owner}</p>}
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-studio-400">
                      WhatsApp Number <span className="text-studio-100">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className={`w-full px-4 py-3 bg-studio-900 border rounded-xl text-sm text-studio-100 focus:outline-none focus:border-studio-100 transition-colors ${
                        errors.whatsapp ? 'border-red-500' : 'border-studio-850'
                      }`}
                    />
                    {errors.whatsapp && <p className="text-[11px] text-red-600">{errors.whatsapp}</p>}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-studio-400">
                    Email Address <span className="text-studio-100">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 bg-studio-900 border rounded-xl text-sm text-studio-100 focus:outline-none focus:border-studio-100 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-studio-850'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-600">{errors.email}</p>}
                </div>

                {/* Service Specific Fields */}
                {isService && (
                  <>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-studio-400">
                        Business Name <span className="text-studio-100">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your Business / Brand Name"
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        className={`w-full px-4 py-3 bg-studio-900 border rounded-xl text-sm text-studio-100 focus:outline-none focus:border-studio-100 transition-colors ${
                          errors.business ? 'border-red-500' : 'border-studio-850'
                        }`}
                      />
                      {errors.business && <p className="text-[11px] text-red-600">{errors.business}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-studio-400">
                          Website <span className="text-studio-600">(Optional)</span>
                        </label>
                        <input
                          type="url"
                          placeholder="https://yourwebsite.com"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          className="w-full px-4 py-3 bg-studio-900 border border-studio-850 rounded-xl text-sm text-studio-100 focus:outline-none focus:border-studio-100 transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-studio-400">
                          Social Media Links <span className="text-studio-600">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Instagram / LinkedIn link"
                          value={formData.social}
                          onChange={(e) => setFormData({ ...formData, social: e.target.value })}
                          className="w-full px-4 py-3 bg-studio-900 border border-studio-850 rounded-xl text-sm text-studio-100 focus:outline-none focus:border-studio-100 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-studio-400">
                        About Your Business & Goals <span className="text-studio-600">(Optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your business, target audience, and preferences..."
                        value={formData.about}
                        onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                        className="w-full px-4 py-3 bg-studio-900 border border-studio-850 rounded-xl text-sm text-studio-100 focus:outline-none focus:border-studio-100 transition-colors resize-none"
                      />
                    </div>
                  </>
                )}
              </form>
            ) : (
              <div className="space-y-6">
                {/* Summary Card */}
                <div className="p-5 rounded-2xl bg-studio-900 border border-studio-850 space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-studio-850">
                    <div>
                      <span className="text-xs font-mono text-studio-400 uppercase">{product.categoryLabel}</span>
                      <h4 className="text-lg font-bold text-studio-100 mt-0.5">{product.name}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-extrabold text-studio-100">{product.price}</span>
                      <span className="text-[10px] text-studio-400 block font-mono">INC. ALL TAXES</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-studio-300 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-studio-100 shrink-0" />
                      <span>{isService ? 'Delivery within 24-72 hours' : 'Instant Digital File Download'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-studio-100 shrink-0" />
                      <span>{isService ? 'Full amount adjusted towards complete project' : 'Lifetime Access & Free Updates'}</span>
                    </li>
                  </ul>
                </div>

                {/* Customer Contact Summary */}
                <div className="p-4 rounded-xl bg-studio-900 border border-studio-850 text-xs space-y-1">
                  <div className="text-studio-400">Order for: <strong className="text-studio-100">{formData.owner}</strong> ({formData.email})</div>
                  <div className="text-studio-400">WhatsApp: <strong className="text-studio-100">{formData.whatsapp}</strong></div>
                  {formData.business && <div className="text-studio-400">Business: <strong className="text-studio-100">{formData.business}</strong></div>}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer / Actions */}
          <div className="p-6 border-t border-studio-850 bg-studio-900 flex items-center justify-between gap-4">
            {step === 2 ? (
              <button
                onClick={() => setStep(1)}
                disabled={loading}
                className="px-4 py-2.5 rounded-xl border border-studio-850 text-xs sm:text-sm font-semibold text-studio-300 hover:text-studio-100 transition-colors flex items-center gap-1.5 bg-white"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Details
              </button>
            ) : (
              <span className="text-xs text-studio-400 font-medium">100% Secure Checkout</span>
            )}

            {step === 1 ? (
              <button
                type="submit"
                form="checkout-step1"
                className="px-6 py-3 bg-studio-100 text-studio-950 font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-studio-200 transition-colors flex items-center gap-2 shadow-sm ml-auto"
              >
                Continue to Payment <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleStartPayment}
                disabled={loading}
                className="px-8 py-3.5 bg-studio-100 text-studio-950 font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-studio-200 transition-colors flex items-center gap-2 shadow-sm ml-auto disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Preparing Checkout...
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" /> Pay {product.price} Securely
                  </>
                )}
              </button>
            )}
          </div>

          <div className="px-6 py-2 bg-studio-900 border-t border-studio-850 text-[10px] text-center text-studio-400 font-mono flex items-center justify-center gap-4">
            <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-studio-400" /> Cashfree Encryption</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-studio-400" /> Instant Access</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
