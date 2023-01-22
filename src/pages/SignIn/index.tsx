import Button from '../../components/Button'
import Input from '../../components/Input'
import useSignIn from '../../hooks/useSignin'
import style from './_styles.module.scss'

const SignIn = (): JSX.Element => {
  const { handleChange, handleSubmit, error } = useSignIn()

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
        {error && <p className={style.form__error}>{error}</p>}
      </form>
    </main>
  )
}

export default SignIn
