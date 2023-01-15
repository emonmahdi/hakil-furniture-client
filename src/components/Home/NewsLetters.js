import React from 'react'

const NewsLetters = () => {
  return (
    <div className='mx-auto py-12 bg-primary text-white'>
      <div className='w-1/4 mx-auto'>
            <form>
                <label htmlFor="email" className='text-4xl font-bold block mb-4'>Newsletter</label>
                <input type="email" className='w-full p-2 border-1 mb-4 rounded-lg text-black' placeholder='Enter your email' />
                <div>
                    <input type="submit" value='Subscribe' className='btn btn-white text-primary p-2' />
                </div>
            </form>
      </div>
    </div>
  )
}

export default NewsLetters
