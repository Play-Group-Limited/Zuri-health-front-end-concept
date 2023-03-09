import Image from "next/image"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

import drugsm from "../../public/assets/stockImgs/categories/drugsm.png"
import drug from "../../public/assets/stockImgs/categories/drug.png"
import { BsCheckCircle } from "react-icons/bs"

import "swiper/css"
import "swiper/css/navigation"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"
import { API_URL } from "../../config/api.config"
import axios from "axios"
import { toast } from "react-toastify"

import { useDispatch, useSelector } from "react-redux"
import {
  addProduct,
  addProductToCart,
  modifyAddProductQuantity,
} from "../../redux/cartSlice"

const Drug = () => {
  const [open, setOpen] = useState(false)
  let [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState({})
  const [indx, setIndx] = useState()

  console.log("DRUG", product)

  const router = useRouter()
  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    if (router.isReady) {
      const productIndex = cart.products.findIndex(
        (product) => product.product._id === router.query.id
      )
      setIndx(productIndex)
    }
  }, [router.isReady, router, cart])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/pharmacy/pharmacy_product_profile/${router.query.id}`
        )
        setProduct(res.data.pharmacy_product)
      } catch (error) {
        console.log()
        if (error.response.status === 404) {
          router.push("/404")
        }
      }
    }
    if (router.isReady) {
      fetchData()
    }
  }, [router.isReady, router.query.id, router])

  const dispatch = useDispatch()

  const handleMinus = () => {
    let quant = quantity - 1
    setQuantity(quant)
  }

  const handleAdd = () => {
    let quant = quantity + 1
    setQuantity(quant)
  }

  const handleClick = () => {
    dispatch(addProductToCart({ product, quantity }))
    toast.success("items added to cart")
    setOpen(true)
  }

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
              <div className='hidden md:flex flex-col'>
                <div className='border p-2 mb-2 rounded-lg'>
                  <Image src={drugsm} alt='drug sm' />
                </div>
                <div className='border p-2 mb-2 rounded-lg'>
                  <Image src={drugsm} alt='drug sm' />
                </div>
                <div className='border p-2 mb-2 rounded-lg'>
                  <Image src={drugsm} alt='drug sm' />
                </div>
              </div>

              <div className='flex flex-col md:ml-4 w-full'>
                <div className='md:hidden w-full flex flex-col items-center'></div>
                <div className='hidden md:block p-12 border border-black rounded-lg mb-2 relative'>
                  {product?.prescription == true ? (
                    <div className='absolute bg-blue-300 top-0 left-0 rounded-t-lg p-2 w-full'>
                      <p>Prescription Required</p>
                    </div>
                  ) : null}
                  <Image
                    src={
                      (product?.imageUrl?.length > 0 &&
                        product?.imageUrl[0].imgPath) ||
                      drug
                    }
                    width={300}
                    height={300}
                    alt='drug' 
                  />
                </div>

                <div className='hidden md:flex flex-col border p-4 w-[60%] rounded-lg md:text-start text-center'>
                  <h3 className='uppercase '>Unit Count</h3>
                  <p className='uppercase'> 15 Tablet (15 / Strip)</p>
                </div>
              </div>
            </div>

            {/* right */}
            <div className='flex flex-col lg:max-w-[60%] md:ml-6 w-full'>
              <div className='md:max-w-[60%] text-center md:text-start'>
                <h3 className='font-semibold text-3xl mb-2'>{product?.name}</h3>
                <p className='mb-6'>
                  Manufactured By Apex Laboratories Pvt. Ltd.
                </p>

                <div className='flex flex-row items-start justify-center md:justify-start mb-6'>
                  <p className='text-xs line-through'>KES 505</p>
                  <h2 className='text-xl text-[#5BDADD] ml-4'>
                    {" "}
                    KES {product?.price}{" "}
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

                <div className='flex flex-row mb-6'>
                  <BsCheckCircle size={30} className='mr-4' />
                  <p>
                    In Stock ({product?.available_quantity} pieces available)
                  </p>
                </div>
              </div>

              <hr className='w-full my-6' />

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

              <hr className='w-full my-6' />

              <div className='flex flex-col '>
                <h2 className='mb-4 font-semibold text-xl'>Description</h2>

                <p>{product?.description}</p>
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
//   const res = await axios.get(
//     `${API_URL}/pharmacy/pharmacy_product_profile/${context.params.id}`
//   )

//   return {
//     props: {
//       product: res.data.pharmacy_product,
//     },
//   }
// }

export default Drug
