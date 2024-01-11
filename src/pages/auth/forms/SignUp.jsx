import { useState } from 'react'
import { account } from '../../../appwrite/config'
import { ID } from 'appwrite'
const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSignUp = async () => {
    const createAccount = account.create(ID, email, password)
    createAccount.then(res => alert(' Yes + ', res)).catch(e => console.log(e))
  }
  return (
    <div className='bg-black  w-full p-2 h-screen'>
      <form
        className='w-[30rem] bg-slate-100 h-[20rem] flex flex-col items-center justify-center gap-5 px-2 py-3 mx-auto mt-[6rem]'
        action=''
      >
        <div>
          <label>Name : </label>
          <input type='text' placeholder='Name ' />
        </div>
        <div>
          <label>Email: </label>
          <input
            onChange={e => setEmail(e.target.value)}
            type='email'
            placeholder='email '
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type='password'
            placeholder='password '
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSignUp}>Log in </button>
      </form>
    </div>
  )
}

export default SignUp
