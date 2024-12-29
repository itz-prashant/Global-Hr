import React, { useEffect, useState } from 'react'
import pricingBanner from '../assets/pricingBanner.jpg'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import PricingPlanCard from '../components/PricingPlanCard'
import { pricingPlanDatas } from '../utils/data'
import FreeTrailForm from '../components/FreeTrailForm'

const Pricing = () => {

  const [errorMessageBox, setErrorMessageBox] = useState(false)

  useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  return (
    <>
      <div className="w-full mt-20 bg-cover bg-center py-5 xs:h-[90vh] h-full flex items-center justify-center" style={{backgroundImage: `url(${pricingBanner})`}}>
        <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] py-10 px-4 md:px-10 flex items-center justify-center'>
          <div className='flex flex-col gap-3 items-center lg:w-[600px] w-[450px]'>
            <h1 className='text-[34px] xs:text-[44px] text-white text-center leading-[95%] mb-2'>Packages for all startup sizes</h1>
            <p className='text-[22px] text-white md:mb-10 mb-5 text-center leading-[95%]'>Global HR has created an affordable pricing model that reflects the size of your organisation</p>
            <Link to={"/pricing-plan"}>
              <Button background={"blue"} text="Sign Up Today"/>
            </Link>
          </div>
        </div>
      </div>

      <section className='w-full sm:p-10 p-5 flex items-center justify-center'>
        <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] mx-auto flex flex-col gap-4 md:py-10 px-2 py-8'>
          <h1 className='text-[28px] text-black/70 text-center font-semibold leading-[95%]'>Packages for all startup sizes</h1>
          <div className='flex md:flex-row flex-col gap-5 justify-between text-[15px]'>
            <p className='text-black/70 md:w-1/2 w-full'>Global HR has created an affordable pricing model that reflects the size of your organisation. Our charges are transparent and based on the functions you wish to use as well as the number of staff you employ.</p>
            <p className='text-black/70 md:w-1/2 w-full'>We also offer a free 30 days trial to make sure that you are confident in the system before you part with any money.</p>
          </div>
          <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 mt-4'>
              {
                pricingPlanDatas.map(data=>(
                  <PricingPlanCard key={data.name} data={data}/>
                ))
              }
          </div>
        </div>
      </section>  

      <section className='w-full p-10 flex items-center justify-center mb-10'>
        <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] mx-auto flex flex-col items-center gap-5'>
          <h1 className='text-[30px] leading-[95%] text-black/70 text-center font-semibold'>Is Global HR right for your business?</h1>
          <p className='text-[15px] md:mb-10 text-black/60 mb-3 text-center'>Contact us for a personalized tour.</p>
              {errorMessageBox && <div className='bg-red-100 p-5 rounded w-fit'>
            <p className='text-red-600 text-xs text-center'>There was a problem with your submission. Errors are marked below. </p>
           </div>}
              <FreeTrailForm background="blue" color={"black"} text="Send" direction="row" transparent="white" setErrorMessageBox={setErrorMessageBox}/>
        </div>
      </section> 
    </>
  )
}

export default Pricing