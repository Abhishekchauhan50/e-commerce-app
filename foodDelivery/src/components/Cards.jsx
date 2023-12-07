import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import BurgerCards, { PizzaCards } from './DispayCards'
import Footer from './Footer'




function Cards() {
  const cardName = useSelector(state=>state.cardList.card)
  const card = cardName[cardName.length-1].cardName
 
  
  
  return (
    <>
      <div>
        <div className='sticky top-0'>
            <Navbar/>
        </div>
        <div className='text-4xl  font-bold px-10 py-5'>
          <h1>{card.name} Wala</h1>
        </div>
        <div className=' w-85  items-center px-5  my-10     '>
            <img className='w-full h-full rounded-xl my-4' src={card.img} alt="" />
            <p className=' px-5 py-10 rounded-xl flex justify-center items-center text-xl'>{card.disc}</p>
            
        </div>
        <h1></h1>
        <div className='flex justify-center'>
            <h1 className='text-4xl font-bold my-5'>{card.name}List</h1>
        </div>
        {
          (card.name=="Burger")? <BurgerCards/>:<PizzaCards/>
        }
        
        
        
      </div>
      <div className=''>
        <Footer/>
      </div>
    </>
  )
}

export default Cards
