import React from "react"
import { useLottie } from "lottie-react"
import notFoundData from "../assets/4042.json"

const NotFound = () => {
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
    <div className='h-[50vh] flex items-center justify-center w-full flex-col'>
      {View}
      <h4 className='font-bold text-xl'>OOPs! Product/Service not found</h4>
    </div>
  )
}

export default NotFound
