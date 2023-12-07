import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CoverPage from './components/CoverPage'
import SignInPage from './components/SignInPage'
import LogInPage from './components/LogInPage'
import Home from './components/Home'
import Cards from './components/Cards'
import Detail from './components/Detail'
import AddCart from './components/AddCart'

function App() {
  return (
    <Routes>
      <Route path='/' element={<CoverPage/>}/>
      <Route path='/signin' element={<SignInPage/>}/>
      <Route path='/login' element={<LogInPage/>}/>
      <Route path='/coverpage' element={<CoverPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/cardSection' element={<Cards/>}/>
      <Route path='/detail' element={<Detail/>}/>
      <Route path='/addCart' element={<AddCart/>}/>

    </Routes>
    
  )
}

export default App
