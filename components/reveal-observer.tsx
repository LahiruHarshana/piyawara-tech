"use client";

import { useEffect } from "react";

export function RevealObserver({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element, index) => {
      (element as HTMLElement).style.transitionDelay = `${Math.min(index * 35, 280)}ms`;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return children;
}
