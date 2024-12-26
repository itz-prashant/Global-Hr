import React, { useEffect } from 'react'
import { FaWandMagicSparkles } from "react-icons/fa6";
import whoWeAre from '../assets/whoWeAreBanner.jpg'
import whoImg1 from '../assets/who-img1.jpg'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import Accordian from '../components/Accordian';
import { accordianDatas } from '../utils/data';

const WhoWeAre = () => {

  useEffect(()=>{
      window.scrollTo(0,0)
    },[])

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

      <section className='w-full sm:p-10 p-5 flex items-center justify-center bg-[#cccccc]'>
        <div className='max-w-7xl mx-auto md:w-full w-96 sm:w-[450px] flex flex-col gap-8'>
          <h1 className='sm:text-4xl text-3xl text-black/65 text-left font-medium'>What we think</h1>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-8 justify-between'>
            <div className='flex flex-row items-start gap-3'>
              <div className='bg-[#045089] h-16 w-16 flex-shrink-0 flex items-center justify-center rounded-full text-white'><FaWandMagicSparkles size={30}/></div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-medium text-black/65'>HR SHOULD BE A STRATEGIC PART OF BUSINESS</h3>
                <p className=' text-black/65 text-sm'>HR has the power to solve or improve 95% of business issues. That’s why we believe HR professionals should be considered strategic business partners, instead of disconnected paper-pushers.</p>
              </div>
            </div>
            <div className='flex flex-row items-start gap-5'>
              <div className='bg-[#045089] h-16 w-16 flex-shrink-0 flex items-center justify-center rounded-full text-white'><FaWandMagicSparkles size={30}/></div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-medium text-black/65'>HR SHOULD BE FLEXIBLE</h3>
                <p className='text-black/65 text-sm'>We believe HR processes should be flexible enough to cater for the demands of an ever-growing workforce – and that means scalable technology designed for a modern age of mobile technology.</p>
              </div>
            </div>
            <div className='flex flex-row items-start gap-5'>
              <div className='bg-[#045089] h-16 w-16 flex-shrink-0 flex items-center justify-center rounded-full text-white'><FaWandMagicSparkles size={36}/></div>
              <div className='flex flex-col gap-2'>
                  <h3 className='text-2xl font-medium text-black/65'>HR SHOULD BE EXPERT-LED</h3>
                  <p className=' text-black/65 text-sm'>Human Resources is constantly buffeted with red tape and legislation changes. In our experience, the best HR professionals are those who continue to develop their industry knowledge and expertise..</p>
              </div>
            </div>
            <div className='flex flex-row items-start gap-5'>
              <div className='bg-[#045089] h-16 w-16 flex-shrink-0 flex items-center justify-center rounded-full text-white'><FaWandMagicSparkles size={36}/></div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-medium text-black/65'>HR SHOULD BE RESOURCEFUL</h3>
                <p className='text-black/65 text-sm'>Great HR departments should be a company resource – not a drain on company resources. That’s why we developed our HR software to be affordable and easy-to-use with no need for internal I.T. support.</p>
              </div>
            </div>
            <div className='flex flex-row items-start gap-5'>
              <div className='bg-[#045089] h-16 w-16 flex-shrink-0 flex items-center justify-center rounded-full text-white'><FaWandMagicSparkles size={36}/></div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-medium text-black/65'>HR SHOULD BE FUN</h3>
                <p className='text-black/65 text-sm'>Many people see Human Resources as a dull, admin-heavy industry. We think otherwise. Just because HR professionals have a tough job to do, why shouldn’t they find a way to have fun doing it?</p>
              </div>
            </div>
            <div className='flex flex-row items-start gap-5'>
              <div className='bg-[#045089] h-16 w-16 flex-shrink-0 flex items-center justify-center rounded-full text-white'><FaWandMagicSparkles size={36}/></div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-medium text-black/65'>HR SHOULD BE PEOPLE-FOCUSED</h3>
                <p className='text-black/65 text-sm'>Human Resources would not exist if your company did not employ people. That’s why we believe HR should focus less on time-consuming paperwork, and focus more on the people that make your company tick.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full sm:p-10 p-5 flex items-center justify-center'>
        <div className='max-w-7xl mx-auto md:w-full w-96 sm:w-[450px] flex flex-col gap-4'>
          <h1 className='sm:text-3xl text-xl text-black/65 text-center font-medium'>Why Global HR</h1>
          <p className='text-[15px] text-black/65 md:mb-10 mb-5 text-center'>Global HR is a web based platform that manages employee data and the main processes they are involved in. It stores personal data, roles and competencies providing the necessary features to handle performance evaluations and corporate learning management.</p>
          <div className='flex flex-col gap-3'>
            {
              accordianDatas.map((data,index)=>(
                <Accordian key={data.title} data={data} index={index}/>
              ))
            }
          </div>
        </div>
      </section>      
    </>
  )
}

export default WhoWeAre