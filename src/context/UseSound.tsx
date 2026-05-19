import { useRef, useEffect } from "react";

export const useSound = (src: string, volume: number = 1): () => void => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // eslint-disable-next-line react-hooks/refs
  if (!audioRef.current) {
    const audio = new Audio(src);
    audio.volume = volume;
    audioRef.current = audio;
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const play = (): void => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err: Error) => {
        console.error("Sound play failed:", err);
      });
    }
  };

  return play;
};