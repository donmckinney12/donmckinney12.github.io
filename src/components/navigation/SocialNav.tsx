"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: <Github size={20} />, href: "https://github.com/Donmckinney12" },
  { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/donald-mckinney-5448602b2" },
  { icon: <Twitter size={20} />, href: "https://x.com/mckinney_donald" },
  { icon: <Mail size={20} />, href: "mailto:mckinneydonald321@gmail.com" },
];

export default function SocialNav() {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-6">
      {socials.map((social, i) => (
        <motion.a
          key={i}
          href={social.href}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + i * 0.1 }}
          whileHover={{ scale: 1.2, color: "#00f2ff" }}
          className="text-gray-500 hover:drop-shadow-[0_0_8px_#00f2ff]"
        >
          {social.icon}
        </motion.a>
      ))}
      <div className="w-[1px] h-20 bg-gradient-to-b from-accent/50 to-transparent self-center" />
    </div>
  );
}