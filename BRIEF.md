# Alexandria Rosales — Design Brief

**Mode:** PRO-MAX (ui-ux-pro-max skill drove DIRECTION + BUILD) · **Generator:** Higgsfield (forge skill)
**Deliverable:** two distinct personal-brand portfolio/résumé directions, baby-pink + white, + selector.

## Brand Synopsis
Alexandria "Alex" Rosales is an **Events & Marketing Coordinator** in the Coachella Valley with a
journalist's origin story. She came up at College of the Desert — Editor-in-Chief of *The Chaparral*
and station manager at KCOD (a sports segment she produced was a national IBS award finalist) — then
reported a summer at *The Desert Sun* (14 bylines). She moved from the page to the production calendar:
arts marketing at Coachella Valley Repertory, marketing the 11,000-seat Acrisure Arena, and now events
& marketing at *Palm Springs Life*. The page sells that through-line: **a reporter's instinct for a
story, applied to events, brand and social.** She also manages social media. Requested palette: **baby
pink + white** (her preference). The two directions deliberately split her two sides — the
journalist/editorial and the modern social-forward marketer.

## Design Decisions

### Direction A — "The Masthead" (`direction-masthead.html`)
- **Mood**: a fashion/lifestyle **magazine cover** brought to life — editorial, confident, print-rooted.
- **Fonts**: **Libre Bodoni** (high-contrast didone display) + **Public Sans** (grotesque body / tracked small-caps labels). No Inter/Roboto/Arial.
- **Colors**: paper `#FFF7FA` · white `#FFFFFF` · blush `#F9CBD9` · rose accent `#E58AAD` · **plum-ink `#1A1115`** (all text) · muted `#5B4A52`. Pink is décor; ink carries every line of text → clears 4.5:1.
- **Layout**: rigid editorial grid — masthead utility bar, oversized stacked name, cover image with "Fig. 01" caption, column rules, byline-style résumé, real Desert Sun "From the Archive" clippings.
- **Signature move**: the name as a literal **masthead** with cover-lines (Events ✦ Marketing ✦ Social Media), "Vol. 01 — Portfolio", a rotated "On the Cover" vertical tab, and a news-ticker skills marquee.
- **Trends used** (BLAST list not consulted in PRO-MAX; skill-led): oversized editorial type, asymmetric rule-driven grid, kinetic ticker, scroll reveals + hairline draw-ins.
- **Motion**: IntersectionObserver fade/translate reveals, `scaleX` hairline draw-ins, infinite ticker. `prefers-reduced-motion` honored.

### Direction B — "The Soft Launch" (`direction-soft-launch.html`)
- **Mood**: soft-luxe, glossy, modern-feminine — the creator/personal-brand side. Calm, premium, lots of air.
- **Fonts**: **Outfit** (geometric display) + **DM Sans** (body), with **Fraunces** *italic* as the delicate "lipstick" accent on signature words. No Inter/Roboto/Arial.
- **Colors**: cream `#FFF5F8` · white · baby `#FAD1DF` · rose CTA `#E26D9B` / `#C9508A` · glass `white/72` with rose-tinted borders · **mauve-ink `#2A1A22`** text · muted `#6E5A63`.
- **Layout**: Apple-style **bento grid** — glass tiles of varied spans (intro, orb, "currently at Palm Springs Life", 6+ stat, CTA), brand marquee, glass about card, skills bento, highlighted experience cards, stat tiles, social grid, glass contact card. 2rem radii, soft pink shadows.
- **Signature move**: the bento **command center** hero + a floating glossy pink **3D-style orb** + Fraunces-italic accents.
- **Motion**: bento hover-bloom (translateY + scale 1.012 + shadow), staggered entrance reveals, pulse "now" dot, logo marquee. `prefers-reduced-motion` honored.

### Selector (`index.html`)
Soft mesh-glow gallery: AR monogram, name, two preview cards (hero crop → A; orb → B) with one-line vibe notes.

- **Logos used (Logo Search)**: none pulled — employer names render as styled **wordmarks** (Palm Springs Life, Acrisure Arena, CVRep, College of the Desert, The Desert Sun); institutional logos are not in Simple Icons and we don't fabricate them. LinkedIn is the only external link (verified URL).

### 21st.dev Component Provenance
See `21st-sources/PROVENANCE.md` for the full table + cached `.tsx`. Summary:

| Mockup section | 21st.dev component | Search query | Source file | Borrowed |
|---|---|---|---|---|
| Hero A (masthead) | Hero 04 (Ali Imam) | editorial hero portfolio | hero-editorial.tsx* | oversized tracked display, vertical side-label |
| Hero B (bento) | Bento Grid (dalim) | services bento cards | bento-plus-cards.tsx* | varied-span glass tiles, hover bloom |
| Résumé | Work Experience (collapsible) | experience timeline resume | work-experience-timeline.tsx | company→role rows, skill pills, "now" ping |
| Social grid | Image Testimonial / Masonry | instagram grid showcase | masonry-grid.tsx* | square tiles, overlay, whileInView reveal |
| Footer (both) | Modem Animated Footer | footer contact oversized | animated-footer.tsx* | giant watermark brand name |
| About B | About Section (soft glow) | about section editorial | (effect only) | radial blur glow |

*Reconstructed in vanilla HTML/Tailwind; PROVENANCE.md + cached collapsible source preserved for HANDOFF.

## Content Inventory
- **Images**: 11 Higgsfield-forged assets (see IMAGE_LOG.md). No real-person likeness; region-accurate Palm Springs atmosphere only.
- **Key copy**: real résumé spine (COD → Desert Sun → CVRep → Acrisure Arena → Palm Springs Life), real IBS finalist, real Desert Sun bylines. Taglines/quotes are brand voice (flagged in ACCURACY.md).
- **Links preserved**: LinkedIn (verified). Email + socials are placeholders pending Alex (ACCURACY.md).

## Share Preview
- **OG image source**: Palm Springs desert-modern hero (Higgsfield), cropped 1200×630 → `og.jpg` (gallery + masthead). Direction B uses the "make it memorable" social tile cropped → `og-soft.jpg`.
- **OG title (gallery)**: "Alexandria Rosales — Portfolio"
- **OG title (A)**: "Alexandria Rosales — Events & Marketing Coordinator"
- **OG title (B)**: "Alexandria Rosales — Events, Marketing & Social"
- **OG description**: "Events & marketing coordinator in the Coachella Valley. From the College of the Desert newsroom to Palm Springs Life." (per-page variants in each file)
- **Favicon source**: forged Didot "AR" monogram (`recraft_v4_1`) → `favicon.png` / `favicon-512.png`.
- **Theme color**: `#FFF7FA` (A) / `#FFF5F8` (B).
- **Sub-pages with own OG**: `direction-masthead.html` (og-masthead.jpg), `direction-soft-launch.html` (og-soft.jpg).

## Image Generation Prompts
All assets Higgsfield-generated; full prompts + models + QA in **IMAGE_LOG.md**. Verified facts that
shaped prompts: Palm Springs = mid-century desert-modern architecture, palms, San Jacinto mountains,
desert light. No business or person depicted.

## Suggested Next Mockups
- **Headshot integration** — swap the floral stand-in for Alex's real portrait once provided (hero of both).
- **Case-study / event recap page** — one signature event, by-the-numbers + gallery.
- **Press kit / one-pager** — printable résumé + downloadable PDF.
- **Services & rates page** — if she freelances events/social on the side.
- **Real social embed** — live Instagram feed once handle is confirmed.

## Production Notes
To build for real, use Claude Code (Opus, high effort). Both directions are standalone HTML + Tailwind
CDN — production-ready for GitHub Pages as-is. For a React/Next rebuild, pull `21st-sources/` per
HANDOFF MODE. Before any public launch: (1) swap in a real headshot, (2) replace the placeholder email,
(3) confirm employer dates + social handles, (4) get Alex's sign-off on the written taglines/quotes.

## Hosting
- **GitHub Pages** (public mockup repo `Banana-Daddy/alexandria-rosales`).
- Live: https://banana-daddy.github.io/alexandria-rosales/
- Not a DreamHost/production brand — no vault entry, no bb-deploy.

## Build Timing
| Phase | Notes |
|---|---|
| READ | Parallel research workflow (5 agents) — LinkedIn blocked, facts reconstructed from Desert Sun + web |
| DIRECTION | ui-ux-pro-max design systems + 6 × 21st.dev inspiration searches |
| FORGE | 11 Higgsfield assets (13 jobs incl. regens), QA'd individually |
| BUILD | 2 directions + selector, mobile-first, Tailwind CDN |
| VERIFY | Browser preview (desktop + mobile) — fixed a `.mesh` background-shorthand bug on the selector |
| Total | Prompt → live: single PRO-MAX session |
