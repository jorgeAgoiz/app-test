import { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import style from './_styles.module.scss'

interface State {
  email: string
  password: string
}

const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState<State['email']>('')
  const [password, setPassword] = useState<State['password']>('')

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    console.log({ email, password })
  }

  return (
    <main className={style.main}>
      <h1 className={style.main__title}>Iniciar Sesión</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <Input
          name="Email"
          type="text"
          onChange={(evt) => setEmail(evt.target.value)}
          required={true}
          placeholder="Email"
        />
        <Input
          name="Contraseña"
          type="password"
          onChange={(evt) => setPassword(evt.target.value)}
          required={true}
          placeholder="Contraseña"
        />
        <Button text="Iniciar sesión" type="submit" />
      </form>
    </main>
  )
}

export default SignIn
