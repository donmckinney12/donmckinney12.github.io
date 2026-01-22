"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter text-white">
            Contact Protocol
          </h2>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            Ready for high-velocity collaboration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info Nodes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors group">
              <Mail className="text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-1">Direct Uplink</h3>
              <p className="text-zinc-400 text-sm font-mono">mckinneydonald321@gmail.com</p>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" className="flex-1 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                <Github size={20} /> <span className="text-xs font-mono">GITHUB</span>
              </a>
              <a href="https://linkedin.com" target="_blank" className="flex-1 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin size={20} /> <span className="text-xs font-mono">LINKEDIN</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Message Node */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <form className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-2">Identifier</label>
                <input type="text" placeholder="Your Name" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-accent/50 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-2">Message_Payload</label>
                <textarea rows={4} placeholder="Type your message..." className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-accent/50 outline-none transition-all resize-none" />
              </div>
              <button className="w-full py-4 bg-accent text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all">
                <Send size={18} /> INITIATE_TRANSMISSION
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}