import { RiHome2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import logoImage from '../../assets/cleverpy-logo.jpg'
import SessionBtns from '../SessionBtns'
import style from './_styles.module.scss'

const Header = (): JSX.Element => {
  return (
    <header className={style.header}>
      <a href="https://cleverpy.com/">
        <img
          src={logoImage}
          className={style.header__logo}
          title="Ir a la web"
        />
      </a>
      <Link to="/">
        <RiHome2Fill className={style.header__icon} title="Inicio" />
      </Link>
      <SessionBtns />
    </header>
  )
}

export default Header
