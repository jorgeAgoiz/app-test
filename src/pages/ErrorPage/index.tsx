import errorImage from '../../assets/error-image.jpg'
import style from './styles.module.scss'

const ErrorPage = (): JSX.Element => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Algo no ha ido bien...</h1>
      <img className={style.picture} src={errorImage} />
    </div>
  )
}

export default ErrorPage
