"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpCircle, Globe, Zap, ShieldCheck, Cpu } from "lucide-react";

const socialLinks = [
  { icon: <Github size={18} />, href: "https://github.com/Donmckinney12", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/donald-mckinney-5448602b2", label: "LinkedIn" },
  { icon: <Twitter size={18} />, href: "https://x.com/mckinney_donald", label: "Twitter" },
  { icon: <Mail size={18} />, href: "mailto:mckinneydonald321@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full bg-black border-t border-white/5 pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

          {/* Column 1: System Identity */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-white font-mono text-sm font-bold tracking-tighter uppercase">
                System_Node::Donald_McKinney
              </span>
            </div>
            <p className="text-zinc-500 font-mono text-xs leading-relaxed max-w-sm">
              Architecting high-velocity AI deployments and multi-modal agentic systems from
              <span className="text-white"> Oak Park, IL</span>. Optimized for production-grade
              scalability.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  whileHover={{ y: -3, color: "#00f2ff" }}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-500 hover:border-accent/30 transition-all"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Live Status Dashboard */}
          <div className="space-y-4">
            <h4 className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">Status_Logs</h4>
            <div className="space-y-3 font-mono text-[10px]">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-600">Location</span>
                <span className="text-zinc-300">Oak Park, IL</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-600">Availability</span>
                <span className="text-accent">Available_For_Hiring</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-600">Latency</span>
                <span className="text-zinc-300">24ms</span>
              </div>
            </div>
          </div>

          {/* Column 3: Tech Stack Clusters */}
          <div className="space-y-4">
            <h4 className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">Core_Protocols</h4>
            <div className="grid grid-cols-2 gap-2">
              {['Python', 'PyTorch', 'Next.js', 'Docker', 'AWS', 'NLP'].map((tech) => (
                <div key={tech} className="flex items-center gap-2 text-zinc-500 text-[9px] font-mono">
                  <div className="w-1 h-1 bg-accent/30 rounded-full" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} All_Rights_Reserved
            </p>
            <div className="hidden md:flex items-center gap-2 text-[9px] font-mono text-zinc-600">
              <Globe size={10} />
              <span>UTF-8 // IPv6_ENABLED</span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 hover:border-accent/30 transition-all text-zinc-500 hover:text-white font-mono text-[10px] uppercase tracking-tighter"
          >
            <span className="group-hover:neon-text transition-all">Return_to_Source</span>
            <ArrowUpCircle size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}