import React from 'react'
import { FaFacebookSquare, FaTwitterSquare,FaLinkedin  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import FreeTrailForm from './FreeTrailForm';

const Footer = () => {
  return (
    <>
      <footer className='bg-[#292e31] w-full'>

        <div className='bg-[#292e31] grid grid-cols-1 max-w-7xl w-96 sm:w-[430px] md:w-full mx-auto md:grid-cols-2 lg:grid-cols-4 md:p-10 p-5'>
          <div className='flex flex-col gap-6 text-center p-8'>
              <h1 className='text-center text-xl text-white pb-3 border-b-[0.5px] border-gray-600'>About Us</h1>
              <div>
                <p className='text-white/65'>We’ve always believed that our competitors could never emulate the passion we have for our business and the fact that we only care about one thing; client satisfaction</p>
              </div>
              <div className='flex flex-col'>
                <h1 className='text-center text-xl text-white pb-3 border-b-[0.5px] border-gray-600'>Contact With Us</h1>
                <div className='flex gap-2 text-4xl mt-3 justify-center text-white/10'>
                  <Link to={"https://www.facebook.com/globalhruk/"} className='hover:text-white/55'><FaFacebookSquare /></Link>
                  <Link to={"https://x.com/i/flow/login?redirect_after_login=%2Fglobalhruk"} className='hover:text-white/55'><FaTwitterSquare /></Link>
                  <Link to={"https://www.linkedin.com/company/global-hr-uk/about/"} className='hover:text-white/55'><FaLinkedin /></Link>
                </div>
              </div>
          </div>

          <div className='flex flex-col gap-6 text-center p-8'>
              <h1 className='text-center text-xl text-white pb-3 border-b-[0.5px] border-gray-600'>Quick Links</h1>
              <nav>
                <ul className='flex flex-col gap-4 text-white/65 text-sm'>
                  <Link to={"/"} className='hover:text-white/90 border-b-[0.5px] border-gray-600 pb-2'>Home</Link>
                  <Link to={"/tour"} className='hover:text-white/90 border-b-[0.5px] border-gray-600 pb-2'>Tour</Link>
                  <Link to={"/showcase"} className='hover:text-white/90 border-b-[0.5px] border-gray-600 pb-2'>Showcase</Link>
                  <Link to={"/pricing-plan"} className='hover:text-white/90 border-b-[0.5px] border-gray-600 pb-2'>Pricing</Link>
                  <Link to={"/about-us"} className='hover:text-white/90 border-b-[0.5px] border-gray-600 pb-2'>Who we are</Link>
                  <Link to={"/contact"} className='hover:text-white/90 border-b-[0.5px] border-gray-600 pb-2'>Reach Us</Link>
                  <Link to={"/login"} className='hover:text-white/90 border-b-[0.5px] border-gray-600 pb-2'>Web Login</Link>
                </ul>
              </nav>
          </div>

          <div className='flex flex-col gap-6 p-8'>
              <h1 className='text-center text-xl text-white pb-3 border-b-[0.5px] border-gray-600'>Free Trial Sign Up</h1>
              <FreeTrailForm labelName="Name" text="Start Free Trial" labelEmail="Email Address" labelCompanyName="Company Name" background="blue"  direction="col" transparent="transparent"/>
          </div>

          <div className='flex flex-col gap-6 text-center p-8'>
              <h1 className='text-center text-xl text-white pb-3 border-b-[0.5px] border-gray-600'>Application</h1>
              <div>
                <ul className='flex flex-col gap-4 text-white/65 text-sm'>
                  <Link to={"https://globalhruk.com/globalhr/"} className='hover:text-white/90 border-b-[0.5px] border-gray-600 pb-2'>Login</Link>
                  <Link to={"https://globalhruk.com/globalhr/index.php/login/user_registration_c/index"} className='hover:text-white/90 border-b-[0.5px] border-gray-600 pb-2'>Sign Up</Link>
                  <Link to={"https://globalhruk.com/globalhr/index.php/login/user_registration_c/index/UCTV/"} className='hover:text-white/90 border-b-[0.5px] border-gray-600 pb-2'>Register as Vendor</Link>
                  <Link to={"https://globalhruk.com/globalhr/index.php/login/user_registration_c/index/UCTSP/"} className='hover:text-white/90 border-b-[0.5px] border-gray-600 pb-2'>Register as Support</Link>
                  <Link to={"/shop"} className='hover:text-white/90 border-b-[0.5px] border-gray-600 pb-2'>Shop</Link>
                </ul>
              </div>
              <div className='flex flex-col'>
                <h1 className='text-center text-xl text-white pb-3 border-b-[0.5px] border-gray-600'>Partner With Us</h1>
                <ul className='flex flex-col gap-4 mt-4 text-white/65 text-sm'>
                  <Link to={"https://globalhruk.com/globalhr/"} className='hover:text-white/90 border-b-[0.5px] border-gray-600 pb-2'>Partner Login</Link>
                  <Link to={"https://globalhruk.com/globalhr/index.php/login/org_registration_c/index/partner"} className='hover:text-white/90 border-b-[0.5px] border-gray-600 pb-2'>Register As Partner</Link>
                  <Link to={"http://partners.globalhruk.com/cgi-sys/defaultwebpage.cgi"} className='hover:text-white/90 border-b-[0.5px] border-gray-600 pb-2'>Partner’s Home</Link>
                </ul>
              </div>
          </div>
        </div>

      </footer>
      <section className='bg-[#23272a] py-8 text-center text-white'>
        <h2 >© 2017 Global HR - All Rights Reserved</h2>
      </section>
    </>
    
  )
}

export default Footer