import About_US from "./components/about/About"
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import Services from "./components/services/Services"



function App() {

  return (
    <>
        <main>
            <Navbar />

            <div id="home">
              <Home />
            </div>

            <div id="services">
              <Services />
            </div>

            <div id="about">
              <About_US />
            </div>
        </main>
    </>
  )
}

export default App
