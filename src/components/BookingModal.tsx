import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft, 
  FileText, 
  Upload, 
  CheckCircle2, 
  Calendar,
  Zap,
  Info
} from 'lucide-react';
import { Service, PackageTier, Booking } from '../types';

interface BookingModalProps {
  service: Service;
  onClose: () => void;
  onBookingSuccess: (newBooking: Booking) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  service,
  onClose,
  onBookingSuccess
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedTier, setSelectedTier] = useState<'STARTER' | 'PRO' | 'PREMIUM'>('PRO');
  const [requirementsText, setRequirementsText] = useState('');
  const [timelineUrgency, setTimelineUrgency] = useState('Standard');
  const [projectLinks, setProjectLinks] = useState('');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const currentPackage: PackageTier = 
    selectedTier === 'STARTER' 
      ? service.packages.starter 
      : selectedTier === 'PREMIUM' 
      ? service.packages.premium 
      : service.packages.pro;

  const handleConfirmBooking = () => {
    const bookingId = `TVH-${Math.floor(10000 + Math.random() * 90000)}`;
    const deliveryDate = new Date(Date.now() + currentPackage.deliveryDays * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    const newBooking: Booking = {
      id: bookingId,
      serviceId: service.id,
      serviceTitle: service.title,
      creatorId: service.creatorId,
      creatorName: service.creatorName,
      creatorUsername: service.creatorUsername,
      creatorAvatar: service.creatorAvatar,
      clientId: 'current_client_user',
      clientName: 'Alex Mercer (You)',
      clientAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80',
      packageTier: selectedTier,
      price: currentPackage.price,
      status: 'In Progress',
      createdAt: 'Just now',
      deliveryDate: `${deliveryDate} (Estimated)`,
      requirementsNotes: requirementsText || 'Standard scope per selected package tier.',
      projectFilesCount: uploadedFileName ? 1 : 0
    };

    setStep(5);
    onBookingSuccess(newBooking);
  };

  return (
    <div 
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#111425] shadow-2xl">
        
        {/* Modal Top Banner */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-[#14182e]">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
              TeenVerseHub Commission Flow
            </span>
            <h3 className="font-heading text-base font-bold text-white">
              {step === 5 ? '🎉 Booking Confirmed' : `Book Project with ${service.creatorName}`}
            </h3>
          </div>

          <button
            id="close-booking-modal"
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Step Indicator (Steps 1-4) */}
        {step < 5 && (
          <div className="px-6 pt-4 pb-2 border-b border-white/5">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
              <span className={step >= 1 ? 'text-purple-300 font-bold' : ''}>1. Package</span>
              <span className={step >= 2 ? 'text-purple-300 font-bold' : ''}>2. Requirements</span>
              <span className={step >= 3 ? 'text-purple-300 font-bold' : ''}>3. Assets</span>
              <span className={step >= 4 ? 'text-purple-300 font-bold' : ''}>4. Review</span>
            </div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Step Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          
          {/* STEP 1: CHOOSE PACKAGE */}
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-xs text-slate-300">
                Choose the service package that fits your creative timeline and project scope.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {(['STARTER', 'PRO', 'PREMIUM'] as const).map((tierKey) => {
                  const pkg = 
                    tierKey === 'STARTER' 
                      ? service.packages.starter 
                      : tierKey === 'PREMIUM' 
                      ? service.packages.premium 
                      : service.packages.pro;
                  const isSelected = selectedTier === tierKey;

                  return (
                    <div
                      key={tierKey}
                      onClick={() => setSelectedTier(tierKey)}
                      className={`relative flex flex-col rounded-2xl p-4 cursor-pointer border transition-all ${
                        isSelected
                          ? 'border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/10'
                          : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                      }`}
                    >
                      {tierKey === 'PRO' && (
                        <span className="absolute -top-2.5 right-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">
                          Most Popular
                        </span>
                      )}

                      <div className="flex items-center justify-between">
                        <span className="font-heading text-xs font-black tracking-wider text-slate-300">
                          {tierKey}
                        </span>
                        <div className={`flex h-4 w-4 items-center justify-center rounded-full border ${isSelected ? 'border-purple-400 bg-purple-500 text-white' : 'border-slate-500'}`}>
                          {isSelected && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                        </div>
                      </div>

                      <div className="mt-2 flex items-baseline gap-1">
                        <span className="font-heading text-2xl font-extrabold text-white">
                          ₹{pkg.price}
                        </span>
                      </div>

                      <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {pkg.deliveryDays}d delivery
                        </span>
                        <span>•</span>
                        <span>{pkg.revisions}</span>
                      </div>

                      <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                        {pkg.description}
                      </p>

                      <ul className="mt-3 space-y-1.5 pt-3 border-t border-white/5 text-[11px] text-slate-300">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="h-3 w-3 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end pt-3">
                <button
                  id="booking-step1-next"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-600/30 transition-all"
                >
                  <span>Continue to Requirements</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: DESCRIBE REQUIREMENTS */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-white mb-1">
                  Describe what you want {service.creatorName} to create:
                </label>
                <textarea
                  id="booking-requirements-input"
                  rows={4}
                  value={requirementsText}
                  onChange={(e) => setRequirementsText(e.target.value)}
                  placeholder="e.g. I need a modern cyber-themed logo for our student esports team CyberBloom. We like electric cyan and deep violet colors, with clean vector typography."
                  className="w-full rounded-2xl border border-white/10 bg-black/40 p-3 text-xs text-white placeholder:text-slate-500 focus:border-purple-500 focus:outline-none"
                />
              </div>

              {/* Creator specific prompts */}
              {service.requirements && service.requirements.length > 0 && (
                <div className="rounded-xl bg-white/5 p-3.5 border border-white/5 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-300">
                    <Info className="h-3.5 w-3.5" />
                    <span>Questions from {service.creatorName}:</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                    {service.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex items-center justify-between pt-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back</span>
                </button>
                <button
                  id="booking-step2-next"
                  onClick={() => setStep(3)}
                  className="flex items-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-600/30 transition-all"
                >
                  <span>Continue to Assets</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: PROJECT INFORMATION & FILES */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-white mb-1">
                  Reference Links (Google Drive, Figma, YouTube, Behance):
                </label>
                <input
                  type="text"
                  value={projectLinks}
                  onChange={(e) => setProjectLinks(e.target.value)}
                  placeholder="https://drive.google.com/drive/folders/... or https://figma.com/..."
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1">
                  Attach Reference Asset (Optional simulated upload):
                </label>
                <div 
                  onClick={() => setUploadedFileName('project_brief_assets.zip')}
                  className="cursor-pointer border-2 border-dashed border-white/15 hover:border-purple-500/50 rounded-2xl p-6 text-center bg-black/20 transition-colors"
                >
                  <Upload className="mx-auto h-6 w-6 text-purple-400 mb-2" />
                  <p className="text-xs text-slate-300 font-medium">
                    {uploadedFileName ? (
                      <span className="text-emerald-400 font-bold flex items-center justify-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5" /> {uploadedFileName} attached!
                      </span>
                    ) : (
                      'Click to attach brief, moodboard, or raw clips'
                    )}
                  </p>
                  <span className="text-[10px] text-slate-500">ZIP, PNG, PDF, MP4 up to 500MB</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back</span>
                </button>
                <button
                  id="booking-step3-next"
                  onClick={() => setStep(4)}
                  className="flex items-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-600/30 transition-all"
                >
                  <span>Review Project Summary</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: REVIEW & CONFIRM */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 space-y-3">
                <div className="flex items-start justify-between border-b border-white/5 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-purple-400">
                      {selectedTier} PACKAGE
                    </span>
                    <h4 className="font-heading text-sm font-bold text-white">
                      {service.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Creator: {service.creatorName} (@{service.creatorUsername})
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-heading text-xl font-black text-white">
                      ₹{currentPackage.price}
                    </span>
                    <span className="block text-[10px] text-slate-400">Fixed Commission</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl bg-black/40 p-2.5 border border-white/5">
                    <span className="text-[10px] text-slate-400 block">Delivery Time</span>
                    <span className="font-semibold text-slate-200">{currentPackage.deliveryDays} Days</span>
                  </div>
                  <div className="rounded-xl bg-black/40 p-2.5 border border-white/5">
                    <span className="text-[10px] text-slate-400 block">Revisions Included</span>
                    <span className="font-semibold text-slate-200">{currentPackage.revisions}</span>
                  </div>
                </div>

                <div className="rounded-xl bg-purple-950/30 p-3 border border-purple-500/20 text-xs text-purple-200 flex items-start gap-2">
                  <ShieldCheck className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>SkillSwap Milestone Escrow:</strong> Payment is simulated for this hackathon prototype. No real money is transferred.
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3">
                <button
                  onClick={() => setStep(3)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back</span>
                </button>
                <button
                  id="booking-confirm-btn"
                  onClick={handleConfirmBooking}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 px-6 py-2.5 text-xs font-bold text-white shadow-xl shadow-purple-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
                  <span>Confirm & Create Project</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: BOOKING CONFIRMED CELEBRATION */}
          {step === 5 && (
            <div className="text-center py-6 space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-400 p-0.5 shadow-2xl shadow-emerald-500/30">
                <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#0b0c14]">
                  <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                </div>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-black text-white">
                  🎉 BOOKING CONFIRMED
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  Your project with <strong className="text-purple-300">{service.creatorName}</strong> has been created.
                </p>
              </div>

              <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-black/40 p-4 text-left space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Booking ID</span>
                  <span className="font-mono font-bold text-cyan-400">TVH-88429</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Creator</span>
                  <span className="font-semibold text-white">{service.creatorName} (@{service.creatorUsername})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Package Tier</span>
                  <span className="font-semibold text-purple-300">{selectedTier} (₹{currentPackage.price})</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Expected Delivery</span>
                  <span className="font-semibold text-emerald-400">In {currentPackage.deliveryDays} Days</span>
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  id="view-project-btn"
                  onClick={onClose}
                  className="w-full sm:w-auto rounded-xl bg-purple-600 hover:bg-purple-500 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-600/30 transition-all"
                >
                  View in Client Dashboard
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto rounded-xl bg-white/5 hover:bg-white/10 px-4 py-2.5 text-xs font-semibold text-slate-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
