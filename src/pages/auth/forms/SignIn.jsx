import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import Heading from '../../../components/ui/Heading'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    signIn(email, password)
  }
  return (
    <div className='w-[300px] h[475px] p-[15px] bg-[#161616]  flex items-center justify-start flex-col  outline-1-[#2b9962] py-4'>
      <Heading color={'text-[#00FF7F]'} text={'Online ClassRoom'} />
      <div className='my-12'>
        <div className='px-1 py-2 '>
          <input
            type='email'
            value={email}
            placeholder='Email'
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='px-1 py-2 border-gray-100'>
          <input
            className=' shadow-sm'
            type='password'
            value={password}
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button
        className='px-9 py-1  bg-transparent font-normal border-2 text-xl rounded-lg text-gray-50  '
        onClick={handleSignIn}
      >
        {' '}
        Login{' '}
      </button>
      ;
      <p className='px-4 py-2 mt-2 text-slate-400'>
        Create an new account{' '}
        <Link className='text-[#00FF7F]' to={'/sign-up'}>
          {' '}
          Sign-Up{' '}
        </Link>
      </p>
    </div>
  )
}

export default SignIn
