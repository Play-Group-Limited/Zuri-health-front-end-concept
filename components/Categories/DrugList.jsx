import React from 'react'
import DrugCard from './DrugCard'

const DrugList = ({products}) => {
  console.log("categoryyyyyy: ", products)
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap md:items-end md:justify-start justify-center'>
      {products?.length > 0 && products.map((product) => {
        return <DrugCard key={product._id} product={product}/>
      })}

      
    </div>
  )
}

export default DrugList