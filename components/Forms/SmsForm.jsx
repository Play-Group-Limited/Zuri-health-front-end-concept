import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { toast } from 'react-toastify'

const SmsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("Form submitted")
  }
  return (
    <div className='bg-gray-200 flex flex-col border px-8 py-8  rounded-xl'>
        <h2 className='text-2xl mb-4'>Subscribe to SMS Service</h2>
        <p>Please ﬁll in the form below to join</p>

        <form className='my-4'>
            <input type="text" placeholder='Name' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="number" placeholder='Contact Number' className='border-2 w-full p-4 rounded-xl my-2' />
            
            <button type='submit' onSubmit={(e) => handleSubmit(e)} className='w-full bg-[#ED3763] p-4 rounded-xl my-4 flex flex-row items-center justify-between'>
                <p className='font-bold text-white'>Submit Information Now</p>
                <BiChevronRight  className='text-white'/>
            </button>
        </form>
    </div>
  )
}

export default SmsForm