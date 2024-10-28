import React from 'react'
import { ButtonProduct, ButtonRestaurant } from './styles'
// import { useLocation } from 'react-router-dom'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  onSubmit?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, onSubmit, children }: Props) => {
  // const location = useLocation()
  // type = location.pathname === '/' ? 'link' : 'button'
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonProduct
        type={type}
        title={title}
        onClick={onClick}
        onSubmit={onSubmit}
      >
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
