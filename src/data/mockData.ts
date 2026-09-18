import { Creator, Service, Quest, Badge, Conversation, Booking, Notification } from '../types';

export const BADGES: Badge[] = [
  {
    id: 'first_gig',
    title: 'First Gig',
    description: 'Successfully completed first commissioned project on SkillSwap.',
    icon: 'Sparkles',
    category: 'Milestone',
    isUnlocked: true,
    unlockedAt: '2 weeks ago',
    xpReward: 100,
  },
  {
    id: 'rising_creator',
    title: 'Rising Creator',
    description: 'Maintained 4.8+ rating across first 5 client projects.',
    icon: 'Flame',
    category: 'Reputation',
    isUnlocked: true,
    unlockedAt: '1 week ago',
    xpReward: 250,
  },
  {
    id: 'fast_responder',
    title: 'Fast Responder',
    description: 'Responded to 95% of client inquiries in under 30 minutes.',
    icon: 'Zap',
    category: 'Communication',
    isUnlocked: true,
    unlockedAt: '3 days ago',
    xpReward: 150,
  },
  {
    id: '10_projects',
    title: '10 Projects',
    description: 'Delivered 10 real-world projects with positive client reviews.',
    icon: 'Briefcase',
    category: 'Experience',
    isUnlocked: true,
    unlockedAt: 'Yesterday',
    xpReward: 300,
  },
  {
    id: '5_star_creator',
    title: '5-Star Creator',
    description: 'Received ten consecutive 5-star ratings from satisfied clients.',
    icon: 'Star',
    category: 'Quality',
    isUnlocked: true,
    unlockedAt: 'Just now',
    xpReward: 400,
  },
  {
    id: 'design_specialist',
    title: 'Design Specialist',
    description: 'Mastered typography, color harmony, and social branding quests.',
    icon: 'Palette',
    category: 'Skill',
    isUnlocked: true,
    unlockedAt: '3 weeks ago',
    xpReward: 200,
  },
  {
    id: 'editing_specialist',
    title: 'Editing Specialist',
    description: 'Aced high-paced pacing, sound design, and color grading challenges.',
    icon: 'Film',
    category: 'Skill',
    isUnlocked: false,
    xpReward: 200,
  },
  {
    id: 'top_tutor',
    title: 'Top Tutor',
    description: 'Conducted 15+ interactive peer tutoring sessions with 98% clarity score.',
    icon: 'GraduationCap',
    category: 'Teaching',
    isUnlocked: false,
    xpReward: 350,
  },
  {
    id: 'early_creator',
    title: 'Early Creator',
    description: 'One of the first 1,000 pioneering teen creators on TeenVerseHub.',
    icon: 'Compass',
    category: 'Platform',
    isUnlocked: true,
    unlockedAt: '1 month ago',
    xpReward: 500,
  },
  {
    id: 'elite_creator',
    title: 'Elite Creator',
    description: 'Reached Level 15 and crossed ₹20,000 in creator peer earnings.',
    icon: 'Crown',
    category: 'Prestige',
    isUnlocked: false,
    xpReward: 1000,
  },
];

export const QUESTS: Quest[] = [
  {
    id: 'quest_design_01',
    title: 'Social Media Poster Quest',
    category: 'Design',
    difficulty: 'Beginner',
    estimatedTime: '45 mins',
    xpReward: 150,
    description: 'Design a high-contrast Instagram flyer for an upcoming indie music festival or campus hackathon.',
    instructions: [
      'Choose a theme: Indie Music Fest, Esports Tournament, or Campus AI Hackathon.',
      'Use proper typographic hierarchy (Event Name, Date/Venue, Featured Artists/Sponsors).',
      'Export as high-resolution 1080x1350 vertical canvas.',
      'Provide a short 2-sentence rationale for your color palette.'
    ],
    deliverables: ['High-res PNG/JPG', 'Figma link or source assets', 'Design brief statement'],
    skillsTested: ['Typography', 'Layout Design', 'Figma', 'Visual Hierarchy'],
    badgeRewardId: 'design_specialist',
    isCompleted: true,
    submissionCount: 428
  },
  {
    id: 'quest_video_01',
    title: '15-Second Promotional Reel Quest',
    category: 'Video',
    difficulty: 'Intermediate',
    estimatedTime: '1.5 hours',
    xpReward: 150,
    description: 'Edit a punchy 15-second TikTok/Reel with beat-synced cuts, dynamic captions, and sound effects.',
    instructions: [
      'Hook the viewer within the first 1.5 seconds.',
      'Sync transitions and impact cuts on downbeats of royalty-free audio.',
      'Include kinetic typography with subtle pop animation.',
      'Color grade footage to match a vibrant Gen-Z aesthetic.'
    ],
    deliverables: ['1080x1920 MP4 Video', 'Project timeline screenshot', 'Sound effect breakdown'],
    skillsTested: ['Premiere Pro', 'CapCut', 'Sound Design', 'Pacing'],
    badgeRewardId: 'editing_specialist',
    isCompleted: false,
    submissionCount: 312
  },
  {
    id: 'quest_coding_01',
    title: 'Responsive Landing Page Quest',
    category: 'Coding',
    difficulty: 'Intermediate',
    estimatedTime: '2 hours',
    xpReward: 200,
    description: 'Build a responsive landing page for a fictional indie streetwear brand using React and Tailwind CSS.',
    instructions: [
      'Implement mobile-first responsive layout (mobile, tablet, desktop).',
      'Include hero section with CTA, product grid, and interactive newsletter form.',
      'Ensure zero horizontal scroll on 320px viewport.',
      'Deploy to GitHub Pages, Vercel, or provide live CodeSandbox preview.'
    ],
    deliverables: ['Live preview URL', 'GitHub repository link', 'Responsive design showcase'],
    skillsTested: ['React', 'Tailwind CSS', 'TypeScript', 'Responsive Layout'],
    badgeRewardId: 'rising_creator',
    isCompleted: true,
    submissionCount: 289
  },
  {
    id: 'quest_tutoring_01',
    title: 'Calculus Concept Mini-Lesson Quest',
    category: 'Tutoring',
    difficulty: 'Beginner',
    estimatedTime: '30 mins',
    xpReward: 100,
    description: 'Create a 3-minute visual walkthrough explaining Derivatives or Chain Rule in simple real-world metaphors.',
    instructions: [
      'Break down the concept using an everyday analogy (e.g., speedometers vs odometers).',
      'Create 2 clean step-by-step example problem slides.',
      'Include a quick 1-question check for understanding.',
      'Upload a short video or annotated slide deck.'
    ],
    deliverables: ['Slide deck PDF or Loom video', 'Sample problem sheet'],
    skillsTested: ['Calculus', 'Pedagogy', 'Presentation', 'Math Clarity'],
    badgeRewardId: 'top_tutor',
    isCompleted: false,
    submissionCount: 154
  },
  {
    id: 'quest_music_01',
    title: '20-Second Original Lo-Fi Beat Quest',
    category: 'Music',
    difficulty: 'Intermediate',
    estimatedTime: '1 hour',
    xpReward: 150,
    description: 'Produce a 20-second chill lo-fi study beat with warm electric piano chords, vinyl crackle, and laid-back drum groove.',
    instructions: [
      'Tempo between 75-88 BPM.',
      'Layer warm 7th chords with tape saturation/wow-flutter effect.',
      'Sidechain the kick drum gently to the synth pad.',
      'Export 320kbps MP3 or WAV.'
    ],
    deliverables: ['Audio file (WAV/MP3)', 'DAW session screenshot', 'Stem summary'],
    skillsTested: ['FL Studio', 'Ableton', 'Lo-Fi Beatmaking', 'Mixing'],
    isCompleted: false,
    submissionCount: 198
  },
  {
    id: 'quest_animation_01',
    title: '3D Logo Motion Loop Quest',
    category: 'Animation',
    difficulty: 'Advanced',
    estimatedTime: '3 hours',
    xpReward: 250,
    description: 'Craft a seamless 3D logo turnaround and liquid motion splash in Blender or After Effects.',
    instructions: [
      'Create seamless 4-second loop at 60fps.',
      'Apply studio three-point lighting with soft rim backlight.',
      'Integrate subtle secondary motion (particles or chromatic aberration).',
      'Render in H.264 vertical and square format.'
    ],
    deliverables: ['Rendered MP4 / GIF', 'Blender/AE project file'],
    skillsTested: ['Blender', 'After Effects', '3D Motion', 'Lighting'],
    isCompleted: false,
    submissionCount: 87
  }
];

export const CREATORS: Creator[] = [
  {
    id: 'c1',
    username: 'maya.designs',
    name: 'Maya Patel',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    badgeRole: 'Rising Creator',
    tagline: 'Visual storyteller crafting brand identities & punchy edits.',
    bio: '17 y/o visual designer and video editor. I help student startups, indie streamers, and local brands look like Fortune 500 companies with modern typography and sleek motion.',
    category: 'Design',
    secondaryCategory: 'Video',
    level: 12,
    xp: 1240,
    nextLevelXp: 1500,
    rating: 4.9,
    reviewCount: 38,
    completedProjects: 24,
    responseTime: '< 20 mins',
    availability: 'Available',
    spotlightQuote: 'Creating visuals that make young ideas impossible to ignore.',
    joinedDate: 'Joined Aug 2025',
    socials: {
      behance: 'https://behance.net/maya-designs',
      instagram: 'https://instagram.com/maya.visuals',
      youtube: 'https://youtube.com/@mayacreates'
    },
    skills: [
      { name: 'Logo Design', category: 'Design', verified: true, endorsements: 42 },
      { name: 'Brand Identity', category: 'Design', verified: true, endorsements: 36 },
      { name: 'Video Editing', category: 'Video', verified: true, endorsements: 29 },
      { name: 'Figma', category: 'Design', verified: true, endorsements: 45 },
      { name: 'Thumbnail Design', category: 'Design', verified: true, endorsements: 31 }
    ],
    badges: [BADGES[0], BADGES[1], BADGES[2], BADGES[3], BADGES[4], BADGES[5]],
    portfolio: [
      {
        id: 'p1',
        title: 'CyberBloom Esports Identity',
        description: 'Complete brand makeover for a high school gaming league with futuristic logos and stream overlays.',
        category: 'Design',
        type: 'comparison',
        coverUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
        beforeUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
        afterUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
        skills: ['Logo Design', 'Vector Illustration', 'Figma'],
        clientOrProject: 'CyberBloom League',
        year: '2026'
      },
      {
        id: 'p2',
        title: 'Neon Drift Gaming Reel',
        description: 'Fast-paced Valorant clutch edit with sound design, velocity remap, and 3D kinetic text.',
        category: 'Video',
        type: 'video',
        coverUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80',
        previewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-game-animation-with-neon-lights-42998-large.mp4',
        skills: ['Premiere Pro', 'After Effects', 'Velocity Sync'],
        clientOrProject: 'ApexClutch Streamer',
        year: '2026'
      },
      {
        id: 'p3',
        title: 'Komorebi Coffee Packaging',
        description: 'Minimalist Japanese aesthetic packaging design for a student-run artisanal cold brew brand.',
        category: 'Design',
        type: 'image',
        coverUrl: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=800&auto=format&fit=crop&q=80',
        skills: ['Packaging', 'Typography', 'Illustrator'],
        clientOrProject: 'Komorebi Coffee',
        year: '2025'
      }
    ],
    services: []
  },
  {
    id: 'c2',
    username: 'alex.cuts',
    name: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    badgeRole: 'Editing Specialist',
    tagline: 'High-retention YouTube & TikTok video editing.',
    bio: '18 y/o video editor with 3+ years experience cutting gaming montages, talking-head videos, and TikTok shorts that hook attention within 2 seconds.',
    category: 'Video',
    level: 14,
    xp: 1820,
    nextLevelXp: 2000,
    rating: 4.9,
    reviewCount: 46,
    completedProjects: 31,
    responseTime: '< 15 mins',
    availability: 'Available',
    spotlightQuote: 'Pacing is everything. I cut videos that viewers cannot swipe away from.',
    joinedDate: 'Joined Jul 2025',
    socials: {
      youtube: 'https://youtube.com/@alexedits',
      twitter: 'https://x.com/alexcuts'
    },
    skills: [
      { name: 'Video Editing', category: 'Video', verified: true, endorsements: 53 },
      { name: 'Gaming Montage', category: 'Video', verified: true, endorsements: 47 },
      { name: 'Short-Form Video', category: 'Video', verified: true, endorsements: 39 },
      { name: 'Sound Design', category: 'Video', verified: true, endorsements: 28 },
      { name: 'CapCut / Premiere', category: 'Video', verified: true, endorsements: 44 }
    ],
    badges: [BADGES[0], BADGES[1], BADGES[2], BADGES[3], BADGES[6]],
    portfolio: [
      {
        id: 'p4',
        title: 'Fortnite Championship Montage',
        description: 'Synchronized frag-movie featuring 3D camera tracker and custom bass rumble.',
        category: 'Video',
        type: 'video',
        coverUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80',
        previewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-controller-playing-a-video-game-41484-large.mp4',
        skills: ['Premiere Pro', 'After Effects', 'Color Grading'],
        clientOrProject: 'Team Vortex',
        year: '2026'
      }
    ],
    services: []
  },
  {
    id: 'c3',
    username: 'dev_rohan',
    name: 'Rohan Sharma',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    badgeRole: 'Code Prodigy',
    tagline: 'Modern full-stack web developer & Discord bot builder.',
    bio: '18 y/o coding enthusiast building snappy web applications, Discord community bots, and sleek portfolio websites using React, Next.js, and Python.',
    category: 'Coding',
    level: 15,
    xp: 2190,
    nextLevelXp: 2500,
    rating: 5.0,
    reviewCount: 29,
    completedProjects: 22,
    responseTime: '< 30 mins',
    availability: 'Available',
    spotlightQuote: 'Code should be clean, fast, and accessible to everyone.',
    joinedDate: 'Joined Sep 2025',
    socials: {
      github: 'https://github.com/rohansharma',
      twitter: 'https://x.com/dev_rohan'
    },
    skills: [
      { name: 'React', category: 'Coding', verified: true, endorsements: 38 },
      { name: 'Tailwind CSS', category: 'Coding', verified: true, endorsements: 41 },
      { name: 'Python Bot', category: 'Coding', verified: true, endorsements: 34 },
      { name: 'Full-Stack Web', category: 'Coding', verified: true, endorsements: 29 },
      { name: 'TypeScript', category: 'Coding', verified: true, endorsements: 27 }
    ],
    badges: [BADGES[0], BADGES[1], BADGES[3], BADGES[4]],
    portfolio: [
      {
        id: 'p5',
        title: 'StudyPulse Habit Tracker App',
        description: 'Interactive gamified study timer with dark mode, Pomodoro cycles, and soundscapes.',
        category: 'Coding',
        type: 'image',
        coverUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
        skills: ['React', 'Tailwind', 'LocalState'],
        clientOrProject: 'Open Source App',
        year: '2026'
      }
    ],
    services: []
  },
  {
    id: 'c4',
    username: 'tara.tutors',
    name: 'Tara Mukherjee',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
    badgeRole: 'Top Tutor',
    tagline: 'High school peer tutor making Calculus & Physics click.',
    bio: '17 y/o high school senior with 5s on AP Calc BC and AP Physics C. I explain complex formulas with visual intuition and interactive problem solving.',
    category: 'Tutoring',
    level: 11,
    xp: 1120,
    nextLevelXp: 1300,
    rating: 4.95,
    reviewCount: 32,
    completedProjects: 26,
    responseTime: '< 1 hour',
    availability: 'Available',
    spotlightQuote: 'No formula is intimidating once you understand where it came from.',
    joinedDate: 'Joined Oct 2025',
    socials: {
      youtube: 'https://youtube.com/@taramath'
    },
    skills: [
      { name: 'Calculus', category: 'Tutoring', verified: true, endorsements: 44 },
      { name: 'AP Physics', category: 'Tutoring', verified: true, endorsements: 37 },
      { name: 'SAT Prep', category: 'Tutoring', verified: true, endorsements: 26 },
      { name: 'Peer Mentoring', category: 'Tutoring', verified: true, endorsements: 33 }
    ],
    badges: [BADGES[0], BADGES[1], BADGES[2], BADGES[7]],
    portfolio: [
      {
        id: 'p6',
        title: 'Visual Calculus Cheat-Sheets',
        description: 'Color-coded visual mindmaps for integration techniques and differential equations.',
        category: 'Tutoring',
        type: 'image',
        coverUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=80',
        skills: ['Calculus', 'Pedagogy', 'Diagrams'],
        clientOrProject: 'Student Study Hub',
        year: '2026'
      }
    ],
    services: []
  },
  {
    id: 'c5',
    username: 'kai.audio',
    name: 'Kai Chen',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    badgeRole: 'Music Maker',
    tagline: 'Lo-Fi producer, podcast audio engineer & beatmaker.',
    bio: '16 y/o beatmaker and audio engineer. I produce cozy lo-fi tracks, podcast intro jingles, and clean up messy voice recordings into broadcast audio.',
    category: 'Music',
    level: 10,
    xp: 980,
    nextLevelXp: 1200,
    rating: 4.88,
    reviewCount: 22,
    completedProjects: 18,
    responseTime: '< 45 mins',
    availability: 'Available',
    spotlightQuote: 'Sound is 50% of the emotion in any creative piece.',
    joinedDate: 'Joined Nov 2025',
    socials: {
      youtube: 'https://youtube.com/@kaiaudio'
    },
    skills: [
      { name: 'Music Production', category: 'Music', verified: true, endorsements: 35 },
      { name: 'Lo-Fi Beatmaking', category: 'Music', verified: true, endorsements: 41 },
      { name: 'Audio Cleaning', category: 'Music', verified: true, endorsements: 28 },
      { name: 'Podcast Mastering', category: 'Music', verified: true, endorsements: 24 }
    ],
    badges: [BADGES[0], BADGES[1], BADGES[2]],
    portfolio: [
      {
        id: 'p7',
        title: 'Midnight Library Lo-Fi EP',
        description: 'Original 4-track EP featuring organic foley, Rhodes piano, and tape warmth.',
        category: 'Music',
        type: 'video',
        coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80',
        previewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-sound-board-and-knobs-in-a-studio-41014-large.mp4',
        skills: ['FL Studio', 'Tape Saturation', 'Lo-Fi'],
        clientOrProject: 'ChilledCow Vibes',
        year: '2026'
      }
    ],
    services: []
  },
  {
    id: 'c6',
    username: 'zara.3d',
    name: 'Zara Al-Mansoor',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
    badgeRole: '3D Animator',
    tagline: 'Blender 3D motion artist & product visualizer.',
    bio: '18 y/o self-taught 3D artist. Creating futuristic product mockups, game assets, and looping 3D animations that pop off the screen.',
    category: 'Animation',
    level: 13,
    xp: 1650,
    nextLevelXp: 1800,
    rating: 4.96,
    reviewCount: 25,
    completedProjects: 19,
    responseTime: '< 30 mins',
    availability: 'Available',
    spotlightQuote: 'Turning 2D dreams into tactile 3D dimensions.',
    joinedDate: 'Joined Aug 2025',
    socials: {
      behance: 'https://behance.net/zara3d'
    },
    skills: [
      { name: 'Blender 3D', category: 'Animation', verified: true, endorsements: 48 },
      { name: '3D Logo Animation', category: 'Animation', verified: true, endorsements: 39 },
      { name: 'Product Visualization', category: 'Animation', verified: true, endorsements: 31 },
      { name: 'Motion Graphics', category: 'Animation', verified: true, endorsements: 37 }
    ],
    badges: [BADGES[0], BADGES[1], BADGES[3], BADGES[4]],
    portfolio: [
      {
        id: 'p8',
        title: 'Holographic Sneaker Render',
        description: 'Photorealistic 3D footwear showcase with dynamic lighting and particle aura.',
        category: 'Animation',
        type: 'image',
        coverUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80',
        skills: ['Blender', 'Substance Painter', 'Cycles'],
        clientOrProject: 'Strata Kicks',
        year: '2026'
      }
    ],
    services: []
  },
  {
    id: 'c7',
    username: 'sam.writes',
    name: 'Samira Khan',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
    badgeRole: 'Copy Creator',
    tagline: 'Viral hooks, website copywriting & college essays.',
    bio: '17 y/o essayist and social media copywriter. Helping student ventures craft punchy copy that converts readers into loyal followers.',
    category: 'Writing',
    level: 9,
    xp: 860,
    nextLevelXp: 1000,
    rating: 4.9,
    reviewCount: 19,
    completedProjects: 15,
    responseTime: '< 40 mins',
    availability: 'Available',
    spotlightQuote: 'Words are your storefront. Make them impossible to ignore.',
    joinedDate: 'Joined Nov 2025',
    socials: {
      twitter: 'https://x.com/samwrites'
    },
    skills: [
      { name: 'Copywriting', category: 'Writing', verified: true, endorsements: 30 },
      { name: 'Social Media Scripts', category: 'Writing', verified: true, endorsements: 33 },
      { name: 'Blog Writing', category: 'Writing', verified: true, endorsements: 27 },
      { name: 'Essay Review', category: 'Writing', verified: true, endorsements: 25 }
    ],
    badges: [BADGES[0], BADGES[1], BADGES[2]],
    portfolio: [
      {
        id: 'p9',
        title: 'Gen-Z Newsletter Hooks',
        description: 'Series of email headlines and opening hooks that boosted open rates to 52%.',
        category: 'Writing',
        type: 'image',
        coverUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80',
        skills: ['Copywriting', 'Email Marketing', 'Editorial'],
        clientOrProject: 'Gen-Z Daily',
        year: '2026'
      }
    ],
    services: []
  },
  {
    id: 'c8',
    username: 'leo.growth',
    name: 'Leo Morales',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
    badgeRole: 'Social Strategist',
    tagline: 'TikTok & Instagram carousel creator for creator brands.',
    bio: '18 y/o social media manager. I design visual carousel posts, research viral sound trends, and structure content calendars that drive authentic engagement.',
    category: 'Social Media',
    level: 11,
    xp: 1180,
    nextLevelXp: 1400,
    rating: 4.87,
    reviewCount: 27,
    completedProjects: 20,
    responseTime: '< 25 mins',
    availability: 'Available',
    spotlightQuote: 'Algorithms reward consistency, but humans reward soul.',
    joinedDate: 'Joined Sep 2025',
    socials: {
      instagram: 'https://instagram.com/leogrowth'
    },
    skills: [
      { name: 'Social Strategy', category: 'Social Media', verified: true, endorsements: 36 },
      { name: 'Instagram Carousels', category: 'Social Media', verified: true, endorsements: 42 },
      { name: 'TikTok Trend Analysis', category: 'Social Media', verified: true, endorsements: 29 },
      { name: 'Content Calendar', category: 'Social Media', verified: true, endorsements: 24 }
    ],
    badges: [BADGES[0], BADGES[1], BADGES[2], BADGES[3]],
    portfolio: [
      {
        id: 'p10',
        title: 'Creator Economy 101 Carousel',
        description: '10-slide educational carousel with 14.5k saves on Instagram.',
        category: 'Social Media',
        type: 'image',
        coverUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80',
        skills: ['Canva', 'Copywriting', 'Design'],
        clientOrProject: 'SkillPod',
        year: '2026'
      }
    ],
    services: []
  },
  {
    id: 'c9',
    username: 'priya.art',
    name: 'Priya Joshi',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    badgeRole: 'Digital Illustrator',
    tagline: 'Custom anime & Twitch emotes, badges, and avatars.',
    bio: '16 y/o digital illustrator with a vibrant manga & chibi aesthetic. Creating cute Twitch badges, custom streamer avatars, and indie game sprites.',
    category: 'Design',
    level: 10,
    xp: 940,
    nextLevelXp: 1200,
    rating: 4.95,
    reviewCount: 23,
    completedProjects: 17,
    responseTime: '< 35 mins',
    availability: 'Available',
    spotlightQuote: 'Making the internet a little more colorful, one drawing at a time.',
    joinedDate: 'Joined Dec 2025',
    socials: {
      instagram: 'https://instagram.com/priyadraws'
    },
    skills: [
      { name: 'Digital Art', category: 'Design', verified: true, endorsements: 39 },
      { name: 'Twitch Emotes', category: 'Design', verified: true, endorsements: 44 },
      { name: 'Procreate', category: 'Design', verified: true, endorsements: 37 }
    ],
    badges: [BADGES[0], BADGES[1], BADGES[5]],
    portfolio: [],
    services: []
  },
  {
    id: 'c10',
    username: 'marcus.beats',
    name: 'Marcus Vance',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80',
    badgeRole: 'Hip-Hop Producer',
    tagline: 'Hard-hitting trap beats & drill production.',
    bio: '17 y/o music producer from Chicago. Punchy 808s, haunting piano melodies, and ready-to-record rap beats with stems included.',
    category: 'Music',
    level: 12,
    xp: 1390,
    nextLevelXp: 1600,
    rating: 4.9,
    reviewCount: 28,
    completedProjects: 21,
    responseTime: '< 20 mins',
    availability: 'Available',
    spotlightQuote: 'If the 808 doesn’t hit you in the chest, it is not finished.',
    joinedDate: 'Joined Sep 2025',
    socials: {
      youtube: 'https://youtube.com/@marcusbeats'
    },
    skills: [
      { name: 'Beat Production', category: 'Music', verified: true, endorsements: 40 },
      { name: 'Trap Beats', category: 'Music', verified: true, endorsements: 37 },
      { name: 'Mixing & Mastering', category: 'Music', verified: true, endorsements: 29 }
    ],
    badges: [BADGES[0], BADGES[1], BADGES[2]],
    portfolio: [],
    services: []
  },
  {
    id: 'c11',
    username: 'ananya.code',
    name: 'Ananya Verma',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80',
    badgeRole: 'Frontend Dev',
    tagline: 'Pixel-perfect portfolio & landing page coder.',
    bio: '17 y/o frontend enthusiast. I turn Figma mockups into silky smooth, responsive React websites with motion animations and accessible semantics.',
    category: 'Coding',
    level: 13,
    xp: 1580,
    nextLevelXp: 1800,
    rating: 4.92,
    reviewCount: 26,
    completedProjects: 18,
    responseTime: '< 25 mins',
    availability: 'Available',
    spotlightQuote: 'Animation is the bridge between a good UI and an unforgettable one.',
    joinedDate: 'Joined Aug 2025',
    socials: {
      github: 'https://github.com/ananyacodes'
    },
    skills: [
      { name: 'React', category: 'Coding', verified: true, endorsements: 39 },
      { name: 'Tailwind CSS', category: 'Coding', verified: true, endorsements: 44 },
      { name: 'Motion Animations', category: 'Coding', verified: true, endorsements: 35 }
    ],
    badges: [BADGES[0], BADGES[1], BADGES[3]],
    portfolio: [],
    services: []
  },
  {
    id: 'c12',
    username: 'lucas.vfx',
    name: 'Lucas Silva',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    badgeRole: 'VFX Artist',
    tagline: 'After Effects visual wizard for music videos & trailers.',
    bio: '18 y/o After Effects compositor. Specializing in sci-fi portal effects, speed ramps, 3D tracking, and cinematic intros.',
    category: 'Video',
    level: 11,
    xp: 1290,
    nextLevelXp: 1500,
    rating: 4.88,
    reviewCount: 24,
    completedProjects: 19,
    responseTime: '< 30 mins',
    availability: 'Available',
    spotlightQuote: 'Magic happens in the composite layer.',
    joinedDate: 'Joined Oct 2025',
    socials: {
      youtube: 'https://youtube.com/@lucasvfx'
    },
    skills: [
      { name: 'After Effects', category: 'Video', verified: true, endorsements: 46 },
      { name: 'VFX Compositing', category: 'Video', verified: true, endorsements: 41 },
      { name: '3D Camera Tracking', category: 'Video', verified: true, endorsements: 32 }
    ],
    badges: [BADGES[0], BADGES[1], BADGES[6]],
    portfolio: [],
    services: []
  },
  {
    id: 'c13',
    username: 'devon.chem',
    name: 'Devon Miller',
    avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&auto=format&fit=crop&q=80',
    badgeRole: 'STEM Tutor',
    tagline: 'AP Chemistry & Organic Chem simplified for high schoolers.',
    bio: '18 y/o national chemistry olympiad finalist. I teach reaction mechanisms through interactive drawing and mnemonics.',
    category: 'Tutoring',
    level: 10,
    xp: 1050,
    nextLevelXp: 1300,
    rating: 4.96,
    reviewCount: 21,
    completedProjects: 16,
    responseTime: '< 40 mins',
    availability: 'Available',
    spotlightQuote: 'Chemistry is just molecular legos once you see the bonds.',
    joinedDate: 'Joined Nov 2025',
    socials: {},
    skills: [
      { name: 'Chemistry', category: 'Tutoring', verified: true, endorsements: 37 },
      { name: 'AP Chem', category: 'Tutoring', verified: true, endorsements: 34 }
    ],
    badges: [BADGES[0], BADGES[1], BADGES[7]],
    portfolio: [],
    services: []
  },
  {
    id: 'c14',
    username: 'zoe.motion',
    name: 'Zoe Washington',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80',
    badgeRole: '2D Animator',
    tagline: 'Frame-by-frame 2D animated explainers and stickers.',
    bio: '17 y/o traditional & digital animator. Bringing cute characters to life in Toon Boom Harmony and Procreate Dreams.',
    category: 'Animation',
    level: 9,
    xp: 870,
    nextLevelXp: 1100,
    rating: 4.9,
    reviewCount: 18,
    completedProjects: 14,
    responseTime: '< 30 mins',
    availability: 'Available',
    spotlightQuote: 'Twelve principles of animation, applied with fresh teen energy.',
    joinedDate: 'Joined Dec 2025',
    socials: {},
    skills: [
      { name: '2D Animation', category: 'Animation', verified: true, endorsements: 32 },
      { name: 'Character Design', category: 'Animation', verified: true, endorsements: 30 }
    ],
    badges: [BADGES[0], BADGES[1]],
    portfolio: [],
    services: []
  },
  {
    id: 'c15',
    username: 'kabir.python',
    name: 'Kabir Singhania',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=80',
    badgeRole: 'Data & AI Tinkerer',
    tagline: 'Python automation, web scrapers, and Discord bots.',
    bio: '17 y/o programmer passionate about Python, Discord API, and data pipelines. I automate repetitive tasks so you can focus on building.',
    category: 'Coding',
    level: 12,
    xp: 1450,
    nextLevelXp: 1700,
    rating: 4.94,
    reviewCount: 30,
    completedProjects: 23,
    responseTime: '< 20 mins',
    availability: 'Available',
    spotlightQuote: 'Automate everything that doesn’t require human empathy.',
    joinedDate: 'Joined Aug 2025',
    socials: {
      github: 'https://github.com/kabirpython'
    },
    skills: [
      { name: 'Python', category: 'Coding', verified: true, endorsements: 45 },
      { name: 'Discord Bot', category: 'Coding', verified: true, endorsements: 41 },
      { name: 'Web Scraping', category: 'Coding', verified: true, endorsements: 33 }
    ],
    badges: [BADGES[0], BADGES[1], BADGES[2], BADGES[3]],
    portfolio: [],
    services: []
  },
  {
    id: 'c16',
    username: 'chloe.social',
    name: 'Chloe Bennett',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
    badgeRole: 'UGC Creator',
    tagline: 'Authentic user-generated video ads for teen & college apps.',
    bio: '18 y/o UGC creator and student brand ambassador. I film high-converting product reviews and aesthetic day-in-the-life reels.',
    category: 'Social Media',
    level: 10,
    xp: 1020,
    nextLevelXp: 1300,
    rating: 4.89,
    reviewCount: 20,
    completedProjects: 16,
    responseTime: '< 30 mins',
    availability: 'Available',
    spotlightQuote: 'People don’t buy products; they buy relatability.',
    joinedDate: 'Joined Oct 2025',
    socials: {},
    skills: [
      { name: 'UGC Video', category: 'Social Media', verified: true, endorsements: 38 },
      { name: 'TikTok Creation', category: 'Social Media', verified: true, endorsements: 35 }
    ],
    badges: [BADGES[0], BADGES[1]],
    portfolio: [],
    services: []
  },
  {
    id: 'c17',
    username: 'liam.voice',
    name: 'Liam O’Connor',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=80',
    badgeRole: 'Voice Talent',
    tagline: 'Youthful, energetic voiceover for video games & commercials.',
    bio: '17 y/o voice actor equipped with a Shure SM7B home studio. Natural American/neutral accent, great for character voices, animations, and game dialogue.',
    category: 'Music',
    level: 9,
    xp: 820,
    nextLevelXp: 1000,
    rating: 4.95,
    reviewCount: 16,
    completedProjects: 13,
    responseTime: '< 25 mins',
    availability: 'Available',
    spotlightQuote: 'Every voice tells a world of stories in a single breath.',
    joinedDate: 'Joined Nov 2025',
    socials: {},
    skills: [
      { name: 'Voiceover', category: 'Music', verified: true, endorsements: 31 },
      { name: 'Character Acting', category: 'Music', verified: true, endorsements: 27 }
    ],
    badges: [BADGES[0], BADGES[1]],
    portfolio: [],
    services: []
  },
  {
    id: 'c18',
    username: 'olivia.bio',
    name: 'Olivia Vance',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
    badgeRole: 'Bio & Med Tutor',
    tagline: 'AP Biology & Pre-Med foundations made intuitive.',
    bio: '18 y/o aspiring bioengineer. I tutor genetics, cellular biology, and anatomy with clear interactive diagrams and study flashcards.',
    category: 'Tutoring',
    level: 11,
    xp: 1210,
    nextLevelXp: 1400,
    rating: 4.93,
    reviewCount: 25,
    completedProjects: 19,
    responseTime: '< 30 mins',
    availability: 'Available',
    spotlightQuote: 'Biology is life’s source code.',
    joinedDate: 'Joined Sep 2025',
    socials: {},
    skills: [
      { name: 'AP Biology', category: 'Tutoring', verified: true, endorsements: 35 },
      { name: 'Anatomy', category: 'Tutoring', verified: true, endorsements: 29 }
    ],
    badges: [BADGES[0], BADGES[1], BADGES[7]],
    portfolio: [],
    services: []
  },
  {
    id: 'c19',
    username: 'noah.copy',
    name: 'Noah Sterling',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
    badgeRole: 'Content Writer',
    tagline: 'SEO blog posts, tech articles & newsletter ghostwriting.',
    bio: '18 y/o student journalist. I write well-researched, crisp articles on AI, creator tech, and culture that rank high on Google and read effortlessly.',
    category: 'Writing',
    level: 10,
    xp: 990,
    nextLevelXp: 1200,
    rating: 4.89,
    reviewCount: 22,
    completedProjects: 17,
    responseTime: '< 35 mins',
    availability: 'Available',
    spotlightQuote: 'Clarity is kindness to the reader.',
    joinedDate: 'Joined Oct 2025',
    socials: {},
    skills: [
      { name: 'SEO Writing', category: 'Writing', verified: true, endorsements: 33 },
      { name: 'Tech Articles', category: 'Writing', verified: true, endorsements: 31 }
    ],
    badges: [BADGES[0], BADGES[1]],
    portfolio: [],
    services: []
  },
  {
    id: 'c20',
    username: 'aria.vectors',
    name: 'Aria Tanaka',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
    badgeRole: 'Vector Stylist',
    tagline: 'Modern vector logos, iconography & sticker packs.',
    bio: '17 y/o illustrator passionate about geometric icons, badge designs, and clean vector art ready for screen or vinyl print.',
    category: 'Design',
    level: 11,
    xp: 1150,
    nextLevelXp: 1400,
    rating: 4.91,
    reviewCount: 24,
    completedProjects: 18,
    responseTime: '< 25 mins',
    availability: 'Available',
    spotlightQuote: 'Simplicity is the ultimate vector sophistication.',
    joinedDate: 'Joined Aug 2025',
    socials: {},
    skills: [
      { name: 'Vector Art', category: 'Design', verified: true, endorsements: 42 },
      { name: 'Iconography', category: 'Design', verified: true, endorsements: 36 }
    ],
    badges: [BADGES[0], BADGES[1], BADGES[5]],
    portfolio: [],
    services: []
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    creatorId: 'c1',
    creatorUsername: 'maya.designs',
    creatorName: 'Maya Patel',
    creatorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    creatorRating: 4.9,
    title: 'Modern Minimalist Logo & Brand Identity Pack',
    category: 'Design',
    description: 'I will design a standout, modern visual identity for your startup, creator channel, or campus project. Includes vector files, color palette, and social avatars.',
    coverImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80',
    startingPrice: 299,
    deliveryDays: 3,
    rating: 4.9,
    reviewsCount: 38,
    skills: ['Logo Design', 'Brand Identity', 'Vector Illustration', 'Figma'],
    ordersInQueue: 3,
    requirements: [
      'What is your brand or project name and tagline?',
      'Describe your target audience and 3 adjectives for your brand aesthetic.',
      'Any color preferences or examples you love?'
    ],
    packages: {
      starter: {
        name: 'STARTER',
        price: 299,
        deliveryDays: 3,
        revisions: '1 revision',
        description: 'Single high-impact logo concept with PNG & SVG exports and color palette guide.',
        features: ['1 Logo Concept', 'High-Res PNG & Transparent SVG', '1 Revision', '3-Day Delivery']
      },
      pro: {
        name: 'PRO',
        price: 799,
        deliveryDays: 2,
        revisions: '3 revisions',
        description: '2 distinct logo concepts, full vector source files (Figma/AI), social media avatar kit, and color guide.',
        features: ['2 Logo Concepts', 'Source Files (.fig / .svg)', 'Social Avatar & Banner Kit', '3 Revisions', '2-Day Delivery']
      },
      premium: {
        name: 'PREMIUM',
        price: 1499,
        deliveryDays: 1,
        revisions: 'Unlimited revisions',
        description: 'Full creator brand system: 3 concepts, 3D mockup renders, business card/merch mockup, animated vector mark.',
        features: ['3 Concepts + Animated Vector', 'Complete Brand Styleguide', '3D Mockup Showcase', 'Unlimited Revisions', 'Priority 24h Delivery']
      }
    }
  },
  {
    id: 's2',
    creatorId: 'c2',
    creatorUsername: 'alex.cuts',
    creatorName: 'Alex Rivera',
    creatorAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    creatorRating: 4.9,
    title: 'High-Retention Gaming Montage & YouTube Video Edit',
    category: 'Video',
    description: 'Turn your raw gameplay footage or stream clips into an adrenaline-fueled montage with beat-matched cuts, sound effects, velocity remaps, and dynamic captions.',
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80',
    startingPrice: 349,
    deliveryDays: 2,
    rating: 4.95,
    reviewsCount: 46,
    skills: ['Video Editing', 'Gaming Montage', 'Sound Design', 'Short-Form Video'],
    ordersInQueue: 4,
    requirements: [
      'Link to raw footage (Google Drive, Dropbox, or OneDrive).',
      'Preferred background music track or audio vibe.',
      'Key timestamps or clips you definitely want included.'
    ],
    packages: {
      starter: {
        name: 'STARTER',
        price: 349,
        deliveryDays: 3,
        revisions: '1 revision',
        description: 'Up to 60-second gaming reel/Short with beat-syncing and sound effects.',
        features: ['Up to 60 seconds', '1080p 60fps export', 'Basic sound design', '1 Revision', '3-Day Delivery']
      },
      pro: {
        name: 'PRO',
        price: 799,
        deliveryDays: 2,
        revisions: '3 revisions',
        description: 'Up to 3-minute high-energy montage with velocity ramps, 3D camera shakes, kinetic text, and cinematic color grade.',
        features: ['Up to 3 Minutes', 'Advanced sound design & SFX', 'Kinetic subtitle captions', '3 Revisions', '2-Day Delivery']
      },
      premium: {
        name: 'PREMIUM',
        price: 1599,
        deliveryDays: 1,
        revisions: 'Unlimited revisions',
        description: 'Up to 8-minute complete YouTube video edit with custom animated intro/outro, thumbnail concept, and unlimited tweaks.',
        features: ['Up to 8 Minutes', 'Custom intro/outro motion', 'Clickable Thumbnail Concept', 'Unlimited Revisions', '24h VIP Turnaround']
      }
    }
  },
  {
    id: 's3',
    creatorId: 'c3',
    creatorUsername: 'dev_rohan',
    creatorName: 'Rohan Sharma',
    creatorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    creatorRating: 5.0,
    title: 'Custom Responsive React & Tailwind Landing Page',
    category: 'Coding',
    description: 'I will build a lightning-fast, mobile-friendly landing page for your project, student startup, or portfolio with modern dark glass aesthetic.',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    startingPrice: 499,
    deliveryDays: 3,
    rating: 5.0,
    reviewsCount: 29,
    skills: ['React', 'Tailwind CSS', 'TypeScript', 'Full-Stack Web'],
    ordersInQueue: 2,
    requirements: [
      'Project overview and copy/content.',
      'Design inspiration links or wireframe.',
      'Preferred hosting target (Vercel, GitHub Pages, Netlify).'
    ],
    packages: {
      starter: {
        name: 'STARTER',
        price: 499,
        deliveryDays: 3,
        revisions: '1 revision',
        description: 'Single-page responsive landing page (Hero, Features, Contact form) built in React + Tailwind.',
        features: ['1 Page UI', 'Clean TypeScript Code', 'Mobile Responsive', '1 Revision', '3-Day Delivery']
      },
      pro: {
        name: 'PRO',
        price: 999,
        deliveryDays: 2,
        revisions: '3 revisions',
        description: 'Multi-section landing page with motion animations, interactive components, Vercel deployment, and SEO meta tags.',
        features: ['Up to 5 Sections', 'Motion Animations', 'Vercel Deployment Setup', '3 Revisions', '2-Day Delivery']
      },
      premium: {
        name: 'PREMIUM',
        price: 1899,
        deliveryDays: 1,
        revisions: 'Unlimited revisions',
        description: 'Full-fledged web app front-end with API integrations, dark/light theme, custom illustrations, and full GitHub repo ownership.',
        features: ['Full Web App Front-End', 'API Integration Ready', 'Interactive State System', 'Unlimited Revisions', '24h Delivery']
      }
    }
  },
  {
    id: 's4',
    creatorId: 'c4',
    creatorUsername: 'tara.tutors',
    creatorName: 'Tara Mukherjee',
    creatorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
    creatorRating: 4.95,
    title: '1-on-1 AP Calculus & Physics Interactive Tutoring',
    category: 'Tutoring',
    description: 'Stuck on Derivatives, Integrals, or Newton’s Laws? Let’s do an engaging 1-on-1 virtual whiteboarding session where I break down problems step-by-step.',
    coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
    startingPrice: 249,
    deliveryDays: 1,
    rating: 4.95,
    reviewsCount: 32,
    skills: ['Calculus', 'AP Physics', 'SAT Prep', 'Peer Mentoring'],
    ordersInQueue: 2,
    requirements: [
      'What topic or specific homework problems are you working on?',
      'Preferred date and time slot for our virtual session.'
    ],
    packages: {
      starter: {
        name: 'STARTER',
        price: 249,
        deliveryDays: 1,
        revisions: '1 revision',
        description: '45-minute live 1-on-1 problem-solving session covering your specific homework or quiz questions.',
        features: ['45-Minute Session', 'Digital Whiteboard Notes PDF', 'Practice Problem Sheet', '1-Day Delivery']
      },
      pro: {
        name: 'PRO',
        price: 649,
        deliveryDays: 1,
        revisions: '2 revisions',
        description: 'Two 60-minute intensive sessions with personalized study cheatsheet and formula breakdown.',
        features: ['2 x 60-Min Sessions', 'Step-by-step PDF Guides', 'Homework Check via Chat', 'Flexible Scheduling']
      },
      premium: {
        name: 'PREMIUM',
        price: 1299,
        deliveryDays: 2,
        revisions: 'Unlimited revisions',
        description: 'Complete 1-week Exam Prep Bootcamp: Four 60-min sessions, mock exam grading, and 24/7 question support.',
        features: ['4 x 60-Min Sessions', 'Mock Exam + Feedback', '24/7 Question Chat Access', 'Personalized Roadmap']
      }
    }
  },
  {
    id: 's5',
    creatorId: 'c5',
    creatorUsername: 'kai.audio',
    creatorName: 'Kai Chen',
    creatorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    creatorRating: 4.88,
    title: 'Custom Lo-Fi Beat & Podcast Audio Mastering',
    category: 'Music',
    description: 'Original royalty-free chill lo-fi beats for your YouTube videos, podcasts, or study streams, plus audio cleanup for background hiss and echo.',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80',
    startingPrice: 299,
    deliveryDays: 2,
    rating: 4.88,
    reviewsCount: 22,
    skills: ['Music Production', 'Lo-Fi Beatmaking', 'Audio Cleaning', 'Podcast Mastering'],
    ordersInQueue: 1,
    requirements: [
      'Describe the mood or tempo you want (relaxing, nostalgic, upbeat).',
      'If audio cleanup, send raw audio link.'
    ],
    packages: {
      starter: {
        name: 'STARTER',
        price: 299,
        deliveryDays: 2,
        revisions: '1 revision',
        description: 'Single 60-second looped original Lo-Fi track in high-res 320kbps MP3 format.',
        features: ['60-sec Looped Track', 'Full Commercial Rights', 'High-Res MP3', '1 Revision', '2-Day Delivery']
      },
      pro: {
        name: 'PRO',
        price: 699,
        deliveryDays: 2,
        revisions: '3 revisions',
        description: 'Full 2-3 minute structured song (Intro, Chorus, Outro) with lossless WAV export and separate stems.',
        features: ['Full Length Track (2-3 min)', 'Lossless 24-bit WAV', 'Individual Track Stems', '3 Revisions', '2-Day Delivery']
      },
      premium: {
        name: 'PREMIUM',
        price: 1399,
        deliveryDays: 1,
        revisions: 'Unlimited revisions',
        description: 'EP bundle of 3 unique tracks or complete podcast audio suite (Intro, Outro, Background loops, and voice mastering).',
        features: ['3 Custom Tracks or Suite', 'Full Stem Pack', 'Broadcast Master Spec', 'Unlimited Revisions', '24h Turnaround']
      }
    }
  },
  {
    id: 's6',
    creatorId: 'c6',
    creatorUsername: 'zara.3d',
    creatorName: 'Zara Al-Mansoor',
    creatorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
    creatorRating: 4.96,
    title: 'Futuristic 3D Logo Animation & Product Turnaround',
    category: 'Animation',
    description: 'Transform your flat logo into an eye-catching 3D looping animation rendered with realistic textures, soft lighting, and liquid motion.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    startingPrice: 399,
    deliveryDays: 3,
    rating: 4.96,
    reviewsCount: 25,
    skills: ['Blender 3D', '3D Logo Animation', 'Product Visualization', 'Motion Graphics'],
    ordersInQueue: 3,
    requirements: [
      'Vector logo file (SVG/AI/EPS/PNG).',
      'Preferred materials (chrome, matte plastic, holographic, glass, gold).'
    ],
    packages: {
      starter: {
        name: 'STARTER',
        price: 399,
        deliveryDays: 3,
        revisions: '1 revision',
        description: 'Clean 5-second 3D logo turnaround in 1080p MP4 or transparent GIF format.',
        features: ['5-sec 3D Rotation', '1080p HD Video', 'Transparent Background', '1 Revision', '3-Day Delivery']
      },
      pro: {
        name: 'PRO',
        price: 899,
        deliveryDays: 2,
        revisions: '3 revisions',
        description: 'Custom lighting, cinematic camera angles, sound effect integration, and 4K resolution output.',
        features: ['4K Resolution Render', 'Dynamic Camera Motion', 'Custom Sound Design Sync', '3 Revisions', '2-Day Delivery']
      },
      premium: {
        name: 'PREMIUM',
        price: 1699,
        deliveryDays: 1,
        revisions: 'Unlimited revisions',
        description: 'Full 3D product showcase video with exploded view, particle simulation, and Blender project source file.',
        features: ['Complete 3D Product Video', 'Particle & Fluid Effects', 'Blender Project File (.blend)', 'Unlimited Revisions', 'Priority 24h Turnaround']
      }
    }
  },
  {
    id: 's7',
    creatorId: 'c7',
    creatorUsername: 'sam.writes',
    creatorName: 'Samira Khan',
    creatorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
    creatorRating: 4.9,
    title: 'High-Converting Website Copy & Viral Video Scripts',
    category: 'Writing',
    description: 'Catchy copywriting that turns passive scrollers into passionate believers. For landing pages, TikTok scripts, and brand bios.',
    coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80',
    startingPrice: 249,
    deliveryDays: 2,
    rating: 4.9,
    reviewsCount: 19,
    skills: ['Copywriting', 'Social Media Scripts', 'Blog Writing'],
    ordersInQueue: 1,
    packages: {
      starter: {
        name: 'STARTER',
        price: 249,
        deliveryDays: 2,
        revisions: '1 revision',
        description: 'Up to 3 high-hook video scripts (30-60 sec each) for TikTok or Instagram Reels.',
        features: ['3 Video Scripts', 'Hook Variations (3 each)', 'Call to Action included', '1 Revision', '2-Day Delivery']
      },
      pro: {
        name: 'PRO',
        price: 599,
        deliveryDays: 2,
        revisions: '3 revisions',
        description: 'Complete landing page copy: Hero headline, subtext, 4 feature benefit blocks, FAQ, and CTAs.',
        features: ['Full Landing Page Copy', 'SEO Keyword Optimization', 'Tone of Voice Guide', '3 Revisions', '2-Day Delivery']
      },
      premium: {
        name: 'PREMIUM',
        price: 1199,
        deliveryDays: 1,
        revisions: 'Unlimited revisions',
        description: 'Full Brand Messaging Suite: Website copy, 10 viral video scripts, email launch sequence, and elevator pitch.',
        features: ['Complete Brand Copy Deck', '10 Viral Reel Scripts', '3-Part Email Welcome Flow', 'Unlimited Revisions', '24h Delivery']
      }
    }
  },
  {
    id: 's8',
    creatorId: 'c8',
    creatorUsername: 'leo.growth',
    creatorName: 'Leo Morales',
    creatorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
    creatorRating: 4.87,
    title: 'Engaging Instagram Carousel Posts & Trend Strategy',
    category: 'Social Media',
    description: 'Stop the scroll with modern carousel slide decks that educate, inspire, and drive hundreds of saves and shares on Instagram & LinkedIn.',
    coverImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80',
    startingPrice: 299,
    deliveryDays: 2,
    rating: 4.87,
    reviewsCount: 27,
    skills: ['Social Strategy', 'Instagram Carousels', 'Canva'],
    ordersInQueue: 2,
    packages: {
      starter: {
        name: 'STARTER',
        price: 299,
        deliveryDays: 2,
        revisions: '1 revision',
        description: 'One 5-slide educational carousel with custom graphics and caption.',
        features: ['5 Slides Carousel', 'Editable Canva Template', 'Caption + Hashtags', '1 Revision', '2-Day Delivery']
      },
      pro: {
        name: 'PRO',
        price: 749,
        deliveryDays: 2,
        revisions: '3 revisions',
        description: 'Pack of 3 carousels (up to 8 slides each) plus content schedule and growth tips.',
        features: ['3 Multi-Slide Carousels', 'Branded Graphic Identity', 'Copywriting Included', '3 Revisions', '2-Day Delivery']
      },
      premium: {
        name: 'PREMIUM',
        price: 1499,
        deliveryDays: 1,
        revisions: 'Unlimited revisions',
        description: 'Monthly Starter Bundle: 8 high-performing carousels, 15 story templates, and 30-day posting calendar.',
        features: ['8 Full Carousels', '15 Story Templates', '30-Day Content Calendar', 'Unlimited Revisions', '24h Delivery']
      }
    }
  },
  {
    id: 's9',
    creatorId: 'c1',
    creatorUsername: 'maya.designs',
    creatorName: 'Maya Patel',
    creatorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    creatorRating: 4.9,
    title: 'Eye-Popping YouTube Thumbnail Design (High CTR)',
    category: 'Design',
    description: 'Thumbnails that demand a click without feeling like sleazy clickbait. Bold composition, facial expressions cutout, glowing rims, and high-impact text.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    startingPrice: 199,
    deliveryDays: 1,
    rating: 4.95,
    reviewsCount: 31,
    skills: ['Thumbnail Design', 'Photoshop', 'Color Harmony'],
    ordersInQueue: 2,
    packages: {
      starter: {
        name: 'STARTER',
        price: 199,
        deliveryDays: 1,
        revisions: '1 revision',
        description: '1 high-CTR YouTube thumbnail in full HD (1920x1080) with cutout enhancement.',
        features: ['1 Thumbnail Design', 'Full HD 1080p', 'Subject cutout & rim glow', '1 Revision', '24h Delivery']
      },
      pro: {
        name: 'PRO',
        price: 499,
        deliveryDays: 1,
        revisions: '3 revisions',
        description: '3 custom thumbnails with A/B test variations to test which headline gets more clicks.',
        features: ['3 Thumbnails (A/B testing)', 'Photoshop PSD source file', 'High contrast glow effects', '3 Revisions', '24h Turnaround']
      },
      premium: {
        name: 'PREMIUM',
        price: 999,
        deliveryDays: 1,
        revisions: 'Unlimited revisions',
        description: 'Weekly Creator Pack: 7 thumbnails for your upload schedule with priority instant revisions.',
        features: ['7 Thumbnails Pack', 'Complete Source Files', 'VIP 12-hour turnaround', 'Unlimited Revisions']
      }
    }
  },
  {
    id: 's10',
    creatorId: 'c15',
    creatorUsername: 'kabir.python',
    creatorName: 'Kabir Singhania',
    creatorAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=80',
    creatorRating: 4.94,
    title: 'Custom Discord Bot with Moderation & Leveling Systems',
    category: 'Coding',
    description: 'Custom Python Discord bot tailored for your gaming guild, study group, or NFT/crypto community with role management and custom commands.',
    coverImage: 'https://images.unsplash.com/photo-1614680376593-902f749f7ffc?w=800&auto=format&fit=crop&q=80',
    startingPrice: 349,
    deliveryDays: 2,
    rating: 4.94,
    reviewsCount: 30,
    skills: ['Python', 'Discord Bot', 'Automation'],
    ordersInQueue: 2,
    packages: {
      starter: {
        name: 'STARTER',
        price: 349,
        deliveryDays: 2,
        revisions: '1 revision',
        description: 'Essential bot with welcome messages, auto-roles, and 5 custom slash commands.',
        features: ['5 Custom Commands', 'Welcome System', 'Setup Guide PDF', '1 Revision', '2-Day Delivery']
      },
      pro: {
        name: 'PRO',
        price: 799,
        deliveryDays: 2,
        revisions: '3 revisions',
        description: 'Advanced bot with XP leveling system, moderation logs, ticket support, and free 24/7 cloud hosting guide.',
        features: ['Leveling & Leaderboards', 'Ticket Support System', 'Moderation Logging', '3 Revisions', '2-Day Delivery']
      },
      premium: {
        name: 'PREMIUM',
        price: 1599,
        deliveryDays: 1,
        revisions: 'Unlimited revisions',
        description: 'Enterprise Community Bot: API integrations (Twitch/YouTube notifications), economy mini-games, and custom dashboard.',
        features: ['Streamer Live Alerts', 'Economy & Currency System', 'Custom Embeds & Buttons', 'Unlimited Revisions', '24h Delivery']
      }
    }
  }
];

// Link services back to creator objects for fast reference
CREATORS.forEach(creator => {
  creator.services = SERVICES.filter(s => s.creatorId === creator.id);
});

export const INITIAL_CONVERSATIONS: Conversation[] = [
  {
    id: 'conv_1',
    participantId: 'c1',
    participantName: 'Maya Patel',
    participantUsername: 'maya.designs',
    participantAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    participantRole: 'creator',
    lastMessage: 'Just sent the second revision with the cyber-purple gradient! Let me know what you think.',
    lastMessageTime: '12m ago',
    unreadCount: 1,
    relatedService: 'Modern Minimalist Logo & Brand Identity Pack',
    messages: [
      {
        id: 'm1',
        senderId: 'client_me',
        senderName: 'You',
        text: 'Hey Maya! Loved your portfolio on TeenVerseHub. Could we try a sharper font for the CyberBloom mark?',
        timestamp: '10:14 AM',
        isMe: true
      },
      {
        id: 'm2',
        senderId: 'c1',
        senderName: 'Maya Patel',
        text: 'Hey! Absolutely! I am testing a futuristic monospace heading with clean kerning right now.',
        timestamp: '10:22 AM',
        isMe: false
      },
      {
        id: 'm3',
        senderId: 'c1',
        senderName: 'Maya Patel',
        text: 'Just sent the second revision with the cyber-purple gradient! Let me know what you think.',
        timestamp: '10:35 AM',
        isMe: false,
        attachmentName: 'CyberBloom_V2_Preview.png'
      }
    ]
  },
  {
    id: 'conv_2',
    participantId: 'c2',
    participantName: 'Alex Rivera',
    participantUsername: 'alex.cuts',
    participantAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    participantRole: 'creator',
    lastMessage: 'Got the Google Drive link! Will have the 60-second gaming reel ready by tomorrow evening.',
    lastMessageTime: '1h ago',
    unreadCount: 0,
    relatedService: 'High-Retention Gaming Montage & YouTube Video Edit',
    messages: [
      {
        id: 'm4',
        senderId: 'client_me',
        senderName: 'You',
        text: 'Hey Alex! Uploaded 4 clips from our tournament win. Can we sync the bass drop to the final 1v3 clutch?',
        timestamp: 'Yesterday',
        isMe: true
      },
      {
        id: 'm5',
        senderId: 'c2',
        senderName: 'Alex Rivera',
        text: 'Got the Google Drive link! Will have the 60-second gaming reel ready by tomorrow evening.',
        timestamp: 'Yesterday',
        isMe: false
      }
    ]
  },
  {
    id: 'conv_3',
    participantId: 'c4',
    participantName: 'Tara Mukherjee',
    participantUsername: 'tara.tutors',
    participantAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
    participantRole: 'creator',
    lastMessage: 'Here is the practice problem set for integration by parts. See you Thursday at 5 PM!',
    lastMessageTime: '3h ago',
    unreadCount: 0,
    relatedService: '1-on-1 AP Calculus & Physics Interactive Tutoring',
    messages: [
      {
        id: 'm6',
        senderId: 'c4',
        senderName: 'Tara Mukherjee',
        text: 'Here is the practice problem set for integration by parts. See you Thursday at 5 PM!',
        timestamp: '1:15 PM',
        isMe: false,
        attachmentName: 'Calculus_Integration_By_Parts_Cheatsheet.pdf'
      }
    ]
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'TVH-88429',
    serviceId: 's1',
    serviceTitle: 'Modern Minimalist Logo & Brand Identity Pack',
    creatorId: 'c1',
    creatorName: 'Maya Patel',
    creatorUsername: 'maya.designs',
    creatorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    clientId: 'u_client_1',
    clientName: 'Jordan Taylor',
    clientAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80',
    packageTier: 'PRO',
    price: 799,
    status: 'In Progress',
    createdAt: 'Sep 16, 2026',
    deliveryDate: 'Tomorrow at 6:00 PM',
    requirementsNotes: 'CyberBloom League rebrand. Looking for clean geometric emblem with electric cyan and deep violet.',
    projectFilesCount: 3
  },
  {
    id: 'TVH-88315',
    serviceId: 's2',
    serviceTitle: 'High-Retention Gaming Montage & YouTube Video Edit',
    creatorId: 'c2',
    creatorName: 'Alex Rivera',
    creatorUsername: 'alex.cuts',
    creatorAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    clientId: 'u_client_2',
    clientName: 'Liam Carter',
    clientAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&auto=format&fit=crop&q=80',
    packageTier: 'STARTER',
    price: 349,
    status: 'Under Review',
    createdAt: 'Sep 15, 2026',
    deliveryDate: 'Sep 18, 2026',
    requirementsNotes: 'Apex Legends 4K footage. Fast cuts on beat with subtle motion blur.',
    projectFilesCount: 2
  },
  {
    id: 'TVH-87904',
    serviceId: 's3',
    serviceTitle: 'Custom Responsive React & Tailwind Landing Page',
    creatorId: 'c3',
    creatorName: 'Rohan Sharma',
    creatorUsername: 'dev_rohan',
    creatorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    clientId: 'u_client_1',
    clientName: 'Jordan Taylor',
    clientAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80',
    packageTier: 'PRO',
    price: 999,
    status: 'Completed',
    createdAt: 'Sep 10, 2026',
    deliveryDate: 'Sep 12, 2026',
    requirementsNotes: 'Landing page for indie music festival. Dark theme with glassmorphism and tickets counter.',
    projectFilesCount: 6
  }
];

export const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: 'notif_1',
    title: '🎉 Booking Confirmed!',
    message: 'Jordan Taylor booked your "Modern Minimalist Logo" Pro package for ₹799.',
    type: 'booking',
    timestamp: '25m ago',
    read: false
  },
  {
    id: 'notif_2',
    title: '⭐ New 5-Star Review',
    message: '"Maya completely understood my brand vision in 24 hours. Stellar work!" — Liam C.',
    type: 'review',
    timestamp: '2h ago',
    read: false
  },
  {
    id: 'notif_3',
    title: '🏆 Badge Unlocked: 5-Star Creator',
    message: 'You earned 400 XP! You unlocked the prestigious 5-Star Creator badge.',
    type: 'badge',
    timestamp: 'Yesterday',
    read: true
  },
  {
    id: 'notif_4',
    title: '🤖 SkillMatch Recommendation',
    message: 'A client looking for "Gaming video montage with kinetic text" was matched to you.',
    type: 'ai',
    timestamp: '1 day ago',
    read: true
  }
];

export const PLATFORM_STATS = {
  skillsShared: '12K+',
  activeCreators: '3K+',
  projectsCompleted: '8K+',
  averageRating: '4.8★',
  communityXpEarned: '1.4M+',
  averageResponseTime: '24 mins'
};

export const DEMO_TESTIMONIALS = [
  {
    id: 't1',
    name: 'Aarav Mehta',
    role: 'High School Esports Captain',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    quote: 'We needed a brand identity for our state tournament. Maya delivered a full pack with jerseys and twitch banners that looked better than collegiate teams. Pure talent.',
    creatorHired: 'Maya Patel (@maya.designs)',
    rating: 5
  },
  {
    id: 't2',
    name: 'Chloe Simmons',
    role: 'Student YouTuber (45K Subs)',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
    quote: 'SkillMatch AI hooked me up with Alex in 10 seconds. He understood exactly what short-form retention pacing required. My video hit 180K views on TikTok!',
    creatorHired: 'Alex Rivera (@alex.cuts)',
    rating: 5
  },
  {
    id: 't3',
    name: 'Devin Larson',
    role: 'High School Junior',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    quote: 'Tara helped me raise my Calculus score from a C+ to an A- before midterms. The visual diagrams made derivatives finally click for me.',
    creatorHired: 'Tara Mukherjee (@tara.tutors)',
    rating: 5
  }
];

export const BOOKINGS = INITIAL_BOOKINGS;
export const CONVERSATIONS = INITIAL_CONVERSATIONS;
export const NOTIFICATIONS = INITIAL_NOTIFICATIONS;

