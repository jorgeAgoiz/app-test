import { Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<SignIn />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
