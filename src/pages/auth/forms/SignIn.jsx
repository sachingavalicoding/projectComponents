import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'

const SignIn = () => {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    signIn(email, password)
  }
  return (
    <div className='w-[30rem] h[25rem] mx-auto mt-[10rem] border-2 flex items-center justify-center gap-4 flex-col'>
      <h2> Sign in </h2>
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
        onClick={handleSignIn}
      >
        {' '}
        Sign In{' '}
      </button>
    </div>
  )
}

export default SignIn
