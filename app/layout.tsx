// package
import type { Metadata } from "next";
import { IBM_Plex_Serif, Inter, Poppins } from "next/font/google";

// lib
import { cn } from "@/lib/utils";

// css
import "./globals.css";

const imb_plex_serif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-imb_plex_serif",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Gardens of Paradise - Poems from Al-Andalus",
  description: "The Gardens of Paradise - Poems from Al-Andalus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, imb_plex_serif.variable, poppins.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
