import { useState } from 'react';
import Modal from '../Common/Modal';
import CreatePost from './CreatePost';
import PostList from './PostList';
import CreatePostModal from './CreatePostModal';

function AllPosts() {
  const [showModal, setShowModal] = useState(false);

  const closeHandler = () => setShowModal(false)


  return (
    <div className='flex justify-center items-start min-h-screen font-ubuntu overflow-x-hidden w-full'>
      <div className='w-11/12 max-w-5xl mt-20 flex flex-col gap-5 mx-auto'>
        <CreatePost modalOpen = {() => setShowModal(true)} />
        <PostList />
      </div>
      <Modal showModal={showModal} closeHandler={closeHandler} >
        <CreatePostModal closeHandler={closeHandler}/>
      </Modal>

    </div>
  )
}

export default AllPosts