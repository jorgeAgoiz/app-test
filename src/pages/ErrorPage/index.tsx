import errorImage from '../../assets/error-image.jpg'
import style from './_styles.module.scss'

const ErrorPage = (): JSX.Element => {
  return (
    <main className={style.container}>
      <h1 className={style.container__title}>Algo no ha ido bien...</h1>
      <img className={style.container__picture} src={errorImage} />
    </main>
  )
}

export default ErrorPage
