import classNames from 'classnames/bind'
import { ReactNode } from 'react'
import style from './styles.module.scss'
let cx = classNames.bind(style)

interface Props {
  text: string
  type: 'button' | 'submit' | 'reset' | undefined
  handleClick?: () => void
  disabled?: boolean
  category: 'session' | 'basic' | 'pagination'
  children?: ReactNode
  ariaLabel?: string
}

const Button = ({
  text,
  type = 'button',
  handleClick,
  disabled = false,
  category,
  children,
  ariaLabel,
}: Props): JSX.Element => {
  const className: string = cx({
    session: category === 'session',
    basic: category === 'basic',
    pagination: category === 'pagination',
  })

  return (
    <button
      className={className}
      type={type}
      onClick={handleClick}
      disabled={disabled}
      title={text}
      aria-label={ariaLabel}
    >
      {!children ? text : children}
    </button>
  )
}

export default Button
