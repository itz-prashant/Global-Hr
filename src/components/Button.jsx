import React from 'react'

const Button = ({background, text, labelName}) => {
  
  return (
    <button className={`text-white xs:w-[225px] w-full px-12 h-[50px] rounded-full ${text == "Take a tour" ? "text-[18.5px] font-medium" : ""} ${text == "Sign Up Today" ? "text-lg" : ""} ${labelName == "Name" ? "md:mt-6" : ""} ${background == "blue" ? "bg-[#045089] hover:bg-[#044f89ee]" : "bg-[#ff8e00] hover:bg-[#ff8c00e8]"}`}>
      {text}
    </button>
  )
}

export default Button