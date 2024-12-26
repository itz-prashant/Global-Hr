import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";

const ScroolToTop = () => {

    const [isVisible, setIsVisible] = useState(false)

    const goToTop = ()=>{
        window.scrollTo({top: 0, left:0 , behavior: "smooth"})
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            let heightToHiden = 300;
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop
            
            if(winScroll > heightToHiden){
                setIsVisible(true)
            }else{
                setIsVisible(false)
            }  
        })
    },[])

  return (
    <>
        {isVisible && <div onClick={goToTop} className='fixed bottom-4 right-4 flex items-center justify-center h-14 w-14 rounded bg-black/30 text-white/60 cursor-pointer'>
        <IoIosArrowUp size={28}/>
        </div>}
    </>
  )
}

export default ScroolToTop