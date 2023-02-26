import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BsCart } from 'react-icons/bs'
import { RxCrossCircled } from 'react-icons/rx'
import drug from "../../public/assets/stockImgs/categories/drug.png"

const WishCard = ({product}) => {
    console.log("??????????????????", product)

    // const [updated, setUpdated] = useState([])
    // const handleClick = (e, id) => {
    //     e.preventDefault()
    //     const existingProducts = JSON.parse(localStorage.getItem('key')) || [];
    //     const updatedProducts = existingProducts.filter((product) => product._id !== id);
    //     localStorage.setItem('key', JSON.stringify(updatedProducts));
    // }

    useEffect(() => {
        const savedData = localStorage.getItem('key');
        const parsedData = savedData ? JSON.parse(savedData) : [];
        setProducts(parsedData);
    }, []);

    const handleClick = (e) => {
        e.preventDefault()
        const existingItems = JSON.parse(localStorage.getItem('key')) || [];
        const updatedItems = [...existingItems, product];
        localStorage.setItem('key', JSON.stringify(updatedItems));
        setProducts(updatedItems);
    }

    const handleRemove = (id) => {
        const existingItems = JSON.parse(localStorage.getItem('key')) || [];
        const updatedItems = existingItems.filter(item => item._id !== id);
        localStorage.setItem('key', JSON.stringify(updatedItems));
        setProducts(updatedItems);
    }

    let id = product._id
  return (
    <div className='flex flex-row w-full items-center justify-center p-4 border-b'>
        <button onClick={(e) => handleClick(e, id)} className='flex items-center justify-center p-2  mr-4 rounded-full bg-[#E9526F] '>
            <RxCrossCircled className='text-white'/>
        </button>
        <Image src={drug} alt='wish item' className='w-[100px]'/>
        <div className=' flex flex-col justify-between h-full ml-6'>
            <div className='flex flex-col justify-between'>
                <h3 className='text-xl font-bold'>{product.name}</h3>
                <h3 className='text-sm text-slate-300'>{product.description}</h3>
            </div>
            <button  className='flex items-center justify-center p-2 mt-6 rounded-lg bg-[#E9526F] '>
                <p className='text-white text-sm mr-2'>Add to cart</p>
                <BsCart className='text-white'/>
            </button>
        </div>
    </div>
  )
}

export default WishCard