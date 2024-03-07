import React from 'react'
import Button from '../Common/Button';

type PostCardPropsType = {
    image?:string,
    title:string,
    description:string,
    author:any
    createdAt:Date;
}

const clickHandler = () => {}


function PostCard({image,title,description,author,createdAt}:PostCardPropsType) {
  const smallDescription = description.length < 120 ? description: description.substring(0,120) + '...';

  return (
    <div className='w-full grid md:grid-cols-12 bg-white p-4 md:p-3 gap-x-5 shadow-2xl overflow-x-hidden'>
      <div className='overflow-hidden md:col-span-5'>
        <img src={image || 'post-placeholder.jpeg'} alt='' className='object-cover w-full'/>
      </div>
      <div className='overflow-hidden md:col-span-7 flex flex-col py-2 gap-5'>
        <h2 className='font-medium text-5xl capitalize overflow-hidden'>{title}</h2>
        <p className='w-4/5 font-normal text-xl'>{smallDescription} </p>
        <div className='mt-3 flex items-baseline gap-5'>
          <p className='font-light text-base'>{createdAt.toLocaleString()}</p>
          <p className='font-normal text-lg'>by {author?.username}</p>
        </div>
        <div className='-mt-3'>
          <Button
            secondary
            onClick={clickHandler}
          >Read More</Button>
        </div>
      </div>        
    </div>
  )
}

export default PostCard