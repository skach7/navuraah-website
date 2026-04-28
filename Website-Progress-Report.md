# Navu Raah Website | Progress Report

**Website:** navuraah.com
**Date:** 28 April 2026
**Built with:** Claude Code (Terminal) + Vercel + GitHub

---

## Project Overview

The Rooh by Navu Raah website is the landing page for Rooh, a voice-first AI storytelling product for Indian families. The site is designed to capture early interest via a waitlist, communicate the product vision, and establish brand presence.

**Tech Stack:** Multi-page vanilla HTML/CSS/JS (no frameworks)
**Hosting:** Vercel (auto-deploys from GitHub on push to main)
**Repository:** github.com/skach7/navuraah-website
**Domain:** navuraah.com (migrated from Carrd to Vercel)

---

## Session 1 | 20 April 2026

### What Was Done

#### 1. Mobile Responsiveness (Commit: cf3c5ee)
The original homepage had no mobile support. Added full responsive design:

- **Hamburger menu** with full-screen overlay navigation for mobile
- **Media queries** at two breakpoints: 768px (tablet/phone) and 480px (small phone)
- **Hero section:** headline scales from 76px to 42px/34px, orb shrinks, CTAs stack vertically
- **How It Works:** 3-column grid collapses to single column
- **Features:** 3-column grid collapses to single column, right borders removed
- **Voice Callout:** flex-row becomes column, improved padding and font sizing
- **Waitlist form:** stacks vertically on mobile
- **Footer:** stacks and centers
- **Image paths:** fixed from absolute (/rooh-soul.png) to relative (rooh-soul.png) for local + Vercel compatibility

#### 2. Workflow Infrastructure (Commit: bf593e2)
Set up development workflow for ongoing collaboration:

- **Screenshots folder** (screenshots/) for visual feedback, gitignored so it stays local
- **CHANGELOG.md** as single source of truth for all website updates
- **.gitignore** to exclude screenshots/ and .DS_Store
- **Memory system** configured so "Resume Website" restores full project context in future sessions

#### 3. Rotating Headline + Content Refinements (Commit: 6313b4e)
Major content and visual polish:

- **Rotating headline:** "Tonight, [name] tells the story." cycles through 16 Hindi + English names (Dadi, Papa, Grandma, Nani, Mama, Uncle, Bua, Grandpa, Chachu, Aunty, Dada, Mom, Masi, Dad, Bhai) every 3.5 seconds with smooth fade
- **Icon refresh:** replaced Gemini-like star icons with contextual emojis
  - Step 02 "Rooh weaves the magic": now uses wand emoji
  - True Personalisation: now uses star emoji
  - Voice-first Design: now uses crescent moon emoji (fits bedtime theme)
- **Voice Cloning feature card:** "Grandma's Voice" renamed to "Loved One's Voice"
- **Voice Cloning big card:** removed redundant orb, improved mobile layout
- **Zero Guilt copy:** rewritten to highlight privacy positives. Now reads: "Your child's data lives only on your device. Stories are generated locally and never stored on our servers. Ad-free, distraction-free, and built with your family's privacy at its core."
- **All em dashes removed** from content and meta tags site-wide, replaced with proper punctuation
- **Waitlist form border removed** for cleaner appearance
- **hello@navuraah.com** added as clickable contact link in footer

---

## Session 2 | 21 April 2026

### What Was Done

#### 1. FAQ Page (Commit: ff91374, PR #1)
Built a complete FAQ page (`faq.html`) from scratch, converting a React/Babel source file (308KB) to vanilla HTML/CSS/JS (42KB):

- **23 questions across 5 sections:** About Rooh, The Stories, Voice Cloning, Safety & Privacy, Pricing & Plans
- **Accordion behavior:** One-open-at-a-time with smooth max-height transitions and rotating + icon
- **Sticky sidebar navigation:** "Jump to" links with scroll-based active highlighting, hides on mobile
- **Contact form CTA:** "Didn't find your answer?" with email + message fields, paired with a waitlist promo card
- **Content refinements:**
  - All dashes removed from copy
  - Removed Urdu letters from "What does Rooh mean?" answer
  - Rewrote voice quality answer (no ElevenLabs mention, leads with "experience it and listen for yourself")
  - Removed "Is the voice data safe?" question entirely
  - Pricing answers replaced with "Coming soon" placeholders (strategy pending)
- **"Questions & Answers" pill badge** with subtle green border
- **Fully mobile responsive** at 768px and 480px breakpoints
- **Matches homepage design** exactly: starfield, nav blur, hamburger menu, footer, colors, fonts

#### 2. Homepage Nav Update (same commit)
- Added FAQ link to homepage navigation bar between Stories and Join Waitlist

---

## Session 3 | 22 April 2026

### What Was Done

#### 1. Mailchimp Waitlist Integration (Commit: 61d4c19, PR #2)
Connected the waitlist email form to Mailchimp via a Vercel serverless function:

- **Serverless function** (`api/subscribe.js`) handles Mailchimp API calls server-side
- Waitlist form on homepage and FAQ page now collects emails into Mailchimp audience
- Tested and confirmed working end-to-end

#### 2. Resend Contact Form Integration (same PR)
Connected the FAQ contact form to Resend for email delivery:

- **Serverless function** (`api/contact.js`) sends contact form submissions via Resend API
- Contact form on FAQ page now delivers messages to hello@navuraah.com
- Tested and confirmed working end-to-end

#### 3. API Reliability Fixes (Commits: d6b1e72 PR #3, eb4bfbd PR #4)
- Added error logging to both serverless functions for debugging
- Switched from SDK to raw fetch for both Mailchimp and Resend APIs for improved reliability on Vercel

---

## Session 4 | 25 April 2026

### What Was Done

#### 1. Revised Website Copy V2 (Commit: b8c15c4)
Applied 22 copy changes across both pages based on a structured handoff document ("revise website v1.md"). The changes remove the bedtime-only framing, surface the memorial voice cloning USP, and align language across both pages.

**Key themes:**
- **Remove bedtime constraint:** The product is no longer positioned as bedtime-only. "AI Bedtime Stories" becomes "AI Stories", "9 pm moment" becomes "moments that matter", "bedtime to adventure" becomes "their day to their adventure". FAQ answers expanded to include naptime and quiet moments.
- **Surface memorial USP:** Added subtitle "Even if they are far away. Even if they are gone." directly below the H1. Voice cloning section explicitly names "even someone no longer here." Footer hints at distance and memorial with "wherever their loved ones are."
- **Confident, active voice:** "What if Dadi could tuck them in?" becomes "Dadi tucks them in." Waitlist headline becomes child-centred: "Your child's first story is waiting."
- **Emotional consistency:** Tagline strip rewritten to "Your words · Her voice · Their dream." Moral storytelling card becomes "Wisdom, woven in" with lyrical body copy. "Consequence" language replaced throughout.
- **Launch date repositioned:** Removed from hero badge (where it signals "not ready yet"), moved to waitlist section as urgency near conversion.
- **FAQ trust improvements:** 4 "coming soon" pricing answers consolidated into 2 directional ones. Founder story reframed (no "14 sessions"). Contact form gets placeholder text and button renamed to "Ask Us."
- **Nav clarity:** "Stories" renamed to "Hear It" to match actual content (audio demo, not a story library).
- **Brand line added:** "Rooh is a product by Navu Raah, a studio building AI experiences for Indian families" in footer.

#### 2. Mobile Fixes + UX Improvements (Commits: 8cfe1cf, 61dc045, 0935165, c49f840)
Six fixes based on mobile QA feedback:

- **Hamburger menu:** nav z-index bumped to 1000 so overlay renders above all content. Mobile nav padding reduced from 48px to 20px. Fixed critical bug where `transform: translateY()` on the nav caused the overlay's `position: fixed` to be relative to the nav (~56px) instead of the viewport, hiding the top menu items. Replaced with `top: -80px` for hide/show.
- **Smart nav:** nav bar slides up and fades out on scroll down, reappears on scroll up. Skips hide behavior when mobile menu is open or at the top of the page.
- **Voice cloning section mobile:** added padding override for section, play button row wraps, label text wraps on small screens.
- **FAQ contact section mobile:** reduced section padding from 80px to 20px, full-width submit button.
- **Dash removal:** all em dashes replaced across both pages. Fixed leftover "bedtime" in FAQ meta descriptions.
- **Back-to-top button:** translucent floating button on both pages, appears after 600px scroll, smooth scrolls to top.
- **Hero subtitle:** changed "she" to "they" for gender neutrality.

---

## Session 5 | 28 April 2026

### What Was Done

#### 1. Feedback Page (Commits: f291667, 0700f7e, ff545e0)
Built a complete parent feedback wizard (`feedback.html`) and supporting serverless function:

- **5-step form:** About You (age, location, frequency, referral source), The Stories (star rating, best/worst elements, voice cloning status), Shaping Rooh (values, moral naturalness, tech issues, usage mode, wanted features), Your Letter (NPS, open letter, quote permission, email), Thank You
- **Converted from React/Babel** (328KB) to vanilla HTML/CSS/JS (54KB)
- **Interactive components:** star ratings with hover, multi-select chips (with max limit), sliders with live value display, conditional fields (voice cloning: "Yes" shows accuracy stars, "Not yet" shows textarea)
- **Serverless function** (`api/feedback.js`) sends formatted HTML email via Resend to hello@navuraah.com with all fields structured into readable sections
- **Evergreen copy:** "Rooh listens to your child. Now we're listening to you." works for beta and post-launch
- Mobile responsive with hamburger nav

#### 2. Demo Page (Commits: 33ef2a8)
Built an interactive product walkthrough (`demo.html`) showing a full Rooh bedtime session:

- **5 interactive screens** inside a CSS-only iPhone frame:
  1. Home: Rooh orb greets child, "Begin tonight's story" button
  2. Speak: tap mic, animated typing transcription, Rooh detects values
  3. Generating: 5 auto-advancing progress steps with checkmarks
  4. Story: "The Lost Star Valley" with live text appearing, waveform, progress bar, branching choices
  5. Sleep: summary with value tags, "saved to archive"
- **CSS-only iPhone frame:** border-radius, dynamic island notch, home indicator bar (replaced missing ios-frame.jsx dependency)
- **Desktop layout:** phone mockup + sidebar with clickable step navigation
- **Mobile layout:** phone centered + bottom dot navigation
- Converted from 315KB React/Babel to 46KB vanilla HTML/CSS/JS

#### 3. Nav Standardisation (Commits: befdf0d, 70c05b7, 8111133)
Unified navigation across all four pages:

- Removed dead "Hear It" link (no #stories section exists)
- Added Feedback + Demo links to all pages
- Fixed font-size mismatches (feedback/demo had 13px, homepage had 14px)
- Fixed brand area: feedback/demo had 30px orb and 21px/600 text, homepage had 38px orb and 22px/500
- Fixed nav gap (28px on some pages, 36px on homepage)
- Removed permanent border/background from demo nav
- Made homepage logo clickable
- Consistent set: How It Works, Features, FAQ, Feedback, Demo, Join Waitlist

---

## Session 6 | 28 April 2026

### What Was Done

#### 1. About Page — "A Father's Promise" (Commit: 11d96e2)
Built a founder story page (`about.html`) designed as a trust-builder for parents evaluating the product:

- **4 scroll-reveal sections** that flow as a continuous narrative:
  1. **The Gap** — Moving to the US, leaving family behind, wanting to preserve what was lost
  2. **Before Rooh** — Becoming the storyteller, the hero companion concept, the missing voice of loved ones, screen-time guilt
  3. **The Spark** — The "what if" moment that became Rooh, son as customer zero
  4. **The Name** — Navu Raah (new path, the brand) and Rooh (soul, the product) as definition cards
- **Visual storytelling design:**
  - Vertical timeline thread connecting all sections (centered on desktop and mobile)
  - Colored milestone orbs between sections (amber → purple → sage → gradient)
  - IntersectionObserver scroll-reveal animations (sections fade up as you scroll)
  - Pull quotes for emotional pivot points with left border accents
  - Story content covers the thread, orbs sit on top of it
- **"Rooh is its first step. It will not be the last."** as a standalone centered line below the name cards, hinting at future products under Navu Raah
- **Sign-off:** Orb + "Sumeet Kachalia — Father. Founder."
- **CTA:** "This is the story so far. Yours begins here." → waitlist
- Mobile responsive at 768px and 480px breakpoints
- OG image uses absolute URL (fixing the relative path issue on other pages)

#### 2. Nav Update (all 5 pages)
- Added "About" link to navigation on all pages
- Positioned last before "Join Waitlist" — the trust-builder before conversion
- Full nav order: How It Works, Features, FAQ, Feedback, Demo, About, Join Waitlist

---

## Current Live State

The website at navuraah.com currently includes:

| Section | Status |
|---------|--------|
| Navigation (desktop + smart hide/show + mobile hamburger) | Live |
| Hero with rotating headline + soul orb | Live |
| How It Works (3 steps) | Live |
| Features (6 cards) | Live |
| Voice Cloning callout card | Live |
| Waitlist CTA with email form | Live (Mailchimp) |
| Footer with contact email | Live |
| Mobile responsive | Live |
| Starfield animation | Live |
| **About page (about.html)** | **Live** |
| About: scroll-reveal story sections | Live |
| About: timeline thread + milestone orbs | Live |
| About: Navu Raah + Rooh name cards | Live |
| **FAQ page (faq.html)** | **Live** |
| FAQ accordion (21 Qs, 5 sections) | Live |
| FAQ sidebar navigation | Live |
| FAQ contact form | Live (Resend) |
| **Feedback page (feedback.html)** | **Live** |
| Feedback 5-step wizard | Live |
| Feedback Resend submission | Live |
| **Demo page (demo.html)** | **Live** |
| Demo 5-screen interactive walkthrough | Live |
| Demo CSS-only iPhone frame | Live |
| Serverless API: Mailchimp subscribe | Live |
| Serverless API: Resend contact | Live |
| Serverless API: Resend feedback | Live |
| Back-to-top button (homepage, FAQ, feedback) | Live |
| Smart nav (hide on scroll down) | Live |
| Standardised nav across all 5 pages | Live |

---

## Pending Work

| Item | Status | Blocker |
|------|--------|---------|
| Mailchimp waitlist integration | Done | Serverless function on Vercel |
| Contact form backend (Resend) | Done | Serverless function on Vercel |
| Revised copy V2 (22 changes) | Done | Applied from handoff doc |
| Mobile fixes + smart nav + back-to-top | Done | 4 commits |
| FAQ mobile responsiveness QA | Done | Fixed contact section, hamburger |
| Feedback page + Resend submission | Done | 5-step wizard, api/feedback.js |
| Demo page + iPhone frame | Done | 5-screen walkthrough, CSS-only frame |
| Nav standardisation | Done | All 5 pages aligned |
| About page (A Father's Promise) | Done | Founder story, scroll-reveal, timeline |
| Stories/Testimonials section | Not started | Need content direction |
| Pricing page | Not started | Strategy pending |
| Footer overhaul | Not started | Privacy, Terms, social links, footer nav |

---

## Design System Reference

| Element | Value |
|---------|-------|
| Background | #1a1040 (deep indigo) |
| Primary text | #fdf4e7 (warm cream) |
| Accent (amber) | #f59e0b |
| Accent (sage green) | #6b9e7e |
| Secondary text | #a89bc2 |
| Card background | #2d1b69 |
| Heading font | Cormorant Garamond |
| Body font | Nunito |

---

## Git Commit History

| Commit | Description |
|--------|-------------|
| 11d96e2 | Add About page (A Father's Promise) and update nav across all pages |
| 8111133 | Align nav bar across all pages to match homepage |
| 70c05b7 | Make logo clickable on homepage, remove demo nav border |
| befdf0d | Standardise nav bar across all pages |
| 33ef2a8 | Add interactive demo page with CSS-only iPhone frame |
| ff545e0 | Update feedback welcome copy for long-term use |
| 0700f7e | Add Feedback link to nav on all pages |
| f291667 | Add beta feedback page with Resend submission |
| c49f840 | Fix hamburger overlay: use top instead of transform |
| 0935165 | Fix hamburger menu showing incomplete when nav hidden |
| 61dc045 | Add smart nav hide on scroll down, show on scroll up |
| 8cfe1cf | Fix mobile responsiveness, remove dashes, add back-to-top |
| b8c15c4 | Revised website copy V2: 22 changes across index + FAQ |
| 8797675 | Merge PR #4: Switch to raw fetch for APIs |
| eb4bfbd | Switch to raw fetch for Mailchimp and Resend APIs |
| b25f4bc | Merge PR #3: Add error logging to serverless functions |
| d6b1e72 | Add error logging to serverless functions |
| 96c71bc | Merge PR #2: Mailchimp + Resend integration |
| 61d4c19 | Integrate Mailchimp waitlist and Resend contact form |
| eefd3a6 | Merge PR #1: Add FAQ page |
| ff91374 | Add FAQ page and link from homepage nav |
| aed1ec5 | Update changelog |
| 6313b4e | Rotating headline, icon refresh, copy refinements |
| bf593e2 | Add changelog and gitignore for workflow setup |
| cf3c5ee | Add mobile responsiveness and fix image paths |
| 86b0c18 | Convert to vanilla HTML (pre-Claude Code) |
| c598157 | Updated homepage (pre-Claude Code) |
| b9cdd07 | Initial Rooh homepage (pre-Claude Code) |

---

## How to Resume

Say **"Resume Website"** in Claude Code to restore full context and pick up where we left off.

### Quick Commands
- **Edit and deploy:** Edit index.html, commit, push to main. Vercel auto-deploys.
- **Visual feedback:** Drop screenshot in screenshots/ folder, tell Claude to check it.
- **Get improvement ideas:** Say "suggest refinements" or "review the site".
