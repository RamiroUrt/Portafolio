import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AnimationConfig {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
}

export const useAnimateList = (selector: string, config: AnimationConfig = {}, delay: number = 600) => {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);

useEffect(() => {
  if (!isLoading && containerRef.current) {
    gsap.killTweensOf(selector);
    const ctx = gsap.context(() => {
      const elements = containerRef.current?.querySelectorAll(selector);
      
      if (elements && elements.length > 0) {
        gsap.fromTo(elements, 
          { 
            opacity: 0, 
            y: 20, 
            ...config.from 
          }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.7, 
            stagger: 0.1, 
            ease: "power2.out",
            ...config.to,
            clearProps: "all", 
            overwrite: "auto"
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }
}, [isLoading, selector, config.from, config.to]); 

  return { isLoading, containerRef };
};