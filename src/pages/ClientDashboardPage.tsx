import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  ExternalLink, 
  ShieldCheck, 
  Star,
  Sparkles,
  Layers,
  ChevronRight,
  FileText
} from 'lucide-react';
import { Booking, Service } from '../types';

interface ClientDashboardPageProps {
  bookings: Booking[];
  onStartConversation: (creatorId: string) => void;
  onNavigate: (view: string, param?: string) => void;
  onViewServiceById: (serviceId: string) => void;
}

export const ClientDashboardPage: React.FC<ClientDashboardPageProps> = ({
  bookings,
  onStartConversation,
  onNavigate,
  onViewServiceById
}) => {
  const [activeBookings, setActiveBookings] = useState<Booking[]>(bookings);
  const [selectedBookingForReview, setSelectedBookingForReview] = useState<Booking | null>(null);
  const [reviewSuccess, setReviewSuccess] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState(5);

  const handleApproveMilestone = (bookingId: string) => {
    setActiveBookings(prev => prev.map(b => {
      if (b.id === bookingId) {
        return { ...b, status: 'Completed' };
      }
      return b;
    }));
    setReviewSuccess(true);
    setTimeout(() => {
      setSelectedBookingForReview(null);
      setReviewSuccess(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen py-10 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-cyan-400">
                Client Project Hub
              </span>
              <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
                Milestone Escrow Active
              </span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl font-black text-white mt-1">
              My Commissioned Projects
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Track project delivery milestones, review drafts, and communicate directly with your young creators.
            </p>
          </div>

          <button
            onClick={() => onNavigate('skillswap')}
            className="flex items-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-500 px-4 py-2.5 text-xs font-bold text-white shadow-lg transition-all"
          >
            <span>Commission New Project</span>
          </button>
        </div>

        {/* Project Summary Cards */}
        <div className="mt-8 space-y-4">
          {activeBookings.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-[#121526]/50 p-12 text-center">
              <ShoppingBag className="mx-auto h-10 w-10 text-slate-600 mb-3" />
              <h3 className="font-heading text-lg font-bold text-white">
                No active projects yet
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Discover exceptional teen creators on SkillSwap or let SkillMatch AI find the perfect match for you.
              </p>
              <button
                onClick={() => onNavigate('skillmatch')}
                className="mt-5 rounded-xl bg-purple-600 hover:bg-purple-500 px-5 py-2 text-xs font-bold text-white transition-all"
              >
                Launch SkillMatch AI
              </button>
            </div>
          ) : (
            activeBookings.map((booking) => (
              <div
                key={booking.id}
                id={`client-booking-row-${booking.id}`}
                className="rounded-3xl border border-white/10 bg-[#121526]/80 p-6 backdrop-blur-xl transition-all hover:border-purple-500/30 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={booking.creatorAvatar}
                      alt={booking.creatorName}
                      className="h-12 w-12 rounded-2xl object-cover border border-purple-500/30"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-cyan-400">
                          {booking.id}
                        </span>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                          booking.status === 'Completed'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : booking.status === 'Under Review'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                      <h3 className="font-heading text-base font-bold text-white mt-0.5">
                        {booking.serviceTitle}
                      </h3>
                      <p className="text-xs text-slate-400">
                        Creator: <strong className="text-slate-200">{booking.creatorName}</strong> (@{booking.creatorUsername})
                      </p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="font-heading text-xl font-black text-white">
                      ₹{booking.price}
                    </div>
                    <span className="text-[11px] text-purple-300 font-semibold block">
                      {booking.packageTier} Package
                    </span>
                    <span className="text-[10px] text-slate-400 flex items-center sm:justify-end gap-1 mt-0.5">
                      <Clock className="h-3 w-3 text-cyan-400" />
                      Due: {booking.deliveryDate}
                    </span>
                  </div>
                </div>

                {/* Requirements brief recap */}
                <div className="rounded-xl bg-black/40 p-3 text-xs text-slate-300 border border-white/5 flex items-start gap-2">
                  <FileText className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Requirements brief:</span>{' '}
                    <span>{booking.requirementsNotes}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onStartConversation(booking.creatorId)}
                      className="flex items-center gap-1.5 rounded-xl bg-white/5 hover:bg-white/10 px-3.5 py-2 text-xs font-semibold text-slate-200 border border-white/10 transition-colors"
                    >
                      <MessageSquare className="h-3.5 w-3.5 text-cyan-400" />
                      <span>Message Creator</span>
                    </button>
                    <button
                      onClick={() => onViewServiceById(booking.serviceId)}
                      className="flex items-center gap-1.5 rounded-xl bg-white/5 hover:bg-white/10 px-3.5 py-2 text-xs font-semibold text-slate-200 border border-white/10 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                      <span>Service Page</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    {booking.status !== 'Completed' && (
                      <button
                        onClick={() => setSelectedBookingForReview(booking)}
                        className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-4 py-2 text-xs font-bold text-white shadow-md shadow-emerald-600/30 transition-all"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>Review & Approve Deliverable</span>
                      </button>
                    )}
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* Milestone Review Dialog */}
        {selectedBookingForReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-xl animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#121526] shadow-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase text-emerald-400">
                    Milestone Deliverable Inspection
                  </span>
                  <h3 className="font-heading text-base font-bold text-white">
                    Approve Work for {selectedBookingForReview.creatorName}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedBookingForReview(null)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {reviewSuccess ? (
                <div className="py-6 text-center space-y-2">
                  <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="font-heading text-lg font-bold text-white">
                    Milestone Completed!
                  </h4>
                  <p className="text-xs text-slate-300">
                    ₹{selectedBookingForReview.price} released to {selectedBookingForReview.creatorName}. +150 XP awarded to their Creator Passport!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="rounded-2xl bg-white/5 p-4 border border-white/5 text-xs text-slate-300 space-y-1">
                    <p><strong>Deliverable Package:</strong> Final output files uploaded to project secure cloud storage.</p>
                    <p><strong>Commission Value:</strong> ₹{selectedBookingForReview.price}</p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5">
                      Rate Creator Performance:
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setFeedbackRating(star)}
                          className="p-1 text-amber-400"
                        >
                          <Star className={`h-6 w-6 ${star <= feedbackRating ? 'fill-amber-400' : 'text-slate-600'}`} />
                        </button>
                      ))}
                      <span className="text-xs text-slate-400 font-mono ml-2">
                        {feedbackRating}.0 / 5.0
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2">
                    <button
                      onClick={() => setSelectedBookingForReview(null)}
                      className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleApproveMilestone(selectedBookingForReview.id)}
                      className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-xs font-bold text-white shadow-lg"
                    >
                      Approve & Release Milestone
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
