"use client";

import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';

const sections = ['home', 'about', 'stack', 'projects', 'contact'];

export default function RightNavbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center gap-8">
      {/* 🛡️ System Health Indicator */}
      <div className="flex flex-col gap-4 p-2 rounded-full border border-white/5 bg-black/40 backdrop-blur-md aira-glow">
        <Activity size={14} className="text-green-500 animate-pulse" />
        <ShieldCheck size={14} className="text-accent" />
        <Cpu size={14} className="text-zinc-600" />
      </div>

      {/* 📍 Dot Navigation */}
      <div className="flex flex-col gap-6">
        {sections.map((id) => (
          <a key={id} href={`#${id}`} className="group relative flex items-center justify-center">
            <motion.div
              animate={{
                scale: activeSection === id ? 1.5 : 1,
                backgroundColor: activeSection === id ? "#00f2ff" : "rgba(113, 113, 122, 0.3)"
              }}
              className="w-1.5 h-1.5 rounded-full transition-colors"
            />
            <span className="absolute right-8 px-2 py-1 rounded bg-zinc-900 border border-white/10 text-[8px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
              {id}_node
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}