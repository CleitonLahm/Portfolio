import GlobalStyle from "../GlobalStyles"
import About from "./About"
import Cards from "./Cards"
import Experiences from "./Experience"
import Formations from "./Formations"
import Header from "./Header"

function App() {
  
  return (
    <div className="container">
      <GlobalStyle />
      <Header />
      <About />
      <Cards />
      <Formations />
      <Experiences />
    </div>
  )
}

export default App
