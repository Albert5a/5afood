import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Product, Restaurants } from '../Home'
import { CardList } from '../../components/CardList'
import { BannerStore, BannerStoreContent, TypeFood } from './styles'
const Restaurant = () => {
  const [restaurant, setRestaurant] = useState<Restaurants>()
  const [products, setProducts] = useState<Product[] | undefined>([])

  const { id } = useParams()

  // const location = useLocation()
  // const path = location.pathname

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [])

  useEffect(() => {
    setProducts(restaurant?.cardapio)
  }, [restaurant])

  return (
    <div>
      <BannerStore style={{ backgroundImage: `url(${restaurant?.capa})` }}>
        <BannerStoreContent>
          <TypeFood>{restaurant?.tipo}</TypeFood>
          <h3>{restaurant?.titulo}</h3>
        </BannerStoreContent>
      </BannerStore>
      <CardList columns="restaurant" products={products} />
    </div>
  )
}

export default Restaurant
