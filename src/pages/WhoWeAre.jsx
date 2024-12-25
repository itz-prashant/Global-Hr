import React from 'react'
import whoWeAre from '../assets/whoWeAreBanner.jpg'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const WhoWeAre = () => {
  return (
    <>
      <div className="w-full mt-20 bg-cover bg-center md:h-[80vh] h-full flex items-center justify-center" style={{backgroundImage: `url(${whoWeAre})`}}>
        <div className='max-w-7xl mx-auto w-full py-10 px-4 md:px-10 flex justify-end'>
          <div className='md:w-[450px] lg:w-[500px] sm:w-80 w-60 flex flex-col gap-3 items-center'>
            <h1 className='md:text-5xl text-3xl text-white text-center'>We strive to make our customers happy</h1>
            <p className='sm:text-xl md:text-2xl text-white text-center'>As a team we have a long track record of delivering</p>
            <p className='sm:text-xl md:text-2xl text-white md:mb-10 mb-5 text-center'>successful HR solutions on an international basis</p>
            <Link to={"/contact"}>
              <Button background={"blue"} text="Work with us"/>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhoWeAre