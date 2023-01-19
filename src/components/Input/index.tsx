import style from './styles.module.scss'

interface Props {
  name: string
  type: string
  defaultValue?: string | number
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
  required: boolean
}

const Input = ({
  name,
  type,
  defaultValue,
  onChange,
  required,
}: Props): JSX.Element => {
  return (
    <input
      className={style.input}
      name={name}
      type={type}
      defaultValue={defaultValue}
      onChange={onChange}
      required={required}
    />
  )
}

export default Input
