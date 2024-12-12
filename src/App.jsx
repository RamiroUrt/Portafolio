
import About from "./pages/About"
import Contact from "./pages/Contact"
import Experience from "./pages/Experience"
import Header from "./pages/Header"
import Projects from "./pages/Projects"
// import Arrows from './components/Arrows'



function App() {

  return (
    <>
    <html className="dark:cursor-[url('./svg/cursorOrange.svg')]">
      {/* <Arrows /> */}
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
