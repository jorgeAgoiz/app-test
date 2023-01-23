import { useTranslation } from 'react-i18next'
import errorImage from '../../assets/error-image.jpg'
import style from './styles.module.scss'

const ErrorPage = (): JSX.Element => {
  const [t] = useTranslation('global')

  return (
    <main className={style.container}>
      <h1 className={style.container__title}>{t('error_page.title')}</h1>
      <img className={style.container__picture} src={errorImage} />
    </main>
  )
}

export default ErrorPage
