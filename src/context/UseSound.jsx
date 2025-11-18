import { useRef } from "react";

export const useSound = (src, volume = 1) => {
  const audioRef = useRef(null);

  if (!audioRef.current) {
    const audio = new Audio(src);
    audio.volume = volume;
    audioRef.current = audio;
  }

  const play = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch((err) => {
      console.error("Sound play failed:", err);
    });
  };

  return play;
};