import React from 'react'
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";
import tourBanner from '../assets/tourBanner.jpg'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Tour = () => {
  return (
    <>
      <div className="w-full mt-20 bg-cover bg-center md:h-[80vh] h-full flex items-center justify-center" style={{backgroundImage: `url(${tourBanner})`}}>
        <div className='max-w-7xl mx-auto w-full py-10 px-4 md:px-10 flex items-start'>
          <div className='md:w-[490px] lg:w-[550px] sm:w-80 w-60 flex flex-col gap-3 items-center'>
            <h1 className='md:text-5xl text-3xl text-white text-center'>Take a tour of Global HR.</h1>
            <p className='sm:text-xl md:text-2xl text-white md:mb-10 mb-5 text-center'>Check out or easy to use HR software features for yourself!</p>
            <Link to={"/tour"}>
              <Button background={"blue"} text="Take a tour"/>
            </Link>
          </div>
        </div>
      </div>

      <section className='w-full sm:p-10 p-5 flex items-center justify-center'>
        <div className='max-w-7xl mx-auto md:w-full w-80 sm:w-[450px] flex flex-col md:flex-row gap-12 md:gap-8'>
            <div className='flex flex-row items-start gap-5'>
              <div className='text-[#045089]'><FaWandMagicSparkles size={32}/></div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-medium text-black/70'>Access Anytime Anywhere</h3>
                <p className=' text-black/70 text-sm'>Because Global HR is hosted online, you and your employees can access Global HR 24/7 via a PC, Mac, tablet, smartphone or our dedicated iPhone app.</p>
              </div>
            </div>
            <div className='flex flex-row items-start gap-5'>
              <div className='text-[#045089]'><FaCogs size={36}/></div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-medium text-black/70'>Its Flexible</h3>
                <p className='text-black/70 text-sm'>Build an HR system that meets your needs by customising pages, fields, approval process, work patterns, forms, performance reviews, reports and more.</p>
              </div>
            </div>
        </div>
      </section>
      <section className='w-full sm:p-10 p-5 bg-[#dddddd] flex items-center justify-center'>
        <div className='max-w-7xl mx-auto bg-red-100'>
        <iframe className='sm:w-[500px] sm:h-72'
            src="https://www.youtube.com/embed/iEoDbPLqFsU"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            ></iframe>
        </div>
      </section>
    </>
  )
}

export default Tour