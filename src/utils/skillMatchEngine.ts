import { Creator, Service, SkillMatchResult } from '../types';
import { CREATORS, SERVICES } from '../data/mockData';

interface ExtractedIntent {
  keywords: string[];
  categories: string[];
  intentTags: string[];
  urgency: 'high' | 'normal';
}

// Dictionary of semantic associations for deterministic NLP extraction
const KEYWORD_MAP: Record<string, { category: string; tags: string[] }> = {
  gaming: { category: 'Video', tags: ['Gaming Montage', 'Sound Design', 'Short-Form Video'] },
  montage: { category: 'Video', tags: ['Gaming Montage', 'Video Editing', 'Pacing'] },
  video: { category: 'Video', tags: ['Video Editing', 'Short-Form Video', 'CapCut / Premiere'] },
  edit: { category: 'Video', tags: ['Video Editing', 'Short-Form Video', 'Color Grading'] },
  youtube: { category: 'Video', tags: ['Short-Form Video', 'Thumbnail Design', 'Video Editing'] },
  tiktok: { category: 'Video', tags: ['Short-Form Video', 'TikTok Trend Analysis', 'Pacing'] },
  reel: { category: 'Video', tags: ['Short-Form Video', 'Velocity Sync', 'CapCut / Premiere'] },
  logo: { category: 'Design', tags: ['Logo Design', 'Brand Identity', 'Vector Illustration'] },
  brand: { category: 'Design', tags: ['Brand Identity', 'Logo Design', 'Figma'] },
  design: { category: 'Design', tags: ['Logo Design', 'Vector Art', 'Figma'] },
  poster: { category: 'Design', tags: ['Typography', 'Layout Design', 'Figma'] },
  thumbnail: { category: 'Design', tags: ['Thumbnail Design', 'Photoshop', 'Color Harmony'] },
  figma: { category: 'Design', tags: ['Figma', 'UI/UX', 'Brand Identity'] },
  code: { category: 'Coding', tags: ['React', 'Tailwind CSS', 'TypeScript'] },
  coding: { category: 'Coding', tags: ['React', 'Tailwind CSS', 'Full-Stack Web'] },
  website: { category: 'Coding', tags: ['React', 'Tailwind CSS', 'Full-Stack Web'] },
  web: { category: 'Coding', tags: ['React', 'Tailwind CSS', 'TypeScript'] },
  react: { category: 'Coding', tags: ['React', 'Tailwind CSS', 'Motion Animations'] },
  bot: { category: 'Coding', tags: ['Discord Bot', 'Python', 'Automation'] },
  discord: { category: 'Coding', tags: ['Discord Bot', 'Python', 'Automation'] },
  python: { category: 'Coding', tags: ['Python', 'Discord Bot', 'Automation'] },
  math: { category: 'Tutoring', tags: ['Calculus', 'SAT Prep', 'Peer Mentoring'] },
  calculus: { category: 'Tutoring', tags: ['Calculus', 'AP Physics', 'Peer Mentoring'] },
  tutor: { category: 'Tutoring', tags: ['Calculus', 'AP Physics', 'Peer Mentoring'] },
  physics: { category: 'Tutoring', tags: ['AP Physics', 'Calculus', 'STEM Tutor'] },
  chemistry: { category: 'Tutoring', tags: ['Chemistry', 'AP Chem', 'STEM Tutor'] },
  sat: { category: 'Tutoring', tags: ['SAT Prep', 'Calculus', 'Peer Mentoring'] },
  music: { category: 'Music', tags: ['Music Production', 'Lo-Fi Beatmaking', 'Audio Cleaning'] },
  beat: { category: 'Music', tags: ['Lo-Fi Beatmaking', 'Beat Production', 'Trap Beats'] },
  song: { category: 'Music', tags: ['Music Production', 'Mixing & Mastering'] },
  lofi: { category: 'Music', tags: ['Lo-Fi Beatmaking', 'Tape Saturation', 'Mixing'] },
  podcast: { category: 'Music', tags: ['Podcast Mastering', 'Audio Cleaning'] },
  audio: { category: 'Music', tags: ['Audio Cleaning', 'Podcast Mastering'] },
  voice: { category: 'Music', tags: ['Voiceover', 'Character Acting'] },
  '3d': { category: 'Animation', tags: ['Blender 3D', '3D Logo Animation', 'Product Visualization'] },
  blender: { category: 'Animation', tags: ['Blender 3D', '3D Motion', 'Lighting'] },
  animation: { category: 'Animation', tags: ['3D Logo Animation', '2D Animation', 'Motion Graphics'] },
  write: { category: 'Writing', tags: ['Copywriting', 'Social Media Scripts', 'Blog Writing'] },
  copy: { category: 'Writing', tags: ['Copywriting', 'Social Media Scripts'] },
  script: { category: 'Writing', tags: ['Social Media Scripts', 'Copywriting'] },
  essay: { category: 'Writing', tags: ['Essay Review', 'Blog Writing'] },
  social: { category: 'Social Media', tags: ['Social Strategy', 'Instagram Carousels'] },
  instagram: { category: 'Social Media', tags: ['Instagram Carousels', 'Social Strategy'] },
  ugc: { category: 'Social Media', tags: ['UGC Video', 'TikTok Creation'] }
};

export function extractSearchIntent(input: string): ExtractedIntent {
  const normalized = input.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
  const tokens = normalized.split(/\s+/).filter(t => t.length > 1);

  const matchedCategories = new Set<string>();
  const matchedTags = new Set<string>();
  const keywords: string[] = [];

  for (const token of tokens) {
    if (KEYWORD_MAP[token]) {
      matchedCategories.add(KEYWORD_MAP[token].category);
      KEYWORD_MAP[token].tags.forEach(t => matchedTags.add(t));
      keywords.push(token);
    }
  }

  // Check multi-word phrases
  if (normalized.includes('gaming video') || normalized.includes('gaming montage')) {
    matchedCategories.add('Video');
    matchedTags.add('Gaming Montage');
    matchedTags.add('Video Editing');
  }
  if (normalized.includes('brand identity') || normalized.includes('logo design')) {
    matchedCategories.add('Design');
    matchedTags.add('Logo Design');
    matchedTags.add('Brand Identity');
  }
  if (normalized.includes('discord bot')) {
    matchedCategories.add('Coding');
    matchedTags.add('Discord Bot');
    matchedTags.add('Python');
  }
  if (normalized.includes('landing page')) {
    matchedCategories.add('Coding');
    matchedTags.add('React');
    matchedTags.add('Tailwind CSS');
  }

  const urgency = normalized.includes('urgent') || normalized.includes('fast') || normalized.includes('today') || normalized.includes('quick') ? 'high' : 'normal';

  return {
    keywords,
    categories: Array.from(matchedCategories),
    intentTags: Array.from(matchedTags),
    urgency
  };
}

export function runSkillMatch(prompt: string): SkillMatchResult[] {
  const intent = extractSearchIntent(prompt);
  const normalizedPrompt = prompt.toLowerCase();

  const scoredCreators = CREATORS.map(creator => {
    let score = 50; // base score
    const matchReasons: string[] = [];
    const matchedSkills: string[] = [];

    // 1. Category alignment (+20)
    if (intent.categories.includes(creator.category) || (creator.secondaryCategory && intent.categories.includes(creator.secondaryCategory))) {
      score += 22;
    }

    // 2. Direct skill overlap
    creator.skills.forEach(skill => {
      const skillLower = skill.name.toLowerCase();
      // Check if user typed the skill or if it matches extracted tags
      if (normalizedPrompt.includes(skillLower) || intent.intentTags.some(t => t.toLowerCase() === skillLower)) {
        score += 8;
        matchedSkills.push(skill.name);
        matchReasons.push(`Expertise in ${skill.name}`);
      }
    });

    // 3. Rating & reliability boost
    if (creator.rating >= 4.9) {
      score += 6;
      matchReasons.push(`Exceptional ${creator.rating}★ rating across ${creator.completedProjects} projects`);
    }

    // 4. Response time check
    if (creator.responseTime.includes('15') || creator.responseTime.includes('20')) {
      score += 5;
      matchReasons.push(`Fast responder (${creator.responseTime})`);
    }

    // 5. XP & Level maturity
    if (creator.level >= 10) {
      score += 4;
      matchReasons.push(`Level ${creator.level} Verified Teen Creator`);
    }

    // 6. Urgency match
    if (intent.urgency === 'high' && (creator.responseTime.includes('15') || creator.responseTime.includes('20'))) {
      score += 8;
      matchReasons.push(`24-48h expedited turnaround available`);
    }

    // Find suggested service
    const creatorServices = SERVICES.filter(s => s.creatorId === creator.id);
    const primaryService = creatorServices.find(s => 
      intent.categories.includes(s.category) || s.skills.some(sk => matchedSkills.includes(sk))
    ) || creatorServices[0] || SERVICES[0];

    if (primaryService) {
      matchReasons.push(`Starting package at ₹${primaryService.startingPrice} (${primaryService.deliveryDays}-day delivery)`);
    }

    // Cap score at 98% to feel authentic
    const finalScore = Math.min(98, Math.max(72, score));

    return {
      creator,
      matchScore: finalScore,
      matchReasons: matchReasons.slice(0, 4),
      matchedSkills: matchedSkills.length > 0 ? matchedSkills : [creator.skills[0]?.name || creator.category],
      suggestedService: primaryService
    };
  });

  // Sort descending by match score and return top 4
  return scoredCreators
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 4);
}
