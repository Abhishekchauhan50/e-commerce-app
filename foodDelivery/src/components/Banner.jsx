import React from 'react'
import { banner } from '../apiData/CatagoryData'

function Banner() {
  
  return (
    <>
    <div className=' '>
      <h1 className='text-4xl  font-bold px-10 py-5 '>Offers</h1>
    </div>
    <div className='h-64 w-full  flex flex-col flex-wrap gap-3 overflow-y-auto px-10'>
      
      {
        banner.map((val,index)=>{
          return(
            <div key={index} className="h-full w-[23rem] md:w-1/2 lg:w-1/3 border rounded-xl overflow-hidden">
              <img className='h-full w-full object-cover' src={val} alt="" />
          </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Banner
