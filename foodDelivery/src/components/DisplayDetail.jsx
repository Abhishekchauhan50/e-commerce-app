import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { AddToCart } from '../reduxContainer/FoodSlice'





function BurgerDetail() {
    const dispatch = useDispatch()
    const data = useSelector(state=>state.detailList.detailData)
    const index= data.length-1
    
  return (
    <>
    <div className='flex flex-col py-6    items-center px-10 gap-10 '>
            <div className=' mt-24 w-80  overflow-hidden rounded-3xl lg:w-80 lg:h-80  '>
                <img className='h-full  w-full object-cover' src={data[index].detailBurger.images[0].sm} alt="lll" />
            </div>
            <div> 
                <div className='flex flex-col  gap-5'>
                    <h1 className='text-4xl font-bold text-slate-400'>{data[index].detailBurger.name}</h1>
                    <p> {data[index].detailBurger.desc} </p>
                </div>
                <div className='mt-5 flex flex-col items-center gap-4'>
                    <div className='flex items-baseline gap-2'>
                        <span className='text-xl font-bold text-slate-400'>Prise : ₹{data[index].detailBurger.price}/-</span><h2 className='text-3xl'></h2>
                    </div>
                    <button onClick={()=>dispatch(AddToCart({name:data[index].detailBurger.name , img:data[index].detailBurger.images[0].sm, price:data[index].detailBurger.price}))}  className='bg-red-600 px-2 py-2 font-bold text-xl rounded-xl md:w-96 lg:w-1/2 hover:bg-red-500'>Add to Cart  <i className='ri-shopping-cart-fill'></i></button>
                </div>
            </div>
        </div>

    </>
  )
}



function PizzaDetail() {
    const dispatch = useDispatch()
    const data = useSelector(state=>state.detailList.detailData)
    const index= data.length-1
    console.log(data[index].detailPizza)
  return (
    <>

        <div className='flex flex-col py-6  items-center px-10 gap-10 shadow-xl '>
            <div className='border  mt-24 w-80 rounded-3xl overflow-hidden  '>
                <img className='h-full w-full object-cover' src={data[index].detailPizza.img} alt="lll" />
            </div>
            <div> 
                <div className='flex flex-col  gap-5'>
                    <h1 className='text-4xl font-bold text-slate-400'>{data[index].detailPizza.name}</h1>
                    <p> {data[index].detailPizza.description} </p>
                </div>
                <div className='mt-5 flex flex-col gap-4'>
                    <div className='flex items-baseline gap-2'>
                        <span className='text-xl font-bold text-slate-400'>Prise : ₹{data[index].detailPizza.price}/-</span><h2 className='text-3xl'></h2>
                    </div>
                    <button onClick={()=>dispatch(AddToCart({name:data[index].detailPizza.name , img:data[index].detailPizza.img, price:data[index].detailPizza.price}))}  className='bg-red-600 px-2 py-2 font-bold text-xl rounded-xl'>Add to Cart  <i className='ri-shopping-cart-fill'></i></button>
                </div>
            </div>
        </div>

    </>
  )
}

export  {PizzaDetail}

export default BurgerDetail
