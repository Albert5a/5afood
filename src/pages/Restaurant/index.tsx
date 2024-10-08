import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Product, Restaurants } from '../Home'
import { CardList } from '../../components/CardList'
const Restaurant = () => {
  const [restaurant, setRestaurant] = useState<Restaurants>()
  const [products, setProducts] = useState<Product[] | undefined>([])

  const location = useLocation()
  const path = location.pathname

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood${path}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [])

  useEffect(() => {
    setProducts(restaurant?.cardapio)
  }, [restaurant])

  return <CardList columns="restaurant" products={products} />
}

export default Restaurant
