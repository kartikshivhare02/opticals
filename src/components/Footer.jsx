import React, { useState } from 'react';
import { ArrowRight, Check, MapPin, Phone, MessageSquare, Shield, Clock } from 'lucide-react';

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
    <footer className="relative bg-[#FDFBF7] text-[#1A1918] pt-14 pb-10 px-4 sm:px-8 md:px-12 border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-black/5">
          
          {/* Brand & Store Bio */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full border border-[#B89758] flex items-center justify-center text-[10px] font-display font-bold text-[#8F7238]">
                JO
              </div>
              <h3 className="font-display text-base font-bold tracking-[0.2em] text-[#1A1918] uppercase">
                Jasleen Opticals
              </h3>
            </div>

            <p className="font-sans text-xs text-[#736E65] font-normal leading-relaxed mb-4 max-w-sm">
              Your trusted destination for luxury sunglasses, designer prescription frames, and computer blue-cut lenses. Authorized retailer for 100% original international eyewear brands.
            </p>

            <div className="space-y-1.5 font-sans text-xs text-[#1A1918]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8F7238] flex-shrink-0" />
                <span>D-Block, South Extension Part-2, New Delhi 110049</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8F7238] flex-shrink-0" />
                <span>+91 98765 43210 (WhatsApp Support Available)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#8F7238] flex-shrink-0" />
                <span>Monday - Sunday: 10:30 AM to 8:30 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#1A1918] mb-3">
              Popular Categories
            </h4>
            <ul className="space-y-2 font-sans text-xs text-[#736E65]">
              <li><a href="#collection" className="hover:text-[#8F7238] transition-colors">Titanium Spectacles</a></li>
              <li><a href="#collection" className="hover:text-[#8F7238] transition-colors">Computer Blue-Cut Glasses</a></li>
              <li><a href="#collection" className="hover:text-[#8F7238] transition-colors">Rimless & Light Frames</a></li>
              <li><a href="#brands" className="hover:text-[#8F7238] transition-colors">Ray-Ban & Oakley Sunglasses</a></li>
              <li><a href="#brands" className="hover:text-[#8F7238] transition-colors">Smart Ray-Ban Meta Glasses</a></li>
            </ul>
          </div>

          {/* Newsletter / WhatsApp Offers */}
          <div className="md:col-span-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#1A1918] mb-1.5">
              Exclusive Offers & New Arrivals
            </h4>
            <p className="font-sans text-xs text-[#736E65] font-normal leading-relaxed mb-3">
              Subscribe for festive discounts, free eye test camps, and new collection launches.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-[#059669] text-xs font-sans font-semibold">
                <Check className="w-4 h-4 text-[#059669]" />
                <span>Thank you! You are registered for special offers.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email / mobile..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-full bg-white border border-black/10 text-xs text-[#1A1918] placeholder-stone-400 focus:outline-none focus:border-[#B89758]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-full bg-[#1A1918] hover:bg-[#8F7238] text-[#FDFBF7] font-sans font-semibold text-xs transition-colors whitespace-nowrap"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 font-sans text-[11px] text-[#736E65]">
          <div>
            © 2026 JASLEEN OPTICALS. ALL RIGHTS RESERVED. (NEW DELHI, INDIA)
          </div>

          <div className="flex items-center gap-5">
            <span onClick={onOpenBooking} className="hover:text-[#8F7238] cursor-pointer font-medium">Free Eye Test</span>
            <span className="hover:text-[#8F7238] cursor-pointer">100% Genuine Guarantee</span>
            <span className="hover:text-[#8F7238] cursor-pointer">Pan-India Delivery</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
