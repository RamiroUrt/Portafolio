import "./css/loader.css";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Avatar from '../../../assets/icons/images/AvatarIA2.webp';
import { useSound } from '../../../context/UseSound';
import Arrow from "../../../assets/icons/Svg/Arrow";

const Loader = ({ onFinish }) => {
  const [started, setStarted] = useState(false);
  const passwordInputRef = useRef(null);
  const loadingRef = useRef(null);
  
  // Sonidos dentro del componente que los usa
  const playTypingSound = useSound("/sound/typing.mp3", 1);
  const playMacSound = useSound("/sound/apple-mac.mp3", 1);

  useEffect(() => {
    const handleStart = () => {
      setStarted(true);
    };

    if (!started) {
      document.addEventListener("click", handleStart);
      document.addEventListener("keydown", handleStart);
    }

    return () => {
      document.removeEventListener("click", handleStart);
      document.removeEventListener("keydown", handleStart);
    };
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const asteriskAnimation = () => {
      let asterisks = '';
      const maxAsterisks = 10;
      const duration = 1.5;
const tl = gsap.timeline({
  onComplete: () => {
    if (loadingRef.current) {
      loadingRef.current.classList.add('active'); 
    }

    setTimeout(() => {
      onFinish();
      playMacSound();
    }, 2000); 
    
    
  }
});

      for (let i = 0; i <= maxAsterisks; i++) {
        tl.to(passwordInputRef.current, {
          duration: duration / maxAsterisks,
          onStart: () => {
            asterisks += '*';
            passwordInputRef.current.value = asterisks;
            playTypingSound(); 
          }
        });
      }
    };

    asteriskAnimation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  return (
    <div className="lock-screen-container">
      {!started && (
        <div className="interaction-overlay">
          <p className="interaction-text">🖱️ Haz clic o presiona una tecla para iniciar</p>
        </div>
      )}
      <section className="lock-screen" id="lock">
        <div className="avatar-lock">
          <img src={Avatar} alt="Ramiro Urteaga" loading='lazy'/>
        </div>
        <h1 className="nickname">Ramiro Urteaga</h1>
        <div className="password">
          <input 
            ref={passwordInputRef}
            className="password_inp" 
            type="password" 
            placeholder="Enter Password" 
            readOnly
          />
          <button className="password_btn">
            <Arrow />
          </button>
        </div>
      </section>
      <div className="loading" ref={loadingRef}></div>
    </div>
  );
}

export default Loader;