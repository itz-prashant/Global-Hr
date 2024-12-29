import React from 'react'

const Button = ({background, text, color, labelName}) => {
  
  return (
    <button className={`text-white sm:w-[225px] w-full px-12 h-[54px] rounded-full ${labelName == "Name" ? "md:mt-6" : ""} ${background == "blue" ? "bg-[#045089] hover:bg-[#044f89ee]" : "bg-[#ff8e00] hover:bg-[#ff8c00e8]"}`}>
      {text}
    </button>
  )
}

export default Button