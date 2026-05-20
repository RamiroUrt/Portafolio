import { useState, useEffect, useRef } from "react";

interface CustomCursorProps {
  scale?: number;
  color?: string;
}

const CustomCursor = ({ scale = 1, color = "#1a1a1a" }: CustomCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"arrow" | "pointer" | "grab" | "grabbing">("arrow");
  const [visible, setVisible] = useState(true);
 
  useEffect(() => {
    let lastX = -100;
    let lastY = -100;

    const onMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${lastX}px, ${lastY}px, 0)`;
      }
    };
 
    const updateCursorState = (target: HTMLElement | null) => {
      if (!target) {
        setState("arrow");
        return;
      }

      const interactiveParent = target.closest("button, a, input, select, textarea, [role='button'], .pointer-target");
      if (interactiveParent) {
        setState("pointer");
        return;
      }

      const grabParent = target.closest("[draggable='true'], .grab-target, [role='slider']");
      if (grabParent) {
        setState("grab");
        return;
      }

      const computedCursor = getComputedStyle(target).cursor;
      if (computedCursor === "pointer") {
        setState("pointer");
      } else if (computedCursor === "grab" || computedCursor === "move") {
        setState("grab");
      } else {
        setState("arrow");
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      updateCursorState(e.target as HTMLElement);
    };

    const onDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isGrabable = target.closest("[draggable='true'], .grab-target, [role='slider']") || 
                         getComputedStyle(target).cursor === "grab" || 
                         getComputedStyle(target).cursor === "move";
                         
      if (isGrabable) {
        setState("grabbing");
      }
    };

    const onUp = (e: MouseEvent) => {
      updateCursorState(e.target as HTMLElement);
    };
 
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
 
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);
 
  const s = scale;
 
  // Cursor flecha estilo macOS clasico - relleno negro con borde blanco
  function Arrow() {
    return (
      <svg width={20 * s} height={20 * s} viewBox="0 0 24 24" style={{ display: "block" }}>
        <path
          d="M5.5 3.21V20.8l4.75-4.75h6.25L5.5 3.21Z"
          fill={color}
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Cursor mano apuntando estilo macOS - dedo indice extendido
  function Pointer() {
    return (
      <svg width={24 * s} height={24 * s} viewBox="0 0 24 24" style={{ display: "block" }}>
        <g fill={color} stroke="white" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
          {/* Dedo indice */}
          <path d="M10 2C10 2 9 2 9 3L9 11L9 12C9 12 8 11.5 7 11.5C6 11.5 5.5 12 5.5 13C5.5 14 6 14.5 6.5 15L9 18C10 20 11.5 21 14 21L16 21C19 21 20.5 19 20.5 16L20.5 12C20.5 11 19.8 10.2 19 10.2C18.2 10.2 17.5 11 17.5 12L17.5 10C17.5 9 16.8 8.2 16 8.2C15.2 8.2 14.5 9 14.5 10L14.5 8C14.5 7 13.8 6.2 13 6.2C12.2 6.2 11.5 7 11.5 8L11.5 11L11.5 3C11.5 2 10.8 2 10 2Z" />
        </g>
      </svg>
    );
  }

  // Cursor mano abierta (grab) estilo macOS
  function Grab({ closed = false }: { closed?: boolean }) {
    if (closed) {
      // Mano cerrada (grabbing) - puno cerrado
      return (
        <svg width={24 * s} height={24 * s} viewBox="0 0 24 24" style={{ display: "block" }}>
          <g fill={color} stroke="white" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
            <path d="M6 11C6 9.5 7 9 8 9C8.5 9 9 9.2 9.5 9.5C10 9 10.5 8.5 11.5 8.5C12.5 8.5 13 9 13.5 9.5C14 9 14.5 8.5 15.5 8.5C16.5 8.5 17 9 17.5 9.5C18 9 18.5 9 19 9.2C20 9.5 20.5 10.5 20.5 11.5L20.5 14C20.5 17.5 18 20 14.5 20L12 20C9 20 6.5 18 6 15L5.5 12C5.5 11.5 5.8 11 6 11Z" />
          </g>
        </svg>
      );
    }
    // Mano abierta (grab) - dedos extendidos
    return (
      <svg width={24 * s} height={24 * s} viewBox="0 0 24 24" style={{ display: "block" }}>
        <g fill={color} stroke="white" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
          {/* Pulgar */}
          <path d="M5 12L5 10C5 9 5.5 8 6.5 8C7.5 8 8 9 8 10L8 13" />
          {/* Dedos */}
          <path d="M8 13L8 5C8 4 8.5 3 9.5 3C10.5 3 11 4 11 5L11 12" />
          <path d="M11 12L11 4C11 3 11.5 2 12.5 2C13.5 2 14 3 14 4L14 12" />
          <path d="M14 12L14 5C14 4 14.5 3 15.5 3C16.5 3 17 4 17 5L17 12" />
          <path d="M17 12L17 7C17 6 17.5 5 18.5 5C19.5 5 20 6 20 7L20 14C20 18 17.5 20.5 14 20.5L11.5 20.5C8.5 20.5 6 18.5 5.5 15.5L5 13C5 12.5 5 12 5 12" />
        </g>
      </svg>
    );
  }
 
  // Hotspots de cada cursor - donde se registra el click
  const offsetMap = {
    arrow:    { x: 0,   y: 0 },
    pointer:  { x: -6,  y: 0 },
    grab:     { x: -12, y: -8 },
    grabbing: { x: -12, y: -8 },
  };
  const off = offsetMap[state];
 
  return (
    <>
      <style>{`
        html, body, a, button, select, input, [role="button"], .pointer-target { 
          cursor: none !important; 
        }
      `}</style>
      
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999999,
          opacity: visible ? 1 : 0,
          willChange: "transform",
          filter: "drop-shadow(0 2.5px 3px rgba(0,0,0,0.35))",
          marginLeft: off.x * s,
          marginTop: off.y * s,
          transform: "translate3d(-100px, -100px, 0)"
        }}
      >
        {state === "arrow"    && <Arrow />}
        {state === "pointer"  && <Pointer />}
        {state === "grab"     && <Grab closed={false} />}
        {state === "grabbing" && <Grab closed={true} />}
      </div>
    </>
  );
};

export default CustomCursor;
