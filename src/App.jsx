import GlobalStyle from "../GlobalStyles"
import About from "./About"
import Cards from "./Cards"
import Contact from "./Contact"
import Experiences from "./Experience"
import Footer from "./Footer"
import Formations from "./Formations"
import Header from "./Header"

function App() {
  
  return (
    <>
      <div className="container">
      <GlobalStyle />
      <Header />
      <About />
      <Cards />
      <Formations />
      <Experiences />
      <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
