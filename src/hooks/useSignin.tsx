import { useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { UseSignin } from '../types/hooks'
import { emailValidator } from '../utils/emailValidator'

interface State {
  email: string
  password: string
  error: string | null
}

const useSignin = (): UseSignin => {
  const { dispatch } = useAuth()
  const navigate: NavigateFunction = useNavigate()
  const [email, setEmail] = useState<State['email']>('')
  const [password, setPassword] = useState<State['password']>('')
  const [error, setError] = useState<State['error']>(null)

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { name } = evt.currentTarget
    if (name.toLowerCase() === 'email') {
      setEmail(evt.target.value)
    }
    if (name.toLowerCase() === 'password') {
      setPassword(evt.target.value)
    }
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
    if (!emailValidator(email)) {
      return setError('login_form.error')
    }
    setError(null)
    dispatch({
      type: 'login',
      payload: {
        email,
        password,
      },
    })
    sessionStorage.setItem('email', email!)
    sessionStorage.setItem('password', password!)
    return navigate('/posts', { replace: true })
  }

  return {
    handleChange,
    handleSubmit,
    error,
  }
}

export default useSignin
