import React from 'react'
import {BiChevronRight} from 'react-icons/bi'

const PartnerForm = () => {
  return (
    <div className='bg-gray-200 flex flex-col border px-6 md:px-12 py-6 md:w-[35vw] lg: rounded-3xl'>
        <h2 className='text-2xl font-bold mb-4 pt-4'>Become a Partner</h2>
        <p>Please ﬁll in the form below to join</p>

        <form className='my-4'>
            <input type="text" placeholder='Name' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" placeholder='Contract Number' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" placeholder='Email Address' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" placeholder='Partner as' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" placeholder='Country Selection' className='border-2 w-full p-4 rounded-xl my-2' />

            <button className='w-full bg-[#052749] text-white p-4 rounded-xl my-4 flex flex-row items-center justify-between'>
                <p className='font-bold '>Submit Information Now</p>
                <BiChevronRight />
            </button>
        </form>
    </div>
  )
}

export default PartnerForm