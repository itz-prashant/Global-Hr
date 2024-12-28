import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { FaChartPie, FaStar, FaRegLightbulb, FaRegChartBar} from "react-icons/fa";
import { ImRoad } from "react-icons/im";
import { IoIosLock } from "react-icons/io";
import banner1 from '../assets/banner1.jpg'
import featureImg from '../assets/img1.png'
import alleyGrey from '../assets/alleyGreybg.jpg'
import img2 from '../assets/img2.png'
import FreeTrailForm from '../components/FreeTrailForm'


const Home = () => {

  const [errorMessageBox, setErrorMessageBox] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between children animations
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  return (
    <>
      <div className="w-full mt-20 bg-cover bg-center md:h-[90vh] h-full flex items-center justify-center" style={{backgroundImage: `url(${banner1})`}}>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] flex flex-col px-5 py-10 md:py-0 items-center sm:gap-5 gap-3'>
          <motion.h1 variants={childVariants} className='xs:text-[56px] text-[34px] text-white text-center leading-[95%]'>Make HR Process Quick, Easy and Simple.</motion.h1>
          <motion.p variants={childVariants} className='xs:text-[26px] text-[20px] text-white md:mb-14 mb-5 text-center'>HR Software for companies where people matter</motion.p>
          {errorMessageBox && <div className='bg-red-100 p-5 rounded'>
          <p className='text-red-600 text-xs text-center'>There was a problem with your submission. Errors are marked below. </p>
          </div>}
          <motion.div variants={childVariants}>
            <FreeTrailForm direction="row" text="Start Free Trial" transparent="white" background="yellow" setErrorMessageBox={setErrorMessageBox}/>
          </motion.div>
        </motion.div>
      </div>
      
      <section className='w-full py-10 bg-[#23a7df] flex items-center justify-center'>
        <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] flex flex-col gap-3'>
          <h1 className='text-[30px] text-white text-center font-medium'>All the features you want</h1>
          <p className='text-[15px] text-white md:mb-10 mb-5 text-center'>Ready to get started?</p>
          <div className='flex md:flex-row flex-col items-center md:items-start md:justify-between gap-2 md:gap-6 px-3'>
            <div className='flex flex-col gap-8 lg:w-[485px] md:-[375px] w-full'>
                <div className='flex flex-row items-start gap-5'>
                  <div className='text-white text-[32px]'><FaChartPie/></div>
                  <div className='flex flex-col gap-2 text-white'>
                    <h3 className='text-[22px] font-semibold'>HR analytics</h3>
                    <p className='text-[15px]'>Extract meaningful insight to support strategic business decisions</p>
                  </div>
                </div>
                <div className='flex flex-row items-start gap-4'>
                  <div className='text-white text-[32px]'><FaStar/></div>
                  <div className='flex flex-col gap-2 text-white'>
                    <h3 className='text-[22px] font-semibold'>Performance management</h3>
                    <p className='text-[15px]'>Align objectives and nurture talent to unlock the potential within your organisation</p>
                  </div>
                </div>
                <div className='flex flex-row items-start gap-4'>
                  <div className='text-white text-[32px]'><FaRegLightbulb/></div>
                  <div className='flex flex-col gap-2 text-white'>
                    <h3 className='text-[22px] font-semibold'>Talent management</h3>
                    <p className='text-[15px]'>Drive your people strategy by maximising employee engagement</p>
                  </div>
                </div>
            </div>
            <div>
              <img className='w-[270px] xs:w-[360px] md:w-[390px] lg:w-[455px] xl:w-[555px]' src={featureImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-cover bg-center bg-fixed flex items-center justify-center py-10" style={{backgroundImage: `url(${alleyGrey})`}}>
        <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] flex flex-col gap-5'>
          <h1 className='text-[30px] mb-3 text-white text-center font-semibold '>Powerful yet simple</h1>
          <div className='flex md:flex-row flex-col-reverse items-center md:items-start md:justify-between gap-2 md:gap-6 px-3'>
            <div>
              <img className='w-[270px] xs:w-[360px] md:w-[390px] lg:w-[455px] xl:w-[555px]' src={img2} alt="" />
            </div>
            <div className='flex flex-col gap-8 lg:w-[485px] md:w-[375px] w-full'>
                <div className='flex flex-row items-start gap-4'>
                  <div className='text-white mt-2 text-[38px]'><FaRegChartBar/></div>
                  <div className='flex flex-col gap-2 text-white'>
                    <h3 className='text-[22px] font-semibold'>Full reporting and visibilit</h3>
                    <p className='text-[15px]'>All the analysis tools you’ll need to better nurture and align talent with business needs.</p>
                  </div>
                </div>
                <div className='flex flex-row items-start gap-4'>
                  <div className='text-white mt-2 text-[38px]'><IoIosLock/></div>
                  <div className='flex flex-col gap-2 text-white'>
                    <h3 className='text-[22px] font-semibold'>Secure and reliable</h3>
                    <p className='text-[15px]'>Gain total peace of mind with a single, secure storage place for all your HR documents.</p>
                  </div>
                </div>
                <div className='flex flex-row items-start gap-4'>
                  <div className='text-white mt-2 text-[32px]'><ImRoad/></div>
                  <div className='flex flex-col gap-2 text-white'>
                    <h3 className='text-[22px] font-semibold'>Your HR, your way</h3>
                    <p className='text-[15px]'>The perfect fit for your growing organisation.</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full flex items-center justify-center mb-32 mt-10'>
            <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] flex flex-col items-center gap-5 px-3'>
              <h1 className='text-[30px] text-black/70 text-center font-semibold'>Ready to get started?</h1>
              <p className='text-[15px] md:mb-10 text-black/60 mb-3 text-center'>Try our free 14 day trial and see if our product is right for your business. No credit card, no hassle!</p>
              {errorMessageBox && <div className='bg-red-100 p-5 rounded w-fit'>
                <p className='text-red-600 text-xs text-center'>There was a problem with your submission. Errors are marked below. </p>
              </div>}
              <FreeTrailForm labelName="Name" labelEmail="Email Address" text="Start Free Trial" labelCompanyName="Company Name" background="blue" color="black"  direction="row" transparent="white" setErrorMessageBox={setErrorMessageBox}/>
            </div>
      </section>
    </>
  )
}

export default Home