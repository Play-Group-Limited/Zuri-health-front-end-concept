<<<<<<< HEAD
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRightShort, BsCart3 } from 'react-icons/bs'
import drug from '../../public/assets/stockImgs/Pharmacy/drug.png'
=======
import Image from "next/image"
import Link from "next/link"
import React from "react"
import drug from "../../public/assets/stockImgs/Pharmacy/drug.png"
>>>>>>> d347d27f02b713cd24d329624129922f10d7d93e

const DrugCard = ({ product }) => {
  return (
    <div className='flex flex-col mx-4 w-fit'>
      <Link href={`/Drug/${product._id}`}>
<<<<<<< HEAD
        <div className='mb-4 min-h-[250px] min-w-[250px] max-h-[250px] flex items-center justify-center'>
            <Image src={product.imageUrl.length > 0 && product.imageUrl[0].imgPath } alt='med' width={50} height={50} className='object-fill w-full h-full '/>
=======
        <div className='mb-4'>
          <Image
            src={
              (product?.imageUrl.length > 0 && product?.imageUrl[0]?.imgPath) ||
              drug
            }
            width={250}
            height={250}
            alt='med'
            className='object-fill w-full h-full min-w-[250px] min-h-[250px]'
          />
>>>>>>> d347d27f02b713cd24d329624129922f10d7d93e
        </div>
        <hr className='border-dotted border-2 w-full' />
        <p className='text-center mt-4 font-light text-sm'>{product?.name}</p>
      </Link>
        <div className='mt-4 w-full flex items-center justify-center'>
<<<<<<< HEAD
            <p className='font-bold border-2 border-black text-center  w-[50%] rounded-lg '>
                KSH. {product?.price}.00
            </p>
            <button className='p-2 flex rounded-full justify-center items-center bg-red-400 ml-2'>
                <BsCart3 size={20} className='text-white'/>
            </button>
=======
          <p className='font-bold border-2 border-black text-center  w-[50%] rounded-lg '>
            KSH. {product?.price}.00
          </p>
>>>>>>> d347d27f02b713cd24d329624129922f10d7d93e
        </div>
    </div>
  )
}

export default DrugCard
