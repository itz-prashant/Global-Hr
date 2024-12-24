import React from 'react'

const CenterCard = ({image, name}) => {
  return (
    <div className='sm:w-56 w-48'>
        <div className='bg-[#da5427] flex items-center justify-center'>
            <img src={image} alt="" />
        </div>
        <div className='bg-black text-white text-center py-3'>{name}</div>
    </div>
  )
}

export default CenterCard