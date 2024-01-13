import { MdHome, MdOutlineSearch } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'
import { BsPlusSquareFill, BsImageFill } from 'react-icons/bs'

import { Link } from 'react-router-dom'

const SmNav = () => {
  const navLinks = [
    {
      to: '/',
      icon: <MdHome />
    },
    {
      to: '/',
      icon: <MdOutlineSearch />
    },
    {
      to: '/',
      icon: <BsImageFill />
    },
    {
      to: '/',
      icon: <BsPlusSquareFill />
    },
    {
      to: '/profile',
      icon: <FaUserCircle />
    }
  ]
  return (
    <div className='w-full px-3 py-2 flex items-center justify-center fixed bottom-0'>
      <nav className='w-[20rem] border-2 rounded-3xl  bg-blue-900 flex items-center justify-center px-3 py-4 gap-10 '>
        {navLinks.map(({ icon, to }) => {
          return (
            <Link key={Math.random() * 100} to={to}>
              <p className='text-2xl text-white font-bold'> {icon} </p>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default SmNav
