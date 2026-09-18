import React, { useState } from 'react';
import { 
  Zap, 
  Sparkles, 
  DollarSign, 
  ShoppingBag, 
  Eye, 
  Plus, 
  CheckCircle2, 
  Clock, 
  FileText, 
  RefreshCw, 
  Check, 
  Edit3, 
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Tag
} from 'lucide-react';
import { generateCreatorProfileSuggestions, GeneratedProfileData } from '../utils/aiProfileBuilder';
import { Booking, Service, Category } from '../types';
import { SERVICES, BOOKINGS } from '../data/mockData';

interface CreatorDashboardPageProps {
  onNavigate: (view: string, param?: string) => void;
  onViewService: (service: Service) => void;
}

export const CreatorDashboardPage: React.FC<CreatorDashboardPageProps> = ({
  onNavigate,
  onViewService
}) => {
  // AI Profile Builder state
  const [promptInput, setPromptInput] = useState('I edit gaming videos and make thumbnails.');
  const [isGenerating, setIsGenerating] = useState(false);
  const [profileSuggestions, setProfileSuggestions] = useState<GeneratedProfileData | null>(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  // New Service Quick Create
  const [newServiceTitle, setNewServiceTitle] = useState('');
  const [newServicePrice, setNewServicePrice] = useState(299);
  const [newServiceCategory, setNewServiceCategory] = useState<Category>('Video');
  const [activeServices, setActiveServices] = useState<Service[]>(SERVICES.filter(s => s.creatorId === 'c1'));

  const handleGenerateAI = () => {
    setIsGenerating(true);
    setAppliedSuccess(false);
    setTimeout(() => {
      const generated = generateCreatorProfileSuggestions(promptInput);
      setProfileSuggestions(generated);
      setIsGenerating(false);
    }, 800);
  };

  const handleApplySuggestions = () => {
    setAppliedSuccess(true);
    setTimeout(() => setAppliedSuccess(false), 3000);
  };

  const handleCreateService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newServiceTitle.trim()) return;

    const newService: Service = {
      id: `s_custom_${Date.now()}`,
      creatorId: 'c1',
      creatorName: 'Maya Chen',
      creatorUsername: 'maya.designs',
      creatorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      creatorRating: 5.0,
      title: newServiceTitle,
      category: newServiceCategory,
      description: 'Custom creative gig crafted directly via TeenVerseHub Creator Studio.',
      startingPrice: newServicePrice,
      deliveryDays: 3,
      rating: 5.0,
      reviewsCount: 1,
      skills: ['Custom Project', newServiceCategory],
      coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
      packages: {
        starter: { name: 'STARTER', price: newServicePrice, deliveryDays: 3, revisions: '1 Revision', description: 'Standard deliverable', features: ['Core asset', 'High resolution'] },
        pro: { name: 'PRO', price: Math.round(newServicePrice * 2.2), deliveryDays: 2, revisions: '3 Revisions', description: 'Full kit', features: ['Core asset', 'Source files', 'Commercial use'] },
        premium: { name: 'PREMIUM', price: Math.round(newServicePrice * 4), deliveryDays: 1, revisions: 'Unlimited Revisions', description: 'Priority rush', features: ['Everything in Pro', '24h Rush', '1-on-1 Call'] }
      }
    };

    setActiveServices([newService, ...activeServices]);
    setNewServiceTitle('');
  };

  return (
    <div className="min-h-screen py-10 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-purple-400">
                Creator Studio
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                Active Creator • Level 12
              </span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl font-black text-white mt-1">
              Creator Dashboard & Growth Hub
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Manage your active commissions, track earned milestone payout, and power your profile with AI.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('creator', 'maya.designs')}
              className="flex items-center gap-1.5 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5 text-cyan-400" />
              <span>Preview Public Passport</span>
            </button>
          </div>
        </div>

        {/* Creator Stats Overview */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-white/10 bg-[#121526]/80 p-4 backdrop-blur-xl">
            <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
              <span>Total Earnings</span>
              <DollarSign className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="mt-2 font-heading text-2xl font-black text-white">
              ₹18,450
            </div>
            <span className="text-[10px] text-emerald-400 font-semibold">
              +₹3,200 this week
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#121526]/80 p-4 backdrop-blur-xl">
            <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
              <span>Active Orders</span>
              <ShoppingBag className="h-4 w-4 text-purple-400" />
            </div>
            <div className="mt-2 font-heading text-2xl font-black text-purple-300">
              3
            </div>
            <span className="text-[10px] text-slate-400">
              All on track for on-time delivery
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#121526]/80 p-4 backdrop-blur-xl">
            <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
              <span>Creator XP Rank</span>
              <Zap className="h-4 w-4 text-amber-400" />
            </div>
            <div className="mt-2 font-heading text-2xl font-black text-amber-300">
              Level 12
            </div>
            <span className="text-[10px] text-slate-400">
              1,240 / 1,500 XP
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#121526]/80 p-4 backdrop-blur-xl">
            <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
              <span>Passport Views</span>
              <Eye className="h-4 w-4 text-cyan-400" />
            </div>
            <div className="mt-2 font-heading text-2xl font-black text-cyan-300">
              1,420
            </div>
            <span className="text-[10px] text-cyan-400">
              +18% from SkillMatch AI
            </span>
          </div>
        </div>

        {/* Feature Spotlight: AI PROFILE BUILDER */}
        <div className="mt-10 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-950/40 via-[#12152a] to-cyan-950/30 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-purple-300">
              AI Profile Builder (Deterministic Local Mode)
            </span>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl font-black text-white">
            Generate High-Converting Profile & Gig Copy with AI
          </h2>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl">
            Not sure how to write a compelling bio or title your gigs? Describe your skills naturally, and our AI builder synthesizes a punchy headline, professional bio, skill tags, and starter packages.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              id="ai-profile-input"
              type="text"
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              placeholder="e.g. I edit gaming videos and make thumbnails"
              className="flex-1 rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:border-purple-500 focus:outline-none"
            />
            <button
              id="generate-ai-profile-btn"
              onClick={handleGenerateAI}
              disabled={isGenerating}
              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-xs font-bold text-white shadow-xl shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all shrink-0"
            >
              {isGenerating ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4 text-yellow-300" />}
              <span>{isGenerating ? 'Generating...' : 'Generate Profile'}</span>
            </button>
          </div>

          {/* Generated Profile Preview */}
          {profileSuggestions && (
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5 space-y-4 animate-in fade-in duration-200">
              <div>
                <span className="text-[10px] font-bold uppercase text-cyan-400">Suggested Headline</span>
                <h4 className="font-heading text-sm sm:text-base font-bold text-white mt-0.5">
                  {profileSuggestions.headline}
                </h4>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase text-purple-400">Professional Bio</span>
                <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                  {profileSuggestions.bio}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                  Suggested Skill Tags
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {profileSuggestions.suggestedSkills.map((sk, i) => (
                    <span key={i} className="rounded-lg bg-purple-500/20 px-2 py-0.5 text-xs text-purple-300 border border-purple-500/30">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                  Suggested Gig Packages
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {profileSuggestions.suggestedServices.map((srv, idx) => (
                    <div key={idx} className="rounded-xl bg-white/5 p-2.5 border border-white/5 text-xs flex justify-between items-center">
                      <span className="font-medium text-white">{srv.title}</span>
                      <span className="font-bold text-emerald-400">₹{srv.starterPrice}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  id="apply-ai-suggestions-btn"
                  onClick={handleApplySuggestions}
                  className="flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-bold text-white transition-all shadow-md shadow-emerald-600/30"
                >
                  <Check className="h-4 w-4" />
                  <span>{appliedSuccess ? 'Applied to Passport!' : 'Use Suggestions'}</span>
                </button>
                <button
                  onClick={handleGenerateAI}
                  className="flex items-center gap-1.5 rounded-xl bg-white/5 hover:bg-white/10 px-4 py-2 text-xs font-semibold text-slate-300 transition-colors"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  <span>Regenerate</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Active Services & Quick Create */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Active Services Manager */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h3 className="font-heading text-base font-bold text-white">
                Your Published Services ({activeServices.length})
              </h3>
            </div>

            <div className="space-y-3">
              {activeServices.map((srv) => (
                <div
                  key={srv.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl border border-white/10 bg-[#121526]/80 backdrop-blur-xl gap-4"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={srv.coverImage}
                      alt={srv.title}
                      className="h-12 w-16 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-heading text-xs sm:text-sm font-bold text-white">
                        {srv.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Category: {srv.category} • Starting ₹{srv.startingPrice}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onViewService(srv)}
                      className="rounded-xl bg-white/5 hover:bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200 border border-white/10 transition-colors"
                    >
                      View Live
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Add New Service Box */}
          <div className="rounded-3xl border border-white/10 bg-[#121526]/80 p-6 backdrop-blur-xl space-y-4">
            <h3 className="font-heading text-sm font-bold text-white flex items-center gap-2">
              <Plus className="h-4 w-4 text-purple-400" />
              <span>Publish New Service</span>
            </h3>

            <form onSubmit={handleCreateService} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Service Title:
                </label>
                <input
                  type="text"
                  value={newServiceTitle}
                  onChange={(e) => setNewServiceTitle(e.target.value)}
                  placeholder="e.g. Modern YouTube Thumbnail Pack"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Category:
                </label>
                <select
                  value={newServiceCategory}
                  onChange={(e) => setNewServiceCategory(e.target.value as Category)}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-white focus:outline-none"
                >
                  <option value="Video">Video Editing</option>
                  <option value="Design">Design & Branding</option>
                  <option value="Coding">Web & Bots</option>
                  <option value="Music">Music & Audio</option>
                  <option value="Tutoring">STEM Tutoring</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Starting Price (INR):
                </label>
                <input
                  type="number"
                  min="199"
                  step="50"
                  value={newServicePrice}
                  onChange={(e) => setNewServicePrice(parseInt(e.target.value, 10))}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 rounded-xl bg-purple-600 hover:bg-purple-500 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-600/30 transition-all"
              >
                Publish Service
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
