import errorImage from '../../assets/not-found-image.jpg'
import style from './_styles.module.scss'

const NotFound = (): JSX.Element => {
  return (
    <main className={style.container}>
      <h1 className={style.container__title}>Página no encontrada...</h1>
      <img className={style.container__picture} src={errorImage} />
    </main>
  )
}

export default NotFound
