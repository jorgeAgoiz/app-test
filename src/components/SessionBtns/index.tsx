import { RxAvatar } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
import style from './_styles.module.scss'

const SessionBtns = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className={style.session}>
      <RxAvatar className={style.session__avatar} />
      <button
        className={style.session__button}
        onClick={() => navigate('/signin')}
      >
        Iniciar Sesión
      </button>
    </div>
  )
}

export default SessionBtns
