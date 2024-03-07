import React from 'react'
import Button from '../Common/Button'
import { MdPostAdd } from "react-icons/md";

type CreatePostProps = {
  modalOpen: () => void,
}

function CreatePost({modalOpen}:CreatePostProps) {

  const clickHandler = () => {
    modalOpen();
  }

  return (
    <form className='w-full bg-white p-4 md:p-3 gap-x-5 shadow-2xl flex justify-between items-center'>
      <div className='w-16'/>
      <div className='text-base font-semibold'>Latest Posts</div>
      <Button secondary onClick={clickHandler}>
        <p className='text-base'>Post</p>
        <MdPostAdd size={20}/>
      </Button>
    </form>
  )
}

export default CreatePost