import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

const DoctorsForm = () => {
  return (
    <div className='bg-gray-200 flex flex-col border px-12 py-6  rounded-xl'>
        <h2 className='text-2xl mb-4'>Continuos with doctors Virtually</h2>
        <p>Please ﬁll in the form below to join</p>

        <form className='my-4'>
            <input type="text" placeholder='Name' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" placeholder='Contract Number' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" placeholder='Email Address' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" placeholder='Choose Consultation Date' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" placeholder='Choose Consultation Time' className='border-2 w-full p-4 rounded-xl my-2' />

            <button className='w-full bg-[#FF7F00] p-4 rounded-xl my-4 flex flex-row items-center justify-between'>
                <p className='font-bold text-white'>Submit Information Now</p>
                <BiChevronRight className='text-white'/>
            </button>
        </form>
    </div>
  )
}

export default DoctorsForm