import GlobalStyle from "../GlobalStyles"
import About from "./About"
import Cards from "./Cards"
import Header from "./Header"

function App() {
  
  return (
    <div className="container">
      <GlobalStyle />
      <Header />
      <About />
      <Cards />
    </div>
  )
}

export default App
