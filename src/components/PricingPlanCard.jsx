import React from 'react'
import { Link } from 'react-router-dom'

const PricingPlanCard = ({data}) => {
  return (
    <div className={`flex flex-col justify-between px-6 py-8 text-center border border-gray/30 mt-5 ${data.name == "Enterprise" ? "bg-[#045089] lg:mt-[-12px]" : "bg-white"}`}>
        <div className={`flex flex-col gap-5 items-center ${data.name == "Enterprise" ? "lg:mt-[28px]" : ""}`}>
            <div className={`${data.name == "Enterprise" ? "text-white" : "text-[#045089]"}`}>
                <h4 className='text-[33px] font-semibold'>{data.name}</h4>
                <div className='flex items-baseline justify-center'>
                    <h5 className='text-[30px] font-semibold'>{data.price}</h5>
                    {data.price !== "Free" && <span className='text-[12px]'>/user/month</span>}
                </div>
            </div>
            <div className='border-b lg:h-[490px] h-48 mt-4'>
                <p className={`text-sm text-black/70 ${data.name == "Enterprise" ? "text-white" : "text-[#045089]"}`}>{data.description}</p>
            </div>
            <div className={`${data.name == "Enterprise" ? "text-white" : "text-black/70"}`}>
                {
                    data.feature.map((feature,index)=>(
                        <h6 key={index} className='border-b pb-4 pt-4'>{feature.f}</h6>
                    ))
                }
            </div>
        </div>
        <Link className='w-full' to={'https://globalhruk.com/globalhr/index.php/login/org_registration_c/index/org/3298'}> 
            <button className={`mt-5 py-2 rounded-full transition-all w-32 duration-500 ${data.name == "Enterprise" ? "text-white border hover:text-[#045089] hover:bg-white " : "text-[#045089] border border-[#045089] hover:text-[white] hover:bg-[#045089]"}`}>Sign up</button>
        </Link>
    </div>
  )
}

export default PricingPlanCard