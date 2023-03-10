import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'
import useSignin from '../../hooks/useSignin'
import style from './styles.module.scss'

const SignIn = (): JSX.Element => {
  const { handleChange, handleSubmit, error } = useSignin()
  const [t] = useTranslation('global')

  return (
    <main className={style.main}>
      <h1 className={style.main__title}>{t('login_form.title')}</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          name="Email"
          type="text"
          onChange={handleChange}
          required={true}
          placeholder={t('login_form.placeholders.email')!}
          className={style.form__input}
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          required={true}
          placeholder={t('login_form.placeholders.password')!}
          className={style.form__input}
        />
        <Button
          ariaLabel="Entrar"
          variant="basic"
          text={t('login_form.button')}
          type="submit"
        />
        {error && <p className={style.form__error}>{t(error)}</p>}
      </form>
    </main>
  )
}

export default SignIn
