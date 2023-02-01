import React from 'react'

const TestCard = ({test}) => {
  return (
    <div className='flex flex-col mx-2'>
        <div className='rounded-lg bg-[#ABFBFE]/80 p-4 px-6'>
            <h4 className='font-bold'>{test.name}</h4>
            <p className='my-4'>
                {test.description}
            </p>
            <p className='whitespace-nowrap'>
                E-results the same day
            </p>
        </div>  

        <div className='flex flex-row items-center justify-center mt-4'>
            <p className='border-2 p-2 border-black rounded-lg whitespace-nowrap'>
                KSH. {test.price}.00
            </p>
            <button className='border-2 ml-2 border-black p-2 rounded-lg whitespace-nowrap'>
                Book Now
            </button>
        </div>                  
    </div>
  )
}

export default TestCard