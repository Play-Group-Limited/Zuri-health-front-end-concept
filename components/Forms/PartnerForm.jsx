import axios from 'axios'
import React, { useState } from 'react'
import {BiChevronRight} from 'react-icons/bi'
import { toast } from 'react-toastify'
import { API_URL } from '../../config/api.config'

const PartnerForm = () => {
  
  const [name, setName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [parterType, setPartnerType] = useState('')
  const [country, setCountry] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let details = {
        name: name,
        contact_number: number,
        email: email,
        partner_type: parterType,
        country: country,
      }
      const {data} = await axios.post(
        `${API_URL}/web_services/become_a_partner`,
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
    <div className='bg-gray-200 flex flex-col border px-6 md:px-12 py-6 md:w-[35vw] lg:w-[25vw] rounded-3xl'>
        <h2 className='text-2xl font-bold mb-4 pt-4'>Become a Partner</h2>
        <p>Please ﬁll in the form below to join</p>

        <form className='my-4' onSubmit={(e) => handleSubmit(e)}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='border-2 w-full p-4 rounded-xl my-2' />
            {/* <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder='Company Name' className='border-2 w-full p-4 rounded-xl my-2' /> */}
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Contact Number' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" value={parterType} onChange={(e) => setPartnerType(e.target.value)} placeholder='Partner as' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Country Selection' className='border-2 w-full p-4 rounded-xl my-2' />

            <button type='submit'  className='w-full bg-[#052749] text-white p-4 rounded-xl my-4 flex flex-row items-center justify-between'>
                <p className='font-bold '>Submit Information Now</p>
                <BiChevronRight />
            </button>
        </form>
    </div>
  )
}

export default PartnerForm