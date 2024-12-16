
import { useState, useEffect } from "react"
import About from "./views/About"
import Contact from "./views/Contact"
import Experience from "./views/Experience"
import Header from "./views/Header"
import Projects from "./views/Projects"
import Loader from "./components/module/loader/BallLoader"
// import Arrows from './components/Arrows'



function App() {

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
        <Header />
        <About />
        <Projects />
        <Experience />
        <Contact />
    </html>
  )}
    </>
  )
}

export default App
