import React from 'react'
import Blogs from '../../Pages/Blogs/Blogs'
import Advertised from './Advertised'
import Banner from './Banner'
import NewArrivals from './NewArrivals'
import NewsLetters from './NewsLetters'
import Products from './Products'

const Home = () => {
  return (
    <div>  
      <Banner />
      <Advertised />
      <Products />
      <NewArrivals />
      <Blogs />
      <NewsLetters />
    </div>
  )
}

export default Home
