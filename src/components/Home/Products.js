import React, { useEffect, useState } from 'react'
import bedImg from '../../assets/icon/bed.png'
import diningImg from '../../assets/icon/dining.png'
import kitchenImg from '../../assets/icon/kitchen.png'
import livingImg from '../../assets/icon/living.png'
import ProductCategoryCard from '../../Pages/ProductCategory/ProductCategoryCard'


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => {
      setProducts(data);
    })
  } ,[])

  return (
    <div className="py-12 container mx-auto">
      <h2 className="text-2xl font-bold py-8 text-center mb-12">
        Furniture Products <span className='text-primary'>Categories</span> {" "}
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {
          products.map(product => <ProductCategoryCard
          key={product._id}
          product={product}
          ></ProductCategoryCard>)
        }
        


        {/* <div className='p-4 shadow-lg rounded-lg text-center'>
            <img src={diningImg} className='w-32 mx-auto' alt="" />
            <h4 className='text-xl mt-4'>Dining Room</h4>
        </div>
        <div className='p-4 shadow-lg rounded-lg text-center'>
            <img src={kitchenImg} className='w-32 mx-auto' alt="" />
            <h4 className='text-xl mt-4'>Kitchen Room</h4>
        </div>
        <div className='p-4 shadow-lg rounded-lg text-center'>
            <img src={livingImg} className='w-32 mx-auto' alt="" />
            <h4 className='text-xl mt-4'>Living Room</h4>
        </div>  */}
      </div>
    </div>
  )
}

export default Products
