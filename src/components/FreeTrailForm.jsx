import React, { useState } from 'react'
import Button from './Button'
import MessageBox from './MessageBox'

const FreeTrailForm = ({labelName, labelEmail, labelCompanyName, direction,color, transparent, setErrorMessageBox}) => {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [validation, setValidation] = useState(false)
    const [showBox, setShowBox] = useState(false)


    const handleForm = (e)=>{
        e.preventDefault()
        if(email.length == 0 && email == ""){
            setValidation(true)
            setErrorMessageBox(true)
        }else{
            setValidation(false)
            setShowBox(true)
            setName("")
            setEmail("")
            setCompanyName("")
            setErrorMessageBox(false)
        }
    }

  return (
    !showBox ? <form onSubmit={handleForm} className={`flex ${direction == "row" ? "flex-row items-baseline h-[68px] gap-4" : "flex-col gap-2"}`}>

        {labelName && <label className='text-white/65 text-sm'>{labelName}</label>}
        <input type="text" placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)} className={`${transparent == "transparent" ? "bg-transparent border border-white text-white" : "bg-white text-black/50" } px-3 h-12 outline-none rounded text-sm`}/>

        <div className='flex flex-col'>
            {labelEmail && <label className='text-white/65 text-sm'>{labelEmail}</label>}
            <input type="text" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} className={`${transparent == "transparent" ? "bg-transparent border border-white text-white" : "bg-white text-black/50" } px-3 h-12 outline-none rounded text-sm`}/>

            {validation && <p className={`text-xs text-red-700 font-medium`}>This field cannot be blank.</p>}
        </div>

        {labelCompanyName && <label className='text-white/65 text-sm'>{labelCompanyName}</label>}
        <input type="text" placeholder='Company Name' value={companyName} onChange={(e)=> setCompanyName(e.target.value)} className={`${transparent == "transparent" ? "bg-transparent border border-white text-white" : "bg-white text-black/50" } px-3 h-12 outline-none rounded text-sm`}/>

        <Button color={color} text="Start Free Trial"/>
        
    </form> : <MessageBox />
  )
}

export default FreeTrailForm