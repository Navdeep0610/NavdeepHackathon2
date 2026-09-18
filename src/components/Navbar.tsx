import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Heart, 
  Bell, 
  Menu, 
  X, 
  Compass, 
  Bot, 
  Award, 
  Users, 
  User, 
  Briefcase, 
  MessageSquare, 
  CheckCircle2, 
  LayoutDashboard,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Notification } from '../types';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, param?: string) => void;
  userRole: 'client' | 'creator';
  onToggleRole: () => void;
  savedCount: number;
  notifications: Notification[];
  onMarkNotificationsRead: () => void;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  userRole,
  onToggleRole,
  savedCount,
  notifications,
  onMarkNotificationsRead,
  onOpenAuth,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const unreadNotifs = notifications.filter(n => !n.read).length;

  const handleNav = (view: string, param?: string) => {
    onNavigate(view, param);
    setMobileMenuOpen(false);
    setNotifOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#0b0c14]/85 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <button 
            id="nav-brand-logo"
            onClick={() => handleNav('home')} 
            className="group flex items-center gap-2.5 text-left focus:outline-none"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-0.5 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#0b0c14]">
                <Zap className="h-5 w-5 text-cyan-300 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-lg font-extrabold tracking-tight text-white">
                  TEEN<span className="gradient-text">VERSE</span>HUB
                </span>
                <span className="rounded-full bg-purple-500/15 px-1.5 py-0.2 text-[10px] font-semibold text-purple-300 border border-purple-500/30">
                  SkillSwap
                </span>
              </div>
              <span className="text-[10px] font-medium tracking-wide text-slate-400 -mt-0.5 hidden sm:inline-block">
                Your Skill Has Value
              </span>
            </div>
          </button>

          {/* Primary Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              id="nav-link-discover"
              onClick={() => handleNav('skillswap')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'skillswap' 
                  ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Compass className="h-4 w-4" />
              Discover
            </button>

            <button
              id="nav-link-skillmatch"
              onClick={() => handleNav('skillmatch')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                currentView === 'skillmatch' 
                  ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Bot className="h-4 w-4 text-cyan-400 animate-pulse" />
              SkillMatch AI
              <span className="rounded-full bg-cyan-400/20 px-1.5 py-0.5 text-[9px] font-bold text-cyan-300 uppercase">
                AI
              </span>
            </button>

            <button
              id="nav-link-quests"
              onClick={() => handleNav('quests')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'quests' 
                  ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Award className="h-4 w-4" />
              Quests
            </button>

            <button
              id="nav-link-creators"
              onClick={() => handleNav('creator', 'maya.designs')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'creator' 
                  ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Users className="h-4 w-4" />
              Creators
            </button>

            <button
              id="nav-link-messages"
              onClick={() => handleNav('messages')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'messages' 
                  ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <MessageSquare className="h-4 w-4" />
              Messages
            </button>
          </nav>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Quick Search Button */}
          <button
            id="nav-btn-search"
            onClick={onOpenSearch}
            className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-1.5 text-xs text-slate-400 hover:bg-white/10 hover:text-slate-200 border border-white/5 transition-all"
            title="Search creators or skills (Ctrl+K)"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="hidden md:inline">Search skills...</span>
            <kbd className="hidden md:inline rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-slate-400 font-mono">
              /
            </kbd>
          </button>

          {/* Role Switcher Pill */}
          <button
            id="nav-role-switcher"
            onClick={onToggleRole}
            className={`hidden sm:flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold border transition-all ${
              userRole === 'creator'
                ? 'bg-purple-950/70 border-purple-500/40 text-purple-300 hover:bg-purple-900/60'
                : 'bg-blue-950/70 border-blue-500/40 text-blue-300 hover:bg-blue-900/60'
            }`}
            title="Toggle between Client view and Creator view"
          >
            <div className={`h-2 w-2 rounded-full ${userRole === 'creator' ? 'bg-purple-400 animate-pulse' : 'bg-blue-400'}`} />
            <span>Role: <strong className="capitalize">{userRole}</strong></span>
          </button>

          {/* Saved Items */}
          <button
            id="nav-btn-saved"
            onClick={() => handleNav('saved')}
            className={`relative rounded-xl p-2 text-slate-400 hover:bg-white/5 hover:text-rose-400 transition-colors ${
              currentView === 'saved' ? 'text-rose-400 bg-rose-500/10' : ''
            }`}
            title="Saved Creators & Services"
          >
            <Heart className="h-4 w-4" />
            {savedCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow">
                {savedCount}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              id="nav-btn-notifications"
              onClick={() => setNotifOpen(!notifOpen)}
              className="relative rounded-xl p-2 text-slate-400 hover:bg-white/5 hover:text-slate-200 transition-colors"
              title="Notifications"
            >
              <Bell className="h-4 w-4" />
              {unreadNotifs > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 text-[10px] font-bold text-white shadow">
                  {unreadNotifs}
                </span>
              )}
            </button>

            {notifOpen && (
              <div 
                id="nav-notifications-dropdown"
                className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl border border-white/10 bg-[#121525] p-4 shadow-2xl backdrop-blur-2xl z-50 animate-in fade-in zoom-in-95 duration-150"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-cyan-400" />
                    <span className="text-sm font-semibold text-white">Notifications</span>
                  </div>
                  <button 
                    onClick={onMarkNotificationsRead}
                    className="text-xs text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Mark all as read
                  </button>
                </div>
                <div className="mt-3 space-y-2 max-h-72 overflow-y-auto">
                  {notifications.map((n) => (
                    <div 
                      key={n.id} 
                      className={`p-2.5 rounded-xl text-xs transition-colors ${
                        n.read ? 'bg-white/[0.02] text-slate-400' : 'bg-purple-500/10 text-slate-200 border border-purple-500/20'
                      }`}
                    >
                      <div className="flex items-center justify-between font-medium text-white mb-1">
                        <span>{n.title}</span>
                        <span className="text-[10px] text-slate-500">{n.timestamp}</span>
                      </div>
                      <p className="line-clamp-2">{n.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Dashboard Direct Button */}
          <button
            id="nav-btn-dashboard"
            onClick={() => handleNav(userRole === 'creator' ? 'creator-dashboard' : 'client-dashboard')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              currentView.includes('dashboard')
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : 'bg-white/5 text-slate-200 hover:bg-white/10 border border-white/5'
            }`}
          >
            <LayoutDashboard className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">
              {userRole === 'creator' ? 'Creator Hub' : 'My Projects'}
            </span>
          </button>

          {/* Primary CTA / Become Creator */}
          <button
            id="nav-btn-become-creator"
            onClick={() => {
              if (userRole === 'client') onToggleRole();
              handleNav('creator-dashboard');
            }}
            className="hidden xl:flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
            <span>Become a Creator</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden rounded-xl p-2 text-slate-400 hover:bg-white/5 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          id="nav-mobile-drawer"
          className="lg:hidden border-t border-white/5 bg-[#0e111f]/95 px-4 py-5 backdrop-blur-2xl space-y-4 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/5">
            <span className="text-xs font-medium text-slate-400">Current Role</span>
            <button
              onClick={onToggleRole}
              className="text-xs font-semibold text-purple-400 uppercase tracking-wider px-2 py-1 bg-purple-500/20 rounded-lg border border-purple-500/30"
            >
              Switch to {userRole === 'client' ? 'Creator' : 'Client'}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleNav('skillswap')}
              className="flex items-center gap-2 p-3 rounded-xl bg-white/5 text-sm font-medium text-slate-200"
            >
              <Compass className="h-4 w-4 text-purple-400" />
              Discover
            </button>
            <button
              onClick={() => handleNav('skillmatch')}
              className="flex items-center gap-2 p-3 rounded-xl bg-cyan-500/10 text-sm font-medium text-cyan-300 border border-cyan-500/20"
            >
              <Bot className="h-4 w-4 text-cyan-400" />
              SkillMatch AI
            </button>
            <button
              onClick={() => handleNav('quests')}
              className="flex items-center gap-2 p-3 rounded-xl bg-white/5 text-sm font-medium text-slate-200"
            >
              <Award className="h-4 w-4 text-amber-400" />
              Skill Quests
            </button>
            <button
              onClick={() => handleNav('creator', 'maya.designs')}
              className="flex items-center gap-2 p-3 rounded-xl bg-white/5 text-sm font-medium text-slate-200"
            >
              <Users className="h-4 w-4 text-indigo-400" />
              Featured Creator
            </button>
            <button
              onClick={() => handleNav('messages')}
              className="flex items-center gap-2 p-3 rounded-xl bg-white/5 text-sm font-medium text-slate-200"
            >
              <MessageSquare className="h-4 w-4 text-blue-400" />
              Messages
            </button>
            <button
              onClick={() => handleNav(userRole === 'creator' ? 'creator-dashboard' : 'client-dashboard')}
              className="flex items-center gap-2 p-3 rounded-xl bg-purple-500/10 text-sm font-medium text-purple-300 border border-purple-500/20"
            >
              <LayoutDashboard className="h-4 w-4 text-purple-400" />
              Dashboard
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                if (userRole === 'client') onToggleRole();
                handleNav('creator-dashboard');
              }}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25"
            >
              <Sparkles className="h-4 w-4 text-yellow-300" />
              Become a Creator
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
