import Image from "next/image"
import React, { useEffect, useState } from "react"
import { BsCart } from "react-icons/bs"
import { RxCrossCircled } from "react-icons/rx"
import { useDispatch } from "react-redux"
import drug from "../../public/assets/stockImgs/categories/drug.png"
import { removeFromWishlist } from "../../redux/wishlistSlice"

const WishCard = ({ product }) => {
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(removeFromWishlist({ itemId: id }))
  }

  return (
    <div className='flex flex-row w-full items-center justify-center p-4 border-b'>
      <button
        onClick={() => handleRemove(product._id)}
        className='flex items-center justify-center p-2  mr-4 rounded-full bg-[#E9526F] '>
        <RxCrossCircled className='text-white' />
      </button>
      <Image src={drug} alt='wish item' className='w-[100px]' />
      <div className=' flex flex-col justify-between h-full ml-6'>
        <div className='flex flex-col justify-between'>
          <h3 className='text-xl font-bold'>{product.name}</h3>
          <h3 className='text-sm text-slate-300'>
            {product.description.slice(0, 50)}...
          </h3>
        </div>
        <button className='flex items-center justify-center p-2 mt-6 rounded-lg bg-[#E9526F] '>
          <p className='text-white text-sm mr-2'>Add to cart</p>
          <BsCart className='text-white' />
        </button>
      </div>
    </div>
  )
}

export default WishCard
