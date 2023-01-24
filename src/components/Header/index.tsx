import { useTranslation } from 'react-i18next'
import { RiFileList2Line, RiHome2Fill } from 'react-icons/ri'
import { Link, Location, useLocation } from 'react-router-dom'
import logoImage from '../../assets/images/cleverpy-logo.jpg'
import { useAuth } from '../../context/AuthContext'
import SessionBtns from '../SessionBtns'
import style from './styles.module.scss'

const Header = (): JSX.Element => {
  const location: Location = useLocation()
  const { state } = useAuth()
  const [t] = useTranslation('global')

  return (
    <header className={style.header}>
      <img
        src={logoImage}
        className={style.header__logo}
        title={t('header.titles.logo')!}
        alt="Logo Image"
      />
      {location.pathname === '/' && state.isLogged ? (
        <Link to="/posts">
          <RiFileList2Line
            className={style.header__icon}
            title={t('header.titles.posts')!}
          />
        </Link>
      ) : (
        <Link to="/">
          <RiHome2Fill
            className={style.header__icon}
            title={t('header.titles.home')!}
          />
        </Link>
      )}
      <SessionBtns />
    </header>
  )
}

export default Header
