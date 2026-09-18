export type Category = 
  | 'Design'
  | 'Video'
  | 'Music'
  | 'Coding'
  | 'Tutoring'
  | 'Writing'
  | 'Social Media'
  | 'Animation';

export interface Skill {
  name: string;
  category: Category;
  verified: boolean;
  endorsements?: number;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  unlockedAt?: string;
  isUnlocked: boolean;
  xpReward: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: Category;
  type: 'image' | 'video' | 'comparison';
  coverUrl: string;
  previewUrl?: string;
  beforeUrl?: string;
  afterUrl?: string;
  skills: string[];
  clientOrProject: string;
  year: string;
}

export interface PackageTier {
  name: 'STARTER' | 'PRO' | 'PREMIUM';
  price: number; // in INR ₹
  deliveryDays: number;
  revisions: string;
  description: string;
  features: string[];
}

export interface Service {
  id: string;
  creatorId: string;
  creatorUsername: string;
  creatorName: string;
  creatorAvatar: string;
  creatorRating: number;
  title: string;
  category: Category;
  description: string;
  coverImage: string;
  startingPrice: number; // in INR ₹
  deliveryDays: number;
  rating: number;
  reviewsCount: number;
  skills: string[];
  packages: {
    starter: PackageTier;
    pro: PackageTier;
    premium: PackageTier;
  };
  requirements?: string[];
  ordersInQueue?: number;
}

export interface Review {
  id: string;
  clientName: string;
  clientAvatar: string;
  rating: number;
  date: string;
  comment: string;
  serviceTitle: string;
}

export interface Creator {
  id: string;
  username: string;
  name: string;
  avatar: string;
  banner?: string;
  age?: number;
  location?: string;
  memberSince?: string;
  badgeRole: string; // e.g. "Rising Creator", "Elite Editor"
  tagline: string;
  bio: string;
  category: Category;
  secondaryCategory?: Category;
  level: number;
  xp: number;
  nextLevelXp: number;
  rating: number;
  reviewCount: number;
  completedProjects: number;
  responseTime: string; // e.g. "< 1 hour"
  onTimeDeliveryRate?: string;
  repeatClientsRate?: string;
  availability: 'Available' | 'Busy' | 'In Class';
  skills: Skill[];
  badges: Badge[];
  portfolio: PortfolioItem[];
  services: Service[];
  reviews?: Review[];
  socials: {
    github?: string;
    behance?: string;
    youtube?: string;
    instagram?: string;
    twitter?: string;
  };
  spotlightQuote?: string;
  joinedDate: string;
}

export interface Quest {
  id: string;
  title: string;
  category: Category;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  xpReward: number;
  budget?: number; // Cash bounty in INR
  deadline?: string;
  submissionsCount?: number;
  description: string;
  instructions: string[];
  deliverables: string[];
  skillsTested: string[];
  badgeRewardId?: string;
  isCompleted?: boolean;
  submissionCount?: number;
}

export type SkillQuest = Quest;

export interface Booking {
  id: string;
  serviceId: string;
  serviceTitle: string;
  creatorId: string;
  creatorName: string;
  creatorUsername: string;
  creatorAvatar: string;
  clientId: string;
  clientName: string;
  clientAvatar: string;
  packageTier: 'STARTER' | 'PRO' | 'PREMIUM';
  price: number;
  status: 'In Progress' | 'Under Review' | 'Completed' | 'Pending Requirements';
  createdAt: string;
  deliveryDate: string;
  requirementsNotes: string;
  projectFilesCount?: number;
}

export interface Message {
  id: string;
  senderId: string;
  senderName?: string;
  receiverId?: string;
  text: string;
  timestamp: string;
  isMe?: boolean;
  read?: boolean;
  attachmentName?: string;
}

export interface Conversation {
  id: string;
  participantId: string;
  participantName: string;
  participantUsername: string;
  participantAvatar: string;
  participantRole: 'creator' | 'client';
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  relatedService?: string;
  messages: Message[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'booking' | 'review' | 'message' | 'badge' | 'quest' | 'ai';
  timestamp: string;
  read: boolean;
  link?: string;
}

export interface SkillMatchResult {
  creator: Creator;
  matchScore: number;
  matchReasons: string[];
  matchedSkills: string[];
  suggestedService: Service;
}

export interface FilterState {
  searchQuery: string;
  category: Category | 'All';
  maxPrice: number;
  minRating: number;
  maxDeliveryDays: number;
  selectedSkill: string;
  sortBy: 'recommended' | 'rating' | 'price_low' | 'price_high' | 'delivery' | 'experience';
}
