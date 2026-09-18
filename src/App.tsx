import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { SkillSwapPage } from './pages/SkillSwapPage';
import { SkillMatchPage } from './pages/SkillMatchPage';
import { CreatorProfilePage } from './pages/CreatorProfilePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { QuestsPage } from './pages/QuestsPage';
import { CreatorDashboardPage } from './pages/CreatorDashboardPage';
import { ClientDashboardPage } from './pages/ClientDashboardPage';
import { MessagesPage } from './pages/MessagesPage';
import { SavedPage } from './pages/SavedPage';
import { BookingModal } from './components/BookingModal';
import { DecisionsModal } from './components/DecisionsModal';
import { SearchModal } from './components/SearchModal';

import { CREATORS, SERVICES, BOOKINGS, NOTIFICATIONS } from './data/mockData';
import { Service, Creator, Booking, Notification } from './types';

export default function App() {
  // Navigation Routing state
  const [currentView, setCurrentView] = useState<string>('home');
  const [viewParam, setViewParam] = useState<string | undefined>(undefined);

  // Active entities
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [activeCreatorUsername, setActiveCreatorUsername] = useState<string>('maya.designs');
  const [directMessageCreatorId, setDirectMessageCreatorId] = useState<string | undefined>(undefined);

  // User State
  const [userRole, setUserRole] = useState<'client' | 'creator'>('client');
  const [savedServiceIds, setSavedServiceIds] = useState<string[]>(['s1', 's4']);
  const [bookings, setBookings] = useState<Booking[]>(BOOKINGS);
  const [notifications, setNotifications] = useState<Notification[]>(NOTIFICATIONS);

  // Modals
  const [bookingModalService, setBookingModalService] = useState<Service | null>(null);
  const [isDecisionsOpen, setIsDecisionsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Keyboard shortcut for command palette search: '/' or 'Ctrl+K'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation Handler
  const handleNavigate = (view: string, param?: string) => {
    setCurrentView(view);
    setViewParam(param);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (view === 'creator' && param) {
      setActiveCreatorUsername(param);
    }
  };

  const handleToggleRole = () => {
    const nextRole = userRole === 'client' ? 'creator' : 'client';
    setUserRole(nextRole);
    showToast(`Switched active perspective to ${nextRole.toUpperCase()}`);
  };

  const handleToggleSaveService = (serviceId: string) => {
    setSavedServiceIds(prev => {
      const exists = prev.includes(serviceId);
      if (exists) {
        showToast('Removed from saved bookmarks');
        return prev.filter(id => id !== serviceId);
      } else {
        showToast('Saved to your bookmarks! ❤️');
        return [...prev, serviceId];
      }
    });
  };

  const handleViewService = (service: Service) => {
    setActiveService(service);
    setCurrentView('service');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewServiceById = (serviceId: string) => {
    const targetService = SERVICES.find(s => s.id === serviceId) || SERVICES[0];
    handleViewService(targetService);
  };

  const handleViewCreator = (username: string) => {
    setActiveCreatorUsername(username);
    setCurrentView('creator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartConversation = (creatorId: string) => {
    setDirectMessageCreatorId(creatorId);
    setCurrentView('messages');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (service: Service) => {
    setBookingModalService(service);
  };

  const handleBookingSuccess = (newBooking: Booking) => {
    setBookings(prev => [newBooking, ...prev]);
    showToast(`Project commissioned! ID: ${newBooking.id}`);
  };

  const handleMarkNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    showToast('All notifications marked as read');
  };

  // Find active creator
  const currentCreator = CREATORS.find(c => c.username === activeCreatorUsername) || CREATORS[0];

  return (
    <div className="flex min-h-screen flex-col bg-[#0b0c14] text-slate-100 font-sans selection:bg-purple-500 selection:text-white">
      
      {/* Toast Banner */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 rounded-2xl border border-purple-500/40 bg-[#161a2e]/95 px-4 py-2.5 text-xs font-semibold text-purple-200 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-200 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        userRole={userRole}
        onToggleRole={handleToggleRole}
        savedCount={savedServiceIds.length}
        notifications={notifications}
        onMarkNotificationsRead={handleMarkNotificationsRead}
        onOpenAuth={(mode) => showToast(`Prototype Auth: Signed in as verified ${userRole}`)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <LandingPage
            onNavigate={handleNavigate}
            onViewService={handleViewService}
            onViewCreator={handleViewCreator}
            onToggleSaveService={handleToggleSaveService}
            savedServiceIds={savedServiceIds}
          />
        )}

        {currentView === 'skillswap' && (
          <SkillSwapPage
            initialCategory={viewParam || 'All'}
            initialSearch=""
            onViewService={handleViewService}
            onToggleSaveService={handleToggleSaveService}
            savedServiceIds={savedServiceIds}
          />
        )}

        {currentView === 'skillmatch' && (
          <SkillMatchPage
            initialPrompt={viewParam}
            onViewCreator={handleViewCreator}
            onViewService={handleViewService}
            onBookService={handleOpenBooking}
          />
        )}

        {currentView === 'quests' && (
          <QuestsPage onNavigate={handleNavigate} />
        )}

        {currentView === 'creator' && (
          <CreatorProfilePage
            creator={currentCreator}
            onViewService={handleViewService}
            onStartConversation={handleStartConversation}
            onToggleSaveService={handleToggleSaveService}
            savedServiceIds={savedServiceIds}
          />
        )}

        {currentView === 'service' && activeService && (
          <ServiceDetailPage
            service={activeService}
            onBack={() => handleNavigate('skillswap')}
            onViewCreator={handleViewCreator}
            onBookService={handleOpenBooking}
            onStartConversation={handleStartConversation}
            onToggleSaveService={handleToggleSaveService}
            isSaved={savedServiceIds.includes(activeService.id)}
          />
        )}

        {currentView === 'creator-dashboard' && (
          <CreatorDashboardPage
            onNavigate={handleNavigate}
            onViewService={handleViewService}
          />
        )}

        {currentView === 'client-dashboard' && (
          <ClientDashboardPage
            bookings={bookings}
            onStartConversation={handleStartConversation}
            onNavigate={handleNavigate}
            onViewServiceById={handleViewServiceById}
          />
        )}

        {currentView === 'messages' && (
          <MessagesPage
            initialCreatorId={directMessageCreatorId}
            onViewCreator={handleViewCreator}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'saved' && (
          <SavedPage
            savedServiceIds={savedServiceIds}
            onToggleSaveService={handleToggleSaveService}
            onViewService={handleViewService}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDecisions={() => setIsDecisionsOpen(true)}
      />

      {/* Global Modals */}
      {bookingModalService && (
        <BookingModal
          service={bookingModalService}
          onClose={() => setBookingModalService(null)}
          onBookingSuccess={handleBookingSuccess}
        />
      )}

      <DecisionsModal
        isOpen={isDecisionsOpen}
        onClose={() => setIsDecisionsOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onViewService={handleViewService}
        onViewCreator={handleViewCreator}
        onLaunchSkillMatch={(prompt) => handleNavigate('skillmatch', prompt)}
      />

    </div>
  );
}
