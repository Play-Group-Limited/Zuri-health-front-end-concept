import Image from 'next/image'
import React, { useState } from 'react'
import { BiTrash } from "react-icons/bi"
import { BsArrowRightShort } from 'react-icons/bs'
import { FiChevronDown } from "react-icons/fi"
import CartCard from '../components/Cart/CartCard'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
// import { API_URL } from '../../config/api.config'
import { useRouter } from "next/router"

import { API_URL } from '../config/api.config'
import Link from 'next/link'
import validate from "../components/utils/validate"
import { reset } from '../redux/cartSlice'


const Cart = () => {

    const [openBasic, setOpenBasic] = useState(false)
    const [openDelivery, setOpenDelivery] = useState(false)
    const [openPrescription, setOpenPrescription] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        hseNumber: '',
        city: '',
        country: '',
        uploadPresciption: null
    })

    const [formErrors, setFormErrors] = useState({
        name: '',
        nameBorder: '#808080',
        email: '',
        emailBorder: '#808080',
        phone: '',
        phoneBorder: '#808080',
        address: '',
        addressBorder: '#808080',
        hseNumber: '',
        hseNumberBorder: '#808080',
        city: '',
        cityBorder: '#808080',
        country: '',
        countryBorder: '#808080'
    })

    const handleChange = (e) => {

        const { name, value } = e.target
        console.log('formData', formData)
        setFormData({
            ...formData,
            [name]: value.trimStart()
        })
        setFormErrors(validate(formData))
    }

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFormData({
                ...formData,
                uploadDescription: e.target.files[0]
            })
        }
    }

    const handleReset = () => {
        localStorage.clear()
        dispatch(reset())
    }
    const handleSubmit = (e) => {
        try {

        } catch (err) {
            console.log(err)
        }
    }


    const router = useRouter();

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart);

    let amount = cart.total
    console.log("cart", cart)

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const makeOrder = async () => {
        const details = cart.products.map((item) => {
            return {
                product_id: item.product._id,
                qty: item.quantity,
                unit_price: item.product.price
            }
        })

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
                    longitude: 2.93334
                },
                address: "Sangotedo"
            },
            prescription: "60ab1e9f3e92e101ab0c6335",
            e_prescription_code: "AFFDD545G6",
            payment_type: "online",
            fromCurrency: "KES",
            amount,
            delivery_fee: 300,
            final_amount: 50
        }
        const { data } = await axios.post(`${API_URL}/pharmacy/add_zurihealth_direct_pharmacy_order`, paylaod);
        if (data) {
            router.push(data.link)
        }
        console.log(data)
    }

    if (typeof window !== 'undefined') {
        // Perform localStorage action
        const item = localStorage.getItem('cart')
        console.log('item', item)
        let item_serialized = JSON.stringify(item)
        console.log('serial', item_serialized)
    }



    return (
        <div className='w-full h-full flex item-center justify-center'>
            <div className='flex flex-col mx-4 items-cent justify-center max-w-[1440px]  w-full'>
                <h2 className='font-semibold text-3xl uppercase my-8 flex items-start text-start md:text-start'>Shopping Cart</h2>
                <div className='flex flex-col items-center justify-center w-full'>
                    <div className='flex flex-col mx-4 md:mx-0 w-full max-w-[1440px]  '>
                        <div className='md:flex flex-row items-center justify-between mb-4 hidden'>
                            <div className='flex flex-row'>
                                <div className='w-8 h-8 rounded-full bg-[#5BDADD] mr-4 flex justify-center items-center '>
                                    <p className='text-xl '>1</p>
                                </div>
                                <p className='text-xl font-bold'>Confirm your order</p>
                            </div>
                            
                            <hr className='my-4 border-black'/>

                            {cart.products?.length > 0 && cart.products.map((product, index) => {
                                return (<CartCard key={product._id} product={product} index={index} />)
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

                            <div className='flex flex-row'>
                                <div className='w-8 h-8 rounded-full bg-[#5BDADD] mr-4 flex justify-center items-center '>
                                    <p className='text-xl '>2</p>

                                </div>
                                <p className='text-xl font-bold'>Confirm your details</p>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row w-full justify-between'>
                            {/* left */}
                            <div className='flex flex-col w-full md:w-[60%] mr-16'>
                                <div className='flex flex-col md:flex-row items-center justify-between mt-8'>
                                    <div className='flex flex-row'>
                                        <p className='md:text-xl font-bold '>Your Order Summary: </p>
                                        <p className='md:text-xl font-bold text-gray-500 ml-2'>{cart.quantity} items</p>
                                    </div>

                                    <div className='flex flex-row items-center'>
                                        <BiTrash size={20} />
                                        <p className='text-lg font-semibold ml-4' onClick={() => handleReset()}>Clear Cart</p>
                                    </div>
                                </div>
                                <hr className='my-4 border-black' />

                                {cart.products?.length > 0 && cart.products.map((product, index) => {
                                    return (<CartCard key={product._id} product={product} index={index} />)
                                })}

                                <div className='w-full flex flex-row justify-end items-end'>
                                    <div className='flex flex-row items-center'>
                                        <p className='mr-2'>Not ready to checkout?</p>
                                        <button className='p-2 cursor-pointer border border-black'>
                                            <p>Continue shopping here</p>
                                        </button>
                                    </div>
                                </div>

                                <div className='p-4 my-12  bg-[#5BDADD] flex flex-row justify-between rounded-md'>
                                    <h2 className='uppercase font-bold text-xl'>Sub total</h2>
                                    <p className='uppercase font-bold text-xl'> KES {cart.total}</p>

                                </div>
                            </div>

                            {/* right */}
                            <div className='md:w-[40%] my-20 border-t py-20 md:py-0 md:border-t-0 md:border-l border-black'>
                                <div className='flex flex-col items-center w-full'>
                                    <div className='px-8 py-4 md:w-[80%] border border-black bg-gray-200 flex flex-col rounded-lg '>
                                        <div onClick={() => setOpenBasic(prev => !prev)} className='flex flex-row justify-between'>
                                            <div className='flex flex-col mr-16'>
                                                <h3 className='font-bold text-xl'>Basic Infomation</h3>
                                                <p className='text-xs'>please fill in the basic information</p>
                                            </div>

                                            <FiChevronDown size={40} />
                                        </div>

                                        {openBasic ? (
                                            <div className='mt-6'>
                                                <input type="text" name='name' style={{ border: `0.1rem solid ${formErrors.nameBorder}` }} value={formData.name} onInput={(e) => handleChange(e)} onFocus={(e) => handleChange(e)} onBlur={(e) => handleChange(e)} onChange={(e) => handleChange(e)} className="bg-white p-4 my-4 w-full rounded-lg border border-black" placeholder="Name" />
                                                <small style={{ color: `${formErrors.nameBorder}` }}>{formErrors?.name}</small>

                                                <input type="text" name='email' style={{ border: `0.1rem solid ${formErrors.emailBorder}` }} value={formData.email} onInput={(e) => handleChange(e)} onFocus={(e) => handleChange(e)} onBlur={(e) => handleChange(e)} onChange={(e) => handleChange(e)} className="bg-white p-4 my-4 w-full rounded-lg border border-black" placeholder="Email Address" />
                                                <small style={{ color: `${formErrors.emailBorder}` }}>{formErrors?.email}</small>

                                                <input type="text" name='phone' style={{ border: `0.1rem solid ${formErrors.phoneBorder}` }} value={formData.phone} onInput={(e) => handleChange(e)} onFocus={(e) => handleChange(e)} onBlur={(e) => handleChange(e)} onChange={(e) => handleChange(e)} className="bg-white p-4 my-4 w-full rounded-lg border border-black" placeholder="Contact Number (+254, +26, etc.)" />
                                                <small style={{ color: `${formErrors.phoneBorder}` }}>{formErrors?.phone}</small>
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className='px-8 my-8 py-4 md:w-[80%] border border-black bg-gray-200 flex flex-col rounded-lg '>
                                        <div onClick={() => setOpenDelivery(prev => !prev)} className='flex flex-row justify-between'>
                                            <div className='flex flex-col mr-16'>
                                                <h3 className='font-bold text-xl'>Delivery Address</h3>
                                                <p className='text-xs'>Please enter the address you would like us to deliver to</p>
                                            </div>


                                            <FiChevronDown size={40} />
                                        </div>

                                        {openDelivery ? (
                                            <div className='mt-6'>
                                                <input type="text" name="address" style={{ border: `0.1rem solid ${formErrors.nameBorder}` }} value={formData.address} onInput={(e) => handleChange(e)} onFocus={(e) => handleChange(e)} onBlur={(e) => handleChange(e)} onChange={(e) => handleChange(e)} placeholder="Address" className='bg-white p-4 my-4  w-full rounded-lg border border-black' />
                                                <small style={{ color: `${formErrors.addressBorder}` }}>{formErrors?.address}</small>

                                                <input type="text" name="hseNumber" style={{ border: `0.1rem solid ${formErrors.hseNumberBorder}` }} value={formData.hseNumber} onInput={(e) => handleChange(e)} onFocus={(e) => handleChange(e)} onBlur={(e) => handleChange(e)} onChange={(e) => handleChange(e)} placeholder="House no / Flat no" className='bg-white p-4 my-4  w-full rounded-lg border border-black' />
                                                <small style={{ color: `${formErrors.hseNumberBorder}` }}>{formErrors?.hseNumber}</small>

                                                <input type="text" name="city" style={{ border: `0.1rem solid ${formErrors.cityBorder}` }} value={formData.city} onInput={(e) => handleChange(e)} onFocus={(e) => handleChange(e)} onBlur={(e) => handleChange(e)} onChange={(e) => handleChange(e)} placeholder="City / Town" className='bg-white p-4 my-4  w-full rounded-lg border border-black' />
                                                <small style={{ color: `${formErrors.cityBorder}` }}>{formErrors?.city}</small>

                                                <input type="text" name="country" style={{ border: `0.1rem solid ${formErrors.countryBorder}` }} value={formData.country} onInput={(e) => handleChange(e)} onFocus={(e) => handleChange(e)} onBlur={(e) => handleChange(e)} onChange={(e) => handleChange(e)} placeholder="State / Country" className='bg-white p-4 my-4  w-full rounded-lg border border-black' />
                                                <small style={{ color: `${formErrors.countryBorder}` }}>{formErrors?.country}</small>
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className='px-8 py-4 md:w-[80%] border border-black bg-gray-200 flex flex-col rounded-lg '>
                                        <div onClick={() => setOpenPrescription(prev => !prev)} className='flex flex-row justify-between'>
                                            <div className='flex flex-col mr-16'>
                                                <h3 className='font-bold text-xl'>Upload Prescription</h3>
                                                <p className='text-xs'>Some items on this order require a Doctor&apos;s prescription</p>
                                            </div>

                                            <FiChevronDown size={40} />
                                        </div>

                                        {openPrescription ? (
                                            <div className='mt-6'>
                                                <input type="file" className='bg-white p-4 my-4  w-full rounded-lg border border-black' onInput={(e) => handleFileChange(e)} onFocus={(e) => handleFileChange(e)} onBlur={(e) => handleFileChange(e)} onChange={(e) => handleFileChange(e)} />
                                            </div>
                                        ) : null}
                                    </div>
                                </div>

                                <button onClick={() => makeOrder()} className='px-8 py-2 flex flex-row justify-between rounded-xl items-center bg-red-400 my-8 md:mx-16'>
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