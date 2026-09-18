import React, { useState } from 'react';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Zap, 
  Share2, 
  MessageSquare, 
  Award, 
  ThumbsUp,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Creator, Service } from '../types';
import { SERVICES } from '../data/mockData';
import { CreatorPassport } from '../components/CreatorPassport';
import { PortfolioGrid } from '../components/PortfolioGrid';
import { ServiceCard } from '../components/ServiceCard';

interface CreatorProfilePageProps {
  creator: Creator;
  onViewService: (service: Service) => void;
  onStartConversation: (creatorId: string) => void;
  onToggleSaveService: (serviceId: string) => void;
  savedServiceIds: string[];
}

export const CreatorProfilePage: React.FC<CreatorProfilePageProps> = ({
  creator,
  onViewService,
  onStartConversation,
  onToggleSaveService,
  savedServiceIds
}) => {
  const [activeTab, setActiveTab] = useState<'services' | 'portfolio' | 'reviews' | 'passport'>('services');
  const [endorsedSkills, setEndorsedSkills] = useState<Record<string, boolean>>({});

  // Creator's published services
  const creatorServices = SERVICES.filter(s => s.creatorId === creator.id);

  const creatorReviews = creator.reviews || [
    {
      id: 'rev_1',
      clientName: 'Liam Carter',
      clientAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&auto=format&fit=crop&q=80',
      rating: 5,
      date: '3 days ago',
      comment: 'Completely understood my brand vision and delivered ahead of schedule. Incredible attention to detail!',
      serviceTitle: 'Creator Branding Package'
    },
    {
      id: 'rev_2',
      clientName: 'Chloe Simmons',
      clientAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
      rating: 5,
      date: '1 week ago',
      comment: 'Super fast communication and high-retention aesthetic. Highly recommended for any young creator looking to stand out.',
      serviceTitle: 'YouTube Video & Thumbnail Suite'
    }
  ];

  const handleEndorseSkill = (skillName: string) => {
    setEndorsedSkills(prev => ({
      ...prev,
      [skillName]: !prev[skillName]
    }));
  };

  return (
    <div className="min-h-screen pb-20 text-slate-100">
      
      {/* 1. Header Banner */}
      <div className="relative h-48 sm:h-64 lg:h-72 w-full overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-[#0b0c16]">
        {creator.banner ? (
          <img 
            src={creator.banner} 
            alt={creator.name}
            className="h-full w-full object-cover opacity-60"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/80 via-[#121528] to-cyan-900/60" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c16] via-[#0b0c16]/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        
        {/* Creator Info Overview Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          
          <div className="flex flex-col sm:flex-row sm:items-end gap-5">
            <div className="relative">
              <img
                src={creator.avatar}
                alt={creator.name}
                className="h-28 w-28 sm:h-32 sm:w-32 rounded-3xl object-cover border-4 border-[#0b0c16] shadow-2xl bg-black"
              />
              <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500 text-black shadow-lg">
                <ShieldCheck className="h-4 w-4 stroke-[2.5]" />
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-heading text-2xl sm:text-3xl font-black text-white">
                  {creator.name}
                </h1>
                <span className="text-xs font-mono text-purple-300 rounded-md bg-purple-500/15 px-2 py-0.5 border border-purple-500/30">
                  @{creator.username}
                </span>
                <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-500/30">
                  {creator.age || 17} y/o • Available for Gigs
                </span>
              </div>

              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-300 max-w-xl">
                {creator.tagline || creator.bio}
              </p>

              <div className="mt-2.5 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-purple-400" />
                  {creator.location || 'San Francisco, CA'}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-cyan-400" />
                  Responds in {creator.responseTime}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  Member since {creator.memberSince || creator.joinedDate || 'Nov 2025'}
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              id="message-creator-btn"
              onClick={() => onStartConversation(creator.id)}
              className="flex items-center gap-2 rounded-2xl bg-purple-600 hover:bg-purple-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-600/30 transition-all active:scale-95"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Message Creator</span>
            </button>
          </div>

        </div>

        {/* High-Impact Stat Blocks */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          <div className="rounded-2xl border border-white/10 bg-[#121526]/80 p-4 backdrop-blur-xl">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Completed Gigs
            </span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-heading text-2xl font-black text-white">
                {creator.completedProjects}
              </span>
              <span className="text-xs text-emerald-400 font-semibold">100% verified</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#121526]/80 p-4 backdrop-blur-xl">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Client Rating
            </span>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="font-heading text-2xl font-black text-amber-400">
                {creator.rating.toFixed(1)}
              </span>
              <span className="text-xs text-slate-400">({creator.reviewCount} reviews)</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#121526]/80 p-4 backdrop-blur-xl">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              On-Time Delivery
            </span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-heading text-2xl font-black text-cyan-300">
                {creator.onTimeDeliveryRate || '99'}%
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#121526]/80 p-4 backdrop-blur-xl">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Repeat Clients
            </span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-heading text-2xl font-black text-purple-300">
                {creator.repeatClientsRate || '94'}%
              </span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-8 flex items-center gap-2 border-b border-white/10 pb-1 overflow-x-auto">
          {[
            { key: 'services', label: `Services (${creatorServices.length})` },
            { key: 'portfolio', label: `Portfolio Showcase (${creator.portfolio.length})` },
            { key: 'passport', label: 'Creator Passport' },
            { key: 'reviews', label: `Reviews (${creatorReviews.length})` }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === tab.key
                  ? 'bg-purple-600/20 text-purple-300 border border-purple-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Services */}
        {activeTab === 'services' && (
          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {creatorServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isSaved={savedServiceIds.includes(service.id)}
                  onToggleSave={onToggleSaveService}
                  onViewService={onViewService}
                />
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Interactive Portfolio */}
        {activeTab === 'portfolio' && (
          <div className="mt-8 space-y-6">
            <div className="rounded-2xl bg-white/5 p-4 border border-white/5 flex items-center justify-between">
              <div>
                <h3 className="font-heading text-sm font-bold text-white">
                  Interactive Work Showcase
                </h3>
                <p className="text-xs text-slate-400">
                  Inspect completed projects, watch video previews, or drag the Before ↔ After sliders.
                </p>
              </div>
            </div>

            <PortfolioGrid items={creator.portfolio} />
          </div>
        )}

        {/* Tab 3: Digital Creator Passport */}
        {activeTab === 'passport' && (
          <div className="mt-8 max-w-2xl mx-auto">
            <CreatorPassport creator={creator} />
          </div>
        )}

        {/* Tab 4: Client Reviews & Endorsements */}
        {activeTab === 'reviews' && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Endorsement Column */}
            <div className="rounded-3xl border border-white/10 bg-[#121526]/80 p-6 backdrop-blur-xl space-y-4">
              <h3 className="font-heading text-sm font-bold text-white flex items-center gap-2">
                <ThumbsUp className="h-4 w-4 text-cyan-400" />
                <span>Skill Endorsements</span>
              </h3>
              <p className="text-xs text-slate-400">
                Endorse {creator.name} for abilities you&apos;ve verified.
              </p>

              <div className="space-y-2">
                {creator.skills.map((skill, idx) => {
                  const isEndorsed = !!endorsedSkills[skill.name];
                  const count = (skill.endorsements || 10) + (isEndorsed ? 1 : 0);

                  return (
                    <button
                      key={idx}
                      onClick={() => handleEndorseSkill(skill.name)}
                      className={`flex w-full items-center justify-between p-2.5 rounded-xl border text-xs transition-all ${
                        isEndorsed
                          ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-200'
                          : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <span className="font-medium">{skill.name}</span>
                      <span className="font-mono text-[11px] rounded bg-white/10 px-2 py-0.5">
                        {count} {isEndorsed ? '★ Endorsed' : '+ Endorse'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Reviews List */}
            <div className="lg:col-span-2 space-y-4">
              {creatorReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="rounded-2xl border border-white/10 bg-[#121526]/80 p-5 backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={rev.clientAvatar}
                        alt={rev.clientName}
                        className="h-8 w-8 rounded-full object-cover border border-white/10"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-white">{rev.clientName}</h4>
                        <span className="text-[10px] text-slate-400">{rev.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
                      <Star className="h-3.5 w-3.5 fill-amber-400" />
                      <span>{rev.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    &ldquo;{rev.comment}&rdquo;
                  </p>

                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/5 text-[11px] text-slate-400">
                    <span className="text-purple-300 font-medium">Gig: {rev.serviceTitle}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
