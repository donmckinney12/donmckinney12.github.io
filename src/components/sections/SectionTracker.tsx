"use client";
import { useEffect, useRef } from 'react';

export default function SectionTracker({
  sectionName,
  suggestion,
  children
}: {
  sectionName: string,
  suggestion: string,
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        timer = setTimeout(() => {
          const event = new CustomEvent('aira-trigger', {
            detail: { section: sectionName, suggestion }
          });
          window.dispatchEvent(event);
        }, 3000);
      } else {
        clearTimeout(timer);
      }
    }, { threshold: 0.3 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [sectionName, suggestion]);

  return (
    <div
      ref={ref}
      className="py-24 md:py-32 min-h-[60vh] flex flex-col justify-center border-b border-white/5 scroll-mt-20 px-6"
    >
      {/* This inner div constrains the width */}
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </div>
  );
}