import React from 'react'

import { HeaderBar, Subtitle } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import VectorHeader from '../../assets/images/VectorHeader.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${VectorHeader})` }}>
    <Link to="/">
      <img src={logo} alt="5a food" />
    </Link>

    <Subtitle>Viva experiências gastronômicas no conforto da sua casa</Subtitle>
  </HeaderBar>
)

export default Header
