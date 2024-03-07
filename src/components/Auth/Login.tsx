import React, { useState } from 'react'
import Input from '../Common/Input'
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import Button from '../Common/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

  const [formData, setFormData] = useState({
    identity:"",
    password:"",
  })

  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  
  const changeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const submitHandler = () => {

    axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/login`,formData)
    .then((res) => {
      localStorage.setItem("token",res?.data?.data?.token || null)
      navigate('/')
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className='flex justify-center items-center h-screen overflow-y-hidden font-ubuntu'>
      <form className='bg-white max-w-96 w-11/12 md:w-2/5 lg:w-4/6 rounded px-5 py-3 flex flex-col items-stretch shadow-2xl'>
        {/* Login text */}
        <div className='text-center text-3xl font-normal bg-blueWhite py-1 mb-7 select-none'>Welcome Back !</div>

        {/* Username / Email */}
        <div className='w-full flex flex-col mb-3'>
          <Input
            label='Username/email'
            type='text'
            name='identity'
            id='identity'
            placeholder='Enter username or email'
            value={formData.identity}
            onChange={changeHandler}
          />
        </div>

        {/* password */}
        <div className='relative w-full flex flex-col '>
          <Input
            label='Password'
            type={showPass ? "text" : "password"}
            name='password'
            id='password'
            placeholder='Enter password'
            value={formData.password}
            customClasses='pr-16'
            onChange={changeHandler}
          />
          <span 
            onClick={() => setShowPass((prev) => (!prev))}
            className='absolute right-5 top-[2.75rem] cursor-pointer'
          >{!showPass ? (<RxEyeClosed size={15}/>) : (<RxEyeOpen size={15}/>)}</span>
        </div>

        {/* forget pssword */}
        <div className='text-sky-600 underline text-xs flex justify-end pr-2 pt-1'>
          Forgot Password?
        </div>

        {/* submit button */}
        <div className='mt-5 mb-3'>
          <Button primary fullWidth onClick={submitHandler}>Log In</Button>
        </div>

        {/* or line */}
        <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300'/>
            </div>
            <div className='relative flex justify-center text-sm'>
                <span className=' bg-white px-2 text-gray-500'>
                    Or
                </span>
            </div>
        </div>

        {/* Signup link */}
        <div
            className='flex gap-2 justify-center text-sm px-2 my-2 text-gray-500'
        >
            <p>Don't have an account?</p>
            <Link
              to={'/signup'}
              className='underline cursor-pointer'
            >
                Create an account
            </Link>

        </div>
      </form>
    </div>
  )
}

export default Login