"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Loader2, Terminal, Send, ChevronRight, Activity, Volume2, VolumeX } from 'lucide-react';

export default function AIBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("System stable. Awaiting technical command.");
  const [input, setInput] = useState("");
  const [systemLog, setSystemLog] = useState("UPLINK_STABLE::OAK_PARK");
  const isProcessing = useRef(false);

  // --- 🎙️ NATURAL VOICE OUTPUT ---
  const speak = (text: string) => {
    if (typeof window !== 'undefined' && !isMuted) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);

      const voices = window.speechSynthesis.getVoices();
      // Prioritizing the natural-sounding Google female voice
      const naturalVoice = voices.find(v => v.name === 'Google US English') ||
                           voices.find(v => v.name.includes('Female')) ||
                           voices.find(v => v.lang.includes('en-US'));

      if (naturalVoice) utterance.voice = naturalVoice;
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing.current) return;

    const userQuery = input;
    setInput("");
    isProcessing.current = true;
    setIsThinking(true);
    setSystemLog(`UPLINK_STREAM: "${userQuery.substring(0, 10)}..."`);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userQuery }),
      });

      const data = await res.json();
      setCurrentMessage(data.text);
      setSystemLog("DATAFRAME_DECRYPTED");

      // Automatic Natural Voice Response
      speak(data.text);

    } catch (err) {
      setCurrentMessage("CRITICAL_ERROR::UPLINK_STALLED");
      setSystemLog("CONNECTION_FAILURE_500");
    } finally {
      setIsThinking(false);
      isProcessing.current = false;
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-80 glass-card rounded-[2.5rem] p-7 aira-glow relative overflow-hidden bg-black/90"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/30 animate-scan pointer-events-none" />

            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-2 text-accent">
                <Sparkles size={18} className="animate-pulse" />
                <span className="font-mono text-[10px] font-black text-white uppercase tracking-[0.25em]">AIRA::Nexus_v4</span>
              </div>

              <div className="flex items-center gap-3">
                <button onClick={() => {
                  setIsMuted(!isMuted);
                  if (!isMuted) window.speechSynthesis.cancel();
                }} className="text-zinc-600 hover:text-accent">
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
                <button onClick={() => setIsOpen(false)} className="text-zinc-600 hover:text-white"><X size={18} /></button>
              </div>
            </div>

            <div className="relative mb-6 min-h-[100px] flex items-start">
              {isThinking ? (
                <div className="flex items-center gap-3 text-accent/50 font-mono text-[10px] mt-2">
                  <Loader2 size={14} className="animate-spin" />
                  <span>FETCHING_DATA_NODES...</span>
                </div>
              ) : (
                <p className="text-zinc-300 text-xs font-mono leading-relaxed terminal-text border-l border-accent/20 pl-4 py-2 italic">
                  "{currentMessage}"
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-accent/50 group-focus-within:text-accent">
                <ChevronRight size={14} />
              </div>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="INPUT_COMMAND..."
                className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-8 pr-12 text-[10px] font-mono text-white focus:outline-none focus:border-accent/40"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-accent">
                <Send size={14} />
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[8px] text-zinc-600 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Terminal size={10} className="text-accent/50" />
                <span>{systemLog}</span>
              </div>
              <Activity size={10} className="text-green-500/20" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`p-5 rounded-2xl transition-all duration-700 ${
          isOpen ? 'bg-accent text-black shadow-[0_0_40px_#00f2ff]' : 'bg-zinc-900 border border-white/10 text-accent hover:aira-glow'
        }`}
      >
        <Terminal size={24} />
      </motion.button>
    </div>
  );
}