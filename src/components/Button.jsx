import React from 'react'

const Button = ({color, text}) => {
  
  return (
    <button className={`text-white text-sm px-12 h-[50px] rounded-full mt-2 ${color == "blue" ? "bg-[#045089] hover:bg-[#044f89de]" : "bg-[#ff8e00]"} hover:bg-[#ff8c00e5]`}>
            {text}
    </button>
  )
}

export default Button