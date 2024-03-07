import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import Input from '../Common/Input'
import Button from '../Common/Button'
import axios from 'axios'

type CreatePostModalProps = {
    closeHandler : () => void
}

function CreatePostModal({closeHandler}:CreatePostModalProps) {

  const [form, setForm] = useState({
    title:"",
    description:"",
  })
  const token = localStorage.getItem('token');

  const changeHandler = (e:any) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }


  const handleClose = (e:any) => {
    e.preventDefault();
    closeHandler();
  }

  const createPostHandler = () => {
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/post/createPost`,form,{
      headers:{
        Authorization:`Bearer ${token}`
    }}).catch((error) => {
      console.log(error);
    })
    closeHandler();
  }


  return (
    <div className='flex flex-col items-stretch bg-white p-4 gap-3 max-w-96 w-11/12 aspect-square'>
      <div className='flex w-full justify-end items-start'>
        <button type='button' onClick={handleClose} className='hover:border-slate-700 rounded border-2 border-white transition-colors duration-300 p-0.5'>
          <RxCross1 />
        </button>
      </div>
      <h3 className='text-center capitalize font-light text-xl'> Create new Post </h3>
      <form className='flex flex-col gap-2'>
        <Input
          label='Title' 
          type='text'
          name='title'
          id='title'
          placeholder='Enter title'
          value={form.title}
          onChange={changeHandler}
        />
        <label className='px-4 mt-1' > Description<sup className='text-red-500'>*</sup></label>
        <textarea name="description" id="description" rows={4} className='w-full px-4 py-3 focus:outline-none border rounded hover:border-blueWhite2 -mt-2' onChange={changeHandler} value={form.description}/>
        <Button 
          primary
          onClick={createPostHandler}
          customClasses='rounded mt-3'
        >
          Create
        </Button>

      </form>

    </div>
  )
}

export default CreatePostModal