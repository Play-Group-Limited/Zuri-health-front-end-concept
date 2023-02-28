import Image from "next/image"
import React from "react"
import Services from "../components/homepage/Services"

import { useLottie } from "lottie-react"
import notFoundData from "../public/assets/thanks.json"

const Success = () => {
  const style = {
    height: 300,
  }

  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.2],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.2, 0.45],
        type: "seek",
        frames: [0, 45],
      },
      {
        visibility: [0.45, 1.0],
        type: "loop",
        frames: [45, 60],
      },
    ],
  }
  const options = {
    animationData: notFoundData,
    loop: true,
    interactivity,
    style,
  }
  const { View } = useLottie(options)

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='max-w-[1440px] w-full my-8 mx-4'>
        <div className='flex flex-col items-center my-8 text-center'>
          {/* <Image src */}
          <div>{View}</div>
          <h1 className='text-5xl font-bold '>Your Order Has Been Recived</h1>
          <p className='my-4'>
            A customer service representative will contact you in a short while
            to confirm your order
          </p>
          {/* <p className='mt-8 text-xl underline font-semibold'>Try out some of our other services</p> */}
        </div>
        {/* <div className='max-w-[60vw]'>
                <Services />
            </div> */}
      </div>
    </div>
  )
}

export default Success
