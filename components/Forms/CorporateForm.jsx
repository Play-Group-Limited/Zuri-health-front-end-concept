import React, { useState } from 'react'
import {BiChevronRight} from 'react-icons/bi'
import { toast } from 'react-toastify'
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import axios from 'axios';
import { API_URL } from '../../config/api.config';
dayjs.extend(customParseFormat);

const CorporateForm = () => {
  const [name, setName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [parterType, setPartnerType] = useState('')
  const [employees, setEmployees] = useState('')
  const [date, setDate] = useState('')

  const format = 'HH:mm';
  const dateFormat = 'DD/MM/YYYY';

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    setDate(dateString)
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let details = {
        name: name,
        phone_no: number,
        company_name: companyName,
        email: email,
        number_of_employees: employees,
        sample_collection_date: date,
      }
      const {data} = await axios.post(
        `${API_URL}/web_services/coporate_service_request`,
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
    <div className='bg-gray-200 flex flex-col border mt-12 px-8 md:px-6 lg:px-12 py-6 rounded-3xl'>
        <h2 className='text-2xl font-bold mb-4 pt-4'>Get Quote Below</h2>
        <p>Please ﬁll in the form below to start</p>

        <form className='my-4' onSubmit={(e) => handleSubmit(e)}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Contact Number' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder='Company Name' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="number" value={employees} onChange={(e) => setEmployees(e.target.value)} placeholder='Number Of Employees' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='border-2 w-full p-4 rounded-xl my-2' />
            <DatePicker placeholder='Preferred Sample Collection Date' onChange={onChange} format={dateFormat} className='border-2 w-full p-4 rounded-xl my-2'/>

            <button type='submit' className='w-full bg-[#FCB7AC] text-white p-4 rounded-xl my-4 flex flex-row items-center justify-between'>
                <p className='font-bold '>Submit Information Now</p>
                <BiChevronRight />
            </button>
        </form>
    </div>
  )
}

export default CorporateForm