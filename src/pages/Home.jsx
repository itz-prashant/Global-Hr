import React, { useState } from 'react'
import banner1 from '../assets/banner1.jpg'
import FreeTrailForm from '../components/FreeTrailForm'

const Home = () => {

  const [errorMessageBox, setErrorMessageBox] = useState(false)

  return (
    <div className="w-full mt-20 bg-cover bg-center md:h-[80vh] h-full flex items-center justify-center" style={{backgroundImage: `url(${banner1})`}}>

      <div className='max-w-7xl mx-auto md:w-full sm:w-[470px] w-96 flex flex-col px-5 py-10 md:py-0 items-center sm:gap-5 gap-3'>
        <h1 className='md:text-5xl text-4xl text-white text-center'>Make HR Process Quick, Easy and Simple.</h1>
        <p className='sm:text-2xl text-lg text-white md:mb-10 mb-5 text-center'>HR Software for companies where people matter</p>
        {errorMessageBox && <div className='bg-red-100 p-5 rounded'>
        <p className='text-red-600 text-xs text-center'>There was a problem with your submission. Errors are marked below. </p>
    </div>}
        <FreeTrailForm direction="row" transparent="white" color="yellow" setErrorMessageBox={setErrorMessageBox}/>
      </div>

    </div>
  )
}

export default Home