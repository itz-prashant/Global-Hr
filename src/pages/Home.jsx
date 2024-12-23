import React, { useState } from 'react'
import { FaChartPie, FaStar, FaRegLightbulb, FaRegChartBar, FaRoad } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import banner1 from '../assets/banner1.jpg'
import featureImg from '../assets/img1.png'
import alleyGrey from '../assets/alleyGreybg.jpg'
import img2 from '../assets/img2.png'
import FreeTrailForm from '../components/FreeTrailForm'


const Home = () => {

  const [errorMessageBox, setErrorMessageBox] = useState(false)

  return (
    <>
      <div className="w-full mt-20 bg-cover bg-center md:h-[80vh] h-full flex items-center justify-center" style={{backgroundImage: `url(${banner1})`}}>

        <div className='max-w-7xl mx-auto md:w-full sm:w-[470px] w-96 flex flex-col px-5 py-10 md:py-0 items-center sm:gap-5 gap-3'>
          <h1 className='md:text-5xl text-4xl text-white text-center'>Make HR Process Quick, Easy and Simple.</h1>
          <p className='sm:text-2xl text-lg text-white md:mb-10 mb-5 text-center'>HR Software for companies where people matter</p>
          {errorMessageBox && <div className='bg-red-100 p-5 rounded'>
          <p className='text-red-600 text-xs text-center'>There was a problem with your submission. Errors are marked below. </p>
          </div>}
          <FreeTrailForm direction="row" transparent="white" background="yellow" setErrorMessageBox={setErrorMessageBox}/>
        </div>
      </div>
      
      <section className='w-full p-10 bg-[#23a7df] flex items-center justify-center'>
        <div className='max-w-7xl mx-auto flex flex-col gap-3'>
          <h1 className='sm:text-3xl text-xl text-white text-center font-medium'>All the features you want</h1>
          <p className='text-[15px] text-white md:mb-10 mb-5 text-center'>Ready to get started?</p>
          <div className='flex md:flex-row flex-col items-center md:items-start md:justify-between gap-2 md:gap-6'>
            <div className='flex flex-col gap-5 max-w-96'>
                <div className='flex flex-row items-start gap-4'>
                  <div className='text-white mt-2'><FaChartPie size={28}/></div>
                  <div className='flex flex-col gap-2 text-white'>
                    <h3 className='text-xl font-medium'>HR analytics</h3>
                    <p className='text-sm'>Extract meaningful insight to support strategic business decisions</p>
                  </div>
                </div>
                <div className='flex flex-row items-start gap-4'>
                  <div className='text-white mt-2'><FaStar size={28}/></div>
                  <div className='flex flex-col gap-2 text-white'>
                    <h3 className='text-xl font-medium'>Performance management</h3>
                    <p className='text-sm'>Align objectives and nurture talent to unlock the potential within your organisation</p>
                  </div>
                </div>
                <div className='flex flex-row items-start gap-4'>
                  <div className='text-white mt-2'><FaRegLightbulb size={28}/></div>
                  <div className='flex flex-col gap-2 text-white'>
                    <h3 className='text-xl font-medium'>Talent management</h3>
                    <p className='text-sm'>Drive your people strategy by maximising employee engagement</p>
                  </div>
                </div>
            </div>
            <div>
              <img className='w-[360px] md:w-420 lg:w-[470px]' src={featureImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-cover bg-center bg-fixed flex items-center justify-center p-10" style={{backgroundImage: `url(${alleyGrey})`}}>
        <div className='max-w-7xl mx-auto flex flex-col gap-5'>
          <h1 className='sm:text-3xl text-2xl mb-3 text-white text-center font-medium'>Powerful yet simple</h1>
          <div className='flex md:flex-row flex-col-reverse items-center md:items-start md:justify-between gap-2 md:gap-6'>
            <div>
              <img className='w-[360px] md:w-400 lg:w-[450px]' src={img2} alt="" />
            </div>
            <div className='flex flex-col gap-5 max-w-96'>
                <div className='flex flex-row items-start gap-4'>
                  <div className='text-white mt-2'><FaRegChartBar size={30}/></div>
                  <div className='flex flex-col gap-2 text-white'>
                    <h3 className='text-xl font-medium'>Full reporting and visibilit</h3>
                    <p className='text-xs'>All the analysis tools you’ll need to better nurture and align talent with business needs.</p>
                  </div>
                </div>
                <div className='flex flex-row items-start gap-4'>
                  <div className='text-white mt-2'><IoIosLock size={30}/></div>
                  <div className='flex flex-col gap-2 text-white'>
                    <h3 className='text-xl font-medium'>Secure and reliable</h3>
                    <p className='text-xs'>Gain total peace of mind with a single, secure storage place for all your HR documents.</p>
                  </div>
                </div>
                <div className='flex flex-row items-start gap-4'>
                  <div className='text-white mt-2'><FaRoad size={30}/></div>
                  <div className='flex flex-col gap-2 text-white'>
                    <h3 className='text-xl font-medium'>Your HR, your way</h3>
                    <p className='text-xs'>The perfect fit for your growing organisation.</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full p-10 flex items-center justify-center'>
            <div className='max-w-7xl mx-auto flex flex-col items-center gap-5'>
              <h1 className='sm:text-3xl text-xl text-black/70 text-center font-medium'>Ready to get started?</h1>
              <p className='text-xs md:mb-10 text-black/60 mb-3 text-center'>Try our free 14 day trial and see if our product is right for your business. No credit card, no hassle!</p>
              {errorMessageBox && <div className='bg-red-100 p-5 rounded w-fit'>
                <p className='text-red-600 text-xs text-center'>There was a problem with your submission. Errors are marked below. </p>
              </div>}
              <FreeTrailForm labelName="Name" labelEmail="Email Address" labelCompanyName="Company Name" background="blue" color="black"  direction="row" transparent="white" setErrorMessageBox={setErrorMessageBox}/>
            </div>
      </section>
    </>
  )
}

export default Home