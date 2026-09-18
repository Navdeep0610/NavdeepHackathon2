import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Bot, ArrowRight, Star, Tag, Sparkles } from 'lucide-react';
import { CREATORS, SERVICES } from '../data/mockData';
import { Service } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewService: (service: Service) => void;
  onViewCreator: (username: string) => void;
  onLaunchSkillMatch: (prompt: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onViewService,
  onViewCreator,
  onLaunchSkillMatch
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredServices = query.trim()
    ? SERVICES.filter(s => 
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.skills.some(sk => sk.toLowerCase().includes(query.toLowerCase())) ||
        s.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 4)
    : [];

  const filteredCreators = query.trim()
    ? CREATORS.filter(c =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.username.toLowerCase().includes(query.toLowerCase()) ||
        c.skills.some(sk => sk.name.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 3)
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-[#121526] shadow-2xl">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-[#15192e]">
          <Search className="h-5 w-5 text-purple-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skills, creators, or type a request for SkillMatch AI..."
            className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-white mr-1">
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="rounded-lg bg-white/5 px-2 py-1 text-xs text-slate-400 hover:bg-white/10"
          >
            ESC
          </button>
        </div>

        {/* Results Stream */}
        <div className="p-4 max-h-96 overflow-y-auto space-y-4">
          
          {/* Ask SkillMatch AI Prompt Row */}
          {query.trim().length > 2 && (
            <div
              onClick={() => {
                onLaunchSkillMatch(query);
                onClose();
              }}
              className="flex items-center justify-between p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 hover:bg-cyan-500/20 cursor-pointer transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <Bot className="h-5 w-5 text-cyan-400" />
                <div>
                  <span className="text-xs font-bold text-cyan-300">
                    Run SkillMatch AI for &ldquo;{query}&rdquo;
                  </span>
                  <p className="text-[11px] text-slate-400">
                    Find high-accuracy creators matching this exact intent
                  </p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </div>
          )}

          {/* Creators Section */}
          {filteredCreators.length > 0 && (
            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400 block mb-2">
                Creators
              </span>
              <div className="space-y-1.5">
                {filteredCreators.map((creator) => (
                  <div
                    key={creator.id}
                    onClick={() => {
                      onViewCreator(creator.username);
                      onClose();
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <img
                        src={creator.avatar}
                        alt={creator.name}
                        className="h-8 w-8 rounded-lg object-cover"
                      />
                      <div>
                        <span className="text-xs font-bold text-white">{creator.name}</span>
                        <span className="text-[11px] text-slate-400 ml-1.5">@{creator.username}</span>
                      </div>
                    </div>
                    <span className="text-xs text-amber-400 font-semibold flex items-center gap-1">
                      <Star className="h-3 w-3 fill-amber-400" />
                      {creator.rating.toFixed(1)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Services Section */}
          {filteredServices.length > 0 && (
            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400 block mb-2">
                Services & Gigs
              </span>
              <div className="space-y-1.5">
                {filteredServices.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => {
                      onViewService(service);
                      onClose();
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <img
                        src={service.coverImage}
                        alt={service.title}
                        className="h-9 w-12 rounded-lg object-cover"
                      />
                      <div>
                        <span className="text-xs font-medium text-white line-clamp-1">
                          {service.title}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {service.creatorName} • {service.category}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-white">
                      ₹{service.startingPrice}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!query.trim() && (
            <div className="text-center py-6 text-slate-500 text-xs">
              Type keywords like <strong className="text-slate-300">gaming</strong>, <strong className="text-slate-300">logo</strong>, <strong className="text-slate-300">python</strong>, or a natural language sentence.
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
