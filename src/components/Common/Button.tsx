import clsx from 'clsx'
import React from 'react'

type ButtonPropsType = {
  type?: 'button' | 'submit' | 'reset' | undefined,
  fullWidth?: boolean,
  children?: React.ReactNode,
  primary?:boolean,
  secondary?:boolean,
  disabled?:boolean,
  onClick:() => void,
  customClasses?:string,
}


function Button({type,fullWidth,children,onClick,secondary,primary,disabled,customClasses} : ButtonPropsType) {
  const clickHandler = (e:any) => {
    e.preventDefault();
    onClick();
  }
  return (
    <button
    type={type || "button"}
    onClick={clickHandler}
    disabled={disabled}
    className={clsx(`
        flex justify-center items-center gap-x-3 px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-300`,
        fullWidth && `w-full`,
        secondary ? 'text-gray-900 border-2 border-black hover:scale-105 transition duration-300' : 'text-white',
        primary && 'bg-black border-2 border-white hover:bg-white hover:text-black hover:border-black' ,
        customClasses
        )}
    >
        {children}
    </button>
  )
}

export default Button