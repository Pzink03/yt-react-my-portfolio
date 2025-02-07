import NavBar from "./components/NavBar"
import Home from "./components/Home"

import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Clones from "./components/Clones"
// import ProfessionalExp from "./components/ProfessionalExp"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      {/* <SocialLinks /> */}
      <About />
      {/* <ProfessionalExp /> */}
      <Portfolio />
      <Clones />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
