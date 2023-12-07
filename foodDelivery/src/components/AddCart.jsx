import React from 'react'
import Navbar from './Navbar'
import {useSelector, useDispatch} from 'react-redux'
import { RemoveToCart } from '../reduxContainer/FoodSlice'
import Footer from './Footer'

function AddCart() {
    const dispatch = useDispatch()
    const cartdata = useSelector(state=>state.cartList.cartList)
    

    const totalPrice = cartdata.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price;
      }, 0);
      
  return (
    <>
    <div>
        <div className='sticky top-0'>
            <Navbar/>
        </div>
        <div className='px-10'>
            <div className='flex justify-center'>
                <h1 className='text-4xl my-10 '>Your cart items are here :</h1>
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl my-5 '>Total Items :{cartdata.length}</h1>
                <h1 className='text-4xl my-10 '>Total Price :₹{totalPrice}</h1>
            </div>
            <div className=''>
                {
                    cartdata.map((val,index)=>{
                        return(
                            <div key={index} className='flex flex-col border bg-slate-400  py-2 rounded-2xl px-10 lg:w-96'>
                    
                    <div className='flex justify-between '>
                        <div className='w-20 h-20 border rounded-xl overflow-hidden'>
                            <img className='w-full h-full object-cover' src={val.img} alt="" />
                        </div>
                        <div className='flex flex-col gap-2  '>
                            <h1>{val.name}</h1>
                            <div className='flex justify-between '>
                                <span className='bg-slate-400 px-1 py-1 rounded-xl'>Price: ₹{val.price}</span>
                                <button onClick={()=>dispatch(RemoveToCart(index))} className='bg-red-600 px-1 py-1 rounded-xl'>Remove</button>
                                <button className='bg-green-600 px-5 py-3  rounded-xl'>Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
                        )
                    })
                }
            </div>
        </div>
        
    </div>
    <div className=''>
        <Footer/>
    </div>
    
    </>
  )
}

export default AddCart
