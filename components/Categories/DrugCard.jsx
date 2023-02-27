import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

import drug from "../../public/assets/stockImgs/categories/drug.png"
import { TbHeartPlus } from "react-icons/tb"
import { Tooltip } from "antd"

const DrugCard = ({ product }) => {
  // console.log("********", product)

  const [prescription, setPrescription] = useState(false)

  const [data, setData] = useState([])
  const [newItem, setNewItem] = useState(null)

  // console.log("HhHHHHHHHHHHHH", data)

  // useEffect(() => {
  //     const savedData = localStorage.getItem('key');
  //     console.log("savedData", savedData);
  //     const parsedData = savedData ? JSON.parse(savedData) : [];
  //     setData(parsedData);
  // }, []);

  const handleAdd = () => {}

  const handleClick = (e) => {
    e.preventDefault()
    // setNewItem(product)

    const existingItems = JSON.parse(localStorage.getItem("key")) || []
    const updatedItems = [...existingItems, product]
    console.log(".............................",updatedItems)
    localStorage.setItem("key", JSON.stringify(updatedItems))
  }

  return (
    <div className='flex flex-col  m-2 mb-8'>
      <Link href={`/Drug/${product._id}`}>
        <div className='border border-black rounded-lg flex  md:min-h-[370px] md:min-w-[250px] max-h-[450px]  flex-col items-center justify-center relative'>
          {product.prescription == true ? (
            <div className='bg-[#5BDADD] absolute top-0 left-0 w-full py-2 px-4 rounded-t-lg'>
              Requires Prescription
            </div>
          ) : null}
          <Image
            src={
              (product?.imageUrl.length > 0 && product?.imageUrl[0]?.imgPath) ||
              drug
            }
            width={300}
            height={300}
            alt='drug'
            className='object-contain my-2 mx-6'
          />
        </div>
      </Link>
      <div className='flex flex-col border border-black rounded-lg my-2 p-4'>
        <h3 className='font-semibold'>{product.name}</h3>
        <p className='mt-2 text-sm'>
          Also known as Thyroid Profile Total Blood
        </p>
      </div>
      <div className='flex flex-row justify-evenly items-center'>
        <p className='whitespace-nowrap px-2'>KSH 2,503</p>
        <Tooltip title='Wish List'>
          <div
            onClick={(e) => handleClick(e)}
            className='rounded-full w-8 h-8 flex items-center cursor-pointer justify-center bg-[#E9526F]'>
            <TbHeartPlus className='text-white' />
          </div>
        </Tooltip>
        <button className='p-2 bg-[#E9526F] rounded-lg w-[50%]'>
          <p className='text-white uppercase'>Add to Cart</p>
        </button>
      </div>
    </div>
  )
}

export default DrugCard
