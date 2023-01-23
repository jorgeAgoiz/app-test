import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'
import useSignIn from '../../hooks/useSignin'
import style from './styles.module.scss'

const SignIn = (): JSX.Element => {
  const { handleChange, handleSubmit, error } = useSignIn()
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
        <Button category="basic" text={t('login_form.button')} type="submit" />
        {error && <p className={style.form__error}>{error}</p>}
      </form>
    </main>
  )
}

export default SignIn
