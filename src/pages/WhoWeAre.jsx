import React from 'react'
import whoWeAre from '../assets/whoWeAreBanner.jpg'
import whoImg1 from '../assets/who-img1.jpg'
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
      <section className='w-full sm:p-10 p-5 flex items-center justify-center'>
        <div className='max-w-7xl md:w-full w-[600px] mx-auto flex md:flex-row flex-col items-center md:items-start md:justify-between gap-8 md:gap-14'>
          <div className='w-1/2'>
            <h3 className='sm:text-2xl text-xl font-medium text-black/70 mb-3'>
              What Makes us Special?
            </h3>
            <p className=' text-black/70 text-sm'>
              Global HR is a software company specialising in business applications for Human Resources Management (HRM). Our platforms are delivered exclusively via the Internet (SaaS) and are designed for companies of all sizes. 
              <br />
              <br />
              We’ve always believed that our competitors could never emulate the passion we have for our business and the fact that we only care about one thing; client satisfaction.
              <br />
              <br />
              Our employees work in what we call a ‘Culture of Innovation’. This incredibly creative approach to working has brought us some of the best ideas we’ve ever seen, and we’re proud of what we’ve built. It all started with our company philosophy, which is clearly outlined in our employee handbook.
              <br />
              <br />
              As a team we have a long track record of delivering successful HR solutions on an international basis; first as client/server, then across the web, and now from the Cloud. We’ve worked with companies across every business sector and of every size, including some of the world’s largest, and most demanding organisations.
              </p>
          </div>
          <div className='w-1/2 flex justify-center items-start'>
            <img className='w-[360px] md:w-[420px] lg:w-[470px]' src={whoImg1} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default WhoWeAre