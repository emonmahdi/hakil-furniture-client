import React from 'react'

const Blogs = () => {
  return (
    <div className='container mx-auto py-12'>
        <h2 className='text-2xl text-center font-bold uppercase mb-12'>Our <span className='text-secondary '>Blogs</span></h2>
      <div className="grid grid-cols-3 gap-4 text-center">
        {/* single blog */}
        <div className='text-start'>
            <img src="https://placeimg.com/400/225/arch" alt="" />
            <div className="author text-gray-400 flex items-center justify-start my-2">
                <div className='mx-2'> 
                    <span>admin</span>
                </div>
                <div className='mx-4'> 
                    <span>Date: 11/01/2023</span>
                </div>
                <div className='mx-4'> 
                    <span>Wood</span>
                </div>
                
            </div>
            <h3 className='text-2xl underline hover:text-primary hover:cursor-pointer py-2'>Exploring new ways of decorating</h3>
            <p className='py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ab at expedita beatae eos nobis?</p>
            <button className='border-b-2 border-orange-600 p-2 rounded-lg hover:bg-orange-400'>Read More</button>
        </div>
        {/* single blog */}
        <div className='text-start'>
            <img src="https://placeimg.com/400/225/arch" alt="" />
            <div className="author text-gray-400 flex items-center justify-start my-2">
                <div className='mx-2'> 
                    <span>admin</span>
                </div>
                <div className='mx-4'> 
                    <span>Date: 11/01/2023</span>
                </div>
                <div className='mx-4'> 
                    <span>Wood</span>
                </div>
                
            </div>
            <h3 className='text-2xl underline hover:text-primary hover:cursor-pointer py-2'>Exploring new ways of decorating</h3>
            <p className='py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ab at expedita beatae eos nobis?</p>
            <button className='border-b-2 border-orange-600 p-2 rounded-lg hover:bg-orange-400'>Read More</button>
        </div>
        {/* single blog */}
        <div className='text-start'>
            <img src="https://placeimg.com/400/225/arch" alt="" />
            <div className="author text-gray-400 flex items-center justify-start my-2">
                <div className='mx-2'> 
                    <span>admin</span>
                </div>
                <div className='mx-4'> 
                    <span>Date: 11/01/2023</span>
                </div>
                <div className='mx-4'> 
                    <span>Wood</span>
                </div>
                
            </div>
            <h3 className='text-2xl underline hover:text-primary hover:cursor-pointer py-2'>Exploring new ways of decorating</h3>
            <p className='py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ab at expedita beatae eos nobis?</p>
            <button className='border-b-2 border-orange-600 p-2 rounded-lg hover:bg-orange-400'>Read More</button>
        </div> 
      </div>
    </div>
  )
}

export default Blogs
