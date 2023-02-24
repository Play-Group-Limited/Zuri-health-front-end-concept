import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import video1 from "../../public/assets/images/v1.png"
import video2 from "../../public/assets/images/v2.png"
import mockup from "../../public/assets/images/mockup.png"
import YouTube from "react-youtube"

const Info = () => {
  const [showVideo, setShowVideo] = useState(false)
  const youtubeRef = useRef(null)

  function handleVideoClick() {
    setShowVideo(true)
  }

  function handleVideoClose() {
    setShowVideo(false)
  }
  const opts = {
    height: "400",
    width: "800",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  const onReady = (e) => {
    // access to player in all event handlers via event.target
    e.target.pauseVideo()
  }
  return (
    <div className='w-full h-full'>
      <div className='my-4 md:my-12 '>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-evenly mx-4 md:mx-0 md:mb-8'>
          <div className='flex flex-col justify-cente items-center text-center my-4'>
            <h3 className='text-xl text-[#ED3763]'>Why choose Zuri Health</h3>
            <p className='text-xs text-slate-500'>
              Still sitting on the fence? Watch our Video
            </p>

            <div className='my-4'>
              <div onClick={handleVideoClick}>
                <Image
                  src={video1}
                  alt='join'
                  className=' cursor-pointer y-image'
                />
              </div>

              {showVideo ? (
                <div className='relative ' ref={youtubeRef}>
                  <div onClick={handleVideoClose} className=''>
                    <div
                      className='fixed opacity-80 top-0 left-0 w-full h-full bg-black z-10 cursor-pointer'
                      onClick={() => handleVideoClose()}></div>
                    <div className='z-20 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                      <YouTube
                        videoId='N4bUlI7RTMQ'
                        opts={opts}
                        onReady={onReady}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className='flex flex-col justify-cente items-center text-center my-4'>
            <h3 className='text-xl text-[#ED3763]'>Download our app</h3>
            <p className='text-xs text-slate-500'>
              A world of possiblities awaits
            </p>

            <div className='my-4'>
              <Image src={mockup} alt='join' />
            </div>
          </div>
          <div className='flex flex-col justify-cente items-center text-center my-4'>
            <h3 className='text-xl text-[#ED3763]'>How it works</h3>
            <p className='text-xs text-slate-500'>
              Everything you need to know about our Platform
            </p>

            <div className='my-4'>
              <Image src={video2} alt='learn' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
