import style from './_styles.module.scss'

interface Props {
  text: string
  type: 'button' | 'submit' | 'reset' | undefined
  handleClick?: () => void
  disabled?: boolean
}

const Button = ({
  text,
  type = 'button',
  handleClick,
  disabled = false,
}: Props): JSX.Element => {
  return (
    <button
      className={style.button}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
