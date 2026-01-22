"use client";
import { motion } from "framer-motion";

export const SectionWrapper = ({ children, id }: { children: React.ReactNode, id: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="py-24 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center"
  >
    {children}
  </motion.section>
);