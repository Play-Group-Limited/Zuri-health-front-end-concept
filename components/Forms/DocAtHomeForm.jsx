import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { toast } from 'react-toastify'
import { API_URL } from '../../config/api.config'

const DocAtHomeForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let details = {
        name: name,
        number: number,
        email: email,
      }
      const {data} = await axios.post(
        `${API_URL}/web_services/doctor_visit`,
        details 
      )
      if(data){
        toast.success("Form submitted, an email has been sent to you")
      }
    } catch (error) {
      toast.error("An error occured uploading your form")
      console.log(error)
    }
  }

  return (
    <div className='bg-gray-200 flex flex-col border-2 border-gray-300 px-8 py-8 rounded-xl'>
        <h2 className='text-2xl mb-4'>Doctor Visit at home</h2>
        <p>Please ﬁll in the form below to join</p>

        <form className='my-4' onSubmit={(e) => handleSubmit(e)}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="tel"  value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Contact Number' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='border-2 w-full p-4 rounded-xl my-2' />
            <div className='flex flex-row items-center justify-center m-4'>
                <input type='checkbox' className='w-6 h-6'/>
                <Link href="/Terms">
                  <p className='ml-4 text-xs'>I Accept <span className='text-blue-500 underline'> Terms And Conditions </span></p>
                </Link>
            </div>

            <button type='submit'  className='w-full bg-[#3AC716] p-4 rounded-xl my-4 flex flex-row items-center justify-between'>
                <p className='font-bold text-white'>Submit Information Now</p>
                <BiChevronRight  className='text-white'/>
            </button>
        </form>
    </div>
  )
}

export default DocAtHomeForm