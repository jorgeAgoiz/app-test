import Button from '../../components/Button'
import useSignIn from '../../hooks/useSignin'
import style from './_styles.module.scss'

const SignIn = (): JSX.Element => {
  const { handleChange, handleSubmit, error } = useSignIn()

  return (
    <main className={style.main}>
      <h1 className={style.main__title}>Iniciar Sesión</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          name="Email"
          type="text"
          onChange={handleChange}
          required={true}
          placeholder="Email"
          className={style.form__input}
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          required={true}
          placeholder="Contraseña"
          className={style.form__input}
        />
        <Button category="basic" text="Iniciar sesión" type="submit" />
        {error && <p className={style.form__error}>{error}</p>}
      </form>
    </main>
  )
}

export default SignIn
