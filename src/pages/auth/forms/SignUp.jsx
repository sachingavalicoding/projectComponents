import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { ID } from 'appwrite'
import Heading from '../../../components/ui/Heading'
import { Link } from 'react-router-dom'
const SignUp = () => {
  const { signUp } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSignUp = () => {
    signUp(ID.unique(), email, password, name)
  }
  return (
    <div className='w-[300px] h[475px] p-[15px] bg-[#161616]  flex items-center justify-start flex-col  outline-1-[#2b9962] py-2 '>
      <Heading color={'text-[#00FF7F]'} text={'Create Account '} />
      <div className='my-6'>
        <div className='px-1 py-2 '>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Name...'
          />
        </div>
        <div className='px-1 py-2 '>
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Email...'
          />
        </div>
        <div className='px-1 py-2 '>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Passwod...'
          />
        </div>
      </div>
      <button
        className='px-7 py-2  bg-transparent font-normal border-2 text-xl rounded-lg text-gray-50'
        onClick={handleSignUp}
      >
        {' '}
        Register{' '}
      </button>
      ;
      <p className='px-4 py-2 mt-5 text-slate-400'>
        Already have an Account{' '}
        <Link className='text-[#00FF7F]' to={'/'}>
          {' '}
          Sign-In{' '}
        </Link>
      </p>
    </div>
  )
}

export default SignUp
