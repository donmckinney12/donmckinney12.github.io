"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink, ShieldCheck, Database } from "lucide-react";

export default function Resume() {
  const handleDownload = () => {
    // Replace with your actual hosted PDF link (Google Drive, Vercel Blob, etc.)
    window.open('/Donald_McKinney_Resume_2026.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="glass-card rounded-[3rem] p-12 border border-white/5 relative overflow-hidden aira-glow">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] -z-10" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left Side: Logic & Identity */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <FileText className="text-accent" size={20} />
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.4em]">Credential_Access</span>
              </div>

              <h2 className="text-5xl font-black text-white tracking-tighter">
                ACCESS_CURRICULUM_<span className="text-accent">VITAE</span>
              </h2>

              <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-xl">
                Technical dossier detailing expertise in MLOps, Neural Architectures, and Full-Stack Engineering.
                Verified IIT Class of 2025 and Google UX Certified.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={handleDownload}
                  className="group flex items-center gap-3 px-8 py-4 bg-accent text-black font-mono font-black text-[10px] uppercase tracking-widest rounded-2xl hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all"
                >
                  <Download size={16} className="group-hover:animate-bounce" />
                  Download_PDF
                </button>

                <button
                  onClick={() => window.open('https://linkedin.com/in/your-profile', '_blank')}
                  className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-mono text-[10px] uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all"
                >
                  <ExternalLink size={16} />
                  LinkedIn_Node
                </button>
              </div>
            </div>

            {/* Right Side: Visual Data Stats */}
            <div className="w-full lg:w-80 space-y-4">
              <div className="bg-black/40 border border-white/5 p-6 rounded-3xl space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">Security_Level</span>
                  <span className="text-[9px] font-mono text-green-500 uppercase font-bold tracking-widest flex items-center gap-1">
                    <ShieldCheck size={10} /> Authorized
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">Last_Updated</span>
                  <span className="text-[9px] font-mono text-white uppercase font-bold">JAN_2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">File_Size</span>
                  <span className="text-[9px] font-mono text-white uppercase font-bold">142_KB</span>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center gap-2">
                  <Database size={12} className="text-accent/50" />
                  <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest animate-pulse">
                    READY_FOR_EXTRACTION
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}