import React from 'react'
import pricingBanner from '../assets/pricingBanner.jpg'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <>
      <div className="w-full mt-20 bg-cover bg-center sm:h-[80vh] h-full flex items-center justify-center" style={{backgroundImage: `url(${pricingBanner})`}}>
        <div className='max-w-7xl mx-auto w-full py-10 px-4 md:px-10 flex items-center justify-center'>
          <div className='flex flex-col gap-3 items-center md:w-[600px] w-[450px]'>
            <h1 className='md:text-5xl text-3xl text-white text-center'>Packages for all startup sizes</h1>
            <p className='sm:text-xl md:text-2xl text-white md:mb-10 mb-5 text-center'>Global HR has created an affordable pricing model that reflects the size of your organisation</p>
            <Link to={"/pricing-plan"}>
              <Button background={"blue"} text="Sign Up Today"/>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing