import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PostCard from './PostCard';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get(`${process.env.REACT_APP_API_BASE_URL}/post/posts`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setPosts(res.data.data)
    }).catch((error) => {
      console.log(error);
    })

  },[]);


  return (
    <div className='flex flex-col gap-5 overflow-x-hidden'>
      {
        posts.length > 0 ?
        posts.map((post : any) => (
          <PostCard
          key={post._id}
          image={post.image}
          title={post.title}
          description={post.description}
          author={post.createdBy}
          createdAt={new Date(post.createdAt)}
          />
        )) : (
          <div className='flex items-center justify-center bg-white w-full h-80'><p className='text-4xl font-medium'>No Posts Available</p></div>
        )
      }
    </div>
  )
}

export default PostList