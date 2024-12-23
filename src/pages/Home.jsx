import React, { useState } from 'react'
import banner1 from '../assets/banner1.jpg'
import FreeTrailForm from '../components/FreeTrailForm'

const Home = () => {

  const [errorMessageBox, setErrorMessageBox] = useState(false)

  return (
    <div className="w-full mt-20 bg-cover h-[80vh] flex items-center justify-center" style={{backgroundImage: `url(${banner1})`}}>

      <div className='max-w-7xl mx-auto w-full flex flex-col items-center gap-5'>
        <h1 className='text-5xl text-white text-center'>Make HR Process Quick, Easy and Simple.</h1>
        <p className='text-2xl text-white mb-10 text-center'>HR Software for companies where people matter</p>
        {errorMessageBox && <div className='bg-red-100 p-5 rounded'>
        <p className='text-red-600 text-xs'>There was a problem with your submission. Errors are marked below. </p>
    </div>}
        <FreeTrailForm direction="row" transparent="white" color="yellow" setErrorMessageBox={setErrorMessageBox}/>
      </div>

    </div>
  )
}

export default Home