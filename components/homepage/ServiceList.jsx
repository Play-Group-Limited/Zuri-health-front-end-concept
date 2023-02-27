import Image from "next/image"
import React from "react"
import product from "../../public/assets/product/man.png"
import ServiceCard from "./ServiceCard"
import one from "../../public/assets/product/man.png"
import two from "../../public/assets/product/1.png"
import three from "../../public/assets/product/2.png"
import four from "../../public/assets/product/3.png"
import five from "../../public/assets/product/4.png"
import Link from "next/link"

const ServiceList = ({}) => {
  const products = [
    {
      id: 1,
      img: "/assets/product/man.png",
      text: (<span>
        <p className="whitespace-nowrap">Engage with</p>
        a doctor
      </span>),
      link: "/Doctors",
    },
    {
      id: 2,
      img: "/assets/product/1.png",
      text: (<span>
        <p className="whitespace-nowrap">Order</p>
        medicine
      </span>),
      link: "/Pharmacy",
    },
    {
      id: 3,
      img: "/assets/product/2.png",
      text: (<span>
        <p className="whitespace-nowrap">Lab Tests &</p>
        diagnostics
      </span>),
      link: "/Labs",
    },
    {
      id: 4,
      img: "/assets/product/3.png",
      text: (<span>
        <p className="whitespace-nowrap">Wellness</p>
        and more
      </span>),
      link: "/ContinousCare",
    },
    {
      id: 5,
      img: "/assets/product/4.png",
      text: (<span>
        <p className="whitespace-nowrap">Continuos</p>
        <p className="whitespace-nowrap">care program</p>
      </span>),
      link: "/ContinuosCare",
    },
  ]

  return (
    // <div className='w-full h-full max-w-[1440px]'>
    //   <div className='flex flex-col md:flex-row items-center justify-center'>
    //     <Link href='/Doctors'>
    //       <div className='w-full h-full rounded-3xl p-4 py-6 relative flex  items-center justify-center'>
    //         <Image
    //           src={one}
    //           alt=''
    //           className='w-[300px] h-full object-contain'
    //         />
    //         <div className='absolute bottom-16 md:bottom-10 left-[30%] right-[30%] items-center justify-center text-center'>
    //           <p className='font-bold text-white text-lg leading-4'>
    //             Engage with a doctor
    //           </p>
    //         </div>
    //       </div>
    //     </Link>
    //     <Link href='/Pharmacy'>
    //       <div className='w-full h-full rounded-3xl p-4 py-6 relative flex  items-center justify-center'>
    //         <Image
    //           src={two}
    //           alt=''
    //           className='w-[300px] h-full object-contain'
    //         />
    //         <div className='absolute bottom-16 md:bottom-10 left-[30%] right-[30%] items-center justify-center text-center'>
    //           <p className='font-bold text-white text-lg leading-4'>
    //             Order Medicine
    //           </p>
    //         </div>
    //       </div>
    //     </Link>
    //     <Link href='/Labs'>
    //       <div className='w-full h-full rounded-3xl p-4 py-6 relative flex  items-center justify-center'>
    //         <Image
    //           src={three}
    //           alt=''
    //           className='w-[300px] h-full object-contain'
    //         />
    //         <div className='absolute bottom-16 md:bottom-10 left-[30%] right-[30%] items-center justify-center text-center'>
    //           <p className='font-bold text-white text-lg leading-4'>
    //             Lab Tests &amp; diagnostics
    //           </p>
    //         </div>
    //       </div>
    //     </Link>
    //     <Link href='/Labs'>
    //       <div className='w-[300px] max-h-full rounded-3xl p-4 py-6 relative flex  items-center justify-center group overflow-hidden'>
    //         <Image
    //           src={four}
    //           alt=''
    //           className='w-full h-full object-contain rounded-3xl'
    //         />
    //         <div className='absolute bottom-16 md:bottom-10 left-[30%] right-[30%] items-center justify-center text-center '>
    //           <p className='font-bold text-white text-lg leading-4'>
    //             Wellness and more
    //           </p>
    //         </div>
    //         <div className='w-full h-[10vh] bg-blue-500 absolute bottom-0 left-0'></div>
    //       </div>
    //     </Link>
    //     <Link href='/ContinuosCare'>
    //       <div className='w-full h-full rounded-3xl p-4 py-6 relative flex  items-center justify-center'>
    //         <Image
    //           src={five}
    //           alt=''
    //           className='w-[300px] h-full object-contain'
    //         />
    //         <div className='absolute bottom-16 md:bottom-10 left-[30%] right-[30%] items-center justify-center text-center'>
    //           <p className='font-bold text-white text-lg leading-4'>
    //             Continuos Care Program
    //           </p>
    //         </div>
    //       </div>
    //     </Link>
    //   </div>
    // </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 max-w-[1440px] gap-6 w-full px-3 mt-4 mx-auto '>
      {products.map((product) => {
        return (
          <ServiceCard
            image={product.img}
            key={product.id}
            link={product.link}
            text={product.text}
          />
        )
      })}
    </div>
  )
}

export default ServiceList
