import React from 'react'

import sofaImg from '../../assets/images/new-sofa.png'
import chairImg from '../../assets/images/new.png'


const NewArrivals = () => {
  return (
    <div className='container mx-auto py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center'>
            <div className='text-center'>
                <h2 className='text-2xl font-bold mb-2'>New Arrivals</h2>
                <h2 className='text-4xl font-bold text-primary'>House In Comfortable</h2>
                <button className='btn btn-3xl border-2 bg-white hover:text-white text-black border-blue-600 p-2 rounded-lg my-4'>Order Now</button>
            </div>
            <div className='text-center'>
                <img src={sofaImg} className='w-auto max-w-md mx-auto' alt="" /> 
            </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center my-8'>
            <div className='text-center'>
                <img src={chairImg} className='w-auto max-w-md mx-auto' alt="" /> 
            </div>
            <div className='text-center'>
                <h2 className='text-2xl font-bold mb-2'>New Arrivals</h2>
                <h2 className='text-4xl font-bold text-primary'>Distinct Eight Fabric</h2>
                <button className='btn btn-3xl border-2 bg-white hover:text-white text-black border-blue-600 p-2 rounded-lg my-4'>Order Now</button>
            </div>
            
      </div>
    </div>
  )
}

export default NewArrivals
