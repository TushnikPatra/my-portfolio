import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tushnik Patra | Computer Science Student & Developer",
    template: "%s | Tushnik Patra",
  },
  description:
    "Tushnik Patra is a Computer Science student skilled in Web Development, Data Analytics, and Cyber Security.",
  keywords: [
    "Tushnik Patra",
    "Computer Science Student",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Tushnik Patra" }],
  creator: "Tushnik Patra",
  metadataBase: new URL("http://localhost:3000"),
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
