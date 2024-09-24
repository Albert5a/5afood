import React from 'react'

import { HeaderBar } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const HeaderStore = () => (
  <HeaderBar>
    <h3>Restaurantes</h3>
    <Link to="/">
      <img src={logo} alt="5a food" />
    </Link>
    <p>0 produto(s) no carrinho</p>
  </HeaderBar>
)

export default HeaderStore
