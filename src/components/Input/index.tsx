import style from './_styles.module.scss'

interface Props {
  name: string
  type: string
  defaultValue?: string | number
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
  required: boolean
  placeholder?: string
}

const Input = ({
  name,
  type,
  defaultValue,
  onChange,
  required,
  placeholder,
}: Props): JSX.Element => {
  return (
    <input
      className={style.input}
      name={name}
      type={type}
      defaultValue={defaultValue}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
    />
  )
}

export default Input
