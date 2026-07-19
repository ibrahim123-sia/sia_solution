# SIA Solution — Frontend

Single-page business website for SIA Solution, built with React + Vite + Tailwind CSS.

## Structure

```
src/
  data.js           content: services, pricing, projects, contact info
  components/       Header, Footer, cards, contact form, WhatsApp button, etc.
  pages/            page sections rendered in order inside App.jsx
                     (Home, Services, Work, Pricing, About, Contact)
```

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run lint     # eslint
```

## Notes

- `src/data.js` → `company.instagram` is left blank — fill in SIA Solution's Instagram
  handle when available (main outreach channel).
- Contact form uses EmailJS (`src/components/ContactForm.jsx`) with the same
  service/template credentials as the personal portfolio site — same owner, so no new
  EmailJS signup is needed.
- Brand colors/fonts are defined in `tailwind.config.js` (`charcoal`, `amber`, `cream`,
  `font-display` / `font-body`) — reuse these tokens instead of raw hex values or
  default Tailwind colors (no blue/neon per brand guidelines).
