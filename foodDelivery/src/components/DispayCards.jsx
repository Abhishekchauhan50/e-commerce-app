import React from 'react'
import Burger,{Pizza} from '../apiData/CardData'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { AddToCart, showDetail } from '../reduxContainer/FoodSlice'

function BurgerCards() {

    const dispatch = useDispatch()


  return (
    <>
    <div className='flex flex-wrap gap-x-20   justify-center'>
    {
        Burger.map((val,index)=>{
            
            return(
                <div key={index} className='  w-80 flex bg-slate-400 rounded-2xl shadow-2xl flex-col items-center my-5 lg:flex-wrap hover:text-orange-100 '>
                    
                        <div  className='flex border flex-col h-72 w-80 overflow-hidden rounded-2xl '>
                            <div className='flex flex-col  overflow-hidden '>
                            <Link className='flex justify-center items-center' to='/detail'><img onClick={()=>dispatch(showDetail({detailBurger:val}))} className='w-full h-48 ' src={val.images[0].sm} alt="" /></Link>
                            </div>
                            <div className='flex flex-col  items-center gap-3'>
                            <h2 onClick={()=>dispatch(showDetail({detailBurger:val}))} className=' text-2xl'>{val.name}</h2>
                            <div className='flex justify-between text-xl my-1 gap-5'>
                                <span>price:₹{val.price}</span>
                                <i onClick={()=>dispatch(AddToCart({name:val.name, img:val.images[0].sm, price:val.price}))}  className="ri-shopping-cart-fill hover:text-green-800"></i>
                            </div>
                            </div>
                        </div>
                    
                </div>
            )
        })
    }
    </div>
    </>
  )
}


function PizzaCards() {
    const dispatch = useDispatch()

    return (
      <>
      <div className='flex flex-wrap gap-x-20    justify-center'>
      {
        Pizza.map((val,index)=>{
            
            return(
                <div key={index} className=' flex shadow-2xl flex-col rounded-2xl  items-center my-5 hover:text-orange-100 '>
                    
                        <div className='flex  flex-col h-72 w-80 bg-slate-400 overflow-hidden rounded-2xl '>
                            <div className='flex flex-col h-64  w-80 overflow-hidden '>
                            <Link to='/detail'><img  onClick={()=>dispatch(showDetail({detailPizza:val}))} className='w-full h-full object-cover' src={val.img} alt="" /></Link>
                            </div>
                            <div className='flex flex-col  items-center gap-3'>
                            <h2  onClick={()=>dispatch(showDetail({detailPizza:val}))} className=' text-2xl'>{val.name}</h2>
                            <div className='flex justify-between text-xl my-1 gap-5'>
                                <span>price: ₹{val.price}</span>
                                <i onClick={()=>dispatch(AddToCart({name:val.name, img:val.img, price:val.price}))}  className="ri-shopping-cart-fill hover:text-green-800"></i>
                            </div>
                            </div>
                        </div>
                    
                </div>
            )
        })
    }
    </div>
      </>
    )
  }

export default BurgerCards
export {PizzaCards}
