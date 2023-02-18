import React from 'react'
import TestCard from './TestCard'

const TestList = ({products}) => {
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap md:items-end md:justify-start justify-center'>
      {products?.length > 0 && products.map((product) => {
        return <TestCard key={product._id} product={product}/>
      })}

      
    </div>
  )
}

export default TestList