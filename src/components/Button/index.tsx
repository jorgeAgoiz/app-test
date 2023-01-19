import './styles.scss'

interface Props {
  text: string
  type: 'button' | 'submit' | 'reset' | undefined
}

const Button = ({ text, type }: Props): JSX.Element => {
  return (
    <button className="button-52" type={type}>
      {text}
    </button>
  )
}

export default Button
