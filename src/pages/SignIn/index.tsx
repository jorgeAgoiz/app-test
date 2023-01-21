import { useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { useAuth } from '../../context/AuthContext'
import { emailValidator } from '../../utils/emailValidator'
import style from './_styles.module.scss'

interface State {
  email: string
  password: string
  error: string | null
}

const SignIn = (): JSX.Element => {
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
      return setError('Introduzca un correo electronico válido')
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

  return (
    <main className={style.main}>
      <h1 className={style.main__title}>Iniciar Sesión</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <Input
          name="Email"
          type="text"
          onChange={handleChange}
          required={true}
          placeholder="Email"
        />
        <Input
          name="password"
          type="password"
          onChange={handleChange}
          required={true}
          placeholder="Contraseña"
        />
        <Button text="Iniciar sesión" type="submit" />
      </form>
      {error}
      {/* Estilar esto un poco mejor */}
    </main>
  )
}

export default SignIn
