import React from 'react'
import {BiChevronRight} from 'react-icons/bi'

const CorporateForm = () => {
  return (
    <div className='bg-gray-200 flex flex-col border mt-12 px-8 md:px-12 py-6 md:w-[25vw] rounded-3xl'>
        <h2 className='text-2xl font-bold mb-4 pt-4'>Get Quote Below</h2>
        <p>Please ﬁll in the form below to start</p>

        <form className='my-4'>
            <input type="text" placeholder='Name' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" placeholder='Contract Number' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" placeholder='Company Name' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" placeholder='Number Of Employees' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" placeholder='Preferred Sample Collection Date' className='border-2 w-full p-4 rounded-xl my-2' />

            <button className='w-full bg-[#FCB7AC] text-white p-4 rounded-xl my-4 flex flex-row items-center justify-between'>
                <p className='font-bold '>Submit Information Now</p>
                <BiChevronRight />
            </button>
        </form>
    </div>
  )
}

export default CorporateForm