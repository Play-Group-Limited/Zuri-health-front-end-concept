import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

const DoctorsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("Form submitted")
  }
  return (
    <div className='bg-gray-200 flex flex-col border md:px-12 p-8 md:py-6  rounded-xl'>
        <h2 className='text-2xl mb-4'>Connect with doctors Virtually</h2>
        <p>Please ﬁll in the form below to join</p>

        <form className='my-4'>
            <input type="text" placeholder='Name' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="number" placeholder='Contract Number' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="email" placeholder='Email Address' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="date" placeholder='Choose Consultation Date' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="time" placeholder='Choose Consultation Time' className='border-2 w-full p-4 rounded-xl my-2' />

            <button onSubmit={(e) => handleSubmit(e)} className='w-full bg-[#FF7F00] p-4 rounded-xl my-4 flex flex-row items-center justify-between'>
                <p className='font-bold text-white'>Submit Information Now</p>
                <BiChevronRight className='text-white'/>
            </button>
        </form>
    </div>
  )
}

export default DoctorsForm