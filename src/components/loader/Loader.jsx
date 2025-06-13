
import "./loader.css"
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import Avatar from '../../assets/img/AvatarIA2.webp';
const Loader = () => {
  const passwordInputRef = useRef(null);
  const loadingRef = useRef(null);

  useEffect(() => {
    // Animación de asteriscos
    const asteriskAnimation = () => {
      let asterisks = '';
      const duration = 2; 
      const maxAsterisks = 10; 
      
      const tl = gsap.timeline({
        onComplete: () => {
          loadingRef.current.classList.add('active');
        }
      });

      for (let i = 0; i <= maxAsterisks; i++) {
        tl.to(passwordInputRef.current, {
          duration: duration/maxAsterisks,
          onStart: () => {
            asterisks += '*';
            passwordInputRef.current.value = asterisks;
          }
        }, i * (duration/maxAsterisks));
      }
    };

    const timer = setTimeout(asteriskAnimation, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lock-screen-container">
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
};

export default Loader;