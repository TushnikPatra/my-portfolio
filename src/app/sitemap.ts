import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://my-portfolio-black-xi-17.vercel.app",
      lastModified: new Date(),
    },
  ];
}
