import React, { useState } from 'react'
import Button from './Button'
import MessageBox from './MessageBox'

const FreeTrailForm = ({labelName, labelEmail, labelCompanyName,color, direction,background, transparent, setErrorMessageBox}) => {
    
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
    !showBox ? <form onSubmit={handleForm} className={`flex ${direction == "row" ? "md:flex-row flex-col md:items-start items-center justify-center md:flex-wrap  gap-4" : "flex-col gap-2"}`}>

        <div className='flex flex-col gap-2'>
            {labelName && <label className={`${color == "black" ? "text-black/65" : "text-white/65"} text-xs`}>{labelName}</label>}
            <input type="text" placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)} className={`${transparent == "transparent" ? "bg-transparent  text-white" : "bg-white text-black/50 focus:border-blue-800" } ${color == "black" ? "border border-black/30" : "border border-white"} px-3 h-12 outline-none rounded text-xs`}/>
        </div>

        <div className='flex flex-col gap-2'>
            {labelEmail && <label className={`${color == "black" ? "text-black/65" : "text-white/65"} text-xs`}>{labelEmail}</label>}
            <input type="text" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} className={`${transparent == "transparent" ? "bg-transparent  text-white" : "bg-white text-black/50 focus:border-blue-800" } ${color == "black" ? `border ${validation ? "border-red-800" : "border-black/30" }` : "border border-white"}  px-3 h-12 outline-none rounded text-xs`}/>

            {validation && <p className={`text-xs text-red-700 font-medium`}>This field cannot be blank.</p>}
        </div>

        <div className='flex flex-col gap-2'>
            {labelCompanyName && <label className={`${color == "black" ? "text-black/65" : "text-white/65"} text-xs`}>{labelCompanyName}</label>}
            <input type="text" placeholder='Company Name' value={companyName} onChange={(e)=> setCompanyName(e.target.value)} className={`${transparent == "transparent" ? "bg-transparent  text-white" : "bg-white text-black/50 focus:border-blue-800"} ${color == "black" ? "border border-black/30" : "border border-white"} px-3 h-12 outline-none rounded text-xs`}/>
        </div>

        <Button background={background} text="Start Free Trial" color={color}/>
        
    </form> : <MessageBox />
  )
}

export default FreeTrailForm