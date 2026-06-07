/**
 * Resolves the canonical base URL for the site.
 *
 * Resolution order (first match wins):
 *   1. NEXT_PUBLIC_SITE_URL — explicit override. Set this to the owner's custom
 *      domain once it's approved (e.g. https://anahitamouni.com).
 *   2. VERCEL_PROJECT_PRODUCTION_URL — the project's stable Vercel domain
 *      (e.g. anahita-portfolio.vercel.app). Used automatically for the free
 *      Vercel demo, so no config is needed to get a working deploy.
 *   3. VERCEL_URL — the per-deployment preview URL (preview/branch deploys).
 *   4. http://localhost:3000 — local development fallback.
 *
 * This means: deploy first with nothing set → the Vercel free domain is used.
 * When the owner's domain is ready → set NEXT_PUBLIC_SITE_URL and redeploy.
 */
export function getSiteUrl(): string {
    const explicit = process.env.NEXT_PUBLIC_SITE_URL;
    if (explicit) return withProtocol(explicit).replace(/\/$/, "");

    const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
    if (vercelProd) return `https://${vercelProd}`;

    const vercelUrl = process.env.VERCEL_URL;
    if (vercelUrl) return `https://${vercelUrl}`;

    return "http://localhost:3000";
}

function withProtocol(url: string): string {
    return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}
