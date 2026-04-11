# CLAUDE.md — Personal Website

## Overview
Personal portfolio website for Mads Balslev, built with SvelteKit 2 + Svelte 5. Deployed on Vercel.

## Commands
- `bun run dev` — Start dev server
- `bun run build` — Production build (uses adapter-vercel)
- `bun run preview` — Preview production build locally
- `bun run check` — Type-check with svelte-check
- `bun run lint` — Lint with Prettier + ESLint
- `bun run format` — Auto-format with Prettier

## Tech Stack
- **Framework**: SvelteKit 2 + Svelte 5 (runes, snippets, `$app/state`)
- **Styling**: Custom CSS with CSS custom properties (defined in `src/app.css`)
- **Blog**: mdsvex for markdown posts (configured in `mdsvex.config.js`)
- **Icons**: @tabler/icons-svelte v3
- **Font**: Source Code Pro Variable (monospace)
- **Package manager**: Bun
- **Deployment**: Vercel via @sveltejs/adapter-vercel

## Project Structure
```
src/
  routes/             # SvelteKit pages
    +layout.svelte    # Root layout (navbar, footer, page transitions)
    +page.svelte      # Homepage (hero, highlights)
    projects/         # Projects showcase
    resume/           # Professional resume
    blog/             # Blog (feature-flagged)
      [slug]/         # Dynamic blog post route
  lib/
    components/       # Reusable components (Card, Navbar)
    assets/           # SVG logo
    config.ts         # Feature flags (blog toggle)
    Resume.ts         # Resume data (education, experience, positions)
    Projects.ts       # Project data
    Socials.ts        # Social media links
    NavRoutes.ts      # Navigation routes (respects feature flags)
  content/
    blog/             # Markdown blog posts (frontmatter: title, date, description, published)
  app.css             # Global styles + CSS custom properties
```

## Key Conventions

### Styling
- All colors, spacing, typography, and transitions use CSS custom properties from `src/app.css`
- Never hardcode color values — always reference `var(--color-*)`, `var(--space-*)`, etc.
- Dark theme with orange accent (`--color-accent: #eb5e28`)
- Component styles use `<style>` blocks (Svelte scoped CSS)

### Svelte 5
- All components use runes: `$props()`, `$state()`, `$effect()`, `$bindable()`
- Slots replaced with snippets: `{@render children()}`
- Events use `onclick` not `on:click`
- Page store: `import { page } from '$app/state'` (not `$app/stores`)

### Content
- Resume data lives in `src/lib/Resume.ts` — supports grouped positions (LinkedIn-style) via `positions` array
- Projects data in `src/lib/Projects.ts`
- Blog posts are markdown files in `src/content/blog/` with `published: true/false` frontmatter

### Feature Flags
- Blog visibility controlled by `config.features.blog` in `src/lib/config.ts`
- When `false`: blog route works via direct URL but doesn't appear in navigation
