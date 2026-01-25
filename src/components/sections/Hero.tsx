"use client";

import { motion } from "framer-motion";
import { Terminal, FileDown, Globe } from "lucide-react";

export default function Hero() {
  const handleResumeClick = () => {
    const resumeUrl = "/resume/donald_mcKinney_cv.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-black px-4 sm:px-6 lg:px-8">
      {/* 🟢 Background Logic: Responsive Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">

          {/* 🔵 Content Node */}
          <div className="flex-1 w-full text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6 sm:mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-accent font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em]">
                System_Status: Live_Uplink
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 tracking-tighter leading-[0.9] sm:leading-[0.85]"
            >
              DONALD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-500 to-purple-600">
                MCKINNEY
              </span>
            </motion.h1>

            <div className="flex flex-col gap-4 mb-8 sm:mb-10">
              <p className="text-zinc-400 font-mono text-xs sm:text-sm md:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed uppercase tracking-widest">
                AI/ML Engineer | LLMs, MLOps & Scalable Systems
              </p>
              <p className="text-zinc-400 font-mono text-xs sm:text-sm md:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed uppercase tracking-widest">
                Building and deploying production-grade AI agents and end-to-end machine learning pipelines.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={handleResumeClick}
                className="w-full sm:w-auto px-8 py-4 bg-accent text-black font-mono font-black text-[10px] uppercase tracking-widest rounded-2xl hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all flex items-center justify-center gap-3"
              >
                <FileDown size={16} className="animate-pulse" />
                Resume_Uplink
              </button>

              <button
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-mono text-[10px] uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                <Terminal size={14} /> Open_Console
              </button>
            </motion.div>
          </div>

          {/* 🔴 RESTORED: Animated Neural Matrix */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
            className="flex-1 hidden sm:flex justify-center items-center relative"
          >
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full animate-pulse" />

              {/* Spinning SVG Logic */}
              <svg viewBox="0 0 200 200" className="w-full h-full text-accent/20">
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" fill="none" className="animate-slow-spin" />
                <path d="M100,40 L100,160 M40,100 L160,100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.2" fill="none" strokeDasharray="10 5" className="animate-reverse-spin" />
              </svg>

              <div className="absolute top-1/4 right-0 bg-black/60 border border-white/10 p-2 rounded-lg backdrop-blur-md animate-bounce-slow">
                <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Neural_Sync: Active</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🟡 Telemetry Footer */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 w-full px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[7px] sm:text-[8px] font-mono text-zinc-700 tracking-[0.2em] sm:tracking-[0.3em] uppercase">
        <div className="flex gap-4 sm:gap-8 order-2 sm:order-1">
          <span>LATENCY: 12ms</span>
          <span>UPTIME: 99.9%</span>
        </div>
        <div className="flex items-center gap-2 order-1 sm:order-2">
          <Globe size={10} />
          <span>Oak_Park_Node_v4</span>
        </div>
      </div>
    </section>
  );
}