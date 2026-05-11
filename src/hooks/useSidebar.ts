import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useSidebar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && contentRef.current) {
      const elementsToAnimate = contentRef.current.querySelectorAll(
        '.sidebar-header, .user-info, .sidebar-socialInfo, .sidebar-download, .sidebar-footer'
      );

      gsap.fromTo(elementsToAnimate, 
        { y: 20, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "power2.out" 
        }
      );
    }
  }, [isLoading]);

  return { isLoading, contentRef };
};