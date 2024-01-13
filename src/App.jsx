import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, SignIn, SignUp } from './pages'
import AuthLayout from './pages/auth/AuthLayout'
import { AuthProvider } from './context/AuthContext'
import Profile from './components/profile/Profile'
const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<AuthLayout />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
