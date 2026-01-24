import type { Metadata, Viewport } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono"
});

// ✅ 1. Viewport is handled here
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// 🛡️ IDENTITY_UPLINK: Cleaned Metadata
export const metadata: Metadata = {
  title: "Donald McKinney | AI/ML Engineer",
  description: "Portfolio of Donald McKinney - 2025 Illinois Institute of Technology Graduate & AI/ML Engineer specializing in MLOps, Agentic Systems, and Computer Vision.",
  keywords: ["AI Engineer", "MLOps", "Donald McKinney", "IIT Graduate", "Oak Park AI", "Nexus Portfolio"],
  authors: [{ name: "Donald McKinney" }],
  // ❌ REMOVED: viewport: "width=device-width, initial-scale=1" (THIS WAS THE ERROR)
  icons: {
    icon: "/images/nextjs.png",
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
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}