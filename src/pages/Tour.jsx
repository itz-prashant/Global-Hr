import React, { useEffect} from 'react'
import { useInView } from 'react-intersection-observer';
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";
import tourBanner from '../assets/tourBanner.jpg'
import tourImg1 from '../assets/tour-img1.png'
import tourImg2 from '../assets/tour-img2.png'
import tourImg3 from '../assets/tour-img3.png'
import tourImg4 from '../assets/tour-img4.png'
import tourImg5 from '../assets/tour-img5.png'
import atAGlance from '../assets/At-a-glance.png'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'motion/react';


const ScrollSection = ({ children, threshold }) => {

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold, // Different threshold for each section
    triggerOnce: true, // Trigger only once
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
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

const Tour = () => {

  const childVariantsRight = {
    hidden: { opacity: 0, x: 100 }, 
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const childVariantsLeft = {
    hidden: { opacity: 0, x: -100 }, 
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <>
      <div className="w-full mt-20 bg-cover py-5 bg-center xs:h-[90vh] h-full flex items-center justify-center" style={{backgroundImage: `url(${tourBanner})`}}>
        <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] py-10 px-4 md:px-10 flex items-start'>
          <div className='md:w-[345px] lg:w-[455px] xl:w-[550px] xs:w-[360px] w-[270px] flex flex-col gap-3 items-center'>
            <h1 className='text-[34px] xs:text-[44px] text-white text-center'>Take a tour of Global HR.</h1>
            <p className='text-[22px] text-white md:mb-10 mb-5 text-center'>Check out or easy to use HR software features for yourself!</p>
            <Link to={"/tour"}>
              <Button background={"blue"} text="Take a tour"/>
            </Link>
          </div>
        </div>
      </div>

      <section className='w-full sm:py-20 py-10 px-5 flex items-center justify-center'>
        <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] flex flex-col md:flex-row gap-12 md:gap-8'>
            <div className='flex flex-row items-start gap-5'>
              <div className='text-[#045089]'><FaWandMagicSparkles size={32}/></div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-medium text-black/70'>Access Anytime Anywhere</h3>
                <p className=' text-black/70 text-[15px]'>Because Global HR is hosted online, you and your employees can access Global HR 24/7 via a PC, Mac, tablet, smartphone or our dedicated iPhone app.</p>
              </div>
            </div>
            <div className='flex flex-row items-start gap-5'>
              <div className='text-[#045089]'><FaCogs size={36}/></div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-medium text-black/70'>Its Flexible</h3>
                <p className='text-black/70 text-[15px]'>Build an HR system that meets your needs by customising pages, fields, approval process, work patterns, forms, performance reviews, reports and more.</p>
              </div>
            </div>
        </div>
      </section>
      <section className='w-full sm:p-10 p-5 bg-[#dddddd] flex items-center justify-center'>
        <div className='max-w-7xl mx-auto'>
        <iframe className='sm:w-[500px] sm:h-72'
            src="https://www.youtube.com/embed/iEoDbPLqFsU"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            ></iframe>
        </div>
      </section>
      <section className='w-full sm:p-10 p-5 flex items-center justify-center'>
        <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] mx-auto flex md:flex-row flex-col items-center md:items-start md:justify-between gap-8 md:gap-14 p-4'>
            <div className='md:w-[60%]'>
              <ScrollSection threshold={0.2}>
                <motion.h3 variants={childVariantsRight} className='text-[28px] font-semibold text-black/70 mb-3 leading-[95%]'>
                Save time, work smarter
                </motion.h3>
                <motion.p variants={childVariantsRight} className=' text-black/70 text-[15px]'>
                  Global HR is a leading author of integrated business management software. We combine our innovative software with practical knowledge and experience to deliver you an HR & payroll solution that’s exactly right for your business and your people. 
                  <br />
                  <br />
                  There’s no need to start from scratch, our solutions offer standard functionality that has been developed over many years of best practice. Combined with powerful workflow tools and the ability to configure to your needs, HR solutions from Access deliver unparalleled results.
                  <br />
                  <br />
                  The People module is the powerhouse of your HR operations. It sits at the heart of your Global HR, providing everything needed to make HR management simpler and more effective.
                  <br />
                  <br />
                  With embedded workflow, automatic alerts, advanced security and easy configuration options, the system reflects our experience of working with companies, large and small, to design HR systems that really work.
                </motion.p>
              </ScrollSection>  
            </div>
            <div className='flex md:w-[40%] justify-center flex-shrink-0 items-start'>
              <img className='w-[270px] xs:w-[360px] md:w-[390px] lg:w-[455px] xl:w-[555px]' src={tourImg1} alt="" />
            </div>
        </div>
      </section>
      <section className='w-full sm:p-10 p-5 bg-[#f2672e] flex items-center justify-center'>
        <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] mx-auto flex md:flex-row flex-col-reverse items-center md:items-start md:justify-between gap-8 md:gap-14 p-4'>
            <div className='md:w-[40%] flex-shrink-0 flex justify-center items-start'>
              <img className='w-[270px] xs:w-[360px] md:w-[390px] lg:w-[455px] xl:w-[555px]' src={tourImg2} alt="" />
            </div>
            <div className='md:w-[60%]'>
              <ScrollSection threshold={0.28}>
                <motion.h3 variants={childVariantsLeft} className='text-[28px] leading-[95%] font-semibold text-white mb-3'>
                Manage Absence/Holiday the Easy Way
                </motion.h3>
                <motion.p variants={childVariantsLeft} className=' text-white text-[15px]'>
                Do you employ staff on a part-time basis? Do you provide flexible working, have staff on varying terms and conditions or working outside of the country?
                  <br />
                  <br />
                  There is a lot more to managing absence and holidays these days, but the good news is that Global HR can take care of the complexities and free up time and resource to facilitate strategic HR.
                  <br />
                  <br />
                  Global HR’s fully integrated absence module makes it simpler to manage absences, and generate the reports your business needs.
                  <br />
                  <br />
                  You’ll benefit from greater visibility over sicknesses, automatic calculation of holiday entitlements, smoother approval processes, automatic alerts and a host of other smart features that will save you time and put you in control.
                  </motion.p>
                </ScrollSection>
            </div>
        </div>
      </section>
      <section className='w-full sm:p-10 p-5 flex items-center justify-center'>
        <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] mx-auto flex md:flex-row flex-col items-center justify-center gap-4'>
          <h1 className='text-[#045089] text-[22px] text-center font-semibold'>Is Global HR right for your Organisation? Buy it now.</h1>
          <Link to={"/pricing-plan"}>
            <button className='py-2 px-10 border border-[#045089] text-[#045089] rounded-full text-lg hover:bg-[#045089] hover:text-white transition-all duration-500'>Pricing</button>
          </Link>
        </div>
      </section>
      <section className='w-full sm:p-10 p-5 flex items-center bg-[#28a9e3] justify-center'>
        <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] mx-auto flex md:flex-row flex-col items-center md:items-start md:justify-between gap-8 md:gap-14 p-4'>
            <div className='md:w-[60%]'>
              <ScrollSection threshold={0.5}>
                <motion.h3 variants={childVariantsRight} className='text-[28px] leading-[95%] font-semibold text-white mb-3'>
                Streamline performance reviews
                </motion.h3>
                <motion.p variants={childVariantsRight} className=' text-white text-[15px]'>
                When it comes to performance management, whether your employees have an annual appraisal, a regular assessment journal or participate in a 360˚ review , Global HR will facilitate the entire process enabling employees and their managers to record the details online.
                  <br />
                  <br />
                  With prompts for completion and integration with your competency frameworks and organisational goals Global HR will guide each person through the process and help manage outcomes that affect ongoing development or impact pay.
                  <br />
                  <br />
                  Easily manage any kind of performance review, from straight-forward yearly appraisals to multi-stage reviews throughout the year.
                  <br />
                  <br />
                  You’ll have the freedom to set up the forms you need – and choose who should be involved in each step of your process. It’s an integrated, easy-to-manage, and much more satisfying approach for all of your employees.
                  </motion.p>
                </ScrollSection>
            </div>
            <div className='md:w-[40%] flex flex-shrink-0 justify-center items-start'>
              <img className='w-[270px] xs:w-[360px] md:w-[390px] lg:w-[455px] xl:w-[555px]' src={tourImg3} alt="" />
            </div>
        </div>
      </section>
      <section className='w-full sm:p-10 p-5 flex items-center justify-center'>
        <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] mx-auto flex md:flex-row flex-col-reverse items-center md:items-start md:justify-between gap-8 md:gap-14 p-4'>
            <div className='md:w-[40%] flex flex-shrink-0 justify-center items-start'>
              <img className='w-[270px] xs:w-[360px] md:w-[390px] lg:w-[455px] xl:w-[555px]' src={tourImg4} alt="" />
            </div>
            <div className='md:w-[60%]'>
              <ScrollSection threshold={0.7}>
                <motion.h3 variants={childVariantsLeft} className='text-[28px] leading-[95%] font-semibold text-black/70 mb-3'>
                Make time tracking a breeze
                </motion.h3>
                <motion.p variants={childVariantsLeft} className=' text-black/70 text-[15px]'>
                For many organisations, timesheets are an essential business tool, helping to inform resourcing and drive billing. However, they can take up way too much of everyone’s time.
                  <br />
                  <br />
                  Global HR’s integrated Time module helps streamline every aspect of time recording, from set up and distribution of timesheets to authorisation and reporting.
                  </motion.p>
              </ScrollSection>
            </div>
        </div>
      </section>
      <section className='w-full sm:p-10 p-5 flex items-center bg-[#28b779] justify-center'>
        <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] mx-auto flex md:flex-row flex-col items-center md:items-start md:justify-between gap-8 md:gap-14 p-4'>
            <div className='md:w-[60%]'>
              <h3 className='text-[28px] leading-[95%] font-semibold text-white mb-3'>
              Improve Recruitment
              </h3>
              <p className=' text-white text-[15px]'>
              In-recruiting helps support your complete recruitment process, from posting the latest job vacancies, through applicant tracking, to making the final job offer.
                <br />
                <br />
                It connects you to the leading free job boards, helps you capitalise on social media, and streamlines candidate selection, so you can find the people you need faster and more effectively.
              </p>
            </div>
            <div className='md:w-[40%] flex flex-shrink-0 justify-center items-start'>
              <img className='w-[270px] xs:w-[360px] md:w-[390px] lg:w-[455px] xl:w-[555px]' src={tourImg5} alt="" />
            </div>
        </div>
      </section>
      <section className='w-full sm:p-10 p-5 flex items-center justify-center'>
        <div className='max-w-7xl md:w-full w-[450px] mx-auto flex md:flex-row flex-col-reverse items-center md:items-start md:justify-between gap-8 md:gap-14 p-4'>
            <div className='md:w-[40%] flex flex-shrink-0 justify-center items-start'>
              <img className='w-[270px] xs:w-[290px] md:w-[220px] lg:w-[220px]' src={atAGlance} alt="" />
            </div>
            <div className='md:w-[60%] flex flex-grow flex-col'>
              <h3 className='text-[28px] leading-[95%] font-semibold text-black/70 mb-3'>
              At a glance
              </h3>
              <p className='text-black/70 text-[15px]'>
              Global HR solutions support every aspect of your HR strategy from recruitment and on boarding right through to leaves, attendance, talent, payment and reward. Unite, integrate and optimise all of your people processes and maximise the success of your employees.
                <br />
                <br />
                Global HR is our fully configurable and powerful HR and talent management system. Browser based, deployed on premise or in the cloud and integrated with payroll or stand alone, it offers a range of modules to suit your every need.
                <br />
                <br />
                At the heart of the HR system is the ability to manage all of your key people information in one place, including:
                </p>
                <ul className='text-black/70 text-sm ml-10 flex flex-col gap-2 mt-3 list-disc'>
                  <li>Personal details – including diversity, work permits, employment checks etc</li>
                  <li>Job and salary history – including multi-post and multi-currency capability</li>
                  <li>Employment details – contracts and T&Cs</li>
                  <li>Disciplinary and grievance</li>
                  <li>Skills and competencies – linked with training and performance management</li>
                  <li>Absence and holidays – work patterns, part-time calculations, holiday rules, TOIL, flexitime</li>
                  <li>Benefit, Overtime and fleet management</li>
                  <li>Salary modelling</li>
                  <li>Auto-enrolment process management</li>
                  <li>Flexible organisation structures</li>
                </ul>
            </div>
        </div>
      </section>
    </>
  )
}

export default Tour