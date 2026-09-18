import React, { useState } from 'react';
import { 
  Award, 
  Zap, 
  Clock, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Filter, 
  ShieldCheck,
  TrendingUp,
  X
} from 'lucide-react';
import { QUESTS } from '../data/mockData';
import { SkillQuest } from '../types';

interface QuestsPageProps {
  onNavigate: (view: string, param?: string) => void;
}

export const QuestsPage: React.FC<QuestsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalQuest, setActiveModalQuest] = useState<SkillQuest | null>(null);
  const [acceptedQuestIds, setAcceptedQuestIds] = useState<string[]>([]);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const categories = ['All', 'Video Editing', 'Design', 'Coding', 'Music & Audio', 'Writing'];

  const filteredQuests = QUESTS.filter(q => {
    if (selectedCategory === 'All') return true;
    return q.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  const handleAcceptQuest = (quest: SkillQuest) => {
    if (!acceptedQuestIds.includes(quest.id)) {
      setAcceptedQuestIds(prev => [...prev, quest.id]);
    }
    setActiveModalQuest(quest);
    setSubmissionSuccess(false);
  };

  const handleSimulateSubmit = () => {
    setSubmissionSuccess(true);
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md mb-4 shadow-sm shadow-amber-500/20">
            <Award className="h-4 w-4 text-amber-400" />
            <span className="text-xs font-bold text-amber-300 tracking-wide uppercase">
              Skill Quests & Challenges
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Real challenges.{' '}
            <span className="gradient-text">Real experience.</span>
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Tired of &quot;experience required&quot; barriers? Accept client-sponsored Skill Quests to prove your capabilities, earn XP ranks, unlock verified creator badges, and win direct cash bounties.
          </p>
        </div>

        {/* Quests Category Filter Tabs */}
        <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-4 scrollbar-none mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuests.map((quest) => {
            const isAccepted = acceptedQuestIds.includes(quest.id);

            return (
              <div
                key={quest.id}
                id={`quest-card-${quest.id}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#14172a]/90 via-[#101324] to-[#0c0e1a] p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-amber-500/10"
              >
                <div>
                  
                  {/* Category & XP Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-lg bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-300 border border-white/5">
                      {quest.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-300 rounded-full bg-amber-500/10 px-2.5 py-0.5 border border-amber-500/30">
                      <Zap className="h-3.5 w-3.5 fill-amber-400 text-amber-400 animate-pulse" />
                      <span>+{quest.xpReward} XP</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {quest.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {quest.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-4 pt-3 border-t border-white/5 space-y-1 text-xs text-slate-300">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Deliverables:
                    </span>
                    {quest.deliverables.slice(0, 2).map((del, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px]">
                        <CheckCircle2 className="h-3 w-3 text-cyan-400 shrink-0" />
                        <span className="truncate">{del}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quest Metrics: Cash Bounty & Deadline */}
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs pt-3 border-t border-white/5">
                    <div className="rounded-xl bg-black/40 p-2.5 border border-white/5">
                      <span className="text-[10px] text-slate-400 block">Cash Bounty</span>
                      <span className="font-heading text-base font-extrabold text-emerald-400">
                        ₹{quest.budget || (quest.xpReward * 2)}
                      </span>
                    </div>

                    <div className="rounded-xl bg-black/40 p-2.5 border border-white/5">
                      <span className="text-[10px] text-slate-400 block">Deadline</span>
                      <span className="font-semibold text-slate-200 flex items-center gap-1 mt-0.5">
                        <Clock className="h-3 w-3 text-amber-400" />
                        {quest.deadline || quest.estimatedTime}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {quest.submissionCount || quest.submissionsCount || 12} creators submitted
                    </span>
                    <span className="rounded bg-purple-500/20 text-purple-300 px-1.5 py-0.5 text-[10px] font-semibold">
                      {quest.difficulty}
                    </span>
                  </div>

                </div>

                {/* Quest Action Button */}
                <button
                  id={`accept-quest-btn-${quest.id}`}
                  onClick={() => handleAcceptQuest(quest)}
                  className={`mt-5 flex w-full items-center justify-center gap-2 rounded-2xl py-2.5 text-xs font-bold transition-all ${
                    isAccepted
                      ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-600/40'
                      : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98]'
                  }`}
                >
                  {isAccepted ? (
                    <>
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Quest Active • View / Submit</span>
                    </>
                  ) : (
                    <>
                      <Zap className="h-3.5 w-3.5 fill-current" />
                      <span>Accept Quest</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Quest Modal Details / Submission Flow */}
        {activeModalQuest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-xl animate-in fade-in duration-200">
            <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-[#121526] shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-[#15192e]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    Skill Quest Brief
                  </span>
                  <h3 className="font-heading text-base font-bold text-white">
                    {activeModalQuest.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalQuest(null)}
                  className="rounded-full p-2 text-slate-400 hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Client Reward</span>
                    <span className="font-heading text-lg font-black text-emerald-400">
                      ₹{activeModalQuest.budget}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Experience</span>
                    <span className="font-heading text-lg font-black text-amber-300">
                      +{activeModalQuest.xpReward} XP
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Time Left</span>
                    <span className="font-bold text-slate-200">
                      {activeModalQuest.deadline}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-white mb-1">Quest Objective</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeModalQuest.description}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
                  <h4 className="text-xs font-semibold text-white mb-2">Required Deliverables:</h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {(activeModalQuest.deliverables || []).map((d: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submission Flow */}
                {submissionSuccess ? (
                  <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-center space-y-2">
                    <CheckCircle2 className="h-8 w-8 text-emerald-400 mx-auto" />
                    <h5 className="font-heading text-sm font-bold text-white">Quest Submission Received!</h5>
                    <p className="text-xs text-slate-300">
                      +{activeModalQuest.xpReward} XP has been queued for your Creator Passport upon client verification.
                    </p>
                  </div>
                ) : (
                  <div className="pt-2">
                    <label className="block text-xs font-semibold text-white mb-1">
                      Deliverable Link (Google Drive / GitHub / YouTube Unlisted):
                    </label>
                    <input
                      type="text"
                      placeholder="https://drive.google.com/..."
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none mb-3"
                    />
                    <button
                      id="submit-quest-deliverable-btn"
                      onClick={handleSimulateSubmit}
                      className="w-full rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 py-2.5 text-xs font-bold text-black shadow-lg shadow-amber-500/20 hover:opacity-90 transition-all"
                    >
                      Submit Quest Deliverable
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
