# Changelog — navuraah.com

All notable changes to the Rooh by Navu Raah website.

---

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

## Pending
- [ ] Mailchimp waitlist integration (need account + form URL)
- [ ] New sections (Stories/Testimonials, FAQ, etc.)
- [ ] Content updates (user to provide specifics)
