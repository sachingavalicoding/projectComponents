import { MdHome } from 'react-icons/md'
import { Link } from 'react-router-dom'

const SmNav = () => {
  return (
    <div className='w-[30rem] border-2 rounded-lg  bg-blue-900 flex items-center justify-around px-3 py-4 gap-10 '>
      <Link to={'/'}>
        <MdHome />
      </Link>
    </div>
  )
}

export default SmNav
