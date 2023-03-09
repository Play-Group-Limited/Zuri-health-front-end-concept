import React, { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { toast } from 'react-toastify'
import { TimePicker } from 'antd';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import axios from 'axios';
import { API_URL } from '../../config/api.config';
dayjs.extend(customParseFormat);

const DoctorsForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  console.log(name, email, number, date, time)
  const format = 'HH:mm';
  const dateFormat = 'DD/MM/YYYY';

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    setDate(dateString)
  };
  const onChangeTime = (time, timeString) => {
    // console.log(time, timeString);
    setTime(timeString)
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let details = {
        name: name,
        number: number,
        email: email,
        date: date,
        time: time
      }
      const {data} = await axios.post(
        `${API_URL}/web_services/connect_with_doctors`,
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
    <div className='bg-gray-200 flex flex-col border md:px-12 p-8 md:py-6 relative rounded-xl z-50'>
        <h2 className='text-2xl mb-4'>Connect with doctors Virtually</h2>
        <p>Please ﬁll in the form below to join</p>

        <form className='my-4' onSubmit={(e) => handleSubmit(e)}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="tel"  value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Contact Number' className='border-2 w-full p-4 rounded-xl my-2' />
            <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' className='border-2 w-full p-4 rounded-xl my-2' />
            <DatePicker placeholder='Choose Consultation Date' onChange={onChange} format={dateFormat} className='border-2 w-full p-4 rounded-xl my-2'/>
            <TimePicker placeholder='Choose Consultation Time' defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} onChange={onChangeTime} format={format} className="border-2 w-full p-4 rounded-xl my-2 text-black "/>

            <button type="submit"  className='w-full bg-[#FF7F00] p-4 rounded-xl my-4 flex flex-row items-center justify-between'>
                <p className='font-bold text-white'>Submit Information Now</p>
                <BiChevronRight className='text-white'/>
            </button>
            
        </form>
    </div>
  )
}

export default DoctorsForm