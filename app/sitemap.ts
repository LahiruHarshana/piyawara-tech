import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const routes = ["/", "/about", "/services", "/work", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return routes.map((route, index) => ({
    url: route === "/" ? siteUrl : `${siteUrl}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : index === routes.length - 1 ? 0.7 : 0.8,
  }));
}
