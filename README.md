# Anahita Mouni — Portfolio

A personal portfolio site for **Anahita Mouni**, a marketing & creative professional —
"Bringing marketing to life through creativity & strategy." Built with the
Next.js App Router, it showcases her work, résumé, gallery, and case-study projects,
and includes a working contact form backed by Mailtrap.

## Tech stack

- **[Next.js 14](https://nextjs.org)** (App Router) + **React 18** + **TypeScript**
- **[Tailwind CSS](https://tailwindcss.com)** for styling (custom `cream`/`dark` theme)
- **[Framer Motion](https://www.framer.com/motion/)** for animations
- **[lucide-react](https://lucide.dev)** icons
- **[Mailtrap](https://mailtrap.io)** for contact-form email delivery
- Self-hosted **Myriad Pro** font via `next/font/local`

## Project structure

```
src/
├── app/
│   ├── page.tsx              # Home (Hero, Explore Work, Milestones)
│   ├── about-me/             # About — intro, approach, core beliefs
│   ├── resume-cv/            # Résumé / CV
│   ├── gallery/              # Image gallery + honors & awards
│   ├── projects/             # Projects index + 4 case-study pages
│   │   ├── project-1/        #   Charles River Museum
│   │   ├── project-2/        #   DeisHacks
│   │   ├── project-3/        #   Rivian
│   │   └── project-4/        #   FirmE
│   ├── contact-me/           # Contact form page
│   ├── api/contact/route.ts  # Contact form POST handler (Mailtrap)
│   ├── layout.tsx            # Root layout (TopBar, Footer, fonts, metadata)
│   ├── sitemap.ts            # Generated sitemap.xml
│   └── robots.ts             # Generated robots.txt
├── components/               # UI components, grouped by page/feature
├── lib/
│   ├── data.ts               # Static content (menu, beliefs, honors, …)
│   ├── mailtrap.ts           # Mailtrap client + config resolution
│   ├── validation.ts         # Contact-form validation
│   ├── site.ts               # Canonical site URL resolution
│   └── cn.ts                 # Tailwind class merge helper
├── types/                    # Shared TypeScript types
└── fonts/                    # Myriad Pro font files
public/                       # Images, videos, SVGs
```

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint with ESLint |

## Environment variables

The contact form and SEO metadata are configured via environment variables.
Copy [.env.example](.env.example) to `.env.local` and fill in the values:

| Variable | Required | Notes |
| --- | --- | --- |
| `MAILTRAP_API_TOKEN` | yes | From Mailtrap → Sending (or Email Testing for sandbox). |
| `MAILTRAP_SENDER_EMAIL` | yes | The "from" address (free tier: a Mailtrap demo domain). |
| `MAILTRAP_SENDER_NAME` | no | Defaults to "Portfolio Contact Form". |
| `CONTACT_RECIPIENT_EMAIL` | yes | Where contact messages are delivered. |
| `MAILTRAP_SANDBOX` | no | `true` to use the Email Testing inbox instead of real delivery. |
| `MAILTRAP_TEST_INBOX_ID` | only if sandbox | Required when `MAILTRAP_SANDBOX=true`. |
| `NEXT_PUBLIC_SITE_URL` | no | Leave empty to use the Vercel domain; set to the custom domain in production. |

## Contact form

The contact page posts to `/api/contact` ([route.ts](src/app/api/contact/route.ts)).
The handler:

- validates input via [validation.ts](src/lib/validation.ts),
- drops bot submissions with a hidden honeypot (`company`) field,
- escapes user input before building the email,
- sends through Mailtrap using [mailtrap.ts](src/lib/mailtrap.ts).

## Deployment

This is a standard Next.js App Router app and deploys to **Vercel** with zero config.
See [DEPLOYMENT.md](DEPLOYMENT.md) for the full guide, including environment
variables and switching from the demo Vercel domain to a custom domain.
