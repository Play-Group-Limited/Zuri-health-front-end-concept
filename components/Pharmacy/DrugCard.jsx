import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsArrowRightShort, BsCart3 } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import drug from '../../public/assets/stockImgs/Pharmacy/drug.png'
import { addProductToCart } from '../../redux/cartSlice'

const DrugCard = ({ product }) => {

  // const [quantity, setQuantity] = useState(1)
  // const handleAdd = () => {
  //   useDispatch(addProductToCart({ product, quantity }))
  //   toast.success("items added to cart")
  // }
  const dispatch = useDispatch()

  const handleAdd = (num) => {
    let quantity = num
    dispatch(addProductToCart({ product, quantity }))
    toast.success("Items added to cart")
  }

  return (
    <div className='flex flex-col mx-4 w-fit'>
      <Link href={`/Drug/${product._id}`}>
        <div className='mb-4 min-h-[250px] min-w-[250px] max-h-[250px] flex items-center justify-center'>
            {/* <Image src={product.imageUrl.length > 0 && product.imageUrl[0].imgPath } alt='med' width={50} height={50} className='object-fill w-full h-full '/> */}
            <Image src={product.imageUrl.length > 0 && product.imageUrl[0].imgPath || drug} alt='med' width={50} height={50} className='object-fill w-full h-full '/>
        </div>
        <hr className='border-dotted border-2 w-full' />
        <p className='text-center mt-4 font-light text-sm'>{product?.name}</p>
      </Link>
        <div className='mt-4 w-full flex items-center justify-center'>
            <p className='font-bold border-2 border-black text-center  w-[50%] rounded-lg '>
                KSH. {product?.price}.00
            </p>
            <button onClick={() => handleAdd(1)} className='p-2 flex rounded-full justify-center items-center bg-red-400 ml-2'>
                <BsCart3 size={20} className='text-white'/>
            </button>
        </div>
    </div>
  )
}

export default DrugCard
