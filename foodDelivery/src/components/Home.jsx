import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Catagory from './Catagory'
import {useSelector} from 'react-redux'
import HelpPage from './HelpPage'
import Review from './Review'
import Footer from './Footer'

function Home() {
  const userName = useSelector(state=>state.signup)
  
  return (
    <>
    <div>
        <div className='sticky top-0'>
            <Navbar/>
        </div>
        <div className='  my-24'>
            <Banner/>
        </div>
        <hr />
        <br />
        <div>
            <Catagory/>
        </div>
        <hr  className='my-5'/>
        <div className='my-5'>
          <HelpPage/>
        </div>
        <div>
          <Review/>
        </div>
        <div className=''>
          <Footer/>
        </div>
    </div>
    </>
  )
}

export default Home
