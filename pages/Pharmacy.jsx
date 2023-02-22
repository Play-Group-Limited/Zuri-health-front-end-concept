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

import bg from '../public/assets/stockImgs/Pharmacy/bg.png'
import bgDrugs from '../public/assets/stockImgs/Pharmacy/bgDrugs.png'
import bgDrug from '../public/assets/stockImgs/Pharmacy/bgDrug.svg'
import doc from '../public/assets/stockImgs/Pharmacy/bigDoc.png'


import "swiper/css"
import "swiper/css/navigation"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"


const Pharmacy = ({products}) => {

    console.log(products)
  return (
    <div className='w-full h-full'>
         <div className='bg-[#DC246F] w-full flex items-center justify-center'>
                <div className='md:w-[75%] flex flex-row  justify-center items-center'>
                    <div className=' w-full relative'>
                        <Swiper />
                        <div className='w-full relative h-fit'>

                            <Swiper navigation={true} modules={[Navigation]} className='z-0 relative max-h-[60vh] max-w-[100vw]'>
                                <SwiperSlide>
                                    <div className='w-full h-max flex flex-col-reverse md:flex-row items-center md:mx-12 '>
                                            <Image src={bg} alt='woman' className='hidden md:block top-0 w-full h-full'/>
                                            <Image src={doc} alt='woman' className='md:hidden top-0 z-10 w-full h-full'/>
                                            <Image src={bgDrug} alt='woman' className='md:hidden absolute scale-75 z-0 top-0 w-full h-full'/>
                                            <div className='md:absolute bg-black/70 rounded-xl mx-2  my-8 md:mt-0 z-10 px-6 md:w-[60%] md:left-[5%] md:top-[25%] text-left py-8 '>
                                                <h3 className='font-bold text-3xl mb-4 md:text-6xl text-[#DC246F]'>Pharmacy</h3>
                                                <p className='md:mt-4 text-lg text-white'>
                                                    Find here all the medicines, cosmetics,
                                                    <br />
                                                    and wellness products you&apos;ll ever need.
                                                </p>
                                            </div>
                                            <div className='absoulte  bottom-0 right-0'>
                                            </div>
                                    {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/0 z-[1]' /> */}
                                    </div>
                                    
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-full  '>
                                    <Image src={bg} alt='woman' className=''/>
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
         <div className='my-4 flex flex-col w-full items-center justify-center '>
            <div className='lg:max-w-[1440px] w-full flex flex-col items-center justify-center'>
                <div className='flex  flex-col md:flex-row items-center h-full w-full p-2'>
                    <SearchXl />
                    <TalkToDoc />

                </div>

                <div className='my-4 flex flex-col'>
                    <h3 className='text-xl font-bold pl-2'>Popular Items</h3>

                    <div className='flex flex-row  h-full overflow-x-auto w-[100vw] lg:max-w-[1440px]'>
                        {/* drug list */}
                        <DrugList products={products.pharmacy_products}/>

                    </div>
                </div>

                <div className='my-4 flex flex-col mx-2'>
                    <h3 className='text-xl font-bold'>Categories</h3>
                    
                    {/* category list */}
                    <div className='my-4'>
                        <CategoryList />
                    </div>
                </div>

                <div className=' w-full'>
                    <QuickBtns />
                </div>

                <div className='my-4 w-full'>
                    <Info />
                </div>
                
                <div className='my-4 w-full'>
                    <Testimonials />
                </div>
            </div>
            


         </div>
    </div>
  )
}

export const getServerSideProps = async () => {
    const res = await axios.get(
      `${API_URL}/pharmacy/pharmacy_product_list?page=1&latitude=-1.292066&longitude=36.821945`
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