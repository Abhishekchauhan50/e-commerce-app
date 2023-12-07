import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

function Navbar() {

  const cartdata = useSelector(state=>state.cartList.cartList)
  //console.log(cartdata.length)

  const userName = useSelector(state=>state.signup.signup)


  return (
    <>
    
    <div className='w-full  bg-black flex text-white justify-between py-1 '>
        <div className='flex items-center  gap-2 px-2 '>
            <i className="ri-restaurant-2-fill text-5xl font-bold text-red-600"></i>
            <span className='font-bold'>FoodBazaar</span>
        </div>
        
        <div className='flex items-center  gap-2'>
            
            <h1 className='border rounded-xl text-[.5rem] text-white flex items-center px-2 py-1 gap-1'>{userName[userName.length-1].userName} <i className="ri-user-fill bg-slate-600 px-2 py-1 rounded-full"></i></h1>
            <Link className='flex items-center' to='/addCart'><i className="ri-shopping-cart-fill  text-[1rem] bg-slate-600 px-2 py-1 rounded-full"><span className='text-red-800'>{cartdata.length}</span></i></Link>
            
        </div>
        
        
    </div> 
    
    </>
  )
}

export default Navbar
