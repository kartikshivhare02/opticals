import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Sparkles, Check, User, Mail, Phone } from 'lucide-react';

const ATELIER_LOCATIONS = [
  { id: 'delhi', name: 'New Delhi Flagship Atelier', area: 'South Extension II, New Delhi' },
  { id: 'milan', name: 'Milano Private Suite', area: 'Via Montenapoleone, Milan' },
  { id: 'london', name: 'London Mayfair Salon', area: 'Mount Street, Mayfair' },
  { id: 'tokyo', name: 'Tokyo Ginza Atelier', area: 'Ginza 6-Chome, Chuo City' },
];

export default function VipFittingModal({ isOpen, onClose, initialData }) {
  const [step, setStep] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState(ATELIER_LOCATIONS[0].id);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '14:00 - 15:30 (Private Suite)',
    champagne: true,
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleResetAndClose = () => {
    setStep(1);
    onClose();
  };

  const activeLoc = ATELIER_LOCATIONS.find((l) => l.id === selectedLocation);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#FDFBF7] rounded-3xl border border-black/10 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-black/5 flex items-center justify-between bg-white">
          <div>
            <div className="flex items-center gap-1.5 text-[#8F7238] font-mono text-[10px] uppercase tracking-widest mb-0.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Concierge Protocol</span>
            </div>
            <h3 className="font-display text-xl font-bold uppercase text-[#1A1918]">
              Private Atelier Fitting
            </h3>
          </div>

          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-[#736E65] hover:text-[#1A1918] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {initialData && (
                <div className="p-3 rounded-xl gold-badge-light flex items-center justify-between text-xs">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#8F7238] block">Allocation</span>
                    <span className="font-display font-semibold text-[#1A1918]">{initialData.piece}</span>
                  </div>
                  <span className="font-mono font-bold text-[#8F7238]">{initialData.price}</span>
                </div>
              )}

              {/* Location */}
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-[#736E65] mb-1.5">
                  1. Atelier Destination
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {ATELIER_LOCATIONS.map((loc) => (
                    <button
                      type="button"
                      key={loc.id}
                      onClick={() => setSelectedLocation(loc.id)}
                      className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                        selectedLocation === loc.id
                          ? 'bg-[#B89758]/15 border-[#B89758] text-[#8F7238]'
                          : 'bg-white border-black/5 text-[#736E65] hover:border-black/20'
                      }`}
                    >
                      <div className="font-sans font-medium text-[11px]">{loc.name}</div>
                      <div className="font-mono text-[9px] text-[#9E9A91] mt-0.5">{loc.area}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Info */}
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-[#736E65] mb-1.5">
                  2. Client Particulars
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Full Legal Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-black/10 text-xs text-[#1A1918] placeholder-stone-400 focus:outline-none focus:border-[#B89758]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile / WhatsApp"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-black/10 text-xs text-[#1A1918] placeholder-stone-400 focus:outline-none focus:border-[#B89758]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="VIP Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full sm:col-span-2 px-3.5 py-2.5 rounded-xl bg-white border border-black/10 text-xs text-[#1A1918] placeholder-stone-400 focus:outline-none focus:border-[#B89758]"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-[#736E65] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-black/10 text-xs text-[#1A1918] focus:outline-none focus:border-[#B89758]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-[#736E65] mb-1">
                    Suite Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-black/10 text-xs text-[#1A1918] focus:outline-none focus:border-[#B89758]"
                  >
                    <option>11:00 - 12:30 (Morning)</option>
                    <option>14:00 - 15:30 (Private Suite)</option>
                    <option>16:30 - 18:00 (Sunset Salon)</option>
                  </select>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#1A1918] hover:bg-[#8F7238] text-[#FDFBF7] font-sans font-bold text-xs uppercase tracking-[0.2em] transition-colors mt-2"
              >
                Confirm Private Fitting Protocol
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center text-center py-6">
              <div className="w-12 h-12 rounded-full bg-[#B89758]/20 flex items-center justify-center text-[#8F7238] mb-3">
                <Check className="w-6 h-6" />
              </div>
              <span className="font-mono text-[10px] text-[#8F7238] uppercase tracking-widest">
                Reservation Confirmed
              </span>
              <h4 className="font-display text-2xl font-bold uppercase text-[#1A1918] mb-1">
                Atelier Suite Reserved
              </h4>
              <p className="font-sans text-xs text-[#736E65] max-w-xs mb-6">
                Your private master optician concierge has been allocated at <span className="font-semibold text-[#1A1918]">{activeLoc?.name}</span>.
              </p>

              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-full bg-[#1A1918] text-[#FDFBF7] font-sans text-xs uppercase tracking-wider hover:bg-[#8F7238] transition-colors"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
