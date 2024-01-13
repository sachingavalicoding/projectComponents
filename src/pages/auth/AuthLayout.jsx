import SignIn from './forms/SignIn'
import SignUp from './forms/SignUp'

const AuthLayout = () => {
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center gap-4 '>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default AuthLayout
