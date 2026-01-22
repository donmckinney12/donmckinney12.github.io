"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Zap, Globe, FileDown, ExternalLink } from "lucide-react";

export default function Hero() {
  // Function to handle resume access
  const handleResumeClick = () => {
    // Replace with your actual file path in the 'public' folder
    const resumeUrl = "/resume/donald_mckinney_cv.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto max-w-7xl px-8 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-20">

          <div className="flex-1 w-full max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-accent font-mono text-[10px] uppercase tracking-[0.5em]">
                System_Status: Live_Uplink
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.85]"
            >
              DONALD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-500 to-purple-600">
                MCKINNEY
              </span>
            </motion.h1>

            <div className="flex flex-col gap-4 mb-10">
              <p className="text-zinc-400 font-mono text-sm md:text-base max-w-lg leading-relaxed uppercase tracking-widest">
                AI/ML Engineer // 2025 IIT Graduate // Oak Park, IL.
              </p>
            </div>

            {/* 🛠️ GOD-TIER BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {/* Main Resume Button */}
              <button
                onClick={handleResumeClick}
                className="group px-8 py-4 bg-accent text-black font-mono font-black text-[10px] uppercase tracking-widest rounded-2xl hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all flex items-center gap-3"
              >
                <FileDown size={16} className="group-hover:animate-bounce" />
                Initialize_CV_Link
              </button>

              {/* Console/Contact Button */}
              <button
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-mono text-[10px] uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all flex items-center gap-3"
              >
                <Terminal size={14} />
                Audit_Stack
              </button>
            </motion.div>
          </div>

          {/* Right Content: Neural Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
            className="flex-1 hidden lg:flex justify-center items-center"
          >
            <div className="relative w-[400px] h-[400px]">
              <div className="absolute inset-0 bg-accent/5 blur-[80px] rounded-full" />
              <svg viewBox="0 0 200 200" className="w-full h-full text-accent/20">
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" fill="none" className="animate-slow-spin" />
                <path d="M100,40 L100,160 M40,100 L160,100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.2" fill="none" strokeDasharray="10 5" className="animate-reverse-spin" />
              </svg>

              {/* Data Tag for Resume Status */}
              <div className="absolute top-10 right-0 bg-black/60 border border-white/10 p-2 rounded-lg backdrop-blur-md animate-pulse">
                <span className="text-[8px] font-mono text-zinc-500 uppercase">RESUME_UPLINK: READY</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}