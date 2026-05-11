import { useEffect, useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import { gsap } from 'gsap';
import type { LayoutTitleProps } from "../../../assets/types/titles.Types";

const LayoutTitle = ({ text, isLoading }: LayoutTitleProps) => {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoading && titleRef.current) {
      gsap.fromTo(titleRef.current, 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [isLoading]);

  return (
    <div ref={titleRef} className="layout-title-container">
      {isLoading ? (
        <div style={{ padding: '10px 0' }}>
          <Skeleton height={35} width={200} borderRadius={8} />
        </div>
      ) : (
        <h1 className="layout-title">{text}</h1>
      )}
    </div>
  );
};

export default LayoutTitle;