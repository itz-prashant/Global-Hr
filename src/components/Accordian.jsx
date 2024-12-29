import React, { useState } from 'react'
import { FaRegCheckCircle } from "react-icons/fa";

const Accordian = ({data,index}) => {

    const [currOpen, setCurrOpen] = useState(false)
    const isOpen = index === currOpen

    const handleToggle = ()=>{
        setCurrOpen(isOpen ? null : index)
    }

    
  return (
    <div className={`bg-white overflow-hidden transition-all duration-700 ${isOpen ? "max-h-96" : "max-h-14"}`}>
        <div className='border border-gray/40 px-5 py-3 flex gap-2 items-center'>
            <span onClick={handleToggle} className='cursor-pointer text-[#045089]'><FaRegCheckCircle /></span>
            <span onClick={handleToggle} className='cursor-pointer text-black/70 '>{data.title}</span>
        </div>
        <div className={`flex flex-col gap-5 py-5 px-10 transition-all duration-700 ${isOpen ? "border border-gray/40" : ""}`}>
            <h6 className='text-center text-[28px] text-black/70 font-semibold'>{data.title}</h6>
            <p className='text-black/70 text-[15px]'>{data.desccription}.</p>
            {data.list && <ul className='list-disc ml-8 text-black/70 text-[15px]'>
                <li>{data.list.list1}</li>
                <li>{data.list.list2}</li>
                <li>{data.list.list3}</li>
                <li>{data.list.list4}</li>
            </ul>}
            {data.list && <p className='text-black/70 text-[15px]'>{data.list.para1}</p>}
            {data.list && <p className='text-black/70 text-[15px]'>{data.list.para2}</p>}
        </div>
    
    </div>
  )
}

export default Accordian