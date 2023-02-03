import React from 'react'
import Search from '../components/Search/Search'
import { GoChevronRight } from 'react-icons/go'
import Image from 'next/image'

import DrugList from '../components/Pharmacy/DrugList'
import SearchXl from '../components/Search/SearchXl'
import TalkToDoc from '../components/Pharmacy/TalkToDoc'
import CategoryList from '../components/Pharmacy/CategoryList'
import QuickBtns from '../components/Pharmacy/QuickBtns'
import Testimonials from '../components/homepage/Testimonials'
import Info from '../components/homepage/Info'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import axios from 'axios'
import { API_URL } from "../config/api.config"

import doc from '../public/assets/stockImgs/Pharmacy/bigDoc.png'


import "swiper/css"
import "swiper/css/navigation"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"


const Pharmacy = ({products}) => {

    console.log(products)
  return (
    <div className='w-full h-full'>
         <div className='bg-[#DC246F] w-full h-full'>
            <div className='mx-2 md:mx-20 lg:mx-60 flex flex-row h-full justify-center items-center'>
                <div className='h-full w-full relative'>
                    <Swiper />
                    {/* <div>
                        <BsChevronLeft />   
                    </div>
                    {/* middle */}
                    {/* <div className='flex flex-row'>
                        <div className='bg-black/60 rounded-xl py-4 px-6 '>
                            <h3 className='font-bold text-xl text-[#DC246F]'>Pharmacy</h3>

                            <p className='mt-4 text-white'>
                                Find here all the medicines, cosmetics,
                                and wellness products you&apos;ll ever need.
                            </p>
                        </div>
                        <Image src={doc} alt="doctor"/>
                    </div>
                    
                    <div>
                        <BsChevronRight />
                    </div> */} 

                    <div className='w-full relative'>

                        <Swiper navigation={true} modules={[Navigation]} className='z-0 h-[100%] my-8'>
                            <SwiperSlide>
                                <div className='w-full h-max flex flex-col md:flex-row items-center md:mx-12'>
                                        <div className='absolute bg-black/70 rounded-xl px-6 md:w-[40%] md:left-auto md:top-32 text-left py-8 '>
                                            <h3 className='font-bold text-lg md:text-4xl text-[#DC246F]'>Pharmacy</h3>
                                            <p className='md:mt-4 text-white'>
                                                Find here all the medicines, cosmetics,
                                                <br />
                                                and wellness products you&apos;ll ever need.
                                            </p>
                                        </div>
                                        <div className='absoulte  bottom-0 right-0'>
                                            <Image src={doc} alt='woman' className='absolute top-24 right-0 object-fill'/>
                                        </div>
                                {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/0 z-[1]' /> */}
                                </div>
                                
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-full  '>
                                <Image src={doc} alt='woman' className=''/>
                                <div className='absolute bottom-8 bg-blue-400/80 rounded-xl p-4 left-20 right-20 text-center py-12'>
                                    <h3 className='text-3xl font-bold text-white'>Join our Continuous Care Program</h3>
                                </div>
                                <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/0 z-[1]' />
                                </div>
                                
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>
         </div>
         <div className='my-4 flex flex-col mx-2 md:mx-20 lg:mx-60'>
            <div className='flex  flex-col md:flex-row items-center h-full w-full'>
                <SearchXl />
                <TalkToDoc />

            </div>

            <div className='my-4 flex flex-col'>
                <h3 className='text-xl font-bold'>Popular Items</h3>

                <div className='flex flex-row w-full h-full'>
                    {/* drug list */}
                    <DrugList products={products.pharmacy_products}/>

                </div>
            </div>

            <div className='my-4 flex flex-col'>
                <h3 className='text-xl font-bold'>Categories</h3>
                
                {/* category list */}
                <div className='my-4'>
                    <CategoryList />
                </div>
            </div>

            <div className=''>
                <QuickBtns />
            </div>

            <div className='my-4'>
                <Info />
            </div>
            
            <div className='my-4'>
                <Testimonials />
            </div>
            


         </div>
    </div>
  )
}

export const getServerSideProps = async () => {
    const res = await axios.get(
      `${API_URL}/pharmacy/pharmacy_product_list?page=1`
    )
  
    // const data = await res.json();
    // console.log(res.data)
  
    return {
      props: {
        products: res.data,
      },
    }
  }

export default Pharmacy