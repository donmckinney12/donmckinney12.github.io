"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Cpu, Terminal, Database, Layout, ShieldCheck, Zap } from "lucide-react";

const skillGroups = [
  {
    category: "Core_Intelligence",
    icon: <Cpu className="text-accent" size={20} />,
    description: "Neural architectures and predictive modeling.",
    skills: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "Computer Vision"]
  },
  {
    category: "Engineering_Ops",
    icon: <Terminal className="text-accent" size={20} />,
    description: "Production-grade deployment and automation.",
    skills: ["Linux/Shell", "Docker", "Git", "MLOps Pipelines", "AWS"]
  },
  {
    category: "Architecture",
    icon: <Database className="text-accent" size={20} />,
    description: "System design and data orchestration.",
    skills: ["Agentic RAG", "LangChain", "VectorDB", "Flask", "PostgreSQL"]
  },
  {
    category: "Interface_Design",
    icon: <Layout className="text-accent" size={20} />,
    description: "Human-centric digital experiences.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "UX/UI Design"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 scroll-mt-20">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[1px] w-12 bg-accent/50" />
          <span className="text-accent font-mono text-[10px] uppercase tracking-[0.3em]">System_Capabilities</span>
        </div>
        <h2 className="text-5xl font-bold text-white mb-6 tracking-tighter"> Technical_Stack</h2>
        <p className="text-zinc-500 font-mono text-xs max-w-xl leading-relaxed uppercase tracking-wider">
          Multi-modal expertise across AI/ML engineering, software development, and user experience.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="glass-card p-8 rounded-[2.5rem] relative overflow-hidden group border border-white/5 hover:border-accent/30 transition-all duration-500"
          >
            {/* Hover Background Effect */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 text-accent">
              {group.icon}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-accent/5 border border-accent/10 group-hover:bg-accent/10 transition-all">
                {group.icon}
              </div>
              <div>
                <h3 className="text-lg font-mono font-bold text-white tracking-widest uppercase">{group.category}</h3>
                <p className="text-[9px] text-zinc-600 font-mono uppercase tracking-widest mt-1">{group.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="relative group/tag"
                >
                  <span className="block px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-mono uppercase tracking-widest group-hover:text-accent group-hover:border-accent/20 transition-all cursor-default">
                    {skill}
                  </span>
                  {/* Skill Pulse Indicator */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent/20 opacity-0 group-hover/tag:opacity-100 animate-pulse transition-opacity" />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer System Status */}
      <div className="mt-12 flex items-center gap-6 py-6 border-t border-white/5">
        <div className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-green-500/50" />
          <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest italic">Core_Integrity: Verified</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap size={14} className="text-accent/50" />
          <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest italic">Latency: 24ms</span>
        </div>
      </div>
    </section>
  );
}