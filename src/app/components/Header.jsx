import { 
  HomeIcon,
  CheckBadgeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
  RectangleStackIcon
 } from '@heroicons/react/24/outline'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
const Header = () => {
  return (
    <div className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='HOME' Icon={HomeIcon}/>
        <HeaderItem title='TRENDING' Icon={BoltIcon}/>
        <HeaderItem title='VERIFIED' Icon={CheckBadgeIcon}/>
        <HeaderItem title='COLLECTIONS' Icon={RectangleStackIcon}/>
        <HeaderItem title='SEARCH' Icon={MagnifyingGlassIcon}/>
        <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
      </div>
      <Image 
        className='object-contain pb-4'
        src='https://upload.wikimedia.org/wikipedia/commons/2/20/Hulu_2019.svg'
        height={100}
        width={100}
      />
    </div>
  )
}

export default Header