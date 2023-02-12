import Image from 'next/image'
import React, { useState } from 'react'

import drugsm from "../../public/assets/stockImgs/categories/drugsm.png"
import drug from "../../public/assets/stockImgs/categories/drug.png"
import { BsCheckCircle } from 'react-icons/bs'

import "swiper/css"
import "swiper/css/navigation"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"
import { API_URL } from '../../config/api.config'
import axios from 'axios'

import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartSlice'

const Drug = ({product}) => {
    console.log(" id: ", product)

    const [open, setOpen] = useState(false)
    let [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch()

     console.log("id: ", product.pharmacy_product)

    console.log(quantity)
    
    const handleMinus = () => {
        let quant = quantity - 1;
        setQuantity(quant) ;   
    }

    const handleAdd = () => {
        let quant = quantity + 1
        setQuantity(quant) ;
    }

    const handleClick = () => {
        dispatch(addProduct({product:product, price:product.price, quantity:quantity}))
        
        setOpen(true)
    }
    
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
                        <div className='hidden md:block p-12 border border-black rounded-lg mb-2 relative'>
                            {  product.prescription == true ? (
                                <div className='absolute bg-blue-300 top-0 left-0 rounded-t-lg p-2 w-full'>
                                    <p>Prescription Required</p>
                                </div>
                            ) : null}
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
                    <div className='md:max-w-[60%] text-center md:text-start'>
                        <h3 className='font-semibold text-3xl mb-2'>{product.name}</h3>
                        <p className='mb-6'>Manufactured By  Apex Laboratories Pvt. Ltd.</p>

                        <div className='flex flex-row items-start justify-center md:justify-start mb-6'>
                            <p className='text-xs line-through'>KES 505</p>
                            <h2 className='text-xl text-[#5BDADD] ml-4'> KES {product.price} </h2>
                        </div>

                        <div className='flex flex-row border rounded-md mb-4  justify-between items-center'>
                            <button onClick={() => handleMinus()} className='bg-gray-300 p-4 rounded-md'>
                                -
                            </button>
                            <p>{quantity}</p>
                            <button onClick={()=>handleAdd()} className='bg-gray-300 p-4 rounded-md'>
                                +
                            </button>
                        </div>

                        <button  onClick={() => handleClick()} className='flex items-center uppercase justify-center py-4 w-full mb-6 rounded-lg bg-[#E9526F] '>
                        <p className='text-white uppercase'> Add to cart </p> 
                        </button>

                        <div className='flex flex-row mb-6'>
                            <BsCheckCircle size={30} className='mr-4'/>
                            <p>
                                In Stock ({product.available_quantity} pieces available)
                            </p>
                        </div>
                    </div>

                    <hr className='w-full my-6'/>

                    <div className='flex flex-col'>
                        <h2 className='mb-4 font-semibold text-xl'>Highlights</h2>

                        <p>
                            Helps increase the appetite
                            <br />
                            Helps treat vitamin & zinc deficiency
                            <br />
                            Helps counter fatigue and exhaustion
                            <br />
                            Helpful for women during pregnancy and surgery
                            <br />
                            Strengthens immunity
                            <br />
                            Ensure speedy recovery from illness
                        </p>
                    </div>

                    <hr className='w-full my-6'/>
                    
                    <div className='flex flex-col '>
                        <h2 className='mb-4 font-semibold text-xl'>Description</h2>

                        <p>
                            {product.description}
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

export const getServerSideProps = async (context) => {
    const res = await axios.get(`${API_URL}/pharmacy/pharmacy_product_profile/${context.params.id}`);
    // const data = await res.json();
    console.log(res.data)
    console.log(context.params)

  
    return{
      props:{
        product: res.data.pharmacy_product,

      }
    }
}

export default Drug