import clsx from 'clsx'
import React from 'react'

type InputPropsType = {
  type?: string,
  name: string,
  label: string,
  placeholder:string,
  value:string | number,
  id:string,
  customClasses?:string,
  onChange:(e: any) => void,
}
function Input({type,name,label,placeholder,value,id,customClasses="",onChange} : InputPropsType) {
  return (
    <label className='flex flex-col'>
      <p className='px-4'>{label} <sup className='text-red-500'>*</sup></p>
      <input 
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        className={clsx('w-full px-4 py-3 focus:outline-none border rounded hover:border-blueWhite2',customClasses)}
        onChange={onChange}
      />
    </label>
  )
}

export default Input