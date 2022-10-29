import { ButtonHTMLAttributes, FC } from 'react'
import { Btn } from './style'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { children, ...rest } = props;

  return (
    <Btn {...rest}>{children}</Btn>
  )
}

export default Button
