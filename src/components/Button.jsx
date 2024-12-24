import React from 'react'

const Button = ({background, text, color}) => {
  
  return (
    <button className={`text-white w-fit text-sm px-12 h-[50px] rounded-full ${color == "black" ? "md:mt-6" : ""} ${background == "blue" ? "bg-[#045089] hover:bg-[#044f89ee]" : "bg-[#ff8e00] hover:bg-[#ff8c00e8]"}`}>
      {text}
    </button>
  )
}

export default Button