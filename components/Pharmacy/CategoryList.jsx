import React from 'react'
import CategoryCard from './CategoryCard'

const CategoryList = () => {
  return (
    <div className='flex flex-col md:flex-row justify-evenly items-center'>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
    </div>
  )
}

export default CategoryList