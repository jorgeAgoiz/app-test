import { BsSuitHeartFill } from 'react-icons/bs'
import style from './_styles.module.scss'

const Footer = (): JSX.Element => {
  return (
    <footer className={style.footer}>
      <p className={style.footer__text}>
        Hecho con{' '}
        <BsSuitHeartFill className={style.footer__icon} title="love" /> por
        Jorge Agoiz
      </p>
    </footer>
  )
}

export default Footer
