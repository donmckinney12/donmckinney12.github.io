"use client";

import { motion } from "framer-motion";
import { Terminal, FileDown, Globe, Cpu } from "lucide-react";

export default function Hero() {
  const handleResumeClick = () => {
    // Standardized extraction path for professional dossier
    const resumeUrl = "/Donald_McKinney_Resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-black px-4 sm:px-6 lg:px-8">
      {/* 🟢 Background Logic: Responsive Grid & Neural Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* 🛠️ Constraint: Max-width 7xl keeps content centered on ultra-wide screens */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-20">

          {/* 🔵 Content Node: Adaptive Typography */}
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
                AI/ML Engineer // 2025 IIT Graduate // Oak Park, IL.
              </p>
            </div>

            {/* 🛠️ Action Ports: Responsive Button Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-