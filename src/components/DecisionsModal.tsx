import React from 'react';
import { X, FileText, Code2, ShieldCheck, Sparkles, Zap, Award } from 'lucide-react';

interface DecisionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DecisionsModal: React.FC<DecisionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-3xl border border-white/15 bg-[#101324] shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-[#14182e]">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-cyan-400" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
                Code2Career AI Hackathon — Track 2
              </span>
              <h3 className="font-heading text-base font-bold text-white">
                DECISIONS.md • Architecture & Product Rationale
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs text-slate-300 leading-relaxed">
          
          <div className="rounded-2xl bg-purple-950/30 p-4 border border-purple-500/30">
            <h4 className="font-heading text-sm font-bold text-white flex items-center gap-2">
              <Zap className="h-4 w-4 text-cyan-400" />
              <span>Project Core Identity</span>
            </h4>
            <p className="mt-1 text-purple-200">
              <strong>Project:</strong> TeenVerseHub • <strong>Core Product:</strong> SkillSwap • <strong>Brief:</strong> &quot;A gig marketplace where young creators — design, editing, tutoring, music — list services and clients book them.&quot;
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-white mb-1.5">
              1. The &quot;Experience Paradox&quot; &amp; Why TeenVerseHub was Built
            </h4>
            <p>
              Traditional marketplaces like Fiverr or Upwork create insurmountable barriers for youth: requiring adult tax credentials, 20% take rates, and penalizing new creators without established review history. TeenVerseHub breaks this barrier with the <strong>Digital Creator Passport</strong>, verifiable <strong>Skill Quests</strong>, and interactive <strong>Before/After proof portfolios</strong>.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-white mb-1.5">
              2. Target Demographic
            </h4>
            <p>
              Young creators (ages 13–19) offering CapCut/Premiere editing, thumbnail &amp; branding design, Discord bot/React programming, and STEM peer tutoring. Clients include student venture founders, campus clubs, content creators/streamers, and local micro-businesses.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-white mb-1.5">
              3. AI-Powered Enhancements
            </h4>
            <p>
              <strong>SkillMatch AI:</strong> Features a deterministic semantic NLP extraction engine that computes category alignment, skill token overlap, turnaround urgency, and creator velocity to present 90%+ matching recommendations with explicit &quot;Why this matches&quot; rationales.  
              <strong>AI Profile Builder:</strong> Converts brief casual statements into market-ready headlines, bios, skill tags, and tiered pricing packages.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-white mb-1.5">
              4. Safety &amp; Trust for Youth
            </h4>
            <p>
              All transactions operate under simulated milestone escrow. Creators are shielded with pseudonym handles, verified skills, and portfolio work rather than private PII or physical addresses.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t border-white/10 p-4 bg-[#14182e] flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-purple-600 hover:bg-purple-500 px-5 py-2 text-xs font-bold text-white shadow-md transition-all"
          >
            Close Documentation
          </button>
        </div>

      </div>
    </div>
  );
};
