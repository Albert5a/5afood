import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Restaurants } from '../../pages/Home'
import logo from '../../assets/images/logo.png'

import { BannerStore, BannerStoreContent, HeaderBar, TypeFood } from './styles'

const HeaderStore = () => {
  const [restaurant, setRestaurant] = useState<Restaurants>()

  const location = useLocation()
  const path = location.pathname

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood${path}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [])

  return (
    <div>
      <HeaderBar>
        <h3>Restaurantes</h3>
        <Link to="/">
          <img src={logo} alt="5a food" />
        </Link>
        <p>0 produto(s) no carrinho</p>
      </HeaderBar>
      <BannerStore>
        <BannerStoreContent>
          <TypeFood>{restaurant?.tipo}</TypeFood>
          <h3>{restaurant?.titulo}</h3>
        </BannerStoreContent>
      </BannerStore>
    </div>
  )
}

export default HeaderStore
