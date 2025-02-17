import { useState, useEffect } from "react";
import About from "./views/About";
import Contact from "./views/Contact";
import Experience from "./views/Experience";
import Header from "./views/Header";
import Projects from "./views/Projects";
import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";
import styled from "styled-components";
import { gsap, CSSPlugin, Expo } from "gsap";
gsap.registerPlugin(CSSPlugin);

function App() {
  const config = {};
  useIPadCursor();

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
        gsap.to(".loading-container", {
          visibility: "hidden", 
          display: "none", 
          duration: 0,
        });
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
      .to(".title-lines", { display: "block", duration: 0.1 })
      .to(".title-lines", {
        opacity: 1,
        stagger: 0.15,
        ease: Expo.easeInOut,
        duration: 0.6,
      });
  };

  return (
    <>
      <Loading className="loading-container">
        <Follow className="follow"></Follow>
        <ProgressBar
          id="progress-bar"
          style={{ width: counter + "%" }}
        ></ProgressBar>
        <Count id="count">
          {counter}<span className="tex-color-[#F59E0B] text-9xl">%</span>
        </Count>
      </Loading>

      <Content className="content">
        <body>
          <IPadCursorProvider config={config}>
            <Header />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </IPadCursorProvider>
        </body>
      </Content>
    </>
  );
}

export default App;

const Loading = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  background: radial-gradient(at center top, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0));
  visibility: visible; 
`;
const Follow = styled.div`
  position: absolute;
  background-color: #f59e0b;
  height: 2px;
  width: 0%;
  left: 0;
  z-index: 2;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #fff; 
  transition: 0.4s ease-out;
`;

const Count = styled.p`
  position: absolute;
  font-size: 130px;
  color: #fff;
  transform: translateY(-15px);
  font-weight: 500;
`;

const Content = styled.div`
  height: auto;
  width: 0;
  position: absolute;
  left: 0;
  top: 0;
  padding: auto;
  overflow: hidden;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
`;