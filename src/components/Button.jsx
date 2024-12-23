import React from 'react'

const Button = ({color, text}) => {
  return (
    <button className={`text-white px-5 py-3 rounded-full mt-2 ${color == "blue" ? "bg-[#045089]" : "bf-[#ff8e00]"}`}>
            {text}
    </button>
  )
}

export default Button