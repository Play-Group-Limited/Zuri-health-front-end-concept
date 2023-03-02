import Image from 'next/image'
import React from 'react'

import drugsm from "../../public/assets/stockImgs/categories/drugsm.png"
import drug from "../../public/assets/stockImgs/categories/drug.png"
import { BsCheckCircle } from 'react-icons/bs'

import "swiper/css"
import "swiper/css/navigation"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"

const Test = () => {
  return (
    <div className='w-full h-full '>
        <div className='bg-[#5BDADD] w-full px-4 md:px-60 py-8'>
            <p>home</p>
        </div>

        <div className='my-8 lg:mx-60 md:mx-20 mx-4'>
            <div className='flex flex-col md:flex-row'>
                {/* left */}
                <div className='flex flex-row'>
                    <div className='hidden md:flex flex-col'>
                        <div className='border p-2 mb-2 rounded-lg'>
                            <Image src={drugsm} alt="drug sm" />
                        </div>
                        <div className='border p-2 mb-2 rounded-lg'>
                            <Image src={drugsm} alt="drug sm" />
                        </div>
                        <div className='border p-2 mb-2 rounded-lg'>
                            <Image src={drugsm} alt="drug sm" />
                        </div>
                    </div>

                    <div className='flex flex-col md:ml-4 w-full'>
                        <div className='md:hidden w-full flex flex-col items-center'>
                            <Swiper navigation={true} modules={[Navigation]} className='z-0 w-full'>
                                <SwiperSlide>
                                    <div className='w-full'>
                                        <div className='p-12 border border-black rounded-lg mb-2'>
                                            <Image src={drug} alt="drug" className='w-full h-full object-cover'/>
                                        </div>

                                        <div className='flex w-full items-center justify-center'>
                                            <div className='flex flex-col border p-4 md:w-[60%] text-sm md:text-base mb-8 w-[80%] rounded-lg md:text-start text-center'>
                                                <h3 className='uppercase '>Unit Count</h3>
                                                <p className='uppercase '> 15 Tablet (15 / Strip)</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                    hi
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='hidden md:block p-12 border border-black rounded-lg mb-2'>
                            <Image src={drug} alt="drug" />
                        </div>

                        <div className='hidden md:flex flex-col border p-4 w-[60%] rounded-lg md:text-start text-center'>
                            <h3 className='uppercase '>Unit Count</h3>
                            <p className='uppercase'> 15 Tablet (15 / Strip)</p>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className='flex flex-col md:ml-6 w-full md:max-w-[50%]'>
                    <div className='md:max-w-[40%] text-center md:text-start'>
                        <h3 className='font-semibold text-3xl mb-2'>T3 T4 TSH</h3>
                        <p className='mb-6'>Also known as Thyroid Profile Total Blood Certified Labs</p>

                        <div className='flex flex-row items-start justify-center md:justify-start mb-6'>
                            <p className='text-xs'>KES 505</p>
                            <h2 className='text-xl text-[#5BDADD] ml-4'> KES 1,505 </h2>
                        </div>

                        <div className='flex flex-row border rounded-md mb-4  justify-between items-center'>
                            <button className='bg-gray-300 p-4 rounded-md'>
                                +
                            </button>
                            <p>1</p>
                            <button className='bg-gray-300 p-4 rounded-md'>
                                -
                            </button>
                        </div>

                        <button className='flex items-center uppercase justify-center py-4 w-full mb-6 rounded-lg bg-[#E9526F] '>
                        <p className='text-white uppercase'> Add to cart </p> 
                        </button>

                        <div className='flex flex-row mb-6'>
                            <BsCheckCircle size={30} className='mr-4'/>
                            <p>
                                In Stock (5 pieces available)
                            </p>
                        </div>
                    </div>

                    <hr className='w-full my-6'/>

                    <div className='flex flex-col'>
                        <h2 className='mb-4 font-semibold text-xl'>Our Partner Lab</h2>

                        <div className='flex flex-col md:flex-row items-center justify-between'>
                            <p className='my-4 md:my-0'>Lancent Laboritorie Ltd.</p>
                            <div className='border border-black h-[200px] w-[200px]'>

                            </div>
                        </div>
                    </div>

                    <hr className='w-full my-6'/>
                    
                    <div className='flex flex-col md:max-w-[70%]'>
                        <p className='text-center md:text-start'>
                            Your tests will be conducted in one of our partner labs to ensure highest accuracy of your reports.
                        </p>
                    </div>
                    
                    <hr className='w-full my-6'/>
                    
                    <div className='flex flex-col md:max-w-[70%]'>
                        <h2 className='mb-4 font-semibold text-xl'>Key Information</h2>

                        <p>
                            Home sample collection for FREE
                            A certified professional will collect your sample from your preferred location
                            <br />
                            <br />
                            Get digital report within a day
                            Our labs ensure turn-around-time of 24 hours from specimen pickup
                            <br />
                            <br />
                            Offers and affordable prices
                            Get great discounts and offers on tests and packages.
                        </p>
                    </div>

                    <hr className='w-full my-6'/>

                    <p>Click <span className='text-[#5BDADD]'>here</span> for more information on the product</p>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Test