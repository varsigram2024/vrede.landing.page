import { type ReactNode, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(element, { autoAlpha: 1, clearProps: "transform" });
      return;
    }

    const offsets = {
      up: { x: 0, y: 32 },
      down: { x: 0, y: -32 },
      left: { x: -40, y: 0 },
      right: { x: 40, y: 0 },
      fade: { x: 0, y: 0 },
    } as const;
    const offset = offsets[direction];

    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, ...offset },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          delay: delay / 1000,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        },
      );
    }, element);

    return () => context.revert();
  }, [delay, direction]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
    >
      {children}
    </div>
  );
}
