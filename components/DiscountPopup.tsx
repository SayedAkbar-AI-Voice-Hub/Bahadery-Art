
import React, { useState, useEffect } from 'react';

const DiscountPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('bahadery_discount_seen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('bahadery_discount_seen', 'true');
  };

  const handleCTA = () => {
    handleClose();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
          <p className="text-stone-600 text-base leading-relaxed mb-6 font-light">
            As a new patron of Bahadery Art Gallery, enjoy an exclusive <strong className="text-stone-900">20% discount</strong> on your first custom artwork commission — whether it's a canvas painting delivered to your door or a hand-painted mural at your location.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleCTA}
              className="flex-1 bg-stone-900 text-white py-4 font-bold uppercase tracking-[0.15em] text-[11px] hover:bg-stone-800 transition-all shadow-lg"
            >
              Claim Your Discount
            </button>
            <button
              onClick={handleClose}
              className="flex-1 bg-transparent border border-stone-200 text-stone-500 py-4 font-bold uppercase tracking-[0.15em] text-[11px] hover:bg-stone-50 transition-all"
            >
              Maybe Later
            </button>
          </div>

          <p className="text-[10px] text-stone-400 mt-4 uppercase tracking-widest">
            Mention "FIRST20" when you contact us
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;
