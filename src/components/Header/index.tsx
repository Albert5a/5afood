import React from 'react'

import { HeaderBar, Subtitle } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar>
    <Link to="/">
      <img src={logo} alt="5a food" />
    </Link>

    <Subtitle>Viva experiências gastronômicas no conforto da sua casa</Subtitle>
  </HeaderBar>
)

export default Header
