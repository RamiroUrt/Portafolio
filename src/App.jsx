
import About from "./layout/About"
import Contact from "./layout/Contact"
import Experience from "./layout/Experience"
import Header from "./layout/Header"
import Projects from "./layout/Projects"
// import Arrows from './components/Arrows'



function App() {

  return (
    <>
    <html className="dark:cursor-[url('./svg/cursorOrange.svg')]">
        <Header />
        <About />
        <Projects />
        <Experience />
        <Contact />
    </html>
    </>
  )
}

export default App
