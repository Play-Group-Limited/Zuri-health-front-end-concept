import Image from "next/image"
import React, { useEffect, useState } from "react"

import drugsm from "../../public/assets/stockImgs/categories/drugsm.png"
import test from "../../public/assets/stockImgs/categories/test/test.png"
import { BsCheckCircle } from "react-icons/bs"

import "swiper/css"
import "swiper/css/navigation"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"
import axios from "axios"
import { API_URL } from "../../config/api.config"
import { useDispatch } from "react-redux"
import { addProduct, addProductToLabCart } from "../../redux/labCartSlice"
import { useRouter } from "next/router"
import { toast } from "react-toastify"

const Test = () => {
  const [testProduct, setTestProduct] = useState({})
  let [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if(quantity < 0) {
      setQuantity(0)
    }

  }, [quantity])
  
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/test_diagnostic/test_product_profile/${router.query.id}`
        )
        setTestProduct(res.data.test_product)
      } catch (error) {
        if (error.response.status === 404) {
          router.push("/404")
        }
      }
    }
    if (router.isReady) {
      fetchData()
    }
  }, [router.isReady, router.query.id, router])

  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  console.log(quantity)

  const handleMinus = () => {
    let quant = quantity - 1
    setQuantity(quant)
  }

  const handleAdd = () => {
    let quant = quantity + 1
    setQuantity(quant)
  }

  const handleClick = () => {
    dispatch(addProductToLabCart({ product: testProduct, quantity }))
    toast.success("items added to cart")
    setOpen(true)
  }

  console.log(testProduct)

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      {/* <div className='bg-[#5BDADD] w-full px-4  py-8 flex items-center justify-center'>
        <div className='w-[75%]'>
          <p>home</p> 
        </div>
      </div> */}
      <div className='w-full mx-4 flex items-center justify-center'>
        <div className='my-8  max-w-[1440px] mx-4'>
          <div className='flex flex-col md:flex-row'>
            {/* left */}
            <div className='flex flex-row'>
              <div className='flex flex-col md:ml-4 w-full'>
                <div className='md:hidden md:w-full flex flex-col items-center'>
                  {/* <Swiper navigation={true} modules={[Navigation]} className='z-0 max-w-[100vh] md:w-full'>
                                    <SwiperSlide>
                                        <div className='w-full'>
                                            <div className='md:p-12 border border-black rounded-lg mb-2'>
                                                <Image src={test} alt="drug" className=' md:w-full md:h-full md:object-cover'/>
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
                                </Swiper> */}
                </div>
                <div className='hidden md:block p-12 border border-black rounded-lg mb-2'>
                  <Image src={test} alt='drug' />
                </div>

                <div className='hidden md:flex flex-col border p-4 w-[60%] rounded-lg md:text-start text-center'>
                  <h3 className='uppercase '>{testProduct.available ? <p>This Product is available</p> : <p>This product is unavailable</p>}</h3>
                  {/* <p className='uppercase'> 15 Tablet (15 / Strip)</p> */}
                </div>
              </div>
            </div>

            {/* right */}
            <div className='flex flex-col md:ml-6 lg:max-w-[60%]'>
              <div className='lg:max-w-[60%] text-center md:text-start'>
                <h3 className='font-semibold text-3xl mb-2'>
                  {testProduct?.name}
                </h3>
                <p className='mb-6'>{testProduct?.description}</p>

                <div className='flex flex-row items-start justify-center md:justify-start mb-6'>
                  <p className='text-xs line-through'>KES 505</p>
                  <h2 className='text-xl text-[#5BDADD] ml-4'>
                    {" "}
                    KES {testProduct?.price}{" "}
                  </h2>
                </div>

                <div className='flex flex-row border rounded-md mb-4  justify-between items-center'>
                  <button
                    onClick={() => handleMinus()}
                    className='bg-gray-300 p-4 rounded-md'>
                    -
                  </button>
                  <p>{quantity}</p>
                  <button
                    onClick={() => handleAdd()}
                    className='bg-gray-300 p-4 rounded-md'>
                    +
                  </button>
                </div>

                <button
                  onClick={() => handleClick()}
                  className='flex items-center uppercase justify-center py-4 w-full mb-6 rounded-lg bg-[#E9526F] '>
                  <p className='text-white uppercase'> Add to cart </p>
                </button>

                
              </div>

              <hr className='w-full my-6' />

              <div className='flex flex-col'>
                <h2 className='mb-4 font-semibold text-xl'>Our Partner Lab</h2>

                <div className='flex flex-col md:flex-row items-center justify-between'>
                  <p className='my-4 md:my-0'>Lancent Laboritorie Ltd.</p>
                  <div className='border border-black h-[200px] w-[200px]'></div>
                </div>
              </div>

              <hr className='w-full my-6' />

              <div className='flex flex-col md:max-w-[70%]'>
                <p className='text-center md:text-start'>
                  Your tests will be conducted in one of our partner labs to
                  ensure highest accuracy of your reports.
                </p>
              </div>

              <hr className='w-full my-6' />

              <div className='flex flex-col md:max-w-[70%]'>
                <h2 className='mb-4 font-semibold text-xl'>Key Information</h2>

                <p>
                  Home sample collection for FREE A certified professional will
                  collect your sample from your preferred location
                  <br />
                  <br />
                  Get digital report within a day Our labs ensure
                  turn-around-time of 24 hours from specimen pickup
                  <br />
                  <br />
                  Offers and affordable prices Get great discounts and offers on
                  tests and packages.
                </p>
              </div>

              <hr className='w-full my-6' />

              <p>
                Click <span className='text-[#5BDADD]'>here</span> for more
                information on the product
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// export const getServerSideProps = async (context) => {
//   // const testKit = await axios.get(
//   // //   `${API_URL}/test_diagnostic/test_product/${context.params.id}`
//   // )
//   const testProfile = await axios.get(
//     `${API_URL}/test_profile/get_test_profiles`
//   )
//   const testProduct = await axios.get(
//     `${API_URL}/test_diagnostic//test_product_profile/${context.params.id}`
//   )
//   const testPackage = await axios.get(
//     `${API_URL}/test_diagnostic/display_wellness_packages`
//   )

//   //   if (!testProduct.data) {

//   //   }

//   // const data = await res.json();
//   // console.log(res.data)

//   return {
//     props: {
//       // testKit: testKit.data,/
//       testProfile: testProfile.data,
//       testProduct: testProduct.data,
//       testPackage: testPackage.data,
//     },
//   }
// }

export default Test
