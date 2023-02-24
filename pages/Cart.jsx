import Image from "next/image"
import React, { useState } from "react"
import { BiTrash } from "react-icons/bi"
import { BsArrowRightShort } from "react-icons/bs"
import { FiChevronDown } from "react-icons/fi"
import CartCard from "../components/Cart/CartCard"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
// import { API_URL } from '../../config/api.config'
import { useRouter } from "next/router"
import { API_URL } from "../config/api.config"
import Link from "next/link"
import { toast } from "react-toastify"
import { reset } from "../redux/cartSlice"

const Cart = () => {
  const [openBasic, setOpenBasic] = useState(false)
  const [openDelivery, setOpenDelivery] = useState(false)
  const [openPrescription, setOpenPrescription] = useState(false)

  // const handleChange = (e) => {
  //     const { name, value } = e.target
  //     console.log('formData',formData)
  //     setFormData({
  //         ...formData,
  //         [name]: value.trimStart()
  //     })
  //     setFormErrors(validate(formData))

  // }

  // console.log('bug',formErrors)

  const handleSubmit = (e) => {
    try {
    } catch (err) {
      console.log(err)
    }
  }

  const router = useRouter()

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [hseNumber, setHseNumber] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")

  let amount = cart.total

  const checkForInputs = () => {
    if (!name) {
      toast.error("Include your name")
      throw ""
    }
    if (!email) {
      toast.error("Include your email")
      throw ""
    }
    if (!phone) {
      toast.error("Include your phone number")
      throw ""
    }
    if (!address) {
      toast.error("Include your address")
      throw ""
    }
    if (!hseNumber) {
      toast.error("Include your house number")
      throw ""
    }
    if (!city) {
      toast.error("Include your city")
      throw Error("")
    }
    if (!country) {
      toast.error("Include your country")
      throw ""
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const makeOrder = async () => {
    const details = cart.products.map((item) => {
      return {
        product_id: item.product._id,
        qty: item.quantity,
        unit_price: item.product.price,
      }
    })
    checkForInputs()
    try {
      const paylaod = {
        name: name,
        email: email,
        country: capitalizeFirstLetter(country),
        phone: phone,
        pharmacy_id: "60a8d5fe626f28e1cbe94ef4",
        details,
        delivery_address: {
          coordinates: {
            latitude: 34.8999,
            longitude: 2.93334,
          },
          address: "Sangotedo",
        },
        prescription: "60ab1e9f3e92e101ab0c6335",
        e_prescription_code: "AFFDD545G6",
        payment_type: "online",
        fromCurrency: "KES",
        amount,
        delivery_fee: 300,
        final_amount: 50,
      }
      const { data } = await axios.post(
        `${API_URL}/pharmacy/add_zurihealth_direct_pharmacy_order`,
        paylaod
      )
      if (data) {
        router.push(data.link)
      }
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  if (typeof window !== "undefined") {
    // Perform localStorage action
    const item = localStorage.getItem("cart")
    console.log("item", item)
    let item_serialized = JSON.stringify(item)
    console.log("serial", item_serialized)
  }

  return (
    <div className='w-full h-full flex item-center justify-center'>
      <div className='flex flex-col mx-4 items-cent justify-center max-w-[1440px]  w-full'>
        <h2 className='font-semibold text-3xl uppercase my-8 flex items-start text-start md:text-start'>
          Shopping Cart
        </h2>
        <div className='flex flex-col items-center justify-center w-full'>
          <div className='flex flex-col mx-4 md:mx-0 w-full max-w-[1440px]  '>
            <div className='lg:flex flex-row items-center justify-between mb-4 hidden lg:max-w-[85%] xl:max-w-[80%]'>
              <div className='flex flex-row'>
                <div className='w-8 h-8 rounded-full bg-[#5BDADD] mr-4 flex justify-center items-center '>
                  <p className='text-xl '>1</p>
                </div>
                <p className='text-xl font-bold'>Confirm your order</p>
              </div>
              <div className='flex flex-row'>
                <div className='w-8 h-8 rounded-full bg-[#5BDADD] mr-4 flex justify-center items-center '>
                  <p className='text-xl '>2</p>
                </div>
                <p className='text-xl font-bold'>Confirm your details</p>
              </div>
            </div>

            <div className='flex flex-col lg:flex-row w-full justify-between'>
              {/* left */}
              <div className='flex flex-row lg:hidden'>
                <div className='w-8 h-8 rounded-full bg-[#5BDADD] mr-4 flex justify-center items-center '>
                  <p className='text-xl '>1</p>
                </div>
                <p className='text-xl font-bold'>Confirm your order</p>
              </div>
              <div className='flex flex-col w-full lg:w-[60%] mr-16'>
                <div className='flex flex-col md:flex-row items-center justify-between mt-8'>
                  <div className='flex flex-row'>
                    <p className='md:text-xl font-bold '>
                      Your Order Summary:{" "}
                    </p>
                    <p className='md:text-xl font-bold text-gray-500 ml-2'>
                      {cart.quantity} items
                    </p>
                  </div>

                  <div className='flex flex-row items-center'>
                    <button
                      className='text-lg font-semibold ml-2 flex items-center hover:text-red-500 transition-all duration-150 ease-linear'
                      onClick={() => dispatch(reset())}>
                      <BiTrash size={20} className='mr-4' />
                      Clear Cart
                    </button>
                  </div>
                </div>
                <hr className='my-4 border-black' />

                {cart.products?.length > 0 &&
                  cart.products.map((product, index) => {
                    return (
                      <CartCard
                        key={product._id}
                        product={product}
                        index={index}
                      />
                    )
                  })}

                <div className='w-full flex flex-row justify-end items-end'>
                  <div className='flex flex-row items-center'>
                    <p className='mr-2'>Not ready to checkout?</p>
                    <Link href='/Pharmacy'>
                      <button className='p-2 cursor-pointer border border-black'>
                        <p>Continue shopping here</p>
                      </button>
                    </Link>
                  </div>
                </div>

                <div className='p-4 my-12  bg-[#5BDADD] flex flex-row justify-between rounded-md'>
                  <h2 className='uppercase font-bold text-xl'>Sub total</h2>
                  <p className='uppercase font-bold text-xl'>
                    {" "}
                    KES {cart.total}
                  </p>
                </div>
              </div>

              {/* right */}
              <div className='lg:w-[40%] my-20 border-t py-20 md:py-0 lg:border-t-0 lg:border-l border-black'>
                <div className='md:hidden flex flex-row mb-8 '>
                  <div className='w-8 h-8 rounded-full bg-[#5BDADD] mr-4 flex justify-center items-center '>
                    <p className='text-xl '>2</p>
                  </div>
                  <p className='text-xl font-bold'>Confirm your details</p>
                </div>
                <div className='flex flex-col items-center w-full py-8 lg:py-0'>
                  <div className='px-8 py-4 md:w-[80%] border border-black bg-gray-200 flex flex-col rounded-lg w-full'>
                    <div
                      onClick={() => setOpenBasic((prev) => !prev)}
                      className='flex flex-row justify-between'>
                      <div className='flex flex-col mr-16'>
                        <h3 className='font-bold text-xl'>Basic Infomation</h3>
                        <p className='text-xs'>
                          please fill in the basic information
                        </p>
                      </div>

                      <FiChevronDown size={40} />
                    </div>

                    {openBasic ? (
                      <div className='mt-6'>
                        <input
                          type='text'
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder='Name'
                          className='bg-white p-4 my-4  w-full rounded-lg border border-black'
                        />
                        <input
                          type='text'
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder='Contact Number'
                          className='bg-white p-4 my-4  w-full rounded-lg border border-black'
                        />
                        <input
                          type='text'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder='Email Address'
                          className='bg-white p-4 my-4  w-full rounded-lg border border-black'
                        />
                      </div>
                    ) : null}
                  </div>

                  <div className='px-8 my-8 py-4 md:w-[80%] border border-black bg-gray-200 flex flex-col rounded-lg  w-full '>
                    <div
                      onClick={() => setOpenDelivery((prev) => !prev)}
                      className='flex flex-row justify-between'>
                      <div className='flex flex-col mr-16'>
                        <h3 className='font-bold text-xl'>Delivery Address</h3>
                        <p className='text-xs'>
                          Please enter the address you would like us to deliver
                          to
                        </p>
                      </div>

                      <FiChevronDown size={40} />
                    </div>

                    {openDelivery ? (
                      <div className='mt-6'>
                        <input
                          type='text'
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder='Address'
                          className='bg-white p-4 my-4  w-full rounded-lg border border-black'
                        />
                        <input
                          type='text'
                          value={hseNumber}
                          onChange={(e) => setHseNumber(e.target.value)}
                          placeholder='House no / Flat no'
                          className='bg-white p-4 my-4  w-full rounded-lg border border-black'
                        />
                        <input
                          type='text'
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder='City / Town'
                          className='bg-white p-4 my-4  w-full rounded-lg border border-black'
                        />
                        <input
                          type='text'
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          placeholder='State / County'
                          className='bg-white p-4 my-4  w-full rounded-lg border border-black'
                        />
                      </div>
                    ) : null}
                  </div>

                  <div className='px-8 py-4 md:w-[80%] border border-black bg-gray-200 flex flex-col rounded-lg  w-full '>
                    <div
                      onClick={() => setOpenPrescription((prev) => !prev)}
                      className='flex flex-row justify-between'>
                      <div className='flex flex-col mr-16'>
                        <h3 className='font-bold text-xl'>
                          Upload Prescription
                        </h3>
                        <p className='text-xs'>
                          Some items on this order require a Doctor&apos;s
                          prescription
                        </p>
                      </div>

                      <FiChevronDown size={40} />
                    </div>

                    {openPrescription ? (
                      <div className='mt-6'>
                        <input
                          type='file'
                          className='bg-white p-4 my-4  w-full rounded-lg border border-black'
                        />
                      </div>
                    ) : null}
                  </div>
                </div>

                <button
                  onClick={() => makeOrder()}
                  className='px-8 py-2 flex flex-row rounded-lg justify-between items-center bg-red-400 my-8 md:mx-16'>
                  <p className='uppercase text-white'>Place order now</p>
                  <BsArrowRightShort size={30} className='ml-8 text-white' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
