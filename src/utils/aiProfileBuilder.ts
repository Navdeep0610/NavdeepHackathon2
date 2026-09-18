export interface GeneratedProfileData {
  headline: string;
  bio: string;
  suggestedSkills: string[];
  suggestedServices: {
    title: string;
    category: string;
    starterPrice: number;
  }[];
  tags: string[];
}

export function generateCreatorProfileSuggestions(rawInput: string): GeneratedProfileData {
  const text = rawInput.toLowerCase();

  // Pattern detection
  const isVideo = text.includes('video') || text.includes('edit') || text.includes('gaming') || text.includes('youtube') || text.includes('clip') || text.includes('reel');
  const isDesign = text.includes('design') || text.includes('thumbnail') || text.includes('logo') || text.includes('poster') || text.includes('art') || text.includes('illustrat');
  const isCode = text.includes('code') || text.includes('web') || text.includes('python') || text.includes('bot') || text.includes('react') || text.includes('dev');
  const isTutor = text.includes('tutor') || text.includes('teach') || text.includes('math') || text.includes('physics') || text.includes('calc') || text.includes('chem');
  const isMusic = text.includes('music') || text.includes('beat') || text.includes('audio') || text.includes('song') || text.includes('sound');

  if (isVideo && isDesign) {
    return {
      headline: 'Gaming Visual Creator | High-Impact Thumbnails & Engaging Video Edits',
      bio: 'High-energy content editor specializing in high-retention gaming montages, viral TikTok cuts, and scroll-stopping YouTube thumbnails. I combine rhythmic pacing with punchy graphic assets to help creators grow their audience.',
      suggestedSkills: ['Video Editing', 'Thumbnail Design', 'Gaming Montage', 'Sound Design', 'Short-Form Video', 'Photoshop'],
      suggestedServices: [
        { title: 'High-Retention Gaming Montage with Sound Effects', category: 'Video', starterPrice: 349 },
        { title: 'High-CTR YouTube Thumbnail Pack (A/B Variations)', category: 'Design', starterPrice: 199 },
        { title: 'TikTok & Reel Pacing Remap with Kinetic Captions', category: 'Video', starterPrice: 299 }
      ],
      tags: ['#Gaming', '#YouTubeEdits', '#ShortForm', '#Thumbnails', '#CreatorEconomy']
    };
  }

  if (isVideo) {
    return {
      headline: 'Short-Form Video Editor | Retention-Focused Cuts & Sound Design',
      bio: '17 y/o video editor dedicated to turning raw footage into cinematic, beat-matched reels and YouTube videos. Skilled in Premiere Pro, CapCut, and After Effects with a focus on hooks and audience retention.',
      suggestedSkills: ['Video Editing', 'Premiere Pro', 'After Effects', 'Short-Form Video', 'Sound Design', 'Pacing'],
      suggestedServices: [
        { title: 'Punchy 60-Second Short / Reel with Kinetic Subtitles', category: 'Video', starterPrice: 299 },
        { title: 'Complete YouTube Video Edit with Sound Effects', category: 'Video', starterPrice: 699 }
      ],
      tags: ['#VideoEditor', '#PremierePro', '#CapCut', '#ViralReels', '#YouTube']
    };
  }

  if (isDesign) {
    return {
      headline: 'Brand Identity & Visual Designer for Modern Creators',
      bio: 'Creating distinctive visual identities, logos, and digital graphics that give student ventures and creator channels instant credibility and personality. Passionate about typography, bold color palettes, and clean layouts.',
      suggestedSkills: ['Logo Design', 'Brand Identity', 'Vector Illustration', 'Figma', 'Poster Design', 'Canva'],
      suggestedServices: [
        { title: 'Modern Minimalist Logo & Brand Identity Pack', category: 'Design', starterPrice: 299 },
        { title: 'Social Media Banner & Avatar Branding Kit', category: 'Design', starterPrice: 249 }
      ],
      tags: ['#Branding', '#LogoDesign', '#Figma', '#VisualIdentity', '#Creative']
    };
  }

  if (isCode) {
    return {
      headline: 'Full-Stack Web Dev & Discord Bot Creator',
      bio: 'Passionate teen developer building responsive web applications and custom Discord bots. Writing clean, modern code in React, Tailwind CSS, and Python to turn creative concepts into functional products.',
      suggestedSkills: ['React', 'Tailwind CSS', 'TypeScript', 'Python', 'Discord Bot', 'Next.js'],
      suggestedServices: [
        { title: 'Responsive Single-Page React Landing Page', category: 'Coding', starterPrice: 499 },
        { title: 'Custom Discord Bot with Auto-Roles & Commands', category: 'Coding', starterPrice: 349 }
      ],
      tags: ['#WebDev', '#React', '#Python', '#DiscordBot', '#TypeScript']
    };
  }

  if (isTutor) {
    return {
      headline: 'STEM & AP Peer Tutor | Making Complex Concepts Click',
      bio: 'High-achieving peer tutor dedicated to demystifying math and science. I break down daunting topics like Calculus and Physics into intuitive visual diagrams and step-by-step problem strategies.',
      suggestedSkills: ['Calculus', 'AP Physics', 'Peer Mentoring', 'SAT Prep', 'Study Guides'],
      suggestedServices: [
        { title: '1-on-1 Interactive Calculus Problem Solving Session', category: 'Tutoring', starterPrice: 249 },
        { title: 'Comprehensive Exam Review & Formula Cheatsheet', category: 'Tutoring', starterPrice: 499 }
      ],
      tags: ['#Tutoring', '#Calculus', '#STEM', '#PeerTutor', '#ExamPrep']
    };
  }

  if (isMusic) {
    return {
      headline: 'Music Producer & Audio Engineer | Lo-Fi & Custom Beats',
      bio: 'Music maker and audio engineer crafting cozy lo-fi beats, hard-hitting backing tracks, and crisp podcast audio cleanup. Giving creator projects authentic sonic depth.',
      suggestedSkills: ['Music Production', 'Lo-Fi Beatmaking', 'Audio Cleaning', 'FL Studio', 'Mixing & Mastering'],
      suggestedServices: [
        { title: 'Original Royalty-Free Lo-Fi Beat for Streamers & Videos', category: 'Music', starterPrice: 299 },
        { title: 'Podcast Audio Vocal Noise Reduction & EQ Mastering', category: 'Music', starterPrice: 349 }
      ],
      tags: ['#MusicProducer', '#Beatmaker', '#LoFi', '#AudioMastering', '#Soundtrack']
    };
  }

  // General fallback
  return {
    headline: 'Creative Youth Specialist | Turning Ideas into Tangible Results',
    bio: 'Dedicated creator crafting high-quality digital deliverables for student projects, businesses, and content creators. Reliable communication, quick turnaround, and polished craftsmanship.',
    suggestedSkills: ['Creative Direction', 'Digital Media', 'Content Creation', 'Visual Communication'],
    suggestedServices: [
      { title: 'Custom Creative Project Consultation & Delivery', category: 'Design', starterPrice: 299 }
    ],
    tags: ['#TeenCreator', '#SkillSwap', '#Creative', '#Freelance']
  };
}
