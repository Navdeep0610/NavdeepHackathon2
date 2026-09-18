import React from 'react';
import { Heart, ArrowLeft, ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';
import { Service } from '../types';
import { SERVICES } from '../data/mockData';
import { ServiceCard } from '../components/ServiceCard';

interface SavedPageProps {
  savedServiceIds: string[];
  onToggleSaveService: (serviceId: string) => void;
  onViewService: (service: Service) => void;
  onNavigate: (view: string) => void;
}

export const SavedPage: React.FC<SavedPageProps> = ({
  savedServiceIds,
  onToggleSaveService,
  onViewService,
  onNavigate
}) => {
  const savedServices = SERVICES.filter(s => savedServiceIds.includes(s.id));

  return (
    <div className="min-h-screen py-10 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-rose-400 fill-rose-400" />
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-rose-300">
                Bookmarks & Favorites
              </span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl font-black text-white mt-1">
              Saved Creator Services
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Quickly re-visit packages you have saved for upcoming content drops and projects.
            </p>
          </div>

          <button
            onClick={() => onNavigate('skillswap')}
            className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to marketplace</span>
          </button>
        </div>

        {/* Services Grid */}
        <div className="mt-8">
          {savedServices.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-[#121526]/50 p-12 text-center">
              <Heart className="mx-auto h-12 w-12 text-slate-600 mb-3" />
              <h3 className="font-heading text-lg font-bold text-white">
                No saved services yet
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Click the heart icon on any service card in the SkillSwap marketplace to save it here for quick access.
              </p>
              <button
                onClick={() => onNavigate('skillswap')}
                className="mt-5 rounded-xl bg-purple-600 hover:bg-purple-500 px-5 py-2 text-xs font-bold text-white transition-all shadow-lg shadow-purple-600/30"
              >
                Explore Services
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isSaved={true}
                  onToggleSave={onToggleSaveService}
                  onViewService={onViewService}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
