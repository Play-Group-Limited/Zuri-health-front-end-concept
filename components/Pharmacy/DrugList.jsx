import React from 'react'
import DrugCard from './DrugCard'

const DrugList = ({products}) => {
  console.log("first" , products)
  return (
    <div className='flex flex-row  w-full mt-8 items-start overflow-x-auto '>
        {/* drug card */}
        {products?.length > 0 && products.map((product) => {
          return (<DrugCard key={product._id} product={product}/>)
        })}
       
    </div>
  )
}

export default DrugList