import "./loader.css"
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import Avatar from '../../assets/img/AvatarIA2.webp';
import { useSound } from '../../context/UseSound';

const Loader = ({ onFinish }) => {
  const [started, setStarted] = useState(false);
  const passwordInputRef = useRef(null);
  const loadingRef = useRef(null);
  const playLoadingSound = useSound("/sound/typing.mp3", 1);
  const finishSound = useSound("/sound/apple-mac.mp3", 1);

  useEffect(() => {
    const handleStart = () => {
      setStarted(true);
      document.removeEventListener("click", handleStart);
      document.removeEventListener("keydown", handleStart);
    };

    document.addEventListener("click", handleStart);
    document.addEventListener("keydown", handleStart);

    return () => {
      document.removeEventListener("click", handleStart);
      document.removeEventListener("keydown", handleStart);
    };
  }, []);

  useEffect(() => {
    if (!started) return;

    const asteriskAnimation = () => {
      let asterisks = '';
      const duration = 2;
      const maxAsterisks = 10;

      const tl = gsap.timeline({
        onStart: () => {
          playLoadingSound();
        },
        onComplete: () => {
          loadingRef.current.classList.add('active');
          setTimeout(() => {
            onFinish?.();
            finishSound();
          }, 2100); 
        }
      });

      for (let i = 0; i <= maxAsterisks; i++) {
        tl.to(passwordInputRef.current, {
          duration: duration / maxAsterisks,
          onStart: () => {
            asterisks += '*';
            passwordInputRef.current.value = asterisks;
          }
        }, i * (duration / maxAsterisks));
      }
    };

    const timer = setTimeout(asteriskAnimation, 500);
    return () => clearTimeout(timer);
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
          <img src={Avatar} alt="icon" loading='lazy'/>
        </div>
        <h1 className="nickname">Ramiro Urteaga</h1>
        <div className="password">
          <input 
            ref={passwordInputRef}
            className="password_inp" 
            type="password" 
            placeholder="Enter Password" 
            id="pass" 
            readOnly
          />
          <button className="password_btn">
            <ArrowRight />
          </button>
        </div>
      </section>
      <div className="loading" ref={loadingRef}></div>
      <section className="desktop"></section>
    </div>
  );
}

export default Loader;
