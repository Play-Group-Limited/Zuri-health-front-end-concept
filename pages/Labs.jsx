import React from 'react'


import "swiper/css"
import "swiper/css/navigation"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"
import Image from 'next/image'

import bg from '../public/assets/stockImgs/Labs/bgW.png'
import bgLg from '../public/assets/stockImgs/Labs/bgLg.png'
import wpackage from '../public/assets/stockImgs/Labs/Wpackage.png'
import thome from '../public/assets/stockImgs/Labs/Thome.png'

import SearchXl from '../components/Search/SearchXl'
import TalkToDoc from '../components/Pharmacy/TalkToDoc'
import TestList from '../components/Labs/TestList'
import Testimonials from '../components/homepage/Testimonials'
import Info from '../components/homepage/Info'
import axios from 'axios'
import { API_URL } from '../config/api.config'
import Link from 'next/link'




const Labs = ({testProduct}) => {

    console.log("first", testProduct)
  return (
    <div className='w-full h-full'>
        <div className='bg-[#AFDB26]  w-full'>
            <div className='mx-2 md:mx-20 lg:mx-60 flex flex-row h-full justify-center items-center'>
                <div className='h-full w-full relative'>
                <Swiper navigation={true} modules={[Navigation]} className='z-0 h-[100%]'>
                    <SwiperSlide>
                        <div className='w-full h-max flex flex-col my-8 md:flex-row items-center md:mx-12'>
                            <Image src={bgLg} alt='woman' className='hidden md:block top-0 w-full h-full'/>
                            <Image src={bg} alt='woman' className='md:hidden mt-4 top-0 z-10 '/>
                            <div className='md:absolute bg-black/70 rounded-xl my-8 md:mt-0 z-10 px-6 md:w-[40%] md:left-[5%] md:top-[35%] text-left py-8 '>
                                <h3 className='font-bold text-3xl mb-4 md:text-6xl text-[#AFDB26]'>Labs Tests</h3>
                                <p className='md:mt-4 text-lg text-white'>
                                    Get Accurate results with our lab test
                                    <br />
                                    at the lab or at home.
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

        <div className='my-4 flex flex-col mx-2 md:mx-20 lg:mx-60'>
            <div className='flex  flex-col md:flex-row items-center h-full w-full'>
                <SearchXl />
                <TalkToDoc />

            </div>

            {/* tests */}
            <div className='flex flex-col h-full w-full'>
                <div className='my-6 flex flex-col'>
                    <h3 className='text-xl font-bold'>Popular Items</h3>

                    <div className='flex flex-row w-full h-full'>
                        {/* test list */}
                        <div className='my-6 overflow-x-auto'>
                            <TestList testProducts={testProduct.test_products}/>
                        </div>

                    </div>
                </div>
            </div>

            {/* categories */}
            <div className='flex flex-col h-full w-full'>
                <div className='my-6 flex flex-col'>
                    <h3 className='text-xl font-bold mb-6'>Popular Items</h3>

                    <div className='flex flex-col md:flex-row relative'>
                        <div className='w-full  relative mr-2 my-2'>
                            <Link href='/TestCategories'>
                                <Image src={wpackage} alt='Wellness Package' className='w-full h-full'/>
                                <div className='absolute bottom-8 p-4 left-8 '>
                                    <h3 className='text-3xl font-bold text-white'>
                                        Select the perfect
                                        <br /> 
                                        Wellness Package
                                    </h3>
                                </div>
                            </Link>
                            </div>
                        <div className='w-full  relative '>
                            <Link href='/TestCategories'>
                                <Image src={thome} alt='Wellness Package' className='w-full h-full'/>
                                <div className='absolute bottom-8 p-4 left-8 '>
                                    <h3 className='text-3xl font-bold text-white'>
                                        Book a lab
                                        <br />
                                        test at home
                                    </h3>
                                </div>
                            </Link>
                        </div>
                    
                    </div>
                </div>
            </div>

            <hr className='my-12'/>

            <div className='my-4'>
                <Info />
            </div>
            
            <hr className='my-12'/>

            <div className='my-4'>
                <Testimonials />
            </div>


           
        


        </div>
    </div>
  )
}

export const getServerSideProps = async () => {
    const testKit = await axios.get(
      `${API_URL}/labs_and_diagnostic/testkit?page=1`
    )
    const testProfile = await axios.get(
      `${API_URL}/test_profile/get_test_profiles`
    )
    const testProduct = await axios.get(
      `${API_URL}/test_diagnostic/test_product_list`
    )
    const testPackage = await axios.get(
      `${API_URL}/test_diagnostic/display_wellness_packages`
    )
  
    // const data = await res.json();
    // console.log(res.data)
  
    return {
      props: {
        testKit: testKit.data,
        testProfile: testProfile.data,
        testProduct: testProduct.data,
        testPackage: testPackage.data,
      },
    }
  }

export default Labs