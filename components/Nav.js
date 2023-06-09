import requests from '@/utils/requests'
import { useRouter } from 'next/router'
import React from 'react'

const Nav = () => {
  const router = useRouter();
  return (
    <nav className='relative'>
      <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
        {Object.entries(requests).map(([key,{title, url}]) => (
        <h2 
        onClick={()=> router.push(`/?genre=${key}`)}
        key={key} className='last:pr-24 mb-4 cursor-pointer transition duration-100 transform
        hover:scale-125 hover:text-lima active:text-red-400'>{title}</h2>
      ))}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#03041c] h-10 w-1/12'/>
    </nav>
  )
}

export default Nav