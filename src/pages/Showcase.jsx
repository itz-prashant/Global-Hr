import React from 'react'
import showcaseBanner from '../assets/showcase-banner.jpg'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Showcase = () => {
  return (
    <>
      <div className="w-full mt-20 bg-cover bg-center sm:h-[80vh] h-full flex items-center justify-center" style={{backgroundImage: `url(${showcaseBanner})`}}>
        <div className='max-w-7xl mx-auto w-full py-10 px-4 md:px-10 flex items-center justify-center'>
          <div className='flex flex-col gap-3 items-center md:w-[600px] w-[450px]'>
            <h1 className='md:text-5xl text-3xl text-white text-center'>Global HR : Cloud based complete HR Solution</h1>
            <p className='sm:text-xl md:text-2xl text-white md:mb-10 mb-5 text-center'>Everything a company needs to manage its most important asset its Human Resource</p>
            <Link to={"/showcase"}>
              <Button background={"blue"} text="Product Overview"/>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Showcase