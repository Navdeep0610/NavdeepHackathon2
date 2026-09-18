import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Star, 
  Award, 
  Zap, 
  Share2, 
  ExternalLink, 
  Check, 
  Clock, 
  Flame,
  CheckCircle2,
  Copy
} from 'lucide-react';
import { Creator } from '../types';

interface CreatorPassportProps {
  creator: Creator;
  onViewPortfolio?: () => void;
  compact?: boolean;
}

export const CreatorPassport: React.FC<CreatorPassportProps> = ({
  creator,
  onViewPortfolio,
  compact = false
}) => {
  const [copied, setCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setShowShareModal(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const xpPercentage = Math.min(100, Math.round((creator.xp / creator.nextLevelXp) * 100));

  return (
    <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#181c33]/90 via-[#13162a]/95 to-[#0e1020] p-6 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-purple-500/30 group ${compact ? 'max-w-md' : 'w-full'}`}>
      
      {/* Holographic Watermark & Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-600/15 blur-3xl" />
      
      {/* Subtle Passport Guilloche Pattern Lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Header Bar */}
      <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/20 border border-purple-500/40 text-purple-300">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading text-xs font-black tracking-widest text-slate-300 uppercase">
                TEENVERSEHUB
              </span>
              <span className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-bold text-cyan-400 tracking-wider uppercase">
                VERIFIED ID
              </span>
            </div>
            <p className="text-[9px] tracking-wider text-purple-300/80 uppercase font-semibold">
              DIGITAL CREATOR PASSPORT
            </p>
          </div>
        </div>

        {/* Level Emblem */}
        <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 px-3 py-1 border border-purple-500/30">
          <Zap className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
          <span className="font-heading text-xs font-black text-white tracking-wider">
            LEVEL {creator.level}
          </span>
        </div>
      </div>

      {/* Main Identity Body */}
      <div className="relative mt-5 flex flex-col sm:flex-row items-center sm:items-start gap-4">
        
        {/* Holographic Avatar Frame */}
        <div className="relative">
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-2xl border-2 border-purple-500/40 p-0.5 shadow-xl shadow-purple-500/20 group-hover:border-cyan-400/60 transition-colors">
            <img 
              src={creator.avatar} 
              alt={creator.name}
              className="h-full w-full rounded-[14px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-2 -right-1 flex items-center gap-1 rounded-full bg-[#0b0c14] border border-cyan-400/40 px-2 py-0.5 shadow">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] font-bold text-slate-300">Active</span>
          </div>
        </div>

        {/* Name & Reputation Metadata */}
        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h3 className="font-heading text-xl font-bold text-white tracking-tight">
              {creator.name}
            </h3>
            <span className="rounded-md bg-white/5 px-2 py-0.5 text-xs font-mono text-purple-300 border border-white/10">
              @{creator.username}
            </span>
          </div>

          <p className="mt-1 text-xs text-slate-300 line-clamp-2 leading-relaxed">
            {creator.tagline || creator.bio}
          </p>

          {/* Key Metric Chips */}
          <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs">
            <div className="flex items-center gap-1 rounded-lg bg-amber-500/10 px-2 py-1 text-amber-300 border border-amber-500/20 font-semibold">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span>{creator.rating.toFixed(1)}</span>
              <span className="text-[10px] text-amber-300/70 font-normal">({creator.reviewCount})</span>
            </div>

            <div className="flex items-center gap-1 rounded-lg bg-purple-500/10 px-2 py-1 text-purple-300 border border-purple-500/20 font-semibold">
              <Award className="h-3.5 w-3.5 text-purple-400" />
              <span>{creator.badges.length} Badges</span>
            </div>

            <div className="flex items-center gap-1 rounded-lg bg-cyan-500/10 px-2 py-1 text-cyan-300 border border-cyan-500/20 font-semibold">
              <Zap className="h-3.5 w-3.5 text-cyan-400" />
              <span>{creator.completedProjects} Projects</span>
            </div>

            <div className="flex items-center gap-1 rounded-lg bg-white/5 px-2 py-1 text-slate-300 border border-white/5 text-[11px]">
              <Clock className="h-3 w-3 text-slate-400" />
              <span>{creator.responseTime} response</span>
            </div>
          </div>
        </div>
      </div>

      {/* Verified Skills Pill Grid */}
      <div className="relative mt-4 pt-3 border-t border-white/5">
        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
          <span>Verified Skill Endorsements</span>
          <span className="text-cyan-400 text-[9px]">Proof Tested</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {creator.skills.slice(0, 5).map((skill, idx) => (
            <span 
              key={idx}
              className="inline-flex items-center gap-1 rounded-lg bg-white/[0.04] px-2 py-1 text-xs text-slate-200 border border-white/10 hover:border-purple-500/30 transition-colors"
            >
              <CheckCircle2 className="h-3 w-3 text-cyan-400" />
              <span>{skill.name}</span>
              {skill.endorsements && (
                <span className="ml-0.5 rounded bg-white/10 px-1 py-0.2 text-[10px] text-slate-400 font-mono">
                  {skill.endorsements}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* XP Progression Bar */}
      <div className="relative mt-4 rounded-xl bg-black/40 p-3 border border-white/5">
        <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
          <div className="flex items-center gap-1.5 text-purple-300">
            <Flame className="h-3.5 w-3.5 text-orange-400 animate-bounce" />
            <span>XP PROGRESSION</span>
          </div>
          <span className="font-mono text-slate-300 text-[11px]">
            {creator.xp.toLocaleString()} / {creator.nextLevelXp.toLocaleString()} XP
          </span>
        </div>
        
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 transition-all duration-700 ease-out"
            style={{ width: `${xpPercentage}%` }}
          />
        </div>
        <p className="mt-1 text-[10px] text-slate-400 text-right">
          +{creator.nextLevelXp - creator.xp} XP to reach Level {creator.level + 1}
        </p>
      </div>

      {/* Passport Action Buttons */}
      <div className="relative mt-5 flex items-center gap-2.5">
        {onViewPortfolio && (
          <button
            id={`passport-view-portfolio-${creator.id}`}
            onClick={onViewPortfolio}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-2 text-xs font-bold text-white shadow-md shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>View Portfolio</span>
          </button>
        )}

        <button
          id={`passport-share-btn-${creator.id}`}
          onClick={handleShare}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-white/5 hover:bg-white/10 px-3.5 py-2 text-xs font-semibold text-slate-200 border border-white/10 transition-all hover:border-white/20 active:scale-95"
          title="Share Creator Passport"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Share2 className="h-3.5 w-3.5 text-cyan-400" />}
          <span>{copied ? 'Copied!' : 'Share Passport'}</span>
        </button>
      </div>

      {/* Share Modal Dialog */}
      {showShareModal && (
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center bg-[#0b0c14]/95 p-6 backdrop-blur-md rounded-3xl animate-in fade-in duration-150 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 mb-2">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h4 className="font-heading font-bold text-white text-sm">Passport Link Copied!</h4>
          <p className="text-xs text-slate-400 mt-1 max-w-xs">
            Direct link to {creator.name}&apos;s verified Creator Passport is on your clipboard.
          </p>
          <div className="mt-3 flex items-center gap-1.5 p-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300 w-full justify-between">
            <span className="truncate">teenversehub.app/creator/{creator.username}</span>
            <Copy className="h-3 w-3 text-slate-400 shrink-0" />
          </div>
          <button
            onClick={() => setShowShareModal(false)}
            className="mt-4 px-4 py-1.5 rounded-xl bg-purple-600 text-xs font-semibold text-white hover:bg-purple-500 transition-colors"
          >
            Done
          </button>
        </div>
      )}

      {/* Legal Prototype Disclaimer */}
      <div className="relative mt-3 text-center">
        <span className="text-[9px] text-slate-400">
          Digital creator profile identity for TeenVerseHub SkillSwap • Not an official state ID
        </span>
      </div>
    </div>
  );
};
