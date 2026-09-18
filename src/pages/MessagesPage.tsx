import React, { useState } from 'react';
import { 
  Send, 
  Paperclip, 
  Smile, 
  ShieldCheck, 
  Clock, 
  CheckCheck, 
  Phone, 
  Video, 
  Info,
  Sparkles,
  Zap,
  ExternalLink
} from 'lucide-react';
import { Conversation, Message } from '../types';
import { CONVERSATIONS, CREATORS } from '../data/mockData';

interface MessagesPageProps {
  initialCreatorId?: string;
  onViewCreator: (username: string) => void;
  onNavigate: (view: string) => void;
}

export const MessagesPage: React.FC<MessagesPageProps> = ({
  initialCreatorId,
  onViewCreator,
  onNavigate
}) => {
  const [conversations, setConversations] = useState<Conversation[]>(CONVERSATIONS);
  
  // Find initial conversation or default to first
  const initialConv = initialCreatorId 
    ? conversations.find(c => c.participantId === initialCreatorId) || conversations[0]
    : conversations[0];

  const [activeConvId, setActiveConvId] = useState<string>(initialConv?.id || 'conv_1');
  const [typedMessage, setTypedMessage] = useState('');

  const activeConversation = conversations.find(c => c.id === activeConvId) || conversations[0];
  const participantCreator = CREATORS.find(c => c.id === activeConversation.participantId) || CREATORS[0];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedMessage.trim()) return;

    const newMessage: Message = {
      id: `m_${Date.now()}`,
      senderId: 'current_user',
      receiverId: activeConversation.participantId,
      text: typedMessage,
      timestamp: 'Just now',
      read: true
    };

    // Update conversation
    const updatedConversations = conversations.map(c => {
      if (c.id === activeConvId) {
        return {
          ...c,
          lastMessage: typedMessage,
          lastMessageTime: 'Just now',
          messages: [...c.messages, newMessage]
        };
      }
      return c;
    });

    setConversations(updatedConversations);
    setTypedMessage('');

    // Simulate creator auto-reply after 1.2s
    setTimeout(() => {
      const replies = [
        "Sounds awesome! I've reviewed your project notes and can definitely make that happen for you.",
        "Got it! That timeline works great on my end. I can deliver the draft in 48 hours.",
        "Thanks for reaching out! Feel free to pick the package tier that fits your scope and I'll jump right on it!"
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];

      const creatorReply: Message = {
        id: `m_reply_${Date.now()}`,
        senderId: activeConversation.participantId,
        receiverId: 'current_user',
        text: randomReply,
        timestamp: 'Just now',
        read: true
      };

      setConversations(prev => prev.map(c => {
        if (c.id === activeConvId) {
          return {
            ...c,
            lastMessage: randomReply,
            lastMessageTime: 'Just now',
            messages: [...c.messages, creatorReply]
          };
        }
        return c;
      }));
    }, 1200);
  };

  return (
    <div className="min-h-[85vh] py-8 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#121526]/90 shadow-2xl backdrop-blur-2xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-[750px]">
          
          {/* Conversation Sidebar (1 Col) */}
          <aside className="border-r border-white/10 bg-[#0d1020]/90 flex flex-col">
            <div className="p-4 border-b border-white/10">
              <h2 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
                Direct Messages
              </h2>
              <span className="text-[10px] text-slate-400">
                Safe client-creator communications
              </span>
            </div>

            <div className="flex-1 overflow-y-auto p-2 space-y-1">
              {conversations.map((conv) => {
                const isActive = conv.id === activeConvId;
                return (
                  <button
                    key={conv.id}
                    onClick={() => setActiveConvId(conv.id)}
                    className={`flex w-full items-center gap-3 p-3 rounded-2xl text-left transition-all ${
                      isActive
                        ? 'bg-purple-600/20 border border-purple-500/40'
                        : 'hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={conv.participantAvatar}
                        alt={conv.participantName}
                        className="h-10 w-10 rounded-xl object-cover"
                      />
                      {conv.unreadCount > 0 && (
                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 text-[9px] font-bold text-black">
                          {conv.unreadCount}
                        </span>
                      )}
                    </div>

                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-xs font-bold text-white truncate">
                          {conv.participantName}
                        </span>
                        <span className="text-[10px] text-slate-500">
                          {conv.lastMessageTime}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">
                        {conv.lastMessage}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Chat Window (2-3 Cols) */}
          <main className="md:col-span-2 lg:col-span-3 flex flex-col justify-between bg-[#111425]">
            
            {/* Chat Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-4 bg-[#14182c]">
              <div className="flex items-center gap-3">
                <img
                  src={activeConversation.participantAvatar}
                  alt={activeConversation.participantName}
                  className="h-10 w-10 rounded-xl object-cover border border-purple-500/30"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading text-sm font-bold text-white">
                      {activeConversation.participantName}
                    </h3>
                    <span className="text-xs font-mono text-purple-300">
                      @{activeConversation.participantUsername}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active now • Responds quickly</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onViewCreator(activeConversation.participantUsername)}
                  className="flex items-center gap-1.5 rounded-xl bg-white/5 hover:bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300 border border-white/10 transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-cyan-400" />
                  <span className="hidden sm:inline">View Passport</span>
                </button>
                <button
                  onClick={() => onNavigate('skillswap')}
                  className="rounded-xl bg-purple-600 hover:bg-purple-500 px-3 py-1.5 text-xs font-bold text-white shadow-md transition-all"
                >
                  Book Service
                </button>
              </div>
            </div>

            {/* Chat Stream */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              
              {/* Safety notice */}
              <div className="rounded-2xl border border-white/5 bg-black/40 p-3 text-center text-xs text-slate-400 max-w-md mx-auto">
                <ShieldCheck className="h-4 w-4 text-purple-400 mx-auto mb-1" />
                <span>
                  Keep discussions and agreements on TeenVerseHub to protect your commissions under our milestone guarantee.
                </span>
              </div>

              {activeConversation.messages.map((msg) => {
                const isMe = msg.senderId === 'current_user';

                return (
                  <div
                    key={msg.id}
                    className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-md rounded-2xl p-3.5 text-xs leading-relaxed ${
                        isMe
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-br-sm shadow-md shadow-purple-600/20'
                          : 'bg-white/10 text-slate-200 rounded-bl-sm border border-white/10'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <div className={`mt-1 text-[10px] flex items-center justify-end gap-1 ${isMe ? 'text-purple-200' : 'text-slate-400'}`}>
                        <span>{msg.timestamp}</span>
                        {isMe && <CheckCheck className="h-3 w-3" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSendMessage} className="border-t border-white/10 p-3 sm:p-4 bg-[#14182c]">
              <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-black/40 p-1.5 focus-within:border-purple-500 transition-all">
                <input
                  type="text"
                  value={typedMessage}
                  onChange={(e) => setTypedMessage(e.target.value)}
                  placeholder={`Message ${activeConversation.participantName}...`}
                  className="flex-1 bg-transparent px-3 py-2 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none"
                />

                <button
                  type="submit"
                  disabled={!typedMessage.trim()}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600 text-white hover:bg-purple-500 disabled:opacity-40 transition-all"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>

          </main>

        </div>

      </div>
    </div>
  );
};
