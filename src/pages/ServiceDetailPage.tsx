import React, { useState } from 'react';
import { 
  Star, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowLeft, 
  Sparkles, 
  Share2, 
  Heart, 
  MessageSquare, 
  Check, 
  AlertCircle,
  Zap,
  Info
} from 'lucide-react';
import { Service, Creator } from '../types';
import { CREATORS } from '../data/mockData';

interface ServiceDetailPageProps {
  service: Service;
  onBack: () => void;
  onViewCreator: (username: string) => void;
  onBookService: (service: Service) => void;
  onStartConversation: (creatorId: string) => void;
  onToggleSaveService: (serviceId: string) => void;
  isSaved: boolean;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
  onViewCreator,
  onBookService,
  onStartConversation,
  onToggleSaveService,
  isSaved
}) => {
  const [selectedPackageTier, setSelectedPackageTier] = useState<'starter' | 'pro' | 'premium'>('pro');

  const creator = CREATORS.find(c => c.id === service.creatorId) || CREATORS[0];
  const activePackage = service.packages[selectedPackageTier];

  return (
    <div className="min-h-screen py-8 sm:py-12 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to marketplace</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSaveService(service.id)}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold border transition-all ${
                isSaved
                  ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
              }`}
            >
              <Heart className={`h-3.5 w-3.5 ${isSaved ? 'fill-rose-400 text-rose-400' : ''}`} />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>

        {/* Main Grid: Details (Left 60%) + Sticky Booking Box (Right 40%) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Details, Overview, Deliverables */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Title & Metadata */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="rounded-lg bg-purple-500/20 px-2.5 py-1 text-xs font-bold text-purple-300 border border-purple-500/30">
                  {service.category}
                </span>
                {service.ordersInQueue && (
                  <span className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                    🔥 {service.ordersInQueue} orders currently in progress
                  </span>
                )}
              </div>

              <h1 className="font-heading text-2xl sm:text-4xl font-black text-white leading-tight">
                {service.title}
              </h1>

              {/* Creator Snippet Bar */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div 
                  onClick={() => onViewCreator(service.creatorUsername)}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <img
                    src={service.creatorAvatar}
                    alt={service.creatorName}
                    className="h-12 w-12 rounded-xl object-cover border border-purple-400/40 group-hover:border-cyan-400 transition-colors"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-heading text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                        {service.creatorName}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        @{service.creatorUsername}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                      <span className="flex items-center gap-1 text-amber-400 font-bold">
                        <Star className="h-3 w-3 fill-amber-400" />
                        {service.rating.toFixed(1)} ({service.reviewsCount} reviews)
                      </span>
                      <span>•</span>
                      <span className="text-cyan-400 font-medium">Level {creator.level} Creator</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onViewCreator(service.creatorUsername)}
                  className="rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 px-3 py-1.5 text-xs font-semibold text-purple-300 transition-all"
                >
                  View Creator Passport →
                </button>
              </div>
            </div>

            {/* Cover Image Gallery */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl">
              <img
                src={service.coverImage}
                alt={service.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Description & Overview */}
            <div className="rounded-3xl border border-white/10 bg-[#121526]/80 p-6 backdrop-blur-xl space-y-4">
              <h2 className="font-heading text-lg font-bold text-white">
                About This Service
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                {service.description}
              </p>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-white/5">
                <span className="block text-xs font-semibold text-slate-400 mb-2">
                  Skills & Tools Used in this Gig:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {service.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-200 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* What Creator Will Need From You */}
            {service.requirements && (
              <div className="rounded-3xl border border-white/10 bg-[#121526]/80 p-6 backdrop-blur-xl space-y-3">
                <h3 className="font-heading text-base font-bold text-white flex items-center gap-2">
                  <Info className="h-4 w-4 text-purple-400" />
                  <span>Requirements Before Starting</span>
                </h3>
                <p className="text-xs text-slate-400">
                  You will be prompted for these details after booking to guarantee smooth turnaround:
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  {service.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Package Comparison Grid */}
            <div className="rounded-3xl border border-white/10 bg-[#121526]/80 p-6 backdrop-blur-xl space-y-4">
              <h3 className="font-heading text-base font-bold text-white">
                Compare Packages
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {(['starter', 'pro', 'premium'] as const).map((tierKey) => {
                  const pkg = service.packages[tierKey];
                  return (
                    <div
                      key={tierKey}
                      className={`rounded-2xl p-4 border flex flex-col justify-between ${
                        selectedPackageTier === tierKey
                          ? 'bg-purple-500/10 border-purple-500'
                          : 'bg-white/[0.02] border-white/5'
                      }`}
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300">
                          {tierKey}
                        </span>
                        <div className="font-heading text-xl font-black text-white mt-1">
                          ₹{pkg.price}
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">
                          {pkg.deliveryDays}d delivery • {pkg.revisions}
                        </p>
                      </div>
                      <ul className="mt-3 space-y-1 text-[11px] text-slate-300">
                        {pkg.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-1">
                            <span className="text-cyan-400 font-bold">✓</span>
                            <span className="truncate">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Commission Selector Box */}
          <div className="sticky top-24 space-y-4">
            <div className="rounded-3xl border border-purple-500/30 bg-[#14172a]/95 p-6 backdrop-blur-2xl shadow-2xl space-y-5">
              
              {/* Package Tier Tabs */}
              <div className="flex rounded-xl bg-black/40 p-1 border border-white/5">
                {(['starter', 'pro', 'premium'] as const).map((tierKey) => (
                  <button
                    key={tierKey}
                    onClick={() => setSelectedPackageTier(tierKey)}
                    className={`flex-1 rounded-lg py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                      selectedPackageTier === tierKey
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tierKey}
                  </button>
                ))}
              </div>

              {/* Price & Delivery Details */}
              <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold">Total Price</span>
                  <div className="font-heading text-3xl font-black text-white">
                    ₹{activePackage.price}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 flex items-center justify-end gap-1">
                    <Clock className="h-3.5 w-3.5 text-cyan-400" />
                    {activePackage.deliveryDays} Days Delivery
                  </span>
                  <span className="text-[11px] text-purple-300 font-medium">
                    {activePackage.revisions}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {activePackage.description}
              </p>

              {/* Package Features List */}
              <ul className="space-y-2 text-xs text-slate-200">
                {activePackage.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Book Button */}
              <button
                id="service-book-now-button"
                onClick={() => onBookService(service)}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 py-3.5 text-sm font-bold text-white shadow-xl shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Sparkles className="h-4 w-4 text-yellow-300" />
                <span>Book This Package (₹{activePackage.price})</span>
              </button>

              <button
                onClick={() => onStartConversation(service.creatorId)}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 py-2.5 text-xs font-semibold text-slate-300 transition-colors"
              >
                <MessageSquare className="h-3.5 w-3.5 text-cyan-400" />
                <span>Contact {service.creatorName}</span>
              </button>

              {/* Safe Escrow Guarantee */}
              <div className="rounded-xl bg-black/40 p-3 border border-white/5 text-[11px] text-slate-400 flex items-start gap-2">
                <ShieldCheck className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                <span>
                  <strong>SkillSwap Milestone Protection:</strong> Payments are held safely until deliverable review is approved. Prototype simulation.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
