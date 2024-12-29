import React, { useEffect } from 'react'
import { FaWandMagicSparkles } from "react-icons/fa6";
import whoWeAre from '../assets/whoWeAreBanner.jpg'
import whoImg1 from '../assets/who-img1.jpg'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import Accordian from '../components/Accordian';
import { accordianDatas } from '../utils/data';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'motion/react';

const WhoWeAre = () => {

  const controls = useAnimation();
  
    const [ref, inView] = useInView({
      threshold: 0.35, 
      triggerOnce: true, 
    });
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [inView, controls]);
  
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
      <div className="w-full mt-20 bg-cover py-5 bg-center xs:h-[90vh] h-full flex items-center justify-center" style={{backgroundImage: `url(${whoWeAre})`}}>
        <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] py-10 px-4 md:px-10 flex md:justify-end justify-center'>
          <div className='md:w-[345px] lg:w-[455px] xl:w-[550px] xs:w-[360px] w-[270px] flex flex-col gap-4 items-center md:pl-10'>
            <h1 className='text-[34px] xs:text-[44px] leading-[95%] text-white text-center'>We strive to make our customers happy</h1>
            <p className='text-[22px] leading-[95%] text-white text-center'>As a team we have a long track record of delivering successful HR solutions on an international basis</p>
            <Link to={"/contact"}>
              <Button background={"blue"} text="Work with us"/>
            </Link>
          </div>
        </div>
      </div>
      <section className='w-full sm:p-10 p-5 flex items-center justify-center'>
        <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] mx-auto flex md:flex-row flex-col items-center md:items-start md:justify-between gap-8 md:gap-14 p-4'>
          <div className='md:w-[60%]'>
            <h3 className='text-[28px] font-semibold text-black/70 mb-3 leading-[95%]'>
              What Makes us Special?
            </h3>
            <p className=' text-black/70 text-[15px]'>
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
          <div className='flex md:w-[40%] justify-center flex-shrink-0 items-start'>
            <img className='w-[270px] xs:w-[360px] md:w-[390px] lg:w-[455px] xl:w-[555px]' src={whoImg1} alt="" />
          </div>
        </div>
      </section>

      <section className='w-full sm:p-10 p-5 flex items-center justify-center bg-[#cccccc]'>
        <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] p-4 flex flex-col gap-8'>
          <h1 className='text-[30px] text-black/65 text-left font-semibold'>What we think</h1>
          <motion.div variants={containerVariants} ref={ref} initial="hidden" animate={controls} className='grid md:grid-cols-2 grid-cols-1 gap-8 justify-between'>
            <motion.div variants={childVariants} className='flex flex-row items-start gap-3'>
              <div className='bg-[#045089] h-16 w-16 flex-shrink-0 flex items-center justify-center rounded-full text-white'><FaWandMagicSparkles size={30}/></div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-[22px] leading-[95%] font-semibold text-black/65'>HR SHOULD BE A STRATEGIC PART OF BUSINESS</h3>
                <p className=' text-black/65 text-[15px]'>HR has the power to solve or improve 95% of business issues. That’s why we believe HR professionals should be considered strategic business partners, instead of disconnected paper-pushers.</p>
              </div>
            </motion.div>
            <motion.div variants={childVariants} className='flex flex-row items-start gap-5'>
              <div className='bg-[#045089] h-16 w-16 flex-shrink-0 flex items-center justify-center rounded-full text-white'><FaWandMagicSparkles size={30}/></div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-[22px] leading-[95%] font-semibold text-black/65'>HR SHOULD BE FLEXIBLE</h3>
                <p className='text-black/65 text-[15px]'>We believe HR processes should be flexible enough to cater for the demands of an ever-growing workforce – and that means scalable technology designed for a modern age of mobile technology.</p>
              </div>
            </motion.div>
            <motion.div variants={childVariants} className='flex flex-row items-start gap-5'>
              <div className='bg-[#045089] h-16 w-16 flex-shrink-0 flex items-center justify-center rounded-full text-white'><FaWandMagicSparkles size={36}/></div>
              <div className='flex flex-col gap-2'>
                  <h3 className='text-[22px] leading-[95%] font-semibold text-black/65'>HR SHOULD BE EXPERT-LED</h3>
                  <p className=' text-black/65 text-[15px]'>Human Resources is constantly buffeted with red tape and legislation changes. In our experience, the best HR professionals are those who continue to develop their industry knowledge and expertise..</p>
              </div>
            </motion.div>
            <motion.div variants={childVariants} className='flex flex-row items-start gap-5'>
              <div className='bg-[#045089] h-16 w-16 flex-shrink-0 flex items-center justify-center rounded-full text-white'><FaWandMagicSparkles size={36}/></div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-[22px] leading-[95%] font-semibold text-black/65'>HR SHOULD BE RESOURCEFUL</h3>
                <p className='text-black/65 text-[15px]'>Great HR departments should be a company resource – not a drain on company resources. That’s why we developed our HR software to be affordable and easy-to-use with no need for internal I.T. support.</p>
              </div>
            </motion.div>
            <motion.div variants={childVariants} className='flex flex-row items-start gap-5'>
              <div className='bg-[#045089] h-16 w-16 flex-shrink-0 flex items-center justify-center rounded-full text-white'><FaWandMagicSparkles size={36}/></div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-[22px] leading-[95%] font-semibold text-black/65'>HR SHOULD BE FUN</h3>
                <p className='text-black/65 text-[15px]'>Many people see Human Resources as a dull, admin-heavy industry. We think otherwise. Just because HR professionals have a tough job to do, why shouldn’t they find a way to have fun doing it?</p>
              </div>
            </motion.div>
            <motion.div variants={childVariants} className='flex flex-row items-start gap-5'>
              <div className='bg-[#045089] h-16 w-16 flex-shrink-0 flex items-center justify-center rounded-full text-white'><FaWandMagicSparkles size={36}/></div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-[22px] leading-[95%] font-semibold text-black/65'>HR SHOULD BE PEOPLE-FOCUSED</h3>
                <p className='text-black/65 text-[15px]'>Human Resources would not exist if your company did not employ people. That’s why we believe HR should focus less on time-consuming paperwork, and focus more on the people that make your company tick.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className='w-full sm:p-10 p-5 flex items-center justify-center'>
        <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] p-4 flex flex-col gap-4'>
          <h1 className='text-[30px] text-black/65 text-center font-semibold'>Why Global HR</h1>
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