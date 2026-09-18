import React, { useState, useRef } from 'react';
import { 
  Play, 
  Layers, 
  ExternalLink, 
  Maximize2, 
  X, 
  Calendar, 
  Tag, 
  Check, 
  Sparkles,
  ChevronRight,
  MoveHorizontal
} from 'lucide-react';
import { PortfolioItem } from '../types';

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ items }) => {
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const isDragging = useRef(false);

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(rect.width, x));
    setSliderPosition((clamped / rect.width) * 100);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current || !e.touches[0]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, rect);
  };

  if (!items || items.length === 0) {
    return (
      <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center text-slate-400">
        <Layers className="mx-auto h-8 w-8 text-slate-500 mb-2" />
        <p className="text-sm">No portfolio items published yet.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            id={`portfolio-card-${item.id}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121526]/80 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
          >
            {/* Media Preview Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-black/40">
              <img
                src={item.coverUrl}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Type Badge & Overlay Controls */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-lg bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-white border border-white/10">
                {item.type === 'comparison' && (
                  <>
                    <Layers className="h-3 w-3 text-cyan-400" />
                    <span>Before / After</span>
                  </>
                )}
                {item.type === 'video' && (
                  <>
                    <Play className="h-3 w-3 text-purple-400 fill-purple-400" />
                    <span>Video Edit</span>
                  </>
                )}
                {item.type === 'image' && (
                  <>
                    <Tag className="h-3 w-3 text-amber-400" />
                    <span>{item.category}</span>
                  </>
                )}
              </div>

              {/* Hover Quick Action Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button
                  id={`portfolio-action-${item.id}`}
                  onClick={() => {
                    setSliderPosition(50);
                    setActiveModalItem(item);
                  }}
                  className="flex items-center gap-2 rounded-xl bg-purple-600/90 backdrop-blur-md px-4 py-2 text-xs font-bold text-white shadow-lg shadow-purple-600/50 hover:bg-purple-500 hover:scale-105 active:scale-95 transition-all"
                >
                  {item.type === 'video' ? (
                    <>
                      <Play className="h-3.5 w-3.5 fill-white" />
                      <span>▶ Watch Preview</span>
                    </>
                  ) : item.type === 'comparison' ? (
                    <>
                      <MoveHorizontal className="h-3.5 w-3.5" />
                      <span>Compare Before/After</span>
                    </>
                  ) : (
                    <>
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>Inspect Project</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Content Details */}
            <div className="flex flex-1 flex-col p-4">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                <span>{item.clientOrProject}</span>
                <span className="font-mono">{item.year}</span>
              </div>

              <h4 className="font-heading text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                {item.title}
              </h4>

              <p className="mt-1.5 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                {item.description}
              </p>

              {/* Skills Tags */}
              <div className="mt-3 flex flex-wrap gap-1 pt-3 border-t border-white/5">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Modal (For Video Player or Draggable Before/After Slider) */}
      {activeModalItem && (
        <div 
          id="portfolio-interactive-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#101323] shadow-2xl">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                  {activeModalItem.category} Showcase
                </span>
                <h3 className="font-heading text-lg font-bold text-white">
                  {activeModalItem.title}
                </h3>
              </div>
              <button
                id="close-portfolio-modal"
                onClick={() => setActiveModalItem(null)}
                className="rounded-full p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
                title="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              
              {/* Type 1: Interactive BEFORE / AFTER Slider */}
              {activeModalItem.type === 'comparison' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
                    <span className="text-purple-300">← BEFORE (Original Concept)</span>
                    <span className="flex items-center gap-1 text-cyan-300">
                      <MoveHorizontal className="h-4 w-4 animate-pulse" />
                      Drag divider to compare
                    </span>
                    <span className="text-cyan-300">AFTER (Final Deliverable) →</span>
                  </div>

                  <div
                    className="relative aspect-video w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                    onMouseDown={() => (isDragging.current = true)}
                    onMouseUp={() => (isDragging.current = false)}
                    onMouseLeave={() => (isDragging.current = false)}
                    onMouseMove={handleMouseMove}
                    onTouchStart={() => (isDragging.current = true)}
                    onTouchEnd={() => (isDragging.current = false)}
                    onTouchMove={handleTouchMove}
                  >
                    {/* AFTER Image (Full background) */}
                    <img
                      src={activeModalItem.afterUrl || activeModalItem.coverUrl}
                      alt="After"
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* BEFORE Image (Clipped overlay) */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${sliderPosition}%` }}
                    >
                      <img
                        src={activeModalItem.beforeUrl || activeModalItem.coverUrl}
                        alt="Before"
                        className="h-full w-full object-cover"
                        style={{
                          width: '100%',
                          maxWidth: 'none',
                          objectFit: 'cover'
                        }}
                      />
                      <div className="absolute top-4 left-4 rounded-lg bg-black/70 px-2.5 py-1 text-xs font-bold text-white border border-white/20">
                        BEFORE
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 rounded-lg bg-cyan-500/80 px-2.5 py-1 text-xs font-bold text-white border border-cyan-400">
                      AFTER
                    </div>

                    {/* Draggable Divider Handle */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-lg">
                        <MoveHorizontal className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Type 2: Video Player Preview */}
              {activeModalItem.type === 'video' && (
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
                  <video
                    src={activeModalItem.previewUrl}
                    controls
                    autoPlay
                    loop
                    className="h-full w-full object-contain"
                  >
                    Your browser does not support HTML5 video preview.
                  </video>
                </div>
              )}

              {/* Type 3: Standard High-Res Image Showcase */}
              {activeModalItem.type === 'image' && (
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
                  <img
                    src={activeModalItem.coverUrl}
                    alt={activeModalItem.title}
                    className="h-full w-full object-contain"
                  />
                </div>
              )}

              {/* Contextual Description */}
              <div className="mt-5 rounded-xl bg-white/5 p-4 border border-white/5">
                <h4 className="text-sm font-semibold text-white">Project Case Study</h4>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  {activeModalItem.description}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold text-slate-400">Skills deployed:</span>
                  {activeModalItem.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="rounded-md bg-purple-500/20 px-2 py-0.5 text-[11px] font-semibold text-purple-300 border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
