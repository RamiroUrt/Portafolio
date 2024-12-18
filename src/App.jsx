
import { useState, useEffect } from "react"
import About from "./views/About"
import Contact from "./views/Contact"
import Experience from "./views/Experience"
import Header from "./views/Header"
import Projects from "./views/Projects"
import Loader from "./components/module/loader/BallLoader"
// import Arrows from './components/Arrows'

import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";



function App() {

  const config = {}; // Se elimina la tipificación explícita
  useIPadCursor();

  const [isloading, setIsLoading] = useState(true);
  
  useEffect(() =>{
    const timer = setTimeout(() =>{
      setIsLoading(false)
    },1500);

    return () => clearTimeout(timer);
  },[]);

  return (
    <>
    {isloading ? (
        <section className="html">
          <Loader />
        </section>
    ): (
    <html className="">
    <IPadCursorProvider config={config}>
            <Header />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </IPadCursorProvider>
    </html>
  )}
    </>
  )
}

export default App
