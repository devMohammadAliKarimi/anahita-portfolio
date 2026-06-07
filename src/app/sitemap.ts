import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { menuItems, projects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = getSiteUrl();

    const routes = [
        "/",
        ...menuItems.map((item) => item.url),
        ...projects.map((project) => `/projects/${project.slug}`),
    ];

    // De-duplicate in case a menu item overlaps a generated route.
    const unique = Array.from(new Set(routes));

    return unique.map((route) => ({
        url: `${base}${route === "/" ? "" : route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "/" ? 1 : 0.7,
    }));
}
