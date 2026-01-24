import type { Metadata, Viewport } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

// Loading professional typography for the Nexus aesthetic
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono"
});

// 1. New Viewport Export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// 🛡️ IDENTITY_UPLINK: This replaces the "Create Next App" tab name
export const metadata: Metadata = {
  title: "Donald McKinney | AI/ML Engineer",
  description: "Portfolio of Donald McKinney - 2025 Illinois Institute of Technology Graduate & AI/ML Engineer specializing in MLOps, Agentic Systems, and Computer Vision.",
  keywords: ["AI Engineer", "MLOps", "Donald McKinney", "IIT Graduate", "Oak Park AI", "Nexus Portfolio"],
  authors: [{ name: "Donald McKinney" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/images/nextjs.png", // Ensure this file exists in your /public folder
    apple: "/images/nextjs.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceMono.variable} antialiased bg-black text-white`}
      >
        {/* The core system node for your high-velocity projects */}
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}