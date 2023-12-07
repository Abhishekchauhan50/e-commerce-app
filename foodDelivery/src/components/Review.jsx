import React from 'react'

function Review() {
  return (
    <>
    <div className='flex justify-center py-10 '>
            <h1 className='text-4xl  font-bold px-10 py-5 text-black'>Custmer Review</h1>
    </div>
    <div className='bg-white flex gap-10 flex-col items-center'>
        <div className=' flex flex-col w-72   rounded-2xl overflow-hidden bg-slate-300 gap-10 justify-evenly lg:flex-wrap  '>
            <div className='w-72 h-72 border'>
                <img className='w-full h-full object-cover' src='https://img.freepik.com/premium-photo/man-with-short-haircut-stands-against-black-background_862994-1018.jpg' alt="" />
            </div>
            <div className='text-black text-xl border w-72 h-72' >
                <h1 className='px-4 text-2xl font-bold'>Customer Review (John D.):</h1>
                <p className='px-4'>"Ordered a delicious pizza from this website, and it exceeded my expectations! The crust was perfectly crispy, and the toppings were fresh. Definitely ordering again!"

</p>
            </div>
        </div>
        <div className=' flex flex-col w-72   rounded-2xl overflow-hidden bg-slate-300 gap-10 justify-evenly lg:flex-wrap  '>
            <div className='w-72 h-72 border'>
                <img className='w-full h-full object-cover' src='https://i.dailymail.co.uk/1s/2023/04/23/12/70040425-11990921-This_image_was_generated_in_Midjourney_in_seconds_in_response_to-a-9_1682250045301.jpg' alt="" />
            </div>
            <div className='text-black text-xl border w-72 h-72' >
                <h1 className='px-4 text-2xl font-bold'>Customer Review (Emma S.):</h1>
                <p className='px-4'>"The burger I ordered was phenomenal! Juicy patty, fresh veggies, and the special sauce made it a mouthwatering experience. Fast delivery and great service!"</p>
            </div>
        </div>
        <div className=' flex flex-col w-72   rounded-2xl overflow-hidden bg-slate-300 gap-10 justify-evenly lg:flex-wrap  '>
            <div className='w-72 h-72 border'>
                <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwbG9va2luZyUyMGF0JTIwY2FtZXJhfGVufDB8fDB8fHww' alt="" />
            </div>
            <div className='text-black text-xl border w-72 h-72' >
                <h1 className='px-4 text-2xl font-bold'>Customer Review (Alex M.):</h1>
                <p className='px-4'>"Tried their pizza, and it was a flavor explosion! The combination of toppings was spot on. Prompt delivery and the pizza arrived piping hot. Highly recommended!"</p>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Review
