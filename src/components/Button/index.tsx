import React from 'react'
import {
  ButtonProduct,
  ButtonRestaurant
} from './styles'
// import { useLocation } from 'react-router-dom'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  // const location = useLocation()
  // type = location.pathname === '/' ? 'link' : 'button'
  if (type === 'button') {
    return (
      <ButtonProduct type={type} title={title} onClick={onClick}>
        {children}
      </ButtonProduct>
    )
  }

  return (
    <ButtonRestaurant type={type} to={to as string} title={title}>
      {children}
    </ButtonRestaurant>
  )
}

export default Button
