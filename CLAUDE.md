# Portfolio - CLAUDE.md

## Project Overview

Personal portfolio website for Cory Ball. Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber (3D graphics). Deployed as a PWA via `next-pwa`.

## Tech Stack

- **Framework**: Next.js (pages router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v2
- **Animation**: Framer Motion
- **3D**: React Three Fiber + Three.js + @react-three/drei
- **Icons**: react-icons
- **Package Manager**: pnpm
- **PWA**: next-pwa with runtime caching

## Project Structure

```
src/
  pages/         # Next.js pages (_app.tsx, _document.tsx, index.tsx, 404.tsx)
  components/
    common/      # Shared UI: header.tsx, dropdown.tsx
    home/        # Page sections: intro.tsx, background.tsx, skills.tsx, experience.tsx
    hoc/         # Higher-order components; context/ subfolder with helpers
  styles/        # Global styles
public/          # Static assets, PWA manifest/service worker output
```

## Common Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # ESLint with auto-fix
pnpm format       # Prettier format
pnpm test         # Jest tests
pnpm test-all     # lint + type-check + test
```

## Key Notes

- Image CDN: `https://cdn.coryball.dev`
- Resume hosted at: `https://cdn.coryball.dev/portfolio/resume/Resume_CoryBall.pdf`
- Tailwind custom colors used: `bg-dark`, `bg-primary`, `text-light` — defined in `tailwind.config.js`
- PWA assets (service worker, manifest) are generated into `public/` at build time — do not manually edit those
- `next.config.js` uses `withPWA` wrapper; webpack5 enabled
