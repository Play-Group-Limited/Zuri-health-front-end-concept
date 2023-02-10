import React from 'react'
import CategoryCard from './CategoryCard'

const CategoryListMobile = () => {

  const categories = [
    {
      id: 1,
      img: "/assets/stockImgs/Pharmacy/categories/baby.png",
      text: "Mum & Baby"
    },
    {
      id: 2,
      img: "/assets/stockImgs/Pharmacy/categories/cosmetics.png",
      text: "Cosmetics"
    },
    {
      id: 3,
      img: "/assets/stockImgs/Pharmacy/categories/flu.png",
      text: "Cough & Cold"
    },
    {
      id: 4,
      img: "/assets/stockImgs/Pharmacy/categories/all.png",
      text: "View All"
    },
  ]

  
  return (
    <div className='w-full flex flex-row overflow-x-auto'>
        {categories.map((category) => {
            return  <CategoryCard key={category.id} category={category}/>
        })}
        
    </div>
  )
}

export default CategoryListMobile