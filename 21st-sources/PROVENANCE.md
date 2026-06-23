# 21st.dev Component Provenance — Alexandria Rosales

Cached during PRO-MAX DIRECTION pass (2026-06-23). These are the React/Tailwind
sources the vanilla HTML directions were translated from. For HANDOFF MODE: drop
these back into a Next.js build and re-apply the brand content/copy.

| Mockup section | 21st.dev component | Search query | Source file | What we borrowed |
|---|---|---|---|---|
| Hero (Dir A — Masthead) | Hero 04 (Ali Imam) | "editorial hero portfolio" | hero-editorial.tsx | Oversized tracked display name, vertical writing-mode side label, stacked recent-work cards |
| Hero (Dir B — Soft Launch) | Bento Grid (dalim) | "services bento cards" | bento-plus-cards.tsx | Modular varied-span glass tiles, plus-corner card motif, hover bloom |
| Work history / résumé | Work Experience (collapsible) | "experience timeline resume" | work-experience-timeline.tsx | Collapsible company → positions, skill pills, current-employer ping dot, left rule |
| Work history (alt) | Modern Timeline | "experience timeline resume" | (see PROVENANCE notes) | Vertical animated rule, status badges, scroll-reveal stagger |
| Social showcase | Image Testimonial / Masonry Grid | "instagram grid showcase" | masonry-grid.tsx | Column masonry, break-inside-avoid tiles, overlay caption, whileInView reveal |
| Footer (both) | Modem Animated Footer | "footer contact oversized" | animated-footer.tsx | Giant gradient watermark brand name, centered brand lockup, social row |
| About (Dir B) | About Section Grid (soft glow) | "about section editorial" | (notes) | Radial blur glow behind content, soft card grid |

## Logo Search
Logo slots resolved via `logo_search` at build time (LinkedIn, Instagram). Brand
employer "logos" (Palm Springs Life, Acrisure Arena, CVRep, College of the Desert,
The Desert Sun) are rendered as styled wordmarks, not official SVGs — these are not
in the Simple Icons set and we do not fabricate institutional logos.

## Notes
- Modern Timeline + About soft-glow patterns were referenced for motion/effect only
  (animated vertical rule, radial blur glow); not cached verbatim — reconstructed in CSS.
- All React scaffolding (next/image, framer-motion, lucide) was stripped; visual logic
  (spacing ratios, radii, hover timing, writing-mode labels, watermark type) was kept and
  re-expressed in vanilla HTML + Tailwind CDN + IntersectionObserver.
