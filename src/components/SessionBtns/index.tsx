import { useTranslation } from 'react-i18next'
import { RxAvatar } from 'react-icons/rx'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { FAKE_AVATAR } from '../../utils/constants'
import Button from '../Button'
import style from './styles.module.scss'

const SessionBtns = (): JSX.Element => {
  const { state, dispatch } = useAuth()
  const navigate: NavigateFunction = useNavigate()
  const [t] = useTranslation('global')

  const handleClick = (): void => {
    if (!state.isLogged) {
      return navigate('/signin', { replace: true })
    } else {
      dispatch({ type: 'logout', payload: {} })
      sessionStorage.removeItem('email')
      sessionStorage.removeItem('password')
      return navigate('/', { replace: true })
    }
  }

  return (
    <div className={style.session}>
      {!state.isLogged ? (
        <RxAvatar className={style.session__avatar} />
      ) : (
        <img
          src={FAKE_AVATAR}
          title={state.email}
          className={style.session__image}
          aria-label="Foto de perfil"
        />
      )}
      <Button
        variant="session"
        ariaLabel={!state.isLogged ? 'Iniciar Sesión' : 'Cerrar Sesión'}
        handleClick={handleClick}
        text={
          !state.isLogged
            ? t('header.buttons.login')
            : t('header.buttons.logout')
        }
        type="button"
      />
    </div>
  )
}

export default SessionBtns
