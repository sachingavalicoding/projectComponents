import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, SignIn, SignUp } from "./pages"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App