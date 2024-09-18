
import About from "./pages/About"
import Contact from "./pages/Contact"
import Experience from "./pages/Experience"
import Header from "./pages/Header"
import Projects from "./pages/Projects"


function App() {
  return (
    <>
    <html className="dark:-bg--light-black-- dark:cursor-[url('./svg/cursorOrange.svg')]">
      {/* <Arrows /> */}
        <Header />
        <About />
        <Experience />
        <Projects />
        <Contact />
    </html>
    </>
  )
}

export default App
