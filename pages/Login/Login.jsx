import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
// import { Context } from '../../context';
// import { loginUser } from '../../services/users'; 
// import { toast } from 'react-toastify'


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    console.log(email, password)

    

    // ask
    // const {state: {user}, dispatch} = useContext(Context) 

    const router = useRouter()

    // console.log(user)


  
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        toast.success(`Welcome back ${email}`)
        router.push('/')
    } 

  return (
    <div className='w-full h-full'>
        <div className='mx-auto p-4 md:p-8 py-12 my-12 lg:mt-0 lg:py-0 flex text-[#003D64] '>
            <div className='w-full h-[100%] my-12 md:py-52 '>
              <div className='max-w-[1240px] w-full  md:h-full mx-auto flex text-sm flex-col'>
                <div className='w-auto flex flex-col md:items-center justify-center'>
                    <div className='mb-9 flex flex-col w-full md:w-[40%]'>
                        <h1 className='text-black text-2xl font-medium lg:my-4'>Login</h1>
                        <p className='my-2'> Please sign in below to proceed</p>
                    </div>
                    

                    <form className='w-full md:w-[40%]' onSubmit={handleSubmit}>
                        <div className="relative w-full my-2 py-2 ">
                            <input type="email" id="days" value={email} onChange={(e) => setEmail(e.target.value)} className="block  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#479ED5] peer" placeholder=" " />
                            <label htmlFor="days" className="absolute text-xs text-gray-500   top-0 z-10 origin-[0] left-2.5 peer-focus:text-[#479ED5]">Email</label>
                        </div>
                        <div className="relative w-full my-2 lg:my-2 py-4 ">
                            <input type="text" id="days" value={password} onChange={(e) => setPassword(e.target.value)} className="block  px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#479ED5] peer" placeholder=" " />
                            <label htmlFor="days" className="absolute text-xs text-gray-500   top-0 z-10 origin-[0] left-2.5 peer-focus:text-[#479ED5] ">Password</label>
                        </div>
                        <Link href='/Dashboard/UserDashboard'>
                            <button type='submit' className='w-fit inline-flex justify-between items-center mt-8 md:mr-4 py-2 px-3 text-sm font-medium text-center text-white bg-[#003D64] rounded-lg hover:bg-[#00F8ED] focus:ring-4 focus:outline-none focus:ring-blue-300'>
                                Sign In
                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
                            </button>
                        </Link>
                    </form>
                    
                    <div className='my-4 w-full md:w-[40%]'>
                    {/* <Link href='Register'>  
                        <p className='my-4'> New user? <a><span className='text-[#479ED5] cursor-pointer'>Register Now</span></a> </p>
                    </Link> */}
                    </div>
                </div>
                 
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login