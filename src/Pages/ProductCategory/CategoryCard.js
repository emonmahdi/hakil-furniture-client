import React from 'react'
import BookingModal from '../../components/BookingModal/BookingModal';

const CategoryCard = ({item, setFurniture}) => {
    // console.log(item);
    const {img, name,id, description, originalPrice, resalePrice, yearsUse, postDate, sellerName, verified} = item;
  return (
    <div className="p-4 shadow-lg rounded-lg text-start"> 
      <img src={img} className="w-full h-72 mx-auto" alt="" />
      <h4 className="text-2xl mt-4 font-bold text-primary mb-2">{name}{verified}</h4>
      <div className='flex items-center justify-between my-4'>
        <div className='bg-gray-200 p-2 m-2 rounded-full'><p className='font-bold text-xs'>Seller Name: <span className='text-secondary'>{sellerName}</span></p></div>
        <div className='bg-gray-200 p-2 m-2 rounded-full'><p className='font-bold text-xs'>Post Date: <span className='text-accent'>{postDate}</span> </p></div>
        {/* <div><p>Years of use: {yearsUse} Year</p></div> */}
      </div>
      <p className='my-4'>{description}</p>
      <div>
        <div className='flex items-center justify-between'>
            <div className='font-bold text-primary'>
              <p className='text-xs mb-2 p-2 rounded-full bg-gray-200'>Real Price: <span className='text-sm'>${originalPrice}</span> </p>
              <p className='text-xs mb-2 p-2 rounded-full bg-gray-200'>Sale Price: <span className='text-sm'>${resalePrice}</span> </p> 
            </div>
            <div className='bg-gray-200 p-2 font-bold rounded-full text-primary'><span className='text-xs'>Years of use: <span className='text-xs'>{yearsUse} Years</span> </span></div>
        </div>
        <div className='mt-8'> 
            <label onClick={() => setFurniture(item)} htmlFor="booking-modal" className="btn btn-xl btn-primary border-0 rounded-xl text-white">Buy Now</label>
        </div>
         
        
      </div>
    </div>
  )
}

export default CategoryCard
