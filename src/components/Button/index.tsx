import classNames from 'classnames/bind'
import { ReactNode } from 'react'
import style from './styles.module.scss'
let cx = classNames.bind(style)

interface Props {
  text: string
  type: 'button' | 'submit' | 'reset' | undefined
  handleClick?: () => void
  disabled?: boolean
  variant: 'session' | 'basic' | 'pagination'
  children?: ReactNode
  ariaLabel?: string
}

const Button = ({
  text,
  type = 'button',
  handleClick,
  disabled = false,
  variant,
  children,
  ariaLabel,
}: Props): JSX.Element => {
  const className: string = cx({
    session: variant === 'session',
    basic: variant === 'basic',
    pagination: variant === 'pagination',
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
