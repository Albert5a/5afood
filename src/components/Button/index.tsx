import React from 'react'
import { ButtonContainer, ButtonLink } from './styles'
import { useLocation } from 'react-router-dom'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  const location = useLocation();
  type = location.pathname === '/' ? 'link' : 'button';
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink type='link' to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
