"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { Terminal, Cpu, Radio, Activity } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [time, setTime] = useState("");
  const { scrollYProgress } = useScroll();

  // Smooth scroll progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Live Clock for Oak Park node
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", {
        timeZone: "America/Chicago",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit"
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center"
    >
      {/* 1. Neural Progress Bar */}
      <motion.div
        className="h-[2px] bg-accent w-full origin-left shadow-[0_0_10px_#00f2ff]"
        style={{ scaleX }}
      />

      <div className="w-full max-w-7xl px-6 py-4 flex justify-between items-center">
        {/* 2. System Identity Node */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 group-hover:border-accent/50 transition-all">
            <Terminal size={18} className="text-accent" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-mono text-xs font-bold tracking-tighter uppercase">
              McKinney::Core
            </span>
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1">
              <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
              Node_Active
            </span>
          </div>
        </Link>

        {/* 3. High-Tech Glass Nav */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-accent hover:bg-white/5 rounded-full transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 4. Telemetry Data */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest">Local_Time</span>
            <span className="text-white font-mono text-xs">{time} CST</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10" />
          <div className="flex flex-col items-end">
            <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest">Uplink</span>
            <span className="text-accent font-mono text-xs flex items-center gap-1">
              <Radio size={12} className="animate-bounce" /> OAK_PARK
            </span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}