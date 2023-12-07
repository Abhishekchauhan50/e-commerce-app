import React from 'react'
import { Link } from 'react-router-dom'

function CoverPage() {
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen '>
        {/* <div className='py-10 flex flex-col items-center gap-5 justify-center my-5'>
          <h1 className=' text-4xl lg:text-6xl font-bold text-red-600'>Need food!!</h1>
          <h1 className='text-4xl lg:text-6xl font-bold text-red-600'>ATTACK</h1>
        </div> */}
        <div className='flex flex-col items-center text-3xl'>
          <i className="ri-restaurant-2-fill text-8xl font-bold text-red-600"></i>
          <h1 className='text-4xl'>FoodBazaar</h1>
        </div>
        <div className='py-24 flex flex-col gap-3'>
       
        <button className='bg-green-800 px-10 py-1 text-2xl rounded-xl  hover:bg-green-600'><Link to='/signin'>SignUp</Link></button>
        <button className='bg-blue-800 px-10 py-1 text-2xl rounded-xl hover:bg-blue-600'><Link to='/login'>LogIn</Link></button>
       
        </div>
    </div> 
    </>
  )
}

export default CoverPage
