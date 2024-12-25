import React from 'react'
import reachUs from '../assets/reachUsBanner.jpg'

const ReachUs = () => {
  return (
    <div className="w-full mt-20 bg-cover bg-center md:h-[80vh] h-full flex items-center justify-center" style={{backgroundImage: `url(${reachUs})`}}>
      <div className='max-w-7xl mx-auto w-full py-10 px-4 md:px-10 flex items-start'>
        <div className='md:w-[490px] lg:w-[550px] sm:w-80 w-60 flex flex-col gap-3 items-center'>
          <h1 className='md:text-5xl text-3xl text-white text-center'>Contact Us Today</h1>
        </div>
      </div>
    </div>
  )
}

export default ReachUs