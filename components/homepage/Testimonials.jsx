import Image from "next/image"
import React from "react"
import man from "../../public/assets/people/1.png"
import woman from "../../public/assets/people/2.png"
import woman1 from "../../public/assets/people/3.png"

import "swiper/css"
import "swiper/css/navigation"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"

const Testimonials = () => {
  return (
    <div className='w-full h-full'>
      <div className='my-12'>
        <div className='flex flex-col w-full'>
          <h3 className='text-center text-xl font-bold text-[#ED3763]'>
            What Our Customers Have To Say
          </h3>

          <div className='flex flex-row w-full overflow-x-auto justify-between my-4 md:hidden'>
            {/* card */}
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className='z-0 relative'>
              <SwiperSlide>
                <div className='flex flex-col items-center mx-4 my-8'>
                  <Image src={man} alt='johny' />
                  <h3 className='mt-4 text-xl font-bold'>Micheal S.</h3>
                  <p className='mt-4 text-center text-sm text-slate-500'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    <br />
                    sed diam nonummy nibh euismod tin Lorem ipsum dolor sit amet
                    <br />, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tin
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex flex-col items-center mx-4 my-8'>
                  <Image src={woman} alt='johny' />
                  <h3 className='mt-4 text-xl font-bold'>Stephanie M.</h3>
                  <p className='mt-4 text-center text-sm text-slate-500'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    <br />
                    sed diam nonummy nibh euismod tin Lorem ipsum dolor sit amet
                    <br />, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tin
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex flex-col items-center mx-4 my-8'>
                  <Image src={woman1} alt='johny' />
                  <h3 className='mt-4 text-xl font-bold'>Chichi A.</h3>
                  <p className='mt-4 text-center text-sm text-slate-500'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    <br />
                    sed diam nonummy nibh euismod tin Lorem ipsum dolor sit amet
                    <br />, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tin
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className='hidden md:flex flex-row w-full overflow-x-auto justify-center items-center my-4'>
            {/* card */}
            <div className='flex flex-col items-center mx-4 my-8'>
              <Image src={man} alt='johny' />
              <h3 className='mt-4 text-xl font-bold'>Micheal S.</h3>
              <p className='mt-4 text-center text-sm text-slate-500'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                <br />
                sed diam nonummy nibh euismod tin Lorem ipsum dolor sit amet
                <br />, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tin
              </p>
            </div>

            <div className='flex flex-col items-center mx-4 my-8'>
              <Image src={woman} alt='johny' />
              <h3 className='mt-4 text-xl font-bold'>Stephanie M.</h3>
              <p className='mt-4 text-center text-sm text-slate-500'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                <br />
                sed diam nonummy nibh euismod tin Lorem ipsum dolor sit amet
                <br />, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tin
              </p>
            </div>
            <div className='flex flex-col items-center mx-4 my-8'>
              <Image src={woman1} alt='johny' />
              <h3 className='mt-4 text-xl font-bold'>Chichi A.</h3>
              <p className='mt-4 text-center text-sm text-slate-500'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                <br />
                sed diam nonummy nibh euismod tin Lorem ipsum dolor sit amet
                <br />, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tin
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
