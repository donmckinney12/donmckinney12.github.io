"use client";

import { motion } from "framer-motion";
import { Code2, Fingerprint, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Column: Technical Identity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center group relative">
              {/* Visual placeholder for profile node */}
              <Fingerprint size={120} className="text-accent/20 group-hover:text-accent/40 transition-all duration-700 scale-100 group-hover:scale-110" />

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-accent/30" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-accent/30" />

              <div className="absolute bottom-6 left-6 font-mono text-[10px] text-accent tracking-widest uppercase">
                System_Node::Donald_McKinney
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tighter">
                Engineering_Philosophy
              </h2>
              <p className="text-zinc-400 font-mono text-sm leading-relaxed mb-4">
                Based in <span className="text-white">Oak Park, IL</span>, I operate at the intersection of
                predictive modeling and full-stack execution.
              </p>
              <p className="text-zinc-500 font-mono text-xs leading-relaxed">
                As an <span className="text-white">Illinois Institute of Technology</span> graduate (2025),
                I specialize in building autonomous agents and vision systems that solve real-world
                latency and accuracy bottlenecks.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {/* Core Tenet 1 */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors group">
                <div className="flex items-center gap-4 mb-2">
                  <Zap size={18} className="text-accent group-hover:animate-pulse" />
                  <h4 className="text-white font-bold text-sm tracking-tight">The "No-nonsense" Protocol</h4>
                </div>
                <p className="text-zinc-500 text-xs font-mono leading-normal">
                  I prioritize production-ready MLOps over theoretical complexity. If a model can't
                  be containerized and deployed efficiently, it isn't finished.
                </p>
              </div>

              {/* Core Tenet 2 */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors group">
                <div className="flex items-center gap-4 mb-2">
                  <Target size={18} className="text-accent group-hover:animate-pulse" />
                  <h4 className="text-white font-bold text-sm tracking-tight">Multi-modal Mastery</h4>
                </div>
                <p className="text-zinc-500 text-xs font-mono leading-normal">
                  Specializing in <span className="text-accent">YOLOv8</span> and
                  <span className="text-accent"> Agentic RAG</span>, I build systems that
                  process vision, text, and data simultaneously for truly intelligent automation.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}