import React from 'react'
import TestCard from './TestCard'

const TestList = ({testProducts}) => {
  console.log("f", testProducts)
  return (
    <div className='flex py-4 flex-row w-full h-full overflow-x-auto'>
      {testProducts?.length > 0 && testProducts?.map((test) => (
          <TestCard key={test._id} test={test}/>

      ))}
        
    </div>
  )
}

export default TestList