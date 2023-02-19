import React from 'react'
import {BiChevronRight} from 'react-icons/bi'

const CCPForm = () => {
  return (
    <div className='bg-gray-200 flex flex-col border mt-12 px-8 md:px-6 lg:px-12 py-6 md:w-[30vw] lg::w-[25vw] rounded-3xl'>
        <h2 className='text-2xl font-bold mb-4'>Continuos Care Programe</h2>
        <p>Please ﬁll in the form below to join</p>

        <form className='my-4'>
            <input type="text" placeholder='Name' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" placeholder='Contract Number' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" placeholder='Email Address' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" placeholder='Select Condition' className='border-2 w-full p-4 rounded-xl my-2' />

            <button className='w-full bg-[#58E5E8] p-4 rounded-xl my-4 flex flex-row items-center justify-between'>
                <p className='font-bold'>Submit Information Now</p>
                <BiChevronRight />
            </button>
        </form>
    </div>
  )
}

export default CCPForm