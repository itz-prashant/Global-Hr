import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tour from './pages/Tour'
import Showcase from './pages/Showcase'
import Pricing from './pages/Pricing'
import WhoWeAre from './pages/WhoWeAre'
import ReachUs from './pages/ReachUs'
import WebLogin from './pages/WebLogin'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tour" element={<Tour />}/>
        <Route path="/showcase" element={<Showcase />}/>
        <Route path="/pricing-plan" element={<Pricing />}/>
        <Route path="/about-us" element={<WhoWeAre />}/>
        <Route path="/contact" element={<ReachUs />}/>
        <Route path="/login" element={<WebLogin />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
