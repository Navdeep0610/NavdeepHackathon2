# ⚡ TeenVerseHub (SkillSwap)

> **"Your Skill Has Value. Let's Find Its Opportunity."**  
> Official Submission for the **Code2Career AI Hackathon — Track 2: Real-World AI Products**  
> Selected Brief: **Creator Economy — SkillSwap**

---

## 🌟 What is TeenVerseHub?
**TeenVerseHub** is a youth-focused creator marketplace where young creators (designers, video editors, music producers, tutors, and coders) showcase verified skills, prove their abilities with interactive portfolios, get discovered through AI-powered recommendations, and turn their creative talents into real milestone gigs.

---

## 🚀 Key Features

### 1. 🤖 SkillMatch AI
* **Natural Language Matching:** Input complex project briefs (e.g. *"I need a gaming montage for my YouTube channel with sound design"*).
* **Deterministic NLP Matching Engine:** Calculates multi-variable scores based on category alignment, skill token overlap, completion velocity, and rating confidence.
* **Transparent Reasoning:** Displays exact match percentages (e.g. `96% MATCH`) and itemized breakdowns of *"Why this creator matches"*.

### 2. 🪪 Digital Creator Passport
* Signature holographic creator identity displaying verified skill endorsements, level XP progression, response time, and completed gig tallies.
* One-click shareable profile links for student resumes and social bios.

### 3. 🛍️ SkillSwap Creator Marketplace
* 30+ verified service packages starting from ₹199 to ₹1,499.
* Filters by category, max budget slider, delivery turnaround (24h, 3 days, 7 days), and multi-criteria sorting.
* Interactive 3-tier package selector (Starter, Pro, Premium) with comparative deliverables.

### 4. 🎨 Interactive Portfolios
* **Before ↔ After Draggable Sliders:** Inspect raw concepts vs. polished deliverables.
* **Video Preview Players:** Watch actual video edits and kinetic typography in high quality.
* Case studies highlighting skills used, client info, and delivery year.

### 5. 🎯 Skill Quests & XP Bounties
* Real client challenges and cash bounties where young creators gain XP points, unlock verification badges, and build their reputation.

### 6. 🛠️ Creator Studio & AI Profile Builder
* Natural language profile generator transforming casual input into professional headlines, bios, skill tags, and gig tiers.
* Live earnings tracker, active commissions manager, and instant gig publisher.

### 7. 📦 Simulated 5-Step Booking & Escrow Flow
* Package selection, requirements brief, reference uploads, milestone review, and booking celebration with unique booking IDs.

---

## 🛠️ Technology Stack
* **Framework:** React 19 SPA + Vite
* **Styling:** Tailwind CSS v4 + Custom Glassmorphism System
* **Icons:** `lucide-react`
* **Typography:** Plus Jakarta Sans & Outfit (Google Fonts)
* **Architecture:** Modular components, centralized TypeScript domain types (`src/types.ts`), deterministic local NLP matching (`src/utils/skillMatchEngine.ts`).

---

## 💻 Running the Project Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build
```

---

## 📄 Hackathon Context & Architecture Decisions
For deep architectural insights, target demographic research, monetization models, and youth trust frameworks, please inspect [`DECISIONS.md`](./DECISIONS.md).
