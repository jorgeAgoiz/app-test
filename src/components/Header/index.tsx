import { RiFileList2Line, RiHome2Fill } from 'react-icons/ri'
import { Link, Location, useLocation } from 'react-router-dom'
import logoImage from '../../assets/cleverpy-logo.jpg'
import SessionBtns from '../SessionBtns'
import style from './_styles.module.scss'

const Header = (): JSX.Element => {
  const location: Location = useLocation()

  return (
    <header className={style.header}>
      <a href="https://cleverpy.com/">
        <img
          src={logoImage}
          className={style.header__logo}
          title="Ir a la web"
        />
      </a>
      {location.pathname === '/' ? (
        <Link to="/posts">
          <RiFileList2Line className={style.header__icon} title="Posts" />
        </Link>
      ) : (
        <Link to="/">
          <RiHome2Fill className={style.header__icon} title="Inicio" />
        </Link>
      )}
      <SessionBtns />
    </header>
  )
}

export default Header
