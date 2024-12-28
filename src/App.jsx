import { Link, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tour from './pages/Tour'
import Showcase from './pages/Showcase'
import Pricing from './pages/Pricing'
import WhoWeAre from './pages/WhoWeAre'
import ReachUs from './pages/ReachUs'
import WebLogin from './pages/WebLogin'
import logIn from './assets/log-in.png'
import register from './assets/Register.png'
import ScroolToTop from "./components/ScroolToTop"


function App() {

  return (
    <>
      <div className="relative">
        <div className='fixed flex flex-col gap-3 right-0 top-1/2 -translate-y-1/2'>
          <Link to={"https://globalhruk.com/globalhr/"}><img  className="w-[32px]" src={logIn} alt="" /></Link>
          <Link to={"https://globalhruk.com/globalhr/index.php/login/user_registration_c/index"}><img  className="w-[32px]" src={register} alt="" /></Link>
        </div>
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
        <ScroolToTop />
      </div>
    </>
  )
}

export default App
