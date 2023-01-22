import { RxAvatar } from 'react-icons/rx'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { FAKE_AVATAR } from '../../utils/constants'
import style from './_styles.module.scss'

const SessionBtns = (): JSX.Element => {
  const { state, dispatch } = useAuth()
  const navigate: NavigateFunction = useNavigate()

  const handleClick = (): void => {
    if (!state.isLogged) {
      return navigate('/signin', { replace: true })
    } else {
      dispatch({ type: 'logout', payload: {} })
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
        />
      )}
      <button
        className={style.session__button}
        onClick={handleClick}
        title={!state.isLogged ? 'Iniciar Sesión' : 'Cerrar sesión'}
      >
        {!state.isLogged ? 'Iniciar Sesión' : 'Cerrar sesión'}
      </button>
    </div>
  )
}

export default SessionBtns
