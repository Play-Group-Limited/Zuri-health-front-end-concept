import React from 'react'
import {BiChevronRight} from 'react-icons/bi'
import { toast } from 'react-toastify'

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("Form submitted")
  }
  return (
    <div className='bg-gray-200 flex flex-col border mt-12 px-8 md:px-6 lg:px-12 py-6 md:w-[30vw] lg:w-full rounded-3xl'>
        <p>Please ﬁll in the form below to start</p>

        <form onSubmit={(e) => handleSubmit(e)} className='my-4 flex flex-col md:flex-row'>
          <div className='flex flex-col lg:w-[30vw] mr-4'>
            <input type="text" placeholder='Type of Query' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" placeholder='Name' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="email" placeholder='Email Address' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="number" placeholder='Phone Number (Optional)' className='border-2 w-full p-4 rounded-xl my-2' />
          </div>
          <div className='w-full'>
            <textarea type="text" rows={7} placeholder='Please Enter Details Here' className='border-2 w-full p-4 rounded-xl my-2' />

            <button type='submit' className='w-full bg-black text-white p-4 rounded-xl my-4 flex flex-row items-center justify-between'>
                <p className='font-bold md:text-base text-sm'>Submit Information Now</p>
                <BiChevronRight />
            </button>
          </div>
        </form>
    </div>
  )
}

export default ContactForm