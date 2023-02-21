import React from 'react'
import DocAtHomeForm from '../Forms/DocAtHomeForm'
import SmsForm from '../Forms/SmsForm'

const Sms = () => {
  return (
    <div className='w-full my-4 flex flex-col'>
        <div className='flex flex-row'>
            <div className='w-full flex flex-col lg:flex-row justify-center  my-8'>
                <div className='w-full'>
                    <div className='w-[50%] border-2 p-4 my-4 rounded-xl'>
                        <select className='w-full  '>
                            <option value="Home">Chat with doctor on SMS</option>
                            <option value="Office">Office</option>
                            <option value="Airport">Airport</option>
                        </select>
                    </div>
                    <p className='text-[#ED3763] font-semibold text-ellipsis'>
                        Subscribe to Zuri Health to receive first medical consultation from qualified practitioners via SMS.
                    </p>
                </div>
                
                <div className=' w-full flex justify-end items-end pt-8 max-w-[525px]'>
                    <SmsForm />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sms