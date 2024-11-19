import React from 'react'

import { CardList } from '../../components/CardList'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  if (isLoading) {
    return <h3>Carregando...</h3>
  }

  return <CardList columns="home" restaurants={restaurants} />
}

export default Home
