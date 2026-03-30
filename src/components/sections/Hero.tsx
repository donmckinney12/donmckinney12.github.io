"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Terminal, FileDown, Globe } from "lucide-react";
import { useState, useEffect } from "react";

function TypewriterText({ text, delay = 0, speed = 50, className = "" }: { text: string, delay?: number, speed?: number, className?: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const startTyping = () => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setComplete(true);
        }
      }, speed);
    };

    timeout = setTimeout(startTyping, delay);
    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return (
    <span className={`relative ${className}`}>
      {displayedText}
      {!complete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-[2px] h-[0.8em] bg-accent ml-1 align-middle"
        />
      )}
    </span>
  );
}

export default function Hero() {
  const [isBooted, setIsBooted] = useState(false);
  const [bootStep, setBootStep] = useState(0);
  
  const bootLines = [
    "Initializing_Core_v4.2.0...",
    "Establishing_Neural_Sync...",
    "Decrypting_Profile_Data...",
    "Uplink_Established: Welcome_Donald"
  ];

  useEffect(() => {
    if (bootStep < bootLines.length) {
      const timer = setTimeout(() => setBootStep(prev => prev + 1), 600);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setIsBooted(true), 800);
      return () => clearTimeout(timer);
    }
  }, [bootStep]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isBooted) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRelative = (e.clientX - rect.left) / width - 0.5;
    const mouseYRelative = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(mouseXRelative);
    mouseY.set(mouseYRelative);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleResumeClick = () => {
    const resumeUrl = "/resume/donaldmckinney_cv.pdf";
    window.open(resumeUrl, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } }
  };

  const headline = "Building Scalable";
  const accentText = "Agentic AI Systems";

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden bg-black px-4 sm:px-6 lg:px-8">
      {/* 🟢 Background Logic: Dynamic Grid */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />

      <AnimatePresence mode="wait">
        {!isBooted ? (
          <motion.div 
            key="boot"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            className="container mx-auto max-w-7xl relative z-20 flex flex-col items-center justify-center font-mono pointer-events-none"
          >
            <div className="flex flex-col gap-2">
              {bootLines.slice(0, bootStep + 1).map((line, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`text-[10px] sm:text-xs ${i === bootLines.length - 1 ? "text-accent" : "text-zinc-500"}`}
                >
                  <span className="mr-2">&gt;</span>{line}
                  {i === bootStep && <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>_</motion.span>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="main"
            variants={containerVariants} initial="hidden" animate="visible"
            className="container mx-auto max-w-7xl relative z-10"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">

              {/* 🔵 Content Node */}
              <div className="flex-1 w-full text-center lg:text-left max-w-2xl">
                <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-6 sm:mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  <span className="text-accent font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em]">
                    System_Status: Live_Uplink
                  </span>
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] sm:leading-[1]">
                  <TypewriterText text={headline} delay={500} />
                  <br />
                  <TypewriterText 
                    text={accentText} 
                    delay={1800} 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-500 to-purple-600"
                  />
                </motion.h1>

                <motion.div variants={itemVariants} className="flex flex-col gap-6 mb-8 relative">
                  <p className="text-zinc-200 font-mono text-xs sm:text-sm md:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed italic border-l-2 border-accent/20 pl-4 py-1">
                    <TypewriterText 
                      text={`"Hi there! I'm Donald McKinney, an AI/ML Engineer specializing in building E2E ML pipelines and agentic AI systems."`} 
                      delay={3500}
                      speed={20}
                    />
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={handleResumeClick}
                    className="w-full sm:w-auto px-8 py-4 bg-accent text-black font-mono font-black text-[10px] uppercase tracking-widest rounded-2xl hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-3"
                  >
                    <FileDown size={16} className="animate-pulse" />
                    Resume_Uplink
                  </button>

                  <button
                    onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-mono text-[10px] uppercase tracking-widest rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-3"
                  >
                    <Terminal size={14} /> Open_Console
                  </button>
                </motion.div>
              </div>

              {/* 🔴 Interactive Profile Image */}
              <motion.div
                variants={itemVariants}
                className="flex-1 hidden sm:flex justify-center items-center perspective-[1000px]"
              >
                <motion.div
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                  className="relative w-52 h-72 md:w-[320px] md:h-[420px] flex items-center justify-center cursor-pointer group"
                >
                  {/* Subtle Background Frames */}
                  <div className="absolute inset-0 border border-white/10 rounded-3xl scale-110 opacity-50 group-hover:scale-125 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
                  <div className="absolute inset-0 border border-accent/20 rounded-3xl scale-95 opacity-30 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000 pointer-events-none" />
                  
                  {/* Image Container */}
                  <motion.div 
                    className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl transition-all duration-500 group-hover:border-accent/50 group-hover:shadow-[0_0_50px_rgba(0,242,255,0.3)]"
                    style={{ translateZ: "50px" }}
                  >
                    <img 
                      src="/images/linkedin_and_portfolio_website_pic.jpg" 
                      alt="Donald McKinney" 
                      className="w-full h-full object-cover grayscale-[0.3] contrast-[1.1] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent h-32 w-full animate-scan opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>

                  {/* Parallax Labels */}
                  <motion.div style={{ translateZ: "100px" }} className="absolute -top-4 -right-4 bg-black/90 border border-accent/30 p-2 rounded-lg backdrop-blur-md shadow-xl">
                    <span className="text-[8px] font-mono text-accent uppercase tracking-widest whitespace-nowrap">Neural_Link: Active</span>
                  </motion.div>
                  <motion.div style={{ translateZ: "80px" }} className="absolute -bottom-4 -left-4 bg-black/90 border border-white/10 p-2 rounded-lg backdrop-blur-md shadow-xl">
                    <span className="text-[7px] font-mono text-zinc-400 uppercase tracking-widest whitespace-nowrap">Verifying_Identity...</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: isBooted ? 1 : 0 }}
        className="absolute bottom-6 sm:bottom-10 left-0 w-full px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[7px] sm:text-[8px] font-mono text-zinc-700 tracking-[0.2em] sm:tracking-[0.3em] uppercase"
      >
        <div className="flex gap-4 sm:gap-8 order-2 sm:order-1">
          <span>LATENCY: 12ms</span>
          <span>UPTIME: 99.9%</span>
        </div>
        <div className="flex items-center gap-2 order-1 sm:order-2">
          <Globe size={10} />
          <span>Oak_Park_Node_v4</span>
        </div>
      </motion.div>
    </section>
  );
}