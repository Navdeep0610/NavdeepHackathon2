import React from 'react';
import { 
  Palette, 
  Video, 
  Music, 
  Code, 
  BookOpen, 
  Sparkles,
  Zap,
  Star
} from 'lucide-react';

interface HeroFloatingCardsProps {
  onSelectCategory: (cat: string) => void;
}

export const HeroFloatingCards: React.FC<HeroFloatingCardsProps> = ({ onSelectCategory }) => {
  const categories = [
    { name: 'Logo Design', icon: Palette, category: 'Design', count: '124 creators', color: 'from-pink-500/20 to-purple-500/20', border: 'hover:border-pink-500/50', badge: 'Trending' },
    { name: 'Video Editing', icon: Video, category: 'Video', count: '98 creators', color: 'from-purple-500/20 to-indigo-500/20', border: 'hover:border-purple-500/50', badge: 'High Demand' },
    { name: 'Music & Beats', icon: Music, category: 'Music', count: '45 creators', color: 'from-cyan-500/20 to-blue-500/20', border: 'hover:border-cyan-500/50', badge: 'Hot' },
    { name: 'Web & Discord Bots', icon: Code, category: 'Coding', count: '67 creators', color: 'from-emerald-500/20 to-teal-500/20', border: 'hover:border-emerald-500/50', badge: 'Top Rated' },
    { name: 'STEM Tutoring', icon: BookOpen, category: 'Tutoring', count: '52 mentors', color: 'from-amber-500/20 to-orange-500/20', border: 'hover:border-amber-500/50', badge: 'Verified' }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-6">
      {categories.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <button
            key={idx}
            id={`hero-card-${item.category.toLowerCase()}`}
            onClick={() => onSelectCategory(item.category)}
            className={`group relative flex flex-col items-start p-3.5 rounded-2xl border border-white/10 bg-gradient-to-b ${item.color} backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${item.border} text-left`}
          >
            <div className="flex w-full items-center justify-between mb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-black/40 border border-white/10 text-white group-hover:scale-110 transition-transform">
                <IconComponent className="h-4 w-4 text-cyan-300" />
              </div>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-bold text-slate-300 uppercase tracking-wider">
                {item.badge}
              </span>
            </div>

            <span className="font-heading text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
              {item.name}
            </span>
            <span className="text-[10px] text-slate-400 mt-0.5">
              {item.count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
