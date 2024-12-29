import React from 'react'

const CenterCard = ({image, name}) => {
  return (
    <div className='flex flex-col'>
        <div className='bg-[#da5427] h-[120px] flex items-center justify-center'>
            <img src={image} alt="" />
        </div>
        <div className='bg-black text-white text-center xs:h-[60px] h-fit font-semibold py-3'>{name}</div>
    </div>
  )
}

export default CenterCard