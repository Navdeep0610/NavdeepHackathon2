import React from 'react';
import { 
  Zap, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Github, 
  Twitter, 
  Compass, 
  Bot, 
  Award, 
  ExternalLink,
  Code2,
  FileText
} from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, param?: string) => void;
  onOpenDecisions?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDecisions }) => {
  return (
    <footer className="relative border-t border-white/10 bg-[#080911] text-slate-400 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-80 w-[600px] rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Col 1 & 2: Brand & Hackathon Context */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-0.5 shadow-lg shadow-purple-500/20">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#0b0c14]">
                  <Zap className="h-4 w-4 text-cyan-300" />
                </div>
              </div>
              <span className="font-heading text-lg font-black text-white tracking-tight">
                TEEN<span className="gradient-text">VERSE</span>HUB
              </span>
              <span className="rounded-full bg-purple-500/15 px-2 py-0.5 text-[10px] font-semibold text-purple-300 border border-purple-500/30">
                SkillSwap
              </span>
            </div>

            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              &quot;Your Skill Has Value. Let&apos;s Find Its Opportunity.&quot; The youth creator economy platform where teen talent gets verified, discovered, and commissioned with transparent milestone pricing.
            </p>

            {/* Hackathon Badge Box */}
            <div className="rounded-2xl border border-purple-500/30 bg-purple-950/20 p-3.5 space-y-1.5 max-w-md">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-cyan-300 uppercase tracking-wider">
                <Code2 className="h-3.5 w-3.5 text-cyan-400" />
                <span>Code2Career AI Hackathon</span>
              </div>
              <p className="text-[11px] text-slate-300">
                <strong>Track 2:</strong> Real-World AI Products
              </p>
              <p className="text-[11px] text-purple-300">
                <strong>Selected Brief:</strong> Creator Economy — SkillSwap
              </p>
            </div>
          </div>

          {/* Col 3: Discover Categories */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-3">
              Explore Skills
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('skillswap', 'Video')} 
                  className="hover:text-purple-300 transition-colors"
                >
                  Video & Montages (₹299+)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('skillswap', 'Design')} 
                  className="hover:text-purple-300 transition-colors"
                >
                  Logo & Visual Design (₹199+)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('skillswap', 'Coding')} 
                  className="hover:text-purple-300 transition-colors"
                >
                  Web Dev & Discord Bots (₹349+)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('skillswap', 'Music')} 
                  className="hover:text-purple-300 transition-colors"
                >
                  Lo-Fi & Music Beats (₹249+)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('skillswap', 'Tutoring')} 
                  className="hover:text-purple-300 transition-colors"
                >
                  STEM & AP Tutoring (₹249+)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform Features */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-3">
              Platform Features
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('skillmatch')} 
                  className="flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 transition-colors font-semibold"
                >
                  <Bot className="h-3.5 w-3.5" />
                  <span>SkillMatch AI Engine</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('quests')} 
                  className="flex items-center gap-1.5 hover:text-purple-300 transition-colors"
                >
                  <Award className="h-3.5 w-3.5 text-amber-400" />
                  <span>Skill Quests & XP Badges</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('creator', 'maya.designs')} 
                  className="hover:text-purple-300 transition-colors"
                >
                  Digital Creator Passport
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('creator-dashboard')} 
                  className="hover:text-purple-300 transition-colors"
                >
                  AI Profile Generator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('client-dashboard')} 
                  className="hover:text-purple-300 transition-colors"
                >
                  Milestone Escrow Simulator
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Hackathon Documentation */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-3">
              Architecture & Docs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenDecisions}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <FileText className="h-3.5 w-3.5 text-purple-400" />
                  <span>DECISIONS.md</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDecisions}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <FileText className="h-3.5 w-3.5 text-cyan-400" />
                  <span>README.md Summary</span>
                </button>
              </li>
              <li>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Vite + React 19 Live</span>
                </div>
              </li>
              <li>
                <span className="text-[11px] text-slate-400">
                  Deterministic Local NLP
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Copyright and Transparency Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 TeenVerseHub (SkillSwap). All creator profiles, stats, and project bookings are simulated demo data for hackathon presentation.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">
              Built for Young Creators Worldwide
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
