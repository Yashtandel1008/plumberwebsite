import { MetadataRoute } from "next";
import { businessConfig } from "@/config/business";

export default function robots(): MetadataRoute.Robots {
  const domainName = businessConfig.shortName.toLowerCase().replace(/\s+/g, "-");
  const baseUrl = `https://www.${domainName}.com`;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/private/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
