import React, { useEffect } from 'react'
import { IoMdGitCompare } from "react-icons/io";
import { FaRandom, FaQuestionCircle } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import showcaseBanner from '../assets/showcase-banner.jpg'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import cardData from '../utils/data';
import CenterCard from '../components/centerCard';

const Showcase = () => {

  useEffect(()=>{
      window.scrollTo(0,0)
    },[])

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
      <section className='w-full sm:p-10 p-5 flex items-center justify-center'>
          <div className='max-w-7xl mx-auto md:w-full w-96 sm:w-[450px] flex flex-col gap-4'>
              <h1 className='sm:text-3xl text-xl text-black/65 text-center font-medium'>Offering one stop HR solution for small and medium businesses.</h1>
              <p className='text-[15px] text-black/65 md:mb-10 mb-5 text-center'>Customize Global HR to suit your needs and reflect your brand.</p>
              <div className='grid md:grid-cols-2 grid-cols-1 gap-5 justify-between'>
              <div className='flex flex-row items-start gap-5'>
                <div className='text-[#045089]'><IoMdGitCompare size={32}/></div>
                  <div className='flex flex-col gap-2'>
                      <h3 className='text-2xl font-medium text-black/70'>System Implementation</h3>
                      <p className=' text-black/70 text-sm'>Our experts will ensure People is up and running smoothly for your business from day one, so you can start making impact right away.</p>
                  </div>
                </div>
                <div className='flex flex-row items-start gap-5'>
                  <div className='text-[#045089]'><FaRandom size={32}/></div>
                  <div className='flex flex-col gap-2'>
                    <h3 className='text-2xl font-medium text-black/70'>Free Switching Service</h3>
                    <p className='text-black/70 text-sm'>Our Free Switching Service makes it easy to migrate your HR data from your old system over to People, without any added hassle.</p>
                  </div>
                </div>
                <div className='flex flex-row items-start gap-5'>
                  <div className='text-[#045089]'><MdGroups size={36}/></div>
                  <div className='flex flex-col gap-2'>
                      <h3 className='text-2xl font-medium text-black/70'>Online or On-Site Training</h3>
                      <p className=' text-black/70 text-sm'>If you want to get your whole workforce up to speed with People at the same time, our experts can deliver training for your workforce either online or on-site.</p>
                  </div>
                </div>
                <div className='flex flex-row items-start gap-5'>
                  <div className='text-[#045089]'><FaQuestionCircle size={36}/></div>
                  <div className='flex flex-col gap-2'>
                    <h3 className='text-2xl font-medium text-black/70'>Full service support desk</h3>
                    <p className='text-black/70 text-sm'>Our office hours (9am – 5pm) make it easy to find instant help, even if you have offices outside the UK.</p>
                  </div>
                </div>
              </div>
          </div>
      </section>
      <section className='w-full sm:p-10 p-5 flex items-center justify-center'>
          <div className='max-w-7xl mx-auto md:w-full w-[400px] sm:w-[500px] flex flex-col items-center gap-4'>
              <h1 className='sm:text-3xl text-xl text-black/65 text-center font-medium'>Work Smarter, Work Better.</h1>
              <p className='text-[15px] text-black/65 md:mb-10 mb-5 '>
                GlobalHR is a cloud-based Human Resources soluton that provides businesses with an easy way to arrange their day-to-day HR needs.
                <br />
                <br />
                We understand that for many companies, managing their HR with spreadsheets can sometimes get in the way of the important stuff, like growing their business.
                </p>
              <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-evenly grid-cols-1 gap-6'> 
                  {
                    cardData.map((data)=>(
                      <CenterCard key={data.name} image={data.image} name={data.name}/>
                    ))
                  }
              </div>
          </div>
      </section>
    </>
  )
}

export default Showcase