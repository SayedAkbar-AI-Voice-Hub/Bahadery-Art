
import React, { useState, useEffect } from 'react';

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/Er1cETQk7bVrn97N4m8N/webhook-trigger/08034bf4-710a-4fef-a3a4-ad37e6e39102';

const DiscountPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('bahadery_discount_seen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsVisible(true), 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('bahadery_discount_seen', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('sending');
    try {
      const params = new URLSearchParams();
      params.append('email', email);
      params.append('source', 'discount_popup');
      params.append('discount_code', 'FIRST20');
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        body: params,
        mode: 'no-cors',
      });
      setStatus('sent');
      localStorage.setItem('bahadery_discount_seen', 'true');
      setTimeout(() => setIsVisible(false), 3000);
    } catch {
      setStatus('idle');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm" onClick={handleClose} />
      <div
        className="relative bg-white w-full max-w-lg overflow-hidden shadow-2xl border border-stone-200"
        style={{ animation: 'popupIn 0.4s ease-out' }}
      >
        <button
          className="absolute top-4 right-4 z-10 p-2 text-stone-400 hover:text-stone-900 transition-colors"
          onClick={handleClose}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="bg-stone-900 text-white py-8 px-8 text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400 block mb-3 font-bold">Welcome Offer</span>
          <h3 className="text-3xl font-bold serif mb-2">20% Off</h3>
          <p className="text-stone-300 text-sm font-light">Your First Commission</p>
        </div>

        <div className="p-8 text-center">
          {status === 'sent' ? (
            <div className="py-6">
              <svg className="w-16 h-16 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="text-xl font-bold text-stone-900 serif mb-2">You're In!</h4>
              <p className="text-stone-600 font-light mb-2">
                Your discount code <strong className="text-stone-900">FIRST20</strong> has been sent to your email.
              </p>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest">Use it when you contact us for your first commission</p>
            </div>
          ) : (
            <>
              <p className="text-stone-600 text-base leading-relaxed mb-6 font-light">
                Subscribe to get an exclusive <strong className="text-stone-900">20% discount</strong> on your first custom artwork commission — canvas painting or hand-painted mural.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-stone-200 p-4 text-sm focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all text-stone-900 placeholder-stone-400 outline-none"
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-stone-900 text-white py-4 font-bold uppercase tracking-[0.15em] text-[11px] hover:bg-stone-800 transition-all shadow-lg disabled:opacity-50"
                >
                  {status === 'sending' ? 'Subscribing...' : 'Get 20% Off'}
                </button>
              </form>

              <button
                onClick={handleClose}
                className="mt-3 text-stone-400 text-[11px] uppercase tracking-widest hover:text-stone-600 transition-colors"
              >
                No thanks
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;
