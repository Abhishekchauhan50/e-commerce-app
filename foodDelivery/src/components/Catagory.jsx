import React from 'react'
import { Link } from 'react-router-dom'
import {catagories} from '../apiData/CatagoryData'
import {useDispatch} from 'react-redux'
import { addCard } from '../reduxContainer/FoodSlice'



function Catagory() {
  
  const dispatch = useDispatch()


  return (
    <>
    <div className='flex flex-col  gap-4 '>
        <div className='flex justify-center'>
            <h1 className='text-4xl  font-bold px-10 py-5'>Catagories </h1>
        </div >
        <div   className=' flex gap-5 flex-wrap justify-center lg:justify-evenly md:justify-evenly   '>
          {
            catagories.map((val,index)=>{
              return(
                <div key={index} className='flex flex-col gap-4 items-center'>
                  <Link  to='/cardSection'>
                    <img onClick={()=>dispatch(addCard({cardName:val}))} className='  w-[13rem] h-[13rem] rounded-full '  src={val.img} alt="" />
                  </Link>
                  <span className='text-3xl'>{val.name}</span>
                </div>
              )
            })
          }
        </div>
    </div>
    </>
  )
}

export default Catagory
