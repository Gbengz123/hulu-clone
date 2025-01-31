import React from 'react'

const HeaderItem = ({Icon, title}) => {
  return (
    <div className='flex flex-col items-center cursor-pointer w-10 sm:w-20 hover:text-white group'>
        <Icon className='h-6 mb-1 group-hover:animate-bounce'/>
        <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
    </div>
  )
}

export default HeaderItem