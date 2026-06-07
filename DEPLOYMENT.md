# Deploying to Vercel

This is a standard Next.js 14 (App Router) app — Vercel auto-detects it, so no
`vercel.json` is needed. Build command (`next build`) and output are detected
automatically.

## 1. Import the project

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel → **Add New… → Project** → import the repo.
3. Framework preset will be detected as **Next.js**. Leave build settings default.

## 2. Set environment variables

In Vercel → Project → **Settings → Environment Variables**, add the same keys
from [.env.example](.env.example). The `.env.local` file is git-ignored and is
**not** uploaded, so these must be set in the dashboard.

| Variable | Required | Notes |
| --- | --- | --- |
| `MAILTRAP_API_TOKEN` | yes | From Mailtrap → Sending (or Email Testing for sandbox). |
| `MAILTRAP_SENDER_EMAIL` | yes | Free tier: use the Mailtrap demo domain, e.g. `hello@demomailtrap.com`. |
| `MAILTRAP_SENDER_NAME` | no | Defaults to "Portfolio Contact Form". |
| `CONTACT_RECIPIENT_EMAIL` | yes | Where messages go. **Your email first to test, then the owner's.** |
| `MAILTRAP_SANDBOX` | no | `true` to use the Email Testing inbox instead of real delivery. |
| `MAILTRAP_TEST_INBOX_ID` | only if sandbox | Required when `MAILTRAP_SANDBOX=true`. |
| `NEXT_PUBLIC_SITE_URL` | no | **Leave empty to use the free Vercel domain.** Set to the owner's domain when approved. |

Set each variable for the environments you need (Production / Preview).
After changing variables, **redeploy** for them to take effect.

## 3. Domains — demo first, custom domain later

The site URL (used for metadata, `sitemap.xml`, and `robots.txt`) is resolved in
[src/lib/site.ts](src/lib/site.ts) with this precedence:

1. `NEXT_PUBLIC_SITE_URL` (explicit override)
2. `VERCEL_PROJECT_PRODUCTION_URL` (your project's free `*.vercel.app` domain — set
   automatically by Vercel)
3. `VERCEL_URL` (per-deployment preview URL)
4. `http://localhost:3000` (local dev)

**Demo phase:** deploy with `NEXT_PUBLIC_SITE_URL` unset. The app automatically
uses the free Vercel domain — nothing to configure.

**Going live on the owner's domain:**
1. Vercel → Project → **Settings → Domains** → add the owner's domain and follow
   the DNS instructions.
2. Set `NEXT_PUBLIC_SITE_URL` to that domain (e.g. `https://anahitamouni.com`).
3. Redeploy. Metadata, sitemap, and robots now point at the owner's domain.

## Notes

- The contact form posts to `/api/contact` (a relative path), so it works on any
  domain without changes.
- The Mailtrap free demo domain can only deliver to your own Mailtrap account
  email until you verify a real sending domain in Mailtrap. Verify the owner's
  domain there before switching `CONTACT_RECIPIENT_EMAIL` to an external address.
