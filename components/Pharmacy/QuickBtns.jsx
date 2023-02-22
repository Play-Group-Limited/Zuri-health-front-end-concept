import React from 'react'
import upload from '../../public/assets/icons/pharmacy/upload.png'
import clip from '../../public/assets/icons/pharmacy/clipboard.png'
import heart from '../../public/assets/icons/pharmacy/heart.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const QuickBtns = () => {

    const router = useRouter();

    const handleUpload = () => {
        router.push('/Cart')
    }
    const handleDoctor = () => {
        router.push('/Doctor')
    }
    const handleCCP= () => {
        router.push('/ContinuosCare')
    }
  return (
    <div className='my-4 mx-2 md:p-8 flex flex-col md:flex-row items-center justify-evenly'>
        <button onClick={handleUpload} className='flex flex-row items-center mx-4 justify-evenly bg-black px-6 py-4 rounded-xl w-full'>
            <Image src={upload} alt='upload' className='mr-4'/>
            <p className='text-xl text-left text-white leading-6'>
                Upload
                <br />
                Prescription
                <br />
                Now!  
            </p>
        </button>
        <button onClick={handleDoctor} className='flex flex-row items-center my-4 md:my-0 md:mx-4 justify-evenly bg-[#DC246F] px-6 py-4 rounded-xl w-full'>
            <Image src={clip} alt='prescription' className='mr-4'/>
            <p className='text-xl text-left text-white leading-6'>
                Get a
                <br />
                Prescription
                <br />
                Here!  
            </p>
        </button>
        <button onClick={handleCCP} className='flex flex-row items-center md:mx-4 justify-evenly bg-[#00A1FF] px-8 py-4 rounded-xl w-full'>
            <Image src={heart} alt='heart' className='mr-4'/>
            <p className='text-xl text-left text-white leading-6'>
                <span className='whitespace-nowrap'>
                    Save BIG with 
                </span>
                <br />
                our continuos
                <br />
                care program 
            </p>
        </button>
    </div>
  )
}

export default QuickBtns