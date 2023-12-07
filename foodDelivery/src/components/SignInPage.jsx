import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { signUp } from '../reduxContainer/FoodSlice'

function SignInPage() {

  const dispatch = useDispatch()

  const [info, setinfo] = useState({
    userName:'',
    email: '',
    passward: ''
  })

  const handlechange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setinfo({...info, [name]:value })

  }
  


  return (
    <>
    <div className='border rounded-xl  px-2 flex flex-col justify-center items-center h-screen '>
       <div className='  px-2 py-2'>
        <h1 className='text-3xl px-10 py-1 font-bold'>SignUp</h1>
       </div>
       <div className=' flex flex-col gap-7  '>
        <input onChange={handlechange} autoComplete='off' value={info.userName} name='userName' className='shadow-xl text-xl rounded-xl py-1 px-2 bg-transparent border outline-none'  type="text" placeholder='User Name...' />
        <input onChange={handlechange} autoComplete='off' value={info.email} name='email' className='shadow-xl text-xl rounded-xl py-1 px-2 bg-transparent border outline-none' type="email" placeholder='Email Id...' />
        <input onChange={handlechange} autoComplete='off' value={info.passward} name='passward' className='shadow-xl text-xl rounded-xl py-1 px-2 bg-transparent border outline-none' type="password" placeholder='Passward...' />
        <div className='text-xl'><input type="checkbox" /><span> Accept all the term and condition.</span></div>
        <div className='flex gap-4 my-4 justify-evenly'><button 
        onClick={()=>{
          dispatch(signUp(info))
        }} className='bg-green-800 rounded-xl text-2xl py-1 px-10 hover:bg-green-600  '><Link to='/home'>SignUp</Link></button><button className='bg-slate-400 rounded-xl  text-3xl py-1 px-10 hover:bg-slate-500'><Link to='/coverpage'>Cencel</Link></button>
        </div>
       </div>
    </div>
    </>
  )
}

export default SignInPage
