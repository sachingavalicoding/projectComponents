import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { ID } from 'appwrite'
const SignUp = () => {
  const { signUp } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSignUp = () => {
    signUp(ID.unique(), email, password, name)
  }
  return (
    <div className='w-[30rem] h[25rem] mx-auto mt-[10rem] border-2 flex items-center justify-center gap-4 flex-col '>
      <h2> Sign up </h2>
      <div>
        <label> Name </label>
        <input
          className='border-2 w-full'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label> Email </label>
        <input
          className='border-2 w-full'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label> Password </label>
        <input
          className='border-2 w-full'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button
        className='border-2 text-blue-500 px-6 py-1 text-xl font-bold  bg-slate-950'
        onClick={handleSignUp}
      >
        {' '}
        Sign In{' '}
      </button>
    </div>
  )
}

export default SignUp
