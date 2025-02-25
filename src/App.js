import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import { Footer } from "./components/Footer"
import ProfessionalExp from "./components/ProfessionalExp"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ProfessionalExp />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
