import React from 'react'
import DrugCard from './DrugCard'

import "swiper/css"
import "swiper/css/navigation"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"

const DrugList = ({products}) => {
  console.log("first" , products)
  return (
    <div className='flex flex-row  w-full mt-8 items-start overflow-x-auto '>
        {/* drug card */}
        {products?.length > 0 && products.map((product) => {
          return (<DrugCard key={product._id} product={product}/>)
        })}

      <Swiper navigation={true} modules={[Navigation]} className='z-0 relative'>
        <SwiperSlide>

        </SwiperSlide>
      </Swiper>
       
    </div>
  )
}

export default DrugList