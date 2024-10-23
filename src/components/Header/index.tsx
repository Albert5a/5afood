import React from 'react'

import { HeaderBar, Subtitle } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import VectorHeader from '../../assets/images/VectorHeader.png'
import { Logo } from '../../styles'

const Header = () => (
  <HeaderBar id='header' style={{ backgroundImage: `url(${VectorHeader})` }}>
    <Link to="/">
      <Logo src={logo} alt="5a food" />
    </Link>

    <Subtitle>Viva experiências gastronômicas no conforto da sua casa</Subtitle>
  </HeaderBar>
)

export default Header
