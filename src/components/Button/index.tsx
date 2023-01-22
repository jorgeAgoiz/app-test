import style from './_styles.module.scss'

interface Props {
  text: string
  type: 'button' | 'submit' | 'reset' | undefined
  handleClick?: () => void
}

const Button = ({ text, type, handleClick }: Props): JSX.Element => {
  return (
    <button className={style.button} type={type} onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
