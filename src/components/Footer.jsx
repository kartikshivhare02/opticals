import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#FDFBF7] text-[#1A1918] py-12 px-4 sm:px-8 md:px-12 border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Newsletter Gazette Strip */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <h4 className="font-display text-lg font-bold uppercase text-[#1A1918]">
              The Visionary Gazette
            </h4>
            <p className="font-sans text-[#736E65] text-xs font-light">
              Receive private notifications for limited archive allocations and new brand arrivals.
            </p>
          </div>

          {subscribed ? (
            <div className="flex items-center gap-2 text-[#8F7238] text-xs font-sans">
              <Check className="w-4 h-4 text-[#B89758]" />
              <span>You are subscribed to private updates.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                required
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-full bg-white border border-black/10 text-xs text-[#1A1918] placeholder-stone-400 focus:outline-none focus:border-[#B89758]"
              />
              <button
                type="submit"
                className="px-5 py-2 rounded-full bg-[#1A1918] hover:bg-[#8F7238] text-[#FDFBF7] font-sans font-medium text-xs uppercase tracking-wider transition-colors"
              >
                Join
              </button>
            </form>
          )}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-black/5 font-mono text-[10px] text-[#9E9A91]">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border border-[#B89758] flex items-center justify-center text-[9px] font-display font-bold text-[#8F7238]">
              JO
            </div>
            <span>© 2026 JASLEEN OPTICALS. AUTHORIZED LUXURY RETAILER.</span>
          </div>

          <div className="flex items-center gap-4">
            <span onClick={onOpenBooking} className="hover:text-[#8F7238] cursor-pointer transition-colors">VIP Fitting</span>
            <span className="hover:text-[#8F7238] cursor-pointer transition-colors">Authenticity Guarantee</span>
            <span className="hover:text-[#8F7238] cursor-pointer transition-colors">Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
