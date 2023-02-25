import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { BiTrash } from 'react-icons/bi'
import { modifyAddProductQuantity, modifySubtractProductQuantity,removeProduct } from '../../redux/cartSlice'

import drug from "../../public/assets/stockImgs/Pharmacy/drugs/drug.png"


const CartCard = ({product, index}) => {

    const dispatch = useDispatch()
  
    // console.log('image: ', product.product.imageUrl[0].imgPath)
    console.log('find yourself', product)
    
    let [quantity, setQuantity] = useState(product?.quantity)
    // console.log('product: ', product.product?.name)
    console.log("index", index)

    const handleMinus = () => {
        let quant = quantity - 1;
        setQuantity(quant);
        dispatch(modifySubtractProductQuantity({id: product._id, index: index, quantity: quant, price: product.price, product}))   
    }

    const handleAdd = () => {
        let quant = quantity + 1
        setQuantity(quant) ;
        dispatch(modifyAddProductQuantity({id: product._id, index: index, quantity: quant, price: product.price, product}))
    }

    const handleRemove = () => {
        dispatch(removeProduct({ index: index }))

    }
  return (
    <div className='flex flex-col md:flex-row p-8 border my-6 border-black rounded-lg justify-between'>
        <div className='flex flex-col md:flex-row text-center md:text-left'>
            <div className='mx-2 md:max-w-[200px] my-4 md:my-0 rounded-lg flex justify-center items-center'>
                <Image src={drug} alt='medd' width={200}/>
            </div>
            <div className='flex flex-col md:ml-4 justify-between'>
                <div className='flex flex-col'>
                    <p className={`font-bold text-[#5BDADD] uppercase mb-4 ${product?.product.name == true ? "flex" : "hidden"}`}>Requires prescription</p>
                    <p className='font-bold text-xl my-2 md:my-0'>{product?.product.name}</p>
                    <p className='uppercase text-gray-400 mb-4 md:mb-0 my-2 md:my-0'>Apex laboritories PVT LTD</p>
                </div>
                <div className='flex flex-col md:flex-row md:items-stat md:justify-start items-center justify-center my-6 md:my-0'>
                    <div className='flex flex-row border rounded-md'>
                        <div onClick={() => handleMinus()} className='px-2'>-</div>
                        <div className='px-4 bg-black text-white'>{quantity}</div>
                        <div onClick={()=>handleAdd()} className='px-2'>+</div>
                    </div>

                    <div onClick={() => handleRemove()} className='flex flex-row items-center my-4 md:my-0 md:ml-4'>
                        <BiTrash size={20}/>
                        <p className='ml-4'>Remove</p>
                    </div>
                </div>
            </div>
        </div>
        <p className='font-bold uppercase text-2xl text-center md:text-start'> KES {product?.product.price} </p>
    </div>
  )
}

export default CartCard