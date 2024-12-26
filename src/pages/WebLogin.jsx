import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const WebLogin = () => {

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const handleForm = (e)=>{
    e.preventDefault()
  }

  return (
    <div className='w-full bg-[#666666] mt-20 flex items-center justify-center'>
      <div className='max-w-7xl mx-auto w-full py-10 px-4 md:px-10 flex justify-center'>
        <div className='flex flex-col md:w-[400px] w-full bg-white'>
            <div className='py-5 bg-[#f2672e]'>
              <h1 className='text-center uppercase font-medium text-lg text-white'>Login to Your Account</h1>
            </div>
            <form onSubmit={()=>handleForm()} className='py-5 px-12 w-full flex flex-col gap-6'>
                <div className='flex items-center w-full'>
                  <span className='p-3 bg-[#666666d7] text-white'><FaUser /></span>
                  <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)} required placeholder='User Name' className='outline-none px-3 w-full text-black/65'/>
                </div>
                <div className='flex items-center w-full'>
                  <span className='p-3 bg-[#666666d7] text-white'><IoKeySharp /></span>
                  <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}  required placeholder='Password' className='outline-none px-3 w-full text-black/65'/>
                </div>
                <button className='bg-[#f2672e] text-white py-3 w-full'>LOGIN</button>
                <div className='flex items-center justify-between text-sm mt-3 text-black/55'>
                  <Link to={'https://globalhruk.com/globalhr/index.php/login/user_registration_c/index'}><span>Register</span></Link>
                  <Link to={'http://globalhruk.com/globalhr/index.php/login/forgot_pass/index'}><span>Forgot Password?</span></Link>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default WebLogin