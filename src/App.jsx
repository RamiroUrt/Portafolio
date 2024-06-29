
import About from "./pages/About"
import Contact from "./pages/Contact"
import Experience from "./pages/Experience"
import Header from "./pages/Header"
import Projects from "./pages/Projects"

import ArrowDown from './components/ArrowUp'
import ArrowUp from "./components/ArrowDown"

function App() {


  return (
    <>
    <ArrowUp />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
    <ArrowDown />
    </>
  )
}

export default App
