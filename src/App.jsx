import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, SignIn, SignUp } from './pages'
import AuthLayout from './pages/auth/AuthLayout'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<AuthLayout />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='sign-in' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
