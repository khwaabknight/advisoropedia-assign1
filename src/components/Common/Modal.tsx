import React from 'react'

type ModalProps = {
    showModal?:boolean,
    closeHandler:() => void,
    children:React.ReactNode,
}

function Modal({showModal,closeHandler,children} : ModalProps) {
    if (!showModal) return null;

    const outsideClickHandler = (e:any) => {
        if(e.target.id === 'modalbg') closeHandler();
    }

    return (
        <div onClick={outsideClickHandler} id='modalbg' className='fixed inset-0 bg-gray-900 bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50'>
            {children}
        </div>
    )
}

export default Modal