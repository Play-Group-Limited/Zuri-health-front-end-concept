import React from 'react'
import { BsChevronBarDown, BsChevronDown, BsClipboard, BsClock, BsGlobe } from 'react-icons/bs'
import { TbSpeakerphone } from 'react-icons/tb'

const UserDashboard = () => {
  return (
    <div className='w-full h-full bg-slate-200 flex  justify-center'>
        <div className='flex flex-row w-full max-w-[1440px] py-12 '>
          <div className='flex flex-col items-start justify-start w-full px-2'>
            <h1 className='text-3xl font-bold'>Customer Dashboard</h1>
            {/* Welcome */}
            <div className='flex flex-col md:flex-row w-full '>
              <div className='flex flex-col border p-4 mr-0 md:mr-4 md:p-12 justify-center rounded-xl mt-8 bg-white w-full'>
                <h3 className='text-red-500 text-2xl font-bold'>Hello Vanessa!</h3>
                <div className='flex flex-col md:flex-row justify-between'>
                  <p className='text-lg mt-4'>
                    This is a summary of your purchases Below. Select between the month, year or lifetime view.
                  </p>
                  <button className='p-4 bg-blue-300 rounded-lg my-4 md:my-0 '>
                    <p>View Invoices</p>
                  </button>
                </div>
              </div>
              <div className='flex flex-col border p-4 md:p-12 w-full md:w-[30%] rounded-xl mt-8 bg-white '>
                <h3 className='text-xl font-bold'>Today</h3>
                <div className='flex flex-row mt-4 justify-between'>
                  <BsClock size={100} className='text-red-500'/>
                  <div className='flex flex-col'>
                    <h3 className='text-5xl text-red-500'>12:25</h3>
                    <p className=''>
                      Tuesday,
                      <br />
                      28 February 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Transaction History */}
            <div className='flex flex-col md:flex-row w-full'>
              <div className='flex flex-col w-full mr-4'>
                <div className='flex flex-row justify-between items-center  border p-4 md:p-8 w-full mr-4 rounded-xl mt-8 bg-white '>
                  <div className='flex flex-row items-center'>
                    <h2 className='text-3xl font-bold'>Transaction Summary</h2>  
                    <BsChevronDown size={20} className='ml-4'/>             
                  </div>
                  <p className='font-thin underline'>Select Period</p>
                </div>
                <div className='flex flex-row justify-between items-center  border p-4 md:p-8 w-full text-white mr-4 rounded-xl mt-4 bg-black '>
                  <div className='flex flex-row items-center'>
                    <h2 className='text-3xl font-bold '>Past Month</h2>  
                  </div>
                  <p className='font-bold text-3xl'>+</p>
                </div>
                <div className='flex flex-row justify-between items-center  border p-4 md:p-8 w-full mr-4 rounded-xl mt-4 bg-white '>
                  <div className='flex flex-col justify-center w-full'>
                    <p className=' '>Below are your activities in the past month:</p>  

                    <div className='mt-4 flex flex-col md:flex-row items-center py-8 justify-evenly w-full'>
                      <div className='flex flex-col items-center my-4 md:my-0'>
                        <h3 className='text-xl xl:text-3xl'>Total Transactions</h3>
                        <h3 className='text-3xl text-red-500'>24,567</h3>
                        <BsClipboard size={30} className='my-4'/>
                        <p className='underline'>View Invoices</p>
                      </div>
                      <div className='flex flex-col items-center my-4 md:my-0'>
                        <h3 className='text-xl xl:text-3xl'>Total Orders</h3>
                        <h3 className='text-3xl text-red-500'>5</h3>
                        <BsGlobe size={30} className='my-4'/>
                        <p className='underline'>Share Activity</p>
                      </div>
                      <div className='flex flex-col items-center my-4 md:my-0'>
                        <h3 className='text-xl xl:text-3xl whitespace-nowrap'>Loyalty Points Earned</h3>
                        <h3 className='text-3xl text-red-500'>1000</h3>
                        <TbSpeakerphone size={30} className='my-4'/>
                        <p className='underline'>Share Activity</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row justify-between items-center  border p-4 md:p-8 w-full text-white mr-4 rounded-xl mt-4 bg-black '>
                  <div className='flex flex-row items-center'>
                    <h2 className='text-3xl font-bold '>Past Month</h2>  
                  </div>
                  <p className='font-bold text-3xl'>+</p>
                </div>
                <div className='flex flex-row justify-between items-center  border p-4 md:p-8 w-full text-white mr-4 rounded-xl mt-4 bg-black '>
                  <div className='flex flex-row items-center'>
                    <h2 className='text-3xl font-bold '>Past Month</h2>  
                  </div>
                  <p className='font-bold text-3xl'>+</p>
                </div>
              </div>
              <div className='flex flex-col border p-4 md:p-8  w-full md:w-[30%] rounded-xl mt-8 bg-white '>
                <h2 className='text-3xl font-bold'>Transaction Summary</h2>               
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default UserDashboard