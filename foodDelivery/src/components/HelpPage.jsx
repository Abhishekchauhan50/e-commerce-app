import React from 'react'

function HelpPage() {
  return (
    <div className='bg-purple-800 py-10'>
        <div className="flex flex-col gap-5  ">
            <h1 className='text-4xl  font-bold px-10 py-5'>Give Sure</h1>
            <p className='text-xl '>Join us as we serve tasty and safe meals, cooked freshly in our network of 300+ kitchens across India.</p>
        </div>
        <div className="my-10 md:my-16 lg:my-16">
            <div className='h-64 w-full   flex flex-col flex-wrap gap-3 overflow-y-auto'>
                <div className="h-full w-[20rem] md:w-1/2 lg:w-1/3 border overflow-hidden">
                    <img className='h-full w-full object-cover' src="https://assets.faasos.io/eatsure/production/updated_givesure_one.jpg?d=375&tr:w-0.5,h-0.5" alt="" />
                </div>
                <div className="h-full w-[20rem] md:w-1/2 lg:w-1/3 border overflow-hidden">
                    <img className='h-full w-full object-cover' src='https://assets.faasos.io/eatsure/production/updated_givesure_two.jpg?d=375&tr:w-0.5,h-0.5' alt="" />
                </div>
                <div className="h-full w-[20rem] md:w-1/2 lg:w-1/3 border overflow-hidden">
                    <img className='h-full w-full object-cover' src="https://assets.faasos.io/eatsure/production/updated_givesure_three.jpg?d=375&tr:w-0.5,h-0.5" alt="" />
                </div>
                
            </div>
        </div>
        <div className="flex flex-col gap-5  ">
            <h1 className='text-white text-3xl font-bold'>#Food ForGood Mission</h1>
            <p className='text-xl '>It is our mission to bring assured goodness for the under privileged to enjoy a meal that is fresh, safe, nutritious and delicious. With every meal, we work towards a better tomorrow where no one sleeps unfed.</p>
        </div>
    </div>
  )
}

export default HelpPage
