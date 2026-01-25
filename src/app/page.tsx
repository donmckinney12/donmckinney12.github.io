"use client";

// Navigation & UI Components
import Navbar from "@/components/navigation/Navbar";
import SocialNav from "@/components/navigation/SocialNav";
import RightNav from "@/components/navigation/RightNav";
import Footer from "@/components/sections/Footer";
import AIBubble from "@/components/ui/AIBubble";

// Section Components
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import SectionTracker from "@/components/sections/SectionTracker";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen text-white">
      {/* Global Navigation Nodes */}
      <Navbar />
      <SocialNav />
      <RightNav />

      {/* 01. Hero Node */}
      <div id="hero">
        <Hero />
      </div>

      {/* 02. About Node */}
      <div id="about">
        <SectionTracker
          sectionName="About Donald"
          suggestion="I can explain Donald's 'No-BS' engineering philosophy or his background in Oak Park."
        >
          <About />
        </SectionTracker>
      </div>

      {/* 03. Skills Node */}
      <div id="skills">
        <SectionTracker
          sectionName="Technical Skills"
          suggestion="Would you like to hear about Donald's proficiency in Python for Data Science or his Linux shell scripting?"
        >
          <Skills />
        </SectionTracker>
      </div>

      {/* 04. Education Node */}
      <div id="education">
        <SectionTracker
          sectionName="Education Timeline"
          suggestion="Donald is an IIT 2025 graduate. I can also verify his certifications in Google UX Design."
        >
          <Timeline />
        </SectionTracker>
      </div>

      {/* 05. Projects Node */}
      <div id="projects">
        <SectionTracker
          sectionName="MLOps Projects"
          suggestion="I noticed you're exploring the deployments. Would you like a technical breakdown of the SkyLink architecture?"
        >
          <Projects />
        </SectionTracker>
      </div>

      {/* 06. Communication Node */}
      <div id="contact">
        <Contact />
      </div>

      {/* 07. Footer Node */}
      <div id="footer">
        <Footer />
      </div>

      {/* Assistant Node */}
      <AIBubble />
    </main>
  );
}