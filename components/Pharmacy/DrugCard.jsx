import Image from "next/image"
import Link from "next/link"
import React from "react"
import drug from "../../public/assets/stockImgs/Pharmacy/drug.png"

const DrugCard = ({ product }) => {
  return (
    <div className='flex flex-col mx-4 w-fit'>
      <Link href={`/Drug/${product._id}`}>
        <div className='mb-4'>
          <Image
            src={product.imageUrl[0].imgPath || drug}
            width={250}
            height={250}
            alt='med'
            className='object-fill w-full h-full min-w-[250px] min-h-[250px]'
          />
        </div>
        <hr className='border-dotted border-2 w-full' />
        <p className='text-center mt-4 font-light text-sm'>{product?.name}</p>
        <div className='mt-4 w-full flex items-center justify-center'>
          <p className='font-bold border-2 border-black text-center  w-[50%] rounded-lg '>
            KSH. {product?.price}.00
          </p>
        </div>
      </Link>
    </div>
  )
}

export default DrugCard
