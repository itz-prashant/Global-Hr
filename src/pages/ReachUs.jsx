import React, { useEffect, useState } from 'react'
import { ImRoad } from "react-icons/im";
import { IoIosLock } from "react-icons/io";
import { FaHeadset } from "react-icons/fa6";
import reachUs from '../assets/reachUsBanner.jpg'
import MessageBox from '../components/MessageBox';
import Button from '../components/Button';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'motion/react';

const ReachUs = () => {

  const controls = useAnimation();
  
    const [ref, inView] = useInView({
      threshold: 0.28, 
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
          staggerChildren: 0.3,
        },
      },
    };
  
    const childVariantsRight = {
      hidden: { opacity: 0, x: 100 }, 
      visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    const [errorMessageBox, setErrorMessageBox] = useState(false)

    const [name, setName] = useState("")
    const [nameBorder, setNameBorder] = useState(false)
    const [email, setEmail] = useState("")
    const [emailBorder, setEmailBorder] = useState(false)
    const [contact, setContact] = useState("")
    const [contactBorder, setContactBorder] = useState("")
    const [website, setWebsite] = useState("")
    const [subject, setSubject] = useState("")
    const [subjectBorder, setSubjectBorder] = useState("")
    const [message, setMessage] = useState("")
    const [messageBorder, setMessageborder] = useState("")
    const [showBox, setShowBox] = useState(false)
    
    const formValidation = ()=>{
      if(name.length == 0 && name == ""){
        setNameBorder(true)
        setErrorMessageBox(true)
      }else{
        setNameBorder(false)
      }

      if(email.length == 0 && email == ""){
        setEmailBorder(true)
        setErrorMessageBox(true)
      }else{
        setEmailBorder(false)
      }

      if(contact.length == 0 && contact == ""){
        setContactBorder(true)
        setErrorMessageBox(true)
      }else{
        setContactBorder(false)
      }

      if(subject.length == 0 && subject == ""){
        setSubjectBorder(true)
        setErrorMessageBox(true)
      }else{
        setSubjectBorder(false)
      }

      if(message.length == 0 && message == ""){
        setMessageborder(true)
        setErrorMessageBox(true)
      }else{
        setMessageborder(false)
      }
    }

    const handleForm = (e)=>{
      e.preventDefault()

      if(name.length == 0 && name == "" || email.length == 0 && email == "" || contact.length == 0 && contact == "" || subject.length == 0 && subject == "" || message.length == 0 && message == ""){
        formValidation()
      }
      else{
        setShowBox(true)
        setName("")
        setEmail("")
        setContact("")
        setWebsite("")
        setSubject("")
        setMessage("")
        setErrorMessageBox(false)
      }
    }

    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
  
  return (
    <>
      <div className="w-full mt-20 bg-cover py-5 bg-center xs:h-[90vh] h-full flex items-center justify-center" style={{backgroundImage: `url(${reachUs})`}}>
        <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] mx-auto py-10 px-4 md:px-10 flex items-start'>
          <div className='md:w-[345px] lg:w-[455px] xl:w-[550px] xs:w-[360px] w-[270px] flex flex-col gap-3 items-center'>
            <h1 className='text-[34px] xs:text-[44px] text-white text-center'>Contact Us Today</h1>
          </div>
        </div>
      </div>

      <section className='w-full p-10 flex items-center justify-center'>
        <div className='xl:w-[1140px] md:w-[720px] lg:w-[940px] w-[300px] xs:w-[390px] p-4 mx-auto flex flex-col gap-8'>
          <h1 className='text-[30px] text-black/70 text-center font-semibold'>Contact Us Today</h1>
          <div className='flex md:flex-row flex-col items-center md:items-start md:justify-between gap-2 md:gap-6'>
            <motion.div variants={containerVariants} ref={ref} initial="hidden" animate={controls} className='flex flex-col gap-5 md:w-[345px] lg:w-[455px] xl:w-[550px] xs:w-[360px] w-[270px]'>
              <motion.div variants={childVariantsRight} className='flex flex-row items-start gap-4'>
                <div className='text-[#045089] mt-2  text-[36px]'><ImRoad/></div>
                <div className='flex flex-col gap-2 text-black/65'>
                  <h3 className='text-[22px] font-semibold'>Your HR, your way</h3>
                  <p >The perfect fit for your growing organisation.</p>
                </div>
              </motion.div>
              <motion.div variants={childVariantsRight} className='flex flex-row items-start gap-4'>
                <div className='text-[#045089] mt-2 text-[36px]'><IoIosLock /></div>
                <div className='flex flex-col gap-2 text-black/65'>
                  <h3 className='text-[22px] font-semibold'>Secure and reliable</h3>
                  <p >Gain total peace of mind with a single, secure storage place for all your HR documents.</p>
                </div>
              </motion.div>
              <motion.div variants={childVariantsRight} className='flex flex-row items-start gap-4'>
                <div className='text-[#045089] mt-2 text-[36px]'><FaHeadset /></div>
                <div className='flex flex-col gap-2 text-black/65'>
                  <h3 className='text-[22px] font-semibold'>Excellent Support</h3>
                  <p >Align objectives and nurture talent to unlock the potential within your organisation.</p>
                </div>
              </motion.div>
            </motion.div>
            {
              !showBox ? <form onSubmit={handleForm} className="flex flex-col gap-3  justify-center md:w-[345px] lg:w-[455px] xl:w-[550px] xs:w-[360px] w-[270px] mt-4 md:mt-0">

              {errorMessageBox && <div className='bg-red-100 p-5 rounded'>
                <p className='text-red-600 text-xs text-center'>There was a problem with your submission. Errors are marked below. </p>
              </div>}

              <div className='flex flex-col gap-2 w-full'>
                  <input type="text" placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)} className={`text-black/50 border border-black/30 focus:border-blue-800 ${nameBorder ? "border-red-800" : ""} px-3 h-12 outline-none rounded`}/>

                  {nameBorder && <p className={`text-xs text-red-700 font-medium`}>This field cannot be blank.</p> }
              </div>
      
              <div className='flex flex-col gap-2 w-full'>
                  <input type="text" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} className={`text-black/50 border border-black/30 focus:border-blue-800 ${emailBorder ? "border-red-800" : ""} px-3 h-12 outline-none rounded`}/>
      
                  {emailBorder && <p className={`text-xs text-red-700 font-medium`}>This field cannot be blank.</p>}
              </div>
      
              <div className='flex flex-col gap-2 w-full'>
                  <input type="text" placeholder='Contact number' value={contact} onChange={(e)=> setContact(e.target.value)} className={`text-black/50 border border-black/30 focus:border-blue-800 ${contactBorder ? "border-red-800" : ""} px-3 h-12 outline-none rounded`}/>

                  {contactBorder && <p className={`text-xs text-red-700 font-medium`}>This field cannot be blank.</p>}
              </div>

              <div className='flex flex-col gap-2 w-full'>
                  <input type="text" placeholder='Website' value={website} onChange={(e)=> setWebsite(e.target.value)} className={`text-black/50 border border-black/30 focus:border-blue-800 px-3 h-12 outline-none rounded`}/>
              </div>

              <div className='flex flex-col gap-2 w-full'>
                  <input type="text" placeholder='Subject' value={subject} onChange={(e)=> setSubject(e.target.value)} className={`text-black/50 border border-black/30 focus:border-blue-800 ${subjectBorder ? "border-red-800" : ""} px-3 h-12 outline-none rounded`}/>

                  {subjectBorder && <p className={`text-xs text-red-700 font-medium`}>This field cannot be blank.</p>}
              </div>

              <div className='flex flex-col gap-2 w-full'>
                  <textarea placeholder='Message' value={message} onChange={(e)=> setMessage(e.target.value)} className={`text-black/50 border h-40 border-black/30 focus:border-blue-800 ${messageBorder ? "border-red-800" : ""} px-3 h-12 outline-none rounded`}/>

                  {messageBorder && <p className={`text-xs text-red-700 font-medium`}>This field cannot be blank.</p>}
              </div>
      
              <Button background={"blue"} text="Send"/>
              
              </form> : <MessageBox />
            }
          </div>
        </div>
      </section>      
    </>
  )
}

export default ReachUs