import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { useAuth } from './context/AuthContext'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Posts from './pages/Posts'
import SignIn from './pages/SignIn'

const App = (): JSX.Element => {
  const { state, dispatch } = useAuth()

  useEffect(() => {
    const email: string | null = sessionStorage.getItem('email')
    const password: string | null = sessionStorage.getItem('password')

    if (!state.isLogged && email && password) {
      dispatch({
        type: 'login',
        payload: {
          email,
          password,
        },
      })
    }
  }, [state])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signin"
          element={!state.isLogged ? <SignIn /> : <Navigate to="/" replace />}
        />
        <Route path="/posts" element={state.isLogged ? <Posts /> : <Home />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
