import React from 'react';
import { Star, Clock, Heart, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  isSaved?: boolean;
  onToggleSave?: (serviceId: string) => void;
  onViewService: (service: Service) => void;
  onBookNow?: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  isSaved = false,
  onToggleSave,
  onViewService,
  onBookNow
}) => {
  return (
    <div
      id={`service-card-${service.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121527]/85 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10"
    >
      {/* Cover Image & Category Pill */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
        <img
          src={service.coverImage}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 rounded-lg bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-white border border-white/10">
          {service.category}
        </div>

        {/* Save / Favorite Heart Button */}
        <button
          id={`save-service-${service.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave?.(service.id);
          }}
          className={`absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md border transition-all ${
            isSaved
              ? 'bg-rose-500 text-white border-rose-400 shadow-md shadow-rose-500/40'
              : 'bg-black/50 text-slate-300 border-white/10 hover:text-rose-400 hover:bg-black/70'
          }`}
          title={isSaved ? 'Remove from saved' : 'Save service'}
        >
          <Heart className={`h-4 w-4 ${isSaved ? 'fill-white' : ''}`} />
        </button>

        {/* Orders in Queue Tag if any */}
        {service.ordersInQueue && service.ordersInQueue > 0 && (
          <div className="absolute bottom-2.5 left-3 flex items-center gap-1 rounded-md bg-purple-900/80 backdrop-blur-sm px-2 py-0.5 text-[10px] font-medium text-purple-200 border border-purple-500/30">
            <Zap className="h-3 w-3 text-amber-300" />
            <span>{service.ordersInQueue} orders in queue</span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-4">
        
        {/* Creator Snippet */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <img
              src={service.creatorAvatar}
              alt={service.creatorName}
              className="h-6 w-6 rounded-full object-cover border border-purple-400/40"
            />
            <span className="text-xs font-semibold text-slate-300 hover:text-purple-300 transition-colors">
              {service.creatorName}
            </span>
          </div>

          <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span>{service.rating.toFixed(1)}</span>
            <span className="text-[11px] font-normal text-slate-400">({service.reviewsCount})</span>
          </div>
        </div>

        {/* Service Title */}
        <h3 
          onClick={() => onViewService(service)}
          className="font-heading text-sm sm:text-base font-bold text-white line-clamp-2 hover:text-purple-300 cursor-pointer transition-colors leading-snug"
        >
          {service.title}
        </h3>

        {/* Skills Tags */}
        <div className="mt-2.5 flex flex-wrap gap-1">
          {service.skills.slice(0, 3).map((skill, idx) => (
            <span
              key={idx}
              className="rounded bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-slate-300 border border-white/5"
            >
              {skill}
            </span>
          ))}
          {service.skills.length > 3 && (
            <span className="rounded bg-white/[0.04] px-1.5 py-0.5 text-[10px] text-slate-500">
              +{service.skills.length - 3}
            </span>
          )}
        </div>

        {/* Card Footer with Price and Actions */}
        <div className="mt-auto pt-3.5 border-t border-white/5 flex items-center justify-between">
          <div>
            <span className="block text-[10px] uppercase font-semibold text-slate-400">
              Starting at
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-heading text-lg font-black text-white">
                ₹{service.startingPrice}
              </span>
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                • <Clock className="h-3 w-3 inline" /> {service.deliveryDays}d
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              id={`view-service-btn-${service.id}`}
              onClick={() => onViewService(service)}
              className="flex items-center gap-1 rounded-xl bg-purple-600/90 hover:bg-purple-600 px-3 py-1.5 text-xs font-bold text-white shadow-md shadow-purple-600/20 hover:scale-105 active:scale-95 transition-all"
            >
              <span>View</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
