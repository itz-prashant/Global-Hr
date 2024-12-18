import React, { useState } from 'react'

const FreeTrailForm = ({labelName, labelEmail, labelCompanyName, color, direction}) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [validation, setValidation] = useState(false)
    const [showBox, setShowBox] = useState(false)


    const handleForm = (e)=>{
        e.preventDefault()
        if(email.length == 0 && email == ""){
            setValidation(true)
        }else{
            setValidation(false)
            setShowBox(true)
            setName("")
            setEmail("")
            setCompanyName("")
        }
    }

  return (
    !showBox ? <form onSubmit={handleForm} className={`flex ${direction == "row" ? "flex-row" : "flex-col gap-2"}`}>

        {labelName && <label className='text-white/65'>{labelName}</label>}
        <input type="text" placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)} className='bg-transparent border border-white p-3 outline-none text-white rounded'/>

        {labelEmail && <label className='text-white/65'>{labelEmail}</label>}
        <input type="text" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} className='bg-transparent border border-white p-3 outline-none text-white rounded'/>

        {validation && <p className={`text-xs text-red-700 font-medium`}>This field cannot be blank.</p>}

        {labelCompanyName && <label className='text-white/65'>{labelCompanyName}</label>}
        <input type="text" placeholder='Company Name' value={companyName} onChange={(e)=> setCompanyName(e.target.value)} className='bg-transparent border border-white p-3 outline-none text-white rounded'/>

        <button className={`text-white px-5 py-3 rounded-full mt-2 ${color == "blue" ? "bg-[#045089]" : ""}`}>
            Start Free Trial
        </button>
    </form> : <div className='bg-green-100 p-5 rounded'>
        <p className='text-green-600'>Thank you for your request. Our support team will get back to you soon.</p>
    </div>
  )
}

export default FreeTrailForm