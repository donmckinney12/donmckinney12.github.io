"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import { Github, ChevronDown, Activity, Cpu, Code2, Database, ShieldCheck, Zap } from "lucide-react";

interface Project {
  title: string;
  slug: string;
  image: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  stats: { label: string; value: string; icon: React.ReactNode };
}

const projectData: Project[] = [
  {
    title: "SkyLink: Multi-modal AI Agent",
    slug: "skylink-agent",
    image: "/images/skylink_multi_modal_support.png",
    description: "Enterprise-grade agent using Gemini 1.5 Flash for baggage and boarding pass processing via computer vision.",
    tags: ["Gemini 1.5", "Python", "Computer Vision"],
    githubUrl: "https://github.com/donmckinney12/SkyLink-Agent",
    stats: { label: "Inference", value: "Gemini 1.5", icon: <Cpu size={14} /> }
  },
  {
    title: "AI Brochure Generator SaaS",
    slug: "ai-brochure-generator",
    image: "/images/ai_brochure_generator.png",
    description: "Full-stack SaaS utilizing Playwright for deep-scraping and GPT-4o for automated marketing synthesis.",
    tags: ["GPT-4o", "Playwright", "Flask"],
    githubUrl: "https://github.com/donmckinney12/AI-Brochure-Generator",
    stats: { label: "Engine", value: "GPT-4o", icon: <Zap size={14} /> }
  },
  {
    title: "Enterprise RAG System",
    slug: "enterprise-rag",
    image: "/images/enterprise-rag.png",
    description: "Production RAG pipeline using LangChain and FAISS for context-aware queries on local document stores.",
    tags: ["LangChain", "FAISS", "VectorDB"],
    githubUrl: "https://github.com/donmckinney12/Enterprise-Grade-RAG-System",
    stats: { label: "Storage", value: "FAISS", icon: <Database size={14} /> }
  },
  {
    title: "Anomaly Detection Pipeline",
    slug: "anomaly-detection",
    image: "/images/anomaly_detection.png",
    description: "High-velocity monitoring system utilizing Isolation Forest models for real-time log analysis.",
    tags: ["Scikit-Learn", "Docker", "MLOps"],
    githubUrl: "https://github.com/donmckinney12/Real-Time-Anomaly-Detection-Pipeline",
    stats: { label: "Model", value: "IsoForest", icon: <ShieldCheck size={14} /> }
  },
  {
    title: "Smart City Object Tracker",
    slug: "smart-city-vision",
    image: "/images/smart_city_vision.png",
    description: "End-to-end vision tracker using YOLOv8 to detect urban objects, containerized for scalable deployment.",
    tags: ["YOLOv8", "Docker", "CV"],
    githubUrl: "https://github.com/donmckinney12/Smart-City-Vision",
    stats: { label: "Core", value: "YOLOv8", icon: <Code2 size={14} /> }
  },
  {
    title: "Emotion Detection API",
    slug: "emotion-detector",
    image: "/images/emotion_detector.png",
    description: "NLP application detecting core emotions via Flask REST API with 21 robust unit tests.",
    tags: ["NLP", "Flask", "PyTest"],
    githubUrl: "https://github.com/donmckinney12/final_project",
    stats: { label: "Status", value: "Production", icon: <Activity size={14} /> }
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleReadme = async () => {
    if (!isOpen && !content) {
      setLoading(true);
      try {
        const res = await fetch(`/projects/${project.slug}.md`);
        const text = await res.text();
        setContent(text);
      } catch (err) { setContent("### Access Error\nTechnical log unavailable."); }
      setLoading(false);
    }
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass-card flex flex-col rounded-[2rem] border border-white/5 bg-zinc-950/50 overflow-hidden group hover:border-accent/40 transition-all duration-500 relative"
    >
      <div className="relative h-52 overflow-hidden border-b border-white/10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-40 group-hover:opacity-100 group-hover:scale-110"
        />
        {/* Scanning Beam */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent h-[2px] w-full animate-scan pointer-events-none opacity-0 group-hover:opacity-100" />

        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 border border-accent/30 text-accent text-[8px] font-mono tracking-widest uppercase">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" /> Uplink_Online
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1 z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3 text-accent font-mono text-[10px] uppercase tracking-widest bg-accent/5 px-3 py-1 rounded-lg border border-accent/10">
            {project.stats.icon}
            {project.stats.label}::{project.stats.value}
          </div>
          <a href={project.githubUrl} target="_blank" className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></a>
        </div>

        <h3 className="text-2xl font-bold mb-3 text-white font-mono tracking-tighter group-hover:neon-text transition-all">{project.title}</h3>
        <p className="text-zinc-400 text-xs mb-8 font-mono leading-relaxed line-clamp-2 h-10 overflow-hidden">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="text-[8px] uppercase tracking-widest bg-white/5 px-3 py-1 rounded-md border border-white/10 text-zinc-500 group-hover:border-accent/30 group-hover:text-zinc-200 transition-all">{tag}</span>
          ))}
        </div>

        <button
          onClick={toggleReadme}
          className={`w-full py-4 rounded-2xl border flex items-center justify-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-500 ${
            isOpen ? 'bg-accent text-black border-accent shadow-[0_0_25px_rgba(0,242,255,0.4)]' : 'border-white/10 text-zinc-400 hover:bg-white/10'
          }`}
        >
          {loading ? "DECRYPTING..." : (isOpen ? "TERMINATE_LOG" : "INITIALIZE_TECHNICAL_LOG")}
          <ChevronDown size={16} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mt-6 pt-6 border-t border-white/10">
              <div className="prose prose-invert prose-sm max-h-80 overflow-y-auto custom-scrollbar selection:bg-accent/30"><ReactMarkdown>{content}</ReactMarkdown></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="w-full">
      <div className="mb-16">
        <h2 className="text-5xl font-bold text-white mb-4 tracking-tighter"> Executed_Deployments</h2>
        <p className="text-zinc-500 font-mono text-[11px] uppercase tracking-[0.4em]">Integrated Intelligence // Production_Grid</p>
      </div>

      {/* High-Tech 3x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}