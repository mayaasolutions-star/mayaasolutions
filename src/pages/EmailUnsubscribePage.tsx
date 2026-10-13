import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Loader2 } from 'lucide-react';
import { recordUnsubscribe } from '../services/unsubscribeService';

export const EmailUnsubscribePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialEmail = searchParams.get('email') || searchParams.get('e') || '';

  const [email, setEmail] = useState<string>(initialEmail);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.trim()) {
      setError('Enter your email address');
      return;
    }

    setLoading(true);
    setError(null);

    const res = await recordUnsubscribe(email);
    setLoading(false);

    if (res.success) {
      setIsSuccess(true);
    } else {
      setError(res.error || 'Unable to process your request. Please try again.');
    }
  };

  return (
    <>
      <SEO
        title="Unsubscribe from emails | Mayaa Solutions"
        description="Unsubscribe from Mayaa Solutions emails."
        noindex={true}
        robots="noindex, nofollow"
      />

      <main className="min-h-screen pt-32 pb-24 bg-studio-950 flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-md w-full mx-auto bg-white rounded-3xl border border-studio-850 p-8 sm:p-10 shadow-sm text-center space-y-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
            Unsubscribe from emails
          </h1>

          {isSuccess ? (
            <p className="text-sm font-medium text-[#171717] leading-relaxed pt-2">
              You have been successfully unsubscribed from Mayaa Solutions emails.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="Enter your email address"
                className="w-full p-3.5 text-xs rounded-xl border border-studio-850 bg-studio-950 text-[#171717] placeholder-studio-600 focus:outline-none focus:border-[#171717]"
              />

              {error && (
                <p className="text-xs text-red-600 font-medium">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#171717] text-white font-extrabold text-sm uppercase tracking-wider rounded-full hover:bg-[#292929] transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    UNSUBSCRIBING...
                  </>
                ) : (
                  'UNSUBSCRIBE'
                )}
              </button>
            </form>
          )}
        </div>
      </main>
    </>
  );
};
