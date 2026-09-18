import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Bot, 
  Compass, 
  Star, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  Users, 
  Flame, 
  Search,
  Layers,
  Clock,
  Play
} from 'lucide-react';
import { CREATORS, SERVICES, QUESTS } from '../data/mockData';
import { Service, Creator } from '../types';
import { ServiceCard } from '../components/ServiceCard';
import { CreatorPassport } from '../components/CreatorPassport';
import { HeroFloatingCards } from '../components/HeroFloatingCards';

interface LandingPageProps {
  onNavigate: (view: string, param?: string) => void;
  onViewService: (service: Service) => void;
  onViewCreator: (username: string) => void;
  onToggleSaveService: (serviceId: string) => void;
  savedServiceIds: string[];
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onNavigate,
  onViewService,
  onViewCreator,
  onToggleSaveService,
  savedServiceIds
}) => {
  const [heroSearch, setHeroSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Video', 'Design', 'Coding', 'Music', 'Tutoring', 'Animation'];

  const filteredServices = SERVICES.filter(service => {
    if (selectedCategory === 'All') return true;
    return service.category.toLowerCase() === selectedCategory.toLowerCase();
  }).slice(0, 6);

  const featuredCreators = CREATORS.slice(0, 3);

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroSearch.trim()) {
      onNavigate('skillswap');
      return;
    }
    // Check if it's natural language request -> route to SkillMatch AI!
    if (heroSearch.length > 15 || heroSearch.toLowerCase().includes('need') || heroSearch.toLowerCase().includes('want') || heroSearch.toLowerCase().includes('for my')) {
      onNavigate('skillmatch', heroSearch);
    } else {
      onNavigate('skillswap', heroSearch);
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        {/* Glow Spheres */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-tr from-purple-600/25 via-indigo-600/20 to-cyan-500/20 blur-[130px]" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Hackathon Badge Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 backdrop-blur-md mb-6 hover:border-purple-400/50 transition-all">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold text-purple-200">
              Code2Career AI Hackathon • Track 2: Real-World AI Products
            </span>
          </div>

          {/* Core Tagline Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.08]">
            Your Skill Has Value.{' '}
            <span className="gradient-text">Let&apos;s Find Its Opportunity.</span>
          </h1>

          {/* Subtitle from Official Brief */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            The youth-focused creator marketplace where young creators showcase verified skills, publish services, get discovered, and earn with transparent milestone gigs.
          </p>

          {/* Quick Search & AI Prompt Bar */}
          <form 
            onSubmit={handleHeroSearchSubmit}
            className="mt-8 mx-auto max-w-2xl"
          >
            <div className="relative flex items-center rounded-2xl border border-white/15 bg-[#121526]/90 p-2 shadow-2xl backdrop-blur-2xl focus-within:border-cyan-400/60 transition-all">
              <div className="pl-3 pr-2 text-cyan-400">
                <Bot className="h-5 w-5" />
              </div>
              <input
                id="hero-search-input"
                type="text"
                value={heroSearch}
                onChange={(e) => setHeroSearch(e.target.value)}
                placeholder="Ask SkillMatch AI: 'I need a gaming montage editor for YouTube'..."
                className="w-full bg-transparent px-2 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all shrink-0"
              >
                <span>Find Match</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <span>Popular searches:</span>
              {['Gaming montage', 'Discord bot', 'Esports logo', 'Calculus tutor', 'Lo-fi beats'].map((tag, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => onNavigate('skillswap', tag)}
                  className="rounded-full bg-white/5 px-2.5 py-0.5 text-slate-300 hover:text-cyan-300 hover:bg-white/10 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </form>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <button
              id="hero-explore-skills-btn"
              onClick={() => onNavigate('skillswap')}
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all"
            >
              <Compass className="h-4 w-4" />
              <span>Explore Skills (From ₹199)</span>
            </button>

            <button
              id="hero-try-skillmatch-btn"
              onClick={() => onNavigate('skillmatch')}
              className="flex items-center gap-2 rounded-2xl border border-cyan-500/40 bg-cyan-500/10 px-6 py-3 text-sm font-bold text-cyan-300 backdrop-blur-xl hover:bg-cyan-500/20 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-cyan-500/10"
            >
              <Bot className="h-4 w-4 text-cyan-400" />
              <span>Try SkillMatch AI</span>
            </button>

            <button
              id="hero-become-creator-btn"
              onClick={() => onNavigate('creator-dashboard')}
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10 transition-all"
            >
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span>Become a Creator</span>
            </button>
          </div>

          {/* Floating Skill Categories Bento */}
          <div className="mt-12">
            <HeroFloatingCards onSelectCategory={(cat) => onNavigate('skillswap', cat)} />
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRENDING SERVICES MARKETPLACE PREVIEW */}
      {/* ========================================================================= */}
      <section className="py-16 border-t border-white/5 bg-[#0a0c16]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400">
                <Flame className="h-4 w-4 text-orange-400" />
                <span>Youth Creator Gigs</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-black text-white mt-1">
                Trending Services on SkillSwap
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Hand-crafted packages created by talented young designers, editors, tutors, and coders.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Service Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isSaved={savedServiceIds.includes(service.id)}
                onToggleSave={onToggleSaveService}
                onViewService={onViewService}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              id="view-all-services-cta"
              onClick={() => onNavigate('skillswap', selectedCategory !== 'All' ? selectedCategory : undefined)}
              className="inline-flex items-center gap-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 text-xs font-bold text-slate-200 transition-all hover:scale-105"
            >
              <span>Explore All 30+ Verified Services</span>
              <ArrowRight className="h-4 w-4 text-cyan-400" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SIGNATURE FEATURE: DIGITAL CREATOR PASSPORTS */}
      {/* ========================================================================= */}
      <section className="py-16 border-t border-white/5 bg-[#0e101f]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-300 border border-cyan-500/20 mb-3">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
              <span>Signature TeenVerseHub Innovation</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white">
              The Digital Creator Passport
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Forget traditional resumes. Each young creator holds a dynamic passport displaying proof of abilities, completed milestone projects, verified XP levels, and genuine client ratings.
            </p>
          </div>

          {/* 3 Featured Passports in Bento Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredCreators.map((creator) => (
              <CreatorPassport
                key={creator.id}
                creator={creator}
                onViewPortfolio={() => onViewCreator(creator.username)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SKILLMATCH AI HIGHLIGHT SECTION */}
      {/* ========================================================================= */}
      <section className="py-16 border-t border-white/5 relative overflow-hidden bg-gradient-to-b from-[#0e101f] to-[#0a0c16]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-purple-950/40 via-[#101328] to-cyan-950/30 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl overflow-hidden">
            
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-bold text-cyan-300 border border-cyan-400/30 mb-3">
                  <Bot className="h-4 w-4" />
                  <span>AI-Powered Matchmaking</span>
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl font-black text-white leading-tight">
                  &quot;Tell us what you need.{' '}
                  <span className="text-cyan-300">We&apos;ll find the right skill.&quot;</span>
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  No need to manually scroll through hundreds of profiles. Type your project description in plain English, and our deterministic NLP engine extracts the exact technical skills, turnaround urgency, and budget constraints to calculate 90%+ matching creators.
                </p>

                <div className="mt-6 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                    <span>Calculates skill overlap, past project ratings, and response times</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                    <span>Explains exactly &quot;Why this creator matches&quot; with itemized bullet points</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                    <span>Instant booking link directly to the best-suited package</span>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    id="cta-open-skillmatch"
                    onClick={() => onNavigate('skillmatch')}
                    className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 py-3 text-xs font-bold text-white shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all"
                  >
                    <Bot className="h-4 w-4" />
                    <span>Launch SkillMatch AI Engine</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Interactive Match Demo Mockup */}
              <div className="rounded-2xl border border-white/10 bg-[#080a14]/90 p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-mono text-slate-400 ml-2">SkillMatch Analysis</span>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                    96% MATCH
                  </span>
                </div>

                <div className="mt-3 rounded-xl bg-white/5 p-3 text-xs text-slate-300 font-mono">
                  &ldquo;I need someone to create a gaming montage for my YouTube channel.&rdquo;
                </div>

                <div className="mt-3 flex items-center gap-3 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
                    alt="Alex"
                    className="h-11 w-11 rounded-xl object-cover border border-purple-400"
                  />
                  <div>
                    <h5 className="font-heading text-xs font-bold text-white">Alex Rivera</h5>
                    <p className="text-[11px] text-purple-300">Gaming Video Editor • Level 10</p>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                      <span className="text-amber-300 font-bold">⭐ 4.9</span>
                      <span>• ⚡ Fast Responder</span>
                      <span>• Starting ₹349</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 space-y-1 text-[11px] text-slate-300">
                  <p className="text-[10px] uppercase font-bold text-cyan-400">Why this creator matches:</p>
                  <div className="flex items-center gap-1.5 text-emerald-300">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>Gaming editing & sound design expertise</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-300">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>Demonstrated YouTube retention pacing</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-300">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>2-day delivery with fast revisions</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SKILL QUESTS SECTION */}
      {/* ========================================================================= */}
      <section className="py-16 border-t border-white/5 bg-[#0a0c16]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Award className="h-4 w-4 text-amber-400" />
                <span>Level Up Your Skills</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-black text-white mt-1">
                Active Skill Quests
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Real client challenges. Earn XP points, unlock verification badges, and cash bounties.
              </p>
            </div>

            <button
              onClick={() => onNavigate('quests')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>View All Quests</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {QUESTS.slice(0, 3).map((quest) => (
              <div
                key={quest.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#121526]/80 p-5 backdrop-blur-xl transition-all hover:border-amber-500/40 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-lg bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-slate-300 border border-white/5">
                      {quest.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-amber-300">
                      <Zap className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      <span>+{quest.xpReward} XP</span>
                    </span>
                  </div>

                  <h4 className="font-heading text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {quest.title}
                  </h4>

                  <p className="mt-1.5 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {quest.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-xs py-2 border-t border-white/5">
                    <span className="text-slate-400">Cash Bounty:</span>
                    <span className="font-heading text-sm font-extrabold text-emerald-400">
                      ₹{quest.budget || (quest.xpReward * 2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('quests')}
                  className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 py-2 text-xs font-bold text-amber-300 transition-all"
                >
                  <span>Accept Quest</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. HOW IT WORKS */}
      {/* ========================================================================= */}
      <section className="py-16 border-t border-white/5 bg-[#0e101f]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-white">
            How TeenVerseHub Works
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
            Simple, safe, and transparent creator gig workflow for students and clients alike.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              {
                step: '01',
                title: 'Discover or Prompt AI',
                desc: 'Browse categories or type your exact project into SkillMatch AI for an instant 90%+ match calculation.'
              },
              {
                step: '02',
                title: 'Review Creator Passport',
                desc: 'Inspect verified skill endorsements, interactive Before/After sliders, video previews, and XP rank.'
              },
              {
                step: '03',
                title: 'Safe Milestone Booking',
                desc: 'Pick transparent Starter, Pro, or Premium packages with clear delivery timelines and revision terms.'
              },
              {
                step: '04',
                title: 'Deliver, Review & Level Up',
                desc: 'Receive your high-quality deliverable. Young creators earn fair pay, project XP, and level promotions!'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-white/10 bg-[#121526]/60 p-6 backdrop-blur-xl"
              >
                <span className="font-mono text-3xl font-black text-purple-500/40 block mb-2">
                  {item.step}
                </span>
                <h4 className="font-heading text-base font-bold text-white mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FINAL CTA CALLOUT */}
      {/* ========================================================================= */}
      <section className="py-20 border-t border-white/5 relative overflow-hidden bg-gradient-to-tr from-purple-950/50 via-[#0b0c16] to-cyan-950/40">
        <div className="mx-auto max-w-4xl px-4 text-center relative z-10 space-y-6">
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to turn your skills into{' '}
            <span className="gradient-text">real opportunities?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Join hundreds of teen video editors, UI designers, music producers, tutors, and coders already earning and building verified creator identities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('creator-dashboard')}
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all"
            >
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span>Create Your Creator Passport</span>
            </button>
            <button
              onClick={() => onNavigate('skillswap')}
              className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-200 transition-all"
            >
              <Compass className="h-4 w-4 text-cyan-300" />
              <span>Browse All Marketplace Services</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
