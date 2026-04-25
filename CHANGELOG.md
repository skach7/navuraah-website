# Changelog — navuraah.com

All notable changes to the Rooh by Navu Raah website.

---

## 2026-04-21 — FAQ Page + Homepage Nav Update
**Commit:** `ff91374` (PR #1 merged via `eefd3a6`)

- New standalone FAQ page (`faq.html`) — vanilla HTML/CSS/JS, 42KB (converted from 308KB React/Babel source)
- 23 questions across 5 sections: About Rooh, The Stories, Voice Cloning, Safety & Privacy, Pricing & Plans
- Accordion with one-open-at-a-time behavior, smooth max-height transitions
- Sticky sidebar "Jump to" navigation with scroll-based active highlighting
- Contact form (email + message) with "Didn't find your answer?" CTA strip
- Waitlist promo card alongside contact form
- Pricing answers set to "Coming soon" placeholders (strategy pending)
- Removed "Is the voice data safe?" question, rewrote voice quality answer (no ElevenLabs mention)
- All copy is dash-free, no Urdu letters
- "Questions & Answers" pill badge with subtle green border
- Fully mobile responsive (768px + 480px breakpoints), sidebar hides on mobile
- Starfield, nav blur, hamburger menu, footer all match homepage
- Added FAQ link to homepage navigation bar (`index.html`)

---

## 2026-04-20 — Rotating Headline, Icon Refresh, Copy Refinements
**Commit:** `6313b4e`

- Hero headline now cycles through Hindi + English loved ones every 3.5s (Dadi, Papa, Grandma, Nani, Mama, etc.) with fade transition
- Replaced Gemini-like ✦ icons: 🪄 (magic), 🌟 (personalisation), 🌙 (bedtime)
- "Grandma's Voice" renamed to "Loved One's Voice" in Voice Cloning feature card
- Removed redundant orb from Voice Cloning big card
- Reworked Zero Guilt copy to lead with privacy positives (local data, no server storage)
- Removed all em dashes from content and meta tags, reworked punctuation
- Removed border around waitlist email form
- Added hello@navuraah.com contact link in footer
- Improved Voice Cloning card mobile responsiveness (smaller padding, font sizing, line break removal)

## 2026-04-20 — Mobile Responsiveness + Image Path Fix
**Commit:** `cf3c5ee`

- Added hamburger menu with full-screen overlay nav for mobile
- Added media queries for tablet (768px) and small phone (480px) breakpoints
- Responsive typography scaling across all sections
- Grid layouts (How It Works, Features) stack to single column on mobile
- Voice Callout section stacks vertically, orb hidden on mobile
- Waitlist form stacks vertically on mobile
- Footer stacks and centers on mobile
- Fixed all image paths from absolute (`/rooh-soul.png`) to relative (`rooh-soul.png`) for local + Vercel compatibility

## 2026-04-20 — Initial Homepage (prior to Claude Code)
**Commits:** `b9cdd07` → `c598157` → `86b0c18`

- Initial Rooh homepage created via Claude Desktop app
- Converted from React/Babel to vanilla HTML/CSS/JS
- Added SEO meta tags, Open Graph, Twitter Card
- Extracted orb image as `rooh-soul.png`
- Sections: Hero, How It Works (3 steps), Features (6 cells), Voice Callout, Waitlist CTA, Footer
- Starfield canvas animation, breathing orb, waveform visualizer
- Dark theme (#1a1040), amber (#f59e0b), sage green (#6b9e7e)
- Fonts: Cormorant Garamond + Nunito

---

## 2026-04-22 — Mailchimp Waitlist + Resend Contact Form
**Commits:** `61d4c19` (PR #2), `d6b1e72` (PR #3), `eb4bfbd` (PR #4)

- Integrated Mailchimp API for waitlist email collection (serverless function: `api/subscribe.js`)
- Integrated Resend API for contact form submissions (serverless function: `api/contact.js`)
- Added error logging to serverless functions
- Switched to raw fetch for both Mailchimp and Resend APIs for reliability
- Both forms on homepage and FAQ page are now fully functional

---

## Pending
- [ ] FAQ mobile responsiveness QA (manual check pending)
- [ ] New sections (Stories/Testimonials on homepage)
- [ ] Pricing page (HTML file exists, strategy pending)
- [ ] Content updates (user to provide specifics)
