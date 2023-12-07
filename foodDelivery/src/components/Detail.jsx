import React, { useContext } from 'react'
import Navbar from './Navbar'
import {useSelector} from 'react-redux'
import Burger from '../apiData/CardData'
import BurgerDetail, { PizzaDetail } from './DisplayDetail'
import Footer from './Footer'


function Detail() {

    const cardName = useSelector(state=>state.cardList.card)
    const card = cardName[cardName.length-1].cardName.name
    
    
    

  return (
    <>
    <div >
        <div className='sticky top-0'>
            <Navbar/>
        </div>
        {
            (card=='Burger')? <BurgerDetail/>:<PizzaDetail/>
        }
        
    </div>
    <div className=''>
      <Footer/>
    </div>
      
    </>
  )
}

export default Detail

