import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { UseSignIn } from '../types/hooks'
import { emailValidator } from '../utils/emailValidator'

interface State {
  email: string
  password: string
  error: string | null
}

const useSignIn = (): UseSignIn => {
  const { dispatch } = useAuth()
  const navigate: NavigateFunction = useNavigate()
  const [email, setEmail] = useState<State['email']>('')
  const [password, setPassword] = useState<State['password']>('')
  const [error, setError] = useState<State['error']>(null)
  const [t] = useTranslation('global')

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
      return setError(t('login_form.error'))
    }
    setError(null)
    dispatch({
      type: 'login',
      payload: {
        email,
        password,
      },
    })
    return navigate('/posts', { replace: true })
  }

  return {
    handleChange,
    handleSubmit,
    error,
  }
}

export default useSignIn
