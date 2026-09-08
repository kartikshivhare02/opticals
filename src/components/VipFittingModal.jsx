import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Sparkles, Check, User, Mail, Phone } from 'lucide-react';

const STORE_LOCATIONS = [
  { id: 'nagpur-dhantoli', name: 'Dhantoli Flagship Store', area: 'Main Road, Dhantoli, Nagpur' },
  { id: 'nagpur-sadar', name: 'Sadar Eyewear Studio', area: 'Residency Road, Sadar, Nagpur' },
  { id: 'home', name: 'Home Eye Test & Frame Trial', area: 'At Your Doorstep (Nagpur & Vidarbha)' },
];

export default function VipFittingModal({ isOpen, onClose, initialData }) {
  const [step, setStep] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState(STORE_LOCATIONS[0].id);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: '11:00 AM - 02:00 PM (Morning Slot)',
    needsEyeTest: true,
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

  const activeLoc = STORE_LOCATIONS.find((l) => l.id === selectedLocation);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#FDFBF7] rounded-3xl border border-black/10 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-black/5 flex items-center justify-between bg-white">
          <div>
            <div className="flex items-center gap-1.5 text-[#8F7238] font-sans text-[10px] uppercase font-bold tracking-wider mb-0.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Jasleen Opticals • 100% Free Consultation</span>
            </div>
            <h3 className="font-sans text-xl font-bold uppercase text-[#1A1918]">
              Book Free Eye Test & Trial
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
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {initialData && (
                <div className="p-3 rounded-xl gold-badge-light flex items-center justify-between text-xs">
                  <div>
                    <span className="font-sans text-[10px] uppercase font-bold text-[#8F7238] block">Selected Frame</span>
                    <span className="font-sans font-bold text-[#1A1918]">{initialData.piece}</span>
                  </div>
                  <span className="font-sans font-bold text-[#8F7238] text-sm">{initialData.price}</span>
                </div>
              )}

              {/* 1. Location / Mode */}
              <div>
                <label className="block font-sans text-xs font-bold uppercase tracking-wider text-[#736E65] mb-1.5">
                  1. Select Store or Home Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {STORE_LOCATIONS.map((loc) => (
                    <button
                      type="button"
                      key={loc.id}
                      onClick={() => setSelectedLocation(loc.id)}
                      className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                        selectedLocation === loc.id
                          ? 'bg-[#B89758]/15 border-[#B89758] text-[#8F7238] font-semibold'
                          : 'bg-white border-black/5 text-[#736E65] hover:border-black/20'
                      }`}
                    >
                      <div className="font-sans font-bold text-xs">{loc.name}</div>
                      <div className="font-sans text-[10px] text-[#9E9A91] mt-0.5">{loc.area}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Contact Details */}
              <div>
                <label className="block font-sans text-xs font-bold uppercase tracking-wider text-[#736E65] mb-1.5">
                  2. Your Contact Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-black/10 text-xs text-[#1A1918] placeholder-stone-400 focus:outline-none focus:border-[#B89758]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp / Mobile Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-black/10 text-xs text-[#1A1918] placeholder-stone-400 focus:outline-none focus:border-[#B89758]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address (Optional)"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full sm:col-span-2 px-3.5 py-2.5 rounded-xl bg-white border border-black/10 text-xs text-[#1A1918] placeholder-stone-400 focus:outline-none focus:border-[#B89758]"
                  />
                </div>
              </div>

              {/* 3. Date & Time */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-sans text-[11px] font-semibold text-[#736E65] mb-1">
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
                  <label className="block font-sans text-[11px] font-semibold text-[#736E65] mb-1">
                    Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-black/10 text-xs text-[#1A1918] focus:outline-none focus:border-[#B89758]"
                  >
                    <option>11:00 AM - 02:00 PM (Morning)</option>
                    <option>02:00 PM - 05:00 PM (Afternoon)</option>
                    <option>05:00 PM - 08:30 PM (Evening)</option>
                  </select>
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-black/5">
                <input
                  type="checkbox"
                  id="needsEyeTest"
                  checked={formData.needsEyeTest}
                  onChange={(e) => setFormData({ ...formData, needsEyeTest: e.target.checked })}
                  className="w-4 h-4 rounded text-[#B89758] focus:ring-[#B89758]"
                />
                <label htmlFor="needsEyeTest" className="font-sans text-xs text-[#1A1918] cursor-pointer">
                  I need a Computerized Eye Power Checkup (Free of Cost)
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#1A1918] hover:bg-[#8F7238] text-[#FDFBF7] font-sans font-bold text-xs uppercase tracking-wider transition-colors shadow-md mt-2"
              >
                Confirm Free Appointment
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center text-center py-6">
              <div className="w-14 h-14 rounded-full bg-[#B89758]/20 flex items-center justify-center text-[#8F7238] mb-3">
                <Check className="w-7 h-7" />
              </div>
              <span className="font-sans text-[10px] text-[#8F7238] uppercase font-bold tracking-wider">
                Appointment Booked
              </span>
              <h4 className="font-sans text-2xl font-bold uppercase text-[#1A1918] mb-1">
                Thank You, {formData.name || 'Valued Customer'}!
              </h4>
              <p className="font-sans text-xs text-[#736E65] max-w-xs mb-4">
                Our optometry team from Jasleen Opticals has reserved your slot at <span className="font-bold text-[#1A1918]">{activeLoc?.name}</span>.
              </p>

              <div className="w-full p-3 rounded-xl bg-white border border-black/5 text-left font-sans text-xs space-y-1.5 mb-6">
                <div className="flex justify-between">
                  <span className="text-[#736E65]">Booking ID:</span>
                  <span className="font-bold text-[#8F7238]">JO-DELHI-{Math.floor(1000 + Math.random() * 9000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#736E65]">Phone:</span>
                  <span className="font-bold text-[#1A1918]">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#736E65]">WhatsApp Confirmation:</span>
                  <span className="text-[#059669] font-bold">Sent to Mobile</span>
                </div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="px-8 py-2.5 rounded-full bg-[#1A1918] text-[#FDFBF7] font-sans text-xs uppercase font-semibold hover:bg-[#8F7238] transition-colors"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
