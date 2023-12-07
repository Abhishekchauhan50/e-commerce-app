import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { login } from '../reduxContainer/FoodSlice'

function LogInPage() {
  const [info, setinfo] = useState(
    {
      userName: '',
      passward: ''
  }
  )

  const handleChange= (e)=>{
    const name = e.target.name
    const value = e.target.value

    setinfo({...info, [name]:value})
  }

  const dispatch = useDispatch()



  return (
    <div>
      <div className='border rounded-xl flex flex-col justify-center items-center h-screen'>
       <div className='  px-2 py-2'>
        <h1 className='text-2xl px-10 py-1 font-bold'>LogIn</h1>
       </div>
       <div className=' flex flex-col gap-7 '>
        <input onChange={handleChange} name='userName' value={info.userName} autoComplete='off'  className= 'shadow-xl text-xl rounded-xl py-1 px-2 bg-transparent border outline-none' type="text" placeholder='User Name...' />
        <input onChange={handleChange} name='passward' value={info.passward}  className='shadow-xl text-xl rounded-xl py-1 px-2 bg-transparent border outline-none' type="password" placeholder='Password...' />
        <div className='flex gap-4 my-4  justify-evenly'><button 
        onClick={()=>{
          dispatch(login(info))
        }} className='bg-blue-800 rounded-xl text-2xl py-1 px-10 hover:bg-blue-600'><Link to='/home'>LogIn</Link></button><Link to='/coverpage'><button className='bg-slate-400 rounded-xl text-3xl py-1 px-10  hover:bg-slate-500'>Cancel</button></Link></div>
       </div>
    </div>
    </div>
  )
}

export default LogInPage
