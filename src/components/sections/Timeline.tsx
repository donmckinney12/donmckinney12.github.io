"use client";

import React from 'react';
import { motion } from "framer-motion";
import { GraduationCap, Award, Zap, Terminal, Code } from "lucide-react";

interface TimelineItem {
  date: string;
  institution: string;
  degree: string;
  details: string[];
}

const educationData: TimelineItem[] = [
  {
    date: "May 2025",
    institution: "Illinois Institute of Technology",
    degree: "Computer Science Graduation",
    details: ["Completed advanced studies in specialized AI/ML subfields.", "Graduation ceremony held May 17, 2025."]
  },
  {
    date: "Dec 2025",
    institution: "Google / Coursera",
    degree: "Google UX Design Professional Certificate",
    details: ["Completed comprehensive program focusing on accessible, user-centric design.", "Applied high-fidelity wireframing to engineering projects."]
  },
  {
    date: "Dec 2025",
    institution: "IBM",
    degree: "Hands-on Linux Commands & Shell Scripting",
    details: ["Mastered automated system maintenance and environment parity."]
  },
  {
    date: "Nov 2025",
    institution: "IBM",
    degree: "Developing AI Applications with Python & Flask",
    details: ["Architected scalable backend infrastructure for real-time ML inference."]
  },
  {
    date: "Oct 2025",
    institution: "IBM & Coursera",
    degree: "Generative AI & Prompt Engineering Specialist",
    details: ["Focused on agentic workflows, LangChain implementation, and model tuning."]
  }
];

export default function Timeline() {
  return (
    <section id="evolution" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">

        {/* Left Column: The Main Timeline (3/4 Width) */}
        <div className="lg:col-span-3">
          <div className="mb-12">
            <h2 className="text-4xl font-bold neon-text mb-2"> Education_Evolution</h2>
            <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">
              System Updates // Knowledge Ingestion Log
            </p>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Node Icon */}
                <div className="absolute -left-3 top-0 bg-[#030303] p-1 border border-white/10 rounded-full text-accent shadow-[0_0_10px_#00f2ff50]">
                  <GraduationCap size={16} />
                </div>

                <span className="text-accent font-mono text-[10px] uppercase tracking-widest mb-2 block">
                  [{item.date}]
                </span>

                <h3 className="text-xl font-bold text-white font-mono mb-1">{item.degree}</h3>
                <p className="text-gray-500 text-sm font-mono mb-4">{item.institution}</p>

                <ul className="space-y-2">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-xs leading-relaxed">
                      <span className="text-accent mt-1 opacity-50">/</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: The Tech Sidebar (1/4 Width) */}
        <div className="hidden lg:block space-y-6 sticky top-32">

          {/* Skill Matrix Card */}
          <div className="glass-card p-6 border-accent/20 bg-accent/5">
            <h3 className="text-accent font-mono text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <Zap size={14} className="animate-pulse" />
              Neural_Skill_Load
            </h3>

            <div className="space-y-5 font-mono text-[9px] uppercase tracking-widest">
              {[
                { label: "AI_Orchestration", val: "94%" },
                { label: "Cloud_Infrastructure", val: "88%" },
                { label: "Systems_Engineering", val: "91%" },
                { label: "Full_Stack_Dev", val: "85%" }
              ].map((skill) => (
                <div key={skill.label} className="space-y-2">
                  <div className="flex justify-between text-gray-400">
                    <span>{skill.label}</span>
                    <span className="text-accent">{skill.val}</span>
                  </div>
                  <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.val }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="bg-accent h-full shadow-[0_0_8px_#00f2ff]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Status Log */}
          <div className="p-5 border border-white/5 bg-[#0a0a0a] rounded-2xl">
            <h4 className="text-[10px] font-mono text-gray-500 uppercase mb-4 flex items-center gap-2">
              <Terminal size={12} /> Console_Output
            </h4>
            <div className="space-y-3 font-mono text-[9px] leading-tight text-zinc-500">
              <p className="flex gap-2">
                <span className="text-green-500">READY</span>
                <span>Node: Oak Park, IL</span>
              </p>
              <p className="flex gap-2">
                <span className="text-accent">FETCH</span>
                <span>IIT_CS_GRAD_2025</span>
              </p>
              <p className="flex gap-2 opacity-50">
                <span className="text-yellow-500">WARN</span>
                <span>Deep_Learning_Overflow...</span>
              </p>
              <p className="flex gap-2">
                <span className="text-blue-500">SYNC</span>
                <span>Google_UX_Module_Active</span>
              </p>
            </div>
          </div>

          {/* Engineering Motto */}
          <div className="px-2 py-4 text-center">
            <p className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.4em] italic leading-relaxed">
              "Training models, Building Systems, Bridging Gaps"
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}