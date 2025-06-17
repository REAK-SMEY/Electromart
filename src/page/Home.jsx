import React from 'react'
import Getdiscount from '../components/Getdiscount'

import HeroTwo from '../components/HeroTwo'
import Hero from '../components/Hero'
import ShopCategories from '../components/ShopCategories'
import BestDeals from '../components/BestDeals'
import BestDeals2 from '../components/Bestdeals2'
import PayBank from '../components/PayBank'
import TrandingProducts from '../components/TrandingProducts'
// import PopularProducts from '../components/popularProducts'



function Home() {
  return (
    <div>
      <Hero/>
      <ShopCategories/>
      <BestDeals/>
      <Getdiscount/>
      {/* <PopularProducts/> */}
      <HeroTwo/>
      <BestDeals2/>
      <PayBank/>
      <TrandingProducts/>
      

    </div>
  )
}

export default Home