import React, { useState, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  ArrowUpDown, 
  Clock, 
  IndianRupee, 
  Tag, 
  Compass, 
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { Service } from '../types';
import { ServiceCard } from '../components/ServiceCard';

interface SkillSwapPageProps {
  initialCategory?: string;
  initialSearch?: string;
  onViewService: (service: Service) => void;
  onToggleSaveService: (serviceId: string) => void;
  savedServiceIds: string[];
}

export const SkillSwapPage: React.FC<SkillSwapPageProps> = ({
  initialCategory = 'All',
  initialSearch = '',
  onViewService,
  onToggleSaveService,
  savedServiceIds
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedDelivery, setSelectedDelivery] = useState<'All' | '1' | '3' | '7'>('All');
  const [maxPrice, setMaxPrice] = useState<number>(1500);
  const [sortBy, setSortBy] = useState<'recommended' | 'rating' | 'price-asc' | 'price-desc' | 'delivery'>('recommended');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categories = [
    'All',
    'Design',
    'Video',
    'Coding',
    'Music',
    'Tutoring',
    'Animation',
    'Writing',
    'Social Media'
  ];

  // Filtering & Sorting
  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      // Category filter
      if (selectedCategory !== 'All' && service.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // Max price filter
      if (service.startingPrice > maxPrice) {
        return false;
      }

      // Delivery filter
      if (selectedDelivery !== 'All') {
        const days = parseInt(selectedDelivery, 10);
        if (service.deliveryDays > days) {
          return false;
        }
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = service.title.toLowerCase().includes(q);
        const matchesDesc = service.description.toLowerCase().includes(q);
        const matchesCreator = service.creatorName.toLowerCase().includes(q);
        const matchesCategory = service.category.toLowerCase().includes(q);
        const matchesSkills = service.skills.some(s => s.toLowerCase().includes(q));

        if (!matchesTitle && !matchesDesc && !matchesCreator && !matchesCategory && !matchesSkills) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price-asc') return a.startingPrice - b.startingPrice;
      if (sortBy === 'price-desc') return b.startingPrice - a.startingPrice;
      if (sortBy === 'delivery') return a.deliveryDays - b.deliveryDays;
      // Recommended default: weighted by rating + review count
      return (b.rating * 10 + b.reviewsCount) - (a.rating * 10 + a.reviewsCount);
    });
  }, [selectedCategory, maxPrice, selectedDelivery, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSelectedDelivery('All');
    setMaxPrice(1500);
    setSortBy('recommended');
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-purple-400">
                Youth Creator Marketplace
              </span>
              <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
                SkillSwap
              </span>
            </div>
            <h1 className="font-heading text-2xl sm:text-4xl font-black text-white mt-1">
              Explore Creator Services
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Browse transparent, youth-crafted packages with fixed pricing and guaranteed turnaround.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">
              Showing <strong className="text-white">{filteredServices.length}</strong> services
            </span>
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-1.5 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-xs font-semibold text-slate-300"
            >
              <SlidersHorizontal className="h-4 w-4 text-purple-400" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Category Horizontal Bar */}
        <div className="mt-6 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory.toLowerCase() === cat.toLowerCase()
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Layout: Sidebar Filters + Services Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Desktop Filter Sidebar */}
          <aside className={`lg:block ${mobileFilterOpen ? 'block' : 'hidden'} space-y-6`}>
            <div className="rounded-3xl border border-white/10 bg-[#121526]/80 p-5 backdrop-blur-xl space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                  <SlidersHorizontal className="h-4 w-4 text-purple-400" />
                  <span>Filters</span>
                </div>
                <button
                  onClick={handleResetFilters}
                  className="flex items-center gap-1 text-[11px] text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Keyword Search */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Search keyword / skill
                </label>
                <div className="relative flex items-center rounded-xl bg-black/40 border border-white/10 px-3 py-2">
                  <Search className="h-4 w-4 text-slate-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="e.g. montage, logo, python..."
                    className="w-full bg-transparent text-xs text-white placeholder:text-slate-500 focus:outline-none"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="text-slate-500 hover:text-white">
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Budget Slider Filter */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-2">
                  <span className="text-slate-300">Max Budget:</span>
                  <span className="font-heading text-purple-300 font-bold">₹{maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="199"
                  max="1500"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>₹199</span>
                  <span>₹799</span>
                  <span>₹1,500</span>
                </div>
              </div>

              {/* Delivery Speed Filter */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Delivery Time
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Any time', val: 'All' },
                    { label: '⚡ 24 Hours', val: '1' },
                    { label: 'Up to 3 Days', val: '3' },
                    { label: 'Up to 7 Days', val: '7' }
                  ].map((d) => (
                    <button
                      key={d.val}
                      onClick={() => setSelectedDelivery(d.val as any)}
                      className={`p-2 rounded-xl text-xs font-medium border text-center transition-all ${
                        selectedDelivery === d.val
                          ? 'bg-purple-500/20 border-purple-500/40 text-purple-300'
                          : 'bg-black/30 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort By Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Sort Results By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-xs text-white focus:border-purple-500 focus:outline-none"
                >
                  <option value="recommended" className="bg-[#121526]">⭐ Recommended (Best Fit)</option>
                  <option value="rating" className="bg-[#121526]">🏆 Highest Rated</option>
                  <option value="price-asc" className="bg-[#121526]">💰 Price: Low to High</option>
                  <option value="price-desc" className="bg-[#121526]">💎 Price: High to Low</option>
                  <option value="delivery" className="bg-[#121526]">⚡ Fastest Delivery</option>
                </select>
              </div>

            </div>
          </aside>

          {/* Services Grid (3 Columns on large screens) */}
          <main className="lg:col-span-3">
            {filteredServices.length === 0 ? (
              <div className="rounded-3xl border border-white/10 bg-[#121526]/50 p-12 text-center">
                <Search className="mx-auto h-10 w-10 text-slate-600 mb-3" />
                <h3 className="font-heading text-lg font-bold text-white">
                  No services match your criteria
                </h3>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  Try adjusting your budget slider, broadening the delivery timeline, or clearing search filters.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-5 rounded-xl bg-purple-600 hover:bg-purple-500 px-5 py-2 text-xs font-bold text-white shadow-lg transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    isSaved={savedServiceIds.includes(service.id)}
                    onToggleSave={onToggleSaveService}
                    onViewService={onViewService}
                  />
                ))}
              </div>
            )}
          </main>

        </div>

      </div>
    </div>
  );
};
