import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  const [handelMenu, setHandleMenu] = useState(false)

  return (
    <header className='flex flex-col w-full max-w-7xl min-h-20 px-8 fixed top-0 left-1/2 -translate-x-1/2 bg-white'>
      <div className={`flex items-center justify-between ${handelMenu ? "border-b-[0.5px] border-gray-200" : ""}`}>
        <img src={logo} className='max-w-36 max-h-20' alt="" />
        <nav className='hidden md:block'>
          <ul className='flex items-center gap-6 text-black text-[15px]'>
            <Link to={"/"} className='hover:text-blue-600'>Home</Link>
            <Link to={"/tour"} className='hover:text-blue-600'>Tour</Link>
            <Link to={"/showcase"} className='hover:text-blue-600'>Showcase</Link>
            <Link to={"/pricing-plan"} className='hover:text-blue-600'>Pricing</Link>
            <Link to={"/about-us"} className='hover:text-blue-600'>Who we are</Link>
            <Link to={"/contact"} className='hover:text-blue-600'>Reach Us</Link>
            <Link to={"/login"} className='hover:text-blue-600'>Web Login</Link>
          </ul>
        </nav>
        <IoMenu size={32} onClick={()=> setHandleMenu(!handelMenu)} className='md:hidden text-gray-500 cursor-pointer'/>
      </div>
      {handelMenu && <nav className='md:hidden'>
        <ul className='flex flex-col gap-6 text-black text-[15px] p-4'>
            <Link to={"/"} className='hover:text-blue-600'>Home</Link>
            <Link to={"/tour"} className='hover:text-blue-600'>Tour</Link>
            <Link to={"/showcase"} className='hover:text-blue-600'>Showcase</Link>
            <Link to={"/pricing-plan"} className='hover:text-blue-600'>Pricing</Link>
            <Link to={"/about-us"} className='hover:text-blue-600'>Who we are</Link>
            <Link to={"/contact"} className='hover:text-blue-600'>Reach Us</Link>
            <Link to={"/login"} className='hover:text-blue-600'>Web Login</Link>
          </ul>
        </nav>}
    </header>
  )
}

export default Navbar