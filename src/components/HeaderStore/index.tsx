import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

import { HeaderBar } from './styles'

const HeaderStore = () => {
  return (
    <div>
      <HeaderBar>
        <h3>Restaurantes</h3>
        <Link to="/">
          <img src={logo} alt="5a food" />
        </Link>
        <p>0 produto(s) no carrinho</p>
      </HeaderBar>
    </div>
  )
}

export default HeaderStore
