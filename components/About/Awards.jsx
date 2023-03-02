import React from 'react'
import one from '../../public/assets/stockImgs/About/awards/one.png'
import two from '../../public/assets/stockImgs/About/awards/two.png'
import three from '../../public/assets/stockImgs/About/awards/three.png'
import four from '../../public/assets/stockImgs/About/awards/four.png'
import five from '../../public/assets/stockImgs/About/awards/five.png'
import six from '../../public/assets/stockImgs/About/awards/six.png'
import seven from '../../public/assets/stockImgs/About/awards/seven.png'
import eight from '../../public/assets/stockImgs/About/awards/eight.png'
import nine from '../../public/assets/stockImgs/About/awards/nine.png'
import ten from '../../public/assets/stockImgs/About/awards/ten.png'
import ele from '../../public/assets/stockImgs/About/awards/ele.png'
import Image from 'next/image'

const Awards = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-16 py-8 text-center h-full  bg-[#1D2631]'>
        <h2 className='text-white text-3xl font-bold'>Awards</h2>
        <div className='flex flex-wrap max-w-[1440px]  justify-center  mt-8'>
            <Image src={one} alt='award' className='p-4 bg-white rounded-lg m-2'/>
            <Image src={two} alt='award' className='p-4 bg-white rounded-lg m-2'/>
            <Image src={three} alt='award' className='p-4 bg-white rounded-lg m-2'/>
            <Image src={four} alt='award' className='p-4 bg-white rounded-lg m-2'/>
            <Image src={five} alt='award' className='p-4 bg-white rounded-lg m-2'/>
            <Image src={six} alt='award' className='p-4 bg-white rounded-lg m-2'/>
            <Image src={seven} alt='award' className='p-4 bg-white rounded-lg m-2'/>
            <Image src={eight} alt='award' className='p-4 bg-white rounded-lg m-2'/>
            <Image src={nine} alt='award' className='p-4 bg-white rounded-lg m-2'/>
            <Image src={ten} alt='award' className='p-4 bg-white rounded-lg m-2'/>
            <Image src={ele} alt='award' className='p-4 bg-white rounded-lg m-2'/>
        
        </div>
    </div>
  )
}

export default Awards