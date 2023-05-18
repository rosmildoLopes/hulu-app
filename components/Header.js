import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import { 
  HomeIcon,
  CheckBadgeIcon,
  MagnifyingGlassIcon,
  BoltIcon,
  UserIcon,
  Square3Stack3DIcon,

} from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row m-6 justify-between items-center h-auto'>
      <div className='flex justify-evenly flex-grow max-w-2xl mt-4'>
        <HeaderItem title='HOME' Icon={HomeIcon}/>
        <HeaderItem title='TRENDING' Icon={BoltIcon}/>
        <HeaderItem title='VERIFIED' Icon={CheckBadgeIcon}/>
        <HeaderItem title='COLLECTIONS' Icon={Square3Stack3DIcon}/>
        <HeaderItem title='SEARCH' Icon={MagnifyingGlassIcon}/>
        <HeaderItem title='SEARCH' Icon={UserIcon}/>
      </div>
      <Image 
      className='object-contain'
      width={200}
      height={100}
      src='/images/logo.png' alt='hulu logo'/>
    </header>
  )
}

export default Header