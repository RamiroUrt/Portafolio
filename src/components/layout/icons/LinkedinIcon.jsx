import { useAnimation } from "motion/react";
import { motion } from "framer-motion";
import React, { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

const pathVariants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 0.4, opacity: { duration: 0.1 } },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: { duration: 0.6, ease: "linear", opacity: { duration: 0.1 } },
  },
};

const rectVariants = { ...pathVariants };
const circleVariants = { ...pathVariants };

const LinkedinIcon = forwardRef(({ onMouseEnter, onMouseLeave, className, size = 28, darkMode = false, ...props }, ref) => {

  const pathControls = useAnimation();
  const rectControls = useAnimation();
  const circleControls = useAnimation();
  const isControlledRef = useRef(false);

  useImperativeHandle(ref, () => ({
    startAnimation: () => {
      isControlledRef.current = true;
      pathControls.start("animate");
      rectControls.start("animate");
      circleControls.start("animate");
    },
    stopAnimation: () => {
      isControlledRef.current = true;
      pathControls.start("normal");
      rectControls.start("normal");
      circleControls.start("normal");
    },
  }));

  const handleMouseEnter = useCallback((e) => {
    if (!isControlledRef.current) {
      pathControls.start("animate");
      rectControls.start("animate");
      circleControls.start("animate");
    } else {
      onMouseEnter?.(e);
    }
  }, [pathControls, rectControls, circleControls, onMouseEnter]);

  const handleMouseLeave = useCallback((e) => {
    if (!isControlledRef.current) {
      pathControls.start("normal");
      rectControls.start("normal");
      circleControls.start("normal");
    } else {
      onMouseLeave?.(e);
    }
  }, [pathControls, rectControls, circleControls, onMouseLeave]);

  return (
    <div
      className={cn("cursor-pointer select-none p-2 hover:bg-accent rounded-md  flex items-center justify-center social-button", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke={darkMode ? "#007AFF" : "#F59E0B"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <motion.path variants={pathVariants} initial="normal" animate={pathControls} d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <motion.rect variants={rectVariants} initial="normal" animate={rectControls} x="2" y="9" width="4" height="12" />
        <motion.circle variants={circleVariants} initial="normal" animate={circleControls} cx="4" cy="4" r="2" />
      </svg>
    </div>
  );
});

LinkedinIcon.displayName = "LinkedinIcon";

export { LinkedinIcon };
