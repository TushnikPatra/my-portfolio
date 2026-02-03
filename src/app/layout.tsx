import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tushnik Patra | Computer Science Student & Developer",
    template: "%s | Tushnik Patra",
  },
  description:
    "Portfolio of Tushnik Patra — Computer Science student skilled in Web Development, Data Analytics, Cyber Security, and modern technologies.",
  keywords: [
    "Tushnik Patra",
    "Computer Science Student",
    "Web Developer",
    "Data Analyst",
    "Cyber Security",
    "Portfolio",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Tushnik Patra" }],
  creator: "Tushnik Patra",

  metadataBase: new URL("https://my-portfolio-black-xi-17.vercel.app"),

  openGraph: {
    title: "Tushnik Patra | Developer Portfolio",
    description:
      "Explore projects, skills, experience, and contact details of Tushnik Patra.",
    url: "https://my-portfolio-black-xi-17.vercel.app",
    siteName: "Tushnik Patra Portfolio",
    images: [
      {
        url: "/og-image.png", // optional (can add later)
        width: 1200,
        height: 630,
        alt: "Tushnik Patra Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tushnik Patra | Developer Portfolio",
    description:
      "Computer Science student portfolio showcasing projects and experience.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
