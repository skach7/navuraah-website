# Changelog — navuraah.com

All notable changes to the Rooh by Navu Raah website.

---

## 2026-04-28 — About Page (A Father's Promise)

**Commit:** `11d96e2`

### About Page (about.html)
- **New page:** Founder story page titled "A Father's Promise"
- 4 scroll-reveal sections: The Gap, Before Rooh, The Spark, The Name
- Vertical timeline thread running through the page with colored milestone orbs between sections
- IntersectionObserver-based scroll reveal animations (fade up on enter)
- Pull quotes for emotional pivot points ("But something was still missing. The stories were mine. The voice was mine.")
- Name section: two definition cards for Navu Raah (brand, amber) and Rooh (product, sage green)
- Standalone impact line: "Rooh is its first step. It will not be the last."
- Sign-off with orb: "Sumeet Kachalia — Father. Founder."
- CTA: "This is the story so far. Yours begins here." links to waitlist
- Mobile responsive (768px + 480px breakpoints), timeline thread centered on all viewports
- SEO meta, Open Graph, Twitter Card with absolute OG image URL
- Starfield, smart nav, back-to-top, footer all match existing pages

### Nav Update (all 5 pages)
- Added "About" link to navigation on index.html, faq.html, feedback.html, demo.html, about.html
- Positioned as last link before "Join Waitlist" (trust-builder before conversion)
- Nav order: How It Works, Features, FAQ, Feedback, Demo, About, Join Waitlist

---

## 2026-04-28 — Feedback Page, Demo Page, Nav Standardisation

**Commits:** `f291667`, `0700f7e`, `ff545e0`, `33ef2a8`, `befdf0d`, `70c05b7`, `8111133`

### Feedback Page (feedback.html)
- **New page:** 5-step feedback wizard for parents (About You, The Stories, Shaping Rooh, Your Letter, Thank You)
- Converted from 328KB React/Babel source to 54KB vanilla HTML/CSS/JS
- Interactive components: star ratings, multi-select chips, sliders, conditional fields (voice cloning paths)
- Form submits via Resend serverless function (`api/feedback.js`) — sends formatted HTML email to hello@navuraah.com
- Welcome copy: "Rooh listens to your child. Now we're listening to you." (evergreen, not beta-specific)
- Badge: "Parent Feedback" (not beta)
- Email required for submission
- Mobile responsive (768px + 480px breakpoints)

### Demo Page (demo.html)
- **New page:** Interactive walkthrough of a Rooh bedtime session inside a CSS-only iPhone frame
- Converted from 315KB React/Babel source to 46KB vanilla HTML/CSS/JS
- 5 screens: Home (orb greeting), Speak (typing animation), Generating (auto-advancing steps), Story (live text + waveform + branching choices), Sleep (summary with value tags)
- Desktop: phone mockup + sidebar with step navigation
- Mobile: phone mockup centered + bottom dot navigation
- Missing `ios-frame.jsx` dependency replaced with pure CSS iPhone frame (border-radius, dynamic island, home indicator)

### Nav Standardisation
- Removed dead "Hear It" link (pointed to non-existent #stories section) from all pages
- Added "Feedback" and "Demo" links to nav on all pages
- Standardised all nav links: font-size 14px, letter-spacing 0.02em, gap 36px
- Standardised brand area: orb 38px, "Rooh" 22px/500, "by Navu Raah" 11px across all pages
- Homepage logo made clickable (was a div, now an anchor)
- Demo nav border/background removed to match homepage transparent style
- Consistent link set everywhere: How It Works, Features, FAQ, Feedback, Demo, Join Waitlist

### New Serverless Function
- `api/feedback.js` — Resend-based, sends structured HTML email with all feedback fields. Uses existing RESEND_API_KEY env var

---

## 2026-04-25 — Mobile Fixes, Smart Nav, Back-to-Top, Dash Removal
**Commits:** `8cfe1cf`, `61dc045`, `0935165`, `c49f840`

- **Hamburger menu fix:** nav z-index bumped to 1000, mobile nav padding reduced (48px to 20px). Fixed overlay not covering full screen by replacing `transform: translateY()` with `top` for nav hide/show (CSS spec: transform on a parent breaks `position: fixed` on children)
- **Smart nav:** nav bar hides on scroll down, reappears on scroll up. Always visible at the top of the page and when mobile menu is open
- **Voice cloning mobile:** added section padding override, play button row wraps, label text wraps on small screens
- **FAQ contact section mobile:** section padding override (80px to 20px), full-width submit button
- **Dashes removed:** all em dashes replaced with commas or periods across both pages. Fixed leftover "bedtime" in FAQ meta descriptions
- **Back-to-top button:** translucent floating button on both pages, appears after 600px scroll, smooth scrolls to top. Matches brand styling (dark translucent bg, amber border/arrow)
- **Hero subtitle:** "Even if she is far away" changed to "Even if they are far away" for gender neutrality

---

## 2026-04-25 — Revised Website Copy (V2)
**Commit:** `b8c15c4`

22 copy changes across index.html and faq.html based on "revise website v1" handoff doc:

**Homepage (index.html):**
- Page title + meta/OG/Twitter tags: removed "Bedtime", updated descriptions
- Hero badge "Launching July 2026" removed from hero, moved to waitlist section as urgency
- Added memorial subtitle below H1: "Even if she is far away. Even if she is gone."
- Hero subheading rewritten to remove bedtime constraint, hint at memorial use case
- Tagline strip: "Parent speaks · Rooh listens · Story begins" → "Your words · Her voice · Their dream"
- How It Works heading: "bedtime to adventure" → "their day to their adventure"
- Step 01 body: positive examples first (triumph, joy before worry)
- Features heading: "Built for the 9 pm moment" → "Built for the moments that matter"
- Moral storytelling card: "Values through consequence" → "Wisdom, woven in" with lyrical body copy
- Voice cloning headline: "What if Dadi could..." → "Dadi tucks them in." (confident, active)
- Voice cloning body: explicitly names memorial use case, "that moment" replaces "that night"
- Waitlist headline: "Be there for the first story" → "Your child's first story is waiting"
- Added launch date urgency line in waitlist section
- Nav: "Stories" → "Hear It"
- Footer: updated tagline + added "Rooh is a product by Navu Raah" brand line

**FAQ (faq.html):**
- Hero H1: "Everything parents want to know" → "You have questions. We have thought about every one."
- "What is Rooh?": removed "bedtime" from definition
- "Who is Rooh for?": expanded to "at bedtime, naptime, or any quiet moment in between"
- "Who built Rooh?": removed "14 development sessions", reframed as founder story
- "How does the story work?": replaced "consequence is felt" with warmer language
- "How are morals handled?": aligned with "Wisdom, woven in" positioning
- Pricing: consolidated 4 "coming soon" Q&As into 2 directional answers
- Contact form: added placeholder text, renamed button "Send" → "Ask Us"
- Stats counter: 23 → 21 questions
- Footer: updated to match homepage
- Nav: "Stories" → "Hear It" (consistent with homepage)

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
- [ ] Stories/Testimonials section on homepage
- [ ] Pricing page (strategy pending)
- [ ] Footer overhaul (Privacy Policy, Terms, social links, footer nav)
