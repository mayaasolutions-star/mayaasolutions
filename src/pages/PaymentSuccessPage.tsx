import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { CheckCircle2, Download, ArrowLeft, Loader2, AlertCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { verifyPaymentOrder } from '../services/paymentService';

export const PaymentSuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const rawSlug = searchParams.get('product') || searchParams.get('slug');
  const orderId = searchParams.get('order_id') || (typeof window !== 'undefined' ? sessionStorage.getItem('last_order_id') : null);
  const slug = rawSlug || (typeof window !== 'undefined' ? sessionStorage.getItem('last_ordered_product') : null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<{
    productName?: string;
    type?: 'service' | 'digital';
    fulfillmentType?: 'EMAIL_DELIVERY' | 'DOWNLOAD';
    downloadUrl?: string;
    deliveryMessage?: string;
    amount?: number;
  } | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      setError('Product reference not specified.');
      return;
    }

    const loadVerification = async () => {
      try {
        const res = await verifyPaymentOrder(slug, orderId);

        if (!res.success) {
          throw new Error(res.error || 'Unable to verify order details.');
        }

        setData(res);

        // Track Meta Pixel Purchase event
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Purchase', {
            value: Number(res.amount || 0),
            currency: 'INR',
            content_name: res.productName,
            content_category: res.type
          });
        }
      } catch (err: any) {
        console.error('Download verification error:', err);
        setError(err.message || 'Failed to load order details.');
      } finally {
        setLoading(false);
      }
    };

    loadVerification();
  }, [slug, orderId]);

  return (
    <>
      <SEO title="Payment Confirmed | Mayaa Solutions" description="Your purchase has been verified and processed." />

      <main className="min-h-screen pt-32 pb-24 bg-studio-950 flex items-center justify-center">
        <div className="max-w-lg w-full mx-auto px-6 text-center space-y-6">
          <div className="w-20 h-20 bg-studio-100 text-white rounded-full flex items-center justify-center mx-auto border border-studio-850 shadow-2xl">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-studio-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-studio-100" /> Purchase Successful
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#171717]">Thank You!</h1>
            <p className="text-sm text-studio-300 font-normal">
              Your payment has been successfully verified. Your order is ready.
            </p>
          </div>

          {loading ? (
            <div className="p-8 bg-white rounded-2xl border border-studio-850 shadow-sm flex flex-col items-center justify-center space-y-3">
              <Loader2 className="w-8 h-8 text-studio-100 animate-spin" />
              <p className="text-xs font-mono text-studio-400">Verifying your purchase details...</p>
            </div>
          ) : error ? (
            <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-2xl text-left space-y-3">
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Verification Alert</span>
              </div>
              <p className="text-xs text-red-600 font-medium">{error}</p>
              <p className="text-[11px] text-studio-400">
                If you completed payment, please email us at <a href="mailto:contact@mayaasolutions.com" className="text-studio-100 font-bold underline">contact@mayaasolutions.com</a> with your transaction reference.
              </p>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-3xl border border-studio-850 shadow-sm space-y-6 text-left">
              <div className="border-b border-studio-850 pb-4">
                <span className="text-xs text-studio-400 font-mono block uppercase">Purchased Product</span>
                <h3 className="text-xl font-extrabold text-studio-100 mt-1">{data?.productName}</h3>
              </div>

              {data?.type === 'service' ? (
                <div className="p-4 bg-studio-900 rounded-xl border border-studio-850 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-studio-100">
                    <ShieldCheck className="w-4 h-4 text-studio-100" /> Service Delivery Confirmation
                  </div>
                  <p className="text-xs text-studio-300 leading-relaxed font-normal" dangerouslySetInnerHTML={{ __html: data.deliveryMessage || 'Our strategy team will contact you on WhatsApp/Email within 24 hours to begin.' }} />
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-xs text-studio-300">Your digital guide / resource is ready for immediate download:</p>
                  {data?.downloadUrl && (
                    <a
                      href={data.downloadUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-[#171717] text-white font-extrabold text-sm uppercase tracking-wider rounded-full hover:bg-[#292929] transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                      <Download className="w-5 h-5" /> Download Now
                    </a>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="pt-4">
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-medium text-studio-400 hover:text-studio-100 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Return to Studio Homepage
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
