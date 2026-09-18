import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Sparkles, 
  Search, 
  ArrowRight, 
  Star, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  RefreshCw, 
  SlidersHorizontal,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { runSkillMatch } from '../utils/skillMatchEngine';
import { SkillMatchResult, Service } from '../types';

interface SkillMatchPageProps {
  initialPrompt?: string;
  onViewCreator: (username: string) => void;
  onViewService: (service: Service) => void;
  onBookService: (service: Service) => void;
}

export const SkillMatchPage: React.FC<SkillMatchPageProps> = ({
  initialPrompt = '',
  onViewCreator,
  onViewService,
  onBookService
}) => {
  const [prompt, setPrompt] = useState(
    initialPrompt || 'I need someone to create a gaming montage for my YouTube channel.'
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [results, setResults] = useState<SkillMatchResult[]>([]);

  const samplePrompts = [
    'I need someone to create a gaming montage for my YouTube channel.',
    'Looking for a modern esports logo and brand identity for my Discord group.',
    'Need a custom Discord bot with auto-roles and welcome commands in Python.',
    'Urgent AP Calculus exam prep and problem solving session for this weekend.',
    'Lo-fi beat for my study stream and background podcast audio cleanup.'
  ];

  const analysisSteps = [
    'Understanding natural language request...',
    'Extracting technical skill criteria & tags...',
    'Evaluating creator portfolios & completion velocity...',
    'Calculating multi-variable match ranking...'
  ];

  const executeMatch = (queryToRun: string) => {
    if (!queryToRun.trim()) return;

    setIsAnalyzing(true);
    setAnalysisStep(0);
    setResults([]);

    // Step 1
    setTimeout(() => {
      setAnalysisStep(1);
    }, 400);

    // Step 2
    setTimeout(() => {
      setAnalysisStep(2);
    }, 900);

    // Step 3
    setTimeout(() => {
      setAnalysisStep(3);
    }, 1400);

    // Done
    setTimeout(() => {
      const matchResults = runSkillMatch(queryToRun);
      setResults(matchResults);
      setIsAnalyzing(false);
    }, 1900);
  };

  useEffect(() => {
    // Run initial search
    executeMatch(prompt);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeMatch(prompt);
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 text-slate-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-4 shadow-sm shadow-cyan-500/20">
            <Bot className="h-4 w-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-bold text-cyan-300 tracking-wide uppercase">
              SkillMatch NLP Recommendation Engine
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            &quot;Tell us what you need.{' '}
            <span className="gradient-text">We&apos;ll find the right skill.&quot;</span>
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our intelligent matching algorithm analyzes your project requirements against verified creator skillsets, response times, and past performance ratings.
          </p>
        </div>

        {/* Large NLP Prompt Input Box */}
        <div className="relative rounded-3xl border border-white/15 bg-[#121526]/90 p-3 sm:p-4 shadow-2xl backdrop-blur-2xl mb-8">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative flex items-start gap-3">
              <div className="pt-2 text-cyan-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <textarea
                id="skillmatch-input"
                rows={3}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your project: e.g., 'I need someone to create a gaming montage for my YouTube channel with sound design and fast turnaround'..."
                className="w-full resize-none bg-transparent text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none leading-relaxed"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-white/5">
              <div className="flex flex-wrap gap-1.5 items-center">
                <span className="text-[11px] text-slate-400">Quick prompts:</span>
                {samplePrompts.slice(0, 3).map((sample, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setPrompt(sample);
                      executeMatch(sample);
                    }}
                    className="truncate max-w-[200px] sm:max-w-xs rounded-lg bg-white/5 px-2 py-1 text-[11px] text-slate-300 hover:text-cyan-300 hover:bg-white/10 transition-colors"
                    title={sample}
                  >
                    {sample}
                  </button>
                ))}
              </div>

              <button
                id="skillmatch-submit-btn"
                type="submit"
                disabled={isAnalyzing}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:opacity-95 px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xl shadow-cyan-500/25 transition-all disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    <span>Analyzing Request...</span>
                  </>
                ) : (
                  <>
                    <Bot className="h-4 w-4" />
                    <span>Find Best Matches</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* AI-Style Multi-Stage Loading Animation */}
        {isAnalyzing && (
          <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#101328] to-[#0b0d18] p-8 text-center shadow-2xl backdrop-blur-xl animate-in fade-in duration-200">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400 mb-4 border border-cyan-400/40 animate-pulse">
              <Bot className="h-7 w-7" />
            </div>

            <h3 className="font-heading text-lg font-bold text-white">
              SkillMatch AI is processing your request
            </h3>

            {/* Dynamic Step Display */}
            <div className="mt-6 max-w-md mx-auto space-y-3">
              {analysisSteps.map((stepDesc, idx) => {
                const isPassed = analysisStep > idx;
                const isCurrent = analysisStep === idx;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 p-2.5 rounded-xl border text-xs transition-all duration-300 ${
                      isPassed
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                        : isCurrent
                        ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-200 font-semibold scale-102'
                        : 'bg-white/[0.02] border-white/5 text-slate-500'
                    }`}
                  >
                    {isPassed ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    ) : isCurrent ? (
                      <RefreshCw className="h-4 w-4 text-cyan-400 animate-spin shrink-0" />
                    ) : (
                      <div className="h-4 w-4 rounded-full border border-slate-600 shrink-0" />
                    )}
                    <span className="truncate">{stepDesc}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Results List */}
        {!isAnalyzing && results.length > 0 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="font-heading text-sm font-bold text-white uppercase tracking-wider">
                  Top AI Recommendations ({results.length})
                </span>
                <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
                  Confidence Score &gt; 90%
                </span>
              </div>
              <span className="text-xs text-slate-400">
                Sorted by semantic skill alignment
              </span>
            </div>

            {results.map((item, index) => {
              const { creator, matchScore, matchReasons, matchedSkills, suggestedService } = item;

              return (
                <div
                  key={creator.id}
                  id={`skillmatch-result-${creator.id}`}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#14172a]/90 via-[#101324] to-[#0c0e1a] p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-cyan-500/10"
                >
                  {/* Top Match Ribbon */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={creator.avatar}
                          alt={creator.name}
                          className="h-14 w-14 rounded-2xl object-cover border-2 border-purple-500/40"
                        />
                        <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500 text-black shadow">
                          <UserCheck className="h-3 w-3 stroke-[2.5]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-heading text-lg font-bold text-white">
                            {creator.name}
                          </h3>
                          <span className="text-xs font-mono text-slate-400">
                            @{creator.username}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-purple-300">
                          {creator.tagline || `${creator.category} Specialist`}
                        </p>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                          <span className="flex items-center gap-1 text-amber-300 font-bold">
                            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                            {creator.rating.toFixed(1)} ({creator.reviewCount})
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-slate-300">
                            <Clock className="h-3 w-3 text-cyan-400" />
                            {creator.responseTime} response
                          </span>
                          <span>•</span>
                          <span className="text-slate-300">Level {creator.level}</span>
                        </div>
                      </div>
                    </div>

                    {/* Prominent Match Percentage Score */}
                    <div className="flex items-center sm:flex-col sm:items-end justify-between sm:justify-center">
                      <div className="inline-flex items-center gap-1.5 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-3.5 py-1.5 border border-cyan-400/40 shadow-sm shadow-cyan-500/20">
                        <Zap className="h-4 w-4 text-cyan-300 fill-cyan-300 animate-pulse" />
                        <span className="font-heading text-lg font-black text-cyan-300 tracking-tight">
                          {matchScore}% MATCH
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 font-semibold">
                        High Confidence Score
                      </span>
                    </div>
                  </div>

                  {/* Why this creator matches Breakdown */}
                  <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-black/40 p-4 border border-white/5 space-y-2">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>Why this creator matches:</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {matchReasons.map((reason, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <span className="text-emerald-400 font-bold">✓</span>
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Matched Service Card Preview */}
                    <div className="rounded-2xl bg-purple-950/20 p-4 border border-purple-500/20 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block mb-1">
                          Recommended Service
                        </span>
                        <h5 className="font-heading text-xs sm:text-sm font-bold text-white line-clamp-2">
                          {suggestedService.title}
                        </h5>
                        <div className="mt-2 flex items-center justify-between text-xs">
                          <span className="text-slate-400">Starting package:</span>
                          <span className="font-heading text-base font-extrabold text-white">
                            ₹{suggestedService.startingPrice}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-3 flex items-center gap-2 pt-2 border-t border-white/5">
                        <button
                          id={`skillmatch-view-profile-${creator.id}`}
                          onClick={() => onViewCreator(creator.username)}
                          className="flex-1 rounded-xl bg-white/5 hover:bg-white/10 py-2 text-xs font-bold text-slate-200 border border-white/10 transition-colors text-center"
                        >
                          View Profile
                        </button>
                        <button
                          id={`skillmatch-book-now-${creator.id}`}
                          onClick={() => onBookService(suggestedService)}
                          className="flex-1 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 py-2 text-xs font-bold text-white shadow-md shadow-purple-600/30 transition-all text-center"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Technical Architecture Note */}
        <div className="mt-12 rounded-2xl border border-white/5 bg-black/40 p-4 text-center text-xs text-slate-400">
          <p>
            🧠 <strong>Architecture & Implementation:</strong> This recommendation engine runs deterministic semantic extraction calculating category alignment, skill token overlap, completion rating, response time, and urgency. It is fully ready for Gemini API streaming integration via server-side endpoints.
          </p>
        </div>

      </div>
    </div>
  );
};
